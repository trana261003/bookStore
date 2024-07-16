const mongoose = require('mongoose');

// Define the cart item schema
const cartItemSchema = new mongoose.Schema({
  bookId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book', 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true,
    min: 1  // Ensuring quantity is at least 1
  },
  price: { 
    type: Number, 
    required: true,
    min: 0  // Ensuring price is non-negative
  }
});

// Define the shopping cart schema
const shoppingCartSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  cartItems: [cartItemSchema]
}, {
  timestamps: true  // Automatically manage `createdAt` and `updatedAt`
});

// Export the shopping cart model
module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
