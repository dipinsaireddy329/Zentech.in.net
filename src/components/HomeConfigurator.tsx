import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, ArrowRight, Check, Home, Layers, CheckCircle2, ChevronRight, Eye, ShieldCheck, Ruler } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoute } from '../types';

interface HomeConfiguratorProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

type StyleType = 'modern' | 'traditional' | 'minimalist';
type PackageType = 'standard' | 'luxury';

export const HomeConfigurator: React.FC<HomeConfiguratorProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [style, setStyle] = useState<StyleType>('modern');
  const [floors, setFloors] = useState<number>(2); // 1 = G, 2 = G+1, 3 = G+2
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [interiorPackage, setInteriorPackage] = useState<PackageType>('luxury');
  const [activeTab, setActiveTab] = useState<'elevation' | 'interiors' | 'bedroom'>('elevation');

  // Architectural Styles Data
  const styleData: Record<StyleType, { name: string; tag: string; thumb: string; desc: string }> = {
    modern: {
      name: 'Modern Villa',
      tag: 'Contemporary Glass & Steel Elevation',
      thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
      desc: 'Cantilevered slabs, double-height floor-to-ceiling glass, ambient LED facade lighting, infinity balcony'
    },
    traditional: {
      name: 'Classic Heritage',
      tag: 'Rayalaseema Courtyard Residence',
      thumb: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=400&auto=format&fit=crop',
      desc: 'Terracotta tile sloping rooflines, solid Burma teak wood pillars, central open-to-sky Thotti courtyard'
    },
    minimalist: {
      name: 'Minimalist',
      tag: 'Monolithic Architectural Geometry',
      thumb: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop',
      desc: 'Clean exposed concrete textures, hidden gutter systems, shadow-line details, zen internal gardens'
    }
  };

  // Floor Height Elevation Photos (keyed by Style & Floor count)
  const floorImages: Record<StyleType, Record<number, string>> = {
    modern: {
      1: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
      2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      3: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
    },
    traditional: {
      1: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
      2: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
      3: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop'
    },
    minimalist: {
      1: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
      2: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop',
      3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop'
    }
  };

  // Bedroom BHK Images & Details
  const bedroomData: Record<number, { title: string; image: string; desc: string; baths: number }> = {
    2: {
      title: '2 BHK Smart Layout',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
      desc: '1 Master Bedroom Suite + 1 Guest Bedroom + Dining & Living',
      baths: 2
    },
    3: {
      title: '3 BHK Executive Family Residence',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      desc: '1 Master Suite with Walk-in Closet + 1 Kids Room + 1 Guest BHK + Balcony Deck',
      baths: 3
    },
    4: {
      title: '4 BHK Grand Mansion Layout',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
      desc: '2 Master Suites + Parents Bedroom + Guest Room + Pooja Room & Utility',
      baths: 4
    },
    5: {
      title: '5 BHK Presidential Estate Layout',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
      desc: 'Penthouse Master Suite + Home Theatre Room + 3 Guest Suites + Maid Quarter',
      baths: 5
    }
  };

  // Interior Package Specifications
  const interiorData: Record<PackageType, { title: string; image: string; tag: string; features: string[] }> = {
    standard: {
      title: 'Standard Turnkey',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
      tag: 'Modular Kitchen, Vitrified Tiles, Asian Emulsion',
      features: [
        'Acrylic Finish Modular Kitchen with Soft-Close Hardware',
        '800x800mm Kajaria Vitrified Floor Tiles',
        'Asian Paints Royale Washable Premium Emulsion',
        'Jaquar / Cera Sanitaryware & CP Fittings',
        'Finolex Fire-Resistant Wiring & Anchor Switches'
      ]
    },
    luxury: {
      title: 'Royal Luxury Turnkey',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop',
      tag: 'Italian Marble, Teak Doors, Kohler & Automation',
      features: [
        'Imported Italian Botticino / Dyna Marble Mirror-Polished Flooring',
        '8ft Solid Teakwood Main Entrance Door with Digital Smart Lock',
        'Kohler Thermostatic Rain Showers & Wall-Hung Toilets',
        'Full Modular Kitchen with Quartz Countertops & Inbuilt Appliances',
        'Smart Touch Switches & Automated Ambient Lighting Controls'
      ]
    }
  };

  // Calculate built-up area based on BHK and Floors
  const baseSqFtPerFloor = 1100 + (bedrooms - 2) * 250;
  const totalBuiltUpArea = baseSqFtPerFloor * floors;

  // Active view photo based on tab or active selection
  const currentElevationPhoto = floorImages[style][floors];

  return (
    <section className="py-20 bg-[#FAF9F6] text-slate-900 transition-colors relative overflow-hidden" id="section-[#home-configurator]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              <span>Interactive Dream Home Configurator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-slate-900">
              Design Your <span className="text-[#F97316]">Dream Residence</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Select your architectural style, height elevation, bedroom configuration, and turnkey interior package to visualize your custom engineering proposal.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-7">
            
            {/* Step 1: Architectural Style with Visual Images */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  1. Architectural Style
                </label>
                <span className="text-[11px] font-bold text-[#F97316]">{styleData[style].name}</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {(['modern', 'traditional', 'minimalist'] as StyleType[]).map((stKey) => {
                  const item = styleData[stKey];
                  const isSelected = style === stKey;
                  return (
                    <button
                      key={stKey}
                      onClick={() => {
                        setStyle(stKey);
                        setActiveTab('elevation');
                      }}
                      className={`relative group rounded-2xl overflow-hidden border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'ring-2 ring-[#F97316] border-[#F97316] shadow-lg shadow-[#F97316]/20'
                          : 'border-slate-200 hover:border-amber-300 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="h-20 sm:h-24 w-full relative overflow-hidden">
                        <img
                          src={item.thumb}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${isSelected ? 'from-slate-950/90 via-slate-950/40' : 'from-slate-900/80'} to-transparent`} />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-[#F97316] text-white p-1 rounded-full">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-xs font-black text-white leading-tight">{item.name}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Floors (Height Elevation) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  2. Floors (Height)
                </label>
                <span className="text-[11px] font-bold text-slate-700">
                  {floors === 1 ? 'Ground Floor (G)' : floors === 2 ? 'Duplex (G+1)' : 'Triplex Mansion (G+2)'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { num: 1, title: '1 Floor (G)', label: 'Single Story' },
                  { num: 2, title: '2 Floors (G+1)', label: 'Duplex Villa' },
                  { num: 3, title: '3 Floors (G+2)', label: 'Triplex Mansion' }
                ].map((f) => {
                  const isSelected = floors === f.num;
                  return (
                    <button
                      key={f.num}
                      onClick={() => {
                        setFloors(f.num);
                        setActiveTab('elevation');
                      }}
                      className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <p className="text-xs font-extrabold">{f.title}</p>
                      <p className={`text-[10px] mt-0.5 ${isSelected ? 'text-amber-400 font-semibold' : 'text-slate-500'}`}>
                        {f.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Bedrooms (BHK) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  3. Bedrooms (BHK)
                </label>
                <span className="text-[11px] font-bold text-[#F97316]">{bedrooms} BHK Configuration</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[2, 3, 4, 5].map((b) => {
                  const isSelected = bedrooms === b;
                  return (
                    <button
                      key={b}
                      onClick={() => {
                        setBedrooms(b);
                        setActiveTab('bedroom');
                      }}
                      className={`py-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#F97316] text-white border-[#F97316] shadow-md shadow-[#F97316]/20 font-black'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300'
                      }`}
                    >
                      <p className="text-xs font-extrabold">{b} BHK</p>
                      <p className={`text-[9px] mt-0.5 ${isSelected ? 'text-white/90' : 'text-slate-500'}`}>
                        {b === 2 ? 'Compact' : b === 3 ? 'Standard' : b === 4 ? 'Luxury' : 'Royal'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Interior Turnkey Finishing with Visual Images */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-2.5">
                4. Interior Turnkey Finishing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['standard', 'luxury'] as PackageType[]).map((pkgKey) => {
                  const pkg = interiorData[pkgKey];
                  const isSelected = interiorPackage === pkgKey;
                  return (
                    <button
                      key={pkgKey}
                      onClick={() => {
                        setInteriorPackage(pkgKey);
                        setActiveTab('interiors');
                      }}
                      className={`relative rounded-2xl p-3 border text-left transition-all cursor-pointer overflow-hidden flex items-center space-x-3 ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="pr-1 overflow-hidden">
                        <div className="flex items-center space-x-1">
                          <p className="text-xs font-black truncate">{pkg.title}</p>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                        </div>
                        <p className={`text-[10px] mt-1 line-clamp-2 leading-tight ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                          {pkg.tag}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visualizer Preview Stage */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 text-slate-900 relative overflow-hidden shadow-xl">
            
            {/* Stage View Header Selector Tabs */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
                {[
                  { id: 'elevation', label: 'Exterior Elevation' },
                  { id: 'interiors', label: 'Interior Finishing' },
                  { id: 'bedroom', label: 'Bedroom Layout' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <span className="hidden sm:inline-flex items-center space-x-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Spec</span>
              </span>
            </div>

            {/* Stage Hero Image View */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-5 border border-slate-200 bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeTab}-${style}-${floors}-${bedrooms}-${interiorPackage}`}
                  initial={{ opacity: 0.3, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.3 }}
                  transition={{ duration: 0.35 }}
                  src={
                    activeTab === 'elevation'
                      ? currentElevationPhoto
                      : activeTab === 'interiors'
                      ? interiorData[interiorPackage].image
                      : bedroomData[bedrooms].image
                  }
                  alt="Zentech Residence Concept"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* On-Image Specs Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase bg-[#F97316] text-white px-2.5 py-1 rounded-md font-extrabold shadow-sm">
                      {styleData[style].name}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-900/80 text-amber-300 border border-amber-400/30 px-2.5 py-1 rounded-md font-extrabold">
                      {floors === 1 ? 'Ground Floor (G)' : floors === 2 ? 'Duplex (G+1)' : 'Triplex (G+2)'}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white mt-2 drop-shadow-sm">
                    {bedrooms} BHK • {bedroomData[bedrooms].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip for Multi-Angle Preview */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <button
                onClick={() => setActiveTab('elevation')}
                className={`p-2 rounded-xl border flex items-center space-x-2 text-left transition-all cursor-pointer ${
                  activeTab === 'elevation' ? 'bg-amber-50 border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <img src={currentElevationPhoto} alt="Elevation" className="w-10 h-10 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-900 truncate">Elevation</p>
                  <p className="text-[9px] text-slate-500 truncate">{styleData[style].name}</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('interiors')}
                className={`p-2 rounded-xl border flex items-center space-x-2 text-left transition-all cursor-pointer ${
                  activeTab === 'interiors' ? 'bg-amber-50 border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <img src={interiorData[interiorPackage].image} alt="Interiors" className="w-10 h-10 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-900 truncate">Interiors</p>
                  <p className="text-[9px] text-slate-500 truncate">{interiorData[interiorPackage].title}</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('bedroom')}
                className={`p-2 rounded-xl border flex items-center space-x-2 text-left transition-all cursor-pointer ${
                  activeTab === 'bedroom' ? 'bg-amber-50 border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <img src={bedroomData[bedrooms].image} alt="Bedrooms" className="w-10 h-10 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-slate-900 truncate">{bedrooms} BHK Layout</p>
                  <p className="text-[9px] text-slate-500 truncate">{bedroomData[bedrooms].baths} Bathrooms</p>
                </div>
              </button>
            </div>

            {/* Technical Specifications Summary Card */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="font-bold text-slate-600">Built-Up Area:</span>
                  <span className="font-black text-slate-900 font-mono text-sm">{totalBuiltUpArea.toLocaleString()} Sq.Ft</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <span className="font-bold text-slate-600">Structural Standard:</span>
                  <span className="font-extrabold text-slate-900">IS-456 Civil Code • Fe 550D TMT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-600">Turnkey Finish:</span>
                  <span className="font-extrabold text-[#F97316]">{interiorData[interiorPackage].tag}</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-4 bg-[#F97316] hover:bg-amber-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-[#F97316]/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request Architectural Specs & Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
