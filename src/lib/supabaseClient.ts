import { createClient, SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | null = null;

/**
 * Created lazily on first use (when a form is submitted) instead of at import time.
 * That way the site still builds and prerenders even if the env vars are missing,
 * and a missing config only affects form submission, not the whole page.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env');
  }

  client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}
