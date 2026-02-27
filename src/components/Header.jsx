import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] border-b border-white/[0.05] backdrop-blur-2xl bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-primary-blue flex items-center justify-center font-black text-xs group-hover:rotate-[360deg] transition-all duration-700">C</div>
          <span className="text-sm font-black tracking-tighter uppercase">Crep<span className="text-primary-blue">Tech</span></span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['Services', 'Portfolio', 'Prices', 'Company'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-text-dimmed hover:text-primary-blue transition-colors"
            >
              //{item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link 
            to="/contact"
            className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full border border-white/10 hover:border-primary-blue/50 transition-all"
          >
            Start Project
          </Link>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary-blue transition-all">
            <span className="w-4 h-[1px] bg-current relative before:absolute before:w-full before:h-full before:bg-current before:-top-1.5 after:absolute after:w-full after:h-full after:bg-current after:top-1.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
