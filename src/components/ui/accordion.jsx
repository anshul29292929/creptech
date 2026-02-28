import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={cn('w-full divide-y divide-white/[0.06]', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="group">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
              aria-expanded={isOpen}
            >
              {/* Left accent bar */}
              <div className="flex items-center gap-5 flex-1 min-w-0">
                <div
                  className={cn(
                    'shrink-0 w-[3px] h-6 rounded-full transition-all duration-300',
                    isOpen ? 'bg-primary-blue' : 'bg-white/10 group-hover:bg-white/30'
                  )}
                />
                <span
                  className={cn(
                    'text-base md:text-lg font-black tracking-tight transition-colors',
                    isOpen ? 'text-primary-blue' : 'text-white group-hover:text-white/90'
                  )}
                >
                  {item.question}
                </span>
              </div>

              {/* Icon */}
              <div
                className={cn(
                  'shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300',
                  isOpen
                    ? 'bg-primary-blue border-primary-blue text-white'
                    : 'bg-white/5 border-white/10 text-white/50 group-hover:border-white/30'
                )}
              >
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-8 pr-14">
                    <p className="text-text-dimmed leading-relaxed text-base">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
