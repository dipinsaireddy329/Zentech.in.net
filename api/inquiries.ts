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
        const { data, error } = await supabaseAdmin.from('inquiries').select('*').eq('id', id).single();
        if (error) throw error;
        res.status(200).json(data);
      } else {
        const { status, search } = req.query;
        let query = supabaseAdmin.from('inquiries').select('*').order('created_at', { ascending: false });

        if (status) {
          query = query.eq('status', status);
        }
        if (search) {
          query = query.or(`customer_name.ilike.%${search}%,phone.ilike.%${search}%,message.ilike.%${search}%`);
        }

        const { data, error } = await query;
        if (error) throw error;
        res.status(200).json(data);
      }
    } else if (method === 'PUT') {
      if (!id) {
        res.status(400).json({ error: 'Missing inquiry ID' });
        return;
      }
      const { status, customer_name, phone, email, project_type, location, budget, message } = req.body;
      const updateData: any = {};
      
      if (status !== undefined) updateData.status = status;
      if (customer_name !== undefined) updateData.customer_name = customer_name;
      if (phone !== undefined) updateData.phone = phone;
      if (email !== undefined) updateData.email = email;
      if (project_type !== undefined) updateData.project_type = project_type;
      if (location !== undefined) updateData.location = location;
      if (budget !== undefined) updateData.budget = budget;
      if (message !== undefined) updateData.message = message;

      const { data, error } = await supabaseAdmin
        .from('inquiries')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.status(200).json(data);
    } else if (method === 'DELETE') {
      if (authResult.role !== 'admin') {
        res.status(403).json({ error: 'Forbidden: Admin role required to delete inquiries' });
        return;
      }

      if (!id) {
        res.status(400).json({ error: 'Missing inquiry ID' });
        return;
      }

      const { error } = await supabaseAdmin.from('inquiries').delete().eq('id', id);
      if (error) throw error;
      res.status(200).json({ success: true, message: 'Inquiry deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err: any) {
    console.error('Inquiries API error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
