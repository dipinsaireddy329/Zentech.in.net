import { supabase } from "../utils/supabase";

export async function getProjects() {
  if (!supabase) {
    console.error("Supabase client not initialized.");
    return [];
  }
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects inside src/lib/projects.ts line 14:", error);
    return [];
  }

  // Auto-resolve storage paths to public URLs if needed
  return (data || []).map((project: any) => {
    let imageUrl = project.image_url;
    if (imageUrl && !imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
      const { data: publicUrlData } = supabase.storage
        .from("projects")
        .getPublicUrl(imageUrl);
      imageUrl = publicUrlData?.publicUrl || imageUrl;
    }
    return {
      ...project,
      image_url: imageUrl
    };
  });
}


