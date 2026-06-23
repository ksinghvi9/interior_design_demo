import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What defines the Aurum Atelier luxury experience?",
      a: "Unlike traditional agencies, we operate as a boutique studio. We take on a limited number of commissions each year to ensure that Aarav Mehta directly oversees every detailing milestone. We avoid off-the-shelf catalog fittings, selecting instead custom limestone blocks, local wood mills, and custom metal workshops to craft elements from scratch."
    },
    {
      q: "What is your typical project scope and budget requirement?",
      a: "We specialize in comprehensive residential commissions (entire villas, farmhouses, penthouses, or 4+ BHK premium apartments). Our turnkey interior architectural services typically start at a project budget of ₹50 Lakhs, which covers design, construction supervision, custom cabinetry, bespoke furniture, and styling décor."
    },
    {
      q: "How long does a complete turnkey home design take?",
      a: "A typical high-end project progresses across 6 to 9 months. The first 6-8 weeks are dedicated to spatial planning, concept designs, and material curation. Execution and manufacturing require 4 to 6 months, depending on the scale and custom joinery requirements."
    },
    {
      q: "Do you manufacture your custom furniture collections in-house?",
      a: "Yes. Aurum Atelier has a dedicated manufacturing workshop in Gurugram, where our master carpenters manufacture Aarav's signature furniture drawings. We source natural walnut, dark oak, and Italian marbles directly, crafting bespoke dining units, bed frames, and wardrobe solutions exclusive to our commissions."
    },
    {
      q: "How involved do I need to be in the procurement and construction phase?",
      a: "For our Turnkey Design & Execution package, client involvement is minimal. Once we freeze layouts and material boards in the initial phases, we handle all procurement, contractor coordination, site supervision, and quality checks, presenting you with a completely styled home upon key handover."
    }
  ];

  return (
    <section className="section-spacer bg-brand-bg text-brand-textPrimary transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">Client Advisory</span>
          <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2">
            Advisory & FAQ
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent mx-auto mt-6" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="border-b border-brand-border pb-3"
              >
                {/* Accordion Title Trigger */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-3 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-sans font-semibold text-[15px] sm:text-base text-brand-textPrimary hover:text-brand-accent group-hover:text-brand-accent transition-colors duration-300 tracking-normal">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-full border border-brand-border text-brand-accent group-hover:border-brand-accent transition-colors duration-300 shrink-0 ml-4">
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[13px] lg:text-[14px] text-brand-textSecondary leading-relaxed font-light pb-3 pr-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
