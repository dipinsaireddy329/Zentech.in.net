import { ServiceItem } from '../types';

export const SERVICES_OVERVIEW = [
  {
    id: "land-realestate",
    title: "Land & Real Estate Services",
    description: "Strategic land sourcing, feasibility evaluation, and compliance coordination.",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "planning-design",
    title: "Planning & Design",
    description: "Architectural layouts, structural engineering, and approval-ready documentation.",
    icon: "Compass",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "construction-services",
    title: "Construction Services",
    description: "Residential, commercial, and industrial construction built to engineering standards.",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "material-supply",
    title: "Raw Material Supply",
    description: "Reliable bulk material supply ensuring uninterrupted progress.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "turnkey-execution",
    title: "Turnkey Project Execution",
    description: "Single-point responsibility from concept to completion.",
    icon: "KeyRound",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "finishing-handover",
    title: "Finishing & Handover",
    description: "Seamless execution through finishing and final handover.",
    icon: "CheckCircle2",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
  }
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    shortDesc: "Reliable engineering solutions focused on safety, quality, and efficiency. Building strong foundations from planning through execution.",
    fullDesc: "Our civil engineering expertise ensures that every structure built under Zentech meets strict structural integrity, seismic compliance, and soil stability metrics across Andhra Pradesh. From foundation design to heavy concrete structures, we combine civil math with site execution excellence.",
    iconName: "HardHat",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Rigorous structural safety compliance & load testing",
      "Soil analysis & customized deep foundation planning",
      "Cost-optimized material quantity survey & estimation",
      "On-site civil engineer supervision throughout casting"
    ],
    process: [
      "Site topography & soil bearing capacity testing",
      "Structural calculation & load modeling",
      "Excavation & foundation shuttering supervision",
      "Reinforced concrete casting & strength curing monitoring"
    ],
    applications: ["Independent Luxury Villas", "Commercial Complexes", "Industrial Sheds & Factories", "Multistory Apartments"]
  },
  {
    id: "architecture-design",
    title: "Architecture Design",
    shortDesc: "Creating innovative and functional designs that balance aesthetics and practicality. Transforming ideas into inspiring spaces tailored to your vision.",
    fullDesc: "Zentech architects design living experiences that blend contemporary aesthetics with tropical Indian climate dynamics. We optimize natural lighting, cross-ventilation, functional layouts, and modern fluid spatial transitions.",
    iconName: "DraftingCompass",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Optimized, climatically responsive architectural concepts",
      "Maximization of natural sunlight & breeze ventilation",
      "Complete municipality / TUDA approval drawings",
      "Modern minimalist & luxury elevation options"
    ],
    process: [
      "Requirement workshop & plot boundary verification",
      "Conceptual floor plan layouts & zone mapping",
      "3D elevation drafting & material selection",
      "Working structural & architectural execution drawings"
    ],
    applications: ["Custom Luxury Homes", "Gated Communities", "Boutique Offices", "Hospitality & Resorts"]
  },
  {
    id: "structural-design",
    title: "Structural Design",
    shortDesc: "Designing durable and cost-effective structural systems for long-term performance. Ensuring strength, stability, and compliance with industry standards.",
    fullDesc: "Engineered for longevity. Our structural design division uses advanced finite element analysis to ensure maximum structural strength while avoiding steel over-specification, saving clients up to 12% in raw steel/concrete costs.",
    iconName: "Layers",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Earthquake resistant structure design (Zone III / IV)",
      "Optimized rebar detailing to reduce steel wastage",
      "ETABS / STAAD.Pro structural validation",
      "Certified structural stability reports"
    ],
    process: [
      "Architectural grid analysis",
      "Dead load, live load & wind load calculations",
      "Column / beam / slab rebar schedule preparation",
      "On-site rebar placement inspection before concrete pour"
    ],
    applications: ["High-rise Buildings", "Heavy Industrial Framed Structures", "Cantilever Roofs & Bridges", "Villa Basements"]
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    shortDesc: "Bringing concepts to life through realistic 3D renders and walkthroughs. Helping clients visualize projects before construction begins.",
    fullDesc: "Walk through your dream home before a single brick is laid. Zentech provides hyper-realistic 8K 3D exterior renders, interior lighting simulations, and 360-degree VR walkthroughs.",
    iconName: "Box",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Photorealistic daylight & night scene illumination",
      "Exact material texture preview (marble, wood, exterior tiles)",
      "Virtual reality 360° walk-throughs",
      "Zero surprise policy between design & final construction"
    ],
    process: [
      "3D CAD geometry modeling",
      "Real-world PBR material texture mapping",
      "Sun path & artificial lighting setup",
      "4K/8K rendering & interactive VR tour compilation"
    ],
    applications: ["Residential Interior Renders", "Commercial Elevation Renders", "Walkthrough Videos", "Developer Sales Portfolios"]
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortDesc: "Crafting stylish and functional interiors that reflect your lifestyle and needs. Enhancing spaces with thoughtful design and attention to detail.",
    fullDesc: "From custom modular kitchens and concealed ambient lighting to bespoke Italian marble flooring and handcrafted wood paneling, Zentech creates ultra-luxury interior living environments tailored to individual client personalities.",
    iconName: "Sparkles",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Custom cabinetry with Blum / Hettich soft-close hardware",
      "Ergonomic kitchen work-triangle layouts",
      "Acoustic & climate-controlled bedroom suites",
      "Turnkey procurement & factory-finished carpentry"
    ],
    process: [
      "Lifestyle & spatial mood board discussion",
      "Detailed 3D interior renders & material sampling",
      "Factory production of modular furniture",
      "On-site installation, lighting setup & styling"
    ],
    applications: ["Luxury Villas", "Executive Master Suites", "Penthouse Living Rooms", "Corporate Conference Rooms"]
  },
  {
    id: "exterior-design",
    title: "Exterior Design",
    shortDesc: "Designing attractive and impactful exteriors that leave a lasting impression. Combining aesthetics, functionality, and architectural excellence.",
    fullDesc: "Make your building stand out in Tirupati. We craft exterior elevations using weather-proof HPL panels, terracotta louvers, natural stone cladding, tempered glass facades, and automated landscape integration.",
    iconName: "Building2",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Weather-resistant exterior cladding & paints",
      "Architectural lighting facade highlighting",
      "Integrated balcony green walls & pergolas",
      "High thermal insulation for energy efficiency"
    ],
    process: [
      "Facade massing & proportion analysis",
      "Material selection (Stone, Glass, Composite Panels)",
      "3D elevation lighting simulation",
      "Structural frame mounting & facade installation"
    ],
    applications: ["Villa Facades", "Commercial Showrooms", "Apartment Elevations", "Gated Entrance Gates"]
  },
  {
    id: "material-selection",
    title: "Material Selection",
    shortDesc: "Guiding clients in choosing the right materials for quality and durability. Balancing performance, appearance, and budget requirements.",
    fullDesc: "At Zentech Experience Center, touch and test steel grades, cement types, teakwood, Italian marble, double-glazed glass, anti-skid porcelain tiles, and smart electrical fittings with guidance from our senior procurement engineers.",
    iconName: "Sliders",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Hands-on material testing at Zentech Experience Center",
      "Direct manufacturer price transparency without middlemen",
      "Guidance on local climate endurance & maintenance",
      "Warranty-backed structural & finishing materials"
    ],
    process: [
      "Experience Center physical tour & sample evaluation",
      "Budget vs quality grade matrix formulation",
      "Technical datasheet & lab test certificate verification",
      "Final material palette lock-in for project"
    ],
    applications: ["TMT Rebar Grades", "Plumbing & Sanitaryware", "Flooring Marbles & Tiles", "Structural Timber & Plywood"]
  },
  {
    id: "material-supply",
    title: "Material Supply",
    shortDesc: "Providing high-quality construction materials from trusted suppliers. Ensuring timely delivery to keep projects on schedule.",
    fullDesc: "As one of Andhra Pradesh's premier bulk construction suppliers, Zentech supplies primary materials like Vizag Steel, Ultratech Cement, river sand/M-sand, red bricks, AAC blocks, Asian Paints, and Havells electricals at wholesale rates directly to sites.",
    iconName: "Truck",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Direct mill & factory pricing with volume discounts",
      "Guaranteed on-time site logistics & unloading",
      "Authenticity certificate for every steel & cement lot",
      "Zero project stoppage due to material stockouts"
    ],
    process: [
      "Project material BOQ scheduling",
      "Direct warehouse dispatch planning",
      "Quality check & weighbridge verification",
      "Site delivery receipt & batch recording"
    ],
    applications: ["Bulk Steel & Cement Supply", "Plumbing & Electrical Fitting Orders", "Granite & Marble Crates", "Plywood & Glass Consignments"]
  },
  {
    id: "construction-management",
    title: "Construction Management",
    shortDesc: "Coordinating every stage of construction for smooth project execution. Managing resources, timelines, and quality with precision.",
    fullDesc: "Professional construction management that handles labor force scheduling, equipment utilization, quality control check-lists, safety protocols, and daily site logs to ensure smooth, stress-free execution.",
    iconName: "ClipboardCheck",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Dedicated full-time Project Manager on site",
      "Strict safety protocols & IS-code compliance",
      "Weekly milestone review meetings & video logs",
      "Zero budget overshoot guarantee"
    ],
    process: [
      "Master construction schedule (Gantt Chart)",
      "Daily labor & equipment allocation",
      "Quality audit & slump test recording",
      "Client milestone sign-off"
    ],
    applications: ["Residential Villa Execution", "Commercial High-rise Sites", "Institutional Infrastructure", "Factory Units"]
  },
  {
    id: "project-monitoring",
    title: "Project Monitoring",
    shortDesc: "Tracking project progress to ensure deadlines and quality standards are met. Providing transparent reporting and proactive issue resolution.",
    fullDesc: "Track your home construction progress from anywhere in the world. Zentech provides clients with live CCTV access, digital milestone tracking dashboards, weekly drone inspection footage, and transparent financial reporting.",
    iconName: "LineChart",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Live mobile app / portal access to site cameras",
      "Weekly drone inspection videos & progress photos",
      "Itemized transparent cashflow reports",
      "Proactive risk mitigation before delays occur"
    ],
    process: [
      "CCTV camera & IoT sensor deployment",
      "Weekly progress vs schedule comparison",
      "Third-party material lab test reporting",
      "Client digital portal update"
    ],
    applications: ["NRI Property Owners", "Busy Business Executives", "Multi-site Commercial Developers", "Institutional Projects"]
  },
  {
    id: "turnkey-construction",
    title: "Turnkey Construction",
    shortDesc: "Offering complete construction solutions from concept to completion. Delivering ready-to-use projects with a single point of responsibility.",
    fullDesc: "Hand over the keys to a finished home. Under Zentech's Turnkey Contract, we manage everything—soil testing, architectural blueprints, government approvals, civil construction, interior woodwork, sanitary fittings, electricals, land-scaping, deep cleaning, and key handover.",
    iconName: "Key",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Single point of total accountability",
      "Fixed timeline guarantee with delay penalty clause",
      "Includes interior woodwork, lightings & deep cleaning",
      "10-year structural warranty & 1-year free maintenance"
    ],
    process: [
      "Turnkey contract agreement & specification lock",
      "Complete civil & structural execution",
      "Interior fitout & exterior landscaping",
      "Final deep cleaning, inspection & key handover ceremony"
    ],
    applications: ["Luxury Turnkey Villas", "Turnkey Office Interiors", "Boutique Hotels", "Gated Communities"]
  },
  {
    id: "end-to-end-execution",
    title: "End-to-End Execution",
    shortDesc: "Managing every aspect of your project under one roof. Ensuring seamless coordination, efficiency, and successful delivery.",
    fullDesc: "Eliminate the headache of coordinating separately between 10 different contractors, architects, sub-dealers, and government offices. Zentech unifies the entire ecosystem under one roof with single-source accountability.",
    iconName: "ShieldCheck",
    category: "core",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Zero coordination friction between design & execution teams",
      "Unified timeline & integrated budget management",
      "End-to-end government approval assistance (TUDA / Tirupati Municipal)",
      "Hassle-free, stress-free construction journey"
    ],
    process: [
      "Discovery & alignment meeting",
      "Unified design, structural & engineering blueprinting",
      "Synchronized procurement & civil execution",
      "Final snag-list clearing & move-in setup"
    ],
    applications: ["Homeowners seeking stress-free building", "Commercial space developers", "Industrial facility owners", "Institutional leaders"]
  }
];

