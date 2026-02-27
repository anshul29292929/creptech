import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BarChart3, TrendingUp } from 'lucide-react';
import { TextGenerateEffect } from './ui/text-generate-effect';

const PricingPhilosophy = () => {
  return (
    <section className="py-32 bg-deep-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <span className="text-primary-blue font-bold tracking-[0.3em] uppercase mb-4 block">Our DNA</span>
            <TextGenerateEffect 
              words="The Nominal Pricing Philosophy" 
              className="text-4xl md:text-6xl font-black mb-6"
            />
            <p className="text-text-dimmed text-xl mb-12 leading-relaxed max-w-xl">
              We believe elite technical performance shouldn't come with an enterprise tax. Our value-driven pricing model ensures that startups and scaling businesses can access top-tier engineering talent without breaking the bank.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary-blue/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-4">
                  <DollarSign size={20} />
                </div>
                <h4 className="font-bold text-white mb-2">Zero Hidden Costs</h4>
                <p className="text-sm text-text-dimmed">Transparent progress billing with zero surprises.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary-blue/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-4">
                  <BarChart3 size={20} />
                </div>
                <h4 className="font-bold text-white mb-2">ROI Focused</h4>
                <p className="text-sm text-text-dimmed">Every line of code is written to provide maximum value.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full group">
            <div className="absolute inset-0 bg-primary-blue/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="gradient-border p-[1px] rounded-[2.5rem] relative z-10">
              <div className="bg-surface-dark p-8 md:p-12 rounded-[2.5rem] backdrop-blur-3xl">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xs font-black text-text-dimmed uppercase tracking-[0.4em]">Efficiency Index</span>
                  <TrendingUp className="text-primary-blue animate-bounce" />
                </div>
                <div className="space-y-10">
                  {[
                    { label: "Cost Efficiency", value: 94 },
                    { label: "Delivery Speed", value: 88 },
                    { label: "Code Quality", value: 99 }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-bold mb-3">
                        <span className="text-white/70">{stat.label}</span>
                        <span className="text-primary-blue">{stat.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "circOut", delay: i * 0.2 }}
                          className="h-full bg-primary-blue shadow-[0_0_15px_rgba(0,123,255,0.8)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-text-dimmed italic">
                  "High performance. Honest pricing."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPhilosophy;
