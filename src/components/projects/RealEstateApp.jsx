import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, MapPin, Bed, Bath, Maximize, X, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

const INITIAL_PROPERTIES = [
  { id: 1, title: "Skyline Penthouse", price: "$1,250,000", location: "Downtown Metro", beds: 3, baths: 2, sqft: "2,400", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Azure Villa", price: "$890,000", location: "Coastal Drive", beds: 4, baths: 3, sqft: "3,100", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Minimalist Loft", price: "$540,000", location: "Arts District", beds: 1, baths: 1, sqft: "1,100", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" }
];

export default function RealEstateApp() {
  const [view, setView] = useState('home'); // 'home' or 'portal'
  const [properties, setProperties] = useState(INITIAL_PROPERTIES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProp, setNewProp] = useState({ title: '', price: '', location: '', beds: '', baths: '', sqft: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    setProperties([{ ...newProp, id: Date.now(), image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }, ...properties]);
    setShowAddModal(false);
    setNewProp({ title: '', price: '', location: '', beds: '', baths: '', sqft: '' });
  };

  if (view === 'home') {
    return (
      <div className="w-full h-full bg-[#050505] text-white flex flex-col relative overflow-y-auto overflow-x-hidden group/home">
        
        {/* Top Section (Hero) */}
        <div className="min-h-full flex flex-col relative shrink-0">
          {/* Background Texture */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 group-hover/home:scale-105 transition-transform duration-[10s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          
          {/* Nav Bar Simulation */}
          <div className="relative z-10 px-10 py-8 flex justify-between items-center">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-blue flex items-center justify-center font-black">C</div>
                <span className="text-sm font-black uppercase tracking-tighter">Crep<span className="text-primary-blue">Tech</span> Properties</span>
             </div>
             <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/50">
                <span className="text-white">Home</span>
                <span className="hover:text-white cursor-pointer transition-colors">Listings</span>
                <span className="hover:text-white cursor-pointer transition-colors">Agents</span>
                <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
             </div>
          </div>

          {/* Hero Section */}
          <div className="flex-1 relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-3xl"
             >
                <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Elite Real Estate Solutions</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                  The Future of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-500">Living.</span>
                </h1>
                <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-medium">
                  Experience world-class property management engineered by CrepTech. Smart, secure, and infinitely scalable.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button 
                    onClick={() => setView('portal')}
                    className="px-10 py-5 rounded-2xl bg-primary-blue font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(0,123,255,0.4)] transition-all active:scale-95"
                   >
                      Initiate Demo Site Now
                   </button>
                   <button className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                      Explore Listings
                   </button>
                </div>
             </motion.div>
          </div>

          {/* Footer Stats inside hero */}
          <div className="relative z-10 px-10 py-8 border-t border-white/5 bg-black/40 flex justify-center gap-16 overflow-x-auto">
             {[
               { label: "Assets Managed", value: "$4.2B" },
               { label: "Global Reach", value: "24 Cities" },
               { label: "Average ROI", value: "32%" }
             ].map(stat => (
               <div key={stat.label} className="text-center">
                  <div className="text-xl font-black mb-1">{stat.value}</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Extra Home Sections to make it scrollable */}
        <div className="relative z-10 bg-[#050505] shrink-0 py-24 px-10">
           <div className="max-w-5xl mx-auto">
              <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-[10px] mb-4 block text-center">Next-Gen Amenities</span>
              <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">Powered By CrepTech</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Virtual Tours", desc: "Experience properties from anywhere with our proprietary seamless 3D engine." },
                   { title: "Smart Contracts", desc: "Automate leasing and purchases with blockchain-verified documentation." },
                   { title: "AI Valuations", desc: "Real-time market analysis and property valuation powered by machine learning." }
                 ].map((feature, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary-blue/30 transition-all">
                      <div className="text-primary-blue mb-4">
                         <MapPin size={32} />
                      </div>
                      <h4 className="text-xl font-black mb-3">{feature.title}</h4>
                      <p className="text-sm text-white/50">{feature.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="relative z-10 bg-black/40 border-t border-white/5 py-12 px-10 text-center">
          <h2 className="text-2xl font-black uppercase mb-6 tracking-tighter">Ready to take control?</h2>
          <button 
             onClick={() => setView('portal')}
             className="px-8 py-4 rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
          >
             Initiate Demo Site Now
          </button>
        </div>

      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#080808] flex flex-col rounded-3xl overflow-hidden border border-white/5 text-white">
      {/* App Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div onClick={() => setView('home')} className="w-10 h-10 rounded-xl bg-primary-blue flex items-center justify-center font-black cursor-pointer hover:rotate-12 transition-transform">C</div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-tight">Crep<span className="text-primary-blue">Tech</span> Estate</h4>
            <p className="text-[10px] text-text-dimmed uppercase tracking-tighter">Global Management Module</p>
          </div>
        </div>
        <div className="flex gap-3">
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                <input className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs focus:border-primary-blue outline-none transition-all w-64" placeholder="Search properties..." />
            </div>
            <button 
                onClick={() => setShowAddModal(true)}
                className="bg-primary-blue hover:bg-primary-blue/80 text-white p-2 md:px-4 md:py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all"
            >
                <Plus size={14} /> <span className="hidden md:inline">Add Property</span>
            </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {properties.map(item => (
          <motion.div 
            layout
            key={item.id} 
            className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-primary-blue/30 transition-all shadow-2xl"
          >
            <div className="h-48 relative overflow-hidden">
               <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
               <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-white/50 hover:text-red-500 cursor-pointer transition-colors">
                  <Heart size={14} />
               </div>
               <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-primary-blue text-[10px] font-black uppercase tracking-widest">
                  {item.price}
               </div>
            </div>
            <div className="p-5">
               <h5 className="font-bold text-base mb-1">{item.title}</h5>
               <div className="flex items-center gap-1 text-text-dimmed text-xs mb-4">
                  <MapPin size={12} /> {item.location}
               </div>
               <div className="grid grid-cols-3 border-t border-white/5 pt-4">
                  <div className="flex flex-col gap-1 items-center border-r border-white/5">
                     <Bed size={14} className="text-primary-blue" />
                     <span className="text-[10px] font-bold">{item.beds} Beds</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center border-r border-white/5">
                     <Bath size={14} className="text-primary-blue" />
                     <span className="text-[10px] font-bold">{item.baths} Baths</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                     <Maximize size={14} className="text-primary-blue" />
                     <span className="text-[10px] font-bold">{item.sqft} sqft</span>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm bg-black/40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-[2rem] p-8 shadow-2xl relative"
            >
               <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 text-text-dimmed hover:text-white">
                  <X size={20} />
               </button>
               <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Add New Property</h3>
               <form onSubmit={handleAdd} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-text-dimmed tracking-widest">Property Title</label>
                        <input required value={newProp.title} onChange={e => setNewProp({...newProp, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none" placeholder="e.g. Modern Villa" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-text-dimmed tracking-widest">Price</label>
                        <input required value={newProp.price} onChange={e => setNewProp({...newProp, price: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none" placeholder="$950,000" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-black text-text-dimmed tracking-widest">Location</label>
                     <input required value={newProp.location} onChange={e => setNewProp({...newProp, location: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none" placeholder="City, Country" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-text-dimmed tracking-widest">Beds</label>
                        <input required value={newProp.beds} onChange={e => setNewProp({...newProp, beds: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none" placeholder="3" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-text-dimmed tracking-widest">Baths</label>
                        <input required value={newProp.baths} onChange={e => setNewProp({...newProp, baths: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none" placeholder="2" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-text-dimmed tracking-widest">Sqft</label>
                        <input required value={newProp.sqft} onChange={e => setNewProp({...newProp, sqft: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none" placeholder="2400" />
                     </div>
                  </div>
                  <button type="submit" className="w-full bg-primary-blue py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:shadow-[0_0_50px_rgba(0,123,255,0.4)] transition-all">
                     Publish Property
                  </button>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
