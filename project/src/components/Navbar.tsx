import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo (non-clickable) */}
          <span className="flex items-center gap-2 cursor-default select-none">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={scrolled ? "/pajco.png" : "/pajcow.png"}
                alt="PAJ Logo"
                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                P.A.J & Co.
              </span>
              <span className={`block text-[10px] tracking-widest uppercase -mt-1 transition-colors ${scrolled ? 'text-navy-600' : 'text-navy-200'}`}>
                Company Secretaries
              </span>
            </div>
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <span
                  key={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed select-none opacity-60 ${active
                    ? scrolled
                      ? 'bg-navy-100 text-navy-900'
                      : 'bg-white/15 text-white'
                    : scrolled
                      ? 'text-navy-700'
                      : 'text-navy-100'
                    }`}
                >
                  {label}
                </span>
              );
            })}
            <span
              className="ml-3 px-5 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-lg opacity-50 cursor-not-allowed select-none"
            >
              Book Consultation
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white shadow-xl border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map(({ to, label }) => (
            <span
              key={to}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium cursor-not-allowed select-none opacity-60 ${location.pathname === to
                ? 'bg-navy-50 text-navy-900'
                : 'text-navy-700'
                }`}
            >
              {label}
            </span>
          ))}
          <span
            className="block mt-2 px-4 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-lg text-center opacity-50 cursor-not-allowed select-none"
          >
            Book Consultation
          </span>
        </div>
      </div>
    </nav>
  );
}