import React from 'react';
import { SERVICES_OVERVIEW } from '../data/zentechData';
import { PageRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { 
  MapPin, 
  Compass, 
  HardHat, 
  Truck, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#F97316]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#F97316]" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-[#F97316]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#F97316]" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#F97316]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#F97316]" />;
      default: return <Sparkles className="w-6 h-6 text-[#F97316]" />;
    }
  };

  return (
    <section id="services-overview" className="py-24 bg-[#FAF9F6] text-slate-900 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#F97316]/10 border border-[#F97316]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#EA580C] uppercase tracking-wider">
              <span>Integrated Construction Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
              End-to-End Construction Solutions
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal">
              We unite every phase of development—from raw land compliance to final key handover—under single-source accountability.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_OVERVIEW.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} distance={30}>
              <div
                onClick={() => onNavigate('services')}
                className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-[#F97316] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Image Reveal Backdrop */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs font-extrabold text-amber-300 font-mono">
                    0{index + 1}
                  </div>

                  {/* Animated Icon Badge */}
                  <div className="absolute -bottom-5 right-6 w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md group-hover:border-[#F97316] flex items-center justify-center group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
                    {getIcon(item.icon)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#EA580C]">
                    <span>Explore Capabilities</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Gradient Border Line */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F97316] to-amber-500 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-[#F97316] text-slate-800 hover:text-[#EA580C] font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>View All Detailed Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
