import React from 'react';
import { ServiceItem } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  icon: React.ReactNode;
  onSelectService: (service: ServiceItem) => void;
  loadingLazy?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  icon,
  onSelectService,
  loadingLazy = true,
}) => {
  return (
    <div
      onClick={() => onSelectService(service)}
      className="group bg-white border border-slate-200/90 hover:border-[#F97316] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between h-full"
    >
      <div>
        {/* Image Header with Fixed Aspect Ratio */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img
            src={service.heroImage}
            alt={`${service.title} by Zentech Construction Tirupati`}
            width={600}
            height={337}
            loading={loadingLazy ? "lazy" : "eager"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Number Badge */}
          <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-xs font-mono font-extrabold text-amber-300">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>

          {/* Category Tag */}
          <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
            Zentech Division
          </div>

          {/* Icon Badge */}
          <div className="absolute -bottom-4 right-5 w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-md group-hover:border-[#F97316] flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 pt-6 space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors font-display">
            {service.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 mt-2">
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#EA580C]">
          <span>View Specifications & Process</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
