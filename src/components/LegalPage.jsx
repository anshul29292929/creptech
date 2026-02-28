import React from 'react';
import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-black pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12"
        >
          Legal <span className="text-primary-blue text-glow">Information.</span>
        </motion.h1>

        <div className="bg-surface-dark border border-white/5 rounded-[2rem] p-8 md:p-12 space-y-8 text-text-dimmed text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-white mb-4">Company Overview</h2>
            <p>
              CrepTech operates as an elite software engineering group. By engaging our services, you accept our standard terms strictly dictating the scope, deliverables, and confidentiality protocols for the project lifecycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Intellectual Property</h2>
            <p>
              Upon successful delivery and realization of payment, all bespoke codebase artifacts transfer exclusively to the client unless structurally stipulated otherwise for re-use libraries and core components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Liability</h2>
            <p>
              Under no circumstances shall CrepTech be liable for any indirect, incidental, or consequential damages resulting from downtime of third-party cloud infrastructure or unforeseen market shifts affecting product utility.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
