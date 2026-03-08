import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 px-8 bg-surface-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <img
                src="/assets/logo.png"
                className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-500"
                alt="CrepTech Full Logo"
              />
            </Link>
            <p className="text-text-dimmed max-w-sm text-base leading-relaxed mb-8">
              A high-performance technical partner for businesses that demand elite engineering and world-class design.
            </p>
            <div className="flex gap-4">
              <a href="mailto:service@creptech.online" className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white hover:text-white hover:bg-primary-blue hover:border-primary-blue transition-all cursor-pointer">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/#services" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Portfolio</Link>
              </li>
              <li>
                <Link to="/process" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Process</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/company" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">About</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Careers</Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Journal</Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm text-text-dimmed hover:text-primary-blue transition-colors font-medium">Legal</Link>
              </li>
              <li className="pt-4 border-t border-white/5">
                <h5 className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">Network Hub</h5>
                <div className="space-y-2">
                  <a href="https://creptech.online/physiotherapy-in-lucknow" className="block text-[10px] text-text-dimmed hover:text-primary-blue transition-colors font-medium decoration-primary-blue/30 underline-offset-4 hover:underline">Physiotherapy in Lucknow</a>
                  <a href="https://creptech.online/chiropractor-in-lucknow" className="block text-[10px] text-text-dimmed hover:text-primary-blue transition-colors font-medium decoration-primary-blue/30 underline-offset-4 hover:underline">Chiropractor in Lucknow</a>
                </div>
              </li>
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
            <Link to="/privacy-terms" className="hover:text-white transition-colors">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
