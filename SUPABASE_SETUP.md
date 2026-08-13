# Supabase Setup Guide

This document describes how to configure the Supabase project to support the Zentech Construction application in both development and production.

## 1. Environment Variables

### Frontend (.env & Vercel Settings)
Configure the following keys in your Vercel Deployment Settings under Environment Variables (under **Settings → Environment Variables**):

```env
VITE_SUPABASE_URL=https://sjgazzkfvoesmjxmsmjx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_F5n5SbJqlnRMYb3lU5CqBw_C0cS3gns
```

### Backend / API Handlers
```env
SUPABASE_URL=https://sjgazzkfvoesmjxmsmjx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_secret_service_role_key
SESSION_SECRET=a_secure_random_hash_for_cookie_signing
```

---

## 2. Database Schema

Execute the following commands in the Supabase SQL Editor:

```sql
-- 1. Create Projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    technologies TEXT[],
    github_url TEXT,
    live_url TEXT
);

-- 2. Create Products table
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT
);

-- 3. Create Admin Users table for authentication matching admin panel logic
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'admin' NOT NULL
);
```

---

## 3. Storage Setup

Create the following storage buckets in the Supabase Storage Dashboard:

1. **projects** (Set to **Public**)
2. **products** (Set to **Public**)

Set the access parameters to allow public viewing.

---

## 4. Row Level Security (RLS) Policies

Enable Row Level Security (RLS) on both tables and execute these policies:

```sql
-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 1. Policy for Projects (Anonymous users can read)
CREATE POLICY "Allow public read access" ON public.projects
    FOR SELECT USING (true);

CREATE POLICY "Allow admin write access" ON public.projects
    FOR ALL USING (auth.role() = 'service_role');

-- 2. Policy for Products (Anonymous users can read)
CREATE POLICY "Allow public read access" ON public.products
    FOR SELECT USING (true);

CREATE POLICY "Allow admin write access" ON public.products
    FOR ALL USING (auth.role() = 'service_role');
```
