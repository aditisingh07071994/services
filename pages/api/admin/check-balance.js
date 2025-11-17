// pages/api/admin/check-balance.js
import { ethers } from 'ethers';

const ERC20_ABI = [
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

export default async function handler(req, res) {
  // Your middleware.js file has ALREADY verified this is an admin
  // so we can proceed directly.

  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { address } = req.query;
  if (!address) {
    return res.status(400).json({ message: 'Address is required.' });
  }

  try {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_PROVIDER_URL);
    const tokenContract = new ethers.Contract(process.env.USDT_CONTRACT_ADDRESS, ERC20_ABI, provider);

    // Get balances
    const [rawBnb, rawUsdt, decimals] = await Promise.all([
      provider.getBalance(address),
      tokenContract.balanceOf(address),
      tokenContract.decimals()
    ]);

    const bnb = ethers.formatEther(rawBnb);
    const usdt = ethers.formatUnits(rawUsdt, Number(decimals));

    return res.status(200).json({ bnb, usdt });

  } catch (error) {
    console.error('Balance check error:', error);
    return res.status(500).json({ message: 'Failed to check balance.' });
  }
}