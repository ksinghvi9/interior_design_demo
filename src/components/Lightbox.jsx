import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Lightbox({ image, isOpen, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-brand-gold hover:rotate-90 transition-all duration-300 z-[101]"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Large image wrapper */}
          <motion.div
            className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.alt || 'Gallery closeup'}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/5"
            />
            {/* Overlay description details */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold">
                {image.category}
              </span>
              <h3 className="font-serif text-lg text-white mt-1">
                {image.title || 'Exquisite Design Details'}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
