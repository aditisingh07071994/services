// pages/contact.js
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UI state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Basic frontend validation
    if (!name || !email || !subject || !message) {
      setError('Please complete all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      // Send the data to our API
      const response = await axios.post('/api/contact', {
        name,
        email,
        subject,
        message,
      });

      // Handle success
      setSuccess(response.data.message);
      setIsLoading(false);

      // Clear form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      // Handle errors from the API
      const message = err.response?.data?.message || 'An unexpected error occurred. Please try again.';
      setError(message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 mb-6">
            <span className="text-xs font-semibold text-white tracking-wider uppercase">Confidential Consultation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            Request <span className="font-serif italic">Professional</span> Consultation
          </h1>
          <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Begin your discreet consultation process. Our experts will contact you through secure channels 
            to discuss your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-light text-white mb-8">Secure Communication</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-1">Encrypted Email</h4>
                    <p className="text-gray-400 text-sm font-light">consult@veritasintel.com</p>
                    <p className="text-gray-500 text-xs font-light mt-1">24-48 hour response time</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-1">Secure Line</h4>
                    <p className="text-gray-400 text-sm font-light">+1 (555) 247-8833</p>
                    <p className="text-gray-500 text-xs font-light mt-1">Available 24/7 for urgent matters</p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1m8-7V3a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h4l4 4v-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-1">Live Consultation</h4>
                    <p className="text-gray-400 text-sm font-light">By appointment only</p>
                    <p className="text-gray-500 text-xs font-light mt-1">Secure video conference available</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All communications encrypted
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strict confidentiality guaranteed
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Legal compliance ensured
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white">Initial Consultation Request</h2>
                  <p className="text-gray-400 text-sm font-light">Complete this secure form to begin</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-sm text-white font-light placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="Your full name"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      Email Address <span className="text-amber-500">*</span>
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
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    Consultation Subject <span className="text-amber-500">*</span>
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-sm text-white font-light focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 hover:border-gray-500"
                    disabled={isLoading}
                  >
                    <option value="">Select service category</option>
                    <option value="Corporate Intelligence">Corporate Intelligence</option>
                    <option value="Employee Monitoring">Employee Monitoring</option>
                    <option value="Personal Assurance">Personal Assurance</option>
                    <option value="Digital Surveillance">Digital Surveillance</option>
                    <option value="Background Verification">Background Verification</option>
                    <option value="Other Service">Other Service</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    Service Requirements <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-sm text-white font-light placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 hover:border-gray-500 resize-none"
                    placeholder="Please describe your specific requirements, timeline, and any relevant details for our consultation..."
                    disabled={isLoading}
                  />
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
                        Submitting Securely...
                      </div>
                    ) : (
                      'Request Confidential Consultation'
                    )}
                  </button>
                </div>
              </form>

              {/* Confidential Notice */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center text-sm text-gray-500 font-light">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  All information submitted is protected by client-attorney privilege
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}