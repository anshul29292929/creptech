import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 px-8 bg-surface-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 rounded-lg bg-primary-blue flex items-center justify-center font-black text-xs">C</div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">Crep<span className="text-primary-blue">Tech.</span></span>
            </Link>
            <p className="text-text-dimmed max-w-sm text-base leading-relaxed mb-8">
              A high-performance technical partner for businesses that demand elite engineering and world-class design.
            </p>
            <div className="flex gap-4">
              {['X', 'LI', 'GH', 'DR'].map(s => (
                <div key={s} className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-[10px] font-black hover:bg-primary-blue hover:border-primary-blue transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Portfolio', 'Process', 'Pricing'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Company</h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Journal', 'Legal'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Status</h4>
            <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase text-emerald-500">All Systems Nominal</span>
              </div>
              <div className="text-[10px] text-text-dimmed font-medium">Uptime: 99.98%</div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-dimmed text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} CREPTECH AGENCY. BUILT FOR SCALE.
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-text-dimmed">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
