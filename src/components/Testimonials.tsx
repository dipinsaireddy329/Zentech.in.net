import React from 'react';
import { TESTIMONIALS } from '../data/zentechData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-700 uppercase tracking-wider">
              <span>Client Testimonials</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
              Trusted By Property Owners Across Andhra Pradesh
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Real stories from clients who experienced our single-source end-to-end construction execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal key={t.id} delay={idx * 0.12}>
              <div
                className="bg-[#FAF9F6] border border-slate-200 hover:border-[#F97316] p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg flex flex-col justify-between h-full"
              >
                <Quote className="w-8 h-8 text-[#F97316]/20 absolute top-6 right-6" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#F97316]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                    </h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                    <p className="text-[10px] text-[#EA580C] font-mono font-bold">{t.projectType} • {t.companyOrType}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
