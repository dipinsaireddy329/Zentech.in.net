import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/zentechData';
import { 
  Calculator, 
  Building2, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Phone,
  HardHat,
  Info
} from 'lucide-react';

interface EstimateCalculatorProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [areaSqFt, setAreaSqFt] = useState<number>(2000);
  const [floors, setFloors] = useState<string>('G+1'); // Ground, G+1, G+2, G+3
  const [packageGrade, setPackageGrade] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [includeInteriors, setIncludeInteriors] = useState<boolean>(true);

  // Rate multipliers per sq ft
  const rates = {
    standard: 1850,
    premium: 2350,
    luxury: 3200
  };

  const floorMultiplierMap: { [key: string]: number } = {
    'Ground': 1.0,
    'G+1': 1.95,
    'G+2': 2.85,
    'G+3': 3.75
  };

  const baseRate = rates[packageGrade];
  const floorMult = floorMultiplierMap[floors] || 1.95;
  const interiorCostPerSqFt = includeInteriors ? (packageGrade === 'luxury' ? 600 : packageGrade === 'premium' ? 350 : 200) : 0;

  const totalArea = Math.round(areaSqFt * (floors === 'Ground' ? 1 : floors === 'G+1' ? 1.9 : floors === 'G+2' ? 2.8 : 3.7));
  const estimatedCost = totalArea * (baseRate + interiorCostPerSqFt);

  // Cost Breakup
  const civilCost = Math.round(estimatedCost * 0.45);
  const finishingCost = Math.round(estimatedCost * 0.25);
  const electricalPlumbingCost = Math.round(estimatedCost * 0.15);
  const interiorWoodworkCost = Math.round(estimatedCost * 0.15);

  const estimatedMonths = areaSqFt < 1500 ? "6 to 8 Months" : areaSqFt < 3000 ? "8 to 11 Months" : "11 to 14 Months";

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="cost-estimator" className="py-24 bg-[#0B0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#F97316]/10 border border-[#F97316]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F97316] uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#F97316]" />
            <span>Interactive Estimator Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            3D Construction & Material Cost Estimator
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Transparent pricing based on actual Tirupati market material costs, IS-code civil engineering standards, and finish levels.
          </p>
        </div>

        {/* Estimator Tool Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Inputs Controls */}
          <div className="lg:col-span-7 bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            {/* 1. Area Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                  1. Plot / Built-up Area (Sq. Ft.)
                </label>
                <span className="text-xl font-black text-white font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                  {areaSqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="8000"
                step="100"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#F97316]"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>600 sq.ft</span>
                <span>2,500 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>8,000 sq.ft</span>
              </div>
            </div>

            {/* 2. Floors Option */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                2. Number of Floors
              </label>
              <div className="grid grid-cols-4 gap-3">
                {['Ground', 'G+1', 'G+2', 'G+3'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFloors(f)}
                    className={`py-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      floors === f
                        ? 'bg-[#F97316] text-white border-white shadow-lg shadow-[#F97316]/30'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Package Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                3. Construction Living Grade Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setPackageGrade('standard')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    packageGrade === 'standard'
                      ? 'bg-[#F97316]/10 border-[#F97316] ring-2 ring-[#F97316]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xs font-bold text-white block">Standard Grade</span>
                  <span className="text-[11px] text-[#F97316] font-mono font-bold">₹1,850 / sq.ft</span>
                  <p className="text-[10px] text-gray-400 mt-2">Vizag Steel, UltraTech, Vitrified Tiles, Tractor Emulsion</p>
                </button>

                <button
                  onClick={() => setPackageGrade('premium')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    packageGrade === 'premium'
                      ? 'bg-[#F97316]/10 border-[#F97316] ring-2 ring-[#F97316]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Premium Grade</span>
                    <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">Most Popular</span>
                  </div>
                  <span className="text-[11px] text-[#F97316] font-mono font-bold block mt-1">₹2,350 / sq.ft</span>
                  <p className="text-[10px] text-gray-400 mt-2">Fe 550D Steel, Kajaria 4x2 Tiles, Jaquar Sanitary, Teak Main Door</p>
                </button>

                <button
                  onClick={() => setPackageGrade('luxury')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    packageGrade === 'luxury'
                      ? 'bg-[#F97316]/10 border-[#F97316] ring-2 ring-[#F97316]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xs font-bold text-white block">Luxury Living</span>
                  <span className="text-[11px] text-[#F97316] font-mono font-bold">₹3,200 / sq.ft</span>
                  <p className="text-[10px] text-gray-400 mt-2">Italian Statuario Marble, Kohler Thermostat, Smart Locks, VRF AC</p>
                </button>
              </div>
            </div>

            {/* 4. Modular Interior Woodwork Toggle */}
            <div className="pt-2 flex items-center justify-between bg-[#111111] p-4 rounded-xl border border-white/10">
              <div>
                <span className="text-xs font-bold text-white block">Include Factory Modular Interior Woodwork</span>
                <span className="text-[11px] text-gray-400">Custom modular kitchen, wardrobes, false ceiling & ambient track lighting.</span>
              </div>
              <input
                type="checkbox"
                checked={includeInteriors}
                onChange={(e) => setIncludeInteriors(e.target.checked)}
                className="w-5 h-5 accent-[#F97316] cursor-pointer"
              />
            </div>
          </div>

          {/* Right Summary Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1F1F1F] via-[#151515] to-[#111111] border border-[#F97316]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">Estimated Turnkey Budget</span>
              <h3 className="text-3xl sm:text-4xl font-black text-white font-mono mt-1 text-[#F97316]">
                {formatINR(estimatedCost)}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Estimated Total Built-up Area: <strong className="text-white">{totalArea.toLocaleString()} sq.ft</strong>
              </p>
            </div>

            {/* Cost Breakup Progress */}
            <div className="space-y-3 text-xs">
              <span className="font-bold text-white uppercase tracking-wider block text-[11px]">Phase-Wise Budget Breakup</span>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Civil & Foundation (45%)</span>
                    <span className="font-mono text-white font-semibold">{formatINR(civilCost)}</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F97316] w-[45%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Finishing & Flooring (25%)</span>
                    <span className="font-mono text-white font-semibold">{formatINR(finishingCost)}</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[25%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Electrical & Plumbing (15%)</span>
                    <span className="font-mono text-white font-semibold">{formatINR(electricalPlumbingCost)}</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 w-[15%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Interior & Woodwork (15%)</span>
                    <span className="font-mono text-white font-semibold">{formatINR(interiorWoodworkCost)}</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-300 w-[15%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Timeline */}
            <div className="bg-[#111111] p-4 rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Estimated Delivery Timeline</span>
                <span className="text-amber-300 font-bold text-sm">{estimatedMonths}</span>
              </div>
              <HardHat className="w-6 h-6 text-[#F97316]" />
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-[#F97316] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl shadow-[#F97316]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Get Official Itemized BOQ Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-3 px-4 rounded-xl border border-white/10 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span>Discuss With Senior Estimator: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
