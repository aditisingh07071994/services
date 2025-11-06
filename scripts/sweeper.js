// scripts/sweeper.js
import mongoose from 'mongoose';
import { ethers } from 'ethers';
import AES from 'crypto-js/aes.js'; // Note .js extension
import Utf8 from 'crypto-js/enc-utf8.js'; // Note .js extension
import dbConnect from '../lib/dbConnect.js';
import Order from '../models/Order.js';

const RPC_PROVIDER_URL = process.env.RPC_PROVIDER_URL;
const USDT_CONTRACT_ADDRESS = process.env.USDT_CONTRACT_ADDRESS;
const ADMIN_WALLET_PRIVATE_KEY = process.env.ADMIN_WALLET_PRIVATE_KEY;
const COLD_WALLET_ADDRESS = process.env.COLD_WALLET_ADDRESS;
const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET;
const GAS_AMOUNT_TO_SEND = process.env.GAS_AMOUNT_TO_SEND || "0.001"; // BNB
const SWEEP_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

if (!ADMIN_WALLET_PRIVATE_KEY || !COLD_WALLET_ADDRESS || !ENCRYPTION_SECRET || !RPC_PROVIDER_URL || !USDT_CONTRACT_ADDRESS) {
  throw new Error('[Sweeper] Missing critical environment variables.');
}

// Minimal ERC20 ABI for sweeping
const ERC20_ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function transfer(address recipient, uint256 amount) returns (bool)"
];

const provider = new ethers.JsonRpcProvider(RPC_PROVIDER_URL);
const gasWallet = new ethers.Wallet(ADMIN_WALLET_PRIVATE_KEY, provider);

console.log(`[Sweeper] Admin (Gas) Wallet: ${gasWallet.address}`);
console.log(`[Sweeper] Cold Storage Wallet: ${COLD_WALLET_ADDRESS}`);

// --- Helper Functions ---

/**
 * Decrypts a private key.
 * @param {string} encryptedKey - The encrypted key from the database.
 * @returns {string} - The decrypted private key.
 */
function decryptKey(encryptedKey) {
  const bytes = AES.decrypt(encryptedKey, ENCRYPTION_SECRET);
  return bytes.toString(Utf8);
}

/**
 * Sweeps funds from a single paid order.
 * @param {Order} order - The Mongoose order document.
 */
async function sweepOrder(order) {
  console.log(`[Sweeper] Processing order ${order._id}...`);
  
  let paymentWallet;
  try {
    // 1. Decrypt and create the payment wallet
    const privateKey = decryptKey(order.paymentPrivateKey);
    paymentWallet = new ethers.Wallet(privateKey, provider);
  } catch (err) {
    console.error(`[Sweeper] CRITICAL: Failed to decrypt key for order ${order._id}. Skipping.`, err);
    order.paymentStatus = 'error'; // Mark as error to prevent retries
    await order.save();
    return;
  }

  const paymentAddress = paymentWallet.address;
  console.log(`[Sweeper] Payment Wallet: ${paymentAddress}`);

  try {
    // 2. Check for Gas (BNB)
    const bnbBalance = await provider.getBalance(paymentAddress);
    const gasFeeEstimate = ethers.parseUnits(GAS_AMOUNT_TO_SEND, 'ether');

    if (bnbBalance < gasFeeEstimate) {
      console.log(`[Sweeper] Sending ${GAS_AMOUNT_TO_SEND} BNB gas to ${paymentAddress}...`);
      const tx = await gasWallet.sendTransaction({
        to: paymentAddress,
        value: gasFeeEstimate
      });
      await tx.wait(); // Wait for the gas to arrive
      console.log(`[Sweeper] Gas sent, tx: ${tx.hash}`);
    } else {
      console.log(`[Sweeper] Wallet has sufficient gas (${ethers.formatEther(bnbBalance)} BNB).`);
    }

    // 3. Check and Sweep USDT
    const tokenContract = new ethers.Contract(USDT_CONTRACT_ADDRESS, ERC20_ABI, paymentWallet);
    const usdtBalance = await tokenContract.balanceOf(paymentAddress);

    if (usdtBalance === 0n) { // 0n is BigInt zero
      console.log(`[Sweeper] No USDT balance found for ${paymentAddress}. Marking as swept.`);
      order.isSwept = true;
      await order.save();
      return;
    }

    console.log(`[Sweeper] Sweeping ${ethers.formatUnits(usdtBalance, 6)} USDT from ${paymentAddress}...`); // Assuming 6 decimals for USDT

    // Send the *entire* balance
    const sweepTx = await tokenContract.transfer(COLD_WALLET_ADDRESS, usdtBalance);
    await sweepTx.wait();
    
    console.log(`[Sweeper] SWEEP SUCCESSFUL for order ${order._id}. Tx: ${sweepTx.hash}`);
    order.isSwept = true;
    await order.save();

  } catch (error) {
    console.error(`[Sweeper] ERROR sweeping order ${order._id}:`, error.message);
    // Don't mark as swept, will retry on next cycle
  }
}

/**
 * The main sweeper function that runs in a loop.
 */
async function sweepPayments() {
  console.log('[Sweeper] Starting sweep cycle...');
  
  try {
    // Find all orders that are paid but not yet swept
    const ordersToSweep = await Order.find({ 
      paymentStatus: 'paid', 
      isSwept: false 
    });

    if (ordersToSweep.length === 0) {
      console.log('[Sweeper] No orders to sweep. Waiting...');
      return;
    }

    console.log(`[Sweeper] Found ${ordersToSweep.length} orders to sweep.`);
    
    // Process orders one by one to avoid nonce issues
    for (const order of ordersToSweep) {
      await sweepOrder(order);
    }

  } catch (error) {
    console.error('[Sweeper] Critical error in sweeper loop:', error);
  } finally {
    // Schedule the next check
    setTimeout(sweepPayments, SWEEP_INTERVAL_MS);
  }
}

// --- Main Execution ---
async function startSweeper() {
  console.log('[Sweeper] Connecting to database...');
  try {
    await dbConnect();
    console.log('[Sweeper] Database connected.');
    console.log('[Sweeper] Starting sweeper loop...');
    sweepPayments(); // Start the first cycle
  } catch (error) {
    console.error('[Sweeper] Failed to start:', error);
    process.exit(1);
  }
}

startSweeper();