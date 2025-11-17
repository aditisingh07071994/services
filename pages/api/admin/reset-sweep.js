// pages/api/admin/reset-sweep.js
import dbConnect from '../../../lib/dbConnect';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  // Your middleware.js file has ALREADY verified this is an admin

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { orderId } = req.body;
  if (!orderId) {
    return res.status(400).json({ message: 'Order ID is required.' });
  }

  try {
    await dbConnect();
    
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // Reset the sweep flag
    order.isSwept = false;
    order.paymentStatus = 'paid'; // Ensure it's marked as 'paid'
    await order.save();

    return res.status(200).json({ message: 'Sweep has been reset. The sweeper will try again on its next cycle.' });

  } catch (error) {
    console.error('Sweep reset error:', error);
    return res.status(500).json({ message: 'Failed to reset sweep.' });
  }
}