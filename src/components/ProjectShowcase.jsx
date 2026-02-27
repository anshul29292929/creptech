import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Activity, 
  BarChart2, 
  Shield, 
  Zap, 
  Server, 
  Terminal,
  Code2,
  Cpu,
  Layers,
  Globe,
  Settings,
  Bell
} from 'lucide-react';
import { cn } from '../lib/utils';
import RealEstateApp from './projects/RealEstateApp';
import HRMApp from './projects/HRMApp';
import CRMApp from './projects/CRMApp';
import PatientApp from './projects/PatientApp';
import InventoryApp from './projects/InventoryApp';

const projectData = {
  "patient-management": {
    title: "MedSync Pro",
    tagline: "HIPAA-compliant patient lifecycle management.",
    description: "A comprehensive healthcare orchestration platform. MedSync Pro handles everything from automated appointment triaging to secure, encrypted patient records and insurance verification.",
    stats: [
      { label: "Data Security", value: "AES-256", icon: <Shield size={16} /> },
      { label: "Sync Speed", value: "20ms", icon: <Zap size={16} /> },
      { label: "Uptime", value: "100%", icon: <Server size={16} /> }
    ],
    primaryColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    theme: "emerald",
    features: ["Biometric Login", "Automated Billing", "HL7/FHIR Integrated"]
  },
  "real-estate": {
    title: "EstateFlow",
    tagline: "The modern standard for property management.",
    description: "Scale your real estate portfolio with EstateFlow. Includes AI-driven valuation models, interactive 3D virtual tours, and a centralized portal for tenant-landlord communication.",
    stats: [
      { label: "Rendering", value: "60 FPS", icon: <Layers size={16} /> },
      { label: "Lead Gen", value: "+45%", icon: <Activity size={16} /> },
      { label: "Mobile-First", value: "React Native", icon: <Globe size={16} /> }
    ],
    primaryColor: "text-primary-blue",
    bgColor: "bg-primary-blue/10",
    theme: "blue",
    features: ["Virtual 3D Tours", "Instant Valuation", "Lease Automation"]
  },
  "inventory-management": {
    title: "Invox Ultra",
    tagline: "Intelligent warehouse & stock orchestration.",
    description: "Never run out of stock again. Invox Ultra uses predictive analytics to optimize reorder points and tracks inventory across multiple global locations in real-time.",
    stats: [
      { label: "Accuracy", value: "99.9%", icon: <Cpu size={16} /> },
      { label: "Throughput", value: "1M skus", icon: <Server size={16} /> },
      { label: "Speed", value: "Sub-1s", icon: <Zap size={16} /> }
    ],
    primaryColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    theme: "orange",
    features: ["RFID Integration", "AI Demand Forecasting", "Multi-Warehouse Sync"]
  },
  "hr-manager": {
    title: "HRPulse",
    tagline: "Empowering the modern workforce.",
    description: "A centralized hub for talent management. HRPulse streamlines the entire employee lifecycle—from automated onboarding and performance tracking to payroll integration.",
    stats: [
      { label: "Security", value: "ISO 27001", icon: <Shield size={16} /> },
      { label: "Concurrency", value: "50k users", icon: <Layers size={16} /> },
      { label: "Efficiency", value: "85%", icon: <Activity size={16} /> }
    ],
    primaryColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    theme: "purple",
    features: ["Performance Matrix", "Automated Payroll", "Employee Self-Service"]
  },
  "crm-lead-gen": {
    title: "LeadMagnet CRM",
    tagline: "Turn every lead into a conversion.",
    description: "The ultimate engine for sales teams. LeadMagnet identifies high-intent leads using machine learning and triggers automated, personalized engagement sequences across all channels.",
    stats: [
      { label: "Conversion", value: "3.5x", icon: <Activity size={16} /> },
      { label: "Automation", value: "E2E", icon: <Zap size={16} /> },
      { label: "Integration", value: "50+ Apps", icon: <Globe size={16} /> }
    ],
    primaryColor: "text-red-500",
    bgColor: "bg-red-500/10",
    theme: "red",
    features: ["AI Lead Scoring", "Email Sequencer", "Real-time Attribution"]
  }
};

