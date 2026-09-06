
CREATE TABLE public.gpt_apps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  display_name text NOT NULL,
  tool_title text,
  tagline text,
  greeting text,
  starter_prompts text[] NOT NULL DEFAULT '{}',
  system_prompt text NOT NULL,
  model text NOT NULL DEFAULT 'google/gemini-3.7-flash',
  source_file text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.gpt_apps TO service_role;
ALTER TABLE public.gpt_apps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage gpt apps" ON public.gpt_apps FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE VIEW public.gpt_public
WITH (security_invoker = off) AS
  SELECT slug, display_name, tool_title, tagline, greeting, starter_prompts, updated_at
  FROM public.gpt_apps WHERE is_active;
GRANT SELECT ON public.gpt_public TO anon, authenticated;

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  email text,
  pref_new_tools boolean NOT NULL DEFAULT true,
  pref_weekly_digest boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.gpt_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  app_slug text NOT NULL,
  title text NOT NULL DEFAULT 'New conversation',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_gpt_conversations_user ON public.gpt_conversations (user_id, updated_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gpt_conversations TO authenticated;
GRANT ALL ON public.gpt_conversations TO service_role;
ALTER TABLE public.gpt_conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own conversations" ON public.gpt_conversations FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.gpt_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.gpt_conversations(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user','assistant')),
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_gpt_messages_conv ON public.gpt_messages (conversation_id, created_at);
GRANT SELECT, INSERT, DELETE ON public.gpt_messages TO authenticated;
GRANT ALL ON public.gpt_messages TO service_role;
ALTER TABLE public.gpt_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own messages" ON public.gpt_messages FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.gpt_usage (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  usage_date date NOT NULL DEFAULT (now() AT TIME ZONE 'utc')::date,
  message_count integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, usage_date)
);
GRANT SELECT ON public.gpt_usage TO authenticated;
GRANT ALL ON public.gpt_usage TO service_role;
ALTER TABLE public.gpt_usage ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own usage" ON public.gpt_usage FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.ai_digests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_date date NOT NULL UNIQUE,
  title text NOT NULL,
  summary text,
  html text NOT NULL,
  markdown text,
  status text NOT NULL DEFAULT 'draft',
  sent_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_ai_digests_date ON public.ai_digests (issue_date DESC);
GRANT SELECT ON public.ai_digests TO anon, authenticated;
GRANT ALL ON public.ai_digests TO service_role;
ALTER TABLE public.ai_digests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone reads published digests" ON public.ai_digests FOR SELECT TO anon, authenticated
  USING (status = 'published');
CREATE POLICY "Admins manage digests" ON public.ai_digests FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_gpt_apps_updated BEFORE UPDATE ON public.gpt_apps
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
