import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hiqcbnqsqadjxnrppofk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcWNibnFzcWFkanhucnBwb2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDUwMDksImV4cCI6MjA2NDA4MTAwOX0.Wl2l7IfPYAN9LqFssELBfg46xzQd3D2doicsdxH_ASs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;