import { TestimonialItem, FaqItem, BlogPost } from '../types';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ravi-kumar",
    name: "Ravi Kumar",
    role: "Property Developer & Homeowner",
    companyOrType: "Luxury Villa Project",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    quote: "Zentech handled our construction project with exceptional professionalism and precision. Their team maintained clear communication, met every milestone on schedule, and ensured top-quality workmanship throughout. The final outcome exceeded our expectations.",
    rating: 5,
    projectType: "Turnkey Luxury Villa"
  },
  {
    id: "anjali-reddy",
    name: "Anjali Reddy",
    role: "Commercial Property Owner",
    companyOrType: "Carrefour Commercial Plaza",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    quote: "From planning to handover, the execution was smooth and well-coordinated. Their transparency in pricing and commitment to timelines gave us complete confidence. We highly appreciate their dedication to quality and accountability.",
    rating: 5,
    projectType: "28,000 sq.ft Commercial Complex"
  },
  {
    id: "suresh-patel",
    name: "Suresh Patel",
    role: "Industrial Project Client",
    companyOrType: "Infrastructure & Logistics Facility",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote: "The team demonstrated strong technical expertise and attention to detail at every stage. They delivered a structurally sound and aesthetically impressive project while staying within budget. A reliable partner for any construction project.",
    rating: 5,
    projectType: "Industrial Framed Facility"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How much does construction cost?",
    answer: "Costs vary depending on design, materials, and location. At Zentech, residential construction starts from ₹1,850/sq.ft for Standard Grade, ₹2,350/sq.ft for Premium Grade, and ₹3,200+/sq.ft for Luxury Living Grade with Italian marble, custom teak woodwork, and smart home automation. We provide a 100% transparent itemized estimate before contract signing."
  },
  {
    id: "faq-2",
    question: "Do you provide turnkey services?",
    answer: "Yes, we handle complete execution under a single contract. From soil testing and TUDA architectural approval drawings to civil construction, material supply, interior woodwork, electricals, sanitary fittings, painting, landscaping, and final deep cleaning before key handover."
  },
  {
    id: "faq-3",
    question: "Can you assist with approvals?",
    answer: "Yes, we support documentation and coordination for Tirupati Urban Development Authority (TUDA), Tirupati Municipal Corporation (TMC), environmental clearances, electricity board connection sanctioning, and water department sanctions."
  },
  {
    id: "faq-4",
    question: "Do you supply materials?",
    answer: "Yes, we provide bulk material supply directly from manufacturers. As one of Andhra Pradesh's premier bulk construction suppliers, we supply Vizag Steel, UltraTech Cement, Teakwood, Italian Marble, Kajaria tiles, Asian Paints, and Havells electricals at wholesale rates."
  },
  {
    id: "faq-5",
    question: "How do you ensure quality?",
    answer: "Through rigorous site supervision, material lab checks (slump test, cube compressive strength test, steel tensile test), IS-code engineering compliance, weekly senior engineer audits, and transparent live CCTV portal access for property owners."
  },
  {
    id: "faq-6",
    question: "What structural warranty does Zentech offer?",
    answer: "We issue an official 10-Year Structural Warranty certificate upon project handover along with 1-Year Free Maintenance support covering plumbing, electrical checks, and touch-ups."
  }
];

export const FAQ_ITEMS = FAQS;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "technology-in-construction",
    title: "The Growing Role of Technology in Construction",
    category: "Technology",
    date: "Feb 19, 2026",
    author: "Zentech Tech & Engineering Desk",
    readTime: "5 min read",
    excerpt: "From 3D BIM modeling and live drone site inspections to IoT camera tracking, discover how modern technology is cutting building delays and ensuring zero budget overshoots.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    content: [
      "The construction landscape across Andhra Pradesh is undergoing a massive digital revolution. Traditional paper blueprints and manual site attendance logs are rapidly giving way to 3D Building Information Modeling (BIM) and real-time remote surveillance.",
      "At Zentech, we integrate 3D VR walkthroughs prior to excavation, enabling clients to test material finishes, lighting setups, and spatial flow virtually. This eliminates costly on-site demolition rework.",
      "Furthermore, weekly drone mapping scans the structural frame during beam casting to verify millimeter accuracy against the CAD structural design. The result? 15% faster project delivery times and absolute peace of mind for non-resident Indian (NRI) property owners."
    ]
  },
  {
    id: "sustainable-construction-essential",
    title: "Why Sustainable Construction is Becoming Essential",
    category: "Sustainability",
    date: "Feb 19, 2026",
    author: "Zentech Green Architecture Team",
    readTime: "6 min read",
    excerpt: "Discover eco-friendly building practices: AAC blocks, solar reflection roof tiles, rainwater harvesting recharge wells, and low-E energy-saving glass for Rayalaseema homes.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
    content: [
      "Building a home in Rayalaseema requires careful thermal management due to high summer ambient temperatures. Sustainable construction isn't just an environmental choice—it directly reduces indoor temperatures by 4°C to 6°C and slashes monthly AC power bills by up to 35%.",
      "Using Autoclaved Aerated Concrete (AAC) blocks instead of traditional clay bricks provides superior thermal insulation while reducing structural dead weight.",
      "Pairing this with double-glazed low-E glass windows and rainwater percolation pits ensures your home remains resilient, eco-friendly, and cost-effective for generations."
    ]
  },
  {
    id: "modern-construction-trends",
    title: "Modern Construction Trends Shaping Today's Buildings",
    category: "Trending",
    date: "Jul 18, 2025",
    author: "Zentech Design Studio",
    readTime: "4 min read",
    excerpt: "Explore 2025/2026 architecture trends: double-height living atriums, seamless indoor-outdoor courtyards, fluted wood wall accents, and concealed smart ambient lighting.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    content: [
      "Homeowners today desire living spaces that breathe. We are seeing a huge demand for double-height living room atriums with floor-to-ceiling glass looking into private central gardens.",
      "In interior design, warm earth neutrals, Italian Statuario marble slabs, fluted teakwood paneling, and smart magnetic track lighting create a quiet luxury aesthetic.",
      "Zentech unifies these international architectural trends with local Indian building principles to deliver homes that feel like private sanctuaries."
    ]
  }
];
