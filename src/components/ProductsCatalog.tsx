import React, { useState, useEffect } from 'react';
import { PRODUCTS_CATALOG, PRODUCT_CATEGORY_CARDS, ProductCategoryCard as ProductCategoryCardType } from '../data/zentechData';
import { ProductItem, PageRoute } from '../types';
import { ProductCard } from './ui/ProductCard';
import { Button } from './ui/Button';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  X, 
  Grid
} from 'lucide-react';

interface ProductsCatalogProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
  onAddToQuoteBasket: (product: ProductItem) => void;
  quoteBasket: ProductItem[];
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onAddToQuoteBasket,
  quoteBasket
}) => {
  const [materialsList, setMaterialsList] = useState<ProductItem[]>(PRODUCTS_CATALOG);
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    fetch('/api/materials')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Database connection failed');
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          // Map properties if needed or use directly
          setMaterialsList(data);
        }
      })
      .catch(err => console.warn('Using local static fallback for materials:', err.message));
  }, []);

  const divisions = [
    'All',
    'Building Materials',
    'Paints & Finishes',
    'Electrical & Lighting',
    'Hardware & Fabrication',
    'Plumbing & Sanitary',
    'Home Spaces'
  ];

  const filteredProducts = materialsList.filter(item => {
    const matchesDivision = selectedDivision === 'All' || item.division === selectedDivision;
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesCategory && matchesSearch;
  });

  const isProductInBasket = (productId: string) => {
    return quoteBasket.some(p => p.id === productId);
  };

  const handleCategoryCardClick = (card: ProductCategoryCardType) => {
    setSelectedCategory(card.categoryFilter);
    if (card.division) {
      setSelectedDivision(card.division);
    }
    const catalogElement = document.getElementById('detailed-catalog-grid');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products-catalog" className="py-24 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#F97316]/10 border border-[#F97316]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#EA580C] uppercase tracking-wider">
            <span>Direct Bulk Supplier & Showroom</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
            18-Division Material & Fitting Catalogue
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Certified TMT steel, OPC cement, teakwood, Italian marble, Saint-Gobain glass, and smart home fittings available at wholesale prices.
          </p>
        </div>

        {/* Category Collage Cards Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grid className="w-5 h-5 text-[#F97316]" />
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-display">Material & Product Divisions</h3>
            </div>

            {selectedCategory !== 'All' && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedDivision('All');
                }}
                className="text-xs font-bold text-[#EA580C] underline cursor-pointer"
              >
                Clear Filter ({selectedCategory})
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {PRODUCT_CATEGORY_CARDS.map((card) => {
              const isSelected = selectedCategory.toLowerCase() === card.categoryFilter.toLowerCase();

              return (
                <div
                  key={card.id}
                  onClick={() => handleCategoryCardClick(card)}
                  className={`group bg-white border ${
                    isSelected ? 'border-[#F97316] ring-2 ring-[#F97316]/30' : 'border-slate-200/90 hover:border-[#F97316]'
                  } rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between`}
                >
                  {/* Photo Collage Container */}
                  <div className="relative h-52 bg-slate-100 overflow-hidden flex flex-col p-1 gap-1">
                    {/* Top Row: Split 2 main photos */}
                    <div className="grid grid-cols-12 gap-1 h-32">
                      <div className="col-span-7 h-full overflow-hidden rounded-tl-xl relative">
                        <img
                          src={card.mainImage}
                          alt={`${card.title} main material supply`}
                          width={240}
                          height={160}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="col-span-5 h-full overflow-hidden rounded-tr-xl relative">
                        <img
                          src={card.sideImage}
                          alt={`${card.title} sample finish`}
                          width={160}
                          height={160}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Bottom Row: 3 sample thumbnail tiles */}
                    <div className="grid grid-cols-3 gap-1 h-18">
                      {card.bottomImages.map((imgUrl, imgIdx) => (
                        <div key={imgIdx} className="h-full overflow-hidden relative">
                          <img
                            src={imgUrl}
                            alt={`${card.title} sample swatch ${imgIdx + 1}`}
                            width={100}
                            height={80}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Category Title Label */}
                  <div className="p-3.5 bg-white border-t border-slate-100 text-center flex flex-col items-center justify-center min-h-[64px]">
                    <h3 className="font-extrabold text-slate-900 text-sm tracking-wider uppercase group-hover:text-[#EA580C] transition-colors font-display">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Catalog Divider */}
        <div id="detailed-catalog-grid" className="pt-8 border-t border-slate-200/80 space-y-8">
          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Division Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-[#F97316] shrink-0 ml-1" />
              <div className="flex items-center space-x-1.5">
                {divisions.map((div) => (
                  <button
                    key={div}
                    type="button"
                    onClick={() => {
                      setSelectedDivision(div);
                      setSelectedCategory('All');
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedDivision === div && selectedCategory === 'All'
                        ? 'bg-[#F97316] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {div}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search steel, marble, paint..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
              />
            </div>
          </div>

          {/* Product Cards Grid using ProductCard component */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                inBasket={isProductInBasket(product.id)}
                onAddToQuoteBasket={onAddToQuoteBasket}
                onSelectProduct={setSelectedProduct}
                loadingLazy={true}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-600 text-sm">No products found matching "{searchQuery}" in {selectedDivision}.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedDivision('All');
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-bold text-[#EA580C] underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-slate-900 space-y-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={600}
                height={300}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">{selectedProduct.division} • {selectedProduct.category}</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-display">{selectedProduct.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">{selectedProduct.description}</p>
            </div>

            {/* Specifications */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">Technical Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                  <div key={key}>
                    <span className="text-slate-500 font-bold block">{key}:</span>
                    <span className="text-slate-900 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">Recommended Applications</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.applications.map((app, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200 font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  onAddToQuoteBasket(selectedProduct);
                  setSelectedProduct(null);
                }}
                icon={<ShoppingBag className="w-4 h-4" />}
              >
                Add {selectedProduct.name} To Quote
              </Button>

              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  onOpenQuoteModal();
                }}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline cursor-pointer"
              >
                Inquire Directly
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
