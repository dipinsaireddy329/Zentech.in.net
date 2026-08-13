import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/Button';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  DraftingCompass, 
  Layers, 
  Truck, 
  HardHat, 
  LineChart, 
  Award,
  ShieldCheck
} from 'lucide-react';

interface OnePartnerWorkflowProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const OnePartnerWorkflow: React.FC<OnePartnerWorkflowProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  const workflowSteps = [
    {
      step: "01",
      title: "Strategic Land & Planning",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      desc: "Comprehensive plot soil bearing testing, boundary verification, site orientation analysis, and TUDA / Tirupati municipal compliance documentation.",
      bullets: ["Soil stratification & bearing capacity lab tests", "TUDA & Tirupati Municipal approval assistance", "Strategic zoning & road layout clearance"]
    },
    {
      step: "02",
      title: "Architectural & 3D Design",
      icon: DraftingCompass,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      desc: "Creating hyper-realistic 8K 3D exterior renders, interior daylight simulations, and 360° VR walkthroughs so you see your dream home before breaking ground.",
      bullets: ["8K photorealistic exterior & interior renders", "Optimized floor plan layouts", "360-degree virtual reality walkthroughs"]
    },
    {
      step: "03",
      title: "Structural Engineering",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      desc: "ETABS & STAAD.Pro structural load calculations ensuring earthquake resilience (Seismic Zone III/IV) and zero rebar steel over-specification.",
      bullets: ["Seismic resistant structural engineering", "Optimized rebar schedules reducing wastage", "Certified structural stability documentation"]
    },
    {
      step: "04",
      title: "Direct Material Procurement",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      desc: "Direct factory procurement of Vizag Steel, UltraTech Cement, Italian Statuario marble, CPVC piping, and Havells electricals at wholesale rates.",
      bullets: ["Direct mill pricing with zero middleman markup", "Lab test authenticity certificate for every lot", "Zentech Experience Center physical testing"]
    },
    {
      step: "05",
      title: "Civil Construction Execution",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      desc: "Dedicated senior civil engineers on site overseeing excavation, continuous footings, slab casting, brickwork, and waterproofing.",
      bullets: ["Full-time senior civil supervisor on site", "IS-code slump & concrete cube compressive testing", "Strict safety protocols & milestone tracking"]
    },
    {
      step: "06",
      title: "Live Project Monitoring",
      icon: LineChart,
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
      desc: "Track construction from anywhere in the world with live CCTV app access, weekly drone footage, and transparent itemized cashflow statements.",
      bullets: ["24/7 CCTV mobile app portal stream", "Weekly drone video progress reporting", "Transparent itemized expenditure tracking"]
    },
    {
      step: "07",
      title: "Quality Audit & Handover",
      icon: Award,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
      desc: "100-point quality snag inspection, deep cleaning, key handover ceremony, along with a 10-Year Structural Warranty certificate.",
      bullets: ["100-point rigorous quality snag audit", "Deep site cleaning & polished key handover", "10-Year Structural Warranty + 1-Year Free Maintenance"]
    }
  ];

  const currentStep = workflowSteps[activeWorkflowIndex];

  return (
    <section className="py-24 bg-[#FAF9F6] text-slate-900 relative overflow-hidden border-t border-b border-slate-200">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Storytelling Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
              One Partner For Everything
            </h2>

            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Eliminate the stress of juggling 10 different contractors, architects, dealers, and site supervisors. Zentech integrates the entire construction chain into one seamless, transparent workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Step Navigation Selector */}
          <div className="lg:col-span-5 space-y-3">
            {workflowSteps.map((item, idx) => {
              const isSelected = idx === activeWorkflowIndex;
              const IconComp = item.icon;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveWorkflowIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                    isSelected 
                      ? 'bg-white border-[#F97316] shadow-md transform translate-x-1' 
                      : 'bg-white/60 border-slate-200/80 hover:bg-white text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-extrabold font-mono px-2.5 py-1 rounded-md ${
                      isSelected ? 'bg-[#F97316] text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.step}
                    </span>
                    <div className="flex items-center space-x-2.5">
                      <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#EA580C]' : 'text-slate-500'}`} />
                      <span className={`text-sm font-bold font-display ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#EA580C] translate-x-1' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Preview Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Step Background Image Showcase */}
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-6 border border-slate-200 group">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                width={800}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-amber-300 flex items-center space-x-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Phase {currentStep.step} / 07</span>
              </div>
            </div>

            {/* Step Content */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                {currentStep.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentStep.desc}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div className="pt-2 space-y-2">
                {currentStep.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-slate-100">
                <Button
                  variant="primary"
                  onClick={onOpenQuoteModal}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Phase Consultation
                </Button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-slate-700 hover:text-[#EA580C] underline cursor-pointer"
                >
                  Visit Tirupati Experience Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
