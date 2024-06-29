const BookModel = require('../models/BookModel');

const getBookById = async (req, res) => {
    const { uuid } = req.params;

    try {
        const book = await BookModel.findOne({ uuid });

        if (!book) {
            return res.status(404).json({ message: "Book not found", error: true });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message, error: true });
    }
};

module.exports = getBookById;
