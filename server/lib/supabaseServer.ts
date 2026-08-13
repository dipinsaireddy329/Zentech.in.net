import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

let supabaseAdmin;
if (supabaseUrl && supabaseKey) {
  supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  });
} else {
  console.error('Supabase server env variables are missing.');
}

export { supabaseAdmin };
