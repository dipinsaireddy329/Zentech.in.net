import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import { supabaseAdmin } from '../_lib/supabase.js';
import { setAuthCookie } from '../_lib/adminAuth.js';

// Rate limiter: max 5 attempts per 15 minutes per IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many login attempts, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apply rate limiting only on POST
  if (req.method === 'POST') {
    // Vercel's Node runtime does not use Express middlewares directly.
    // We manually invoke the limiter.
    await new Promise<void>((resolve, reject) => {
      loginLimiter(req as any, res as any, (result: any) => {
        if (result instanceof Error) reject(result);
        else resolve();
      });
    }).catch(() => {
      // Rate limit triggered, response already sent.
    });
    if (res.writableEnded) return;

    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required.' });
      return;
    }
    // Fetch admin user
    const { data: adminUser, error: fetchError } = await supabaseAdmin
      .from('admin_users')
      .select('id, email, password_hash, role')
      .eq('email', email)
      .single();
    if (fetchError || !adminUser) {
      // Generic error to avoid revealing existence
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, adminUser.password_hash);
    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }
    const sessionSecret = process.env.SESSION_SECRET || 'change_this_secret';
    const token = jwt.sign({ adminId: adminUser.id, role: adminUser.role }, sessionSecret, {
      expiresIn: '7d',
    });
    setAuthCookie(res, token);
    res.status(200).json({ email: adminUser.email, role: adminUser.role });
    return;
  }

  // For other methods
  res.setHeader('Allow', 'POST');
  res.status(405).end();
}
