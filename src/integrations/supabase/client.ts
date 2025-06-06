
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const SUPABASE_URL = "https://hyoeohtvittvchricnyp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5b2VvaHR2aXR0dmNocmljbnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNTkxMDEsImV4cCI6MjA1ODYzNTEwMX0.B2XooUzTMyhwK-2J3txN5Ld3NAcXVTLyspzAJ5HSOTU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
