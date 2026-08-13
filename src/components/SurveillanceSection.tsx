import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Camera, Radio, Eye, Calendar, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SurveillanceSection: React.FC = () => {
  const [activeCam, setActiveCam] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toLocaleTimeString() + ' | ' + now.toLocaleDateString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const cameras = [
    {
      id: 0,
      name: "Tirupati Foothills Villa - Camera 01 (Front Elevation)",
      src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
      milestone: "Bricklaying & Plastering Phase",
      percentage: 65,
      location: "Alipiri Road, Tirupati"
    },
    {
      id: 1,
      name: "Renigunta Commercial Complex - Camera 02 (Slab Casting)",
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      milestone: "Structural Pillars Completed",
      percentage: 45,
      location: "Renigunta Industrial Zone"
    },
    {
      id: 2,
      name: "Padmavati Colony Residence - Camera 03 (Interior Finishing)",
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      milestone: "Electrical & False Ceiling Install",
      percentage: 85,
      location: "Padmavati Colony, Tirupati"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Absolute grid and glowing nodes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#F97316]/10 border border-[#F97316]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F97316] uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#F97316]" />
                <span>Live Feed & Milestones</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
                Design Your Dream Residence <br />
                <span className="text-[#F97316]">Live Site Surveillance & Milestones</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                Transparency in every brick. Track your home's construction progress live through high-definition remote surveillance cameras and detailed milestone checklists.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
              <span>LIVE SERVER</span>
              <span className="text-slate-600">|</span>
              <span>{timestamp}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main interactive stream display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stream Player */}
          <div className="lg:col-span-8 space-y-4">
            <ScrollReveal>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-black group shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCam}
                    initial={{ opacity: 0.3, filter: 'blur(4px)' }}
                    animate={{ opacity: 0.9, filter: 'blur(0px)' }}
                    exit={{ opacity: 0.3, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4 }}
                    src={cameras[activeCam].src}
                    alt={cameras[activeCam].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
                  />
                </AnimatePresence>
                
                {/* HUD overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Camera Name Tag & Location */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800/80 flex items-center space-x-3 text-xs font-bold">
                  <Camera className="w-4 h-4 text-[#F97316]" />
                  <span>{cameras[activeCam].name}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800/80">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    <span className="text-slate-300">{cameras[activeCam].location}</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-[#F97316] text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold shadow-lg">
                    <Clock className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
                    <span>Active Phase: {cameras[activeCam].milestone}</span>
                  </div>
                </div>

                {/* Scanline overlay effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] opacity-40" />
                
                {/* REC pulse indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-red-600/90 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-lg border border-red-500 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>REC 1080P</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Camera switcher & Milestones panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F97316] block">
                Select Active Site Camera
              </span>
              
              <div className="space-y-3">
                {cameras.map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => setActiveCam(cam.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                      activeCam === cam.id
                        ? 'bg-slate-900 border-[#F97316] shadow-lg shadow-[#F97316]/5'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${activeCam === cam.id ? 'bg-[#F97316] text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      <Eye className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate text-white">{cam.name.split(" - ")[0]}</p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{cam.milestone}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Active Camera Milestone Tracker card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-white">Project Progress</span>
                <span className="text-xs font-bold text-[#F97316]">{cameras[activeCam].percentage}% Complete</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${cameras[activeCam].percentage}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="bg-gradient-to-r from-[#F97316] to-amber-500 h-full rounded-full"
                />
              </div>
              <div className="pt-2 grid grid-cols-2 gap-3 text-center border-t border-slate-800/80">
                <div className="p-2.5 bg-slate-900/80 rounded-xl">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Start Date</p>
                  <p className="text-xs font-bold text-white mt-1">May 15, 2026</p>
                </div>
                <div className="p-2.5 bg-slate-900/80 rounded-xl">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimated Handover</p>
                  <p className="text-xs font-bold text-[#F97316] mt-1">Dec 20, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
