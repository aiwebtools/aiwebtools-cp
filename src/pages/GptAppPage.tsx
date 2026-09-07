import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Loader2, Send, ArrowLeft, Star, ImageIcon, Repeat } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuthSession } from "@/hooks/useAuthSession";
import { buildCanonicalUrl } from "@/utils/seo";
import { getGptAppTheme } from "@/utils/gptAppTheme";

interface GptApp {
  slug: string;
  display_name: string;
  tool_title: string | null;
  tagline: string | null;
  greeting: string | null;
  starter_prompts: string[];
  supports_images?: boolean | null;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const FUNCTIONS_URL = "https://huupailptzvcykyqdkar.supabase.co/functions/v1/run-gpt-app";

const GptAppPage = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { session, user, loading: sessionLoading } = useAuthSession();

  const [app, setApp] = useState<GptApp | null>(null);
  const [loadingApp, setLoadingApp] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [siblings, setSiblings] = useState<GptApp[]>([]);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const conversationIdRef = useRef<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const theme = useMemo(() => getGptAppTheme(slug, app?.display_name ?? ""), [slug, app]);

  useEffect(() => {
    let alive = true;
    setLoadingApp(true);
    setMessages([]);
    conversationIdRef.current = null;
    supabase
      .from("gpt_apps")
      .select("slug, display_name, tool_title, tagline, greeting, starter_prompts, supports_images")
      .eq("slug", slug)
      .eq("is_active", true)
      .maybeSingle()
      .then(({ data }) => {
        if (!alive) return;
        setApp((data as GptApp) ?? null);
        setLoadingApp(false);
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  // Resume the most recent conversation for this bot, and load the saved state.
  useEffect(() => {
    if (!user || !slug) return;
    let alive = true;

    supabase
      .from("gpt_conversations")
      .select("id")
      .eq("user_id", user.id)
      .eq("app_slug", slug)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(async ({ data }) => {
        if (!alive || !data?.id) return;
        const { data: rows } = await supabase
          .from("gpt_messages")
          .select("role, content")
          .eq("conversation_id", data.id)
          .order("created_at", { ascending: true })
          .limit(60);
        if (!alive || !rows?.length) return;
        conversationIdRef.current = data.id;
        setMessages(rows as ChatMessage[]);
      });

    supabase
      .from("gpt_favorites")
      .select("app_slug")
      .eq("user_id", user.id)
      .eq("app_slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        if (alive) setFavorite(Boolean(data));
      });

    supabase
      .from("gpt_apps")
      .select("slug, display_name, tagline")
      .eq("is_active", true)
      .order("display_name")
      .limit(300)
      .then(({ data }) => {
        if (alive) setSiblings((data as GptApp[]) ?? []);
      });

    return () => {
      alive = false;
    };
  }, [user, slug]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, streaming]);

  useEffect(() => {
    if (!streaming) inputRef.current?.focus();
  }, [streaming, slug]);

  const toggleFavorite = useCallback(async () => {
    if (!user) {
      navigate(`/join?next=/app/${slug}`);
      return;
    }
    if (favorite) {
      setFavorite(false);
      await supabase.from("gpt_favorites").delete().eq("user_id", user.id).eq("app_slug", slug);
    } else {
      setFavorite(true);
      const { error } = await supabase.from("gpt_favorites").insert({ user_id: user.id, app_slug: slug });
      if (error) setFavorite(false);
    }
  }, [favorite, navigate, slug, user]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming) return;
      if (!session) {
        navigate(`/join?next=/app/${slug}`);
        return;
      }

      const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
      setMessages(nextMessages);
      setInput("");
      setStreaming(true);

      try {
        const response = await fetch(FUNCTIONS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            slug,
            conversationId: conversationIdRef.current,
            messages: nextMessages,
          }),
        });

        const convId = response.headers.get("X-Conversation-Id");
        if (convId) conversationIdRef.current = convId;

