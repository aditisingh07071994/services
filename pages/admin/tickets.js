// pages/admin/tickets.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

export default function AdminTickets() {
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get('/api/admin/tickets');
        setTickets(res.data.tickets);
      } catch (err) {
        setError('Failed to fetch tickets.');
      } finally {
        setLoading(false);
      }
    };
    
    if (user && user.role === 'admin') {
      fetchTickets();
    } else if (user) {
      setError('Access Denied. You are not an admin.');
      setLoading(false);
    }
  }, [user]);

  if (loading) return <div className="p-8">Loading tickets...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin: Support Tickets</h1>
      <div className="bg-white shadow-md rounded-lg">
        <div className="divide-y divide-gray-200">
          {tickets.map(ticket => (
            <div key={ticket._id} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{ticket.subject}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  ticket.status === 'open' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {ticket.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{ticket.message}</p>
              <div className="text-sm text-gray-500">
                From: {ticket.name} ({ticket.email}) on {new Date(ticket.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}