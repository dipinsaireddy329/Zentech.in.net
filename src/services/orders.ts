import { supabase } from "../utils/supabase";
import type { Order } from "../types";

/** Create a new order */
export const createOrder = async (
  order: Omit<Order, "id" | "created_at">
) => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    throw new Error("Supabase client is not initialized.");
  }
  const { data, error } = await supabase.from("orders").insert([order]);
  if (error) {
    console.error("Error creating order inside src/services/orders.ts line 13:", error);
    throw error;
  }
  return data;
};

/** Fetch all orders (admin view) */
export const fetchOrders = async (): Promise<Order[]> => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    return [];
  }
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching orders inside src/services/orders.ts line 28:", error);
    throw error;
  }
  return data as Order[];
};

/** Update order status */
export const updateOrderStatus = async (id: string, status: string) => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    throw new Error("Supabase client is not initialized.");
  }
  const { error } = await supabase
    .from("orders")
    .update({ order_status: status })
    .eq("id", id);
  if (error) {
    console.error("Error updating order status inside src/services/orders.ts line 42:", error);
    throw error;
  }
};

/** Delete an order */
export const deleteOrder = async (id: string) => {
  if (!supabase) {
    console.error("Supabase client is not initialized.");
    throw new Error("Supabase client is not initialized.");
  }
  const { error } = await supabase.from("orders").delete().eq("id", id);
  if (error) {
    console.error("Error deleting order inside src/services/orders.ts line 53:", error);
    throw error;
  }
};

