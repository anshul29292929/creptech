import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Home, Package, Users, Target, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    title: "MedSync Pro",
    slug: "patient-management",
    description: "End-to-end patient management system with HIPAA-compliant data encryption and automated scheduling.",
    className: "md:col-span-2 md:row-span-2",
    icon: <Activity className="text-emerald-500" />,
    stats: "HIPAA Compliant",
    tech: ["React", "FastAPI", "PostgreSQL"],
    thumbnail: "/assets/thumb_medsync.png",
    thumbGradient: "from-emerald-900/80 to-[#050a14]/95",
  },
  {
    title: "EstateFlow",
    slug: "real-estate",
    description: "Next-gen real estate platform featuring virtual tours and automated lead scoring.",
    className: "md:col-span-2 md:row-span-1",
    icon: <Home className="text-primary-blue" />,
    stats: "24/7 Virtual Tours",
    tech: ["Next.js", "Three.js"],
    thumbnail: "/assets/thumb_estateflow.png",
    thumbGradient: "from-blue-900/80 to-[#050a14]/95",
  },
  {
    title: "Invox Ultra",
    slug: "inventory-management",
    description: "Real-time warehouse tracking with AI-powered stock prediction.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Package className="text-orange-500" />,
    stats: "AI Forecasting",
    tech: ["Go", "Redis"],
    thumbnail: "/assets/thumb_invox.png",
    thumbGradient: "from-orange-900/80 to-[#050a14]/95",
  },
  {
    title: "HRPulse",
    slug: "hr-manager",
    description: "Modular HR suite for payroll, performance review, and onboarding.",
    className: "md:col-span-1 md:row-span-1",
    icon: <Users className="text-purple-500" />,
    stats: "Modular Core",
    tech: ["Ruby on Rails"],
    thumbnail: "/assets/thumb_hrpulse.png",
    thumbGradient: "from-purple-900/80 to-[#050a14]/95",
  },
  {
    title: "LeadMagnet CRM",
    slug: "crm-lead-gen",
    description: "High-conversion CRM with automated email sequences and lead attribution.",
    className: "md:col-span-4 md:row-span-1",
    icon: <Target className="text-red-500" />,
    stats: "240% Higher Conv.",
    tech: ["Python", "Node.js"],
    thumbnail: "/assets/thumb_leadmagnet.png",
    thumbGradient: "from-red-900/70 to-[#050a14]/95",
  },
];

export default function BentoPortfolio() {
  return (
    <section className="py-32 px-6 bg-deep-black">
      <Helmet>
        <title>Portfolio | CrepTech Case Studies & Selected Works</title>
        <meta name="description" content="Explore our curated collection of high-density digital engineering projects. See how CrepTech builds high-performing patient management systems, real estate platforms, and custom CRM solutions." />
        <link rel="canonical" href="https://creptech.online/portfolio" />
      </Helmet>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl text-left"
          >
            <span className="text-primary-blue font-black tracking-[0.4em] uppercase mb-4 block text-xs">
              Showcase
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              SELECTED <br />
              <span className="text-primary-blue text-glow">WORKS.</span>
            </h2>
            <p className="text-text-dimmed text-xl max-w-lg">
              High-density digital engineering for world-class enterprises. Every pixel and line of
              code optimized for performance.
            </p>
          </motion.div>
          <div className="flex flex-col items-end gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-primary-blue text-white font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,123,255,0.4)] transition-all flex items-center gap-2 group"
            >
              Book a Strategy Consultation{' '}
              <Rocket
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
            <span className="text-[10px] font-black text-text-dimmed uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Next Slot: Monday 10:00 AM
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[600px]">
          {projects.map((item, i) => (
            <Link
              to={`/project/${item.slug}`}
              key={i}
              className={cn(
                'group relative bento-item flex flex-col justify-between overflow-hidden',
                item.className
              )}
            >
              {/* Thumbnail — revealed on hover */}
              {item.thumbnail && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-b',
                      item.thumbGradient
                    )}
                  />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full flex flex-col justify-between relative z-10"
              >
                {/* Corner icon */}
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-primary-blue">
                      {item.stats}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-dimmed text-sm leading-relaxed max-w-[250px]">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold text-white/30">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    View Case <ExternalLink size={10} />
                  </span>
                </div>

                {/* Blue overlay tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-[1]" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
