# Zentech - End-to-End Construction & Architectural Solutions

**Zentech** is a premium, full-stack web application for an end-to-end civil engineering, architecture, interior design, and turnkey construction company based in Tirupati, Andhra Pradesh.

---

## 🌟 Key Features

- **Single-Source Workflow**: Explains Zentech's end-to-end single-point responsibility model covering planning, architecture, engineering, interior design, material supply, and turnkey execution.
- **AI Architect Consultant**: Integrated AI assistant powered by Google Gemini API (`@google/genai`) to provide expert architectural advice, cost estimations, and structural design guidance tailored to Andhra Pradesh building codes.
- **Interactive Project Portfolio**: Filterable project case studies with high-resolution visual previews, site metrics, and architectural specifications.
- **Material & Supply Catalog**: Comprehensive material directory with instant "Add to Estimate Basket" functionality.
- **7-Step Construction Timeline**: Interactive step-by-step building roadmap from initial site survey to key handover.
- **Interactive BOQ & Quote Estimator**: Custom inquiry builder and quote request modal.
- **Smooth Animations**: Animated page transitions and scroll-triggered entrance reveals powered by `framer-motion`.
- **Responsive & Modern UI**: Tailored with Tailwind CSS, clean display typography, and warm architectural palette accents.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide React Icons, Framer Motion
- **Backend / Server**: Node.js, Express, `tsx`, `esbuild`
- **AI Engine**: Google Gen AI SDK (`@google/genai`) with Gemini model integration via server-side API proxying (`/api/ai-consultant`)
- **Build Tooling**: Vite 6, TypeScript

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables in `.env`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will run on `http://localhost:3000`.

### Building for Production

Compile frontend assets and bundle the backend server:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 📁 Project Structure

```
├── server.ts              # Express server with Vite middleware & Gemini API endpoint
├── src/
│   ├── App.tsx            # Main application root with animated route management
│   ├── components/        # Extracted UI components (Hero, Services, Projects, etc.)
│   ├── data/              # Company data, services, projects, catalog, & testimonials
│   ├── types.ts           # Shared TypeScript interfaces & types
│   └── index.css          # Tailwind CSS global styling
├── metadata.json          # Applet metadata
└── package.json           # Dependencies and scripts
```

---

## 📄 License

This project is proprietary and confidential to Zentech Construction Solutions.
