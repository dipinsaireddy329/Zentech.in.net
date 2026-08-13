import React from 'react';
import { ProductItem } from '../../types';
import { ShoppingBag, Check, Info, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface ProductCardProps {
  product: ProductItem;
  inBasket: boolean;
  onAddToQuoteBasket: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  loadingLazy?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  inBasket,
  onAddToQuoteBasket,
  onSelectProduct,
  loadingLazy = true,
}) => {
  // Extract primary technical spec line
  const firstSpecKey = Object.keys(product.specifications)[0];
  const firstSpecVal = firstSpecKey ? `${firstSpecKey}: ${product.specifications[firstSpecKey]}` : null;

  return (
    <div className="group bg-white border border-slate-200/90 hover:border-[#F97316] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl flex flex-col justify-between h-full">
      {/* Image Container with fixed aspect ratio */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={product.image}
          alt={`${product.name} - ${product.category} for construction in Tirupati`}
          width={400}
          height={300}
          loading={loadingLazy ? "lazy" : "eager"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-70" />

        {/* Category Pill */}
        <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-slate-700">
          {product.category}
        </span>

        {/* Featured Badge */}
        {product.isFeatured && (
          <span className="absolute top-3 right-3 bg-amber-500/20 backdrop-blur-md text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/40 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-[#F97316]" />
            <span>Featured</span>
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            {product.division}
          </span>
          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors line-clamp-1 cursor-pointer font-display"
          >
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 font-normal mt-1 leading-relaxed">
            {product.description}
          </p>

          {/* Key Spec Highlight Tag */}
          {firstSpecVal && (
            <div className="mt-2.5 inline-block bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-600">
              <span className="text-slate-400">Spec: </span>
              <span className="font-semibold text-slate-800">{firstSpecVal}</span>
            </div>
          )}
        </div>

        {/* Actions Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center space-x-1 cursor-pointer transition-colors"
          >
            <Info className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Specs</span>
          </button>

          <Button
            size="sm"
            variant={inBasket ? "secondary" : "primary"}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onAddToQuoteBasket(product);
            }}
            icon={inBasket ? <Check className="w-3.5 h-3.5 text-amber-700" /> : <ShoppingBag className="w-3.5 h-3.5" />}
          >
            {inBasket ? "In Quote" : "Add to Quote"}
          </Button>
        </div>
      </div>
    </div>
  );
};
