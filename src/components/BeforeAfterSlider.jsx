import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Monitor container width dynamically to preserve image aspect ratio on resize/rotation
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      // Prevent background scrolling while dragging on touch screens
      if (e.cancelable) {
        e.preventDefault();
      }
      handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      // Bind with passive: false to allow e.preventDefault()
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden select-none cursor-ew-resize border border-brand-beige/35 dark:border-brand-darkMuted/30 shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
    >
      {/* Before Image (Background) */}
      <img 
        src={beforeImage} 
        alt="Before transformation" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 left-4 bg-brand-charcoal/80 text-brand-ivory text-[9px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-sm z-10">
        Before Design
      </div>

      {/* After Image (Foreground overlaid, width controlled by slider) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt="After design" 
          className="absolute top-0 left-0 h-full object-cover max-w-none"
          style={{ width: containerWidth ? `${containerWidth}px` : '100%', height: '100%' }}
        />
        <div className="absolute top-4 right-4 bg-brand-gold/90 text-brand-charcoal text-[9px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-sm z-10">
          After Design
        </div>
      </div>

      {/* Slider Line Separator */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-brand-gold z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Drag Handle Knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-charcoal border-2 border-brand-gold shadow-lg flex items-center justify-center pointer-events-auto text-brand-gold active:scale-95 transition-transform">
          <ChevronLeft size={14} className="mr-[-2px]" />
          <ChevronRight size={14} className="ml-[-2px]" />
        </div>
      </div>
    </div>
  );
}
