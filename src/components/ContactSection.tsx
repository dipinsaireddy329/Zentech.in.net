import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/zentechData';
import { PageRoute, ProductItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  MapPin,
  Loader2
} from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (route: PageRoute) => void;
  quoteBasket: ProductItem[];
  onClearQuoteBasket: () => void;
  isModal?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavigate,
  quoteBasket,
  onClearQuoteBasket,
  isModal = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          mobile: formData.phone,
          quoteBasketItems: quoteBasket.map(p => ({ id: p.id, name: p.name, category: p.category }))
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        onClearQuoteBasket();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setErrorMsg('Failed to send message. Please call us directly at ' + COMPANY_INFO.primaryPhone);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" className={`${isModal ? 'py-2 bg-white dark:bg-slate-900' : 'pb-24 bg-[#FAF9F6]'} text-slate-900 dark:text-white relative`}>
      {/* Sub-Hero Banner with Modern Office Building Elevation */}
      {!isModal && (
        <div className="relative pt-12 pb-16 bg-slate-900 overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="Modern Office Building Facade"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#F97316]/20 border border-[#F97316]/40 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
              <Phone className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
              CONTACT US
            </h1>
          </div>
        </div>
      )}

      <div className={`${isModal ? 'max-w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                    SEND A MESSAGE
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
                    TALK TO OUR CIVIL ENGINEERS
                  </h3>
                  <p className="text-xs text-slate-600 font-normal">
                    Fill out the form below to receive a consultation, BOQ cost estimate, or schedule a visit to our Tirupati Experience Center.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-slate-50 border border-amber-300 rounded-2xl space-y-4 animate-fadeIn">
                    <CheckCircle2 className="w-16 h-16 text-[#F97316] mx-auto" />
                    <h4 className="text-2xl font-bold text-slate-900 uppercase">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-normal">
                      Thank you <strong className="text-slate-900">{formData.name}</strong>. Our senior engineers in Tirupati will contact you at <strong className="text-[#EA580C]">{formData.phone}</strong> shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            projectType: 'Residential',
                            message: ''
                          });
                        }}
                        className="bg-[#F97316] hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl cursor-pointer shadow-md transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                    {/* Selected Quote Items Pill if any */}
                    {quoteBasket.length > 0 && (
                      <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-200/80 space-y-2">
                        <span className="text-[#EA580C] font-bold block text-[10px] uppercase tracking-wider">Attached Material Items:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {quoteBasket.map(p => (
                            <span key={p.id} className="bg-white text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 text-[10px] font-mono font-medium">
                              {p.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-slate-800 font-bold uppercase tracking-wider block mb-1.5 text-[11px]">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] text-xs font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-800 font-bold uppercase tracking-wider block mb-1.5 text-[11px]">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="text-slate-800 font-bold uppercase tracking-wider block mb-1.5 text-[11px]">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] text-xs font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-800 font-bold uppercase tracking-wider block mb-1.5 text-[11px]">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:border-[#F97316] text-xs font-medium"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Interior">Interior</option>
                        <option value="Turnkey">Turnkey</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-800 font-bold uppercase tracking-wider block mb-1.5 text-[11px]">Message / Requirements *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your plot size, location, floors, or specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] text-xs font-medium"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#F97316] hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Information & Map */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.2}>
              {/* Contact Details Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] block">
                  HEADQUARTERS & DETAILS
                </span>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block mb-0.5">Phone Line</span>
                    <div className="space-y-0.5">
                      <a href="tel:+919550972563" className="block text-sm font-extrabold text-slate-900 hover:text-[#EA580C] transition-colors">
                        +91 91213 55173
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block mb-0.5">Email Support</span>
                    <a href="mailto:gm@zentech.in.net" className="text-sm font-extrabold text-slate-900 hover:text-[#EA580C] transition-colors">
                      gm@zentech.in.net
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block mb-0.5">Tirupati Address</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Experience Center: Air By-Pass Road, Tirupati, Andhra Pradesh 517501
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono font-bold block mb-0.5">Working Hours</span>
                    <p className="text-xs font-bold text-slate-900">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Box */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs p-2">
                <iframe
                  title="Zentech Tirupati Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8837181054!2d79.4185!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3Jz0MyLjciTiA3OcKwMjUnMDYuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

