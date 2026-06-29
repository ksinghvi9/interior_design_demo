import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedCategory, setDisplayedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Dining', 'Office'];

  const items = [
    {
      id: 1,
      src: "/assets/after_living_room.png",
      alt: "Warm ivory plaster living room with modern marble fireplace and cream sofas",
      title: "Warm Ivory Salon",
      category: "Living Room"
    },
    {
      id: 2,
      src: "/assets/gallery_bedroom.png",
      alt: "Luxury master bedroom with plush silk linens, gold frame bed, and large forest window",
      title: "Minimalist Master Sanctuary",
      category: "Bedroom"
    },
    {
      id: 3,
      src: "/assets/gallery_kitchen.png",
      alt: "Sleek dark kitchen with white marble waterfall island and gold fixtures",
      title: "Marble Waterfall Island",
      category: "Kitchen"
    },
    {
      id: 4,
      src: "/assets/gallery_dining.png",
      alt: "Formal dining room with long marble oval table and gold chandelier",
      title: "Sculptural Brass Hall",
      category: "Dining"
    },
    {
      id: 5,
      src: "/assets/project_ivory_workspace.png",
      alt: "Bespoke home office with calacatta marble desk and oak shelves",
      title: "Marble & Oak Executive Suite",
      category: "Office"
    },
    {
      id: 6,
      src: "/assets/hero_living_room.png",
      alt: "Double height ceiling luxury living room with gold chandelier and stairs",
      title: "Double-Height Great Room",
      category: "Living Room"
    },
    {
      id: 7,
      src: "/assets/project_courtyard_residence.png",
      alt: "Central open courtyard with olive tree and reflection pool",
      title: "Biophilic Courtyard Lightwell",
      category: "Living Room"
    },
    {
      id: 8,
      src: "/assets/project_oakwood_penthouse.png",
      alt: "Penthouse library room with wood panels and spiral stairs",
      title: "Urban Penthouse Library",
      category: "Office"
    }
  ];

  const filteredItems = displayedCategory === 'All'
    ? items
    : items.filter(item => item.category === displayedCategory);

  const handleCategoryChange = (cat) => {
    if (cat === selectedCategory || isLoading) return;

    setSelectedCategory(cat);
    setIsLoading(true);

    // Fade out current grid, swap content, then fade back in
    setTimeout(() => {
      setDisplayedCategory(cat);
      setTimeout(() => {
        setIsLoading(false);
      }, 150);
    }, 150);
  };

  const openLightbox = (image) => {
    setActiveImage(image);
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="section-spacer bg-brand-bg transition-colors duration-500 border-t border-brand-border">
      <div className="layout-container">
        
        {/* Section Header & Minimal Category Filter tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold block mb-4">
              Inspiration Wall
            </span>
            <h2 className="font-sans font-normal text-[28px] lg:text-[48px] leading-[1.2] text-brand-textPrimary tracking-tight">
              Design Gallery
            </h2>
          </div>

          {/* Clean tabs styled to match portfolio filters */}
          <div className="flex overflow-x-auto no-scrollbar scroll-smooth flex-nowrap md:flex-wrap gap-2 md:gap-4 border-b border-brand-border pb-2 -mx-6 px-6 md:mx-0 md:px-0 w-[calc(100%+3rem)] md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1.5 transition-all duration-300 focus:outline-none cursor-pointer font-semibold whitespace-nowrap shrink-0 ${
                    isActive 
                      ? 'text-brand-accent border-b-2 border-brand-accent font-semibold' 
                      : 'text-brand-textSecondary hover:text-brand-accent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Container with Grid Layout */}
        <div className="relative min-h-[350px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              /* Shimmer Skeletons */
              <motion.div
                key="shimmer-skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div 
                    key={idx}
                    className="bg-brand-secBg/50 animate-pulse aspect-[4/3] rounded-[12px] border border-brand-border/40"
                  />
                ))}
              </motion.div>
            ) : (
              /* Grid Images (with 12px rounded corners and subtle hover zoom) */
              <motion.div
                key={`grid-${displayedCategory}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden group cursor-pointer border border-brand-border bg-brand-card aspect-[4/3] w-full rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => openLightbox(item)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Hover subtle dark mask & expand icon reveal */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 rounded-[12px]">
                      <div className="flex justify-end">
                        <div className="p-1.5 bg-brand-bg/90 rounded-full text-brand-textPrimary shadow-sm">
                          <Maximize2 size={10} />
                        </div>
                      </div>

                      <div className="text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="font-sans text-[8px] uppercase tracking-widest text-brand-accent font-semibold">
                          {item.category}
                        </span>
                        <h3 className="font-sans font-semibold text-[14px] text-white mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Component */}
      <Lightbox
        image={activeImage}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}
