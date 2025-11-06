// pages/api/admin/tickets.js
import dbConnect from '../../../lib/dbConnect';
import Ticket from '../../../models/Ticket';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }
  
  // NOTE: We will secure this endpoint in Step 5

  try {
    await dbConnect();
    
    // Fetch all tickets, newest first
    const tickets = await Ticket.find({}).sort({ createdAt: -1 });

    res.status(200).json({ tickets });

  } catch (error) {
    console.error('Admin ticket fetch error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}