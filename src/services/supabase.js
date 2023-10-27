import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sbpupnxhjipywcbwiwfa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicHVwbnhoamlweXdjYndpd2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMTIyNTUsImV4cCI6MjAxMzg4ODI1NX0.YyPKQrKqooyVQ74UyEl5a6oSpji3iGOhYoPu7naXygA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
