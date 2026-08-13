import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, Sparkles, Building2, Layers, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface LiveCostEstimatorProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const LiveCostEstimator: React.FC<LiveCostEstimatorProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [plotAreaSqFt, setPlotAreaSqFt] = useState<number>(2000);
  const [floors, setFloors] = useState<number>(2); // G+1
  const [constructionType, setConstructionType] = useState<'residential' | 'commercial' | 'turnkey_duplex'>('residential');
  const [finishLevel, setFinishLevel] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Rates in ₹ per sq.ft based on Tirupati market standards
  const rates = {
    residential: {
      standard: 1950,
      premium: 2350,
      luxury: 2950
    },
    commercial: {
      standard: 2100,
      premium: 2600,
      luxury: 3200
    },
    turnkey_duplex: {
      standard: 2200,
      premium: 2650,
      luxury: 3400
    }
  };

  const ratePerSqFt = rates[constructionType][finishLevel];
  const totalBuiltUpAreaSqFt = plotAreaSqFt * floors;
  const estimatedCost = totalBuiltUpAreaSqFt * ratePerSqFt;
  const minCost = Math.round(estimatedCost * 0.95);
  const maxCost = Math.round(estimatedCost * 1.05);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 bg-[#F97316] hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-full shadow-2xl flex items-center space-x-2 border-2 border-white/20 cursor-pointer group"
        id="live-cost-estimator-trigger"
      >
        <Calculator className="w-5 h-5 text-white animate-bounce" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">Instant Cost Estimator</span>
        <span className="bg-amber-800/40 text-amber-100 text-[10px] font-mono px-2 py-0.5 rounded-full border border-amber-400/30">₹ Calculator</span>
      </motion.button>

      {/* Modal / Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative text-slate-900 dark:text-white"
            >
              {/* Header */}
              <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest mb-1">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  <span>Rayalaseema Construction Pricing Engine</span>
                </div>
                <h3 className="text-2xl font-black font-display uppercase tracking-tight">
                  Tirupati Live Construction Estimator
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Calculate realistic budget ranges based on current raw material rates (Vizag Steel, UltraTech, AAC Blocks).
                </p>
              </div>

              {/* Form Controls */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
                {/* Construction Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                    1. Project Category
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'residential', label: 'Residential Villa', icon: Building2 },
                      { id: 'turnkey_duplex', label: 'Turnkey Duplex', icon: Layers },
                      { id: 'commercial', label: 'Commercial Complex', icon: Building2 }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setConstructionType(item.id as any)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between cursor-pointer ${
                          constructionType === item.id
                            ? 'bg-[#F97316]/10 border-[#F97316] text-[#EA580C] dark:text-amber-400 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mb-2 text-[#F97316]" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Plot Size & Floors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Plot Footprint (Sq.Ft)
                      </label>
                      <span className="text-xs font-mono font-bold text-[#F97316]">{plotAreaSqFt} sq.ft</span>
                    </div>
                    <input
                      type="range"
                      min="600"
                      max="10000"
                      step="100"
                      value={plotAreaSqFt}
                      onChange={(e) => setPlotAreaSqFt(Number(e.target.value))}
                      className="w-full accent-[#F97316] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                      <span>600 sq.ft</span>
                      <span>5,000 sq.ft</span>
                      <span>10,000 sq.ft</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Floors Configuration
                    </label>
                    <select
                      value={floors}
                      onChange={(e) => setFloors(Number(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    >
                      <option value={1}>Ground Floor Only (G)</option>
                      <option value={2}>Ground + 1 Floor (G+1)</option>
                      <option value={3}>Ground + 2 Floors (G+2)</option>
                      <option value={4}>Ground + 3 Floors (G+3 Commercial)</option>
                    </select>
                    <p className="text-[10px] text-slate-400 mt-1 font-mono">
                      Total Built-up Area: <strong className="text-slate-700 dark:text-slate-200">{totalBuiltUpAreaSqFt.toLocaleString()} Sq.Ft</strong>
                    </p>
                  </div>
                </div>

                {/* Finish Level */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                    3. Finish & Specification Grade
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'standard', title: 'Standard Grade', rate: '₹1,950/sq.ft', desc: 'OPC Cement, TMT Steel, Asian Paints, AAC Blocks' },
                      { id: 'premium', title: 'Zentech Premium', rate: '₹2,350/sq.ft', desc: 'Vizag Fe550D Steel, UltraTech 53, Vitrified 4x2' },
                      { id: 'luxury', title: 'Royal Luxury', rate: '₹2,950/sq.ft', desc: 'Italian Marble, Teakwood, Kohler Fittings, Home Automation' }
                    ].map((grade) => (
                      <button
                        key={grade.id}
                        onClick={() => setFinishLevel(grade.id as any)}
                        className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer flex flex-col justify-between ${
                          finishLevel === grade.id
                            ? 'bg-amber-500/10 border-amber-500 text-amber-900 dark:text-amber-300 ring-2 ring-amber-500/30'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'
                        }`}
                      >
                        <div>
                          <div className="font-bold">{grade.title}</div>
                          <div className="text-[10px] text-[#EA580C] font-mono font-bold">{grade.rate}</div>
                        </div>
                        <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-tight">
                          {grade.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Estimated Result Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 border border-slate-700 shadow-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold">
                      Estimated Project Budget Range
                    </span>
                    <span className="text-[10px] bg-slate-800 px-2.5 py-1 rounded-full text-slate-300 border border-slate-700">
                      Rate: ₹{ratePerSqFt} / Sq.Ft
                    </span>
                  </div>

                  <div className="text-2xl sm:text-4xl font-black font-display text-white mb-2 tracking-tight">
                    {formatCurrency(minCost)} – {formatCurrency(maxCost)}
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed font-light mb-4">
                    Includes Architectural Blueprints, Structural Calculation, Soil Test, Civil Labor, Raw Materials, Plumbing, Electrical, Paints & Final Cleaning.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenQuoteModal();
                      }}
                      className="px-6 py-3 bg-[#F97316] hover:bg-amber-600 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#F97316]/20 flex items-center space-x-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Lock This Estimate & Consult Senior Engineer</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
