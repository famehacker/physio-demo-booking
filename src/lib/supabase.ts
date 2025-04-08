
import { createClient } from '@supabase/supabase-js';

// Get environment variables or provide fallback values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if we have the required values
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or Anonymous Key. Make sure environment variables are set correctly.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