export const ADDITIONAL_SERVICES = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    description: "Delivering complete home construction solutions from planning and design to execution, ensuring quality craftsmanship and timely project completion.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description: "Providing end-to-end commercial building services from concept and design to construction, guaranteeing efficiency, compliance, and durable long-term performance.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "renovations-remodeling",
    title: "Renovations and Remodeling",
    description: "Transforming existing spaces through thoughtful renovations and remodeling, enhancing functionality, aesthetics, and overall property value with expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
  }
];

export const SEVEN_STEPS = [
  {
    number: "01",
    title: "Visit Zentech Experience Center",
    description: "Explore design ideas, materials, and project possibilities with expert guidance tailored to your vision and budget.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    details: "Interactive materials display, live sample walls for granite, steel, glass, wood finishes & VR design experience."
  },
  {
    number: "02",
    title: "Select Materials & Requirements",
    description: "Choose materials, finishes, and specifications matching your style and needs.",
    icon: "SlidersHorizontal",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    details: "Choose from certified rebar, premium cements, Italian marbles, Kohler/Jaquar sanitaryware, and Asian Paints palettes."
  },
  {
    number: "03",
    title: "Get 3D Visual Experience",
    description: "Realistic 3D visualizations of layouts, interiors, and exteriors before construction begins.",
    icon: "Eye",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    details: "Full 8K rendering & 360-degree walkthroughs so you see your exact house layout before a single brick is placed."
  },
  {
    number: "04",
    title: "Meet Architects & Engineers",
    description: "Collaborate to finalize designs and technical details.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    details: "In-depth technical session with senior structural engineers, design consultants, and principal architects."
  },
  {
    number: "05",
    title: "Receive Detailed Estimate",
    description: "Transparent estimate covering materials, labor, and timelines.",
    icon: "FileText",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    details: "Itemized BOQ with zero hidden costs, fixed price guarantee, and milestones mapped to construction phases."
  },
  {
    number: "06",
    title: "Construction & Project Monitoring",
    description: "Full project management with quality, progress, and timeline tracking; regular updates.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
    details: "Live CCTV portal access, weekly drone inspection updates, dedicated site supervisor, and IS-code quality audits."
  },
  {
    number: "07",
    title: "Dream Home Handover",
    description: "Final quality checks and handover.",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    details: "100-point inspection check, deep cleaning, key handover ceremony, and 10-year structural warranty certificate."
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "engineers",
    title: "Experienced Civil Engineers",
    description: "Precision, safety, long-term durability, proven engineering practices.",
    icon: "HardHat"
  },
  {
    id: "architects",
    title: "Expert Architects",
    description: "Functional, visually appealing designs balancing creativity, comfort, practicality.",
    icon: "Compass"
  },
  {
    id: "designers",
    title: "Professional Interior Designers",
    description: "Stylish, functional interiors reflecting personality and lifestyle.",
    icon: "Palette"
  },
  {
    id: "partners",
    title: "Premium Material Partners",
    description: "Trusted suppliers for superior finishes, durability, lasting value.",
    icon: "Truck"
  },
  {
    id: "transparency",
    title: "Transparent Process",
    description: "Clear communication throughout; clients informed on progress, timelines, decisions.",
    icon: "CheckCircle"
  },
  {
    id: "monitoring",
    title: "Project Monitoring",
    description: "Close tracking to keep schedule and standards on track.",
    icon: "BarChart3"
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description: "Strict quality control at every stage.",
    icon: "ShieldAlert"
  }
];
