
-- Allow anon + authenticated to upload only into user-submitted/ prefix of tool-images
DROP POLICY IF EXISTS "Public can upload user submitted tool images" ON storage.objects;
CREATE POLICY "Public can upload user submitted tool images"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    bucket_id = 'tool-images'
    AND (storage.foldername(name))[1] = 'user-submitted'
  );
