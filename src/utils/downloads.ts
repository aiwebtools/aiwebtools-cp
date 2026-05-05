/**
 * Centralized download helpers.
 *
 * The Lovable id-preview sandbox (id-preview--*.lovable.app) gates ALL static
 * file requests behind a Lovable login. To prevent download buttons from
 * redirecting users to a Lovable login screen during preview, we always
 * resolve static download paths against the public published origin.
 *
 * On the published site, custom domains, or any non-preview origin, the
 * relative path is used as-is.
 */
const PUBLIC_ORIGIN = "https://aiwebtools.lovable.app";

const isPreviewSandbox = (): boolean => {
  if (typeof window === "undefined") return false;
  return /(^|\.)id-preview--.*\.lovable\.app$/i.test(window.location.hostname);
};

/**
 * Resolve a /downloads/* (or any absolute-rooted) path to a fully-qualified
 * URL that is guaranteed to be publicly accessible — bypassing the
 * preview-sandbox auth gate when needed.
 */
export const resolvePublicAssetUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (isPreviewSandbox()) return `${PUBLIC_ORIGIN}${normalized}`;
  return normalized;
};

/**
 * Trigger a browser download for a public static asset, always pointing at
 * the published origin when invoked from the preview sandbox so the user is
 * never redirected to a Lovable login screen.
 */
export const triggerPublicDownload = (path: string, filename: string): void => {
  const href = resolvePublicAssetUrl(path);
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  // Some browsers ignore `download` for cross-origin URLs; opening in a new
  // tab still serves the file directly without an auth wall.
  if (href.startsWith("http") && typeof window !== "undefined" && href.indexOf(window.location.origin) !== 0) {
    link.target = "_blank";
    link.rel = "noopener";
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};