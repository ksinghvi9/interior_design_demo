import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Layers, Calendar, Home } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function ProjectDetailPage({ project, projects, onNavigateToProject, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-24 pb-20 bg-brand-bg min-h-screen text-brand-textPrimary text-left font-sans"
    >
      <div className="layout-container">
        
        {/* Back navigation button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 mb-8 text-[11px] uppercase tracking-widest text-brand-accent hover:text-brand-textPrimary transition-colors focus:outline-none cursor-pointer font-semibold"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Project Header Title */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-accent font-semibold bg-brand-secBg px-3 py-1 rounded-md">
              {project.category}
            </span>
            <span className="text-xs text-brand-textSecondary font-medium">{project.specs.location}</span>
          </div>
          <h1 className="text-[32px] lg:text-[56px] leading-[1.2] font-semibold text-[#1F1F1F] mt-3">
            {project.title}
          </h1>
        </div>

        {/* Hero Image - Capped height at 550px with a protective dark gradient overlay */}
        <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-2xl border border-brand-border shadow-sm mb-12 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          {/* Universal contrast protection overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Specs & Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Specifications */}
          <div className="lg:col-span-4 bg-brand-secBg p-6 rounded-2xl border border-brand-border space-y-5">
            <h3 className="text-lg lg:text-[22px] text-[#1F1F1F] font-semibold tracking-normal border-b border-brand-border/40 pb-2">
              Project Details
            </h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-[#666666] font-semibold">Location</span>
                  <span className="font-semibold text-brand-textPrimary">{project.specs.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Home size={16} className="text-brand-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-[#666666] font-semibold">Area Size</span>
                  <span className="font-semibold text-brand-textPrimary">{project.specs.area}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Layers size={16} className="text-brand-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-[#666666] font-semibold">Materials Used</span>
                  <span className="font-semibold text-brand-textPrimary">{project.specs.materials}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-brand-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-[#666666] font-semibold">Completion Year</span>
                  <span className="font-semibold text-brand-textPrimary">{project.specs.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Overview & Philosophy */}
          <div className="lg:col-span-8 space-y-6 text-[16px] lg:text-[18px] leading-[1.7] text-brand-textSecondary">
            <div>
              <h3 className="text-lg lg:text-[22px] text-[#1F1F1F] font-semibold tracking-normal mb-3">
                Project Overview
              </h3>
              <p className="font-light">
                {project.description}
              </p>
            </div>
            
            <div className="pt-2">
              <h3 className="text-lg lg:text-[22px] text-[#1F1F1F] font-semibold tracking-normal mb-3">
                Design Philosophy
              </h3>
              <p className="font-light text-sm lg:text-base leading-relaxed">
                {project.story}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Image Gallery */}
        <div className="mb-16">
          <h3 className="text-lg lg:text-[22px] text-[#1F1F1F] font-semibold mb-6">
            Visual Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-brand-border relative group">
              <img 
                src={project.gallery[0]} 
                alt={`${project.title} detail 1`} 
                className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]" 
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
            <div className="h-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-brand-border relative group">
              <img 
                src={project.gallery[1]} 
                alt={`${project.title} detail 2`} 
                className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]" 
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Before/After Section */}
        <div className="mb-16 bg-brand-secBg p-6 md:p-8 rounded-2xl border border-brand-border">
          <div className="max-w-xl mb-6">
            <span className="text-[9px] uppercase tracking-widest text-brand-accent font-semibold">The Renovation</span>
            <h3 className="text-lg lg:text-[22px] text-[#1F1F1F] font-semibold mt-1">
              Before & After Transformation
            </h3>
            <p className="text-xs text-brand-textSecondary mt-1 leading-normal font-light">
              Slide the divider left and right to inspect the transition from the unrenovated room to our finished design.
            </p>
          </div>
          <BeforeAfterSlider 
            beforeImage="/assets/before_living_room.png" 
            afterImage="/assets/after_living_room.png" 
          />
        </div>

        {/* Client Testimonial */}
        <div className="mb-20 bg-brand-card p-8 rounded-2xl border border-brand-border shadow-sm border-l-4 border-l-brand-accent">
          <span className="text-[9px] uppercase tracking-widest text-brand-accent font-semibold block mb-3">Client Feedback</span>
          <p className="italic text-base lg:text-[18px] text-brand-textPrimary leading-relaxed">
            "{project.quote.text}"
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-[#666666] font-semibold">
            — {project.quote.author}, Client Representative
          </p>
        </div>

        {/* Related Projects Section */}
        <div className="border-t border-brand-border pt-12">
          <h3 className="text-lg lg:text-[22px] text-[#1F1F1F] font-semibold mb-8">
            Related Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((related) => (
              <div
                key={related.id}
                onClick={() => onNavigateToProject(related)}
                className="group cursor-pointer flex flex-col justify-between overflow-hidden bg-brand-card border border-brand-border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-[360px]"
              >
                {/* Related Image */}
                <div className="h-[185px] w-full overflow-hidden relative">
                  <img 
                    src={related.image} 
                    alt={related.title} 
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]"
                  />
                  {/* Subtle dark hover mask */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-brand-accent/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest font-semibold rounded-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                
                {/* Related Details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[8px] uppercase tracking-widest text-[#666666] font-semibold">{related.category}</span>
                      <span className="text-[9px] font-sans text-[#666666]">{related.specs.location.split(',')[0]}</span>
                    </div>
                    <h4 className="font-sans font-semibold text-[16px] lg:text-[18px] text-[#1F1F1F] mt-2 truncate">{related.title}</h4>
                  </div>
                  <button 
                    className="mt-4 w-full py-2 bg-brand-accent hover:bg-brand-textPrimary text-white transition-colors duration-300 text-[10px] uppercase tracking-widest font-semibold cursor-pointer rounded-lg text-center shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
