// components/ServiceModal.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ServiceModal() {
  const { 
    serviceToConfigure, 
    cancelServiceConfiguration, 
    addServiceToCart 
  } = useAuth();
  
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset the form when a new service is selected
  useEffect(() => {
    if (serviceToConfigure) {
      const initialState = serviceToConfigure.requiredFields.reduce((acc, field) => {
        acc[field.id] = '';
        return acc;
      }, {});
      setFormData(initialState);
    }
  }, [serviceToConfigure]);

  if (!serviceToConfigure) {
    return null;
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    for (const field of serviceToConfigure.requiredFields) {
      if (!formData[field.id]) {
        alert(`Please provide the required information: "${field.label}"`);
        setIsSubmitting(false);
        return;
      }
    }

    // Add to cart and close modal
    await addServiceToCart(serviceToConfigure, formData);
    setIsSubmitting(false);
  };

  return (
    // Luxury Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      {/* Premium Modal Container */}
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 border border-gray-700 rounded-lg max-w-md w-full shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100">
        
        {/* Modal Header */}
        <div className="border-b border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-light text-white">
                  Service Configuration
                </h3>
                <p className="text-sm text-amber-400 font-light mt-1">
                  {serviceToConfigure.title}
                </p>
              </div>
            </div>
            <button
              onClick={cancelServiceConfiguration}
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300 p-1 rounded-full hover:bg-gray-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-light">All information is encrypted and secure</span>
            </div>
            <p className="text-gray-300 text-sm font-light">
              Please provide the required details to initiate this confidential service.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dynamic Form Fields */}
            {serviceToConfigure.requiredFields.map((field) => (
              <div key={field.id} className="group">
                <label htmlFor={field.id} className="block text-sm font-light text-gray-300 mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {field.label}
                  <span className="text-amber-500 ml-1">*</span>
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id] || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-sm text-white font-light placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 hover:border-gray-500"
                  placeholder={field.placeholder}
                  required
                />
                {field.description && (
                  <p className="text-xs text-gray-500 mt-1 font-light">{field.description}</p>
                )}
              </div>
            ))}
            
            {/* Service Summary */}
            <div className="bg-gray-800 border border-gray-700 rounded-sm p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-light text-gray-300">Service Fee</span>
                <span className="text-lg font-light text-amber-400">${serviceToConfigure.price}</span>
              </div>
              <div className="mt-2 text-xs text-gray-500 font-light">
                Secure crypto payment • 30 Min - 12 hour initiation
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={cancelServiceConfiguration}
                className="px-6 py-3 border border-gray-600 text-gray-300 font-light rounded-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-sm font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Initiate Service
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </>
                  )}
                </div>
                {isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-sm animate-pulse"></div>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Confidential Footer */}
        <div className="border-t border-gray-700 px-6 py-3 bg-gray-800 rounded-b-lg">
          <div className="flex items-center justify-center text-xs text-gray-500 font-light">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            All communications are encrypted and confidential
          </div>
        </div>
      </div>
    </div>
  );
}