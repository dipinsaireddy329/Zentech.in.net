import { Router } from 'express';
import { adminAuth } from '../middleware/authMiddleware';
import { supabaseAdmin } from '../lib/supabaseServer';

const router = Router();

// CREATE project
router.post('/', adminAuth, async (req, res) => {
  const project = req.body;
  const { data, error } = await supabaseAdmin.from('projects').insert(project).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// UPDATE project
router.put('/:id', adminAuth, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const { data, error } = await supabaseAdmin.from('projects').update(updates).eq('id', id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE project
router.delete('/:id', adminAuth, async (req, res) => {
  const { id } = req.params;
  const { error } = await supabaseAdmin.from('projects').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
