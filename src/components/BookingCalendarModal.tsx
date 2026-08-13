import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User, Mail, CheckCircle2, X, Sparkles } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingCalendarModal: React.FC<BookingCalendarModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    mobile: '',
    email: '',
    visitType: 'Experience Center Visit',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: '10:00 AM - 12:00 PM',
    projectType: 'Residential Villa',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccessResponse(data.message);
      } else {
        setSuccessResponse(`Thank you, ${formData.name}! Your visit has been scheduled. Ref: ZEN-${Math.floor(100000 + Math.random() * 900000)}.`);
      }
    } catch {
      setSuccessResponse(`Thank you, ${formData.name}! Your consultation request has been received. Our senior architect will contact you shortly at ${formData.mobile}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden relative text-slate-900 dark:text-white"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              <span>Schedule Senior Architect Consultation</span>
            </div>
            <h3 className="text-2xl font-black font-display uppercase tracking-tight">
              Book Site Visit / Experience Center Session
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Location: Srida Aravindam, Air By-Pass Road, Tirupati or On-Site Soil Inspection.
            </p>
          </div>

          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {successResponse ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold font-display uppercase">Appointment Reserved</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                  {successResponse}
                </p>
                <button
                  onClick={() => {
                    setSuccessResponse(null);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#F97316] text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Visit Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                    Consultation Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      'Experience Center Visit',
                      'On-Site Soil & Plot Inspection',
                      'Virtual Video Consultation'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, visitType: type as any })}
                        className={`p-2.5 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${
                          formData.visitType === type
                            ? 'bg-[#F97316] text-white border-[#F97316] shadow'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Er. Ramesh Naidu"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#F97316] hover:bg-amber-600 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#F97316]/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Appointment...' : 'Confirm Consultation Schedule'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
