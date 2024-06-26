import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qybfxlbdjylxlcjntlwa.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YmZ4bGJkanlseGxjam50bHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNzI1MTIsImV4cCI6MjAzNDg0ODUxMn0.rMPNwWx4GRS3wiv3ygaptNpkkgdZi1CJxbGlGYTk8IE"

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
