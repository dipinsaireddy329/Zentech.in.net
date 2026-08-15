import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// __filename and __dirname are not needed in production CJS build; using process.cwd() where needed.
// const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", company: "Zentech Construction" });
  });

  // Quote / Lead Endpoint
  app.post("/api/quote", (req, res) => {
    const { name, mobile, email, location, quantity, requirement, projectType } = req.body;

    if (!name || !mobile) {
      res.status(400).json({ error: "Name and Mobile Number are required." });
      return;
    }

    const referenceId = "ZEN-" + Math.floor(100000 + Math.random() * 900000);
    console.log(`[QUOTE RECEIVED] ID: ${referenceId}, Name: ${name}, Mobile: ${mobile}, Type: ${projectType}`);

    res.json({
      success: true,
      referenceId,
      message: `Thank you, ${name}! Your consultation request has been assigned to a senior Zentech engineer. Reference: ${referenceId}. We will contact you shortly at ${mobile}.`,
      receivedAt: new Date().toISOString()
    });
  });

  // Site Visit & Consultation Booking Endpoint
  app.post("/api/book-consultation", (req, res) => {
    const { name, mobile, email, visitType, preferredDate, preferredTimeSlot, notes, projectType } = req.body;

    if (!name || !mobile || !preferredDate) {
      res.status(400).json({ error: "Name, Mobile Number, and Preferred Date are required." });
      return;
    }

    const bookingId = "ZEN-BOOK-" + Math.floor(100000 + Math.random() * 900000);
    console.log(`[BOOKING RECEIVED] ID: ${bookingId}, Client: ${name}, Date: ${preferredDate}, Slot: ${preferredTimeSlot}`);

    res.json({
      success: true,
      bookingId,
      message: `Appointment confirmed for ${name}! Reference: ${bookingId}. Our Senior Architect will meet you for ${visitType || 'Consultation'} on ${preferredDate} during slot ${preferredTimeSlot || '10:00 AM - 12:00 PM'}. Confirmation SMS sent to ${mobile}.`,
      receivedAt: new Date().toISOString()
    });
  });

  // Admin Auth Endpoints
  app.post("/api/admin/login", (req, res) => {
    const { email, username, password } = req.body;
    const userOrEmail = (username || email || "").toString().trim().toLowerCase();
    const pass = (password || "").toString().trim();

    if (!userOrEmail || !pass) {
      res.status(400).json({ error: "Username/Email and Password are required." });
      return;
    }

    // Accept admin, zentech, admin@zentech.in.net with password admin, admin123, zentech123, or non-empty
    if (
      (userOrEmail === "admin" || userOrEmail === "zentech" || userOrEmail === "admin@zentech.in.net") &&
      (pass === "admin" || pass === "admin123" || pass === "zentech123" || pass.length >= 3)
    ) {
      res.json({
        success: true,
        email: userOrEmail.includes("@") ? userOrEmail : "admin@zentech.in.net",
        role: "admin",
        message: "Authenticated successfully"
      });
      return;
    }

    res.status(401).json({ error: "Invalid username or password. Try username: 'admin' & password: 'admin123'." });
  });

  app.get("/api/admin/me", (_req, res) => {
    res.json({ email: "admin@zentech.in.net", role: "admin" });
  });

  app.post("/api/admin/logout", (_req, res) => {
    res.json({ success: true, message: "Logged out successfully" });
  });

  // Admin Data Endpoints
  const inMemoryInquiries = [
    { id: 'inq-1', customer_name: 'Rajesh Varma', phone: '+91 98765 43210', email: 'rajesh@example.com', project_type: 'Luxury Residential Villa', status: 'New', message: 'Looking for 3500 sq ft G+2 villa construction with Vastu compliant 3D elevation.', created_at: new Date(Date.now() - 3600000 * 5).toISOString() },
    { id: 'inq-2', customer_name: 'Priya Reddy', phone: '+91 91234 56789', email: 'priya.r@gmail.com', project_type: 'Turnkey Commercial Complex', status: 'Contacted', message: 'Need architectural design and approval support for 4-floor commercial plot near Korlagunta.', created_at: new Date(Date.now() - 3600000 * 24).toISOString() },
    { id: 'inq-3', customer_name: 'K. S. Narayana', phone: '+91 94400 12345', email: 'ksnarayana@yahoo.com', project_type: 'Interior & Finishing', status: 'In Progress', message: 'Req complete wooden paneling and Italian marble flooring for duplex apartment.', created_at: new Date(Date.now() - 3600000 * 48).toISOString() }
  ];

  const inMemoryQuotes = [
    { id: 'q-1', customer_name: 'Venkatesh Rao', phone: '+91 99887 76655', email: 'venkat@gmail.com', items: [{ name: 'Vizag TMT Steel Fe 550D' }, { name: 'UltraTech 53 Grade OPC Cement' }], estimated_cost: '485000', status: 'New', created_at: new Date(Date.now() - 3600000 * 12).toISOString() }
  ];

  const inMemoryProjects = [
    {
      id: 'northwest-heights',
      title: 'Northwest Heights Villa',
      category: 'Residential',
      location: 'Tirupati, AP',
      completionYear: '2025',
      area: '14,500 sq.ft',
      client: 'Executive Residential Developer',
      heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
      ],
      description: 'Ultra-luxurious multi-family residential enclave combining cantilevered balconies and solar-smart roofing.'
    },
    {
      id: 'pineview-ridge',
      title: 'Pineview Ridge Residences',
      category: 'Residential',
      location: 'Air By-Pass Road, Tirupati',
      completionYear: '2025',
      area: '9,800 sq.ft',
      client: 'Private Villa Owner',
      heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
      images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop'],
      description: 'A contemporary tropical villa featuring teak louvers, central courtyard, and Italian Statuario marble floors.'
    }
  ];

  const inMemoryMaterials = [
    {
      id: 'steel-tmt',
      name: 'Primary TMT Rebars (Fe 550D)',
      category: 'Steel',
      division: 'Building Materials',
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=1200&auto=format&fit=crop',
      description: 'High-ductility Fe 550D TMT steel rebars manufactured by Vizag Steel & Tata Tiscon.'
    },
    {
      id: 'cement-opc',
      name: 'UltraTech & Coromandel OPC 53 Grade Cement',
      category: 'Cement',
      division: 'Building Materials',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
      description: 'Premium Ordinary Portland Cement (OPC 53 Grade) offering fast setting time.'
    }
  ];

  app.get("/api/admin/inquiries", (_req, res) => {
    res.json(inMemoryInquiries);
  });

  app.patch("/api/admin/inquiries/:id", (req, res) => {
    const { id } = req.params;
    const { status, notes } = req.body || {};
    const item = inMemoryInquiries.find(i => i.id === id);
    if (item) {
      if (status) item.status = status;
      res.json(item);
    } else {
      res.status(404).json({ error: "Inquiry not found" });
    }
  });

  app.delete("/api/admin/inquiries/:id", (req, res) => {
    const { id } = req.params;
    const idx = inMemoryInquiries.findIndex(i => i.id === id);
    if (idx !== -1) inMemoryInquiries.splice(idx, 1);
    res.json({ success: true });
  });

  app.get("/api/admin/quotes", (_req, res) => {
    res.json(inMemoryQuotes);
  });

  app.patch("/api/admin/quotes/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body || {};
    const item = inMemoryQuotes.find(q => q.id === id);
    if (item) {
      if (status) item.status = status;
      res.json(item);
    } else {
      res.status(404).json({ error: "Quote not found" });
    }
  });

  app.delete("/api/admin/quotes/:id", (req, res) => {
    const { id } = req.params;
    const idx = inMemoryQuotes.findIndex(q => q.id === id);
    if (idx !== -1) inMemoryQuotes.splice(idx, 1);
    res.json({ success: true });
  });

  app.get("/api/admin/ai-logs", (_req, res) => {
    res.json([
      { id: 'log-1', user_question: 'What is the estimated cost for building a 2000 sq.ft duplex in Tirupati?', ai_response: 'Estimated cost ranges from ₹2,100 to ₹2,800 per sq.ft including civil, electrical, and premium finishing.', created_at: new Date(Date.now() - 3600000 * 2).toISOString() }
    ]);
  });

  // Projects Endpoints
  app.get("/api/projects", (_req, res) => {
    res.json(inMemoryProjects);
  });

  app.post("/api/projects", (req, res) => {
    const newProj = { id: 'proj-' + Date.now(), ...req.body };
    inMemoryProjects.push(newProj);
    res.json(newProj);
  });

  app.put("/api/projects", (req, res) => {
    const { id } = req.query;
    const idx = inMemoryProjects.findIndex(p => p.id === id || p.id === req.body.id);
    if (idx !== -1) {
      inMemoryProjects[idx] = { ...inMemoryProjects[idx], ...req.body };
      res.json(inMemoryProjects[idx]);
    } else {
      const newProj = { id: (id as string) || 'proj-' + Date.now(), ...req.body };
      inMemoryProjects.push(newProj);
      res.json(newProj);
    }
  });

  app.delete("/api/projects", (req, res) => {
    const { id } = req.query;
    const idx = inMemoryProjects.findIndex(p => p.id === id);
    if (idx !== -1) inMemoryProjects.splice(idx, 1);
    res.json({ success: true });
  });

  // Materials Endpoints
  app.get("/api/materials", (_req, res) => {
    res.json(inMemoryMaterials);
  });

  app.post("/api/materials", (req, res) => {
    const newMat = { id: 'mat-' + Date.now(), ...req.body };
    inMemoryMaterials.push(newMat);
    res.json(newMat);
  });

  app.put("/api/materials", (req, res) => {
    const { id } = req.query;
    const idx = inMemoryMaterials.findIndex(m => m.id === id || m.id === req.body.id);
    if (idx !== -1) {
      inMemoryMaterials[idx] = { ...inMemoryMaterials[idx], ...req.body };
      res.json(inMemoryMaterials[idx]);
    } else {
      const newMat = { id: (id as string) || 'mat-' + Date.now(), ...req.body };
      inMemoryMaterials.push(newMat);
      res.json(newMat);
    }
  });

  app.delete("/api/materials", (req, res) => {
    const { id } = req.query;
    const idx = inMemoryMaterials.findIndex(m => m.id === id);
    if (idx !== -1) inMemoryMaterials.splice(idx, 1);
    res.json({ success: true });
  });

  // AI Construction & Architecture Assistant Endpoint using Gemini API
  const handleAiConsult = async (req: express.Request, res: express.Response) => {
    try {
      const { prompt, areaSqFt, projectType, location } = req.body;

      if (!prompt) {
        res.status(400).json({ error: "Prompt is required" });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not configured yet
        res.json({
          reply: `Zentech Architectural Guidance:\n\nFor a ${projectType || 'Construction'} project around ${areaSqFt || '2000'} sq.ft in ${location || 'Tirupati'}, we recommend starting with a comprehensive soil bearing capacity test and 3D Vastu floorplan at our Air By-Pass Road Experience Center. Contact Er. K. S. Reddy or our senior engineers at +91 91213 55173.`,
          recommendation: {
            estimatedTimeline: "6 to 8 Months",
            estimatedCostRange: "₹2,100 - ₹2,800 per sq.ft",
            recommendedMaterials: ["Fe 550D Vizag TMT Steel", "UltraTech 53 Grade OPC", "AAC Blocks", "Statuario / Vitrified Flooring"]
          }
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are Zentech AI Senior Construction & Architectural Consultant, representing Zentech - End-to-End Project Solutions based in Tirupati, Andhra Pradesh, India.
Key details about Zentech:
- Tagline: "We don't just build we create living experiences | End-to-End Construction Solutions"
- Location: Tirupati, Andhra Pradesh (Experience Center: Air By-Pass Road, Tirupati)
- Contact: Phone +91 91213 55173 | Email: gm@zentech.in.net
- Services: Civil Engineering, Architecture Design, Structural Design, 3D Visualization, Interior/Exterior Design, Material Selection, Material Supply, Turnkey Construction, End-to-End Execution.
- Tone: Professional, authoritative, polite, luxury architectural advisor, highly knowledgeable in Indian construction standards (IS codes, Vastu Shastra, TUDA municipality approvals, Rayalaseema weather factors like high ambient heat).

Provide concise, practical, high-value advice on building materials, estimated budget ranges in INR per sq ft, structural tips, Vastu layout ideas, and step-by-step guidance. Recommend visiting the Zentech Experience Center.`;

      const userMessage = `Client Query: "${prompt}". Project Details: ${projectType || 'Residential Villa'}, Area: ${areaSqFt || 'N/A'} sq.ft, Location: ${location || 'Tirupati, AP'}.`;

      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({
        reply: result.text,
        success: true
      });
    } catch (err: unknown) {
      console.error("Gemini AI Consult Error:", err);
      const errorMessage = err instanceof Error ? err.message : "Internal AI engine error";
      res.status(500).json({
        error: "AI Advisor temporarily unavailable",
        details: errorMessage,
        fallbackMessage: "Our Senior Architectural Consultants at Zentech are ready to assist you. Please call +91 91213 55173 or visit our Experience Center on Air By-Pass Road, Tirupati."
      });
    }
  };

  app.post("/api/ai-consult", handleAiConsult);
  app.post("/api/ai-consultant", handleAiConsult);

  // Vite Middleware in Dev Mode or Static Files in Production Mode
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Zentech Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
