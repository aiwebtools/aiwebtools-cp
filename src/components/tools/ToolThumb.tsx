import { memo, useEffect, useState } from "react";
import { Tool } from "@/types/tools";

/**
 * Small square thumbnail for tool cards / lists.
 * Shows the tool's own hero image (or its YouTube thumbnail) and only falls
 * back to the emoji when no media exists. Fully lazy — no first-paint cost.
 */

let assetMap: Record<string, string> | null = null;
let assetPending: Promise<Record<string, string>> | null = null;
const assetListeners = new Set<() => void>();

const loadAssetMap = () => {
  if (assetMap || assetPending) return;
  assetPending = import("@/utils/search/toolAssetUrls")
    .then(({ assetUrlByPath }) => {
      assetMap = assetUrlByPath;
      assetListeners.forEach((fn) => fn());
      assetListeners.clear();
      return assetUrlByPath;
    })
    .catch(() => ({}));
};

const youTubeThumb = (videoUrl?: string): string | undefined => {
  if (!videoUrl) return undefined;
  const id = videoUrl.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?/\s]{11})/,
  )?.[1];
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
};

export const resolveToolThumb = (
  tool: Pick<Tool, "imageUrl" | "videoUrl">,
  assets: Record<string, string> | null,
): string | undefined => {
  const raw = typeof tool.imageUrl === "string" ? tool.imageUrl.trim() : "";
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
  const [, force] = useState(0);
  const [failed, setFailed] = useState(false);
  const needsAssets = typeof tool.imageUrl === "string" && tool.imageUrl.startsWith("/src/");

  useEffect(() => {
    if (!needsAssets || assetMap) return;
    const notify = () => force((n) => n + 1);
    assetListeners.add(notify);
    loadAssetMap();
    return () => {
      assetListeners.delete(notify);
    };
  }, [needsAssets]);

  const src = failed ? undefined : resolveToolThumb(tool, assetMap);

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
