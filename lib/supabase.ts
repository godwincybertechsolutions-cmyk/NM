import { createClient } from '@supabase/supabase-js';

// Ensure these are defined in your environment variables (e.g. .env.local in Vite/Next.js)
// If you are using a build tool that uses import.meta.env, swap process.env for that.
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('New Manyatta Warning: Supabase URL or Anon Key is missing. Database features will not work until these are configured.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
