import { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../lib/supabaseServer';

/**
 * Middleware to protect admin routes.
 * Expects an Authorization header with a Bearer token.
 * Uses Supabase server client to verify the JWT and optionally checks for an admin role.
 */
export async function adminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) throw error ?? new Error('Invalid token');
    const user = data.user;
    // Simple admin check – adjust according to your Supabase auth setup.
    const isAdmin = (user?.app_metadata?.role as string) === 'admin';
    if (!isAdmin) {
      throw new Error('User is not admin');
    }
    // attach user for downstream handlers if needed
    (req as any).user = user;
    next();
  } catch (e) {
    console.warn('Admin auth failure', e);
    return res.status(401).json({ error: 'Unauthorized' });
  }
}
