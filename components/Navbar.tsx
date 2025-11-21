import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-lykofos-bg/90 backdrop-blur-md shadow-[0_0_15px_rgba(91,44,157,0.5)] border-b border-lykofos-primary/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="font-display text-2xl md:text-3xl font-bold text-white tracking-wider hover:text-lykofos-pastelBlue transition-colors">
              LYKOFOS AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-gray-300 hover:text-lykofos-pastelPink transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
              <a
                href="https://calendly.com/johnlykofos"
                target="_blank"
                rel="noreferrer"
                className="bg-lykofos-vibrantPink text-white hover:bg-white hover:text-lykofos-vibrantPink px-8 py-3 rounded-full font-display text-xs font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,0,128,0.4)] hover:shadow-[0_0_25px_rgba(255,0,128,0.6)] tracking-wider"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-lykofos-bg/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-white hover:bg-lykofos-primary/30 font-display hover:text-lykofos-pastelYellow"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a
              href="https://calendly.com/johnlykofos"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center mt-6 bg-lykofos-vibrantPink text-white px-4 py-4 rounded-md font-display font-bold text-sm shadow-lg"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;