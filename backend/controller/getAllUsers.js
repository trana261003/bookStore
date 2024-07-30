const User = require('../models/UserModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ isActive: true });

        if (users.length === 0) {
            return res.status(404).json({ message: 'No registered users found', error: true });
        }

        res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

module.exports = {
    getAllUsers
};
