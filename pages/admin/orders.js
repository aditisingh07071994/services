// pages/admin/orders.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

// --- New component for a single order row ---
function OrderRow({ order }) {
  const [balance, setBalance] = useState(null);
  const [checking, setChecking] = useState(false);
  const [message, setMessage] = useState('');

  const checkBalance = async () => {
    setChecking(true);
    setMessage('');
    try {
      const res = await axios.get(`/api/admin/check-balance?address=${order.paymentAddress}`);
      setBalance(res.data);
    } catch (err) {
      setBalance(null);
      setMessage('Error checking');
    } finally {
      setChecking(false);
    }
  };

  const resetSweep = async () => {
    if (!confirm('Are you sure you want to re-queue this order for sweeping?')) return;
    
    setChecking(true);
    setMessage('');
    try {
      const res = await axios.post('/api/admin/reset-sweep', { orderId: order._id });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error resetting');
    } finally {
      setChecking(false);
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" title={order._id}>
        {order._id.slice(-6)}...
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.userId?.name || 'N/A'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          order.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
          order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {order.paymentStatus}
        </span>
        {order.paymentStatus === 'paid' && (
          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
            order.isSwept ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
          }`}>
            {order.isSwept ? 'Swept' : 'Unswept'}
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.totalAmount}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono" title={order.paymentAddress}>
        {order.paymentAddress.slice(0, 6)}...{order.paymentAddress.slice(-4)}
        {balance && (
          <div className="text-xs">
            BNB: {balance.bnb.slice(0, 6)} | USDT: {balance.usdt}
          </div>
        )}
        {message && <div className="text-xs text-red-600">{message}</div>}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
        <button onClick={checkBalance} disabled={checking} className="text-indigo-600 hover:text-indigo-900 disabled:opacity-50">
          {checking ? '...' : 'Check'}
        </button>
        {/* Only show 'Reset' button if order is paid but not swept */}
        {order.paymentStatus === 'paid' && !order.isSwept && (
          <button onClick={resetSweep} disabled={checking} className="text-green-600 hover:text-green-900 disabled:opacity-50">
            {checking ? '...' : 'Reset Sweep'}
          </button>
        )}
      </td>
    </tr>
  );
}

// --- Main Page Component ---
export default function AdminOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('/api/admin/orders');
        setOrders(res.data.orders);
      } catch (err) {
        setError('Failed to fetch orders. Are you an admin?');
      } finally {
        setLoading(false);
      }
    };
    
    if (user && user.role === 'admin') {
      fetchOrders();
    } else if (user) {
      setError('Access Denied. You are not an admin.');
      setLoading(false);
    }
  }, [user]);

  if (loading) return <div className="p-8">Loading orders...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin: All Orders</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-module text-gray-500 uppercase">Wallet</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-20t-0">
            {orders.map(order => (
              <OrderRow key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}