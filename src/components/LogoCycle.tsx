import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LogoCycleProps {
  items: React.ReactNode[];
  delay: number;
}

export const LogoCycle: React.FC<LogoCycleProps> = ({ items, delay }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, delay);
    return () => clearInterval(interval);
  }, [items.length, delay]);

  return (
    <div className="relative w-full h-40 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateX: -90, opacity: 0, y: 20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 90, opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center p-6 text-center"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
