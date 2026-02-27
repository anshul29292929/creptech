import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const markers = ["Intro", "Genesis", "Services", "Value", "Impact", "Connect"];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      <div className="h-64 w-[2px] bg-white/10 relative rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-primary origin-top"
          style={{ scaleY }}
        />
      </div>
      <div className="flex flex-col gap-8 items-end">
        {markers.map((label, i) => (
          <div key={i} className="group flex items-center gap-3 cursor-pointer">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
              {label}
            </span>
            <div className="w-2 h-2 rounded-full border border-white/20 group-hover:border-primary group-hover:bg-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
