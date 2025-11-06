// pages/privacy.js
import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-700">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]"></div>
        <div className="container relative mx-auto py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 mb-6">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">Last Updated: 11 05 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              <span className="font-serif italic">Privacy</span> & 
              <span className="block text-amber-400 font-light">Confidentiality</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Our commitment to protecting your data with the highest standards of security and discretion.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-4">Our Privacy Commitment</h2>
                <p className="text-gray-300 font-light leading-relaxed">
                  At VeritasIntel, we understand the sensitive nature of our services and the importance of protecting your privacy. 
                  This policy outlines how we collect, use, and safeguard your information in compliance with global privacy standards.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Information Collection */}
            <section className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-light text-sm">1</span>
                </div>
                Information We Collect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-light text-white mb-2">Service-Specific Data</h4>
                    <p className="text-gray-300 font-light">
                      Information required to perform requested surveillance and intelligence services, 
                      provided voluntarily through our secure consultation forms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-light text-white mb-2">Account Information</h4>
                    <p className="text-gray-300 font-light">
                      Contact details, authentication credentials, and communication preferences 
                      for service delivery and client support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-light text-white mb-2">Technical Data</h4>
                    <p className="text-gray-300 font-light">
                      Encrypted connection logs, security audit trails, and system performance metrics 
                      to ensure platform integrity and security.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-light text-sm">2</span>
                </div>
                Data Protection & Security
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-600 rounded-sm p-6">
                  <h4 className="text-lg font-light text-amber-400 mb-3">Encryption Standards</h4>
                  <p className="text-gray-300 font-light text-sm">
                    All client data is encrypted using AES-256 encryption both in transit and at rest. 
                    Secure key management ensures only authorized personnel can access sensitive information.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-600 rounded-sm p-6">
                  <h4 className="text-lg font-light text-amber-400 mb-3">Access Controls</h4>
                  <p className="text-gray-300 font-light text-sm">
                    Multi-factor authentication, role-based access controls, and comprehensive audit trails 
                    prevent unauthorized access to client information and service data.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-600 rounded-sm p-6">
                  <h4 className="text-lg font-light text-amber-400 mb-3">Data Retention</h4>
                  <p className="text-gray-300 font-light text-sm">
                    Client data is retained only for the duration required by law and service agreements. 
                    Secure deletion protocols ensure complete data destruction upon request or expiration.
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-600 rounded-sm p-6">
                  <h4 className="text-lg font-light text-amber-400 mb-3">Legal Compliance</h4>
                  <p className="text-gray-300 font-light text-sm">
                    We operate in strict compliance with international privacy laws including GDPR, CCPA, 
                    and other relevant data protection regulations across all jurisdictions.
                  </p>
                </div>
              </div>
            </section>

            {/* Client Rights */}
            <section className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-light text-sm">3</span>
                </div>
                Your Privacy Rights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-700">
                  <span className="text-lg font-light text-white">Right to Access</span>
                  <span className="text-amber-400 font-light">Full transparency</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-700">
                  <span className="text-lg font-light text-white">Right to Correction</span>
                  <span className="text-amber-400 font-light">Data accuracy</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-700">
                  <span className="text-lg font-light text-white">Right to Deletion</span>
                  <span className="text-amber-400 font-light">Complete erasure</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-lg font-light text-white">Right to Object</span>
                  <span className="text-amber-400 font-light">Processing controls</span>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-light text-white mb-4">Privacy Questions?</h3>
              <p className="text-gray-300 font-light mb-6">
                Contact our Data Protection Officer for any privacy-related inquiries or to exercise your rights.
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-sm font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}