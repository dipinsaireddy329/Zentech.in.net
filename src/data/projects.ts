import { ProjectItem, GalleryItem, OngoingProjectItem } from '../types';

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "northwest-heights",
    title: "Northwest Heights",
    slug: "northwest-heights",
    category: "Residential",
    tags: ["Construction", "Planning", "Architecture"],
    location: "Tirupati, AP",
    completionYear: "2025",
    area: "14,500 sq.ft",
    client: "Executive Residential Developer",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "A ultra-luxurious multi-family residential enclave combining cantilevered balconies, double-height floor-to-ceiling glass facades, and solar-smart roofing.",
    challenge: "The steep terrain in the hillside zone required heavy structural soil retention and custom deep pile foundation engineering while ensuring panoramic views.",
    solution: "Zentech implemented continuous flight auger piling, combined with a post-tensioned beam framework to create uninterrupted open living expanses.",
    features: ["Double-height living atrium", "Private infinity deck", "Smart home automation", "VRF central air conditioning"]
  },
  {
    id: "pineview-ridge",
    title: "Pineview Ridge Residences",
    slug: "pineview-ridge-residences",
    category: "Residential",
    tags: ["Construction", "Renovation", "Interior"],
    location: "Air By-Pass Road, Tirupati",
    completionYear: "2025",
    area: "9,800 sq.ft",
    client: "Private Villa Owner",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "A contemporary tropical villa featuring teak louvers, central open courtyard (Brahmasthan), water lily reflection pool, and Italian Statuario marble floors.",
    challenge: "Maximizing cross-ventilation during hot Tirupati summers while retaining complete acoustic isolation from main city bypass road traffic.",
    solution: "Double-glazed low-E Saint-Gobain glass facades with acoustic insulation layers and deep louver overhangs that block direct UV rays.",
    features: ["Central courtyard pond", "Custom teak woodwork", "Italian Statuario flooring", "10kW rooftop solar grid"]
  },
  {
    id: "carrefour-new-building",
    title: "Carrefour New Building",
    slug: "carrefour-new-building",
    category: "Commercial",
    tags: ["Construction", "Planning", "Structural"],
    location: "Balaji Colony, Tirupati",
    completionYear: "2024",
    area: "28,000 sq.ft",
    client: "Retail & Corporate Group",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "A modern commercial hub featuring high-traffic retail spaces, basement automated car parking, and glass curtain wall elevation.",
    challenge: "Fast-track execution requirement of 10 months without disrupting dense surrounding commercial traffic in Balaji Colony.",
    solution: "Zentech deployed prefabricated structural steel frames combined with ready-mix concrete pumps working in night shifts.",
    features: ["Curtain wall structural glazing", "Automated basement parking", "High-speed capsule elevators", "Seismic Zone III compliance"]
  },
  {
    id: "serene-haven-townhomes",
    title: "Serene Haven Townhomes",
    slug: "serene-haven-townhomes",
    category: "Architecture",
    tags: ["Architecture", "Interior", "Turnkey"],
    location: "Renigunta Road, Tirupati",
    completionYear: "2025",
    area: "18,200 sq.ft",
    client: "Gated Community Developer",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "A cluster of 12 luxury duplex townhomes boasting private terrace gardens, subterranean parking, and unified architectural elevation design.",
    challenge: "Balancing individual privacy for each townhome owner with a cohesive community aesthetic and shared underground services network.",
    solution: "Custom perimeter wall landscaping, subterranean utility trenches, and staggered private balcony orientation.",
    features: ["Private terrace gardens", "Underground cabling network", "Clubhouse & fitness suite", "Rainwater harvesting shafts"]
  },
  {
    id: "science-laboratory-hall",
    title: "Science Laboratory Hall",
    slug: "science-laboratory-hall",
    category: "Commercial",
    tags: ["Architecture", "Construction", "Engineering"],
    location: "University Zone, Tirupati",
    completionYear: "2024",
    area: "22,000 sq.ft",
    client: "Institutional Research Authority",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "A high-precision research facility equipped with vibration-isolated foundation slabs, HEPA cleanroom HVAC ducts, and acid-resistant chemical flooring.",
    challenge: "Eliminating all ground micro-vibrations from nearby road traffic to ensure sensitive laser optics and microscopes operated reliably.",
    solution: "Specialized vibration dampening neoprene isolation joints and independent floating slab technology.",
    features: ["Vibration isolated foundation", "Acid-resistant epoxy flooring", "HEPA cleanroom ventilation", "Emergency gas containment"]
  },
  {
    id: "northwest-building",
    title: "The Northwest Building",
    slug: "the-northwest-building",
    category: "Renovation",
    tags: ["Construction", "Renovation", "Exterior"],
    location: "Chittoor Highway, AP",
    completionYear: "2025",
    area: "16,000 sq.ft",
    client: "Corporate Headquarters",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "Complete structural retrofitting and modern glass facade transformation of a 20-year-old concrete building into a LEED-certified workspace.",
    challenge: "Strengthening aging concrete columns without adding excessive weight or altering interior usable floor area.",
    solution: "Carbon fiber reinforced polymer (CFRP) wrapping around structural columns combined with lightweight aluminum composite panels.",
    features: ["CFRP structural strengthening", "HPL louver shading", "Smart lighting controls", "Zero operational downtime during retrofitting"]
  },
  {
    id: "luxury-duplex-interior",
    title: "Venkateswara Grand Duplex Interior",
    slug: "venkateswara-grand-duplex-interior",
    category: "Interior",
    tags: ["Interior", "Lighting", "Turnkey"],
    location: "KT Road, Tirupati",
    completionYear: "2025",
    area: "4,200 sq.ft",
    client: "Luxury Villa Owner",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "Bespoke interior design featuring CNC brass inlay wood paneling, Italian Statuario marble floors, integrated acoustics, and smart ambient mood lights.",
    challenge: "Integrating concealable AC ducting within low floor-to-ceiling heights while keeping aesthetic plaster mouldings intact.",
    solution: "Custom perimeter slot diffusers recessed within cove lighting channels for invisible cooling.",
    features: ["CNC Brass Inlay Paneling", "Italian Statuario Marble", "Smart Lutron Lighting", "Custom Factory Joinery"]
  },
  {
    id: "emerald-commercial-plaza",
    title: "Emerald Commercial Plaza",
    slug: "emerald-commercial-plaza",
    category: "Commercial",
    tags: ["Commercial", "Architecture", "Glass Facade"],
    location: "Tirumala Bypass Road, Tirupati",
    completionYear: "2025",
    area: "34,000 sq.ft",
    client: "Corporate Realty Developers",
    heroImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop"
    ],
    summary: "A 5-story glass-and-steel commercial landmark housing retail showrooms, corporate offices, and rooftop lounge garden.",
    challenge: "Minimizing solar heat gain on west-facing facade in Tirupati summer heat.",
    solution: "Double-glazed high-performance argon filled low-E curtain wall panels with automated louvers.",
    features: ["Argon Low-E Facade", "Rooftop Sky Garden", "Basement Stack Parking", "Solar Powered Common Grid"]
  }
];

