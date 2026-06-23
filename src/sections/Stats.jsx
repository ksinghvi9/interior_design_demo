import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ end, duration = 1.2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(handle);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: 250, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Awards Won" },
    { value: 10, suffix: "+", label: "Years Experience" }
  ];

  return (
    <section className="py-12 bg-brand-secBg text-brand-textPrimary transition-colors duration-500 border-y border-brand-border/40">
      <div className="layout-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              {/* Stat Value */}
              <span className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-brand-accent tracking-tight leading-none">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              
              {/* Stat Label */}
              <span className="mt-2.5 font-sans text-[9px] uppercase tracking-[0.2em] text-brand-textSecondary font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
