import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-30 w-72 h-72 rounded-full bg-gradient-to-r from-[#F97316]/15 via-amber-500/10 to-transparent blur-3xl dark:from-[#F97316]/20 dark:via-amber-400/10"
      animate={{
        x: position.x - 144,
        y: position.y - 144,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 250,
        mass: 0.5,
      }}
    />
  );
};
