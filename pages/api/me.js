// pages/api/me.js
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import User from '../../models/User';
import dbConnect from '../../lib/dbConnect';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const payload = jwt.verify(token, JWT_SECRET);

    await dbConnect();
    // Find the user AND their role
    const user = await User.findById(payload.id).select('+role').lean();
    
    if (!user) {
      return res.status(401).json({ message: 'User not found, token invalid.' });
    }

    // --- THIS IS THE FIX ---
    // We must return the 'role' here so the frontend knows
    res.status(200).json({ 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role // <-- ADD THIS LINE
      } 
    });
    // --- END FIX ---

  } catch (error) {
    console.error('API /me error:', error);
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}