        if (!response.ok || !response.body) {
          const detail = await response.json().catch(() => ({}));
          throw new Error(detail?.error || "The assistant is unavailable right now.");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let assistant = "";
        setMessages([...nextMessages, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const payload = line.slice(6).trim();
            if (!payload || payload === "[DONE]") continue;
            try {
              const parsed = JSON.parse(payload);
              const delta = parsed?.choices?.[0]?.delta?.content;
              if (typeof delta === "string" && delta) {
                assistant += delta;
                setMessages([...nextMessages, { role: "assistant", content: assistant }]);
              }
            } catch {
              /* partial frame */
            }
          }
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Something went wrong.";
        toast({ title: "Assistant paused", description: message, variant: "destructive" });
        setMessages(nextMessages);
      } finally {
        setStreaming(false);
      }
    },
    [messages, navigate, session, slug, streaming, toast],
  );

  const starters = useMemo(() => app?.starter_prompts?.slice(0, 4) ?? [], [app]);

  if (loadingApp || sessionLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
        <h1 className="text-2xl font-bold text-primary">This in-site tool is not available</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          It may have been renamed or retired. Browse the directory to find the tool you need.
        </p>
        <Button asChild>
          <Link to="/">Back to the directory</Link>
        </Button>
      </div>
    );
  }

  const themeVars = {
    "--bot-accent": theme.accent,
    "--bot-soft": theme.accentSoft,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-background text-foreground" style={themeVars}>
      <Helmet>
        <title>{`${app.display_name} — Run it free on AIWebTools.ai`}</title>
        <meta
          name="description"
          content={app.tagline || `Run ${app.display_name} directly on AIWebTools.ai — the in-site version of this custom GPT.`}
        />
        <link rel="canonical" href={buildCanonicalUrl(`/app/${app.slug}`)} />
      </Helmet>

      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, hsl(var(--bot-soft) / 0.85) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <header
        className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur"
        style={{ borderColor: "hsl(var(--bot-accent) / 0.35)" }}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg"
            style={{
              background: "hsl(var(--bot-accent) / 0.15)",
              boxShadow: "0 0 18px hsl(var(--bot-accent) / 0.35)",
            }}
            aria-hidden="true"
          >
            {theme.emblem}
          </span>
          <div className="min-w-0">
            <h1 className="truncate text-base font-bold" style={{ color: "hsl(var(--bot-accent))" }}>
              {app.display_name}
            </h1>
            <p className="truncate text-xs text-muted-foreground">
              {theme.vibe}
              {app.tagline ? ` · ${app.tagline}` : ""}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFavorite}
              aria-label={favorite ? "Remove from saved bots" : "Save this bot"}
              title={favorite ? "Saved" : "Save this bot"}
            >
              <Star className="h-4 w-4" fill={favorite ? "currentColor" : "none"} style={favorite ? { color: "hsl(var(--bot-accent))" } : undefined} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSwitcherOpen((v) => !v)}
              aria-label="Switch to another in-site tool"
              title="Switch tool"
            >
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {switcherOpen && (
          <div className="mx-auto max-w-3xl px-4 pb-3">
            <div className="max-h-64 overflow-y-auto rounded-xl border border-border/70 bg-card/80 p-2">
              {siblings.length === 0 && <p className="p-2 text-xs text-muted-foreground">Loading tools…</p>}
              {siblings.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    setSwitcherOpen(false);
                    navigate(`/app/${item.slug}`);
                  }}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-primary/10 ${
                    item.slug === slug ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {item.display_name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 pb-40 pt-6">
        {messages.length === 0 && (
          <section
            className="rounded-2xl border p-5"
            style={{
              borderColor: "hsl(var(--bot-accent) / 0.35)",
              background: "hsl(var(--bot-soft) / 0.45)",
            }}
          >
            <span className="mb-2 block text-2xl" aria-hidden="true">
              {theme.emblem}
            </span>
            <p className="text-sm text-foreground/90">
              {app.greeting || `Hello. I am ${app.display_name}. What would you like to work on?`}
            </p>
            {app.supports_images && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs text-muted-foreground"
                 style={{ borderColor: "hsl(var(--bot-accent) / 0.4)" }}>
                <ImageIcon className="h-3 w-3" aria-hidden="true" /> This tool can create pictures for you
              </p>
            )}
            {starters.length > 0 && (
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {starters.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-lg border border-border/70 bg-background/60 p-3 text-left text-xs text-muted-foreground transition hover:text-foreground"
                    style={{ borderColor: "hsl(var(--bot-accent) / 0.25)" }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            {!session && (
              <p className="mt-4 text-xs text-muted-foreground">
                <Link className="font-semibold text-primary hover:underline" to={`/join?next=/app/${app.slug}`}>
                  Create a free account
                </Link>{" "}
                to start the conversation.
              </p>
            )}
          </section>
        )}

        {messages.map((message, index) => (
          <article
            key={`${message.role}-${index}`}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-2xl px-4 py-3 text-sm"
                : "mr-auto max-w-[92%] rounded-2xl border border-border/60 bg-card/60 px-4 py-3 text-sm"
            }
            style={
              message.role === "user"
                ? { background: "hsl(var(--bot-accent) / 0.18)" }
                : undefined
            }
          >
            {message.role === "assistant" ? (
              <div className="prose prose-sm prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-border/60">
                <ReactMarkdown>{message.content || "…"}</ReactMarkdown>
              </div>
            ) : (
              <p className="whitespace-pre-wrap">{message.content}</p>
            )}
          </article>
        ))}
        <div ref={bottomRef} />
      </main>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="fixed inset-x-0 bottom-0 z-20 border-t bg-background/95 p-3 backdrop-blur"
        style={{ borderColor: "hsl(var(--bot-accent) / 0.35)" }}
      >
        <div className="mx-auto flex max-w-3xl items-end gap-2">
          <Textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            placeholder={
              session
                ? app.supports_images
                  ? "Ask anything — or ask for a picture…"
                  : "Ask anything…"
                : "Sign in free to start chatting"
            }
            rows={1}
            maxLength={6000}
            className="max-h-40 min-h-[46px] resize-none"
          />
          <Button type="submit" size="icon" disabled={streaming || !input.trim()} aria-label="Send message">
            {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GptAppPage;
