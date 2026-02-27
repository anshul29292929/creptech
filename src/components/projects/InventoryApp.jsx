import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, AlertTriangle, ArrowUpRight, ArrowDownRight, Search, BarChart3, Package, Layers } from 'lucide-react';
import { cn } from '../../lib/utils';

const INITIAL_ITEMS = [
  { id: 1, name: "Neural Cores v2", sku: "NCORE-001", stock: 84, status: "Healthy", reorder: 20 },
  { id: 2, name: "Quantum Sensors", sku: "QSENS-99", stock: 12, status: "Critical", reorder: 45 },
  { id: 3, name: "Ethernet Hubs", sku: "HUB-LX", stock: 412, status: "Healthy", reorder: 100 },
  { id: 4, name: "Bio-Filters", sku: "BIO-FLT", stock: 0, status: "Out of Stock", reorder: 30 }
];

export default function InventoryApp() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [isRestocking, setIsRestocking] = useState(false);

  const initiateRestock = () => {
    setIsRestocking(true);
    setTimeout(() => {
      setItems(prev => prev.map(item => ({
        ...item,
        stock: item.stock < 50 ? item.stock + 50 : item.stock,
        status: "Healthy"
      })));
      setIsRestocking(false);
    }, 2000);
  };

  return (
    <div className="w-full h-full bg-[#080808] flex flex-col rounded-3xl overflow-hidden border border-white/5 text-white relative">
      {/* Restock Overlay */}
      {isRestocking && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl">
           <div className="text-center">
              <div className="w-20 h-20 border-t-2 border-orange-500 rounded-full animate-spin mx-auto mb-6" />
              <h4 className="text-xl font-black uppercase tracking-widest text-orange-500">Initiating Cargo Drones...</h4>
              <p className="text-[10px] font-mono text-white/30 uppercase mt-2">Syncing with global warehouse nodes</p>
           </div>
        </div>
      )}

      {/* App Nav */}
      <div className="flex bg-black/40 border-b border-white/5 shrink-0">
         <div className="p-6 border-r border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-black animate-pulse">I</div>
            <h4 className="text-sm font-black uppercase tracking-tight">Invox <span className="text-orange-500">Ultra</span></h4>
         </div>
         <div className="flex-1 flex items-center px-8 gap-8">
            {['Dashboard', 'Warehouse', 'Orders', 'Reports'].map((tab, i) => (
              <div key={tab} className={cn("text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors", i === 0 ? "text-orange-500" : "text-white/40")}>
                 {tab}
              </div>
            ))}
         </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
         {/* Top Stats */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Assets", value: items.reduce((acc, i) => acc + i.stock, 0).toLocaleString(), sub: "+2.4%", icon: <Package size={16} /> },
              { label: "Low Stock", value: items.filter(i => i.status !== 'Healthy').length.toString(), sub: "-10%", icon: <AlertTriangle size={16} className="text-orange-500" /> },
              { label: "Monthly Orders", value: "1,240", sub: "+18%", icon: <Box size={16} /> },
              { label: "Efficiency", value: "99.4%", sub: "+0.1%", icon: <BarChart3 size={16} /> }
            ].map(stat => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl">
                 <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/5 text-white/50">{stat.icon}</div>
                    <span className={cn("text-[8px] font-black uppercase tracking-widest", stat.sub.includes('+') ? "text-emerald-500" : "text-red-500")}>
                       {stat.sub}
                    </span>
                 </div>
                 <div className="text-2xl font-black mb-1">{stat.value}</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-text-dimmed">{stat.label}</div>
              </div>
            ))}
         </div>

         {/* Table Section */}
         <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
               <h5 className="text-xl font-black uppercase tracking-tighter">Inventory Levels</h5>
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={12} />
                  <input className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-[10px] outline-none w-48 font-black uppercase tracking-widest" placeholder="Filter SKU..." />
               </div>
            </div>

            <div className="space-y-4">
               {items.map(item => (
                 <motion.div 
                   layout
                   key={item.id} 
                   className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-orange-500/20 transition-all group shadow-lg"
                 >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-surface-dark border border-white/5 flex items-center justify-center text-white/20 group-hover:text-orange-500 transition-colors">
                             <Layers size={24} />
                          </div>
                          <div>
                             <h6 className="font-bold text-base mb-1">{item.name}</h6>
                             <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.sku}</div>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-16">
                          <div className="text-right">
                             <div className="text-[10px] font-black uppercase tracking-widest text-text-dimmed mb-1">Stock Level</div>
                             <div className="text-xl font-black tabular-nums">{item.stock}</div>
                          </div>
                          
                          <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${Math.min((item.stock / (item.stock + item.reorder + 1)) * 100, 100)}%` }}
                               className={cn(
                                   "h-full rounded-full",
                                   item.status === 'Healthy' ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" :
                                   item.status === 'Critical' ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" :
                                   "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                               )}
                             />
                          </div>
                          
                          <div className={cn(
                             "w-24 px-3 py-2 rounded-lg text-[8px] font-black uppercase tracking-tighter text-center",
                             item.status === 'Healthy' ? "bg-emerald-500/10 text-emerald-500" :
                             item.status === 'Critical' ? "bg-orange-500/10 text-orange-500" :
                             "bg-red-500/10 text-red-500"
                          )}>
                             {item.status}
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ))}
               <div 
                  onClick={initiateRestock}
                  className="p-8 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.4em] text-white/10 hover:text-orange-500 hover:border-orange-500/20 transition-all cursor-pointer"
               >
                  Initiate Global Re-stock Protocol
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
