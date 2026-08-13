import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/zentechData';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  Target, 
  Compass, 
  ArrowRight, 
  CheckCircle2,
  HardHat,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

const TEAM_MEMBERS = [
  {
    name: "Er. A. K. Reddy",
    title: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    specialty: "Civil & Structural Master"
  },
  {
    name: "Arch. S. V. Priya",
    title: "Principal Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    specialty: "Contemporary & Modern Architecture"
  },
  {
    name: "Er. K. Srinivas",
    title: "Senior Structural Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    specialty: "High-Rise & Steel Concrete Frames"
  },
  {
    name: "N. Ramesh Babu",
    title: "Head of Material Sourcing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    specialty: "Direct Steel & Cement Factory Procurement"
  },
  {
    name: "Arch. M. Bhavana",
    title: "Lead Interior Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    specialty: "Luxury Residential & Modular Styling"
  },
  {
    name: "Er. T. Mahesh",
    title: "Site Operations Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    specialty: "Quality Control & CCTV Live Audit"
  },
  {
    name: "S. K. Verma",
    title: "Senior Design Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    specialty: "Spatial Design & Layout Optimization"
  },
  {
    name: "P. Rajesh Kumar",
    title: "Project Management Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    specialty: "On-Time Handover Guarantee"
  }
];

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans">
      {/* Sub-Hero Banner */}
      <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="Active Construction Site Engineers"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            ABOUT US
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Building Rayalaseema's future through transparency, engineering excellence, and unified end-to-end execution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Our Story Section (Two Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=90&w=1200&auto=format&fit=crop"
                alt="Zentech Engineering Team on Construction Site"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F97316] text-white flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Tirupati Headquarters</p>
                    <p className="text-[11px] text-slate-600">Air By-Pass Road Experience Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                About Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-wide">
                OUR STORY
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              Zentech was founded with a simple yet powerful vision: to transform the way people build their dream homes. We recognized that constructing a home often involves coordinating with multiple professionals, managing complex processes, and dealing with a lack of transparency. To eliminate these challenges, we created a unified platform that brings Architecture, Engineering, Interior Design, Material Selection, Project Management, and Construction Execution under one roof.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              With a strong focus on quality, innovation, and customer satisfaction, Zentech simplifies every stage of the construction journey from concept and planning to execution and handover. By combining industry expertise with modern technology, we provide homeowners with clear communication, real-time project updates, transparent pricing, and efficient project delivery.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="bg-[#F97316] hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-widest py-3.5 px-7 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center space-x-2"
              >
                <span>Explore Services ↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200/90 p-8 rounded-2xl space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 uppercase">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              To be Rayalaseema's most trusted and technologically advanced construction company, establishing benchmarks in architectural innovation, structural safety, and material authenticity.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 p-8 rounded-2xl space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 text-[#EA580C] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 uppercase">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              To empower property owners by combining master planning, structural engineering, direct factory material sourcing, and continuous digital project tracking under one unified roof.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest">Leadership & Engineering Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              TEAM MEMBER
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Our multidisciplinary team of licensed architects, structural engineers, procurement managers, and site supervisors.
            </p>
          </div>

          <div className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex-none w-52 snap-start"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-md border border-slate-700 text-[9px] font-mono text-amber-300 line-clamp-1">
                    {member.specialty}
                  </div>
                </div>

                <div className="p-4 space-y-0.5 text-center bg-white">
                  <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-[#EA580C] transition-colors whitespace-nowrap truncate" title={member.name}>
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight whitespace-nowrap truncate" title={member.title}>
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#F97316]/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide max-w-3xl mx-auto leading-snug">
            Let our experts guide your project from concept to completion.
          </h3>

          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Talk to Expert ↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

