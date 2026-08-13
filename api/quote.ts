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
    const { name, email, phone, mobile, projectType, message, quoteBasketItems } = req.body;
    const clientPhone = phone || mobile;

    if (!name || !clientPhone) {
      res.status(400).json({ error: 'Name and Phone/Mobile Number are required.' });
      return;
    }

    const referenceId = 'ZEN-' + Math.floor(100000 + Math.random() * 900000);

    if (quoteBasketItems && Array.isArray(quoteBasketItems) && quoteBasketItems.length > 0) {
      const estimatedCost = quoteBasketItems.reduce((acc: number, item: any) => {
        return acc + (item.price || 1500) * (item.quantity || 1);
      }, 0);

      const { error: quoteError } = await supabaseAdmin.from('quote_requests').insert({
        customer_name: name,
        phone: clientPhone,
        email: email || null,
        items: quoteBasketItems,
        estimated_cost: estimatedCost,
        message: message || '',
        status: 'New'
      });

      if (quoteError) throw quoteError;

      res.status(200).json({
        success: true,
        referenceId,
        message: `Thank you, ${name}! Your quotation request has been assigned to a senior Zentech engineer. Reference: ${referenceId}. We will contact you shortly at ${clientPhone}.`,
        receivedAt: new Date().toISOString(),
      });
    } else {
      const { error: inquiryError } = await supabaseAdmin.from('inquiries').insert({
        customer_name: name,
        phone: clientPhone,
        email: email || null,
        project_type: projectType || 'Residential',
        location: 'Tirupati',
        budget: 'Flexible',
        message: message || '',
        status: 'New'
      });

      if (inquiryError) throw inquiryError;

      res.status(200).json({
        success: true,
        referenceId,
        message: `Thank you, ${name}! Your inquiry has been received. Reference: ${referenceId}. We will contact you shortly at ${clientPhone}.`,
        receivedAt: new Date().toISOString(),
      });
    }
  } catch (err: any) {
    console.error('Quote/Inquiry Submission Error:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
