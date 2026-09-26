import { useState, useRef, useEffect } from 'react';
import { NAV } from '../data/content.js';

export default function Header({ page, go, cart = [], onOpenCart, user, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // Close "More" dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNav = [
    { id: 'home', label: 'Home' },
    { id: 'discover', label: 'Discover Talent' },
    { id: 'casting', label: 'Casting Calls' },
    { id: 'howItWorks', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const moreNav = [
    { id: 'forCreators', label: 'For Creators' },
    { id: 'forCompanies', label: 'For Companies' },
    { id: 'profile', label: 'Creator Profile' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const isMoreActive = moreNav.some((item) => item.id === page);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md border-b bg-white/90"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="w-full px-[5%] sm:px-[8%] lg:px-[10%] h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="font-display font-extrabold text-xl tracking-tight shrink-0 flex items-center focus:outline-none"
        >
          MyCast<span className="grad-text">Now</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {primaryNav.map(({ id, label }) => {
            const active = page === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  active
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            );
          })}

          {/* More Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap ${
                isMoreActive
                  ? 'text-purple-600 bg-purple-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>More</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {moreOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg py-1.5 z-50 text-sm" style={{ borderColor: 'var(--border)' }}>
                {moreNav.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => {
                      go(id);
                      setMoreOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 transition-colors ${
                      page === id
                        ? 'text-purple-600 bg-purple-50 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA Area: Cart & Auth */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Talent Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative px-3 py-1.5 rounded-full border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-sm"
            title="View Talent Cart"
          >
            <span>🛍️</span>
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                {cart.length}
              </span>
            )}
          </button>

          {user ? (
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                👤 {user.name} ({user.role})
              </span>
              <button
                onClick={onLogout}
                className="text-xs text-rose-600 hover:underline px-2"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => go('auth')}
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-purple-600 rounded-full hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Log in
              </button>
              <button
                onClick={() => go('auth')}
                className="btn-primary text-sm px-4 py-1.5 font-semibold rounded-full shadow-md whitespace-nowrap"
              >
                Sign up
              </button>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t px-6 py-4 bg-white/95 backdrop-blur-md space-y-3" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map(([id, label]) => (
              <button
                key={id}
                onClick={() => {
                  go(id);
                  setMobileOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg transition-colors ${
                  page === id
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t flex gap-3" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => {
                go('auth');
                setMobileOpen(false);
              }}
              className="flex-1 py-2.5 text-center text-sm font-semibold rounded-full border text-slate-700 bg-slate-50 hover:bg-slate-100"
              style={{ borderColor: 'var(--border)' }}
            >
              Log in
            </button>
            <button
              onClick={() => {
                go('auth');
                setMobileOpen(false);
              }}
              className="flex-1 py-2.5 text-center text-sm font-semibold rounded-full text-white btn-primary"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
