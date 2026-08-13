import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Extract number and suffix (e.g., "200+" -> num: 200, suffix: "+")
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNum === 0) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = targetNum / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, targetNum]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};
