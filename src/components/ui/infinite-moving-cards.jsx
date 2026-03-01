"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-fit flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-3xl border border-white/5 flex-shrink-0 px-10 py-10 md:w-[500px] bg-[#050a14] group hover:border-primary-blue/30 transition-all duration-500 shadow-2xl relative overflow-hidden"
            key={item.name}
          >
            {/* Subtle glow on hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-blue/10 rounded-full blur-[80px] group-hover:bg-primary-blue/20 transition-all duration-500" />
            
            <blockquote className="relative z-20">
              <div className="mb-6">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-blue/60 group-hover:text-primary-blue transition-colors duration-500">
                  <path d="M0 16.6667C0 7.46193 7.46193 0 16.6667 0V8.33333C12.0643 8.33333 8.33333 12.0643 8.33333 16.6667H16.6667V30H0V16.6667Z" fill="currentColor"/>
                  <path d="M23.3333 16.6667C23.3333 7.46193 30.7952 0 40 0V8.33333C35.3976 8.33333 31.6667 12.0643 31.6667 16.6667H40V30H23.3333V16.6667Z" fill="currentColor"/>
                </svg>
              </div>

              <span className="relative z-20 text-lg md:text-xl leading-[1.6] text-white/90 font-medium italic mb-8 block font-inter">
                "{item.quote}"
              </span>

              <div className="relative z-20 mt-10 pt-8 border-t border-white/5 flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center shrink-0">
                  <span className="text-primary-blue font-black uppercase text-sm">{item.name.charAt(0)}</span>
                </div>
                <span className="flex flex-col gap-0.5">
                  <span className="text-base font-black text-white group-hover:text-primary-blue transition-colors duration-500 uppercase tracking-tight">
                    {item.name}
                  </span>
                  <span className="text-xs font-bold text-primary-blue/60 uppercase tracking-widest">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
