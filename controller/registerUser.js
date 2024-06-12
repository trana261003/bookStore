const bcryptjs = require('bcryptjs');
const UserModel = require('../models/UserModel');
const { body, validationResult } = require('express-validator');

const registerUser = [
    // Validate and sanitize inputs
    body('username').trim().isLength({ min: 1 }).escape().withMessage('Username is required.'),
    body('email').isEmail().normalizeEmail().withMessage('Email is not valid.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
    body('name').trim().escape(),
    body('contactNo').trim().escape(),
    body('age').isNumeric().withMessage('Age must be a number.'),
    body('city').trim().escape(),
    body('state').trim().escape(),
    body('country').trim().escape(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation errors",
                errors: errors.array(),
                error: true
            });
        }

        try {
            const { username, email, password, name, contactNo, age, city, state, country } = req.body;

            let user = await UserModel.findOne({ email });

            if (user) {
                if (!user.isActive) {
                    user.isActive = true;
                    await user.save();
                    return res.status(200).json({
                        message: "User activated successfully",
                        data: user,
                        success: true
                    });
                } else {
                    return res.status(400).json({
                        message: "User already exists",
                        error: true
                    });
                }
            }

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);

            const payload = {
                username,
                email,
                password: hashedPassword,
                name,
                contactNo,
                age,
                city,
                state,
                country,
                isActive: true // New users are active by default
            };

            user = new UserModel(payload);
            const userSave = await user.save();

            return res.status(201).json({
                message: "User created successfully",
                data: userSave,
                success: true
            });

        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error: true
            });
        }
    }
];

module.exports = registerUser;
