import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      text: "Aurum Atelier transformed our holiday home into an architectural masterpiece. The flow of natural light, the texture of the limestone walls, and the precision of the bespoke oak joinery are spectacular. True warm luxury.",
      author: "Devendra Goel",
      role: "Industrialist",
      location: "Alibaug"
    },
    {
      text: "Aarav's design philosophy resonates deeply. There is no loud, flashy styling; instead, there is a quiet, comfortable luxury that respects craftsmanship. Our apartment feels incredibly warm and customized.",
      author: "Priya Sharma",
      role: "Art Curator",
      location: "Mumbai"
    },
    {
      text: "The turnkey execution was flawless. The team managed contracting, custom furniture manufacturing, and art styling. We literally walked into a completed, sensory-rich home without experiencing any construction stress.",
      author: "Aditya Malhotra",
      role: "Tech Entrepreneur",
      location: "Gurugram"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-spacer bg-brand-secBg text-brand-textPrimary transition-colors duration-500 overflow-hidden relative border-t border-brand-border/40">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Section Header */}
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">Client Stories</span>
        <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2 mb-10">
          Client Feedback
        </h2>

        {/* Carousel Container */}
        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Star Ratings */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#B08A5A" color="#B08A5A" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-serif text-[18px] lg:text-[22px] font-light italic leading-relaxed text-brand-textPrimary max-w-2xl">
                "{reviews[index].text}"
              </p>

              {/* Author Details */}
              <div className="mt-6">
                <p className="font-sans text-xs uppercase tracking-widest text-brand-accent font-semibold">
                  {reviews[index].author}
                </p>
                <p className="font-sans text-[10px] text-brand-textSecondary tracking-wider mt-1 uppercase">
                  {reviews[index].role} • {reviews[index].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-2.5 border border-brand-border hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 rounded-full focus:outline-none cursor-pointer text-brand-textSecondary bg-brand-card shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={14} />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${
                  index === i ? 'w-6 bg-brand-accent' : 'w-2 bg-brand-border'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 border border-brand-border hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 rounded-full focus:outline-none cursor-pointer text-brand-textSecondary bg-brand-card shadow-sm"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
