// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xl font-light text-white">Veritas<span className="font-serif italic">Intel</span></h5>
                <p className="text-xs text-gray-400 font-light tracking-wider">DISCREET SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-300 font-light text-sm leading-relaxed mb-4">
              Leading provider of professional intelligence and surveillance solutions 
              for corporate security and personal assurance worldwide.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 font-light">
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                ISO 27001 Certified
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Operations
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-light text-white mb-4 pb-2 border-b border-gray-700">Our Services</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Corporate Intelligence
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Employee Monitoring
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Personal Assurance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Digital Surveillance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Background Verification
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h5 className="text-lg font-light text-white mb-4 pb-2 border-b border-gray-700">Legal & Support</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Our Expertise
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                    Confidential Consultation
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-lg font-light text-white mb-4 pb-2 border-b border-gray-700">Secure Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:consult@veritasintel.com" className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                  consult@veritasintel.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <a href="tel:+15552478833" className="text-sm text-gray-300 font-light hover:text-amber-400 transition-colors duration-300">
                  +1 (555) 247-8833
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-300 font-light">
                  Global Operations Center
                </span>
              </li>
            </ul>
            
            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-500 font-light">
                  <svg className="w-3 h-3 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All Communications Encrypted
                </div>
                <div className="flex items-center text-xs text-gray-500 font-light">
                  <svg className="w-3 h-3 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Strict Confidentiality Guaranteed
                </div>
                <div className="flex items-center text-xs text-gray-500 font-light">
                  <svg className="w-3 h-3 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Legal Compliance Ensured
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400 font-light">
                &copy; {new Date().getFullYear()} VeritasIntel. All rights reserved. 
                <span className="hidden md:inline"> | </span>
                <span className="block md:inline mt-1 md:mt-0">Professional Intelligence Services</span>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-500 font-light">
              <span>Operational Since 2015</span>
              <span className="hidden md:inline">•</span>
              <span>Global Coverage</span>
              <span className="hidden md:inline">•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}