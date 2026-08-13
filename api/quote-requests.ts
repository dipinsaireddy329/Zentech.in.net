import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin, getAuthorizedUser } from './_lib/supabase.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Verify authentication for admin/staff
  const authResult = await getAuthorizedUser(req.headers.authorization, ['admin', 'staff']);
  if (!authResult.user) {
    res.status(authResult.status).json({ error: authResult.error });
    return;
  }

  const { method } = req;
  const { id } = req.query;

  try {
    if (method === 'GET') {
      if (id) {
        const { data, error } = await supabaseAdmin.from('quote_requests').select('*').eq('id', id).single();
        if (error) throw error;
        res.status(200).json(data);
      } else {
        const { status } = req.query;
        let query = supabaseAdmin.from('quote_requests').select('*').order('created_at', { ascending: false });

        if (status) {
          query = query.eq('status', status);
        }

        const { data, error } = await query;
        if (error) throw error;
        res.status(200).json(data);
      }
    } else if (method === 'PUT') {
      if (!id) {
        res.status(400).json({ error: 'Missing quote request ID' });
        return;
      }
      const { status } = req.body;
      const updateData: any = {};
      if (status !== undefined) updateData.status = status;

      const { data, error } = await supabaseAdmin
        .from('quote_requests')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.status(200).json(data);
    } else if (method === 'DELETE') {
      if (authResult.role !== 'admin') {
        res.status(403).json({ error: 'Forbidden: Admin role required to delete quote requests' });
        return;
      }

      if (!id) {
        res.status(400).json({ error: 'Missing quote request ID' });
        return;
      }

      const { error } = await supabaseAdmin.from('quote_requests').delete().eq('id', id);
      if (error) throw error;
      res.status(200).json({ success: true, message: 'Quote request deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err: any) {
    console.error('Quote requests API error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
