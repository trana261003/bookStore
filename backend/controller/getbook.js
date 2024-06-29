const BookModel = require('../models/BookModel');

const getBooks = async (req, res) => {
    try {
        const books = await BookModel.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message, error: true });
    }
};

module.exports = getBooks;
