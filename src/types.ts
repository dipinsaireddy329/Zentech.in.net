export type PageRoute = 'home' | 'about' | 'services' | 'products' | 'projects' | 'gallery' | 'blogs' | 'faq' | 'contact' | 'admin' | 'admin-login' | 'admin-dashboard' | 'admin-inquiries' | 'admin-quotes' | 'admin-projects' | 'admin-materials' | 'admin-consultations' | 'admin-settings' | 'order';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  process: string[];
  applications: string[];
  category: 'core' | 'additional';
  heroImage: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  division: 'Building Materials' | 'Paints & Finishes' | 'Electrical & Lighting' | 'Hardware & Fabrication' | 'Plumbing & Sanitary' | 'Home Spaces';
  image: string;
  description: string;
  specifications: { [key: string]: string };
  applications: string[];
  isFeatured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Architecture' | 'Renovation' | 'Industrial';
  tags: string[];
  location: string;
  completionYear: string;
  area: string;
  client: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrType: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Technology' | 'Sustainability' | 'Trending' | 'Architecture';
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface QuoteFormData {
  name: string;
  mobile: string;
  email: string;
  location: string;
  quantity: string;
  requirement: string;
  projectType: 'Residential' | 'Commercial' | 'Interior' | 'Material Supply' | 'Turnkey' | 'Renovation';
  estimatedBudget?: string;
  selectedMaterials?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  name: string;
  mobile: string;
  email: string;
  visitType: 'Site Visit' | 'Experience Center Visit' | 'Virtual Video Consultation';
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
  projectType: string;
}

export interface OngoingProjectItem {
  id: string;
  title: string;
  location: string;
  client: string;
  projectType: string;
  totalAreaSqFt: number;
  currentPhase: string;
  progressPercentage: number;
  expectedCompletion: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  recentMilestones: {
    date: string;
    title: string;
    status: 'completed' | 'in-progress' | 'upcoming';
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Site Progress' | '3D Render' | 'Materials' | 'Residential' | 'Commercial' | 'Architecture' | 'Renovation' | string;
  url: string;
  description: string;
}

export interface QuoteBasketItem {
  product: ProductItem;
  quantity: number;
}

export type Product = {
  id: string;
  created_at: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  status: string;
};

export type Order = {
  id: string;
  created_at: string;
  customer_name: string;
  email: string;
  phone: string;
  address: string;
  product_id: string;
  quantity: number;
  total_price: number;
  order_status: string;
};
