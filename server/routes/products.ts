import { Router } from 'express';
import { adminAuth } from '../middleware/authMiddleware';
import { supabaseAdmin } from '../lib/supabaseServer';

const router = Router();

// GET all products (admin view)
router.get('/', adminAuth, async (req, res) => {
  const { data, error } = await supabaseAdmin.from('products').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// CREATE product
router.post('/', adminAuth, async (req, res) => {
  const product = req.body;
  const { data, error } = await supabaseAdmin.from('products').insert(product).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// UPDATE product
router.put('/:id', adminAuth, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const { data, error } = await supabaseAdmin
    .from('products')
    .update(updates)
    .eq('id', id)
    .single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE product
router.delete('/:id', adminAuth, async (req, res) => {
  const { id } = req.params;
  const { error } = await supabaseAdmin.from('products').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
