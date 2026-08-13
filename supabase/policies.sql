-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_consultations ENABLE ROW LEVEL SECURITY;

-- Helper function to check roles of the authenticated user
CREATE OR REPLACE FUNCTION public.check_user_role(required_roles text[])
RETURNS boolean SECURITY DEFINER AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid() AND role = ANY(required_roles)
  );
END;
$$ LANGUAGE plpgsql;

-- 1. Admin Users Policies
CREATE POLICY select_self ON public.admin_users
    FOR SELECT TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY manage_admin_users ON public.admin_users
    FOR ALL TO authenticated
    USING (public.check_user_role(ARRAY['admin']));

-- 2. Projects Policies
CREATE POLICY select_projects ON public.projects
    FOR SELECT USING (true);

CREATE POLICY write_projects ON public.projects
    FOR ALL TO authenticated
    USING (public.check_user_role(ARRAY['admin']));

-- 3. Materials Policies
CREATE POLICY select_materials ON public.materials
    FOR SELECT USING (true);

CREATE POLICY write_materials ON public.materials
    FOR ALL TO authenticated
    USING (public.check_user_role(ARRAY['admin']));

-- 4. Inquiries Policies (Public can submit; Admin/Staff can manage)
CREATE POLICY insert_inquiries ON public.inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY manage_inquiries ON public.inquiries
    FOR ALL TO authenticated
    USING (public.check_user_role(ARRAY['admin', 'staff']));

-- 5. Quote Requests Policies (Public can submit; Admin/Staff can manage)
CREATE POLICY insert_quotes ON public.quote_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY manage_quotes ON public.quote_requests
    FOR ALL TO authenticated
    USING (public.check_user_role(ARRAY['admin', 'staff']));

-- 6. AI Consultations Policies (Public can log; Admin can view/manage)
CREATE POLICY insert_ai ON public.ai_consultations
    FOR INSERT WITH CHECK (true);

CREATE POLICY manage_ai ON public.ai_consultations
    FOR ALL TO authenticated
    USING (public.check_user_role(ARRAY['admin']));
