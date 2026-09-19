import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";

/** Marker the server streams while a picture is being drawn. */
export const IMAGE_PLACEHOLDER = "_Creating your image…_";

/**
 * Splits streamed assistant text into the visible part and a flag telling us a
 * picture is still being drawn, so the chat can show a live counter instead of
 * a frozen-looking wall of text.
 */
export const splitImageProgress = (content: string) => {
  const index = content.indexOf(IMAGE_PLACEHOLDER);
  if (index === -1) return { text: content, working: false };
  const before = content.slice(0, index);
  const after = content.slice(index + IMAGE_PLACEHOLDER.length);
  // Once real content (the picture link) arrives after the marker, we are done.
  const working = after.trim().length === 0;
  return { text: (before + after).trim(), working };
};

/** Small live "drawing your picture" panel with an elapsed-seconds counter. */
export const ImageProgress = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="mt-2 flex flex-wrap items-center gap-2 rounded-xl border px-3 py-2 text-xs"
      style={{
        borderColor: "hsl(var(--bot-accent) / 0.4)",
        background: "hsl(var(--bot-soft) / 0.4)",
      }}
      role="status"
      aria-live="polite"
    >
      <ImageIcon
        className="h-4 w-4 animate-pulse"
        style={{ color: "hsl(var(--bot-accent))" }}
        aria-hidden="true"
      />
      <span className="font-semibold text-foreground/90">Drawing your picture…</span>
      <span className="tabular-nums text-muted-foreground">{seconds}s</span>
      <span className="text-muted-foreground">This can take up to a minute.</span>
    </div>
  );
};

export default ImageProgress;
