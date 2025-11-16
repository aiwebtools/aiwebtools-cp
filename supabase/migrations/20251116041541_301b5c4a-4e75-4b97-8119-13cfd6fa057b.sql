-- Remove all write/upload policies from storage to prevent abuse
DROP POLICY IF EXISTS "Authenticated users can upload tool images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update tool images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete tool images" ON storage.objects;

-- Keep only read-only access (existing images can still be viewed)
-- The "Public Access" SELECT policy remains for viewing existing images