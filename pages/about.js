// pages/about.js
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-700">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]"></div>
        <div className="container relative mx-auto py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 mb-6">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">Est. 2015</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              <span className="font-serif italic">Discretion</span> is Our 
              <span className="block text-amber-400 font-light">Foundation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Leading the industry in professional intelligence and surveillance solutions 
              for corporate security and personal assurance.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-light text-white mb-6">
              Our <span className="font-serif italic">Mission</span>
            </h2>
            <div className="w-20 h-0.5 bg-amber-500 mb-6"></div>
            <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
              To provide unparalleled discreet intelligence services that empower corporations, 
              legal entities, and individuals with the information they need to make informed 
              decisions and ensure security.
            </p>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              We operate at the intersection of advanced technology and professional expertise, 
              delivering confidential solutions that maintain the highest standards of ethics 
              and legal compliance.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 border border-gray-600 rounded-sm">
                <div className="text-3xl font-light text-amber-500 mb-2">500+</div>
                <div className="text-sm text-gray-300 font-light">Corporate Clients</div>
              </div>
              <div className="text-center p-6 border border-gray-600 rounded-sm">
                <div className="text-3xl font-light text-amber-500 mb-2">24/7</div>
                <div className="text-sm text-gray-300 font-light">Global Operations</div>
              </div>
              <div className="text-center p-6 border border-gray-600 rounded-sm">
                <div className="text-3xl font-light text-amber-500 mb-2">100%</div>
                <div className="text-sm text-gray-300 font-light">Confidential</div>
              </div>
              <div className="text-center p-6 border border-gray-600 rounded-sm">
                <div className="text-3xl font-light text-amber-500 mb-2">ISO</div>
                <div className="text-sm text-gray-300 font-light">27001 Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Our <span className="font-serif italic">Expertise</span>
            </h2>
            <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Specialized surveillance solutions tailored to meet the unique requirements 
              of each client while maintaining absolute discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Services */}
            <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8 hover:border-amber-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Corporate Intelligence</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Employee monitoring, due diligence, competitive intelligence, and internal 
                threat detection for businesses of all sizes.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Employee Activity Monitoring
                </li>
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Due Diligence Investigations
                </li>
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Internal Threat Assessment
                </li>
              </ul>
            </div>

            {/* Personal Services */}
            <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8 hover:border-amber-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Personal Assurance</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Discreet monitoring services for individuals seeking truth and security 
                in personal relationships and family matters.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Relationship Verification
                </li>
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Family Protection Services
                </li>
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personal Background Checks
                </li>
              </ul>
            </div>

            {/* Technical Services */}
            <div className="bg-gradient-to-br from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-8 hover:border-amber-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Digital Surveillance</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Advanced technological solutions including digital forensics, 
                cyber monitoring, and secure data analysis services.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Digital Activity Monitoring
                </li>
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cyber Forensics
                </li>
                <li className="flex items-center text-sm text-gray-400 font-light">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secure Data Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-gray-800 to-slate-800 border border-gray-700 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">
              Our <span className="font-serif italic">Values</span>
            </h2>
            <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Confidentiality</h3>
              <p className="text-gray-300 font-light">
                Absolute discretion in all operations. Your privacy and the security of your information are our highest priority.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Integrity</h3>
              <p className="text-gray-300 font-light">
                We operate within strict legal and ethical boundaries, ensuring all services comply with applicable laws and regulations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Excellence</h3>
              <p className="text-gray-300 font-light">
                Uncompromising quality in every service we provide, utilizing the latest technology and most experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}