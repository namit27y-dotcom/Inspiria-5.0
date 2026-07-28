import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050814]/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching Inspiria official design */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="https://inspiria-5-0.vercel.app/images/inspiria%20logo.png"
              alt="Inspiria 5.0"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm sm:text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold border-b-2 border-emerald-400 pb-0.5'
                      : 'text-slate-200 hover:text-emerald-300'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Register Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenRegister}
              className="px-7 py-2.5 rounded-full font-orbitron text-xs font-bold tracking-widest text-slate-950 uppercase bg-[#a3e635] hover:bg-[#86efac] transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.5)] hover:shadow-[0_0_30px_rgba(163,230,53,0.8)] cursor-pointer"
            >
              REGISTER
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenRegister}
              className="px-3.5 py-1.5 rounded-full font-orbitron text-[11px] font-bold text-emerald-300 border border-emerald-400/80 bg-emerald-950/40"
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-xl font-orbitron text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors text-center shadow-[0_0_15px_rgba(52,211,153,0.4)]"
            >
              REGISTER FOR INSPIRIA 5.0
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
