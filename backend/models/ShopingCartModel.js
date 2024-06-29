const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  bookId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book', 
    required: true 
},
  quantity: { 
    type: Number, 
    required: true 
},
  price: { 
    type: Number, 
    required: true 
}
});

const shoppingCartSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  cartItems: [cartItemSchema],

  createdAt: { 
    type: Date, 
    default: Date.now 
},
  updatedAt: { 
    type: Date, 
    default: Date.now 
}

});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
