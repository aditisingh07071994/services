// pages/checkout.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { QRCodeSVG } from 'qrcode.react';
import Link from 'next/link';

function formatTime(totalSeconds) {
  if (totalSeconds <= 0) return '00:00';
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Luxury Cart Item Details Component
function CartItemDetails({ details, fields }) {
  if (!details || !fields || fields.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 pl-4 border-l-2 border-amber-500/20">
      {fields.map(field => {
        const value = details[field.id];
        if (!value) return null;
        
        return (
          <div key={field.id} className="text-sm mb-1 last:mb-0">
            <span className="font-light text-gray-400">{field.label}: </span>
            <span className="text-amber-400 font-light">{value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Checkout() {
  const router = useRouter();
  const { 
    user, 
    isAuthenticated, 
    loading: authLoading, 
    cart, 
    removeFromCart,
    clearCart 
  } = useAuth();
  const total = cart.reduce((s, it) => s + it.price, 0);
  const [order, setOrder] = useState(null); 
  const [countdown, setCountdown] = useState('30:00');
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    if (!order || paymentStatus !== 'pending') return;

    const timerInterval = setInterval(() => {
      const expires = new Date(order.expiresAt).getTime();
      const now = Date.now();
      const remainingSeconds = Math.floor((expires - now) / 1000);

      if (remainingSeconds <= 0) {
        setCountdown('00:00');
        setPaymentStatus('expired');
      } else {
        setCountdown(formatTime(remainingSeconds));
      }
    }, 1000);

    const pollerInterval = setInterval(async () => {
      try {
        const res = await axios.get(`/api/order-status?id=${order.orderId}`);
        if (res.data.status === 'paid') {
          setPaymentStatus('paid');
          clearCart(); 
        }
      } catch (err) {
        console.error('Error polling for status:', err);
      }
    }, 5000);

    if (paymentStatus !== 'pending') {
      clearInterval(timerInterval);
      clearInterval(pollerInterval);
    }
    
    return () => {
      clearInterval(timerInterval);
      clearInterval(pollerInterval);
    };
  }, [order, paymentStatus, clearCart]);

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/orders', { cart });
      setOrder(res.data.order);
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to create order.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center">
        <div className="text-xl font-light text-white">Loading...</div>
      </div>
    );
  }

  if (cart.length === 0 && !order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 10H6L5 9z" />
            </svg>
          </div>
          <h1 className="text-4xl font-light text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-300 text-lg font-light mb-8">
            No services have been selected for initiation.
          </p>
          <Link href="/" legacyBehavior>
            <a className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-sm font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
              Browse Services
            </a>
          </Link>
        </div>
      </div>
    );
  }

  // Stage 1: Confirm Order
  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Confirm <span className="font-serif italic">Service</span> Initiation
            </h1>
            <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-light">
              Review your selected services before proceeding with secure payment
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
            {/* Card Header */}
            <div className="border-b border-gray-700 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white">Service Summary</h2>
                  <p className="text-gray-400 text-sm font-light">Confidential service initiation</p>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="p-6 space-y-6">
              {cart.map((it) => (
                <div key={it.cartItemId} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-light text-white mb-1">{it.title}</h3>
                          <div className="text-amber-400 font-light text-lg">${it.price}</div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(it.cartItemId)} 
                          className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-1 rounded-full hover:bg-gray-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <CartItemDetails details={it.details} fields={it.requiredFields} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="border-t border-gray-700 p-6 bg-gray-900/50">
              <div className="flex justify-between items-center text-xl">
                <span className="font-light text-gray-300">Total Bill:</span>
                <span className="text-2xl font-light text-amber-400">${total}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-light">All payments are encrypted and secure</span>
              </div>
            </div>

            {/* Action Section */}
            <div className="p-6 border-t border-gray-700">
              {error && (
                <div className="mb-4 p-4 bg-red-900/50 border border-red-700 rounded-sm text-red-200 text-sm font-light">
                  {error}
                </div>
              )}

              <button 
                onClick={handlePlaceOrder} 
                disabled={isLoading || cart.length === 0}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-sm font-light text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Secure Order...
                  </div>
                ) : (
                  'Proceed to Secure Payment'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stage 2: Payment Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Complete <span className="font-serif italic">Secure</span> Payment
          </h1>
          <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
        </div>

        {/* Payment Status Cards */}
        <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg shadow-2xl p-8 mb-8">
          
          {paymentStatus === 'paid' && (
            <div className="bg-green-900/20 border border-green-700 rounded-lg p-8 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-light text-white mb-2">Payment Confirmed!</h2>
              <p className="text-gray-300 font-light">
                Your service initiation has been processed. Our team will contact you within 24 hours.
              </p>
            </div>
          )}

          {paymentStatus === 'expired' && (
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-8 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-light text-white mb-2">Payment Window Expired</h2>
              <p className="text-gray-300 font-light">
                Please restart the process to generate a new payment address.
              </p>
            </div>
          )}

          {paymentStatus === 'pending' && (
            <>
              {/* Timer */}
              <div className="mb-8">
                <div className="text-sm text-gray-400 font-light mb-2">TIME REMAINING</div>
                <div className="text-4xl font-light text-amber-400 mb-4">{countdown}</div>
                <div className="text-sm text-gray-500 font-light">
                  Complete payment within the time limit to initiate your services
                </div>
              </div>

              {/* QR Code */}
              <div className="mb-8 p-6 bg-white rounded-lg inline-block">
                <QRCodeSVG value={order.paymentAddress} size={200} />
              </div>

              {/* Payment Address */}
              <div className="mb-6">
                <div className="text-sm text-gray-400 font-light mb-3">SEND EXACTLY</div>
                <div className="text-2xl font-light text-amber-400 mb-2">${total} USDT</div>
                <div className="text-sm text-gray-400 font-light mb-3">TO THIS BEP-20 ADDRESS</div>
                <div className="bg-gray-900 border border-gray-600 rounded-sm p-4 mb-4">
                  <code className="text-white font-mono text-sm break-all">{order.paymentAddress}</code>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(order.paymentAddress)}
                  className="text-amber-400 hover:text-amber-300 text-sm font-light transition-colors duration-300"
                >
                  Copy Address
                </button>
              </div>

              {/* Instructions */}
              <div className="text-left bg-gray-900/50 border border-gray-600 rounded-sm p-4">
                <h4 className="text-white font-light mb-3">Payment Instructions:</h4>
                <ul className="text-sm text-gray-300 space-y-2 font-light">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Send exact amount in USDT (BEP-20) only
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Network: Binance Smart Chain (BSC)
                  </li>
                  {/* <li className="flex items-start">
                    <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Do not send from an exchange wallet
                  </li> */}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Confidential Notice */}
        <div className="text-center">
          <div className="flex items-center justify-center text-sm text-gray-500 font-light">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            All transactions are encrypted and confidential
          </div>
        </div>
      </div>
    </div>
  );
}