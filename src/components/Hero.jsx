import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BackgroundBeams } from './ui/background-beams';
import { TextGenerateEffect } from './ui/text-generate-effect';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden bg-deep-black">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-text-dimmed">Available for new projects</span>
        </motion.div>

        <TextGenerateEffect 
          words="ELITE ENGINEERING FOR MODERN BRANDS" 
          className="text-5xl md:text-[7rem] font-black tracking-tighter leading-[0.85] mb-10 uppercase scale-y-[1.1] origin-bottom"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-text-dimmed leading-relaxed mb-12 font-medium"
        >
          We bridge the gap between heavy-duty engineering and world-class design. 
          Experience technical excellence at nominal pricing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-20"
        >
          <button className="px-10 py-5 bg-primary-blue text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_0_50px_rgba(0,123,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            Start Your Journey <ArrowRight size={16} />
          </button>
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all">
            Browse Portfolio
          </button>
        </motion.div>
      </div>

      {/* Hero Stats - Density Booster */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/5">
          {[
            { label: "Projects Delivered", value: "150+" },
            { label: "Technical Rating", value: "9.9/10" },
            { label: "Average ROI", value: "240%" },
            { label: "Uptime Promise", value: "99.9%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-left"
            >
              <div className="text-2xl md:text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-text-dimmed font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <BackgroundBeams />
    {/* Brand Punchlines Marquee */}
    <div className="w-full overflow-hidden border-b border-light-gray py-12 bg-[#050505] relative z-20">
       <motion.div 
         initial={{ x: 0 }}
         animate={{ x: "-50%" }}
         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
         className="flex whitespace-nowrap gap-x-20"
       >
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex gap-x-20 items-center">
              <span className="text-xl md:text-4xl font-black uppercase text-text-dimmed group">
                Tired of <span className="text-white group-hover:text-primary-blue transition-colors">high end prices</span> for websites?
              </span>
              <div className="w-4 h-4 rounded-full bg-primary-blue shadow-[0_0_15px_rgba(0,123,255,0.8)]" />
              <div className="text-xl md:text-4xl font-black uppercase text-text-dimmed group flex items-center gap-4">
                Looking for an agency <span className="text-white group-hover:text-primary-blue transition-colors">one call away?</span> 
                <a href="/contact" className="text-primary-blue underline underline-offset-8 decoration-4 hover:text-white transition-colors cursor-pointer">Your wait ends here.</a>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary-blue shadow-[0_0_15px_rgba(0,123,255,0.8)]" />
            </div>
          ))}
       </motion.div>
    </div>
    </>
  );
}
