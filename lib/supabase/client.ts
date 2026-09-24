import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  // Non-fatal: components using this client guard against empty data
  // so the site still renders (with fallback content) if env vars are missing.
  console.warn(
    "Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  email: string | null;
  order_index: number;
};

export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  order_index: number;
  is_active?: boolean;
  whatsapp_message?: string | null;
  button_label?: string | null;
};
