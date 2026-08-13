import { supabase } from "../utils/supabase";

/** Upload an image to a specific Supabase storage bucket and return its public URL */
export const uploadImage = async (bucket: string, file: File): Promise<string> => {
  if (!supabase) {
    throw new Error("Supabase is not initialized.");
  }
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
  
  const { error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return data.publicUrl;
};

