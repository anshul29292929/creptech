"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null);

  useEffect(() => {
    if (!beamsRef.current) return;
    const beams = beamsRef.current;
    
    // Simple pulse animation for the beams
    const animate = () => {
      const time = Date.now() * 0.001;
      const opacity = Math.sin(time) * 0.2 + 0.3;
      beams.style.opacity = opacity.toString();
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 z-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary-blue)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-primary-blue)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-primary-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="10" y="0" width="0.2" height="100" fill="url(#beam-grad)" />
        <rect x="30" y="0" width="0.2" height="100" fill="url(#beam-grad)" />
        <rect x="50" y="0" width="0.2" height="100" fill="url(#beam-grad)" />
        <rect x="70" y="0" width="0.2" height="100" fill="url(#beam-grad)" />
        <rect x="90" y="0" width="0.2" height="100" fill="url(#beam-grad)" />
      </svg>
    </div>
  );
};
