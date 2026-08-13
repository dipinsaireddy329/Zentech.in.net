import React from 'react';
import { COMPANY_INFO } from '../data/zentechData';
import { PageRoute } from '../types';
import { motion } from 'framer-motion';
import { Phone, MapPin, ChevronDown, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
  onOpenAiModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col">

      {/* ── Full-Screen Background Photo with Ken-Burns zoom ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2000"
          alt="Luxury modern villa by Zentech"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </motion.div>

      {/* ── Cinematic Multi-Stop Gradient Overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/85 pointer-events-none" />
      {/* Subtle left vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none" />

      {/* ── Main Content: centred vertically & horizontally ── */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-8 pt-24 pb-32">

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-white max-w-5xl"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Building Living
          <br />
          <span className="text-[#F97316]">Experiences</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-5 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed"
        >
          End-to-end residential, commercial, and infrastructure construction in Tirupati with single-source accountability
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={`tel:${COMPANY_INFO.primaryPhone}`} id="hero-book-consultation-btn">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(249,115,22,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              Book Free Consultation
            </motion.button>
          </a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('contact')}
            id="hero-visit-experience-center-btn"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm sm:text-base"
          >
            <MapPin className="w-4 h-4 text-[#F97316]" />
            Experience Center
            <ArrowRight className="w-4 h-4 opacity-70" />
          </motion.button>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

    </section>
  );
};
