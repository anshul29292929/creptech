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
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all cursor-grab active:cursor-grabbing group shadow-xl"
                    >
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h6 className="font-bold text-sm mb-0.5">{lead.company}</h6>
                             <p className="text-[10px] text-text-dimmed">{lead.contact}</p>
                          </div>
                          <div className="text-xs font-black text-red-500">{lead.value}</div>
                       </div>
                       
                       <div className="flex items-center gap-3 pt-4 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                          <MessageSquare size={12} className="hover:text-red-500 cursor-pointer" />
                          <Phone size={12} className="hover:text-red-500 cursor-pointer" />
                          <Mail size={12} className="hover:text-red-500 cursor-pointer" />
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
