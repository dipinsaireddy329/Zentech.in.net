import React, { useState, useEffect, useMemo } from 'react';
import { GALLERY_ITEMS } from '../data/zentechData';
import { GalleryItem, PageRoute } from '../types';
import { X, ZoomIn, ArrowRight, Image as ImageIcon, Search, Filter, Home, Building2, Paintbrush, Compass, HardHat, Sparkles } from 'lucide-react';

interface GalleryViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Database connection failed');
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped: GalleryItem[] = data.map((proj: any) => ({
            id: proj.id,
            title: proj.title,
            category: proj.category as any,
            url: Array.isArray(proj.images) && proj.images.length > 0 ? proj.images[0] : (proj.heroImage || proj.image_url || ''),
            description: proj.description || `${proj.category} project in ${proj.location || 'Tirupati'}`
          }));
          setGalleryList(prev => [...mapped, ...prev.filter(p => !mapped.some(m => m.id === p.id))]);
        }
      })
      .catch(err => console.warn('Using local static fallback for gallery items:', err.message));
  }, []);

  const categoryConfigs = [
    { id: 'All', label: 'All Showcase', icon: Filter },
    { id: 'Residential', label: 'Residential', icon: Home },
    { id: 'Commercial', label: 'Commercial', icon: Building2 },
    { id: 'Interior', label: 'Interior', icon: Paintbrush },
    { id: 'Architecture', label: 'Architecture', icon: Compass },
    { id: 'Site Progress', label: 'Site Execution', icon: HardHat },
    { id: 'Exterior', label: 'Exterior Facades', icon: Sparkles },
  ];

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: galleryList.length };
    categoryConfigs.forEach(c => {
      if (c.id === 'All') return;
      counts[c.id] = galleryList.filter(item => {
        if (c.id === 'Residential') return item.category === 'Residential' || item.category === 'Exterior';
        if (c.id === 'Commercial') return item.category === 'Commercial' || item.category === 'Exterior';
        if (c.id === 'Interior') return item.category === 'Interior' || item.category === 'Materials';
        if (c.id === 'Architecture') return item.category === 'Architecture' || item.category === '3D Render';
        return item.category === c.id;
      }).length;
    });
    return counts;
  }, [galleryList]);

  const filteredItems = useMemo(() => {
    return galleryList.filter(g => {
      // Category check
      let matchesCategory = true;
      if (activeCategory !== 'All') {
        if (activeCategory === 'Residential') matchesCategory = g.category === 'Residential' || (g.category as string) === 'Exterior';
        else if (activeCategory === 'Commercial') matchesCategory = g.category === 'Commercial' || (g.category as string) === 'Exterior';
        else if (activeCategory === 'Interior') matchesCategory = g.category === 'Interior' || (g.category as string) === 'Materials';
        else if (activeCategory === 'Architecture') matchesCategory = g.category === 'Architecture' || (g.category as string) === '3D Render';
        else matchesCategory = g.category === activeCategory;
      }

      // Search check
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        matchesSearch =
          g.title.toLowerCase().includes(query) ||
          g.category.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query);
      }

      return matchesCategory && matchesSearch;
    });
  }, [galleryList, activeCategory, searchQuery]);

  return (
    <div className="pt-20 pb-20 bg-[#FAF9F6] text-slate-900">
      {/* Sub-Hero Banner */}
      <div className="relative pt-12 pb-16 bg-slate-900 overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Building Glass Facade"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#F97316]/20 border border-[#F97316]/40 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Portfolio & Archive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            PROJECT GALLERY
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-xs sm:text-sm">
            Filter high-resolution site execution photos, luxury villa interiors, commercial elevations, and 3D architectural renders in Tirupati.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search Bar & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categoryConfigs.map((cat) => {
              const IconComp = cat.icon;
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F97316] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600 p-0.5 rounded-full cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>
            Showing <strong className="text-slate-900 font-bold">{filteredItems.length}</strong> project photos
            {activeCategory !== 'All' && <span> in <strong className="text-[#EA580C] uppercase">{activeCategory}</strong></span>}
          </span>
          {(activeCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-[#EA580C] hover:underline font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <Filter className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No Gallery Projects Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No project images match your current filter criteria ({searchQuery ? `"${searchQuery}"` : activeCategory}).
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#F97316] text-white rounded-lg text-xs font-bold uppercase cursor-pointer"
            >
              Show All Photos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group bg-white border border-slate-200 hover:border-[#F97316] rounded-2xl overflow-hidden cursor-pointer relative h-80 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl flex flex-col justify-end"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn className="w-4 h-4 text-[#F97316]" />
                </div>

                <div className="relative p-5 space-y-1.5 text-white z-10">
                  <span className="text-[10px] text-amber-300 uppercase font-mono font-bold tracking-widest bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-700/80 inline-block shadow-xs">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/85 backdrop-blur-md animate-fadeIn">
          <div className="max-w-4xl w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 relative text-slate-900 space-y-4 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[65vh] rounded-xl overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
              <div className="space-y-1 max-w-xl">
                <span className="text-xs text-[#EA580C] uppercase font-bold font-mono tracking-wider">{selectedImage.category} Showcase</span>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{selectedImage.title}</h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{selectedImage.description}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedImage(null);
                  onOpenQuoteModal();
                }}
                className="bg-[#F97316] hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105"
              >
                <span>Request Project Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


