import React from 'react';
import { WHY_CHOOSE_US } from '../data/zentechData';
import { PageRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/Button';
import { 
  HardHat, 
  Compass, 
  Palette, 
  Truck, 
  CheckCircle, 
  BarChart3, 
  ShieldAlert, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat': return <HardHat className="w-6 h-6 text-[#F97316]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#F97316]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#F97316]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#F97316]" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-[#F97316]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#F97316]" />;
      default: return <ShieldAlert className="w-6 h-6 text-[#F97316]" />;
    }
  };

  return (
    <section className="py-24 bg-[#1C1917] text-white relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#F97316]/20 border border-[#F97316]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              <span>The Zentech Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              7 Pillars of Engineering & Architectural Excellence
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Why Rayalaseema property developers, business owners, and families entrust their construction to Zentech.
            </p>
          </div>
        </ScrollReveal>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 0.08}>
              <div
                className="bg-slate-900/90 border border-slate-800 hover:border-[#F97316] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-2xl flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors font-display">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center text-[11px] font-bold text-amber-400">
                  <span>Guaranteed Quality Standard</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* 8th CTA Box */}
          <ScrollReveal delay={0.6}>
            <div className="bg-gradient-to-br from-[#F97316] to-amber-600 p-6 rounded-2xl text-white flex flex-col justify-between shadow-xl shadow-[#F97316]/25 h-full border border-amber-400/30">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-200">Start Building</span>
                <h3 className="text-2xl font-black text-white mt-2 mb-2 font-display">Build With Total Peace of Mind</h3>
                <p className="text-xs text-white/90 leading-relaxed font-normal">
                  Speak directly with senior civil engineers and architects at our Tirupati Experience Center today.
                </p>
              </div>

              <div className="mt-6">
                <Button
                  variant="dark"
                  size="md"
                  fullWidth
                  onClick={onOpenQuoteModal}
                  icon={<ArrowRight className="w-4 h-4 text-[#F97316]" />}
                >
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
