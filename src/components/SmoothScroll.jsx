import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SmoothScroll({ children }) {
  const contentRef = useRef(null);
  return (
    <div className="relative w-full">
      {children}
    </div>
  );
}
