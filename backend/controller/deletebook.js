const BookModel = require('../models/BookModel');

const DeleteBook = async (req, res) => {
    try {
        const book = await BookModel.findOneAndDelete({ uuid: req.params.uuid });
        if (!book) {
            return res.status(404).json({ message: "Book not found", error: true });
        }
        res.status(200).json({
            message: "Book deleted successfully",
            success: true
        });
    } catch (error) {
        res.status(500).json({ message: error.message, error: true });
    }
};

module.exports = DeleteBook;
