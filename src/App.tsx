import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoute, ProductItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { OnePartnerWorkflow } from './components/OnePartnerWorkflow';
import { CoreServicesGrid } from './components/CoreServicesGrid';
import { SevenStepProcess } from './components/SevenStepProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductsCatalog } from './components/ProductsCatalog';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { AboutView } from './components/AboutView';
import { FaqSection } from './components/FaqSection';
import { GalleryView } from './components/GalleryView';
import { AIAssistantModal } from './components/AIAssistantModal';
import { CartDrawer } from './components/CartDrawer';
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/AdminLogin';
import Projects from "./components/Projects";
import ProductsPage from "./components/ProductsPage";
import OrderForm from "./components/OrderForm";
import { CursorGlow } from './components/CursorGlow';
import { HomeConfigurator } from './components/HomeConfigurator';
import { OngoingProjectsTracker } from './components/OngoingProjectsTracker';
import { BookingCalendarModal } from './components/BookingCalendarModal';
import { StickyCtaBar } from './components/StickyCtaBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PageNavigationLoader } from './components/PageNavigationLoader';

import { MessageSquare, X } from 'lucide-react';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingTo, setNavigatingTo] = useState<PageRoute | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [quoteBasket, setQuoteBasket] = useState<ProductItem[]>([]);
  const [orderProductId, setOrderProductId] = useState<string | null>(null);

  // Smooth scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleNavigate = (route: PageRoute) => {
    if (route === currentRoute) return;

    setIsNavigating(true);
    setNavigatingTo(route);

    setTimeout(() => {
      setCurrentRoute(route);
      let path = '/';
      if (route.startsWith('admin')) {
        path = '/admin';
      } else if (route === 'products') {
        path = '/materials';
      } else if (route !== 'home') {
        path = `/${route}`;
      }
      window.history.pushState(null, '', path);

      setTimeout(() => {
        setIsNavigating(false);
        setNavigatingTo(null);
      }, 250);
    }, 120);
  };

  const handleAddToQuoteBasket = (product: ProductItem) => {
    setQuoteBasket(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleClearQuoteBasket = () => {
    setQuoteBasket([]);
  };

  if (currentRoute === 'admin' || currentRoute.startsWith('admin')) {
    return (
      <>
        <PageNavigationLoader isNavigating={isNavigating} navigatingTo={navigatingTo} />
        <AdminDashboard onNavigate={handleNavigate} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans antialiased selection:bg-[#F97316]/30 flex flex-col">
      {/* Top Page Route Navigation Progress Bar */}
      <PageNavigationLoader isNavigating={isNavigating} navigatingTo={navigatingTo} />

      {/* Decorative Interactive Background glow */}
      <CursorGlow />

      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        quoteBasketCount={quoteBasket.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {currentRoute === 'home' && (
              <>
                {/* 01. Hero Section */}
                <div id="section-home">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <HeroSection
                      onNavigate={handleNavigate}
                      onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                      onOpenAiModal={() => setIsAiModalOpen(true)}
                    />
                  </motion.div>
                </div>

                {/* 02. Core Services Grid */}
                <div id="section-services">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <CoreServicesGrid 
                      onNavigate={handleNavigate} 
                      onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                    />
                  </motion.div>
                </div>

                {/* 03. Home Configurator */}
                <div id="section-products">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <HomeConfigurator 
                      onNavigate={handleNavigate} 
                      onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                    />
                  </motion.div>
                </div>

                {/* 04. Seven Step Process */}
                <div id="section-process">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <SevenStepProcess 
                      onNavigate={handleNavigate} 
                      onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                    />
                  </motion.div>
                </div>

                {/* 05. Why Choose Us */}
                <div id="section-about">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <WhyChooseUs 
                      onNavigate={handleNavigate} 
                      onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                    />
                  </motion.div>
                </div>

                {/* 06. Testimonials */}
                <div id="section-testimonials">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <Testimonials />
                  </motion.div>
                </div>

                {/* 07. Contact Section */}
                <div id="section-contact">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <ContactSection 
                      onNavigate={handleNavigate} 
                      quoteBasket={quoteBasket} 
                      onClearQuoteBasket={handleClearQuoteBasket} 
                    />
                  </motion.div>
                </div>
              </>
            )}

            {currentRoute === 'about' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <AboutView 
                  onNavigate={handleNavigate} 
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                />
              </motion.div>
            )}

            {currentRoute === 'services' && (
              <div className="pt-28">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <CoreServicesGrid 
                    onNavigate={handleNavigate} 
                    onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <OnePartnerWorkflow 
                    onNavigate={handleNavigate} 
                    onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <SevenStepProcess 
                    onNavigate={handleNavigate} 
                    onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                  />
                </motion.div>
              </div>
            )}

            {currentRoute === 'products' && (
              <div className="pt-28">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <ProductsPage />
                </motion.div>
              </div>
            )}

            {currentRoute === 'projects' && (
              <div className="pt-28">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <Projects />
                </motion.div>
              </div>
            )}

            {currentRoute === 'gallery' && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <GalleryView 
                  onNavigate={handleNavigate} 
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                />
              </motion.div>
            )}

            {currentRoute === 'blogs' && (
              <div className="pt-28">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <BlogSection onNavigate={handleNavigate} />
                </motion.div>
              </div>
            )}

            {currentRoute === 'faq' && (
              <div className="pt-28">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <FaqSection 
                    onNavigate={handleNavigate} 
                    onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
                  />
                </motion.div>
              </div>
            )}

            {currentRoute === 'contact' && (
              <div className="pt-28">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <ContactSection 
                    onNavigate={handleNavigate} 
                    quoteBasket={quoteBasket} 
                    onClearQuoteBasket={handleClearQuoteBasket} 
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Order Modal */}
      {currentRoute === 'order' && orderProductId && (
        <OrderForm
          productId={orderProductId}
          onClose={() => {
            setCurrentRoute('home');
            setOrderProductId(null);
            window.history.pushState(null, '', '/');
            const popEvent = new PopStateEvent('popstate');
            window.dispatchEvent(popEvent);
          }}
        />
      )}

      {/* Sticky Bottom CTA Bar */}
      <StickyCtaBar
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Appointment / Consultation Booking Modal */}
      <BookingCalendarModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Standalone Quick Quote Modal Overlay */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-slate-900 dark:text-white space-y-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">Fast-Track Estimate</span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display">Book Free Project Consultation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Speak directly with our senior engineers at Air By-Pass Road, Tirupati.</p>
            </div>

            <div className="pt-2">
              <ContactSection 
                onNavigate={handleNavigate} 
                quoteBasket={quoteBasket} 
                onClearQuoteBasket={handleClearQuoteBasket} 
                isModal={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant Chat Modal */}
      <AIAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        onOpenQuoteModal={() => {
          setIsAiModalOpen(false);
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Cart / E-Commerce Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        basket={quoteBasket}
        onRemoveItem={handleAddToQuoteBasket}
        onCheckout={() => {
          setIsCartDrawerOpen(false);
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
      />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
