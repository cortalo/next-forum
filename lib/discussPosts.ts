// lib/discussPosts.ts
import supabase from "./supabase";

export interface DiscussPost {
  id: number;
  created_at: string;
  userId: number | null;
  title: string | null;
  content: string | null;
  type: number | null;
  status: number | null;
  commentCount: number | null;
  score: number | null;
}

export async function getDiscussPosts(): Promise<DiscussPost[]> {
  const { data, error } = await supabase.from("DiscussPost").select("*");

  if (error) {
    console.error(error);
    throw new Error("Discuss posts cannot be loaded");
  }

  return data || [];
}
