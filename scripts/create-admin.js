// scripts/create-admin.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dbConnect from '../lib/dbConnect.js';
import User from '../models/User.js';

const SALT_ROUNDS = 10;

// --- Read arguments from command line ---
const args = process.argv.slice(2); // Get all arguments after the script name

if (args.length < 3) {
  console.error('Error: Missing required arguments.');
  console.log('Usage: npm run createadmin "Your Name" "your@email.com" "yourpassword"');
  process.exit(1);
}

// Assume last two args are email and password
// This allows the name to contain spaces
const password = args.pop();
const email = args.pop();
const name = args.join(' '); // Re-join the remaining args as the name

async function createAdmin() {
  console.log('Connecting to database...');
  try {
    await dbConnect();
    console.log('Database connected.');

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.error(`Error: User already exists with email: ${email}`);
      mongoose.connection.close();
      process.exit(1);
    }

    // Hash password
    console.log('Hashing password...');
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create new admin user
    console.log('Creating admin user...');
    const adminUser = new User({
      name: name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: 'admin', // <-- Set role to admin
      createdAt: new Date()
    });

    await adminUser.save();

    console.log('✅ Admin user created successfully!');
    console.log(`   Name: ${adminUser.name}`);
    console.log(`   Email: ${adminUser.email}`);
    console.log(`   Role: ${adminUser.role}`);

  } catch (error) {
    console.error('Error creating admin user:', error.message);
  } finally {
    // Ensure the connection is closed
    await mongoose.connection.close();
  }
}

createAdmin();