import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Thin blue progress bar at the very top of the viewport.
 * Fires on every route change and completes in ~700ms.
 */
export default function TopLoadingBar() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    // Trigger on route change
    setVisible(true);
    setAnimKey((k) => k + 1);
    const t = setTimeout(() => setVisible(false), 750);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={animKey}
          className="fixed top-0 left-0 h-[2px] z-[999] bg-primary-blue"
          style={{ boxShadow: '0 0 12px 2px rgba(0,123,255,0.7)' }}
          initial={{ width: '0%', opacity: 1 }}
          animate={{ width: '92%', opacity: 1 }}
          exit={{ width: '100%', opacity: 0 }}
          transition={{
            width: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.25, delay: 0.55 },
          }}
        />
      )}
    </AnimatePresence>
  );
}
