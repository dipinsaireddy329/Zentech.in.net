import { ProductItem } from '../types';

export interface ProductCategoryCard {
  id: string;
  title: string;
  categoryFilter: string;
  division: string;
  tagline: string;
  mainImage: string;
  sideImage: string;
  bottomImages: string[];
}

export const PRODUCTS_CATALOG: ProductItem[] = [
  // Building Materials
  {
    id: "steel-tmt",
    name: "Primary TMT Rebars (Fe 550D)",
    category: "Steel",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=1200&auto=format&fit=crop",
    description: "High-ductility Fe 550D TMT steel rebars manufactured by Vizag Steel & Tata Tiscon, designed for superior seismic resistance and high tensile strength.",
    specifications: { "Grade": "Fe 550D", "Diameter": "8mm to 32mm", "Standards": "IS 1786:2008", "Features": "Earthquake Resistant, Corrosion Proof" },
    applications: ["Foundations", "Beams & Columns", "Retaining Walls", "Multistory Framed Structures"],
    isFeatured: true
  },
  {
    id: "cement-opc",
    name: "UltraTech & Coromandel OPC 53 Grade Cement",
    category: "Cement",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
    description: "Premium Ordinary Portland Cement (OPC 53 Grade) offering fast setting time and ultra-high initial compressive strength.",
    specifications: { "Grade": "OPC 53", "Packaging": "50kg Bags", "Standards": "IS 12269", "Setting Time": "Initial < 30 mins" },
    applications: ["RCC Slab Casting", "Precast Concrete", "Heavy Structural Foundations"],
    isFeatured: true
  },
  {
    id: "wood-teak",
    name: "CP Teakwood & Burma Teak Timber",
    category: "Wood",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=800&auto=format&fit=crop",
    description: "Seasoned, termite-resistant first-quality Teakwood ideal for luxury entrance doors, window frames, and structural columns.",
    specifications: { "Source": "Central Province / Burma", "Moisture": "< 12%", "Durability": "40+ Years", "Finish": "Raw / Polished" },
    applications: ["Main Entrance Doors", "Carved Wooden Columns", "Pergolas"],
    isFeatured: true
  },
  {
    id: "plywood-bwp",
    name: "BWP Grade Marine Plywood (IS 710)",
    category: "Plywood",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    description: "100% Boiling Water Proof (BWP) Marine Plywood with anti-termite chemical treatment for kitchen cabinets and wet areas.",
    specifications: { "Grade": "IS 710 BWP", "Thickness": "6mm, 12mm, 18mm, 25mm", "Warranty": "25 Years Guarantee" },
    applications: ["Modular Kitchen Cabinets", "Bathroom Vanity", "Wardrobe Frames"]
  },
  {
    id: "glass-toughened",
    name: "Saint-Gobain 12mm Toughened & DGU Glass",
    category: "Glass",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop",
    description: "High-performance heat-strengthened architectural glass offering acoustic insulation, solar heat reduction, and safety.",
    specifications: { "Thickness": "8mm, 10mm, 12mm, DGU 24mm", "Brand": "Saint-Gobain / Asahi", "Thermal Insulation": "Low-E Coating" },
    applications: ["Curtain Wall Facades", "Staircase Glass Balustrades", "Shower Enclosures"]
  },
  {
    id: "granite-black",
    name: "Black Galaxy & Vizag Blue Granite",
    category: "Granite",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
    description: "Premium polished natural granite slabs with high scratch resistance and deep luster for countertops and staircase steps.",
    specifications: { "Origin": "Andhra Pradesh Quarries", "Thickness": "18mm - 20mm", "Finish": "High Gloss Mirror Polish" },
    applications: ["Kitchen Countertops", "Staircases", "Elevator Cladding"],
    isFeatured: true
  },
  {
    id: "marble-italian",
    name: "Italian Statuario & Botticino Marble",
    category: "Marble",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
    description: "Export-grade imported Italian marble featuring elegant veining patterns, perfect for high-end villa flooring and feature walls.",
    specifications: { "Origin": "Carrara, Italy", "Thickness": "18mm", "Polish": "Resin-treated High Gloss" },
    applications: ["Living Room Flooring", "Feature TV Walls", "Master Bedroom Flooring"],
    isFeatured: true
  },
  {
    id: "tiles-vitrified",
    name: "Large Format Vitrified Porcelain Tiles (8x4 ft)",
    category: "Tiles",
    division: "Building Materials",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    description: "Seamless slab-sized glazed vitrified tiles with nano-polished surface and stain resistance.",
    specifications: { "Dimensions": "1200x2400mm / 800x1600mm", "Brand": "Kajaria / Simpolo", "Water Absorption": "< 0.05%" },
    applications: ["Commercial Floors", "Villa Main Halls", "Bathroom Wall Slabs"]
  },

  // Paints & Finishes
  {
    id: "paint-royal",
    name: "Asian Paints Royale Aspira Luxury Emulsion",
    category: "Paint",
    division: "Paints & Finishes",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    description: "Ultra-durable interior wall paint with Teflon surface protection, smooth sheen finish, and crack-bridging technology.",
    specifications: { "Finish": "Rich Sheen / Silk", "Washability": "Extreme", "Warranty": "8 Years" },
    applications: ["Bedrooms", "Living Spaces", "Executive Conference Rooms"]
  },
  {
    id: "paint-exterior",
    name: "Apex Ultima Protek Exterior Weatherproof Paint",
    category: "Exterior Paint",
    division: "Paints & Finishes",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    description: "Advanced nanotech exterior coating designed to withstand severe heat, heavy monsoon rain, and dampness in Rayalaseema.",
    specifications: { "Warranty": "10 Years Performance Warranty", "Algae Resistance": "Superior", "Elasticity": "High" },
    applications: ["Exterior Building Elevations", "Compound Walls", "Balcony Facades"]
  },

  // Electrical & Lighting
  {
    id: "electricals-copper",
    name: "Havells & Finolex Flame Retardant Copper Wires",
    category: "Electricals",
    division: "Electrical & Lighting",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    description: "100% electrolytic grade copper wires with FR-LSH (Flame Retardant Low Smoke Zero Halogen) insulation.",
    specifications: { "Guage": "1.0 sq mm to 16 sq mm", "Voltage": "1100V", "Certification": "IS 694" },
    applications: ["Internal House Wiring", "Distribution Boards", "Heavy AC Power Lines"],
    isFeatured: true
  },
  {
    id: "lighting-architectural",
    name: "Modular COB Spotlights & Magnetic Track Lights",
    category: "Lighting",
    division: "Electrical & Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    description: "Architectural glare-free anti-dazzle LED downlights and dimmable smart magnetic track lights.",
    specifications: { "CRI": "> 92 Ra", "Color Temp": "3000K Warm White / 4000K Neutral", "Lifespan": "50,000 Hours" },
    applications: ["False Ceiling Accent Lighting", "Art Wall Spotlighting", "Kitchen Island Lights"]
  },
  {
    id: "security-cctv",
    name: "Hikvision / CP Plus 4K IP Camera & Smart Lock System",
    category: "Security System",
    division: "Electrical & Lighting",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    description: "Smart home automation security kit including biometric door lock, video door phone, and remote CCTV mobile monitoring.",
    specifications: { "Resolution": "4K Ultra HD", "Connectivity": "Wi-Fi / Ethernet", "Lock Features": "Fingerprint, PIN, RFID, App" },
    applications: ["Main Entrance Villa Security", "Remote Site Monitoring"]
  },

  // Hardware & Fabrication
  {
    id: "hardware-door-lock",
    name: "Yale & Hafele Digital Smart Door Locks",
    category: "Hardware",
    division: "Hardware & Fabrication",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    description: "Keyless biometric fingerprint and passcode door access hardware crafted with solid brass and SS 304.",
    specifications: { "Material": "SS 304 / Brass", "Battery Backup": "Emergency Type-C", "Encryption": "AES 128-bit" },
    applications: ["Main Door", "Master Bedroom Suite", "Private Office Den"]
  },
  {
    id: "fabrication-ss-glass",
    name: "SS 304 Railings with Toughened Glass Panels",
    category: "Fabrication",
    division: "Hardware & Fabrication",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description: "Laser-cut custom stainless steel railings with seamless frameless glass brackets for staircases and balcony edges.",
    specifications: { "Grade": "SS 304 / SS 316", "Glass": "12mm Toughened Clear Glass" },
    applications: ["Duplex Villa Staircases", "Balcony Parapets", "Terrace Lounges"]
  },

  // Plumbing & Sanitary
  {
    id: "plumbing-cpvc",
    name: "Ashirvad & Astral CPVC Pro Pipes & Fittings",
    category: "Plumbing",
    division: "Plumbing & Sanitary",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    description: "Lead-free hot & cold water CPVC piping system tested up to 93°C temperature resistance.",
    specifications: { "Pressure Rating": "SDR 11 / SDR 13.5", "Standard": "ASTM D2846" },
    applications: ["Potable Water Supply", "Solar Water Heater Lines", "Bathroom Concealed Plumbing"]
  },
  {
    id: "sanitary-kohler",
    name: "Kohler & Jaquar Concealed Diverter & Wall-Hung Closet",
    category: "Sanitary Ware",
    division: "Plumbing & Sanitary",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    description: "Luxury matte black and chrome thermostat shower columns with rimless soft-close wall-hung water closets.",
    specifications: { "Finish": "Chrome / Brushed Bronze / Matte Black", "Warranty": "10 Years" },
    applications: ["Luxury Villa Bathrooms", "Suite Bathrooms", "Guest Powder Rooms"]
  },

  // Home Spaces
  {
    id: "space-kitchen",
    name: "German Engineered Island Modular Kitchen",
    category: "Kitchen",
    division: "Home Spaces",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    description: "Quartz stone breakfast counter, acrylic high-gloss shutters, tandem drawer units, and integrated Bosch appliances.",
    specifications: { "Hardware": "Hettich / Blum Soft Close", "Countertop": "Kalinga Quartz / Granite" },
    applications: ["Open Concept Kitchens", "Chef's Kitchen", "Dry & Wet Kitchen Layouts"],
    isFeatured: true
  },
  {
    id: "space-bedroom",
    name: "Custom Master Bedroom Wardrobe & Headboard Suite",
    category: "Bedroom",
    division: "Home Spaces",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    description: "Floor-to-ceiling tinted glass sliding wardrobes with sensor lighting, acoustic fabric headboard wall, and vanity dressers.",
    specifications: { "Carcass": "18mm BWP Marine Ply", "Shutters": "Fluted Glass / Italian Veneer" },
    applications: ["Master Suite Bedrooms", "Kids Bedrooms", "Guest Bedroom Suites"],
    isFeatured: true
  }
];

