// pages/api/orders.js
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import { ethers } from 'ethers';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import dbConnect from '../../lib/dbConnect';
import Order from '../../models/Order';
import User from '../../models/User'; // We need this to verify the user
import { SERVICES } from '../../lib/services'; // To verify prices

const JWT_SECRET = process.env.JWT_SECRET;
const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET;
const PAYMENT_WINDOW_MINUTES = 30; // 30-minute payment window

if (!JWT_SECRET || !ENCRYPTION_SECRET) {
  throw new Error('Missing JWT_SECRET or ENCRYPTION_SECRET in .env.local');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // --- 1. Get User from Cookie ---
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: 'Not authenticated. Please log in.' });
    }
    
    const payload = jwt.verify(token, JWT_SECRET);
    const userId = payload.id;

    await dbConnect();
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    // --- 2. Get Cart from Request Body ---
    const { cart } = req.body; // 'cart' is an array of service objects
    if (!cart || cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty.' });
    }

    // --- 3. Server-Side Price Validation ---
    // (Prevents client-side price tampering)
    let totalAmount = 0;
    const orderItems = [];
    
    for (const item of cart) {
      const service = SERVICES.find(s => s.id === item.id);
      if (!service) {
        return res.status(400).json({ message: `Invalid service ID: ${item.id}` });
      }
      totalAmount += service.price;
      orderItems.push({
        id: service.id,
        title: service.title,
        price: service.price,
      });
    }

    // --- 4. Generate New Wallet ---
    const wallet = ethers.Wallet.createRandom();
    const paymentAddress = wallet.address;
    const privateKey = wallet.privateKey;

    // --- 5. Encrypt Private Key ---
    const encryptedPrivateKey = AES.encrypt(privateKey, ENCRYPTION_SECRET).toString();
    
    // --- 6. Create Order in Database ---
    const expiresAt = new Date(Date.now() + PAYMENT_WINDOW_MINUTES * 60 * 1000);

    const order = new Order({
      userId: userId,
      items: orderItems,
      totalAmount: totalAmount,
      paymentStatus: 'pending',
      paymentAddress: paymentAddress,
      paymentPrivateKey: encryptedPrivateKey, // Save the ENCRYPTED key
      expiresAt: expiresAt,
      isSwept: false,
    });

    await order.save();

    // --- 7. Respond to Client ---
    // Send back the data the UI needs to display the payment screen
    return res.status(201).json({
      message: 'Order created successfully.',
      order: {
        orderId: order._id,
        paymentAddress: order.paymentAddress,
        totalAmount: order.totalAmount,
        expiresAt: order.expiresAt,
      }
    });

  } catch (error) {
    console.error('Order creation error:', error);
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    return res.status(500).json({ message: 'Internal server error.' });
  }
}