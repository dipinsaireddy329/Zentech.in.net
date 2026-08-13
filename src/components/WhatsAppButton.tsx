import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/zentechData';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919121355173',
  defaultMessage = 'Hello Zentech Team, I would like to inquire about your construction services and material pricing.'
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-show prompt bubble after 3 seconds for initial engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPrompted) {
        setShowTooltip(true);
        setHasPrompted(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasPrompted]);

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Pop-up greeting tooltip bubble */}
      <AnimatePresence>
        {(showTooltip || isHovered) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs bg-white rounded-2xl p-4 shadow-2xl border border-emerald-100 text-slate-800 relative group overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start space-x-3">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  <MessageSquare className="w-5 h-5 fill-emerald-500/20" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
              </div>

              <div className="space-y-1 pr-3">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-black text-slate-900 tracking-tight">Zentech Support</span>
                  <span className="text-[9px] font-bold font-mono px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded-full">Online</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Need an instant quote or engineering advice? Chat directly with us on WhatsApp!
                </p>
                <div className="pt-1.5 flex items-center space-x-1 text-[10px] text-emerald-700 font-medium">
                  <Sparkles className="w-3 h-3 text-emerald-500" />
                  <span>Typically responds in &lt;5 mins</span>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/40 border-2 border-white cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Contact Zentech on WhatsApp"
        id="whatsapp-floating-button"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current relative z-10 transition-transform group-hover:rotate-6"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Unread indicator dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-black text-white">
          1
        </span>
      </motion.a>
    </div>
  );
};
