import { supabase } from "../utils/supabase";

/** Insert a new order */
export const createOrder = async ({
  customer_name,
  phone,
  email,
  product_id,
  message,
}) => {
  const { data, error } = await supabase.from("orders").insert([
    {
      customer_name,
      phone,
      email,
      product_id,
      message,
      order_status: "pending",
    },
  ]);
  if (error) throw error;
  return data;
};
