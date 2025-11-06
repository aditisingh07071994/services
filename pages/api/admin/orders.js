// pages/api/admin/orders.js
import dbConnect from '../../../lib/dbConnect';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }
  
  // NOTE: We will secure this endpoint in Step 5
  
  try {
    await dbConnect();
    
    // Fetch all orders, newest first
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .populate('userId', 'name email'); // Also get user name/email

    res.status(200).json({ orders });

  } catch (error) {
    console.error('Admin order fetch error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}