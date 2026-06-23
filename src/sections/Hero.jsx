import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 600], ['0%', '15%']);
  const textY = useTransform(scrollY, [0, 600], ['0%', '10%']);
  const opacityText = useTransform(scrollY, [0, 450], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-[75vh] min-h-[500px] w-full overflow-hidden bg-brand-charcoal flex items-center justify-center border-b border-brand-border"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-[110%] -top-[5%] pointer-events-none"
        style={{ y: bgY }}
      >
        <img 
          src="/assets/hero_living_room.png" 
          alt="Warm luxury living room interior design" 
          className="w-full h-full object-cover"
        />
        {/* Preferred Dark Overlay for Legibility */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35))' }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative layout-container z-10">
        <motion.div
          className="max-w-xl text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: textY, opacity: opacityText }}
        >
          {/* Subtle gold tag */}
          <motion.span 
            className="inline-block text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold mb-3 animate-pulse-subtle"
            variants={itemVariants}
          >
            Bespoke Architecture & Interiors
          </motion.span>

          {/* Headline (White headings) */}
          <motion.h1 
            className="font-sans font-semibold text-[32px] lg:text-[56px] text-white tracking-normal leading-[1.2] mb-6"
            variants={itemVariants}
          >
            Spaces Crafted <br />
            <span className="text-brand-accent">Around Life.</span>
          </motion.h1>

          {/* Subheadline (rgba(255,255,255,0.9)) */}
          <motion.p 
            className="font-sans text-[16px] lg:text-[18px] leading-[1.7] font-light tracking-wide mb-8 max-w-md"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            variants={itemVariants}
          >
            We design homes that balance beauty, comfort, and timeless sophistication. Every detail is curated to express your personal narrative.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <button 
              onClick={() => onNavigate('portfolio')}
              className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-brand-accent text-white hover:bg-white hover:text-brand-accent transition-all duration-300 text-[11px] uppercase tracking-widest font-semibold cursor-pointer border border-transparent"
            >
              View Projects
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent text-white hover:text-brand-accent border border-white hover:border-brand-accent transition-all duration-300 text-[11px] uppercase tracking-widest font-semibold cursor-pointer"
            >
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => onNavigate('about')}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/70 font-semibold">Scroll Down</span>
        <div className="w-[1px] h-6 bg-brand-accent" />
      </motion.div>
    </section>
  );
}
