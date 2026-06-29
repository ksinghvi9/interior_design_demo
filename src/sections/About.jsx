import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-spacer bg-brand-bg transition-colors duration-500 overflow-hidden">
      <div className="layout-container">
        
        {/* Editorial Grid: Heading Left, Story Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          
          {/* Left Column: Large Heading */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold block mb-4">
              The Studio Story
            </span>
            <h2 className="font-sans font-normal text-[36px] lg:text-[52px] leading-[1.15] text-brand-textPrimary tracking-tight">
              Curated Spaces.<br />
              Timeless<br />
              Craftsmanship.
            </h2>
          </div>

          {/* Right Column: Narrative Story (Max width 700px) */}
          <div className="lg:col-span-7 text-left space-y-6 max-w-[700px] w-full">
            <p className="text-[16px] lg:text-[18px] text-brand-textSecondary leading-[1.8] font-sans font-light">
              Aurum Atelier was founded with a singular purpose: to craft homes that balance sophisticated aesthetic vision with deep, personal comfort. Under the direction of principal designer Aarav Mehta, the studio rejects flashy, short-lived trends in favor of refined geometries, raw natural textures, and bespoke joinery.
            </p>
            <p className="text-[16px] lg:text-[18px] text-brand-textSecondary leading-[1.8] font-sans font-light">
              We operate as a close-knit boutique practice, accepting only a handful of commissions each year. This deliberate pace allows us to collaborate intimately with our clients, translating their personal narratives and functional requirements into highly tailored architectural sanctuaries.
            </p>
            <div className="pt-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-accent font-semibold block">
                Aarav Mehta
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-textSecondary font-medium mt-1 block">
                Principal Designer, Aurum Atelier
              </span>
            </div>
          </div>
        </div>

        {/* Large Lifestyle Landscape Image Below */}
        <motion.div 
          className="relative w-full aspect-[21/9] sm:aspect-[21/10] overflow-hidden rounded-[12px] group border border-brand-border bg-brand-secBg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/assets/process_materials.png" 
            alt="Tactile moodboard materials - marble, wood, and brass details" 
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
          />
          {/* Subtle overlay only on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
