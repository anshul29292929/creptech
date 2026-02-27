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
           <header className="p-8 flex items-center justify-between">
              <div>
                 <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{activeTab}</h3>
                 <p className="text-xs text-text-dimmed uppercase font-bold tracking-widest">{activeTab === 'Employees' ? `Managing ${employees.length} Total Staff` : 'System Nominal'}</p>
              </div>
              {activeTab === 'Employees' && (
                <button onClick={() => setShowHireModal(true)} className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all">
                   <UserPlus size={16} /> Hire New
                </button>
              )}
           </header>

           {activeTab === 'Employees' ? (
             <>
               {/* Stats Bar */}
               <div className="px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 shrink-0">
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
               <div className="flex-1 overflow-y-auto px-8 pb-8">
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
               </div>
             </>
           ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-20 opacity-40">
                <Users size={64} className="mb-6" />
                <h4 className="text-xl font-black uppercase mb-2">Module Offline</h4>
                <p className="max-w-xs text-xs font-bold tracking-widest">Integrating with corporate backend via CrepTech Secure Bridge...</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
