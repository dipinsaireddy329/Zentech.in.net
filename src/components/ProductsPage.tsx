import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-64 rounded"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load products.</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center">No products available.</p>;
  }

  return (
    <section className="py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