export const ONGOING_PROJECTS: OngoingProjectItem[] = [
  {
    id: 'active-01',
    title: 'The Royal Oak Triplex Luxury Villa',
    location: 'Avilala Circle, Tirupati',
    client: 'N. R. Choudhary & Family',
    projectType: 'Residential Triplex',
    totalAreaSqFt: 4800,
    currentPhase: '2nd Floor Slab Casting & MEP Piping',
    progressPercentage: 68,
    expectedCompletion: 'November 2026',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    recentMilestones: [
      { date: '15 Mar 2026', title: 'Deep Raft Foundation & Pillar Casting', status: 'completed' as const },
      { date: '02 Jun 2026', title: 'Ground & 1st Floor Column Curing Test', status: 'completed' as const },
      { date: '18 Jul 2026', title: '2nd Floor Slab Shuttering & Fe550D Binding', status: 'in-progress' as const },
      { date: '25 Sep 2026', title: 'Teakwood Door Frames & Italian Plastering', status: 'upcoming' as const }
    ]
  },
  {
    id: 'active-02',
    title: 'Venkateshwara Ortho & Multi-Specialty Clinic',
    location: 'Renigunta Road, Tirupati',
    client: 'Dr. S. K. Naidu',
    projectType: 'Commercial Healthcare',
    totalAreaSqFt: 12500,
    currentPhase: 'Interior Turnkey Finishing & HVAC Ducting',
    progressPercentage: 88,
    expectedCompletion: 'August 2026',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    recentMilestones: [
      { date: '10 Jan 2026', title: 'Commercial Frame & Fire Exit Clearance', status: 'completed' as const },
      { date: '20 Apr 2026', title: 'Acoustic Wall Paneling & Medical Gas Lines', status: 'completed' as const },
      { date: '05 Jul 2026', title: 'Sterile OT Epoxy Flooring & Smart Lighting', status: 'in-progress' as const },
      { date: '15 Aug 2026', title: 'Final Handover & Key Ceremony', status: 'upcoming' as const }
    ]
  },
  {
    id: 'active-03',
    title: 'Ananda Nilayam Modern Heritage Residence',
    location: 'MR Palli, Tirupati',
    client: 'G. Mohan Reddy',
    projectType: 'Independent Villa',
    totalAreaSqFt: 3400,
    currentPhase: 'Ground Floor AAC Blockwork & Brick Lintels',
    progressPercentage: 42,
    expectedCompletion: 'February 2027',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    recentMilestones: [
      { date: '05 May 2026', title: 'TUDA Blueprint Approval & Soil Excavation', status: 'completed' as const },
      { date: '22 Jun 2026', title: 'Plinth Beam Casting & Anti-Termite Injection', status: 'completed' as const },
      { date: '12 Jul 2026', title: 'AAC Wall Masonry & Chajja Casting', status: 'in-progress' as const },
      { date: '10 Dec 2026', title: 'Modular Kitchen & False Ceiling', status: 'upcoming' as const }
    ]
  }
];

