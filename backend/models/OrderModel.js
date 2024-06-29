const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({

  bookId: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Book',
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

const orderSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
    },

  orderItems: [orderItemSchema],

  totalPrice: {
    type: Number, 
    required: true 
    },

  shippingAddress: { 
    type: String, 
    required: true 
    },

  orderStatus: {
     type: String, 
     enum: ['pending', 'shipped', 'delivered', 'cancelled'], 
     default: 'pending' 
    },
    
    paymentStatus: { 
        type: String, 
        enum: ['paid', 'unpaid'], 
        default: 'unpaid' 
    },

  createdAt: { 
    type: Date, 
    default: Date.now 
    },

  updatedAt: { 
    type: Date, 
    default: Date.now 
    }
});

module.exports = mongoose.model('Order', orderSchema);
