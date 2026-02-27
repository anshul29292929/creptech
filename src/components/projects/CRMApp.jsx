import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Target, TrendingUp, MessageSquare, Phone, Mail, Plus, Search, Filter } from 'lucide-react';
import { cn } from '../../lib/utils';

const INITIAL_PIPELINE = {
  new: [
    { id: '1', company: 'Global Spark', contact: 'John Doe', value: '$12,000' },
    { id: '2', company: 'TechNova', contact: 'Alice Smith', value: '$8,500' }
  ],
  negotiation: [
    { id: '3', company: 'Future Labs', contact: 'Bob Ross', value: '$45,000' }
  ],
  closed: [
    { id: '4', company: 'Nexus Inc', contact: 'Sarah Connor', value: '$22,400' }
  ]
};

export default function CRMApp() {
  const [view, setView] = useState('home');
  const [pipeline, setPipeline] = useState(INITIAL_PIPELINE);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLead, setNewLead] = useState({ company: '', contact: '', value: '' });

  const handleAddLead = (e) => {
    e.preventDefault();
    const lead = { ...newLead, id: Date.now().toString() };
    setPipeline(prev => ({
      ...prev,
      new: [lead, ...prev.new]
    }));
    setShowAddModal(false);
    setNewLead({ company: '', contact: '', value: '' });
  };

  const moveLead = (leadId, currentStatus) => {
    // Simple state mutation to simulate dragging/moving to next stage
    const nextStatusMap = {
      'new': 'negotiation',
      'negotiation': 'closed',
      'closed': 'new' // loops back just for demo purposes
    };
    
    setPipeline(prev => {
      const nextStatus = nextStatusMap[currentStatus];
      const leadToMove = prev[currentStatus].find(l => l.id === leadId);
      
      const newPipeline = {
        ...prev,
        [currentStatus]: prev[currentStatus].filter(l => l.id !== leadId),
        [nextStatus]: [leadToMove, ...prev[nextStatus]]
      };
      return newPipeline;
    });
  };

  if (view === 'home') {
    return (
      <div className="w-full h-full bg-[#050505] text-white flex flex-col relative overflow-y-auto overflow-x-hidden group/home">
        
        {/* Top Section (Hero) */}
        <div className="min-h-full flex flex-col relative shrink-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 group-hover/home:scale-105 transition-transform duration-[10s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
          
          <div className="relative z-10 px-10 py-8 flex justify-between items-center">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center font-black">L</div>
                <span className="text-sm font-black uppercase tracking-tighter">Lead<span className="text-red-500">Magnet</span> CRM</span>
             </div>
             <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/50">
                <span className="text-white">Pipeline</span>
                <span className="hover:text-white cursor-pointer transition-colors">Sales</span>
                <span className="hover:text-white cursor-pointer transition-colors">Automations</span>
             </div>
          </div>

          <div className="flex-1 relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-3xl"
             >
                <span className="text-red-500 font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Enterprise Lead Generation</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                  Close <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Faster.</span>
                </h1>
                <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-medium">
                  Track, nurture, and convert enterprise leads with a highly visual Kanban CRM. Designed for high-velocity sales teams.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button 
                    onClick={() => setView('portal')}
                    className="px-10 py-5 rounded-2xl bg-red-500 font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all active:scale-95 text-white"
                   >
                      Initiate Demo Site Now
                   </button>
                </div>
             </motion.div>
          </div>

          <div className="relative z-10 px-10 py-8 border-t border-white/5 bg-black/40 flex justify-center gap-16 overflow-x-auto">
             {[
               { label: "Sales Rebooked", value: "$4.2M+" },
               { label: "Win Rate", value: "32.4%" },
               { label: "Time Saved", value: "14h/wk" }
             ].map(stat => (
               <div key={stat.label} className="text-center">
                  <div className="text-xl font-black mb-1">{stat.value}</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Scrollable Extra Section */}
        <div className="relative z-10 bg-[#050505] shrink-0 py-24 px-10">
           <div className="max-w-5xl mx-auto">
              <span className="text-red-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block text-center">Pipeline Architect</span>
              <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">Velocity Focused</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Smart Routing", icon: <Target size={32} />, desc: "Automatically distribute leads to the highest-performing closing agents based on analytics." },
                   { title: "One-Click Calls", icon: <Phone size={32} />, desc: "Built-in VOIP dialer so reps never leave the system to close a prospect." },
                   { title: "Email Sequencing", icon: <Mail size={32} />, desc: "Set up multi-stage drip campaigns that pause automatically upon human reply." }
                 ].map((feature, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all">
                      <div className="text-red-500 mb-4">
                         {feature.icon}
                      </div>
                      <h4 className="text-xl font-black mb-3">{feature.title}</h4>
                      <p className="text-sm text-white/50">{feature.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#080808] flex flex-col rounded-3xl overflow-hidden border border-white/5 text-white relative">
      {/* Lead Modal */}
      {showAddModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="w-full max-w-md bg-surface-dark border border-white/10 rounded-3xl p-8"
           >
              <h4 className="text-xl font-black mb-6 uppercase tracking-tighter">Capture New Lead</h4>
              <form onSubmit={handleAddLead} className="space-y-4">
                 <input required value={newLead.company} onChange={e => setNewLead({...newLead, company: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500" placeholder="Target Company" />
                 <input required value={newLead.contact} onChange={e => setNewLead({...newLead, contact: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500" placeholder="Point of Contact" />
                 <input required value={newLead.value} onChange={e => setNewLead({...newLead, value: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500" placeholder="Deal Value (e.g. $50,000)" />
                 <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-[10px] font-black uppercase text-text-dimmed">Cancel</button>
                    <button type="submit" className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-[10px] font-black uppercase">Launch Campaign</button>
                 </div>
              </form>
           </motion.div>
        </div>
      )}

      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20 shrink-0">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center font-black">L</div>
            <div>
               <h4 className="text-sm font-black uppercase tracking-tight">LeadMagnet <span className="text-red-500">CRM</span></h4>
               <p className="text-[10px] text-text-dimmed uppercase font-bold tracking-widest">Global Sales Pipeline</p>
            </div>
         </div>
         <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all">
               <Filter size={16} />
            </button>
            <button onClick={() => setShowAddModal(true)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all">
               <Plus size={14} /> New Lead
            </button>
         </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 p-6 flex gap-6 overflow-x-auto min-w-full">
         {Object.entries(pipeline).map(([column, leads]) => (
            <div key={column} className="flex-1 min-w-[300px] flex flex-col">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                     <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-dimmed">{column}</h5>
                     <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-bold text-white/50">{leads.length}</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
               </div>
               
               <div className="flex-1 space-y-4">
                  {leads.map(lead => (
                    <motion.div 
                      layout
                      key={lead.id}
                      onClick={() => moveLead(lead.id, column)}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all cursor-pointer group shadow-xl"
                    >
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h6 className="font-bold text-sm mb-0.5">{lead.company}</h6>
                             <p className="text-[10px] text-text-dimmed">{lead.contact}</p>
                          </div>
                          <div className="text-xs font-black text-red-500">{lead.value}</div>
                       </div>
                       
                       <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                             <MessageSquare size={12} className="hover:text-red-500 cursor-pointer" />
                             <Phone size={12} className="hover:text-red-500 cursor-pointer" />
                             <Mail size={12} className="hover:text-red-500 cursor-pointer" />
                          </div>
                          <div className="text-[8px] font-black uppercase text-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
                             Shift Stage ➔
                          </div>
                       </div>
                    </motion.div>
                  ))}
                  <div onClick={() => setShowAddModal(true)} className="p-4 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-white/10 hover:text-white/20 hover:border-white/10 transition-all cursor-pointer">
                     <Plus size={20} />
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* Dashboard Footer Stats */}
      <div className="p-6 bg-black/40 border-t border-white/5 flex items-center gap-12 overflow-x-auto">
         {[
           { label: "Rev Forecast", value: "$142,500", icon: <TrendingUp size={14} className="text-emerald-500" /> },
           { label: "Active Deals", value: "24 Items", icon: <Target size={14} className="text-red-500" /> },
           { label: "Conversion Rate", value: "18.4%", icon: <Activity size={14} className="text-primary-blue" /> }
         ].map(stat => (
           <div key={stat.label} className="flex items-center gap-3 shrink-0">
              <div className="p-2 rounded-lg bg-white/5">{stat.icon}</div>
              <div>
                 <div className="text-[8px] uppercase font-black tracking-widest text-text-dimmed">{stat.label}</div>
                 <div className="text-xs font-black">{stat.value}</div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

const Activity = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
