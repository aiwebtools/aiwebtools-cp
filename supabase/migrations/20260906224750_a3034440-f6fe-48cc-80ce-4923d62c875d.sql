ALTER TABLE public.gpt_apps ADD COLUMN IF NOT EXISTS supports_images BOOLEAN NOT NULL DEFAULT false;

UPDATE public.gpt_apps a
SET supports_images = true
FROM public.gpt_app_prompts p
WHERE p.app_slug = a.slug
  AND p.system_prompt ~* '(image|dall|infographic|illustrat|visual|diagram|picture|photo|logo|artwork|chart)';

CREATE TABLE IF NOT EXISTS public.gpt_favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  app_slug TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, app_slug)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.gpt_favorites TO authenticated;
GRANT ALL ON public.gpt_favorites TO service_role;
ALTER TABLE public.gpt_favorites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage their own saved bots" ON public.gpt_favorites;
CREATE POLICY "Users manage their own saved bots"
ON public.gpt_favorites FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Public can view generated GPT images" ON storage.objects;
CREATE POLICY "Public can view generated GPT images"
ON storage.objects FOR SELECT
USING (bucket_id = 'gpt-images');