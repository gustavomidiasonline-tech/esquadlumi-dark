import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-secondary border-b border-gray-800 hidden lg:block py-2 text-sm text-gray-300">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp_william}`} className="hover:text-primary transition-colors flex items-center gap-1">
              <Phone className="w-4 h-4" /> (35) 98416-2199
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-dark transition-all duration-300 border-b border-gray-900 ${isScrolled ? 'shadow-lg py-2' : 'py-4'} sticky top-0`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="https://esquadlumi.com.br/wp-content/uploads/2022/11/esquadlumi-300x127.png" 
                alt="Esquad Lumi" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'} w-auto brightness-0 invert`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 items-center font-medium">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link to={item.href} className="text-gray-100 hover:text-primary transition-colors py-2 tracking-wide text-sm uppercase">
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-secondary shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-gray-800 z-50">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.label} 
                        to={sub.href} 
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-primary hover:text-white border-b border-gray-800 last:border-0 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp_william}`} 
              className="bg-primary text-white px-6 py-2 rounded hover:bg-accent transition-colors shadow-md flex items-center gap-2 font-bold uppercase text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" /> Fale Conosco
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-secondary pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 text-lg">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-700 pb-2">
                  <Link 
                    to={item.href} 
                    className="font-semibold block mb-2 text-white hover:text-primary uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 flex flex-col gap-2 text-base text-gray-400">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.label} 
                          to={sub.href}
                          className="hover:text-primary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;