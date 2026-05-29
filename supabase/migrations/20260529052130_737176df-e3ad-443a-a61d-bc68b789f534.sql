-- 1) Remove overly-permissive owner-based update/delete on tool-images bucket.
--    Only admins should mutate this bucket.
DROP POLICY IF EXISTS "Users can delete their own tool images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own tool images" ON storage.objects;

-- 2) Add explicit admin-only RLS policies for the private 'memory' bucket
--    so access control is documented and not reliant on default-deny.
DROP POLICY IF EXISTS "Admins can read memory bucket" ON storage.objects;
DROP POLICY IF EXISTS "Admins can insert memory bucket" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update memory bucket" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete memory bucket" ON storage.objects;

CREATE POLICY "Admins can read memory bucket"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'memory' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert memory bucket"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'memory' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update memory bucket"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'memory' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'memory' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete memory bucket"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'memory' AND public.has_role(auth.uid(), 'admin'));