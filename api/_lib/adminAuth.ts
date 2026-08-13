import type { VercelRequest, VercelResponse } from '@vercel/node';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

const SESSION_SECRET = process.env.SESSION_SECRET || 'change_this_secret';

export function setAuthCookie(res: VercelResponse, token: string) {
  const serialized = cookie.serialize('auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
  res.setHeader('Set-Cookie', serialized);
}

export function clearAuthCookie(res: VercelResponse) {
  const serialized = cookie.serialize('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
  });
  res.setHeader('Set-Cookie', serialized);
}

export function verifyAuth(req: VercelRequest) {
  const authHeader = req.headers.cookie;
  if (!authHeader) return null;
  const parsed = cookie.parse(authHeader);
  const token = parsed['auth'];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, SESSION_SECRET) as { adminId: string; role: string };
    return payload;
  } catch {
    return null;
  }
}
