import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 1.0, 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-bg transition-colors duration-500"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex flex-col items-center select-none">
        
        {/* Monogram SVG */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Outer dotted circle */}
            <motion.circle 
              cx="50" 
              cy="50" 
              r="46" 
              stroke="#B08A5A" 
              strokeWidth="0.8" 
              fill="none"
              strokeDasharray="4 4"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            {/* AA Monogram */}
            <motion.path 
              d="M32 75 L48 25 L64 75 M38 60 L58 60" 
              stroke="#2B2B2B" 
              strokeWidth="1.8" 
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path 
              d="M36 75 L52 25 L68 75 M42 60 L62 60" 
              stroke="#B08A5A" 
              strokeWidth="1.8" 
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            />
          </svg>
        </div>

        {/* Studio branding with Arimo font */}
        <motion.div 
          className="mt-5 text-center font-sans"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-xl font-bold tracking-[0.25em] text-brand-textPrimary uppercase">
            Aurum Atelier
          </h1>
          <p className="mt-1.5 text-[8.5px] uppercase tracking-[0.35em] text-brand-accent font-light">
            Luxury Interior Studio
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
