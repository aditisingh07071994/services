// pages/api/order-status.js
import dbConnect from '../../lib/dbConnect';
import Order from '../../models/Order';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('Please define the JWT_SECRET environment variable inside .env.local');
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // --- 1. Get Order ID from query string ---
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Order ID is required.' });
    }

    // --- 2. Get User from cookie ---
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: 'Not authenticated.' });
    }
    
    const payload = jwt.verify(token, JWT_SECRET);
    const userId = payload.id;

    // --- 3. Connect to DB and find order ---
    await dbConnect();
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // --- 4. Security Check ---
    // Make sure the logged-in user is the one who created this order
    if (order.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Forbidden: You do not have access to this order.' });
    }

    // --- 5. Return the status ---
    // The checkout page is waiting for this JSON response
    return res.status(200).json({ 
      status: order.paymentStatus 
    });

  } catch (error) {
    console.error('Order status check error:', error);
    
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    // This error happens if the 'id' in the URL is not a valid MongoDB ObjectId format
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid Order ID format.' });
    }
    
    return res.status(500).json({ message: 'Internal server error.' });
  }
}