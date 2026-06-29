import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

export default function Portfolio({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Villas', 'Apartments', 'Offices', 'Penthouses'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const renderMagazineLayout = () => {
    const elements = [];
    let i = 0;
    let featuredCount = 0;

    while (i < filteredProjects.length) {
      // 1. Featured Project (Large)
      if (i < filteredProjects.length) {
        const project = filteredProjects[i];
        const isRightImage = featuredCount % 2 !== 0; // Alternating layouts
        
        elements.push(
          <motion.div 
            key={`featured-${project.id}`} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Image Box */}
            <div className={`col-span-1 lg:col-span-7 ${isRightImage ? 'lg:order-2' : ''}`}>
              <div 
                className="relative aspect-[16/10] overflow-hidden rounded-[12px] group border border-brand-border cursor-pointer bg-brand-secBg"
                onClick={() => onSelectProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                />
                {/* Subtle dark overlay only on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Description Box */}
            <div className={`col-span-1 lg:col-span-5 text-left space-y-5 ${isRightImage ? 'lg:order-1' : ''}`}>
              <div className="flex justify-between items-baseline border-b border-brand-border/40 pb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-accent font-semibold">
                  {project.category}
                </span>
                <span className="text-[11px] font-sans text-brand-textSecondary font-light">
                  {project.specs.location}
                </span>
              </div>
              <h3 className="font-sans font-normal text-[26px] lg:text-[38px] leading-tight text-brand-textPrimary tracking-tight">
                {project.title}
              </h3>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] text-brand-textSecondary font-sans font-light">
                {project.description}
              </p>
              <button 
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-accent hover:text-brand-textPrimary transition-colors pt-2 cursor-pointer"
              >
                View Project Details →
              </button>
            </div>
          </motion.div>
        );
        
        i++;
        featuredCount++;
      }

      // 2. Supporting Projects (Two smaller side-by-side)
      if (i < filteredProjects.length) {
        const p1 = filteredProjects[i];
        const p2 = (i + 1 < filteredProjects.length) ? filteredProjects[i + 1] : null;

        elements.push(
          <div key={`supporting-row-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Supporting Project 1 */}
            <motion.div 
              className="flex flex-col text-left space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div 
                className="relative aspect-[3/2] overflow-hidden rounded-[12px] group border border-brand-border cursor-pointer bg-brand-secBg"
                onClick={() => onSelectProject(p1)}
              >
                <img 
                  src={p1.image} 
                  alt={p1.title} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-accent font-semibold">
                  {p1.category}
                </span>
                <span className="text-[10px] font-sans text-brand-textSecondary font-light">
                  {p1.specs.location.split(',')[0]}
                </span>
              </div>
              <h4 className="font-sans font-normal text-[20px] lg:text-[24px] text-brand-textPrimary tracking-tight">
                {p1.title}
              </h4>
              <p className="text-[13px] leading-[1.7] text-brand-textSecondary font-sans font-light">
                {p1.description}
              </p>
              <div>
                <button 
                  onClick={() => onSelectProject(p1)}
                  className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-semibold text-brand-accent hover:text-brand-textPrimary transition-colors cursor-pointer"
                >
                  View Project →
                </button>
              </div>
            </motion.div>

            {/* Supporting Project 2 OR CTA Callout */}
            {p2 ? (
              <motion.div 
                className="flex flex-col text-left space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <div 
                  className="relative aspect-[3/2] overflow-hidden rounded-[12px] group border border-brand-border cursor-pointer bg-brand-secBg"
                  onClick={() => onSelectProject(p2)}
                >
                  <img 
                    src={p2.image} 
                    alt={p2.title} 
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-brand-accent font-semibold">
                    {p2.category}
                  </span>
                  <span className="text-[10px] font-sans text-brand-textSecondary font-light">
                    {p2.specs.location.split(',')[0]}
                  </span>
                </div>
                <h4 className="font-sans font-normal text-[20px] lg:text-[24px] text-brand-textPrimary tracking-tight">
                  {p2.title}
                </h4>
                <p className="text-[13px] leading-[1.7] text-brand-textSecondary font-sans font-light">
                  {p2.description}
                </p>
                <div>
                  <button 
                    onClick={() => onSelectProject(p2)}
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-semibold text-brand-accent hover:text-brand-textPrimary transition-colors cursor-pointer"
                  >
                    View Project →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="flex flex-col justify-center items-start p-8 lg:p-12 border border-brand-border rounded-[12px] bg-brand-secBg/30 text-left space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-accent font-semibold">
                  Collaborate With Us
                </span>
                <h4 className="font-sans font-normal text-[20px] lg:text-[26px] text-brand-textPrimary tracking-tight leading-tight">
                  Ready to design your personal sanctuary?
                </h4>
                <p className="text-[13px] leading-[1.7] text-brand-textSecondary font-sans font-light">
                  Let us translate your lifestyle narrative into bespoke spatial design. Book an initial dialogue with our studio.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-accent hover:bg-brand-textPrimary text-white transition-all duration-300 text-[9px] uppercase tracking-widest font-semibold cursor-pointer rounded-[2px]"
                >
                  Request Consultation
                </button>
              </motion.div>
            )}
          </div>
        );
        
        i += 2;
      }
    }

    return elements;
  };

  return (
    <section id="portfolio" className="section-spacer bg-brand-bg transition-colors duration-500">
      <div className="layout-container">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">Featured Portfolios</span>
            <h2 className="font-sans font-normal text-[28px] lg:text-[48px] leading-[1.2] text-brand-textPrimary tracking-tight mt-2">
              Selected Work
            </h2>
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto no-scrollbar scroll-smooth flex-nowrap md:flex-wrap gap-2 md:gap-4 border-b border-brand-border pb-2 -mx-6 px-6 md:mx-0 md:px-0 w-[calc(100%+3rem)] md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1.5 transition-all duration-300 focus:outline-none cursor-pointer font-semibold whitespace-nowrap shrink-0 ${
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

        {/* Magazine Showcase Layout */}
        <div className="space-y-[100px] lg:space-y-[140px]">
          {renderMagazineLayout()}
        </div>

      </div>
    </section>
  );
}
