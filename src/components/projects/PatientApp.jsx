import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Calendar, Clock, Clipboard, Search, MoreHorizontal, User } from 'lucide-react';
import { cn } from '../../lib/utils';

const INITIAL_APPOINTMENTS = [
  { id: 1, patient: "Johnathan Smith", time: "09:00 AM", type: "General Checkup", status: "Arrived", gender: "M", age: 42 },
  { id: 2, patient: "Elena Gilbert", time: "10:30 AM", type: "X-Ray Analysis", status: "Waiting", gender: "F", age: 24 },
  { id: 3, patient: "Marcus Aurelius", time: "11:45 AM", type: "Consultation", status: "Delayed", gender: "M", age: 31 },
  { id: 4, patient: "Sarah Connor", time: "02:15 PM", type: "Follow-up", status: "Confirmed", gender: "F", age: 56 }
];

export default function PatientApp() {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newApt, setNewApt] = useState({ patient: '', time: '', type: 'Consultation', age: '', gender: 'M' });

  const handleAdd = (e) => {
    e.preventDefault();
    const id = Date.now();
    setAppointments([...appointments, { ...newApt, id, status: 'Confirmed' }]);
    setShowAddModal(false);
    setNewApt({ patient: '', time: '', type: 'Consultation', age: '', gender: 'M' });
  };

  return (
    <div className="w-full h-full bg-[#080808] flex flex-col rounded-3xl overflow-hidden border border-white/5 text-white relative">
      <AnimatePresence>
        {showAddModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md bg-surface-dark border border-white/10 rounded-[2rem] p-8 shadow-2xl"
            >
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">New Appointment</h4>
              <form onSubmit={handleAdd} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-text-dimmed tracking-widest">Patient Name</label>
                  <input required value={newApt.patient} onChange={e => setNewApt({...newApt, patient: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 outline-none" placeholder="e.g. Peter Parker" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-text-dimmed tracking-widest">Time</label>
                    <input required type="time" value={newApt.time} onChange={e => setNewApt({...newApt, time: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-text-dimmed tracking-widest">Age</label>
                    <input required type="number" value={newApt.age} onChange={e => setNewApt({...newApt, age: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 outline-none" placeholder="30" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-text-dimmed tracking-widest">Visit Type</label>
                  <select value={newApt.type} onChange={e => setNewApt({...newApt, type: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 outline-none">
                    <option className="bg-surface-dark">Consultation</option>
                    <option className="bg-surface-dark">General Checkup</option>
                    <option className="bg-surface-dark">X-Ray Analysis</option>
                    <option className="bg-surface-dark">Follow-up</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Cancel</button>
                  <button type="submit" className="flex-1 px-6 py-3 rounded-xl bg-emerald-500 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">Schedule</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="h-16 border-b border-white/5 bg-black/40 flex items-center justify-between px-6 shrink-0">
         <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-xs">M</div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">MedSync Pro // <span className="text-emerald-500">Clinical Hub</span></span>
         </div>
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-500">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live System
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80" alt="Doctor" />
            </div>
         </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
         {/* Navigation Rail */}
         <div className="w-16 border-r border-white/5 flex flex-col items-center py-8 gap-8 bg-black/20">
            {[
              { id: 'appointments', icon: <Calendar size={20} /> },
              { id: 'patients', icon: <User size={20} /> },
              { id: 'records', icon: <Clipboard size={20} /> },
              { id: 'stats', icon: <Activity size={20} /> }
            ].map(item => (
              <div 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "p-3 rounded-xl cursor-pointer transition-all",
                  activeTab === item.id ? "bg-emerald-500 text-white" : "text-text-dimmed hover:text-white"
                )}
              >
                {item.icon}
              </div>
            ))}
         </div>

         {/* Content Area */}
         <div className="flex-1 p-8 flex flex-col overflow-hidden">
            <div className="flex justify-between items-end mb-10">
               <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Appointments</h3>
                  <p className="text-xs text-text-dimmed uppercase font-bold tracking-[0.2em]">Wednesday, Oct 24</p>
               </div>
               <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                    <input className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:border-emerald-500 outline-none w-48 transition-all" placeholder="Patient search..." />
                  </div>
               </div>
            </div>

            {/* Appointment Cards */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
               {appointments.map(apt => (
                 <motion.div 
                   layout
                   key={apt.id}
                   whileHover={{ x: 5 }}
                   className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between shadow-xl"
                 >
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-surface-dark border border-white/5 flex items-center justify-center font-black text-emerald-500">
                          {apt.time.split(':')[0]}
                       </div>
                       <div>
                          <h4 className="font-bold text-base mb-1">{apt.patient}</h4>
                          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-text-dimmed">
                             <span className="flex items-center gap-1"><Clock size={10} /> {apt.time}</span>
                             <span className="flex items-center gap-1 text-emerald-500/80 underline underline-offset-4 pointer-events-none">{apt.type}</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-12">
                       <div className="hidden lg:block text-right">
                          <div className="text-[10px] font-black uppercase tracking-widest text-text-dimmed mb-1">Details</div>
                          <div className="text-xs font-bold text-white/50">{apt.gender} / {apt.age}y</div>
                       </div>
                       <div className={cn(
                          "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest min-w-[100px] text-center",
                          apt.status === 'Arrived' ? "bg-emerald-500/10 text-emerald-500" :
                          apt.status === 'Delayed' ? "bg-red-500/10 text-red-500" :
                          apt.status === 'Confirmed' ? "bg-primary-blue/10 text-primary-blue" :
                          "bg-white/5 text-white/40"
                       )}>
                          {apt.status}
                       </div>
                       <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
                          <MoreHorizontal size={18} className="text-text-dimmed" />
                       </button>
                    </div>
                 </motion.div>
               ))}
               <div 
                  onClick={() => setShowAddModal(true)}
                  className="h-20 flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl text-text-dimmed/40 hover:text-emerald-500/50 hover:border-emerald-500/20 cursor-pointer transition-all"
               >
                  + Add Emergency Appointment
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
