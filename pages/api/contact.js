// pages/api/contact.js
import dbConnect from '../../lib/dbConnect';
import Ticket from '../../models/Ticket';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, subject, message } = req.body;

    // --- 1. Validate Input ---
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // --- 2. Connect to Database ---
    await dbConnect();

    // --- 3. Create New Ticket ---
    const ticket = new Ticket({
      name,
      email,
      subject,
      message,
    });

    await ticket.save();

    // --- 4. Respond Successfully ---
    return res.status(201).json({
      message: 'Your ticket has been submitted. We will get back to you soon!',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    // Check for Mongoose validation error
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error.' });
  }
}