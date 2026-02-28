import React from 'react';
import { motion } from 'framer-motion';

export default function JournalPage() {
  const articles = [
    { title: "The Future of Distributed Systems in 2026", date: "Oct 24, 2026", excerpt: "Deep dive into exactly how microservices are evolving with the introduction of new orchestrators." },
    { title: "Building a Design System from Scratch", date: "Sep 12, 2026", excerpt: "Our comprehensive guide to tokenizing colors and typography for uncompromised scaling." },
    { title: "Scaling PostgreSQL for SaaS Startups", date: "Aug 05, 2026", excerpt: "When to shard, when to read-replica, and why proper indexing changes the game." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-deep-black pb-32">
      <div className="container mx-auto px-6 max-w-4xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
        >
          Engineering <span className="text-primary-blue text-glow">Journal.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-dimmed leading-relaxed"
        >
          Insights, deep-dives, and technical write-ups from the CrepTech core team. Because elite engineering is meant to be shared.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-4xl mt-12 grid gap-12">
        {articles.map((art, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group block bg-surface-dark border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-primary-blue/30 transition-colors cursor-pointer"
          >
            <span className="text-primary-blue tracking-widest uppercase text-[10px] font-black block mb-4">
              {art.date}
            </span>
            <h2 className="text-3xl font-black mb-4 group-hover:text-primary-blue transition-colors">
              {art.title}
            </h2>
            <p className="text-text-dimmed text-lg">
              {art.excerpt}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
