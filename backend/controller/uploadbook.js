// controllers/uploadBook.js
const BookModel = require('../models/BookModel');
const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

const uploadBook = async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().required().messages({ 'string.empty': 'Title is required.' }),
        author: Joi.string().required().messages({ 'string.empty': 'Author is required.' }),
        coverImage: Joi.string().required().messages({ 'string.empty': 'Cover image URL is required.' }),
        genre: Joi.string().required().messages({ 'string.empty': 'Genre is required.' }),
        description: Joi.string().required().messages({ 'string.empty': 'Description is required.' }),
        price: Joi.number().required().messages({ 'number.base': 'Price must be a number.', 'any.required': 'Price is required.' }),
        pdfUrl: Joi.string().uri().required().messages({ 'string.uri': 'PDF URL must be a valid URL.', 'any.required': 'PDF URL is required.' }),
        available: Joi.boolean().default(true)
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Validation errors",
            errors: error.details,
            error: true
        });
    }

    try {
        const { title, author, coverImage, genre, description, price, pdfUrl, available } = req.body;

        const newBook = new BookModel({
            uuid: uuidv4(),
            title,
            author,
            coverImage,
            genre,
            description,
            price,
            pdfUrl,
            available
        });

        const bookSave = await newBook.save();
        return res.status(201).json({
            message: "Book uploaded successfully",
            data: bookSave,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = uploadBook;
