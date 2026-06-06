import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Menu, X, Phone, Instagram } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Navbar({ activeView, onViewChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'FAQs & Info', id: 'faqs' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    onViewChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-royal-blue/98 shadow-lg border-b border-gold-accent/25 py-2'
          : 'bg-royal-blue py-4 md:py-5 border-b border-white/10'
      }`}
    >
      {/* Top micro-bar for direct premium values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gold-accent/90 flex justify-between items-center pb-2 border-b border-white/5 mb-2 -mt-1 md:flex hidden font-sans tracking-wide">
        <div className="flex items-center space-x-1">
          <Crown className="w-3.5 h-3.5 text-gold-accent fill-gold-accent/20" />
          <span>Serving the Phoenix Valley Since 2009 — Family Owned & Managed</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:6025550190"
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call/Text: (602) 555-0190</span>
          </a>
          <a
            href="https://instagram.com/royal_house_cleaning_az"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@royal_house_cleaning_az</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <button
            onClick={() => handleNavClick('home')}
            id="brand-logo-btn"
            className="flex items-center space-x-2 text-left group focus:outline-none"
          >
            <div className="bg-gradient-to-br from-gold-accent to-amber-600 p-1.5 rounded-lg shadow-inner flex items-center justify-center">
              <Crown className="w-6 h-6 text-royal-blue fill-royal-blue/10 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-white leading-none tracking-tight">
                Royal House Cleaning
              </span>
              <span className="block text-xs uppercase tracking-widest text-gold-accent font-medium leading-none mt-1">
                Arizona LLC 👑
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-accent'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Booking Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('booking')}
              id="cta-booking-btn-desktop"
              className="bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-500 hover:to-gold-accent text-royal-dark font-sans font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-gold-accent/20 border border-gold-light/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => handleNavClick('booking')}
              className="mr-2 bg-gradient-to-r from-gold-accent to-amber-500 text-royal-dark text-xs font-semibold px-3 py-2 rounded-md shadow"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-drawer-toggle"
              className="text-white hover:text-gold-accent p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-royal-dark border-t border-gold-accent/20 overflow-hidden font-sans"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-gold-accent/15 text-gold-accent border-l-4 border-gold-accent'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-white/10 mt-4 px-4 space-y-3">
                <p className="text-xs text-gold-accent font-medium tracking-wide uppercase">
                  Direct Inquiries
                </p>
                <a
                  href="tel:6025550190"
                  className="flex items-center space-x-2 text-white/90 hover:text-gold-accent text-sm"
                >
                  <Phone className="w-4 h-4 text-gold-accent" />
                  <span>Call or Text: (602) 555-0190</span>
                </a>
                <a
                  href="https://instagram.com/royal_house_cleaning_az"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-white/90 hover:text-gold-accent text-sm pb-2"
                >
                  <Instagram className="w-4 h-4 text-gold-accent" />
                  <span>@royal_house_cleaning_az</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
