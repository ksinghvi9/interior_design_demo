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
      className="relative h-screen w-full overflow-hidden bg-brand-charcoal flex items-center justify-center"
    >
      {/* Background Image with Parallax & Dark Overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-[110%] -top-[5%] pointer-events-none"
        style={{ y: bgY }}
      >
        <motion.img 
          src="/assets/hero_living_room.png" 
          alt="Warm luxury living room interior design" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/55" 
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative layout-container z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="max-w-2xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: textY, opacity: opacityText }}
        >
          {/* Subtle gold tag */}
          <motion.span 
            className="inline-block text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold mb-5"
            variants={itemVariants}
          >
            Bespoke Architecture & Interiors
          </motion.span>

          {/* Headline */}
          <motion.h1 
            className="font-sans font-semibold text-[38px] sm:text-[48px] lg:text-[72px] text-white tracking-tight leading-[1.1] mb-6"
            variants={itemVariants}
          >
            Spaces Crafted Around Life.
          </motion.h1>

          {/* Subheadline (very little text) */}
          <motion.p 
            className="font-sans text-[15px] sm:text-[17px] leading-relaxed font-light tracking-wide mb-10 max-w-lg text-white/90"
            variants={itemVariants}
          >
            We design home sanctuaries that balance comfort, spatial elegance, and timeless craftsmanship.
          </motion.p>

          {/* Call to Action Button (One elegant CTA) */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <button 
              onClick={() => onNavigate('portfolio')}
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-brand-accent hover:bg-white text-white hover:text-[#1D1D1D] transition-all duration-500 text-[10px] uppercase tracking-[0.25em] font-semibold cursor-pointer border border-transparent rounded-[2px]"
            >
              View Projects
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => onNavigate('about')}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/70 font-semibold">Scroll Down</span>
        <div className="w-[1px] h-8 bg-brand-accent" />
      </motion.div>
    </section>
  );
}
