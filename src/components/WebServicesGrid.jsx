import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  ShoppingCart,
  Briefcase,
  RefreshCw,
  Search,
  Wrench,
  ChevronRight,
} from 'lucide-react';

const webServices = [
  {
    icon: <Briefcase size={28} />,
    title: 'Business Website Development',
    description:
      'Professional, conversion-optimised websites built to establish credibility and drive growth for businesses of all sizes.',
    accent: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
    border: 'border-primary-blue/20 hover:border-primary-blue/50',
  },
  {
    icon: <ShoppingCart size={28} />,
    title: 'E-commerce Websites',
    description:
      'Feature-rich online stores with secure payments, inventory management, and seamless checkout experiences that convert.',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
  },
  {
    icon: <Globe size={28} />,
    title: 'Portfolio Websites',
    description:
      'Stunning, animated portfolios that showcase your work and personal brand with a powerful first impression.',
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/50',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Website Redesign',
    description:
      'Transform your outdated website into a modern, high-performing digital experience without losing your existing audience.',
    accent: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20 hover:border-orange-500/50',
  },
  {
    icon: <Search size={28} />,
    title: 'SEO Optimization',
    description:
      'Data-driven SEO strategies that push your site to the top of search results and bring in organic, high-intent traffic.',
    accent: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20 hover:border-yellow-500/50',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, security patches, performance monitoring, and content management so your site stays fast and secure.',
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20 hover:border-red-500/50',
  },
];

export default function WebServicesGrid() {
  const carouselRef = useRef(null);

  // Auto-rotating mobile carousel
  useEffect(() => {
    // Only engage on mobile (<640px)
    const handleAutoScroll = () => {
      if (window.innerWidth >= 640 || !carouselRef.current) return;
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (!carouselRef.current) return;
        currentIndex = (currentIndex + 1) % webServices.length;
        const cardWidth = carouselRef.current.children[0].offsetWidth + 24; // Card width + gap-6(24px)
        carouselRef.current.scrollTo({
          left: currentIndex * cardWidth,
          behavior: 'smooth',
        });
      }, 3000); // Swipe every 3 seconds

      return () => clearInterval(interval);
    };

    const cleanup = handleAutoScroll();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section id="services" className="py-32 px-6 bg-deep-black relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:max-w-2xl"
          >
            <span className="text-primary-blue font-black tracking-[0.4em] uppercase mb-4 block text-[10px] sm:text-xs">
              What We Build
            </span>
            <h2 className="text-4xl xs:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase break-words whitespace-normal">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Services
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-primary-blue text-glow"
              >
                We Provide.
              </motion.div>
            </h2>
            <p className="text-text-dimmed text-base sm:text-xl max-w-lg leading-relaxed">
              From idea to launch — we cover every facet of web development so you can focus on
              growing your business.
            </p>
          </motion.div>
          <Link
            to="/contact"
            className="shrink-0 flex items-center gap-2 group text-primary-blue font-black text-xs uppercase tracking-widest hover:gap-3 transition-all pb-1"
          >
            Contact Now <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Grid — Mobile Carousel -> Tablet/Desktop Grid */}
        <div
          ref={carouselRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth pb-8 pt-4 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:snap-none"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {webServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`w-[85vw] sm:w-auto shrink-0 snap-center group relative rounded-3xl border p-6 sm:p-8 cursor-default transition-all duration-300 ${service.border} bg-white/[0.02] hover:bg-white/[0.04]`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 ${service.accent} transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-black mb-3 tracking-tight text-white">{service.title}</h3>
              <p className="text-sm text-text-dimmed leading-relaxed">{service.description}</p>

              {/* Hover arrow */}
              <div
                className={`mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
              >
                <Link to="/contact" className="flex items-center gap-1 hover:underline">
                  Get a Quote <ChevronRight size={12} />
                </Link>
              </div>

              {/* Subtle corner glow */}
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${service.bg}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
