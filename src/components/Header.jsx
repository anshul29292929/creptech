import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import TopLoadingBar from './TopLoadingBar';

/**
 * navItems shape:
 *   { label, path }       → regular React Router link, active when pathname matches
 *   { label, scrollTo }   → scrolls to a section id on the home page, NEVER shows active state
 */
const navItems = [
  { label: 'Home',      path: '/' },
  { label: 'Services',  scrollTo: 'services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Prices',    scrollTo: 'pricing' },
  { label: 'Company',   path: '/company' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll-to-section handler — works cross-page */
  const handleScrollNav = (sectionId, closeMobile = false) => {
    if (closeMobile) setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 420);
    }
  };

  /**
   * Active-state rules:
   * - scrollTo items → NEVER active (they're anchors, not routes)
   * - path '/'      → only active when exactly on '/'
   * - other paths   → active when pathname starts with item.path
   */
  const isActive = (item) => {
    if (item.scrollTo) return false;
    if (item.path === '/') return location.pathname === '/';
    return location.pathname === item.path;
  };

  const desktopCls = (item) =>
    `text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
      isActive(item)
        ? 'text-primary-blue'
        : 'text-text-dimmed hover:text-primary-blue'
    }`;

  const mobileCls = (item) =>
    `w-full text-left text-[11px] font-black uppercase tracking-[0.2em] py-3 border-b border-white/5 transition-colors ${
      isActive(item)
        ? 'text-primary-blue'
        : 'text-text-dimmed hover:text-primary-blue'
    }`;

  return (
    <>
      {/* Blue top loading bar — fires on every route change */}
      <TopLoadingBar />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-[100] border-b border-white/[0.05] backdrop-blur-2xl bg-black/40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/assets/logo.png"
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-500"
              alt="CrepTech Full Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.scrollTo ? (
                <button
                  key={item.label}
                  onClick={() => handleScrollNav(item.scrollTo)}
                  className={desktopCls(item)}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.label} to={item.path} className={desktopCls(item)}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full border border-white/10 hover:border-primary-blue/50 hover:text-primary-blue transition-all"
            >
              Start Project
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary-blue transition-all"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-0 w-full z-[99] bg-black/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="px-8 py-6 flex flex-col gap-1">
              {navItems.map((item) =>
                item.scrollTo ? (
                  <button
                    key={item.label}
                    onClick={() => handleScrollNav(item.scrollTo, true)}
                    className={mobileCls(item)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={mobileCls(item)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] py-3 rounded-full bg-primary-blue text-white text-center hover:bg-primary-blue/90 transition-all"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
