const jwt = require('jsonwebtoken');
const Book = require('../models/BookModel');
const Cart = require('../models/ShopingCartModel');
const User = require('../models/UserModel'); // Assuming you have a User model

const addToCart = async (req, res) => {
  try {
    const { uuid } = req.body;
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send('Access Denied: No Token Provided!');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure you have your JWT_SECRET in your environment variables
    const userId = decoded.id;

    const book = await Book.findOne({ uuid: uuid });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, cartItems: [] });
    }

    const existingCartItem = cart.cartItems.find(item => item.bookId.equals(book._id));

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        bookId: book.uuid,
        quantity: 1,
        price: book.price // Assuming the book model has a price field
      });
    }

    await cart.save();

    res.status(200).json({ message: 'Book added to cart', cart });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

module.exports = addToCart;
