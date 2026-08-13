import { supabase } from "../lib/supabaseClient";
import type { Product } from "../types";

/** Fetch all products */
export const fetchProducts = async (): Promise<Product[]> => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    return [];
  }
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching products inside src/services/products.ts line 14:", error);
    throw error;
  }

  // Auto-resolve storage paths to public URLs if needed
  return (data || []).map((product: any) => {
    let imageUrl = product.image_url;
    if (imageUrl && !imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(imageUrl);
      imageUrl = publicUrlData?.publicUrl || imageUrl;
    }
    return {
      ...product,
      image_url: imageUrl
    };
  }) as Product[];
};

/** Create a new product */
export const createProduct = async (product: Omit<Product, "id" | "created_at">) => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    throw new Error("Supabase client is not initialized.");
  }
  const { data, error } = await supabase.from("products").insert([product]);
  if (error) {
    console.error("Error creating product inside src/services/products.ts line 38:", error);
    throw error;
  }
  return data;
};

/** Update an existing product */
export const updateProduct = async (
  id: string,
  updates: Partial<Omit<Product, "id" | "created_at">>
) => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    throw new Error("Supabase client is not initialized.");
  }
  const { data, error } = await supabase
    .from("products")
    .update(updates)
    .eq("id", id);
  if (error) {
    console.error("Error updating product inside src/services/products.ts line 53:", error);
    throw error;
  }
  return data;
};

/** Delete a product */
export const deleteProduct = async (id: string) => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    throw new Error("Supabase client is not initialized.");
  }
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) {
    console.error("Error deleting product inside src/services/products.ts line 65:", error);
    throw error;
  }
};

/** Fetch product by ID */
export const getProductById = async (id: string): Promise<Product | null> => {
  if (!supabase) {
    return null;
  }
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) {
    return null;
  }
  return data as Product;
};


