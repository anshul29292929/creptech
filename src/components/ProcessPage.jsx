import React from 'react';
import { motion } from 'framer-motion';
import SDLCFlow from './SDLCFlow';
import { CheckCircle2 } from 'lucide-react';

const detailedPhases = [
  {
    phase: "01. Discovery & Strategy",
    points: [
      "In-depth analysis of your business logic and market requirements.",
      "Defining clear objectives and measurable success criteria.",
      "Structuring high-level product roadmaps and feature prioritization."
    ]
  },
  {
    phase: "02. Architecture & Design",
    points: [
      "Designing scalable system architecture and robust database schemas.",
      "Creating intuitive user flows and wireframing best-in-class UI/UX.",
      "Selecting the optimal tech stack tailored for your performance needs."
    ]
  },
  {
    phase: "03. Engineering & Development",
    points: [
      "Writing clean, high-performance, and maintainable code.",
      "Implementing both frontend and backend systems simultaneously (Agile methodology).",
      "Regular code reviews and strict adherence to industry standards."
    ]
  },
  {
    phase: "04. Validation & QA",
    points: [
      "Rigorous automated and manual testing scenarios.",
      "Load testing and stress testing to ensure stability under heavy traffic.",
      "Security auditing to protect sensitive business and user data."
    ]
  },
  {
    phase: "05. Deployment & Launch",
    points: [
      "Configuring CI/CD pipelines for seamless future updates.",
      "Deploying applications to highly available cloud infrastructure.",
      "Monitoring initial user interactions to ensure flawless execution."
    ]
  },
  {
    phase: "06. Evolution & Scaling",
    points: [
      "Continuous performance monitoring and log analysis.",
      "Iterative feature development based on live user feedback.",
      "Scaling infrastructure vertically and horizontally as your user base grows."
    ]
  }
];

export default function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-black text-white selection:bg-primary-blue selection:text-white pb-32">
      <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
        >
          Our <span className="text-primary-blue text-glow">Process.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-dimmed leading-relaxed"
        >
          We employ a structured, transparent, and battle-tested methodology. From an idea to a highly scalable product, here is exactly how we deliver elite results.
        </motion.p>
      </div>

      <SDLCFlow />

      <section className="container mx-auto px-6 max-w-5xl mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Detailed <span className="text-primary-blue">Breakdown</span>
          </h2>
        </div>
        
        <div className="space-y-12">
          {detailedPhases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-dark/50 border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-primary-blue/30 transition-colors"
            >
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider text-glow">{item.phase}</h3>
              <ul className="space-y-4">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex gap-4 items-start text-text-dimmed text-lg">
                    <CheckCircle2 className="text-primary-blue mt-1 shrink-0" size={20} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
