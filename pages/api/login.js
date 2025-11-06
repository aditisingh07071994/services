// pages/api/login.js
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('Please define the JWT_SECRET environment variable inside .env.local');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    await dbConnect();

    // Find user and ALSO get their role
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password +role');

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // --- THIS IS THE CHANGE ---
    // Add the user's role to the token payload
    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role, // <-- ADD THIS LINE
    };
    // --- END CHANGE ---

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1d',
    });

    const cookie = serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24, 
      sameSite: 'strict',   
      path: '/',            
    });

    res.setHeader('Set-Cookie', cookie);

    return res.status(200).json({
      message: 'Logged in successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // Also return the role to the login page
      },
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}