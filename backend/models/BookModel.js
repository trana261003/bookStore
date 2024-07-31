// // models/BookModel.js
// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//  uuid: { type: String, required: true, unique: true },
//  title: { type: String, required: true },
//  author: { type: String, required: true },
//  coverImage: { type: String, required: true },
//  genre: { type: String, required: true },
//  description: { type: String, required: true },
//  price: { type: Number, required: true },
//  pdfUrl: { type: String, required: true },
// available: { type: Boolean, default: true },
//  createdAt: { type: Date, default: Date.now },
 
// });

// module.exports = mongoose.model('Book', bookSchema);







// models/BookModel.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
 uuid: { type: String, required: true, unique: true },
 title: { type: String, required: true },
 author: { type: String, required: true },
 coverImage: { type: String, required: true },
 genre: { type: String, required: true },
 description: { type: String, required: true },
 price: { type: Number, required: true },
 quantity: { type: Number, required: true },
 pdfUrl: { type: String, required: true },
available: { type: Boolean, default: true },
 createdAt: { type: Date, default: Date.now },
 
});

module.exports = mongoose.model('Book', bookSchema);


