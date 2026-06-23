import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layout, Compass, PenTool, Lightbulb, Flower, Paintbrush, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Residential Interiors",
      icon: <Layout size={18} className="text-brand-accent" />,
      desc: "Creating elegant, functional, and highly bespoke interior architecture tailored to the lifestyles of discerning homeowners."
    },
    {
      num: "02",
      title: "Villas & Farmhouses",
      icon: <Sparkles size={18} className="text-brand-accent" />,
      desc: "Comprehensive architecture and design solutions for massive family estates, integrating outdoor gardens with rich indoor living spaces."
    },
    {
      num: "03",
      title: "Turnkey Design & Execution",
      icon: <ShieldCheck size={18} className="text-brand-accent" />,
      desc: "Complete end-to-end studio management of your project, from blueprints to material procurement, contracting, and final key handover."
    },
    {
      num: "04",
      title: "Space Planning",
      icon: <Compass size={18} className="text-brand-accent" />,
      desc: "Masterful architectural floor plan revisions to optimize light channels, spatial ergonomics, acoustic comfort, and natural ventilation."
    },
    {
      num: "05",
      title: "Custom Furniture Design",
      icon: <PenTool size={18} className="text-brand-accent" />,
      desc: "Designing signature luxury furniture pieces—dining tables, consoles, cabinets—crafted specifically for your home's proportions."
    },
    {
      num: "06",
      title: "Lighting Design",
      icon: <Lightbulb size={18} className="text-brand-accent" />,
      desc: "Curation of architectural and decorative lighting systems to sculpt atmosphere, highlight fine art, and set ambient room tones."
    },
    {
      num: "07",
      title: "Styling & Décor",
      icon: <Flower size={18} className="text-brand-accent" />,
      desc: "Sourcing premium accessories, soft textiles, fine art, and biophilic plants to introduce the final layers of luxury and warmth."
    },
    {
      num: "08",
      title: "Luxury Apartments",
      icon: <Paintbrush size={18} className="text-brand-accent" />,
      desc: "Re-imagining urban high-rise living areas, maximizing layout efficiency while embedding high-end detailing and bespoke fittings."
    }
  ];

  return (
    <section id="services" className="section-spacer bg-brand-secBg text-brand-textPrimary transition-colors duration-500">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">Bespoke Offerings</span>
          <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2">
            Bespoke Services
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] font-sans font-light text-brand-textSecondary leading-[1.7] max-w-md">
            From complete architectural renovations to final styling details, we manage the entire project lifecycle with uncompromising attention to quality.
          </p>
        </div>

        {/* Services Cards Grid - Redesigned to rounded-2xl white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative group p-6 border border-brand-border bg-brand-card hover:bg-brand-bg transition-all duration-300 rounded-2xl flex flex-col justify-between h-[220px] shadow-sm hover:shadow-md hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              {/* Icon & Number */}
              <div className="flex items-center justify-between">
                <div className="p-2 border border-brand-border rounded-lg bg-brand-bg group-hover:bg-brand-card transition-colors">
                  {service.icon}
                </div>
                <span className="font-sans font-bold text-lg text-brand-border group-hover:text-brand-accent transition-colors select-none">
                  {service.num}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mt-4 text-left">
                <h3 className="font-sans font-semibold text-[15px] lg:text-[16px] text-brand-textPrimary tracking-normal">
                  {service.title}
                </h3>
                <p className="mt-1 text-[11px] font-sans text-brand-textSecondary leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
