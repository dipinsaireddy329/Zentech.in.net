import React, { useState, useEffect } from "react";
import { getProductById } from "../services/products";
import { createOrder } from "../services/orders";
import type { Product } from "../types";

interface OrderFormProps {
  productId: string;
  onClose: () => void;
}

export default function OrderForm({ productId, onClose }: OrderFormProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getProductById(productId);
        setProduct(data as Product);
        setError(null);
      } catch (e) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      await createOrder({
        customer_name: customerName,
        email,
        phone,
        address,
        product_id: productId,
        quantity,
        total_price: product ? product.price * quantity : 0,
        order_status: "pending",
      });
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError("Failed to submit order.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading product...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Order: {product?.name}</h2>
        {submitSuccess ? (
          <p className="text-green-600">Your order has been placed successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1">Address</label>
              <textarea
                required
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block">Quantity</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(parseInt(e.target.value, 10) || 1)}
                className="w-20 border rounded px-2 py-1"
              />
            </div>
            {submitError && <p className="text-red-500">{submitError}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#F97316] hover:bg-amber-600 text-white py-2 rounded"
            >
              {submitting ? "Placing..." : "Place Order"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
