import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Loader2, Send, Sparkles, Maximize2, ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuthSession } from "@/hooks/useAuthSession";
import { Tool } from "@/types/tools";
import { getGuestId } from "@/utils/guestId";

interface GptApp {
  slug: string;
  display_name: string;
  tagline: string | null;
  greeting: string | null;
  starter_prompts: string[] | null;
  supports_images: boolean | null;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const FUNCTIONS_URL = "https://huupailptzvcykyqdkar.supabase.co/functions/v1/run-gpt-app";

/**
 * Runs the real, working in-site version of an AIWebTools GPT directly on the
 * tool page. Free for everyone, with a small daily allowance for visitors who
 * are not signed in. Renders nothing when this tool has no hosted counterpart.
 */
const InSiteGptRunner = ({ tool }: { tool: Tool }) => {
  const { session } = useAuthSession();
  const [app, setApp] = useState<GptApp | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const conversationIdRef = useRef<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let alive = true;
    if (!tool?.title) return;
    setApp(null);
    setMessages([]);
    setNotice(null);
    conversationIdRef.current = null;

    supabase
      .from("gpt_apps")
      .select("slug, display_name, tagline, greeting, starter_prompts, supports_images")
      .eq("tool_title", tool.title)
      .eq("is_active", true)
      .maybeSingle()
      .then(({ data }) => {
        if (alive) setApp((data as GptApp) ?? null);
      });

    return () => {
      alive = false;
    };
  }, [tool?.title]);

  useEffect(() => {
    if (streaming) bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, streaming]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming || !app) return;

      const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
      setMessages(nextMessages);
      setInput("");
      setStreaming(true);
      setNotice(null);

      try {
        const response = await fetch(FUNCTIONS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}),
          },
          body: JSON.stringify({
            slug: app.slug,
            conversationId: conversationIdRef.current,
            messages: nextMessages,
            ...(session ? {} : { guestId: getGuestId() }),
          }),
        });

        const convId = response.headers.get("X-Conversation-Id");
        if (convId) conversationIdRef.current = convId;

        if (!response.ok || !response.body) {
          const detail = await response.json().catch(() => ({}));
          throw new Error(detail?.error || "This tool is unavailable right now.");
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
              const delta = JSON.parse(payload)?.choices?.[0]?.delta?.content;
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
        setNotice(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        setMessages(nextMessages);
      } finally {
        setStreaming(false);
      }
    },
    [app, messages, session, streaming],
  );

  const starters = useMemo(() => (app?.starter_prompts ?? []).slice(0, 3), [app]);

  if (!app) return null;

  return (
    <section
      className="mb-6 rounded-2xl border border-green-500/40 bg-black/60 p-4 sm:p-5 shadow-lg shadow-green-500/10"
      aria-label={`Run ${app.display_name} here`}
    >
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
        <h2 className="text-sm font-bold uppercase tracking-wide text-green-300">
          Run {app.display_name} right here — free
        </h2>
        <Link
          to={`/app/${app.slug}`}
          className="ml-auto inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
        >
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
          Full screen
        </Link>
      </div>

      <div className="max-h-[420px] space-y-3 overflow-y-auto rounded-xl border border-green-500/20 bg-gray-950/70 p-3">
        {messages.length === 0 && (
          <div>
            <p className="text-sm text-gray-300">
              {app.greeting || `Hello. I am ${app.display_name}. What would you like to work on?`}
            </p>
            {app.supports_images && (
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 px-3 py-1 text-xs text-gray-400">
                <ImageIcon className="h-3 w-3" aria-hidden="true" /> This tool can create pictures for you
              </p>
            )}
            {starters.length > 0 && (
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {starters.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-lg border border-green-500/25 bg-black/40 p-2 text-left text-xs text-gray-400 transition hover:text-green-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((message, index) => (
          <article
            key={`${message.role}-${index}`}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-xl bg-green-500/15 px-3 py-2 text-sm text-gray-100"
                : "mr-auto max-w-[95%] rounded-xl border border-green-500/20 bg-black/50 px-3 py-2 text-sm text-gray-200"
            }
          >
            {message.role === "assistant" ? (
              <div className="prose prose-sm prose-invert max-w-none prose-img:rounded-xl">
                <ReactMarkdown>{message.content || "…"}</ReactMarkdown>
              </div>
            ) : (
              <p className="whitespace-pre-wrap">{message.content}</p>
            )}
          </article>
        ))}
        <div ref={bottomRef} />
      </div>

      {notice && <p className="mt-2 text-xs text-yellow-300">{notice}</p>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="mt-3 flex items-end gap-2"
      >
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
          placeholder="Ask anything…"
          rows={1}
          maxLength={6000}
          className="max-h-32 min-h-[44px] resize-none border-green-500/30 bg-black/50 text-sm"
        />
        <Button type="submit" size="icon" disabled={streaming || !input.trim()} aria-label="Send message">
          {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </form>

      {!session && (
        <p className="mt-2 text-xs text-gray-500">
          Free to try — 10 messages a day.{" "}
          <Link to={`/join?next=/app/${app.slug}`} className="font-semibold text-green-400 hover:underline">
            Create a free account
          </Link>{" "}
          to save your chats and get more.
        </p>
      )}
    </section>
  );
};

export default InSiteGptRunner;
