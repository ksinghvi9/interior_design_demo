import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const servicesList = [
    {
      num: "01",
      title: "Interior Architecture",
      desc: "Creating sophisticated, custom interior layouts for premium apartments, estates, and penthouses. We design around spatial proportions, scale, and natural light channels to establish a harmonious flow before any decorative styling begins.",
      image: "/assets/project_urban_serenity.png",
      details: ["Spatial volume planning", "Sightline optimization", "Double-height detailing", "Lighting integration"]
    },
    {
      num: "02",
      title: "Turnkey Studio Management",
      desc: "Complete design execution from blueprints to final keys. We coordinate our curated network of contractors, engineers, and specialty craftsmen to oversee site management, procurement, and installations with millimeter-perfect precision.",
      image: "/assets/process_craftsmanship.png",
      details: ["Contractor supervision", "Procurement & logistics", "Project management", "Quality verification"]
    },
    {
      num: "03",
      title: "Bespoke Millwork & Furniture",
      desc: "Designing signature custom-crafted furniture, wardrobes, and kitchen counters in natural walnut, dark oak, and Italian marbles. Every piece is drawn in-house and built in our dedicated Gurugram workshop to fit your home's exact layout.",
      image: "/assets/gallery_kitchen.png",
      details: ["Custom cabinetry", "Sculptural marble islands", "Bespoke dining setups", "Material sourcing"]
    },
    {
      num: "04",
      title: "Art Curation & Final Styling",
      desc: "Sourcing and styling the final layer of your home. We curate international art pieces, soft linens, statement lighting, and biophilic elements that reflect your personality and give the space a warm, deeply lived-in luxury.",
      image: "/assets/gallery_bedroom.png",
      details: ["Fine art advisory", "Soft textile styling", "Acoustic layouts", "Bespoke lighting layouts"]
    }
  ];

  return (
    <section id="services" className="section-spacer bg-brand-bg text-brand-textPrimary transition-colors duration-500 overflow-hidden border-t border-brand-border">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-24 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold block mb-4">
            Bespoke Offerings
          </span>
          <h2 className="font-sans font-normal text-[28px] lg:text-[48px] leading-[1.2] text-brand-textPrimary tracking-tight">
            Our Services
          </h2>
          <p className="mt-6 text-[15px] lg:text-[17px] font-sans font-light text-brand-textSecondary leading-[1.8] max-w-lg">
            From initial architectural drafts to the final styling details, we manage the entire project lifecycle with an uncompromising commitment to quality and craft.
          </p>
        </div>

        {/* Alternating Split Layout List */}
        <div className="space-y-[120px] lg:space-y-[180px]">
          {servicesList.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Image Column */}
                <div className={`col-span-1 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div 
                    className="relative aspect-[3/2] overflow-hidden rounded-[12px] group border border-brand-border bg-brand-secBg"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                    />
                    {/* Dark overlay only on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className={`col-span-1 lg:col-span-6 text-left space-y-6 ${isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-accent block mb-2">
                      Phase {service.num}
                    </span>
                    <h3 className="font-sans font-normal text-[24px] lg:text-[36px] text-brand-textPrimary leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[15px] lg:text-[16px] text-brand-textSecondary leading-[1.8] font-sans font-light">
                      {service.desc}
                    </p>
                    
                    {/* Supporting Details */}
                    <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-brand-border/40 pt-6">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs font-sans text-brand-textSecondary font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
