import React from 'react';
import { ONGOING_PROJECTS } from '../data/zentechData';
import { ScrollReveal } from './ScrollReveal';
import { HardHat, Calendar, CheckCircle2, Clock, MapPin, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageRoute } from '../types';

interface OngoingProjectsTrackerProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const OngoingProjectsTracker: React.FC<OngoingProjectsTrackerProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#EA580C] dark:text-amber-400 uppercase tracking-wider mb-3">
                <Activity className="w-4 h-4 text-[#F97316] animate-pulse" />
                <span>Live Site Surveillance & Milestones</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase">
                Active On-Site <span className="text-[#F97316]">Execution Tracker</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mt-2 font-normal">
                Zentech clients enjoy weekly drone scans, IoT site camera access, and milestone progress tracking. Experience our live site transparency.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-[#F97316] text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center space-x-2 cursor-pointer shrink-0"
            >
              <span>Explore All Completed Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#F97316]" />
            </button>
          </div>
        </ScrollReveal>

        {/* Project Tracker Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ONGOING_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col justify-between h-full hover:border-[#F97316] transition-all">
                <div>
                  {/* Hero Image & Badge */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5 border border-slate-200 dark:border-slate-700">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-slate-700 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#F97316]" />
                      <span>{project.location}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                      <span className="text-[10px] font-mono uppercase bg-amber-500/80 text-slate-950 font-black px-2 py-0.5 rounded">
                        {project.projectType}
                      </span>
                      <span className="text-xs font-bold font-mono text-amber-300">
                        {project.totalAreaSqFt.toLocaleString()} Sq.Ft
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
                    Owner: <strong className="text-slate-800 dark:text-slate-200">{project.client}</strong>
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center text-xs font-mono font-bold">
                      <span className="text-slate-700 dark:text-slate-300">Current Progress</span>
                      <span className="text-[#EA580C] dark:text-amber-400">{project.progressPercentage}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progressPercentage}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-amber-500 to-[#F97316] rounded-full"
                      />
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-bold flex items-center space-x-1.5 pt-1">
                      <HardHat className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>Phase: {project.currentPhase}</span>
                    </p>
                  </div>

                  {/* Recent Milestones Timeline */}
                  <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-700 pt-4 mb-4">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Key Execution Milestones
                    </p>
                    {project.recentMilestones.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center space-x-2">
                          {m.status === 'completed' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          ) : m.status === 'in-progress' ? (
                            <Clock className="w-3.5 h-3.5 text-amber-500 animate-spin shrink-0" />
                          ) : (
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0 ml-0.5" />
                          )}
                          <span className={`text-[11px] line-clamp-1 ${
                            m.status === 'completed' ? 'text-slate-700 dark:text-slate-300' :
                            m.status === 'in-progress' ? 'text-amber-600 dark:text-amber-300 font-bold' : 'text-slate-400'
                          }`}>
                            {m.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 ml-2">{m.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>Target Handover: <strong className="text-slate-700 dark:text-slate-200">{project.expectedCompletion}</strong></span>
                  <span className="text-[#F97316] font-bold">Zentech Quality Standard</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
