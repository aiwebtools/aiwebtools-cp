-- Replace overpermissive UPDATE/DELETE policies on tool-images with owner-scoped + admin policies
DROP POLICY IF EXISTS "Authenticated users can update tool images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete tool images" ON storage.objects;

CREATE POLICY "Users can update their own tool images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'tool-images' AND auth.uid() = owner)
WITH CHECK (bucket_id = 'tool-images' AND auth.uid() = owner);

CREATE POLICY "Users can delete their own tool images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'tool-images' AND auth.uid() = owner);

CREATE POLICY "Admins can update any tool image"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'tool-images' AND public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (bucket_id = 'tool-images' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete any tool image"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'tool-images' AND public.has_role(auth.uid(), 'admin'::app_role));