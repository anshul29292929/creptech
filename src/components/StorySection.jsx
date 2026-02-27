import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection = ({ children, className = "", bgText = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [50, 0, 0, -50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className={`story-section ${className}`}>
      {/* Parallax Background Text/Shapes */}
      {bgText && (
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none"
        >
          <span className="text-[20vw] font-black uppercase whitespace-nowrap">{bgText}</span>
        </motion.div>
      )}
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full flex items-center justify-center p-6 z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default StorySection;
