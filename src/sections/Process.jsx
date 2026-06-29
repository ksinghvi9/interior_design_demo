import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Discovery Dialogue",
      desc: "Every project begins with a deep, immersive dialogue. We explore your aesthetic leanings, daily spatial patterns, and lifestyle needs to co-author a design brief that feels uniquely yours.",
      image: "/assets/process_discovery.png"
    },
    {
      step: "02",
      title: "Spatial Geometries",
      desc: "We explore the physical potential of your architecture through raw floor plans and structural studies. We map volumes, sightlines, and human pathways before deciding on materials.",
      image: "/assets/process_sketching.png"
    },
    {
      step: "03",
      title: "Tactile Curation",
      desc: "We curate a cohesive palette of raw limestone, custom oak finishes, bronze trims, and tactile plaster. Our physical mood boards let you experience the exact touch and feel of your future home.",
      image: "/assets/process_materials.png"
    },
    {
      step: "04",
      title: "Architectural Renders",
      desc: "Through photorealistic 3D rendering, we illuminate our spatial concepts. Walk through lighting scenarios, furniture proportions, and color behaviors with absolute visual clarity.",
      image: "/assets/process_rendering.png"
    },
    {
      step: "05",
      title: "Millimeter Execution",
      desc: "Our master carpenters, masons, and project managers transition the drawings to site. We supervise every millwork fitting, plaster layer, and electrical conduit to ensure millimeter precision.",
      image: "/assets/process_craftsmanship.png"
    },
    {
      step: "06",
      title: "The Handover",
      desc: "The culmination of our journey: handing over your finished sanctuary. We style accessories, place art commissions, align decorative lighting, and welcome you home.",
      image: "/assets/after_living_room.png"
    }
  ];

  return (
    <section id="process" className="section-spacer bg-brand-bg transition-colors duration-500 border-t border-brand-border">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-left mb-24 max-w-xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold block mb-4">
            The Journey
          </span>
          <h2 className="font-sans font-normal text-[28px] lg:text-[48px] leading-[1.2] text-brand-textPrimary tracking-tight">
            Our Creative Process
          </h2>
          <p className="mt-6 text-[15px] lg:text-[17px] font-sans font-light text-brand-textSecondary leading-[1.8]">
            An immersive progression from a blank canvas to a bespoke, ready-to-live-in architectural sanctuary.
          </p>
        </div>

        {/* Desktop Sticky Visual Storytelling (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start relative">
          
          {/* Left Column: Sticky Image Viewer */}
          <div className="col-span-6 sticky top-[120px] h-[650px] w-full rounded-[12px] overflow-hidden border border-brand-border bg-brand-secBg">
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              
              {/* Floating active step number */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-bg border border-brand-border rounded-[4px] shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-accent font-semibold">
                  Phase {steps[activeStep].step}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Descriptions */}
          <div className="col-span-6 flex flex-col pl-6">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                onViewportEnter={() => setActiveStep(idx)}
                viewport={{ amount: 0.6 }}
                className={`min-h-[75vh] flex flex-col justify-center text-left transition-all duration-700 ease-out ${
                  activeStep === idx 
                    ? 'opacity-100 translate-x-2' 
                    : 'opacity-20 translate-x-0'
                }`}
              >
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-accent">
                  Phase {item.step}
                </span>
                <h3 className="font-sans font-normal text-[26px] lg:text-[32px] mt-3 mb-5 text-brand-textPrimary tracking-tight">
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
        <div className="block lg:hidden space-y-16">
          {steps.map((item, idx) => (
            <div key={idx} className="text-left space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-semibold">
                  Phase {item.step}
                </span>
                <div className="h-[1px] bg-brand-border/60 flex-grow" />
              </div>
              <h3 className="font-sans font-normal text-[22px] text-brand-textPrimary mt-1">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] leading-[1.7] font-light text-brand-textSecondary">
                {item.desc}
              </p>
              <div className="w-full aspect-[3/2] rounded-[12px] overflow-hidden border border-brand-border bg-brand-secBg">
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
