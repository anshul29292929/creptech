import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { HoverEffect } from './ui/card-hover-effect';

const tiers = [
  {
    title: "Small Scale",
    description: "Launch your idea with high-quality landing pages and rapid prototypes. Perfect for startups and MVPs.",
    link: "/services#small"
  },
  {
    title: "Medium Scale",
    description: "Scaled management tools and high-conversion e-commerce engines. Built for growing businesses.",
    link: "/services#medium"
  },
  {
    title: "Large Scale",
    description: "Complex distributed architectures with high-security constraints. Enterprise grade solutions.",
    link: "/services#large"
  }
];

export default function ServiceTiers() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">Expertise at <br /><span className="text-primary-blue text-glow">Every Scale.</span></h2>
            <p className="text-lg text-text-dimmed leading-relaxed">
              Tailored solutions designed to grow with your business. From initial MVP to global enterprise scale.
            </p>
          </div>
          <button className="text-primary-blue font-bold flex items-center gap-2 group">
            Explore All Solutions <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <HoverEffect items={tiers} />
      </div>
    </section>
  );
}
