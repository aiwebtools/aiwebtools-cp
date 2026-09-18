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
import { getGptRoomTheme, getRoomMotto } from "./gptRoomThemes";

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

  // Two clear choices read far better than a confusing wall of four.
  const starters = useMemo(() => (app?.starter_prompts ?? []).slice(0, 2), [app]);
  const theme = useMemo(() => getGptRoomTheme(app?.slug, tool?.category), [app?.slug, tool?.category]);
  const motto = useMemo(() => getRoomMotto(theme), [theme]);

  if (!app) return null;

  return (
    <section
      className={`mb-6 overflow-hidden rounded-2xl border ${theme.frame}`}
      aria-label={`Run ${app.display_name} here`}
    >
      {/* Console header plate */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-5">
        <Sparkles className={`h-4 w-4 shrink-0 ${theme.headline}`} aria-hidden="true" />
        <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${theme.headline}`}>
          {theme.roomLabel}
        </span>
        <h2 className="w-full text-base font-bold uppercase tracking-wide text-white sm:w-auto sm:border-l sm:border-white/15 sm:pl-3">
          {app.display_name}
        </h2>
        <Link
          to={`/app/${app.slug}`}
          className={`ml-auto inline-flex items-center gap-1 text-xs ${theme.accent}`}
        >
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
          Full screen
        </Link>
      </div>

      <div className="p-4 sm:p-5">
        <div className={`max-h-[460px] space-y-3 overflow-y-auto rounded-xl border p-4 ${theme.well}`}>
          {messages.length === 0 && (
            <div>
              <p className="text-sm leading-relaxed text-gray-200">
                {app.greeting || `Hello. I am ${app.display_name}. What would you like to work on?`}
              </p>
              {app.supports_images && (
                <p
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] ${theme.chip}`}
                >
                  <ImageIcon className="h-3 w-3" aria-hidden="true" /> Creates pictures inside this chat
                </p>
              )}
              {starters.length > 0 && (
                <>
                  <p className={`mt-4 text-[10px] font-bold uppercase tracking-[0.25em] ${theme.headline}`}>
                    Start here
                  </p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {starters.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => send(prompt)}
                        className={`rounded-lg border px-3 py-2.5 text-left text-sm leading-snug transition ${theme.chip}`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {messages.map((message, index) => (
            <article
              key={`${message.role}-${index}`}
              className={
                message.role === "user"
                  ? `ml-auto max-w-[85%] rounded-xl px-3 py-2 text-sm ${theme.userBubble}`
                  : `mr-auto max-w-[95%] rounded-xl border px-3 py-2 text-sm ${theme.botBubble}`
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

        {/* Wide typing deck — full width, roomy, send sits under it */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className={`mt-4 rounded-xl border p-3 ${theme.input}`}
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
            placeholder={theme.placeholder}
            rows={3}
            maxLength={6000}
            className="min-h-[110px] w-full resize-y border-0 bg-transparent p-0 text-base leading-relaxed text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 pt-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
              Enter to send · Shift + Enter for a new line
            </span>
            <Button
              type="submit"
              disabled={streaming || !input.trim()}
              className={`h-10 gap-2 px-5 font-bold ${theme.send}`}
            >
              {streaming ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Working…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send
                </>
              )}
            </Button>
          </div>
        </form>

        {!session && (
          <p className="mt-2 text-xs text-gray-500">
            Free to try — 10 messages a day.{" "}
            <Link to={`/join?next=/app/${app.slug}`} className={`font-semibold ${theme.accent}`}>
              Create a free account
            </Link>{" "}
            to save your chats and get more.
          </p>
        )}
      </div>

      <div
        className={`border-t border-white/10 px-4 py-2 text-center text-[10px] font-bold tracking-[0.3em] ${theme.motto}`}
      >
        {motto}
      </div>
    </section>
  );
};

export default InSiteGptRunner;
