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

  const { method } = req;
  const { id } = req.query;

  // GET is public
  if (method === 'GET') {
    try {
      if (id) {
        const { data, error } = await supabaseAdmin.from('materials').select('*').eq('id', id).single();
        if (error) throw error;
        res.status(200).json(data);
      } else {
        const { category } = req.query;
        let query = supabaseAdmin.from('materials').select('*').order('created_at', { ascending: false });
        if (category) {
          query = query.eq('category', category);
        }
        const { data, error } = await query;
        if (error) throw error;
        res.status(200).json(data);
      }
    } catch (err: any) {
      res.status(500).json({ error: 'Database error', details: err.message });
    }
    return;
  }

  // All other methods require admin auth (allowed roles: admin)
  const authResult = await getAuthorizedUser(req.headers.authorization, ['admin']);
  if (!authResult.user) {
    res.status(authResult.status).json({ error: authResult.error });
    return;
  }

  try {
    if (method === 'POST') {
      const { id: newId, name, category, description, unit, price, image, available } = req.body;
      
      if (!newId || !name) {
        res.status(400).json({ error: 'Missing required material fields (id, name)' });
        return;
      }

      const { data, error } = await supabaseAdmin
        .from('materials')
        .insert({
          id: newId,
          name,
          category: category || 'General',
          description: description || '',
          unit: unit || 'Piece',
          price: price || 0,
          image: image || '',
          available: available !== undefined ? available : true
        })
        .select()
        .single();

      if (error) throw error;
      res.status(201).json(data);
    } else if (method === 'PUT') {
      if (!id) {
        res.status(400).json({ error: 'Missing material ID' });
        return;
      }
      
      const { name, category, description, unit, price, image, available } = req.body;
      const updateData: any = {};

      if (name !== undefined) updateData.name = name;
      if (category !== undefined) updateData.category = category;
      if (description !== undefined) updateData.description = description;
      if (unit !== undefined) updateData.unit = unit;
      if (price !== undefined) updateData.price = price;
      if (image !== undefined) updateData.image = image;
      if (available !== undefined) updateData.available = available;

      const { data, error } = await supabaseAdmin
        .from('materials')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.status(200).json(data);
    } else if (method === 'DELETE') {
      if (!id) {
        res.status(400).json({ error: 'Missing material ID' });
        return;
      }

      const { error } = await supabaseAdmin.from('materials').delete().eq('id', id);
      if (error) throw error;
      res.status(200).json({ success: true, message: 'Material deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err: any) {
    console.error('Materials API error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
