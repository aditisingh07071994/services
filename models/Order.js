// models/Order.js
import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  // Link to the user who made the order
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // The services in the cart
  items: [
    {
      id: String,
      title: String,
      price: Number,
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'expired', 'error'],
    default: 'pending',
  },
  // The unique BEP-20 address generated for this order
  paymentAddress: {
    type: String,
    required: true,
    unique: true,
  },
  // The ENCRYPTED private key for the paymentAddress
  paymentPrivateKey: {
    type: String,
    required: true,
    select: false, // Never send this in a query by default
  },
  // 30-minute payment window
  expiresAt: {
    type: Date,
    required: true,
  },
  // To track if funds have been swept to the cold wallet
  isSwept: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)