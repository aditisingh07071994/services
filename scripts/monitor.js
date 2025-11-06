import mongoose from 'mongoose';
import { ethers } from 'ethers';
import dbConnect from '../lib/dbConnect.js'; // Note: .js extension may be needed
import Order from '../models/Order.js';

// --- Configuration ---
// Load environment variables


const RPC_PROVIDER_URL = process.env.RPC_PROVIDER_URL;
const USDT_CONTRACT_ADDRESS = process.env.USDT_CONTRACT_ADDRESS;
const MONITOR_INTERVAL_MS = 5000; // 5 seconds
const PAYMENT_TOLERANCE = 3; // 3 USDT tolerance

// Minimal ERC20 ABI to check balance
const ERC20_ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

// --- Helper Functions ---

/**
 * Checks the USDT balance of a given wallet address.
 * @param {ethers.Provider} provider - Ethers JSON RPC provider.
 * @param {string} walletAddress - The address to check.
 * @returns {Promise<number>} - The balance in human-readable format (e.g., 10.5)
 */
async function getUsdtBalance(provider, walletAddress) {
  try {
    const tokenContract = new ethers.Contract(USDT_CONTRACT_ADDRESS, ERC20_ABI, provider);
    
    // We can cache decimals, but for simplicity, we fetch it
    const [rawBalance, decimals] = await Promise.all([
      tokenContract.balanceOf(walletAddress),
      tokenContract.decimals()
    ]);

    // Use BigInt for parsing, convert to Number for comparison
    const balance = Number(ethers.formatUnits(rawBalance, Number(decimals)));
    return balance;
  } catch (error) {
    console.error(`[Monitor] Error checking balance for ${walletAddress}:`, error.message);
    return 0; // Return 0 on error
  }
}

/**
 * The main monitoring function that runs in a loop.
 */
async function monitorPayments() {
  console.log('[Monitor] Starting check cycle...');
  
  try {
    // Find all orders that are still pending
    const pendingOrders = await Order.find({ paymentStatus: 'pending' });

    if (pendingOrders.length === 0) {
      console.log('[Monitor] No pending orders found. Waiting...');
      return;
    }

    console.log(`[Monitor] Found ${pendingOrders.length} pending orders. Checking...`);

    // Create one provider for this cycle
    const provider = new ethers.JsonRpcProvider(RPC_PROVIDER_URL);

    // Process all orders concurrently
    await Promise.all(pendingOrders.map(async (order) => {
      // 1. Check for Expiration
      if (new Date() > order.expiresAt) {
        console.log(`[Monitor] Order ${order._id} has EXPIRED.`);
        order.paymentStatus = 'expired';
        await order.save();
        return;
      }

      // 2. Check Balance
      const balance = await getUsdtBalance(provider, order.paymentAddress);

      // 3. Check for Confirmation (with tolerance)
      const requiredAmount = order.totalAmount;
      if (balance >= (requiredAmount - PAYMENT_TOLERANCE)) {
        // We accept anything from (total - 3) and up
        console.log(`[Monitor] Order ${order._id} is PAID! Found ${balance} USDT.`);
        order.paymentStatus = 'paid';
        await order.save();
      } else {
        // Optional: log if balance is non-zero but not enough
        if (balance > 0) {
          console.log(`[Monitor] Order ${order._id} has partial payment: ${balance} / ${requiredAmount} USDT.`);
        }
      }
    }));

  } catch (error) {
    console.error('[Monitor] Critical error in monitor loop:', error);
  } finally {
    // Schedule the next check
    setTimeout(monitorPayments, MONITOR_INTERVAL_MS);
  }
}

// --- Main Execution ---

async function startMonitor() {
  console.log('[Monitor] Connecting to database...');
  try {
    await dbConnect();
    console.log('[Monitor] Database connected.');
    console.log(`[Monitor] Connecting to RPC: ${RPC_PROVIDER_URL}`);
    
    // Initial check to ensure RPC is valid
    const provider = new ethers.JsonRpcProvider(RPC_PROVIDER_URL);
    const network = await provider.getNetwork();
    console.log(`[Monitor] Connected to network: ${network.name} (Chain ID: ${network.chainId})`);
    
    console.log('[Monitor] Starting payment monitor loop...');
    // Start the first cycle
    monitorPayments();

  } catch (error) {
    console.error('[Monitor] Failed to start:', error);
    process.exit(1); // Exit if we can't connect
  }
}

startMonitor();