import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentView, onBackToHome, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentView === 'home') {
        const scrollPosition = window.scrollY + 180;
        for (const item of navItems) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(item.id);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Lock background scroll on mobile when menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-brand-bg/95 border-b border-brand-border py-3.5 shadow-sm backdrop-blur-md' 
            : 'bg-transparent border-b border-transparent py-6'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="layout-container flex items-center justify-between">
          
          {/* Logo & Monogram */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 focus:outline-none text-left cursor-pointer"
          >
            <svg viewBox="0 0 100 100" className={`w-8 h-8 stroke-current fill-none transition-colors duration-300 ${scrolled ? 'text-brand-textPrimary' : 'text-white'}`}>
              <circle cx="50" cy="50" r="45" stroke={scrolled ? "#B08A5A" : "rgba(255,255,255,0.3)"} strokeWidth="0.8" strokeDasharray="3 3" />
              <path d="M34 72 L49 28 L64 72 M40 58 L58 58" strokeWidth="1.8" />
              <path d="M38 72 L51 32 L64 72" stroke={scrolled ? "#B08A5A" : "rgba(255,255,255,0.6)"} strokeWidth="1" opacity="0.8" />
            </svg>
            <div className="flex flex-col">
              <span className={`font-sans font-semibold text-[15px] tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-brand-textPrimary' : 'text-white'}`}>
                Aurum Atelier
              </span>
              <span className={`text-[7px] uppercase tracking-[0.35em] font-light mt-0.5 transition-colors duration-300 ${scrolled ? 'text-brand-accent' : 'text-white/60'}`}>
                Luxury Interior Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Items */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="relative text-[10px] font-sans uppercase tracking-[0.2em] py-1.5 focus:outline-none cursor-pointer font-medium"
                  >
                    <span className={currentView === 'home' && activeSection === item.id 
                      ? 'text-brand-accent font-semibold' 
                      : (scrolled 
                          ? 'text-brand-textSecondary hover:text-brand-accent transition-colors' 
                          : 'text-white/80 hover:text-white transition-colors')
                    }>
                      {item.name}
                    </span>
                    {currentView === 'home' && activeSection === item.id && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent"
                        layoutId="activeNavLine"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 focus:outline-none cursor-pointer transition-colors ${
                isOpen ? 'text-brand-textPrimary' : (scrolled ? 'text-brand-textPrimary' : 'text-white')
              }`}
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col justify-center px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          >
            <ul className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="font-sans font-semibold text-2xl tracking-wider text-left focus:outline-none w-full py-1.5 border-b border-brand-border cursor-pointer text-brand-textPrimary hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
            
            <div className="absolute bottom-8 left-8 right-8 text-left border-t border-brand-border pt-4">
              <p className="text-[9px] uppercase tracking-widest text-brand-accent font-semibold">Aurum Atelier</p>
              <p className="text-[10px] font-sans text-brand-textSecondary mt-1">
                DLF Phase 5, Gurugram, India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
