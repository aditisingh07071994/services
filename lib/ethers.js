import { ethers } from 'ethers'

// Minimal ERC20 ABI fragment for balanceOf and decimals
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)"
]

// Example USDT contract address on Ethereum mainnet (replace if using other chain)
export async function getTokenBalance(providerUrl, tokenAddress, walletAddress) {
  const provider = new ethers.JsonRpcProvider(providerUrl)
  const token = new ethers.Contract(tokenAddress, ERC20_ABI, provider)
  const [raw, decimals] = await Promise.all([
    token.balanceOf(walletAddress),
    token.decimals()
  ])
  // raw is BigInt
  const human = Number(raw) / (10 ** decimals)
  return { raw, decimals, human }
}
