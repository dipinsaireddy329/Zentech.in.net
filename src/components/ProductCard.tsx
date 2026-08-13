import React from "react";
import type { Product } from "../types";

interface Props {
  key?: string;
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const handleOrder = () => {
    // Use the existing handleNavigate function style via window.history
    window.history.pushState(null, "", `/order/${product.id}`);
    // Trigger a popstate event to let App sync
    const popStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(popStateEvent);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
      <img
        src={product.image_url || "https://images.unsplash.com/photo-1531834685032-c34bf0d8b937?w=800&auto=format&fit=crop&q=60"}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531834685032-c34bf0d8b937?w=800&auto=format&fit=crop&q=60";
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.category}</p>
        <p className="mt-2 text-gray-800 line-clamp-3 text-sm">{product.description}</p>
        <p className="mt-2 font-bold text-[#F97316]">₹{product.price}</p>
        <button
          className="mt-3 w-full bg-[#F97316] hover:bg-amber-600 text-white py-2 rounded transition-colors"
          onClick={handleOrder}
        >
          Order
        </button>
      </div>
    </div>
  );
}

