// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase project URL and public API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
