import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';

interface PageNavigationLoaderProps {
  isNavigating: boolean;
  navigatingTo: PageRoute | null;
}

const ROUTE_LABELS: Record<string, string> = {
  home: 'Home Overview',
  services: 'Services & Turnkey',
  projects: 'Projects Portfolio',
  products: 'Materials & Pricing',
  gallery: 'Project Gallery',
  about: 'About Zentech',
  contact: 'Contact & HQ',
  faq: 'Help & FAQs',
  admin: 'Admin Console'
};

export const PageNavigationLoader: React.FC<PageNavigationLoaderProps> = ({
  isNavigating,
  navigatingTo
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isNavigating) {
      setProgress(15);
      const timer1 = setTimeout(() => setProgress(65), 100);
      const timer2 = setTimeout(() => setProgress(90), 250);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setProgress(100);
      const timer = setTimeout(() => {
        setProgress(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  if (!isNavigating && progress === 0) return null;

  const targetLabel = navigatingTo ? ROUTE_LABELS[navigatingTo] || navigatingTo : 'Page';

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Top 3px progress bar with glowing orange gradient */}
      <div className="w-full h-[3px] bg-slate-200/50 overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 via-[#F97316] to-[#EA580C] shadow-[0_0_12px_rgba(249,115,22,0.8)]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{
            ease: isNavigating ? 'easeOut' : 'easeIn',
            duration: isNavigating ? 0.3 : 0.15
          }}
        />
      </div>

      {/* Floating subtle loader badge on top right */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-3 right-4 sm:right-6 bg-white/95 backdrop-blur-md border border-amber-200/80 px-3.5 py-1.5 rounded-full shadow-lg shadow-orange-500/10 flex items-center space-x-2 font-mono text-xs text-slate-800"
          >
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#F97316]" />
            <span className="font-bold text-[11px] text-slate-700">Loading {targetLabel}...</span>
            <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
