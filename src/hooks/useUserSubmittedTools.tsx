import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface UserSubmittedTool {
  id: string;
  slug: string;
  name: string;
  description: string;
  url: string;
  category: string;
  image_url: string | null;
  video_url: string | null;
  submitter_name: string | null;
  published_at: string | null;
  ai_safety_score: number | null;
}

export function useUserSubmittedTools() {
  const [tools, setTools] = useState<UserSubmittedTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("tool_submissions")
        .select("id, slug, name, description, url, category, image_url, video_url, submitter_name, published_at, ai_safety_score")
        .eq("status", "approved")
        .not("slug", "is", null)
        .order("published_at", { ascending: false })
        .limit(500);
      if (cancelled) return;
      if (error) setError(error.message);
      else setTools((data as UserSubmittedTool[]) || []);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  return { tools, loading, error };
}

export async function fetchUserSubmittedToolBySlug(slug: string): Promise<UserSubmittedTool | null> {
  const { data, error } = await supabase
    .from("tool_submissions")
    .select("id, slug, name, description, url, category, image_url, video_url, submitter_name, published_at, ai_safety_score")
    .eq("status", "approved")
    .eq("slug", slug)
    .maybeSingle();
  if (error) { console.error(error); return null; }
  return data as UserSubmittedTool | null;
}