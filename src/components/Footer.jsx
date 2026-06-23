import React from 'react';
import { Instagram, Linkedin, Pin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-brand-charcoal text-brand-ivory dark:bg-[#0D0D0D] transition-colors duration-500 border-t border-brand-beige/5 pt-16 pb-8">
      <div className="layout-container">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Branding Block */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="w-9 h-9 stroke-brand-gold fill-none">
                <circle cx="50" cy="50" r="45" strokeWidth="0.8" strokeDasharray="3 3" />
                <path d="M34 72 L49 28 L64 72 M40 58 L58 58" strokeWidth="1.8" />
                <path d="M38 72 L51 32 L64 72" stroke="#E7DDD0" strokeWidth="1" opacity="0.6" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-base font-medium tracking-[0.2em] text-brand-ivory uppercase">
                  Aurum Atelier
                </span>
                <span className="text-[7.5px] uppercase tracking-[0.35em] text-brand-gold font-light mt-0.5">
                  Luxury Interior Studio
                </span>
              </div>
            </div>
            <p className="font-sans text-[11px] text-brand-beige/60 leading-relaxed font-light max-w-sm">
              "Designing Spaces That Feel Like Home." We craft residences that balance classic beauty, natural textures, and modern functional elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-light text-brand-beige/70">
              {['home', 'about', 'portfolio', 'services', 'process', 'gallery', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleNav(item)}
                    className="hover:text-brand-gold capitalize transition-colors focus:outline-none cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
              Gurugram Studio
            </h4>
            <p className="text-xs font-light text-brand-beige/70 leading-relaxed">
              Horizon Drive, DLF Phase 5, Sector 54,<br />
              Gurugram, Haryana 122011, India
            </p>
            
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 border border-brand-beige/10 hover:border-brand-gold hover:text-brand-gold rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={12} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 border border-brand-beige/10 hover:border-brand-gold hover:text-brand-gold rounded-full transition-colors"
                aria-label="Pinterest"
              >
                <Pin size={12} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 border border-brand-beige/10 hover:border-brand-gold hover:text-brand-gold rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Fine Print */}
        <div className="border-t border-brand-beige/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[9px] font-sans text-brand-beige/40 font-light">
            © {currentYear} Aurum Atelier Studio. All rights reserved.
          </p>
          <div className="flex gap-4 text-[9px] font-sans text-brand-beige/40 font-light">
            <a href="#privacy" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-gold">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
