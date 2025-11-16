-- Create public storage bucket for tool images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'tool-images',
  'tool-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for tool-images bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'tool-images');

CREATE POLICY "Authenticated users can upload tool images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'tool-images' AND
  (storage.foldername(name))[1] = 'generated'
);

CREATE POLICY "Authenticated users can update tool images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'tool-images');

CREATE POLICY "Authenticated users can delete tool images"
ON storage.objects FOR DELETE
USING (bucket_id = 'tool-images');