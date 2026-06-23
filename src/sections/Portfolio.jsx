import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

export default function Portfolio({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Villas', 'Apartments', 'Offices', 'Penthouses'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="section-spacer bg-brand-bg transition-colors duration-500">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">Featured Portfolios</span>
            <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2">
              Selected Work
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-brand-border pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1.5 transition-all duration-300 focus:outline-none cursor-pointer font-semibold ${
                  selectedFilter === filter 
                    ? 'text-brand-accent border-b-2 border-brand-accent font-semibold' 
                    : 'text-brand-textSecondary hover:text-brand-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative group flex flex-col justify-between overflow-hidden bg-brand-card border border-brand-border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-[380px]"
              >
                {/* Image Section - Zoom & Dark overlay & View Project button reveal */}
                <div className="h-[185px] w-full overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]"
                  />
                  {/* Hover subtle dark overlay & "View Project" reveal */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-brand-accent/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest font-semibold rounded-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Card Details (High contrast styling) */}
                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[8px] uppercase tracking-widest text-[#666666] font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[9px] font-sans text-[#666666]">
                        {project.specs.location.split(',')[0]}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-[18px] lg:text-[20px] leading-tight text-[#1F1F1F] tracking-normal mt-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* View Details Button (Gold background, white text) */}
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="mt-4 w-full py-2.5 bg-brand-accent hover:bg-brand-textPrimary text-white transition-colors duration-300 text-[10px] uppercase tracking-widest font-semibold cursor-pointer rounded-lg text-center shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
