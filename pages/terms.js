// pages/terms.js
import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-700">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]"></div>
        <div className="container relative mx-auto py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 mb-6">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">Legal Agreement</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              <span className="font-serif italic">Terms</span> of 
              <span className="block text-amber-400 font-light">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              The legal framework governing our professional relationship and service delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Important Notice */}
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg p-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-4">Important Legal Notice</h2>
                <p className="text-gray-300 font-light leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and VeritasIntel. 
                  By accessing our services, you acknowledge that you have read, understood, and agree to be 
                  bound by these terms in their entirety.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Service Agreement */}
            <section className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-light text-sm">1</span>
                </div>
                Service Agreement & Scope
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 font-light leading-relaxed">
                  VeritasIntel provides professional intelligence and surveillance services to qualified clients. 
                  All services are conducted within the bounds of applicable laws and regulations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-900/50 border border-gray-600 rounded-sm p-4">
                    <h4 className="text-lg font-light text-amber-400 mb-2">Client Responsibilities</h4>
                    <ul className="text-gray-300 font-light text-sm space-y-2">
                      <li>• Provide accurate and lawful information</li>
                      <li>• Ensure legal authority for surveillance requests</li>
                      <li>• Maintain confidentiality of service engagement</li>
                      <li>• Timely payment for services rendered</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-600 rounded-sm p-4">
                    <h4 className="text-lg font-light text-amber-400 mb-2">Service Limitations</h4>
                    <ul className="text-gray-300 font-light text-sm space-y-2">
                      <li>• Services bound by jurisdictional laws</li>
                      <li>• No guarantee of specific outcomes</li>
                      <li>• Professional discretion in method selection</li>
                      <li>• Compliance with ethical standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Compliance */}
            <section className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-light text-sm">2</span>
                </div>
                Legal Compliance & Ethics
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-3">Ethical Standards</h4>
                    <p className="text-gray-300 font-light">
                      All services are conducted in accordance with professional ethical standards and legal requirements. 
                      We reserve the right to refuse service that may violate laws or ethical guidelines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-3">Jurisdictional Compliance</h4>
                    <p className="text-gray-300 font-light">
                      Services are tailored to comply with local, state, and federal laws in all operating jurisdictions. 
                      Clients are responsible for ensuring their requests comply with applicable regulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment & Confidentiality */}
            <section className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-light text-sm">3</span>
                </div>
                Financial Terms & Confidentiality
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-light text-amber-400 mb-4">Payment Terms</h4>
                  <ul className="text-gray-300 font-light space-y-3">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      All services require advance payment via secure cryptocurrency
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Service fees are non-refundable once work commences
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Additional expenses may be billed with client approval
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-400 mb-4">Confidentiality</h4>
                  <ul className="text-gray-300 font-light space-y-3">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Mutual non-disclosure of engagement terms
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Secure handling of all client information
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Legal compliance in information sharing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acceptance Section */}
            <div className="bg-gradient-to-r from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-light text-white mb-4">Agreement Acceptance</h3>
              <p className="text-gray-300 font-light mb-6 max-w-2xl mx-auto">
                By using our services, you acknowledge that you have read, understood, and agree to be bound 
                by these Terms of Service. Continued use of our platform constitutes ongoing acceptance of these terms.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 font-light">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Last updated: 12-05-2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}