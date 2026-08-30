import { memo, useEffect, useState } from "react";
import { Tool } from "@/types/tools";
import { isExpiredHost, getYouTubeThumbnail, getResolvedAssetUrl } from "@/utils/imageUtils";

/**
 * Small square thumbnail for tool cards / lists.
 * Shows the tool's own hero image (or its YouTube thumbnail) and only falls
 * back to the emoji when no media exists. Fully lazy — no first-paint cost.
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
  const [resolvedAsset, setResolvedAsset] = useState<string>();

  useEffect(() => {
    let active = true;
    const raw = typeof tool.imageUrl === "string" ? tool.imageUrl.trim() : "";
    setFailed(false);
    setResolvedAsset(undefined);
    
    if (!raw.startsWith("/src/")) return () => { active = false; };

    // Resolve legacy source paths only when a card that needs one is mounted.
    import("@/utils/search/toolAssetUrls")
      .then(({ assetUrlByPath }) => {
        if (active) setResolvedAsset(assetUrlByPath[raw]);
      })
      .catch(() => {});
    return () => { active = false; };
  }, [tool.imageUrl]);

  const src = failed ? undefined : (resolvedAsset || resolveToolThumb(tool, null));

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
      loading="lazy"
      decoding="async"
      width={64}
      height={64}
      onError={() => {
        // If image fails, try falling back to YouTube thumbnail if not already tried
        if (src !== getYouTubeThumbnail(tool.videoUrl)) {
           setFailed(false); // Reset failed to try fallback
           setResolvedAsset(getYouTubeThumbnail(tool.videoUrl));
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
