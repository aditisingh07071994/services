// components/ServiceCard.jsx
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function ServiceCard({ svc }) {
  const { promptForServiceDetails } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-800 to-gray-900 border border-gray-700 rounded-lg overflow-hidden transition-all duration-500 hover:border-amber-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Service Icon/Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      <div className="p-6 relative z-0">
        {/* Service Category */}
        <div className="flex items-center mb-3">
          <span className="text-xs font-light text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
            {svc.category || 'Professional Service'}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-light text-white mb-3 leading-tight group-hover:text-amber-100 transition-colors duration-300">
          {svc.title}
        </h3>

        {/* Service Description */}
        <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm line-clamp-3">
          {svc.description}
        </p>

        {/* Features List */}
        <div className="space-y-2 mb-6">
          {svc.features?.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400 font-light">{feature}</span>
            </div>
          )) || (
            <>
            <div className="flex items-center text-sm">
                <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 font-light">Same Day Service Delivery</span>
              </div>
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 font-light">Confidential Service</span>
              </div>
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 font-light">Professional Reporting</span>
              </div>
            </>
          )}
        </div>

        {/* Price & CTA Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex flex-col">
            <span className="text-2xl font-light text-amber-400">${svc.price}</span>
            <span className="text-xs text-gray-500 font-light">Secure Payment</span>
          </div>
          <button
            onClick={() => promptForServiceDetails(svc)}
            className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-sm font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center">
              Add to cart
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Confidential Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center text-xs text-gray-500 font-light">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Strictly Confidential
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}