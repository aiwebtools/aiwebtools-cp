
DROP VIEW IF EXISTS public.gpt_public;

CREATE TABLE public.gpt_app_prompts (
  app_slug text PRIMARY KEY REFERENCES public.gpt_apps(slug) ON DELETE CASCADE,
  system_prompt text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.gpt_app_prompts TO service_role;
ALTER TABLE public.gpt_app_prompts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage gpt prompts" ON public.gpt_app_prompts FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.gpt_apps DROP COLUMN system_prompt;
GRANT SELECT ON public.gpt_apps TO anon, authenticated;
CREATE POLICY "Anyone reads active gpt apps" ON public.gpt_apps FOR SELECT TO anon, authenticated
  USING (is_active);

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
