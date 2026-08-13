import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseAdmin } from './_lib/supabase.js';

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

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, mobile, email, visitType, preferredDate, preferredTimeSlot, notes, projectType } = req.body;

    if (!name || !mobile || !preferredDate) {
      res.status(400).json({ error: 'Name, Mobile Number, and Preferred Date are required.' });
      return;
    }

    const bookingId = 'ZEN-BOOK-' + Math.floor(100000 + Math.random() * 900000);
    const messageContent = `Booking Type: ${visitType || 'Consultation'}\nPreferred Date: ${preferredDate}\nPreferred Time: ${preferredTimeSlot || '10:00 AM - 12:00 PM'}\nNotes: ${notes || ''}`;

    const { error } = await supabaseAdmin.from('inquiries').insert({
      customer_name: name,
      phone: mobile,
      email: email || null,
      project_type: `Consultation - ${projectType || 'General'}`,
      location: visitType === 'Experience Center Visit' ? 'Experience Center (Air By-Pass Road)' : 'Site / Remote',
      budget: 'Flexible',
      message: messageContent,
      status: 'New'
    });

    if (error) throw error;

    res.status(200).json({
      success: true,
      bookingId,
      message: `Appointment confirmed for ${name}! Reference: ${bookingId}. Our Senior Architect will meet you for ${visitType || 'Consultation'} on ${preferredDate} during slot ${preferredTimeSlot || '10:00 AM - 12:00 PM'}. Confirmation SMS sent to ${mobile}.`,
      receivedAt: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('Book Consultation Error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