export const PRODUCT_CATEGORY_CARDS: ProductCategoryCard[] = [
  {
    id: "steel",
    title: "STEEL",
    categoryFilter: "Steel",
    division: "Building Materials",
    tagline: "Primary TMT Rebars, Structural Beams & MS Tubes",
    mainImage: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "cement",
    title: "CEMENT",
    categoryFilter: "Cement",
    division: "Building Materials",
    tagline: "OPC 53, PPC & Rapid Hardening Cements",
    mainImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "wood",
    title: "WOOD",
    categoryFilter: "Wood",
    division: "Building Materials",
    tagline: "CP Teak, Burma Teak & Hardwood Timber",
    mainImage: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "glass",
    title: "GLASS",
    categoryFilter: "Glass",
    division: "Building Materials",
    tagline: "Toughened, Double Glazed & Acoustic Glass",
    mainImage: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "paint",
    title: "PAINT",
    categoryFilter: "Paint",
    division: "Paints & Finishes",
    tagline: "Luxury Interior Emulsions & Exterior Coatings",
    mainImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "electricals",
    title: "ELECTRICALS",
    categoryFilter: "Electricals",
    division: "Electrical & Lighting",
    tagline: "FR Copper Wires, Modular Switches & Smart Panels",
    mainImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "ply-wood",
    title: "PLY WOOD",
    categoryFilter: "Plywood",
    division: "Building Materials",
    tagline: "IS 710 BWP Marine Plywood & Veneer Boards",
    mainImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "granite",
    title: "GRANITE",
    categoryFilter: "Granite",
    division: "Building Materials",
    tagline: "Black Galaxy, Vizag Blue & Polished Slabs",
    mainImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "marbles",
    title: "MARBLES",
    categoryFilter: "Marble",
    division: "Building Materials",
    tagline: "Italian Statuario, Botticino & Onyx Marble",
    mainImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "tiles",
    title: "TILES",
    categoryFilter: "Tiles",
    division: "Building Materials",
    tagline: "Large Format Vitrified Slabs & Ceramic Tiles",
    mainImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "hardware",
    title: "HARDWARE",
    categoryFilter: "Hardware",
    division: "Hardware & Fabrication",
    tagline: "Smart Locks, SS Hinges, Handles & Fittings",
    mainImage: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "plumbing",
    title: "PLUMBING",
    categoryFilter: "Plumbing",
    division: "Plumbing & Sanitary",
    tagline: "CPVC Pipes, Valves, Faucets & Fittings",
    mainImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "sanitary",
    title: "SANITARY",
    categoryFilter: "Sanitary Ware",
    division: "Plumbing & Sanitary",
    tagline: "Kohler & Jaquar Closets, Basins & Showers",
    mainImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "lighting",
    title: "LIGHTING",
    categoryFilter: "Lighting",
    division: "Electrical & Lighting",
    tagline: "Architectural Spotlights, Magnetic Tracks & Chandeliers",
    mainImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "doors-windows",
    title: "DOORS & WINDOWS",
    categoryFilter: "Door",
    division: "Building Materials",
    tagline: "Teakwood Entrance Doors & UPVC Sliding Windows",
    mainImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    sideImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    bottomImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop"
    ]
  }
];
