import React from 'react';
import { motion } from 'framer-motion';
import WebPricingSection from './WebPricingSection';

export default function PricingPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-black pb-32">
      <div className="container mx-auto px-6 text-center max-w-4xl mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
        >
          Transparent <span className="text-primary-blue text-glow">Pricing.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-dimmed leading-relaxed"
        >
          We believe in elite engineering without hidden fees. Explore our structured pricing tiers designed to scale with your business or project needs.
        </motion.p>
      </div>

      <WebPricingSection />

      <section className="container mx-auto px-6 max-w-5xl mt-24">
        <div className="bg-surface-dark border border-white/5 rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">How our pricing works</h2>
          <div className="space-y-6 text-text-dimmed text-lg leading-relaxed">
            <p>
              <strong className="text-white">Fixed vs Retainer:</strong> Our project-based engagements are fixed-cost, ensuring you never go over budget. For ongoing scaling and evolution, we offer monthly retainer models.
            </p>
            <p>
              <strong className="text-white">Full Transparency:</strong> What you see is what you pay. We include architecture, design, development, and standard QA in the final quote before we write a single line of code.
            </p>
            <p>
              <strong className="text-white">Scalability Assurance:</strong> Whether you choose our Startup MVP or Enterprise tier, the underlying code quality remains elite. We just adjust the scope, complexity, and feature sets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
