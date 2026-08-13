import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import { supabaseAdmin } from './_lib/supabase.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
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
    const { prompt, areaSqFt, projectType, location } = req.body;

    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const fallbackReply = `Zentech Architectural Guidance:\n\nFor a ${projectType || 'Construction'} project around ${areaSqFt || '2000'} sq.ft in ${location || 'Tirupati'}, we recommend starting with a comprehensive soil bearing capacity test and 3D Vastu floorplan at our Air By-Pass Road Experience Center. Contact Er. K. S. Reddy or our senior engineers at +91 91213 55173.`;

      await supabaseAdmin.from('ai_consultations').insert({
        user_question: prompt,
        ai_response: fallbackReply,
      });

      res.status(200).json({
        reply: fallbackReply,
        success: true
      });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const systemInstruction = `You are Zentech AI Senior Construction & Architectural Consultant, representing Zentech - End-to-End Project Solutions based in Tirupati, Andhra Pradesh, India.
Key details about Zentech:
- Tagline: "We don't just build we create living experiences | End-to-End Construction Solutions"
- Location: Tirupati, Andhra Pradesh (Experience Center: Air By-Pass Road, Tirupati)
- Contact: Phone +91 91213 55173 | Email: gm@zentech.in.net
- Services: Civil Engineering, Architecture Design, Structural Design, 3D Visualization, Interior/Exterior Design, Material Selection, Material Supply, Turnkey Construction, End-to-End Execution.
- Tone: Professional, authoritative, polite, luxury architectural advisor, highly knowledgeable in Indian construction standards (IS codes, Vastu Shastra, TUDA municipality approvals, Rayalaseema weather factors like high ambient heat).

Provide concise, practical, high-value advice on building materials, estimated budget ranges in INR per sq ft, structural tips, Vastu layout ideas, and step-by-step guidance. Recommend visiting the Zentech Experience Center.`;

    const userMessage = `Client Query: "${prompt}". Project Details: ${projectType || 'Residential Villa'}, Area: ${areaSqFt || 'N/A'} sq.ft, Location: ${location || 'Tirupati, AP'}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const aiResponseText = response.text || 'No response generated.';

    await supabaseAdmin.from('ai_consultations').insert({
      user_question: prompt,
      ai_response: aiResponseText,
    });

    res.status(200).json({
      reply: aiResponseText,
      success: true
    });
  } catch (err: any) {
    console.error('Gemini AI Consult Error:', err);
    res.status(500).json({
      error: 'AI Advisor temporarily unavailable',
      details: err.message,
      fallbackMessage: 'Our Senior Architectural Consultants at Zentech are ready to assist you. Please call +91 91213 55173 or visit our Experience Center on Air By-Pass Road, Tirupati.'
    });
  }
}
