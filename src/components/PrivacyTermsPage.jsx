import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyTermsPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-black pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12"
        >
          Privacy & <span className="text-primary-blue text-glow">Terms.</span>
        </motion.h1>

        <div className="bg-surface-dark border border-white/5 rounded-[2rem] p-8 md:p-12 space-y-8 text-text-dimmed text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-white mb-4">Data Collection</h2>
            <p>
              We collect minimal information necessary to process your inquiries and project requirements. The data submitted through our forms is securely stored and never sold to third parties. We employ strict access controls over the information you entrust us with.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Use of Cookies</h2>
            <p>
              We utilize essential operational cookies for maintaining continuous sessions and caching performance elements to ensure you experience immediate, robust load times whenever navigating CrepTech domains.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4">Service Terms</h2>
            <p>
              Engaging with CrepTech represents an agreement to adhere to rapid iteration. Prompt feedback during defined sprint windows is required to prevent timeline delays. We maintain the right to recalibrate milestones if external blockers emerge.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