export const BEFORE_AFTER_PROJECTS = [
  {
    id: 'ba-01',
    title: 'Heritage Bungalow Structural Restoration & Luxury Renovation',
    location: 'Gandhi Road, Tirupati',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    description: 'A 35-year-old load-bearing structural house retrofitted with RCC column jacketing, contemporary glass facade, and open-plan Italian marble interiors.',
    scope: 'Full Structural Jacketing + Interior Turnkey Execution',
    area: '3,800 Sq.Ft'
  },
  {
    id: 'ba-02',
    title: 'Commercial Showroom Facade & Interior Elevation Makeover',
    location: 'Tirumala Bypass Road',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    description: 'Outdated brick storefront transformed into a high-visibility ACP & Saint-Gobain structural glazing commercial destination.',
    scope: 'Facade Architecture + HVAC & Lighting Turnkey',
    area: '6,200 Sq.Ft'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Northwest Heights Atrium Villa",
    category: "Residential",
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    description: "Modern cantilevered residential villa with double-height glass facade in Tirupati."
  },
  {
    id: "gal-2",
    title: "Pineview Master Suite Interior",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "Bespoke bedroom interior with modular wardrobes and warm ambient lighting."
  },
  {
    id: "gal-3",
    title: "Civil Foundation Beam Casting",
    category: "Site Progress",
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
    description: "IS-code compliant reinforced concrete footing and beam casting site execution."
  },
  {
    id: "gal-4",
    title: "3D VR Architectural Render",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "Photorealistic daylight exterior architecture design created at Zentech Studio."
  },
  {
    id: "gal-5",
    title: "Luxury Living Room & Marble",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    description: "Italian Statuario marble flooring paired with custom brass inlay wood paneling."
  },
  {
    id: "gal-6",
    title: "Carrefour Commercial Plaza Facade",
    category: "Commercial",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "Saint-Gobain glass curtain wall commercial elevation in Balaji Colony."
  },
  {
    id: "gal-7",
    title: "Serene Haven Luxury Townhome",
    category: "Residential",
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    description: "Contemporary gated residential townhome cluster with private terrace gardens."
  },
  {
    id: "gal-8",
    title: "Corporate Headquarters Glass Tower",
    category: "Commercial",
    url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    description: "Modern commercial complex featuring high-speed elevators and underground parking."
  },
  {
    id: "gal-9",
    title: "Curved Floating Staircase & Lighting",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural floating staircase with LED tread lighting and glass railing."
  },
  {
    id: "gal-10",
    title: "Science Research Laboratory Elevation",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    description: "Institutional research hall with specialized vibration-dampened foundation design."
  }
];
