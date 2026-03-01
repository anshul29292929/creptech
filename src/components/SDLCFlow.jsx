import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  RefreshCcw, 
  Settings2,
  Workflow
} from 'lucide-react';

const stages = [
  { 
    id: "01", 
    title: "Discovery", 
    icon: <Search size={22} />, 
    desc: "Business logic analysis & requirements.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/30"
  },
  { 
    id: "02", 
    title: "Plan", 
    icon: <PenTool size={22} />, 
    desc: "System design & schema definition.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/30"
  },
  { 
    id: "03", 
    title: "Build", 
    icon: <Code2 size={22} />, 
    desc: "High-performance clean code implementation.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/30"
  },
  { 
    id: "04", 
    title: "Verify", 
    icon: <ShieldCheck size={22} />, 
    desc: "Rigorous QA & stress testing.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/30"
  },
  { 
    id: "05", 
    title: "Ship", 
    icon: <Rocket size={22} />, 
    desc: "CI/CD pipeline & cloud scaling.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    glow: "shadow-rose-500/20",
    border: "border-rose-500/30"
  },
  { 
    id: "06", 
    title: "Scale", 
    icon: <RefreshCcw size={22} />, 
    desc: "Continuous improvement & scaling.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30"
  }
];

export default function SDLCFlow() {
  return (
    <section className="py-40 bg-deep-black overflow-hidden relative">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.05),transparent_70%)] opacity-50" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Workflow size={14} className="text-primary-blue" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/70">The SDLC Engine</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            Automated <span className="text-primary-blue text-glow">Engineering</span> <br /> Process.
          </h2>
          <p className="text-text-dimmed max-w-2xl mx-auto text-lg leading-relaxed">
            Our proprietary workflow automates the transition from vision to deployment with surgical precision.
          </p>
        </div>

        <div className="relative">
          {/* Main Connection Lines (Desktop) */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-16 lg:gap-8 relative lg:px-4">
            {stages.map((stage, i) => (
              <div key={stage.id} className="relative group">
                {/* Node Connection Points */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:group-hover:block transition-all" />
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  {/* The Node */}
                  <div className={`relative w-24 h-24 rounded-3xl ${stage.bg} border ${stage.border} flex items-center justify-center p-1 mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg ${stage.glow}`}>
                    {/* Inner Node */}
                    <div className="w-full h-full rounded-2xl bg-surface-dark border border-white/5 flex items-center justify-center relative overflow-hidden">
                      <div className={`${stage.color} relative z-10 drop-shadow-[0_0_8px_currentColor]`}>
                        {stage.icon}
                      </div>
                      
                      {/* Node Active Pulse */}
                      <motion.div 
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 ${stage.bg}`} 
                      />
                    </div>

                    {/* Outer Rings */}
                    <div className={`absolute -inset-2 rounded-[2rem] border ${stage.border} opacity-0 group-hover:opacity-40 transition-opacity animate-spin-slow`} />
                    <div className={`absolute -inset-4 rounded-[2.5rem] border ${stage.border} opacity-0 group-hover:opacity-20 transition-opacity animate-spin-slow-reverse`} />
                  </div>

                  <div className="text-center space-y-2">
                    <span className={`text-[10px] font-black ${stage.color} tracking-widest uppercase`}>Step {stage.id}</span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">{stage.title}</h3>
                    <p className="text-[11px] text-text-dimmed leading-relaxed px-4 max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Data Particle Flow (Desktop-only) */}
                {i < stages.length - 1 && (
                  <div className="absolute top-[48px] left-[70%] w-full h-[2px] hidden lg:block overflow-hidden pointer-events-none z-0">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3 + (i * 0.5), 
                        ease: "linear",
                        delay: i * 0.3
                      }}
                      className={`w-24 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)]`}
                    />
                    
                    {/* Secondary Particle */}
                    <motion.div 
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2.5, 
                        ease: "linear",
                        delay: i * 0.8 + 1
                      }}
                      className="absolute top-0 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Control Bar */}
        <div className="mt-32 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center items-center gap-8 px-10 py-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-fast shadow-[0_0_10px_rgba(16,185,129,1)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Runtime: Optimized</span>
            </div>
            <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Settings2 size={14} className="text-primary-blue animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Automation: Enabled</span>
            </div>
            <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(n => (
                  <div key={n} className="w-6 h-6 rounded-full bg-primary-blue/20 border border-primary-blue/40 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-primary-blue" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue">Deployment Active</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        .animate-pulse-fast {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}} />
    </section>
  );
}
