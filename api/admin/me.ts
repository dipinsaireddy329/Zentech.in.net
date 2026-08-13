import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyAuth } from '../_lib/adminAuth.js';
import { supabaseAdmin } from '../_lib/supabase.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end();
    return;
  }
  const payload = verifyAuth(req);
  if (!payload) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }
  // Fetch user profile
  const { data: profile, error } = await supabaseAdmin
    .from('admin_users')
    .select('email, role')
    .eq('id', payload.adminId)
    .single();
  if (error || !profile) {
    res.status(500).json({ error: 'Failed to fetch profile' });
    return;
  }
  res.status(200).json({ email: profile.email, role: profile.role });
}
