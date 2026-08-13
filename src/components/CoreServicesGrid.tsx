import React, { useState } from 'react';
import { CORE_SERVICES, ADDITIONAL_SERVICES } from '../data/zentechData';
import { ServiceItem, PageRoute } from '../types';
import { ServiceCard } from './ui/ServiceCard';
import { Button } from './ui/Button';
import { ScrollReveal } from './ScrollReveal';
import {
  HardHat,
  DraftingCompass,
  Layers,
  Box,
  Sparkles,
  Building2,
  Sliders,
  Truck,
  ClipboardCheck,
  LineChart,
  Key,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  X,
  Phone
} from 'lucide-react';

interface CoreServicesGridProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const CoreServicesGrid: React.FC<CoreServicesGridProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#F97316]" />;
      case 'DraftingCompass': return <DraftingCompass className="w-5 h-5 text-[#F97316]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#F97316]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#F97316]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#F97316]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#F97316]" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#F97316]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#F97316]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-[#F97316]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-[#F97316]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#F97316]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#F97316]" />;
    }
  };

  return (
    <section id="core-services" className="pb-24 bg-white text-slate-900 relative">
      {/* Sub-Hero Banner with One Partner Message */}
      <div className="relative pt-10 pb-10 bg-slate-900 overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop"
          alt="Civil Engineering Blueprints & Drafting"
          width={1600}
          height={600}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#F97316]/20 border border-[#F97316]/40 px-5 py-2.5 rounded-full text-sm font-mono font-bold text-amber-300 uppercase tracking-widest">
            <DraftingCompass className="w-4 h-4" />
            <span>One Partner For Everything</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              ENGINEERING & DESIGN PORTFOLIO
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 uppercase">
              12 CORE CONSTRUCTION & ARCHITECTURAL SERVICES
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Click any service card below to explore engineering specifications, multi-step execution workflows, and key applications.
            </p>
          </div>
        </ScrollReveal>

        {/* 12 Core Services Cards Grid using ServiceCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <ServiceCard
                service={service}
                index={index}
                icon={getServiceIcon(service.iconName)}
                onSelectService={setSelectedService}
                loadingLazy={true}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Building Categories */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">Project Domain Categories</h3>
              <p className="text-xs text-slate-600 mt-1">Dedicated specialized execution units for tailored client demands.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDITIONAL_SERVICES.map((add, idx) => (
              <ScrollReveal key={add.id} delay={idx * 0.1}>
                <div
                  onClick={onOpenQuoteModal}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 h-64 cursor-pointer shadow-xs hover:shadow-lg transition-all"
                >
                  <img
                    src={add.image}
                    alt={add.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 flex flex-col justify-end">
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1 font-display">
                      {add.title}
                    </h4>
                    <p className="text-xs text-slate-200 font-normal line-clamp-2">
                      {add.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-slate-900 space-y-6 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Header */}
            <div className="relative h-56 rounded-xl overflow-hidden border border-slate-200">
              <img
                src={selectedService.heroImage}
                alt={selectedService.title}
                width={800}
                height={350}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F97316] flex items-center justify-center text-white">
                    {getServiceIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white font-display">{selectedService.title}</h3>
                    <p className="text-xs text-amber-300 uppercase tracking-widest font-bold">Zentech Engineering Division</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Overview */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#EA580C]">Overview</h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">{selectedService.fullDesc}</p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#EA580C]">Key Client Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Process */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#EA580C]">4-Step Execution Process</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {selectedService.process.map((step, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start space-x-3">
                    <span className="w-6 h-6 rounded bg-[#F97316]/10 text-[#EA580C] font-bold font-mono text-center flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#EA580C]">Target Applications</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.applications.map((app, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200 font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuoteModal();
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire For {selectedService.title}
              </Button>

              <a
                href="tel:+919550972563"
                className="text-xs font-semibold text-slate-700 hover:text-[#EA580C] flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Call Senior Civil Engineer: +91 91213 55173</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
