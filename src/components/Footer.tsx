import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/zentechData';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  ShieldCheck, 
  ExternalLink,
  Shield 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-xl p-2">
                <img 
                  src={logoImg} 
                  alt="Zentech Logo" 
                  className="h-14 w-auto object-contain" 
                />
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal italic">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Zentech connects planning, architecture, structural engineering, bulk raw materials, and construction execution under one roof across Andhra Pradesh and Rayalaseema.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a 
                href={COMPANY_INFO.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#F97316] hover:border-[#F97316] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#F97316] hover:border-[#F97316] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#F97316] hover:border-[#F97316] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialLinks.twitter} 
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 cursor-not-allowed opacity-50"
                title="X/Twitter Coming Soon"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialLinks.youtube} 
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 cursor-not-allowed opacity-50"
                title="YouTube Coming Soon"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#F97316] pl-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Land & Real Estate Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Planning & Architecture Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Civil & Structural Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Raw Material Supply
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Turnkey Project Execution
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Finishing & Handover
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#F97316] pl-2">
              Explore Zentech
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  About Our Vision & Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Material & Fitting Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Featured Portfolio Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Visual Design Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blogs')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Construction Tech Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin' as PageRoute)} className="text-amber-500 font-bold hover:text-amber-400 transition-colors cursor-pointer flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Zentech Staff Admin Panel</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Address Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#F97316] pl-2">
              Tirupati Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold text-[11px] uppercase tracking-wide block">Experience Center</span>
                <p className="text-slate-300 leading-snug">{COMPANY_INFO.experienceCenterAddress}</p>
              </div>

              <div className="space-y-1 pt-1 border-t border-slate-800">
                <span className="text-slate-400 font-semibold text-[11px] uppercase tracking-wide block">Registered Office</span>
                <p className="text-slate-400 leading-snug">{COMPANY_INFO.headOfficeAddress}</p>
              </div>

              <div className="pt-2 space-y-1">
                <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="flex items-center space-x-2 text-white hover:text-amber-400">
                  <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                  <span className="font-bold">{COMPANY_INFO.primaryPhone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="flex items-center space-x-2 text-slate-300 hover:text-amber-400">
                  <Mail className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{COMPANY_INFO.primaryEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mid Callout Bar */}
        <div className="py-8 my-6 bg-slate-800/80 rounded-2xl border border-slate-700 px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center text-[#F97316]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Ready to start your living experience?</h5>
              <p className="text-xs text-slate-400">Speak with our principal engineers and architects in Tirupati today.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Contact Branch
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] hover:bg-amber-600 text-white text-xs font-bold py-2.5 px-5 rounded-lg shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Get Detailed Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <p>© {new Date().getFullYear()} Zentech Construction & Engineering Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
