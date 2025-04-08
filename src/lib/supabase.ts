
import { createClient } from '@supabase/supabase-js';

// Use the same Supabase URL and key as defined in the integration
const SUPABASE_URL = "https://hyoeohtvittvchricnyp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5b2VvaHR2aXR0dmNocmljbnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNTkxMDEsImV4cCI6MjA1ODYzNTEwMX0.B2XooUzTMyhwK-2J3txN5Ld3NAcXVTLyspzAJ5HSOTU";

// Create and export the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
