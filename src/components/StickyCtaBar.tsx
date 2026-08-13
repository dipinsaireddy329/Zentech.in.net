import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/zentechData';

interface StickyCtaBarProps {
  onOpenBookingModal: () => void;
  onOpenQuoteModal: () => void;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ onOpenBookingModal, onOpenQuoteModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 text-slate-900 py-3 px-4 shadow-xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[#F97316] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="hidden md:block">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Zentech COA Registered Architect & Civil Engineering
                </p>
                <p className="text-[10px] text-slate-500 font-mono">
                  Experience Center: Air By-Pass Road, Tirupati • Call +91 91213 55173
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex-1 sm:flex-none px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-[11px] font-bold uppercase tracking-wider rounded-xl border border-slate-300 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Call Engineer</span>
              </a>

              <button
                onClick={onOpenBookingModal}
                className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] font-bold uppercase tracking-wider rounded-xl border border-amber-500/30 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Book Site Visit</span>
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="flex-1 sm:flex-none px-5 py-2 bg-[#F97316] hover:bg-amber-600 text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#F97316]/20 flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
