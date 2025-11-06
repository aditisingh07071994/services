// pages/api/me.js
import jwt from 'jsonwebtoken';
import { parse } from 'cookie'; // Import the cookie parser
import User from '../../models/User';
import dbConnect from '../../lib/dbConnect';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // --- 1. Get token from cookies ---
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    // --- 2. Verify Token ---
    const payload = jwt.verify(token, JWT_SECRET);

    // --- 3. (Optional but good) Check if user still exists ---
    // This handles cases where a user was deleted but the token is still valid
    await dbConnect();
    const user = await User.findById(payload.id).lean(); // .lean() for a fast, plain object
    
    if (!user) {
      // In this case, we should also clear the invalid cookie
      // (We'll add this logic to the logout endpoint)
      return res.status(401).json({ message: 'User not found, token invalid.' });
    }

    // --- 4. Return User Data ---
    // Send back the same data we put in the token payload
    res.status(200).json({ 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      } 
    });

  } catch (error) {
    // This catches errors from jwt.verify (e.g., expired token, invalid signature)
    console.error('API /me error:', error);
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}