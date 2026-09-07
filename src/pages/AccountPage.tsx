import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, LogOut, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuthSession } from "@/hooks/useAuthSession";
import { buildCanonicalUrl } from "@/utils/seo";

interface AppRow {
  slug: string;
  display_name: string;
  tagline: string | null;
}

const AccountPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading } = useAuthSession();

  const [displayName, setDisplayName] = useState("");
  const [prefTools, setPrefTools] = useState(true);
  const [prefDigest, setPrefDigest] = useState(true);
  const [saving, setSaving] = useState(false);
  const [usage, setUsage] = useState<number>(0);
  const [apps, setApps] = useState<AppRow[]>([]);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [recent, setRecent] = useState<{ id: string; app_slug: string; title: string | null }[]>([]);


  useEffect(() => {
    if (!loading && !user) navigate("/join?next=/account", { replace: true });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    let alive = true;

    supabase
      .from("profiles")
      .select("display_name, pref_new_tools, pref_weekly_digest")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (!alive || !data) return;
        setDisplayName(data.display_name ?? "");
        setPrefTools(data.pref_new_tools);
        setPrefDigest(data.pref_weekly_digest);
      });

    supabase
      .from("gpt_usage")
      .select("message_count")
      .eq("user_id", user.id)
      .eq("usage_date", new Date().toISOString().slice(0, 10))
      .maybeSingle()
      .then(({ data }) => {
        if (alive) setUsage(data?.message_count ?? 0);
      });

    supabase
      .from("gpt_apps")
      .select("slug, display_name, tagline")
      .eq("is_active", true)
      .order("display_name")
      .limit(200)
      .then(({ data }) => {
        if (alive) setApps((data as AppRow[]) ?? []);
      });

    supabase
      .from("gpt_favorites")
      .select("app_slug")
      .eq("user_id", user.id)
      .then(({ data }) => {
        if (alive) setSavedSlugs((data ?? []).map((row) => row.app_slug as string));
      });

    supabase
      .from("gpt_conversations")
      .select("id, app_slug, title")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(8)
      .then(({ data }) => {
        if (alive) setRecent((data as { id: string; app_slug: string; title: string | null }[]) ?? []);
      });

    return () => {
      alive = false;
    };
  }, [user]);

  const savedApps = useMemo(
    () => apps.filter((app) => savedSlugs.includes(app.slug)),
    [apps, savedSlugs],
  );
  const appName = (slug: string) => apps.find((a) => a.slug === slug)?.display_name ?? slug;


  const remaining = useMemo(() => Math.max(0, 60 - usage), [usage]);

  const save = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        display_name: displayName.trim().slice(0, 60) || null,
        pref_new_tools: prefTools,
        pref_weekly_digest: prefDigest,
      })
      .eq("id", user.id);
    setSaving(false);
    toast(
      error
        ? { title: "Could not save", description: error.message, variant: "destructive" }
        : { title: "Saved", description: "Your preferences are updated." },
    );
  };

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-12 text-foreground">
      <Helmet>
        <title>Your AIWebTools Account</title>
        <meta name="description" content="Manage your AIWebTools.ai account, email preferences and in-site AI tools." />
        <link rel="canonical" href={buildCanonicalUrl("/account")} />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <div className="mx-auto w-full max-w-3xl space-y-8">
        <header className="flex flex-wrap items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-primary">Your account</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <Button
            variant="outline"
            className="ml-auto"
            onClick={async () => {
              await supabase.auth.signOut();
              navigate("/", { replace: true });
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </header>

        <section className="rounded-2xl border border-primary/25 bg-card/60 p-5">
          <h2 className="mb-4 text-lg font-semibold">Profile &amp; email</h2>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Display name</Label>
              <Input id="name" value={displayName} maxLength={60} onChange={(e) => setDisplayName(e.target.value)} />
            </div>
            <label className="flex items-start gap-2 text-sm">
              <Checkbox checked={prefTools} onCheckedChange={(v) => setPrefTools(v === true)} />
              <span>Email me when new AI tools are added</span>
            </label>
            <label className="flex items-start gap-2 text-sm">
              <Checkbox checked={prefDigest} onCheckedChange={(v) => setPrefDigest(v === true)} />
              <span>Send me the weekly AI digest</span>
            </label>
            <Button onClick={save} disabled={saving}>
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Save preferences
            </Button>
          </div>
        </section>

        <section className="rounded-2xl border border-primary/25 bg-card/60 p-5">
          <h2 className="text-lg font-semibold">Today&apos;s in-site usage</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {usage} of 60 messages used — {remaining} left. Your allowance resets at midnight UTC.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/25 bg-card/60 p-5">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" /> In-site AI tools ({apps.length})
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {apps.map((app) => (
              <Link
                key={app.slug}
                to={`/app/${app.slug}`}
                className="rounded-lg border border-border/70 bg-background/60 p-3 transition hover:border-primary/50"
              >
                <span className="block text-sm font-semibold text-foreground">{app.display_name}</span>
                {app.tagline && <span className="mt-1 block text-xs text-muted-foreground">{app.tagline}</span>}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
