import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
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

      let assistant = "";
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
        if (!assistant.trim()) {
          setMessages(nextMessages);
          setNotice("The assistant's reply was interrupted. Please try again.");
        }
      } catch (err) {
        setNotice(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        if (!assistant.trim()) setMessages(nextMessages);
      } finally {
        setStreaming(false);
      }
    },
    [app, messages, session, streaming],
  );

  // Two clear choices read far better than a confusing wall of four.
  const starters = useMemo(() => (app?.starter_prompts ?? []).slice(0, 2), [app]);
  const theme = useMemo(
    () => getGptRoomTheme(app?.slug, tool?.category, app?.display_name),
    [app?.display_name, app?.slug, tool?.category],
  );
  const motto = useMemo(() => getRoomMotto(theme), [theme]);

  if (!app) return null;

  return (
    <section
      className="gpt-room mb-6 overflow-hidden rounded-2xl border"
      data-room-pattern={theme.pattern}
      style={{
        "--bot-accent": theme.accent,
        "--bot-accent-2": theme.accent2,
        "--bot-soft": theme.soft,
        "--bot-deep": theme.deep,
      } as React.CSSProperties}
      aria-label={`Run ${app.display_name} here`}
    >
      {/* Console header plate */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-5">
        <span
          className="gpt-room-emblem grid h-9 w-9 shrink-0 place-items-center rounded-md border text-base"
          aria-hidden="true"
        >
          {theme.emblem}
        </span>
        <span className="gpt-room-accent text-[10px] font-bold uppercase tracking-[0.25em]">
          {theme.roomLabel} · {theme.consoleNumber}
        </span>
        <h2 className="min-w-0 w-full truncate text-base font-bold uppercase tracking-wide text-foreground sm:w-auto sm:max-w-[45%] sm:border-l sm:border-border sm:pl-3">
          {app.display_name}
        </h2>
        <Link
          to={`/app/${app.slug}`}
          className="gpt-room-accent ml-auto inline-flex items-center gap-1 text-xs"
        >
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
          Full screen
        </Link>
      </div>

      <div className="p-3 sm:p-5">
        <Conversation className="gpt-room-well h-[min(460px,55vh)] min-h-[260px] rounded-xl border">
          <ConversationContent className="gap-3 p-4">
          {messages.length === 0 && (
            <div>
              <p className="text-sm leading-relaxed text-foreground/90">
                {app.greeting || `Hello. I am ${app.display_name}. What would you like to work on?`}
              </p>
              {app.supports_images && (
                <p
                  className="gpt-room-chip mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px]"
                >
                  <ImageIcon className="h-3 w-3" aria-hidden="true" /> Creates pictures inside this chat
                </p>
              )}
              {starters.length > 0 && (
                <>
                  <p className="gpt-room-accent mt-4 text-[10px] font-bold uppercase tracking-[0.25em]">
                    Start here
                  </p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {starters.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => send(prompt)}
                        className="gpt-room-chip rounded-lg border px-3 py-2.5 text-left text-sm leading-snug transition"
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
            <Message
              key={`${message.role}-${index}`}
              from={message.role}
            >
              <MessageContent className={message.role === "user" ? "gpt-room-user-bubble text-foreground" : "text-foreground"}>
                {message.role === "assistant" ? (
                  (() => {
                    const { text, working } = splitImageProgress(message.content);
                    if (!text && !working) return <Shimmer>Thinking…</Shimmer>;
                    return (
                      <>
                        {text && <MessageResponse className="gpt-generated-content">{text}</MessageResponse>}
                        {working && <ImageProgress />}
                      </>
                    );
                  })()
                ) : <p className="whitespace-pre-wrap">{message.content}</p>}
              </MessageContent>
            </Message>
          ))}
          <div ref={bottomRef} />
          </ConversationContent>
          <ConversationScrollButton className="gpt-room-scroll" />
        </Conversation>

        {notice && <p className="mt-2 text-xs text-yellow-300">{notice}</p>}

        {/* Wide typing deck — full width, roomy, send sits under it */}
        <PromptInput
          onSubmit={({ text }) => send(text)}
          className="gpt-room-input mt-4 rounded-xl"
        >
          <PromptInputTextarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={theme.placeholder}
            rows={2}
            maxLength={6000}
            className="min-h-[80px] w-full resize-y bg-transparent text-base leading-relaxed text-foreground sm:min-h-[110px]"
          />
          <PromptInputFooter className="border-t border-border pt-2">
            <span className="gpt-room-accent text-[10px] font-bold uppercase tracking-[0.18em]">
              {theme.signature} · UNIT {theme.consoleNumber}
            </span>
            <PromptInputSubmit
              status={streaming ? "streaming" : "ready"}
              disabled={streaming || !input.trim()}
              className="gpt-room-send"
              aria-label={`Send to ${app.display_name}`}
            />
          </PromptInputFooter>
        </PromptInput>

        {!session && (
          <p className="mt-2 text-xs text-muted-foreground">
            Free to try — 10 messages a day.{" "}
            <Link to={`/join?next=/app/${app.slug}`} className="gpt-room-accent font-semibold">
              Create a free account
            </Link>{" "}
            to save your chats and get more.
          </p>
        )}
      </div>

      <div
        className="gpt-room-motto border-t px-4 py-2 text-center text-[10px] font-bold tracking-[0.3em]"
      >
        {motto}
      </div>
    </section>
  );
};

export default InSiteGptRunner;
