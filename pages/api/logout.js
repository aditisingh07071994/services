// pages/api/logout.js
import { serialize } from 'cookie';

export default async function handler(req, res) {
  // We use POST for logout as it's an action that changes state
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // --- 1. Create an expired cookie ---
  // To "delete" a cookie, you set it again with the same name
  // and options, but set its maxAge to 0 or a past date.
  const cookie = serialize('auth_token', '', { // Set value to empty
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: -1, // Expire immediately
    sameSite: 'strict',
    path: '/',
  });

  // --- 2. Set the cookie header ---
  res.setHeader('Set-Cookie', cookie);

  // --- 3. Respond with success ---
  res.status(200).json({ message: 'Logged out successfully.' });
}