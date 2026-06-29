import React from 'react';

export default function Footer() {
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#D1D5DB] transition-colors duration-500 border-t border-white/[0.08] py-20 font-sans">
      <div className="layout-container">
        
        {/* Spacious 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Column 1: Company */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Company
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-light">
              <li>
                <button 
                  onClick={() => handleNav('about')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('process')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Contact
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-light text-[#D1D5DB]">
              <li>
                <span className="block text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Phone</span>
                <a href="tel:+919810088200" className="text-white hover:text-[#B08A5A] transition-colors duration-300">
                  +91 98100 88200
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Email</span>
                <a href="mailto:concierge@aurumatelier.com" className="text-white hover:text-[#B08A5A] transition-colors duration-300">
                  concierge@aurumatelier.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-wider text-white/50 mb-0.5">Address</span>
                <span className="text-[#D1D5DB]">
                  DLF Phase 5, Gurugram, India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-light">
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Follow Us
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-light">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 block"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://behance.net" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-[#B08A5A] transition-colors duration-300 block"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="border-t border-white/[0.05] pt-8 mt-16 text-center">
          <p className="text-xs text-[#9CA3AF] font-light">
            © 2026 Aurum Atelier. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
