import { Router } from 'express';
import { adminAuth } from '../middleware/authMiddleware';
import { supabaseAdmin } from '../lib/supabaseServer';

const router = Router();

// Allowed order statuses
const ALLOWED_STATUSES = ['pending', 'confirmed', 'processing', 'completed', 'cancelled'];

// GET all orders sorted by created_at DESC
router.get('/', adminAuth, async (req, res) => {
  const { data, error } = await supabaseAdmin
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// UPDATE order status only
router.put('/:id/status', adminAuth, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status || !ALLOWED_STATUSES.includes(status)) {
    return res.status(400).json({ error: 'Invalid or missing status' });
  }
  const { data, error } = await supabaseAdmin
    .from('orders')
    .update({ status })
    .eq('id', id)
    .single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
