// pages/index.js
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../lib/services';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      
      {/* --- Luxury Hero Section --- */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-gray-900 border-b border-gray-700">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]"></div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-28 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Premium badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 mb-6">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">Discreet & Confidential</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              <span className="font-serif italic">Discreet</span> Intelligence 
              <span className="block text-2xl md:text-3xl font-light text-gray-300 mt-2">
                For Corporate & Personal Assurance
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Professional surveillance solutions for corporations, couples, and families. 
              <span className="block text-lg text-gray-400 mt-2">
                Secure, confidential, and technologically advanced.
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-amber-500 text-amber-500 font-medium rounded-sm hover:bg-amber-500 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 border border-gray-600 text-white font-medium rounded-sm hover:bg-gray-700 transition-all duration-300"
              >
                Consult Our Experts
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">Trusted By</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <span className="text-gray-300 font-light">Fortune 500 Companies</span>
                <span className="text-gray-300 font-light">•</span>
                <span className="text-gray-300 font-light">Legal Firms</span>
                <span className="text-gray-300 font-light">•</span>
                <span className="text-gray-300 font-light">Private Individuals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- Premium Services Section --- */}
      <div id="services" className="container mx-auto px-4 py-20 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Our <span className="font-serif italic">Discreet</span> Services
          </h2>
          <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Advanced surveillance solutions tailored for corporate oversight and personal assurance
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map(svc => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
        
        {/* Additional Professional Services Info */}
        <div className="mt-20 bg-gradient-to-r from-gray-800 to-slate-800 rounded-lg border border-gray-700 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Need Custom Surveillance Solutions?</h3>
              <p className="text-gray-300 mb-6 font-light">
                Our expert team can design tailored intelligence gathering strategies 
                for your specific corporate or personal requirements.
              </p>
              
              <Link href="/contact" legacyBehavior>
                <a className="group inline-flex items-center px-6 py-3 border border-amber-500 text-amber-500 font-medium rounded-sm hover:bg-amber-500 hover:text-white transition-all duration-300">
                  Schedule Confidential Consultation
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 border border-gray-600 rounded-sm">
                <div className="text-2xl font-light text-amber-500 mb-1">24/7</div>
                <div className="text-sm text-gray-300">Monitoring</div>
              </div>
              <div className="p-4 border border-gray-600 rounded-sm">
                <div className="text-2xl font-light text-amber-500 mb-1">100%</div>
                <div className="text-sm text-gray-300">Confidential</div>
              </div>
              <div className="p-4 border border-gray-600 rounded-sm">
                <div className="text-2xl font-light text-amber-500 mb-1">Legal</div>
                <div className="text-sm text-gray-300">Compliance</div>
              </div>
              <div className="p-4 border border-gray-600 rounded-sm">
                <div className="text-2xl font-light text-amber-500 mb-1">Secure</div>
                <div className="text-sm text-gray-300">Reporting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}