import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HelpCircle, Plus, X, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

const FAQ_PROMPT_ITEMS = [
  {
    num: '01',
    question: 'HOW MUCH DOES CONSTRUCTION COST?',
    answer: 'Costs vary depending on design, materials, and location.'
  },
  {
    num: '02',
    question: 'DO YOU PROVIDE TURNKEY SERVICES?',
    answer: 'Yes, we offer complete end-to-end turnkey construction solutions from initial design and planning to final key handover.'
  },
  {
    num: '03',
    question: 'CAN YOU ASSIST WITH APPROVALS?',
    answer: 'Yes, our expert team assists with municipal authority approvals, building plan sanctions, and legal documentation.'
  },
  {
    num: '04',
    question: 'DO YOU SUPPLY MATERIALS?',
    answer: 'Yes, we supply premium quality raw materials directly sourced from trusted manufacturers.'
  },
  {
    num: '05',
    question: 'HOW DO YOU ENSURE QUALITY?',
    answer: 'We perform multi-stage quality checks, lab tests for materials, and on-site engineering supervision throughout execution.'
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-24 bg-[#FAF9F6] text-slate-900 relative">
      {/* Sub-Hero Banner */}
      <div className="relative pt-12 pb-16 bg-slate-900 overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="Construction Site Engineers"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#F97316]/20 border border-[#F97316]/40 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Guidance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            FAQS
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Two-Column FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Section Title */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight leading-tight">
              QUESTIONS AND ANSWERS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
              Find quick answers to common queries regarding pricing, turnkey workflows, municipal plan sanctions, and material supply.
            </p>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_PROMPT_ITEMS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border-b border-slate-200 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-5 px-2 flex items-center justify-between text-sm sm:text-base font-extrabold text-slate-900 hover:text-[#EA580C] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <span className="text-[#F97316] font-mono text-base font-black">{faq.num}</span>
                      <span className="uppercase tracking-wide">{faq.question}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <X className="w-5 h-5 text-[#F97316]" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-700" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-2 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#F97316]/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide max-w-3xl mx-auto leading-snug">
            Let our experts guide your project from concept to completion.
          </h3>

          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Talk to Expert ↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

