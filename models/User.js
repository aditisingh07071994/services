// models/User.js
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true, 
    match: [/.+\@.+\..+/, 'Please provide a valid email address.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    select: false, 
  },
  // --- ADD THIS SECTION ---
  role: {
    type: String,
    enum: ['user', 'admin'], // Only 'user' or 'admin' are allowed
    default: 'user', // Everyone is a 'user' by default
  },
  // --- END ADD ---
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)