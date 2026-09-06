import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Loader2, Send, ArrowLeft, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuthSession } from "@/hooks/useAuthSession";
import { buildCanonicalUrl } from "@/utils/seo";

interface GptApp {
  slug: string;
  display_name: string;
  tool_title: string | null;
  tagline: string | null;
  greeting: string | null;
  starter_prompts: string[];
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
  const { session, loading: sessionLoading } = useAuthSession();

  const [app, setApp] = useState<GptApp | null>(null);
  const [loadingApp, setLoadingApp] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const conversationIdRef = useRef<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let alive = true;
    setLoadingApp(true);
    supabase
      .from("gpt_apps")
      .select("slug, display_name, tool_title, tagline, greeting, starter_prompts")
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, streaming]);

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${app.display_name} — Run it free on AIWebTools.ai`}</title>
        <meta
          name="description"
          content={app.tagline || `Run ${app.display_name} directly on AIWebTools.ai — the in-site version of this custom GPT.`}
        />
        <link rel="canonical" href={buildCanonicalUrl(`/app/${app.slug}`)} />
      </Helmet>

      <header className="sticky top-0 z-20 border-b border-primary/20 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="min-w-0">
            <h1 className="truncate text-base font-bold text-primary">{app.display_name}</h1>
            {app.tagline && <p className="truncate text-xs text-muted-foreground">{app.tagline}</p>}
          </div>
          <Link to="/account" className="ml-auto text-xs text-muted-foreground hover:text-primary">
            Account
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 pb-40 pt-6">
        {messages.length === 0 && (
          <section className="rounded-2xl border border-primary/25 bg-card/60 p-5">
            <Sparkles className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
            <p className="text-sm text-foreground/90">
              {app.greeting || `Hello. I am ${app.display_name}. What would you like to work on?`}
            </p>
            {starters.length > 0 && (
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {starters.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-lg border border-border/70 bg-background/60 p-3 text-left text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
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
                ? "ml-auto max-w-[85%] rounded-2xl bg-primary/15 px-4 py-3 text-sm"
                : "mr-auto max-w-[92%] rounded-2xl border border-border/60 bg-card/60 px-4 py-3 text-sm"
            }
          >
            {message.role === "assistant" ? (
              <div className="prose prose-sm prose-invert max-w-none">
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
        className="fixed inset-x-0 bottom-0 z-20 border-t border-primary/20 bg-background/95 p-3 backdrop-blur"
      >
        <div className="mx-auto flex max-w-3xl items-end gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            placeholder={session ? "Ask anything…" : "Sign in free to start chatting"}
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
