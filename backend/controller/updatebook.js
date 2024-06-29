const BookModel = require('../models/BookModel');
const Joi = require('joi');

const UpdateBook = async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().optional(),
    author: Joi.string().optional(),
    coverImage: Joi.string().optional(),
    genre: Joi.string().optional(),
    description: Joi.string().optional(),
    price: Joi.number().optional().messages({ 'number.base': 'Price must be a number.' }),
    pdfUrl: Joi.string().uri().optional().messages({ 'string.uri': 'PDF URL must be a valid URL.' }),
    available: Joi.boolean().optional()
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
    const book = await BookModel.findOneAndUpdate({ uuid: req.params.uuid }, req.body, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).json({ message: "Book not found", error: true });
    }

    res.status(200).json({
      message: "Book updated successfully",
      data: book,
      success: true
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error: true });
  }
};

module.exports = UpdateBook;
