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
        const { data, error } = await supabaseAdmin.from('projects').select('*').eq('id', id).single();
        if (error) throw error;
        res.status(200).json(data);
      } else {
        const { category } = req.query;
        let query = supabaseAdmin.from('projects').select('*').order('created_at', { ascending: false });
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
      const { id: newId, title, slug, location, category, description, area, year, status, specifications, images } = req.body;
      
      if (!newId || !title || !slug) {
        res.status(400).json({ error: 'Missing required project fields (id, title, slug)' });
        return;
      }

      const { data, error } = await supabaseAdmin
        .from('projects')
        .insert({
          id: newId,
          title,
          slug,
          location: location || '',
          category: category || 'Residential',
          description: description || '',
          area: area || '',
          year: year || '',
          status: status || 'Completed',
          specifications: specifications || [],
          images: images || []
        })
        .select()
        .single();

      if (error) throw error;
      res.status(201).json(data);
    } else if (method === 'PUT') {
      if (!id) {
        res.status(400).json({ error: 'Missing project ID' });
        return;
      }
      
      const { title, slug, location, category, description, area, year, status, specifications, images } = req.body;
      const updateData: any = {};

      if (title !== undefined) updateData.title = title;
      if (slug !== undefined) updateData.slug = slug;
      if (location !== undefined) updateData.location = location;
      if (category !== undefined) updateData.category = category;
      if (description !== undefined) updateData.description = description;
      if (area !== undefined) updateData.area = area;
      if (year !== undefined) updateData.year = year;
      if (status !== undefined) updateData.status = status;
      if (specifications !== undefined) updateData.specifications = specifications;
      if (images !== undefined) updateData.images = images;

      const { data, error } = await supabaseAdmin
        .from('projects')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.status(200).json(data);
    } else if (method === 'DELETE') {
      if (!id) {
        res.status(400).json({ error: 'Missing project ID' });
        return;
      }

      const { error } = await supabaseAdmin.from('projects').delete().eq('id', id);
      if (error) throw error;
      res.status(200).json({ success: true, message: 'Project deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err: any) {
    console.error('Projects API error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
