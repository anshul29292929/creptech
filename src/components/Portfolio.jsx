import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Fintech App", category: "Mobile SaaS", color: "bg-blue-600" },
  { id: 2, title: "Aura E-com", category: "Web Engine", color: "bg-purple-600" },
  { id: 3, title: "Vault Security", category: "Cyber Architecture", color: "bg-emerald-600" },
  { id: 4, title: "Nebula Core", category: "Enterprise Dashboard", color: "bg-orange-600" },
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-6">SELECTED <span className="text-primary-blue">WORKS</span></h2>
          <p className="text-text-dimmed max-w-xl mx-auto italic">Quality over quantity. Every project is a testament to our engineering philosophy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
              <div className="absolute inset-0 bg-noise" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-110 transition-transform duration-700">
                  <span className="text-xs font-black tracking-[0.4em] uppercase text-white/40 group-hover:text-primary-blue transition-colors">{project.category}</span>
                  <h3 className="text-4xl font-bold mt-2">{project.title}</h3>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-xl transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowRightAlt size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight as ArrowRightAlt } from 'lucide-react';