export default function ProjectShowcase() {
  const { slug } = useParams();
  const project = projectData[slug] || projectData["quantum-saas"];
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [
        `> [SYS] Executing modular sync for ${project.title}...`,
        `> [AUTH] Handshake successful at ${new Date().toLocaleTimeString()}`,
        `> [IO] Stream processing: ${Math.random().toFixed(4)} Gbit/s`,
        ...prev
      ].slice(0, 5));
    }, 2000);
    return () => clearInterval(interval);
  }, [project]);

  return (
    <div className="min-h-screen bg-deep-black text-white pt-24 px-6 pb-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      
      {/* Dynamic Background Glow */}
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 transition-all duration-1000",
        project.bgColor
      )} />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-text-dimmed hover:text-white mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Lab
        </Link>

        {/* Title Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className={cn("text-xs font-black uppercase tracking-[0.4em]", project.primaryColor)}>{project.slug} // Engineering Lab</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-4 uppercase">
              {project.title}
            </h1>
            <p className="text-2xl text-text-dimmed leading-relaxed max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 py-4">
              {project.features.map(f => (
                <span key={f} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/70">
                  {f}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className={cn("px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all text-white", project.theme === 'blue' ? 'bg-primary-blue' : project.theme === 'emerald' ? 'bg-emerald-500' : project.theme === 'orange' ? 'bg-orange-500' : project.theme === 'purple' ? 'bg-purple-500' : 'bg-red-500')}>
                {project.slug === 'crm-lead-gen' ? 'Book a Strategy Call' : 'Book a Live Demo'}
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                Consult Experts
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Design Philosophy Heading & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              THIS IS HOW <br />
              <span className={cn("text-glow", project.primaryColor)}>WE DESIGN IT.</span>
            </h2>
          </div>
          <Link to="/contact" className={cn("px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all text-white", project.theme === 'blue' ? 'bg-primary-blue' : project.theme === 'emerald' ? 'bg-emerald-500' : project.theme === 'orange' ? 'bg-orange-500' : project.theme === 'purple' ? 'bg-purple-500' : 'bg-red-500')}>
            Get Yours Now
          </Link>
        </div>

        {/* Interactive App Window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[600px] md:h-[850px] mb-32"
        >
          <div className={cn("absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[100px] opacity-20", project.bgColor)} />
          <div className={cn("absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20", project.bgColor)} />

          <div className="gradient-border p-[1px] rounded-[3rem] bg-surface-dark overflow-hidden h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="bg-surface-dark p-3 rounded-[3rem] relative overflow-hidden h-full flex flex-col">
              <div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-6 justify-between shrink-0">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Secure Sandbox Environment // {project.title}_v2.0</div>
                 <div className="flex gap-4">
                    <div className="w-3 h-3 rounded bg-white/5" />
                    <div className="w-3 h-3 rounded bg-white/5" />
                 </div>
              </div>

              <div className="flex-1 w-full bg-[#050505] rounded-[2rem] overflow-hidden relative">
                 {slug === 'real-estate' && <RealEstateApp />}
                 {slug === 'hr-manager' && <HRMApp />}
                 {slug === 'crm-lead-gen' && <CRMApp />}
                 {slug === 'patient-management' && <PatientApp />}
                 {slug === 'inventory-management' && <InventoryApp />}
                 
                 {!['real-estate', 'hr-manager', 'crm-lead-gen', 'patient-management', 'inventory-management'].includes(slug) && (
                    <div className="w-full h-full p-12 flex flex-col gap-8 justify-center items-center text-center">
                       <Terminal size={64} className="text-white/10" />
                       <div>
                          <p className="text-text-dimmed font-mono text-sm leading-relaxed mb-4">Initializing fallback terminal...</p>
                          <div className="bg-[#0a0a0a] rounded-xl p-6 font-mono text-xs text-emerald-500/70 text-left border border-white/5 w-96 max-w-full">
                            {logs.map((log, i) => (
                              <div key={i} className="mb-1 leading-relaxed opacity-80">{log}</div>
                            ))}
                          </div>
                       </div>
                    </div>
                 )}
              </div>
            </div>
          </div>

          {/* Floating UI Badges */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 invisible md:visible">
             {[
               { icon: <Shield size={18} />, label: "Encrypted" },
               { icon: <Zap size={18} />, label: "High Performance" },
               { icon: <Server size={18} />, label: "Edge Native" }
             ].map((badge, i) => (
               <motion.div
                 key={i}
                 initial={{ x: 20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.5 + (i * 0.1) }}
                 className="px-4 py-3 rounded-xl bg-surface-dark border border-white/10 backdrop-blur-xl flex items-center gap-3 shadow-2xl"
               >
                  <div className={project.primaryColor}>{badge.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{badge.label}</span>
               </motion.div>
             ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <section className="mt-20 border-t border-white/5 pt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
             {project.stats.map((stat, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                   <div className={cn("mb-6", project.primaryColor)}>{stat.icon}</div>
                   <div className="text-4xl font-black mb-2">{stat.value}</div>
                   <div className="text-xs uppercase font-black tracking-[0.2em] text-text-dimmed">{stat.label}</div>
                </div>
             ))}
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="mt-20 py-20 border-t border-white/5">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">The Tech Behind the Magic.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Core Architecture", desc: "Built with distributed microservices for maximum horizontal scalability." },
              { title: "Global CDN", desc: "Edge functions deployed in 24 regions for sub-100ms global latency." },
              { title: "Security Layers", desc: "Zero-trust architecture with end-to-end hardware-level encryption." }
            ].map((card, i) => (
              <div key={i} className="bento-item">
                <h4 className="font-bold mb-4">{card.title}</h4>
                <p className="text-sm text-text-dimmed leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
