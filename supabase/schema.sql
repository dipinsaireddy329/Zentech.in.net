-- Create Admin Users table linked to Supabase Auth.users
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('admin', 'staff')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    location TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Residential', 'Commercial', 'Interior', 'Architecture', 'Renovation', 'Industrial')),
    description TEXT NOT NULL,
    area TEXT NOT NULL,
    year TEXT NOT NULL,
    status TEXT NOT NULL,
    specifications TEXT[] DEFAULT '{}'::TEXT[] NOT NULL,
    images TEXT[] DEFAULT '{}'::TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Materials table
CREATE TABLE IF NOT EXISTS public.materials (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    unit TEXT NOT NULL,
    price NUMERIC NOT NULL,
    image TEXT NOT NULL,
    available BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Inquiries table (Contact form submissions)
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    project_type TEXT NOT NULL,
    location TEXT NOT NULL,
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'New'::text NOT NULL CHECK (status IN ('New', 'Contacted', 'In Progress', 'Completed', 'Closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Quote Requests table
CREATE TABLE IF NOT EXISTS public.quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    items JSONB DEFAULT '[]'::jsonb NOT NULL,
    estimated_cost NUMERIC NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'New'::text NOT NULL CHECK (status IN ('New', 'Contacted', 'In Progress', 'Completed', 'Closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create AI Consultations table
CREATE TABLE IF NOT EXISTS public.ai_consultations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_question TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_materials_category ON public.materials(category);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests(status);
