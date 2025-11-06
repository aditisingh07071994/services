// pages/api/register.js
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, password, captcha } = req.body;

    // --- 1. Validate Input ---
    if (!name || !email || !password || !captcha) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // --- 2. CAPTCHA Check ---
    const expectedAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captcha.answer, 10) !== expectedAnswer) {
      return res.status(400).json({ message: 'Incorrect CAPTCHA answer.' });
    }

    // --- 3. Connect to Database ---
    await dbConnect();

    // --- 4. Check for Existing User ---
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use.' }); // 409 Conflict
    }

    // --- 5. Hash Password ---
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // --- 6. Create New User ---
    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await user.save();

    // --- 7. Respond Successfully ---
    // Do not send the password back, even the hashed one
    return res.status(201).json({ 
      message: 'User created successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    // Handle potential database or bcrypt errors
    return res.status(500).json({ message: 'Internal server error.' });
  }
}