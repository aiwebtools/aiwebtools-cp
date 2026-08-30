import { memo, useEffect, useState } from "react";
import { Tool } from "@/types/tools";

/**
 * Small square thumbnail for tool cards / lists.
 * Shows the tool's own hero image (or its YouTube thumbnail) and only falls
 * back to the emoji when no media exists. Fully lazy — no first-paint cost.
 */

const youTubeThumb = (videoUrl?: string): string | undefined => {
  if (!videoUrl) return undefined;
  const id = videoUrl.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?/\s]{11})/,
  )?.[1];
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
};

/**
 * Discord CDN links are signed and expire, so every one of them now returns a
 * 404. Skip them entirely instead of paying for a failed request per card.
 */
const isExpiredHost = (url: string) =>
  url.includes("discordapp.net") || url.includes("cdn.discordapp.com");

export const resolveToolThumb = (
  tool: Pick<Tool, "imageUrl" | "videoUrl">,
  assets: Record<string, string> | null,
): string | undefined => {
  const raw = typeof tool.imageUrl === "string" ? tool.imageUrl.trim() : "";
  if (raw && isExpiredHost(raw)) return youTubeThumb(tool.videoUrl);
  if (raw && !raw.startsWith("/src/")) return raw;
  if (raw && assets?.[raw]) return assets[raw];
  return youTubeThumb(tool.videoUrl);
};

interface ToolThumbProps {
  tool: Tool;
  className?: string;
  /** Tailwind classes for the emoji fallback text size */
  emojiClassName?: string;
  rounded?: string;
}

const ToolThumb = memo(({ tool, className = "w-11 h-11", emojiClassName = "text-2xl", rounded = "rounded-lg" }: ToolThumbProps) => {
  const [failed, setFailed] = useState(false);
  const [resolvedAsset, setResolvedAsset] = useState<string>();

  useEffect(() => {
    let active = true;
    const raw = typeof tool.imageUrl === "string" ? tool.imageUrl.trim() : "";
    setFailed(false);
    setResolvedAsset(undefined);
    if (!raw.startsWith("/src/")) return () => { active = false; };

    // Resolve legacy source paths only when a card that needs one is mounted.
    // The module is cached after the first request and images remain lazy.
    import("@/utils/search/toolAssetUrls")
      .then(({ assetUrlByPath }) => {
        if (active) setResolvedAsset(assetUrlByPath[raw]);
      })
      .catch(() => {});
    return () => { active = false; };
  }, [tool.imageUrl]);

  // Raw /src paths belong to old records and cannot be resolved without
  // eagerly importing every image in the project. Never do that from a card:
  // it creates hundreds of requests and blocks mobile category rendering.
  const src = failed ? undefined : resolvedAsset ?? resolveToolThumb(tool, null);

  if (!src) {
    return (
      <div className={`${className} ${rounded} flex-shrink-0 flex items-center justify-center ${emojiClassName}`}>
        {tool.emoji}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${tool.title} logo`}
      loading="lazy"
      decoding="async"
      width={64}
      height={64}
      onError={() => setFailed(true)}
      className={`${className} ${rounded} flex-shrink-0 object-cover bg-gray-800 border border-gray-700/60`}
    />
  );
});

ToolThumb.displayName = "ToolThumb";

export default ToolThumb;
