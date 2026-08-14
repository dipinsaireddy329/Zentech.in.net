import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/zentechData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  HardHat, 
  Building2, 
  Box, 
  ShoppingBag,
  Sun,
  Moon,
  Calendar,
  Shield
} from 'lucide-react';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
  onOpenAiModal: () => void;
  onOpenBookingModal: () => void;
  onOpenCart?: () => void;
  quoteBasketCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenQuoteModal,
  onOpenAiModal,
  onOpenBookingModal,
  onOpenCart,
  quoteBasketCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'products' | 'services' | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeScrollSection, setActiveScrollSection] = useState<PageRoute | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    let ticking = false;

    const sectionMapping: { id: string; route: PageRoute }[] = [
      { id: 'section-home', route: 'home' },
      { id: 'section-services', route: 'services' },
      { id: 'section-products', route: 'products' },
      { id: 'section-contact', route: 'contact' },
    ];

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentRoute === 'home') {
            const scrollPos = window.scrollY + 160; // Offset for header
            let currentVisible: PageRoute | null = null;

            for (const item of sectionMapping) {
              const el = document.getElementById(item.id);
              if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                  currentVisible = item.route;
                }
              }
            }

            if (window.scrollY < 120) {
              currentVisible = 'home';
            }

            if (currentVisible) {
              setActiveScrollSection(currentVisible);
            }
          } else {
            setActiveScrollSection(null);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleNavItemClick = (route: PageRoute) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);

    if (currentRoute === 'home') {
      const targetEl = document.getElementById(`section-${route}`);
      if (targetEl) {
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return;
      }
    }

    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Products', route: 'products' },
    { label: 'Projects', route: 'projects' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Blogs', route: 'blogs' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Contact', route: 'contact' },
  ];

  const productCategories = Array.from(new Set(PRODUCTS_CATALOG.map(p => p.category)));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200' 
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/60 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="group text-left cursor-pointer focus:outline-none flex items-center"
            id="header-logo-btn"
          >
<img src={logoImg} alt="Zentech Logo" className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform rounded-lg" />

          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2 relative">
            {navItems.map((item) => {
              const effectiveActiveRoute = (currentRoute === 'home' && activeScrollSection) ? activeScrollSection : currentRoute;
              const isActive = effectiveActiveRoute === item.route;
              const hasMega = item.route === 'products';

              return (
                <div 
                  key={item.route}
                  className="relative"
                  onMouseEnter={() => hasMega && setActiveMegaMenu(item.route as 'products')}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button
                    onClick={() => handleNavItemClick(item.route)}
                    className={`px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all flex items-center space-x-1 cursor-pointer whitespace-nowrap ${
                      isActive 
                        ? 'text-[#F97316] border-b-2 border-[#F97316] font-extrabold' 
                        : 'text-slate-700 hover:text-[#F97316]'
                    }`}
                    id={`nav-link-${item.route}`}
                  >
                    <span>{item.label}</span>
                    {isActive && currentRoute === 'home' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse ml-0.5" />
                    )}
                    {hasMega && (
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${activeMegaMenu === item.route ? 'rotate-180 text-[#F97316]' : ''}`} />
                    )}
                  </button>

                  {/* Products Mega Menu Flyout */}
                  {item.route === 'products' && activeMegaMenu === 'products' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white border border-slate-200 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-fadeIn">
                      <div className="col-span-2">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316]">Building Material Categories</h4>
                          <span className="text-[11px] text-slate-500">18 Divisions Available</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {productCategories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => handleNavItemClick('products')}
                              className="text-left py-1.5 px-2 rounded hover:bg-slate-50 text-slate-700 hover:text-[#F97316] flex items-center space-x-2 transition-colors cursor-pointer"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                              <span>{cat}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                        <div>
                          <div className="w-8 h-8 rounded bg-[#F97316]/10 flex items-center justify-center text-[#F97316] mb-2">
                            <Box className="w-4 h-4" />
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 mb-1">Experience Center</h5>
                          <p className="text-xs text-slate-600 mb-3">Touch and test steel, granite, tiles, and fittings at Air By-Pass Road showroom.</p>
                        </div>
                        <button
                          onClick={() => handleNavItemClick('products')}
                          className="text-xs font-semibold text-[#F97316] flex items-center space-x-1 hover:underline cursor-pointer"
                        >
                          <span>Explore Full Catalogue</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Admin Portal Toggle */}
            <button
              onClick={() => onNavigate('admin')}
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#F97316] text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center space-x-1"
              title="Admin Portal Login"
            >
              <Shield className="w-4 h-4 text-[#F97316]" />
              <span className="text-[10px] font-bold uppercase tracking-wider hidden xl:inline">Admin</span>
            </button>

            <button
              onClick={onOpenBookingModal}
              className="px-3.5 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#F97316] text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Book Visit</span>
            </button>

            {quoteBasketCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer"
                title="View Selected Quote Items"
              >
                <ShoppingBag className="w-5 h-5 text-[#F97316]" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#F97316] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {quoteBasketCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg shadow-md shadow-[#F97316]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 cursor-pointer"
              id="get-quote-header-btn"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-md"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#F97316] focus:outline-none"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-xl">
          <div className="pb-2 border-b border-slate-100">
            <button
              onClick={() => {
                onOpenAiModal();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-lg text-left text-xs font-bold text-amber-800 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>AI Architect Consultant</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const effectiveActiveRoute = (currentRoute === 'home' && activeScrollSection) ? activeScrollSection : currentRoute;
              const isActive = effectiveActiveRoute === item.route;

              return (
                <button
                  key={item.route}
                  onClick={() => handleNavItemClick(item.route)}
                  className={`text-left px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#F97316] text-white shadow-md font-black' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
