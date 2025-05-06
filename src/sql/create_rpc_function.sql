
-- SQL function that can be run in the Supabase SQL Editor to create the RPC function
-- This will bypass the problematic RLS policy

CREATE OR REPLACE FUNCTION public.get_all_simulation_requests()
RETURNS SETOF public.simulation_requests
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.simulation_requests ORDER BY created_at DESC;
$$;
