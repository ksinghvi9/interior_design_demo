import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Pocket, Award } from 'lucide-react';

export default function About() {
  const designValues = [
    {
      icon: <Heart size={16} className="text-brand-accent" />,
      title: "Comfort",
      desc: "A home must feel like a sanctuary. We prioritize tactile warmth and natural comfort in every room."
    },
    {
      icon: <Compass size={16} className="text-brand-accent" />,
      title: "Functionality",
      desc: "True luxury is effortless utility. We plan spaces around the flow of daily life, not just optics."
    },
    {
      icon: <Pocket size={16} className="text-brand-accent" />,
      title: "Personal Expression",
      desc: "Your home should reflect your history. We collaborate closely to translate your journey into design."
    },
    {
      icon: <Award size={16} className="text-brand-accent" />,
      title: "Timeless Aesthetics",
      desc: "Avoiding fleeting trends. We focus on materials and geometries that age gracefully across decades."
    }
  ];

  const timelineMilestones = [
    { year: "2016", title: "Foundation", desc: "Aarav Mehta establishes Aurum Atelier in Gurugram." },
    { year: "2019", title: "AD 100 Landmark", desc: "Recognized among the top residential design firms in India." },
    { year: "2022", title: "Bespoke Collection", desc: "Launch of custom luxury furniture line, crafted in oak and marble." },
    { year: "2026", title: "A Decennial of Luxury", desc: "Celebrating 10+ years of designing spaces that feel like home." }
  ];

  return (
    <section id="about" className="section-spacer bg-brand-bg transition-colors duration-500 overflow-hidden">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">The Studio Story</span>
          <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2">
            Spaces Crafted Around Your Identity
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent mx-auto mt-6" />
        </div>

        {/* Grid: Founder Portrait and Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait capped at 400px */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-[400px] w-full px-4 sm:px-0">
              {/* Elegant Outer Border Frame */}
              <div className="absolute -top-3 -left-3 -bottom-3 -right-3 border border-brand-accent/20 pointer-events-none hidden sm:block" />
              
              {/* Main Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-secBg border border-brand-border rounded-xl">
                <img 
                  src="/assets/founder_aarav.png" 
                  alt="Aarav Mehta - Founder of Aurum Atelier" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-750"
                />
              </div>
              
              {/* Portrait Caption */}
              <div className="mt-3 flex justify-between items-baseline px-1">
                <div>
                  <p className="font-sans font-semibold text-base text-brand-textPrimary">Aarav Mehta</p>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-brand-accent font-semibold mt-0.5">
                    Principal Interior Designer
                  </p>
                </div>
                <span className="font-sans text-[10px] text-brand-textSecondary font-light">Gurugram Studio</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-[10px] uppercase tracking-widest text-brand-accent font-semibold">A Decade of Craftsmanship</span>
            <h3 className="font-sans font-semibold text-[22px] lg:text-[28px] leading-[1.4] text-brand-textPrimary tracking-normal mt-2">
              "We don't design to impress; we design to comfort."
            </h3>
            
            <p className="mt-6 text-[16px] lg:text-[18px] text-brand-textSecondary leading-[1.7] font-sans font-light">
              Aurum Atelier was founded by Aarav Mehta after a decade of working with leading luxury design firms. Aarav’s design philosophy rejects flashy extravagance. Instead, he believes in a refined luxury that relies on raw natural textures, bespoke craftsmanship, and generous proportions.
            </p>
            
            <p className="mt-4 text-[16px] lg:text-[18px] text-brand-textSecondary leading-[1.7] font-sans font-light">
              Under Aarav's direction, the studio has delivered bespoke residential sanctuaries across India. By aligning every project with the client's emotional landscape, we craft homes that stand the test of time, both structurally and aesthetically.
            </p>

            {/* Design Philosophy Value Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {designValues.map((value, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-1.5 border border-brand-border bg-brand-secBg rounded-lg shrink-0 mt-0.5">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[13px] lg:text-[14px] text-brand-textPrimary tracking-normal">
                      {value.title}
                    </h4>
                    <p className="font-sans text-[12px] text-brand-textSecondary leading-relaxed font-light mt-1">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Studio Timeline Block */}
        <div className="mt-20 border-t border-brand-border pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {timelineMilestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-6 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-brand-accent/30 pt-0 md:pt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <div className="absolute top-0 left-[-6px] md:top-[-6px] md:left-0 w-2.5 h-2.5 rounded-full bg-brand-accent" />
                <span className="font-sans font-semibold text-lg text-brand-accent leading-none">{milestone.year}</span>
                <h4 className="font-sans text-[11px] uppercase tracking-widest text-brand-textPrimary font-semibold mt-1">
                  {milestone.title}
                </h4>
                <p className="font-sans text-xs text-brand-textSecondary font-light mt-1">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
