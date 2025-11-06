// components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, isAuthenticated, logout, loading, cart } = useAuth();
  const cartItemCount = Array.isArray(cart) ? cart.length : 0;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-900 to-gray-900 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a
              className="group flex items-center space-x-3"
              onClick={() => setMobileOpen(false)} // close on logo click
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-light text-white tracking-tight">
                  Veritas<span className="font-serif italic">Intel</span>
                </span>
                <span className="text-xs text-gray-400 tracking-wider font-light">DISCREET SOLUTIONS</span>
              </div>
            </a>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Services' },
              { href: '/about', label: 'Our Expertise' },
              { href: '/contact', label: 'Consultation' },
            ].map((link) => (
              <Link key={link.href} href={link.href} legacyBehavior>
                <a className="text-sm font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </Link>
            ))}
            <div className="px-3 py-1 border border-gray-600 rounded-full">
              <span className="text-xs text-gray-400 font-light">24/7 SUPPORT</span>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link href="/checkout" legacyBehavior>
              <a
                className="relative p-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 group"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 10H6L5 9z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {cartItemCount}
                  </span>
                )}
              </a>
            </Link>

            <div className="flex items-center space-x-4">
              {loading ? (
                <div className="text-sm text-gray-500">Loading...</div>
              ) : isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="hidden lg:flex flex-col text-right">
                    <span className="text-sm font-light text-gray-300">Welcome back</span>
                    <span className="text-xs text-gray-400">{user?.name}</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-sm font-light">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>
                  <button
                    onClick={logout}
                    className="text-sm font-light text-gray-400 hover:text-red-400 transition-colors duration-300 border-l border-gray-700 pl-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <Link href="/login" legacyBehavior>
                    <a
                      className="text-sm font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 hidden sm:block"
                      onClick={() => setMobileOpen(false)}
                    >
                      Login
                    </a>
                  </Link>
                  <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
                  <Link href="/register" legacyBehavior>
                    <a
                      className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-sm text-sm font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sign Up
                    </a>
                  </Link>
                </>
              )}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden text-gray-400 hover:text-amber-400 transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <nav
          className={`${mobileOpen ? 'block' : 'hidden'} md:hidden mt-4 pt-4 border-t border-gray-700`}
        >
          <div className="flex flex-col space-y-3">
            {[
              { href: '/', label: 'Services' },
              { href: '/about', label: 'Our Expertise' },
              { href: '/contact', label: 'Consultation' },
            ].map((link) => (
              <Link key={link.href} href={link.href} legacyBehavior>
                <a
                  onClick={() => setMobileOpen(false)} // 👈 closes menu when clicked
                  className="text-sm font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              </Link>
            ))}

            {!isAuthenticated && (
              <>
                <Link href="/login" legacyBehavior>
                  <a
                    onClick={() => setMobileOpen(false)} // 👈 close menu
                    className="text-sm font-light text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
                  >
                    Login
                  </a>
                </Link>
                <Link href="/register" legacyBehavior>
                  <a
                    onClick={() => setMobileOpen(false)} // 👈 close menu
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-sm text-sm font-light hover:from-amber-600 hover:to-amber-700 transition-all duration-300 w-max"
                  >
                    Sign Up
                  </a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}