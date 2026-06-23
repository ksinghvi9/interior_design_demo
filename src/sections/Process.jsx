import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Our design process starts with an initial immersive dialogue. We explore your aesthetic preferences, functional lifestyle needs, and investment parameters to shape the design brief.",
      image: "/assets/process_discovery.png"
    },
    {
      step: "02",
      title: "Concept Design",
      desc: "Developing raw hand-drawn spatial planning floor plans and structural layouts. We draft elevations and flow lines to map the structural possibilities of your rooms.",
      image: "/assets/process_sketching.png"
    },
    {
      step: "03",
      title: "Material Selection",
      desc: "We assemble tactile curation mood boards containing Calacatta marble, white oak wood, brass metal trims, custom plaster, and fabrics to define the exact touch and feel of your home.",
      image: "/assets/process_materials.png"
    },
    {
      step: "04",
      title: "3D Visualization",
      desc: "Creating high-fidelity, photorealistic 3D renders. Walk through ceiling volumes, lighting scenarios, and layout details so you can visualize the spaces before a single brick is laid.",
      image: "/assets/process_rendering.png"
    },
    {
      step: "05",
      title: "Execution",
      desc: "Our master carpenters, craftsmen, and site engineers construct the design. We coordinate all custom joinery fabrication and site fits, ensuring millimeter-perfect installations.",
      image: "/assets/process_craftsmanship.png"
    },
    {
      step: "06",
      title: "Final Reveal",
      desc: "The culmination of our design process: delivering your styled, fully finished sanctuary. We place art, curate light accents, style accessories, and hand over the keys.",
      image: "/assets/after_living_room.png"
    }
  ];

  return (
    <section id="process" className="section-spacer bg-brand-bg transition-colors duration-500 border-t border-brand-border">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">The Method</span>
          <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2">
            Our Creative Journey
          </h2>
        </div>

        {/* Desktop Sticky Visual Storytelling (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start relative">
          
          {/* Left Column: Sticky Cinemagraph Viewer */}
          <div className="col-span-6 sticky top-[100px] h-[600px] lg:h-[650px] w-full rounded-[20px] overflow-hidden border border-brand-border/60 shadow-sm bg-brand-secBg">
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.01 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    opacity: { duration: 0.5, ease: "easeInOut" },
                    scale: { duration: 0.5, ease: "easeInOut" }
                  }}
                />
              </AnimatePresence>
              
              {/* Gradient overlay for luxury contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating active step tag */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-bg/95 backdrop-blur-sm border border-brand-border rounded-lg shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-semibold">
                  Phase {steps[activeStep].step}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Descriptions */}
          <div className="col-span-6 flex flex-col">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                onViewportEnter={() => setActiveStep(idx)}
                viewport={{ amount: 0.6 }}
                className={`min-h-[80vh] flex flex-col justify-center border-l-2 pl-10 transition-all duration-500 text-left ${
                  activeStep === idx 
                    ? 'border-brand-accent opacity-100' 
                    : 'border-brand-border/40 opacity-30'
                }`}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-accent">
                  Phase {item.step}
                </span>
                <h3 className="font-sans font-semibold text-[26px] lg:text-[32px] mt-2 mb-4 text-[#1F1F1F]">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] lg:text-[16px] leading-[1.8] font-light max-w-md text-brand-textSecondary">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile Inline Layout (No Sticky Behavior) */}
        <div className="block lg:hidden flex flex-col gap-12">
          {steps.map((item, idx) => (
            <div key={idx} className="text-left border-l-2 border-brand-accent pl-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-semibold">
                Phase {item.step}
              </span>
              <h3 className="font-sans font-semibold text-[22px] text-[#1F1F1F] mt-2 mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] leading-[1.8] font-light text-brand-textSecondary mb-6">
                {item.desc}
              </p>
              <div className="w-full h-[240px] rounded-[20px] overflow-hidden border border-brand-border/60 bg-brand-secBg shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
