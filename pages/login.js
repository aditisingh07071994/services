// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      setUser(response.data.user);
      setSuccess('Authentication successful. Redirecting to secure portal...');
      setIsLoading(false);

      setTimeout(() => {
        router.push('/');
      }, 1500);

    } catch (err) {
      const message = err.response?.data?.message || 'Authentication failed. Please try again.';
      setError(message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-light text-white">Veritas<span className="font-serif italic">Intel</span></h1>
              <p className="text-xs text-gray-400 font-light tracking-wider">SECURE PORTAL</p>
            </div>
          </div>
          <h2 className="text-3xl font-light text-white mb-2">
            Client <span className="font-serif italic">Access</span>
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-300 font-light">
            Access your confidential service dashboard
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div className="group">
              <label 
                htmlFor="email" 
                className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300"
              >
                Login Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-sm text-white font-light placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 hover:border-gray-500"
                placeholder="your.secure@email.com"
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div className="group">
              <label 
                htmlFor="password" 
                className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-sm text-white font-light placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 hover:border-gray-500"
                placeholder="••••••••"
                disabled={isLoading}
              />
              <div className="flex items-center mt-2 text-xs text-gray-500 font-light">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Your credentials are encrypted end-to-end
              </div>
            </div>

            {/* Messages */}
            {error && (
              <div className="p-4 bg-red-900/50 border border-red-700 rounded-sm text-red-200 text-sm font-light">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              </div>
            )}
            {success && (
              <div className="p-4 bg-green-900/50 border border-green-700 rounded-sm text-green-200 text-sm font-light">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {success}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-sm font-light text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </div>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>

          {/* Registration Link */}
          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400 font-light">
              New User?{' '}
              <Link href="/register" legacyBehavior>
                <a className="font-light text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  Create account Now
                </a>
              </Link>
            </p>
          </div>
        </div>

        {/* Security Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 font-light">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Encrypted Connection
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Secure Protocol
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}