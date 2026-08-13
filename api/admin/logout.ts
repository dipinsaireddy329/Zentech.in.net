import type { VercelRequest, VercelResponse } from '@vercel/node';
import { clearAuthCookie } from '../_lib/adminAuth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end();
    return;
  }

  clearAuthCookie(res);
  res.status(200).json({ success: true, message: 'Logged out successfully' });
}
