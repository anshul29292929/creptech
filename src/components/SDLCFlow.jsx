import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket, RefreshCcw, ChevronRight } from 'lucide-react';

const stages = [
  { id: "01", title: "Discovery", icon: <Search size={20} />, desc: "Business logic analysis & requirements." },
  { id: "02", title: "Architecture", icon: <PenTool size={20} />, desc: "System design & schema definition." },
  { id: "03", title: "Engineering", icon: <Code2 size={20} />, desc: "High-performance clean code implementation." },
  { id: "04", title: "Validation", icon: <ShieldCheck size={20} />, desc: "Rigorous QA & stress testing." },
  { id: "05", title: "Deployment", icon: <Rocket size={20} />, desc: "CI/CD pipeline & cloud scaling." },
  { id: "06", title: "Evolution", icon: <RefreshCcw size={20} />, desc: "Continuous improvement & scaling." }
];

export default function SDLCFlow() {
  return (
    <section className="py-40 bg-deep-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-4 block">The Lifecycle</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Our <span className="text-primary-blue text-glow">Development</span> Flow.</h2>
          <p className="text-text-dimmed max-w-2xl mx-auto">A continuous engineering cycle designed for speed, reliability, and infinite scalability.</p>
        </div>

        <div className="relative">
          {/* Main Flow Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
            {stages.map((stage, i) => (
              <div key={stage.id} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Node */}
                  <div className="w-16 h-16 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center mb-6 relative z-20 group-hover:border-primary-blue group-hover:shadow-[0_0_30px_rgba(0,123,255,0.3)] transition-all duration-500">
                    <div className="text-primary-blue">{stage.icon}</div>
                    
                    {/* Floating Pulse */}
                    <div className="absolute inset-0 rounded-2xl bg-primary-blue/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <span className="text-[10px] font-black text-primary-blue tracking-widest uppercase mb-2 block">{stage.id}</span>
                  <h3 className="text-lg font-black mb-3 text-white">{stage.title}</h3>
                  <p className="text-xs text-text-dimmed leading-relaxed px-4">{stage.desc}</p>
                </motion.div>

                {/* Animated Connecting Beam (Desktop Only) */}
                {i < stages.length - 1 && (
                  <div className="absolute top-8 left-[calc(100%-1rem)] w-full h-[2px] hidden lg:block overflow-hidden pointer-events-none">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "linear",
                        delay: i * 0.5
                      }}
                      className="w-20 h-full bg-gradient-to-r from-transparent via-primary-blue to-transparent shadow-[0_0_10px_rgba(0,123,255,1)]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Background Decorative Flow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-primary-blue/10 to-transparent -z-10 blur-sm" />
        </div>
        
        {/* Bottom CTA for the flow */}
        <div className="mt-24 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary-blue/5 border border-primary-blue/20"
            >
                <div className="flex -space-x-3">
                    {[1,2,3].map(n => (
                        <div key={n} className="w-8 h-8 rounded-full border-2 border-deep-black bg-surface-dark flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
                        </div>
                    ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue">Live Engineering Environment Active</span>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
