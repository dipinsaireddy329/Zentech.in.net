import React from 'react';
import { ProductItem } from '../types';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  basket: ProductItem[];
  onRemoveItem: (product: ProductItem) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  basket,
  onRemoveItem,
  onCheckout,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950 z-50 cursor-pointer"
          />

          {/* Slide-out Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 z-50 flex flex-col justify-between shadow-2xl text-slate-900 dark:text-white"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#F97316]" />
                <h3 className="text-base font-extrabold tracking-tight font-display">Quote Basket</h3>
                {basket.length > 0 && (
                  <span className="bg-[#F97316] text-white text-xs font-black px-2 py-0.5 rounded-full">
                    {basket.length}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {basket.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-10">
                  <div className="w-16 h-16 rounded-full bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-500">
                    <ShoppingBag className="w-8 h-8 text-[#F97316]" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Your Basket is Empty</h4>
                  <p className="text-xs text-slate-500 max-w-[240px] leading-relaxed">
                    Browse our wholesale material catalog and add materials to request direct contractor quotes.
                  </p>
                </div>
              ) : (
                basket.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 relative group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border border-slate-200 dark:border-slate-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase block tracking-wider">
                        {item.division}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.category}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item)}
                      className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all cursor-pointer absolute right-2 top-2"
                      title="Remove from Quote Basket"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Actions Panel */}
            {basket.length > 0 && (
              <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <button
                  type="button"
                  onClick={onCheckout}
                  className="w-full py-3.5 bg-[#F97316] hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#F97316]/20 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Contact Dealer & Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center font-normal leading-relaxed">
                  Bulk order pricing depends on project location & quantity. Inquire to get wholesale dealer pricing sheet.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
