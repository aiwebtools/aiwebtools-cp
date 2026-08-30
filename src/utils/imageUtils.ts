/**
 * Shared image resolution and fallback logic to prevent 404s
 */

export const isExpiredHost = (url: string | null | undefined): boolean => {
  if (!url) return false;
  return (
    url.includes("discordapp.net") || 
    url.includes("cdn.discordapp.com") ||
    url.includes("fbcdn.net") ||
    url.includes("scontent.f")
  );
};

export const getYouTubeId = (url: string | null | undefined): string | null => {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?/\s]{11})/
  );
  return match ? match[1] : null;
};

export const getYouTubeThumbnail = (videoUrl?: string): string | undefined => {
  const id = getYouTubeId(videoUrl);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
};

export const getResolvedAssetUrl = (url: string | null | undefined): string => {
  if (!url) return "";
  if (url.startsWith("/src/assets/")) {
    const filename = url.replace("/src/assets/", "");
    // This handles Vite asset resolution in most cases where relative paths are expected
    try {
      return new URL(`../../assets/${filename}`, import.meta.url).href;
    } catch (e) {
      return url;
    }
  }
  return url;
};
