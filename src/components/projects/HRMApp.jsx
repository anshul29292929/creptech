import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Calendar, TrendingUp, Search, MoreHorizontal, UserPlus } from 'lucide-react';
import { cn } from '../../lib/utils';

const INITIAL_EMPLOYEES = [
  { id: 1, name: "Alexander Wright", role: "Sr. Engineer", status: "Active", salary: "$145k", joinDate: "Jan 12, 2023" },
  { id: 2, name: "Sarah Jenkins", role: "Product Manager", status: "Active", salary: "$130k", joinDate: "Mar 05, 2023" },
  { id: 3, name: "Michael Chen", role: "UI Designer", status: "On Leave", salary: "$110k", joinDate: "May 22, 2023" },
  { id: 4, name: "Emma Thompson", role: "DevOps", status: "Active", salary: "$155k", joinDate: "Feb 18, 2023" }
];

export default function HRMApp() {
  const [view, setView] = useState('home');
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [activeTab, setActiveTab] = useState('Employees');
  const [showHireModal, setShowHireModal] = useState(false);
  const [newHire, setNewHire] = useState({ name: '', role: '', salary: '' });

  const handleHire = (e) => {
    e.preventDefault();
    const hire = {
      ...newHire,
      id: Date.now(),
      status: 'Active',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2-digit' })
    };
    setEmployees([...employees, hire]);
    setShowHireModal(false);
    setNewHire({ name: '', role: '', salary: '' });
  };

  const deleteEmployee = (id) => {
     setEmployees(prev => prev.filter(emp => emp.id !== id));
  };


  if (view === 'home') {
    return (
      <div className="w-full h-full bg-[#050505] text-white flex flex-col relative overflow-y-auto overflow-x-hidden group/home">
        
        {/* Top Section (Hero) */}
        <div className="min-h-full flex flex-col relative shrink-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 group-hover/home:scale-105 transition-transform duration-[10s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
          
          <div className="relative z-10 px-10 py-8 flex justify-between items-center">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center font-black">H</div>
                <span className="text-sm font-black uppercase tracking-tighter">HR<span className="text-purple-500">Pulse</span> Suite</span>
             </div>
             <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/50">
                <span className="text-white">Platform</span>
                <span className="hover:text-white cursor-pointer transition-colors">Enterprise</span>
                <span className="hover:text-white cursor-pointer transition-colors">Resources</span>
             </div>
          </div>

          <div className="flex-1 relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-3xl"
             >
                <span className="text-purple-500 font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Next-Gen Human Capital</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                  People <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">First.</span>
                </h1>
                <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-medium">
                  A modular HR suite built for speed. Automate payroll, supercharge performance reviews, and scale onboarding natively.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button 
                    onClick={() => setView('portal')}
                    className="px-10 py-5 rounded-2xl bg-purple-500 font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all active:scale-95 text-white"
                   >
                      Initiate Demo Site Now
                   </button>
                </div>
             </motion.div>
          </div>

          <div className="relative z-10 px-10 py-8 border-t border-white/5 bg-black/40 flex justify-center gap-16 overflow-x-auto">
             {[
               { label: "Payroll Accuracy", value: "99.99%" },
               { label: "Onboarding Time", value: "-45%" },
               { label: "System Uptime", value: "100%" }
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
              <span className="text-purple-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block text-center">Platform Capabilities</span>
              <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">Unified Workforce</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Dynamic Payroll", icon: <DollarSign size={32} />, desc: "Automated global compliance, tax mitigation, and one-click salary dispatch." },
                   { title: "Analytics Engine", icon: <TrendingUp size={32} />, desc: "Real-time insights correlating employee sentiment directly with productivity." },
                   { title: "Cloud Directory", icon: <Users size={32} />, desc: "Zero-latency employee search syncing beautifully across your SaaS stack." }
                 ].map((feature, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
                      <div className="text-purple-500 mb-4">
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

      {/* Hire Modal */}
      {showHireModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="w-full max-w-md bg-surface-dark border border-white/10 rounded-3xl p-8"
           >
              <h4 className="text-xl font-black mb-6 uppercase tracking-tighter">Onboard New Talent</h4>
              <form onSubmit={handleHire} className="space-y-4">
                 <input required value={newHire.name} onChange={e => setNewHire({...newHire, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500" placeholder="Full Name" />
                 <input required value={newHire.role} onChange={e => setNewHire({...newHire, role: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500" placeholder="Role (e.g. Lead Designer)" />
                 <input required value={newHire.salary} onChange={e => setNewHire({...newHire, salary: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500" placeholder="Expected Salary (e.g. $120k)" />
                 <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setShowHireModal(false)} className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-[10px] font-black uppercase text-text-dimmed">Cancel</button>
                    <button type="submit" className="flex-1 px-4 py-3 rounded-xl bg-purple-500 text-[10px] font-black uppercase">Confirm Hire</button>
                 </div>
              </form>
           </motion.div>
        </div>
      )}

      {/* Sidebar + Content Layout */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-20 lg:w-64 border-r border-white/5 flex flex-col pt-8 bg-black/40 shrink-0">
           <div className="px-6 mb-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center font-black">H</div>
              <span className="hidden lg:inline text-sm font-black tracking-tighter uppercase font-mono">HR<span className="text-purple-500">Pulse</span></span>
           </div>
           
           <nav className="flex-1 px-4 space-y-2">
              {[
                { icon: <Users size={18} />, label: "Employees" },
                { icon: <DollarSign size={18} />, label: "Payroll" },
                { icon: <Calendar size={18} />, label: "Attendance" },
                { icon: <TrendingUp size={18} />, label: "Performance" }
              ].map(item => (
                <div 
                  key={item.label} 
                  onClick={() => setActiveTab(item.label)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all",
                    activeTab === item.label ? "bg-purple-500/10 text-purple-500" : "text-text-dimmed hover:bg-white/5"
                  )}
                >
                   {item.icon}
                   <span className="hidden lg:inline text-xs font-bold">{item.label}</span>
                </div>
              ))}
           </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
           <header className="p-8 flex items-center justify-between shrink-0">
              <div>
                 <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{activeTab}</h3>
                 <p className="text-xs text-text-dimmed uppercase font-bold tracking-widest">{activeTab === 'Employees' ? `Managing ${employees.length} Total Staff` : activeTab === 'Payroll' ? 'Monthly Processing Cycle' : 'System Nominal'}</p>
              </div>
              {activeTab === 'Employees' && (
                <button onClick={() => setShowHireModal(true)} className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all">
                   <UserPlus size={16} /> Hire New
                </button>
              )}
           </header>

           <div className="flex-1 overflow-y-auto px-8 pb-8">
               {activeTab === 'Employees' && (
                 <>
                   {/* Stats Bar */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 shrink-0">
                      {[
                        { label: "Active Now", value: employees.filter(e => e.status === 'Active').length.toString(), trend: "+12%" },
                        { label: "On Leave", value: employees.filter(e => e.status === 'On Leave').length.toString(), trend: "0%" },
                        { label: "Payroll Status", value: "Verified", trend: "Nominal" }
                      ].map(stat => (
                        <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                           <div className="text-[10px] uppercase font-black tracking-widest text-text-dimmed mb-2">{stat.label}</div>
                           <div className="flex items-end justify-between">
                              <div className="text-2xl font-black">{stat.value}</div>
                              <div className="text-[10px] font-black text-emerald-500">{stat.trend}</div>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Table */}
                   <div className="rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden">
                      <table className="w-full text-left">
                         <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                               <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-dimmed">Employee</th>
                               <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-dimmed">Role</th>
                               <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-dimmed">Status</th>
                               <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-dimmed text-right">Actions</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-white/5">
                            {employees.map(emp => (
                              <tr key={emp.id} className="hover:bg-white/[0.02] transition-colors group">
                                 <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                       <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-black text-purple-500 border border-purple-500/30">
                                          {emp.name.split(' ').map(n=>n[0]).join('')}
                                       </div>
                                       <div>
                                          <div className="text-xs font-bold">{emp.name}</div>
                                          <div className="text-[10px] text-text-dimmed">Joined {emp.joinDate}</div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 text-xs font-medium text-white/70">{emp.role}</td>
                                 <td className="px-6 py-4">
                                    <span className={cn(
                                        "px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                        emp.status === 'Active' ? "bg-emerald-500/10 text-emerald-500" : "bg-orange-500/10 text-orange-500"
                                    )}>
                                       {emp.status}
                                    </span>
                                 </td>
                                 <td className="px-6 py-4 text-right">
                                    <button 
                                       onClick={() => deleteEmployee(emp.id)}
                                       className="text-text-dimmed hover:text-red-500 transition-colors bg-white/5 p-2 rounded-lg"
                                    >
                                       <MoreHorizontal size={16} />
                                    </button>
                                 </td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                 </>
               )}

               {activeTab === 'Payroll' && (
                  <div className="space-y-6">
                     <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/5 border border-purple-500/30">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-2">Total Monthly Disbursement</h4>
                         <div className="text-4xl font-black mb-6">$540,000<span className="text-xl text-white/30">.00</span></div>
                         <button className="px-6 py-3 rounded-xl bg-purple-500 font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-colors">
                            Process Payroll Run ➔
                         </button>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        {employees.map(emp => (
                           <div key={emp.id} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex justify-between items-center group cursor-pointer hover:border-purple-500/30 transition-all">
                              <div>
                                 <div className="font-bold text-sm mb-1">{emp.name}</div>
                                 <div className="text-[10px] text-text-dimmed uppercase tracking-widest">{emp.role}</div>
                              </div>
                              <div className="text-right">
                                  <div className="font-black text-lg text-emerald-500 group-hover:text-emerald-400 transition-all">{emp.salary}</div>
                                  <div className="text-[8px] text-white/30 uppercase tracking-[0.2em]">Annual Base</div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}

               {activeTab === 'Attendance' && (
                  <div className="space-y-6">
                     <div className="grid grid-cols-4 gap-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                           <div key={day} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                              <div className="text-xs font-bold mb-2 uppercase tracking-widest">{day}</div>
                              <div className="w-8 h-8 rounded-full border-2 border-emerald-500 mx-auto flex items-center justify-center">
                                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <Calendar className="mx-auto mb-4 text-purple-500 opacity-50" size={32} />
                        <h4 className="text-lg font-black uppercase tracking-tighter mb-2">Punch Card Active</h4>
                        <p className="text-xs text-text-dimmed mb-6">You are currently clocked in for the Global HQ Location.</p>
                        <button className="px-8 py-4 rounded-xl border border-red-500 text-red-500 font-black text-xs uppercase tracking-widest hover:bg-red-500/10 transition-colors">
                           Clock Out
                        </button>
                     </div>
                  </div>
               )}

               {activeTab === 'Performance' && (
                  <div className="space-y-6">
                      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <TrendingUp className="mx-auto mb-4 text-purple-500 opacity-50" size={32} />
                        <h4 className="text-lg font-black uppercase tracking-tighter mb-2">Q3 Reviews In Progress</h4>
                        <p className="text-xs text-text-dimmed mb-6">4 managers have yet to submit their reports.</p>
                        <button className="px-8 py-4 rounded-xl bg-white/5 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
                           Remind Managers
                        </button>
                     </div>
                  </div>
               )}
           </div>
        </div>
      </div>
    </div>
  );
}
