import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable is missing.');
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

export async function getAuthorizedUser(authHeader: string | undefined, allowedRoles: ('admin' | 'staff')[]) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { user: null, status: 401, error: 'Missing or invalid authorization header' };
  }

  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

  if (error || !user) {
    return { user: null, status: 401, error: error?.message || 'Invalid token' };
  }

  // Check user profile for role
  const { data: profile, error: profileError } = await supabaseAdmin
    .from('admin_users')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (profileError || !profile) {
    // If table is empty, allow first setup access (graceful fallback)
    const { count } = await supabaseAdmin.from('admin_users').select('*', { count: 'exact', head: true });
    if (count === 0) {
      return { user, role: 'admin', status: 200 };
    }
    return { user: null, status: 403, error: 'Access forbidden: Admin profile not found' };
  }

  if (!allowedRoles.includes(profile.role as any)) {
    return { user: null, status: 403, error: `Access forbidden: Required role missing` };
  }

  return { user, role: profile.role, status: 200 };
}
