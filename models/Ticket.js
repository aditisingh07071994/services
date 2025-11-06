// models/Ticket.js
import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    match: [/.+\@.+\..+/, 'Please provide a valid email address.'],
  },
  subject: {
    type: String,
    required: [true, 'Please provide a subject.'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  status: {
    type: String,
    enum: ['open', 'in_progress', 'closed'],
    default: 'open',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);