const jwt = require('jsonwebtoken');
const Joi = require('joi');
const Order = require('../models/OrderModel');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY; // Ensure the environment variable name is correct

// Joi schema for order status update
const orderStatusSchema = Joi.object({
  uuid: Joi.string().required(),
  orderStatus: Joi.string().required()
});

// Joi schema for payment status update
const paymentStatusSchema = Joi.object({
  uuid: Joi.string().required(),
  paymentStatus: Joi.string().required()
});

// Function to update the order status
const updateOrderStatus = async (req, res) => {
  // Validate the request body using Joi
  const { error, value } = orderStatusSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message, error: true });
  }

  const { uuid, orderStatus } = value;

  try {
    const result = await Order.updateOne({ uuid }, { $set: { orderStatus } });

    if (result.nModified === 0) {
      return res.status(404).json({ message: 'Order not found', error: true });
    }

    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the order status', error });
  }
};

// Function to update the payment status
const updatePaymentStatus = async (req, res) => {
  // Validate the request body using Joi
  const { error, value } = paymentStatusSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message, error: true });
  }

  const { uuid, paymentStatus } = value;

  try {
    const result = await Order.updateOne({ uuid }, { $set: { paymentStatus } });

    if (result.nModified === 0) {
      return res.status(404).json({ message: 'Order not found', error: true });
    }

    res.status(200).json({ message: 'Payment status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the payment status', error });
  }
};

module.exports = { updateOrderStatus, updatePaymentStatus };