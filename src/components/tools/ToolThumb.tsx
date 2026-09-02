import { memo, useEffect, useState } from "react";
import { Tool } from "@/types/tools";
import { isExpiredHost, getYouTubeThumbnail } from "@/utils/imageUtils";
import { useResolvedToolImage } from "@/utils/assetResolver";

/**
 * Small square thumbnail for tool cards / lists.
 * Shows the tool's own hero image (or its YouTube thumbnail) and only falls
 * back to the emoji when no media exists at all.
 */

export const resolveToolThumb = (
  tool: Pick<Tool, "imageUrl" | "videoUrl">,
  assets: Record<string, string> | null,
): string | undefined => {
  const raw = typeof tool.imageUrl === "string" ? tool.imageUrl.trim() : "";

  if (raw && isExpiredHost(raw)) return getYouTubeThumbnail(tool.videoUrl);

  if (raw) {
    if (!raw.startsWith("/src/")) return raw;
    if (assets?.[raw]) return assets[raw];
  }

  return getYouTubeThumbnail(tool.videoUrl);
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
  const [override, setOverride] = useState<string>();
  const raw = typeof tool.imageUrl === "string" ? tool.imageUrl.trim() : "";
  const expired = raw ? isExpiredHost(raw) : false;
  const resolved = useResolvedToolImage(expired ? "" : raw);

  useEffect(() => {
    setFailed(false);
    setOverride(undefined);
  }, [tool.imageUrl]);

  const src = failed ? undefined : (override || resolved || getYouTubeThumbnail(tool.videoUrl));

  if (!src) {
    return (
      <div className={`${className} ${rounded} flex-shrink-0 flex items-center justify-center ${emojiClassName} bg-gray-800 border border-gray-700/60`}>
        {tool.emoji}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${tool.title} logo`}
      loading="eager"
      decoding="async"
      width={64}
      height={64}
      onError={() => {
        const ytFallback = getYouTubeThumbnail(tool.videoUrl);
        // Try the YouTube thumbnail once; otherwise fall back to the emoji tile.
        if (ytFallback && src !== ytFallback) {
          setOverride(ytFallback);
        } else {
          setFailed(true);
        }
      }}
      className={`${className} ${rounded} flex-shrink-0 object-cover bg-gray-800 border border-gray-700/60`}
    />
  );

});

ToolThumb.displayName = "ToolThumb";

export default ToolThumb;
