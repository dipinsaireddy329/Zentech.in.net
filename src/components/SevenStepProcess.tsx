import React, { useState } from 'react';
import { SEVEN_STEPS } from '../data/zentechData';
import { PageRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/Button';
import { 
  Building, 
  SlidersHorizontal, 
  Eye, 
  Users, 
  FileText, 
  Activity, 
  Award, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SevenStepProcessProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const SevenStepProcess: React.FC<SevenStepProcessProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-5 h-5 text-[#F97316]" />;
      case 'SlidersHorizontal': return <SlidersHorizontal className="w-5 h-5 text-[#F97316]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#F97316]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#F97316]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#F97316]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#F97316]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#F97316]" />;
      default: return <Sparkles className="w-5 h-5 text-[#F97316]" />;
    }
  };

  return (
    <section id="seven-steps" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#F97316]/10 border border-[#F97316]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#EA580C] uppercase tracking-wider">
              <span>Seamless Transparent Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
              Our 7-Step Building Process
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal">
              A streamlined, transparent journey from your first visit to the key handover ceremony.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Desktop Bar */}
        <ScrollReveal delay={0.1}>
          <div className="relative mb-12 hidden lg:block">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#F97316] to-amber-500 -translate-y-1/2 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / SEVEN_STEPS.length) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between">
              {SEVEN_STEPS.map((step, idx) => {
                const isCurrent = idx === activeStep;
                const isPast = idx < activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border-2 font-mono ${
                      isCurrent 
                        ? 'bg-[#F97316] border-white text-white scale-125 shadow-md shadow-[#F97316]/40' 
                        : isPast
                          ? 'bg-amber-600 border-amber-500 text-white'
                          : 'bg-white border-slate-300 text-slate-500 group-hover:border-[#F97316]'
                    }`}>
                      {step.number}
                    </div>
                    <span className={`text-[11px] font-semibold mt-3 max-w-[100px] text-center leading-tight transition-colors font-display ${
                      isCurrent ? 'text-[#EA580C] font-bold' : 'text-slate-500 group-hover:text-slate-900'
                    }`}>
                      {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Active Step Highlight Card */}
        <div className="bg-[#FAF9F6] border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-[#F97316] text-white font-black text-sm font-mono flex items-center justify-center shadow-md shadow-[#F97316]/30">
                {SEVEN_STEPS[activeStep].number}
              </span>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                {getStepIcon(SEVEN_STEPS[activeStep].icon)}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-widest">Phase {activeStep + 1} of 7</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">{SEVEN_STEPS[activeStep].title}</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {SEVEN_STEPS[activeStep].description}
            </p>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <span className="font-bold text-[#EA580C] uppercase tracking-wider block">Deliverables & Client Experience:</span>
              <p className="leading-relaxed font-normal">{SEVEN_STEPS[activeStep].details}</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book Step {SEVEN_STEPS[activeStep].number} Consultation
              </Button>

              {activeStep < SEVEN_STEPS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Next Step ({SEVEN_STEPS[activeStep + 1].title})</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 overflow-hidden group">
              <img
                src={SEVEN_STEPS[activeStep].image}
                alt={SEVEN_STEPS[activeStep].title}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs font-mono font-bold text-amber-300">
                Phase {SEVEN_STEPS[activeStep].number} Visual
              </div>
              <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400">Step Experience</span>
                <p className="text-xs font-semibold line-clamp-1">{SEVEN_STEPS[activeStep].title}</p>
              </div>
            </div>

            <div className="p-5 space-y-3 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 text-[#EA580C] flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-display">Zentech Experience Center</h4>
                  <p className="text-[11px] text-slate-600 line-clamp-1">Air By-Pass Road, Tirupati • Live Material Samples & 3D VR</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-200 text-center transition-colors cursor-pointer"
              >
                Get Experience Center Directions
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Step Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
          {SEVEN_STEPS.map((s, idx) => (
            <button
              key={s.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                activeStep === idx ? 'bg-[#F97316] text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Step {s.number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
