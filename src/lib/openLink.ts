const isChatGptLikeUrl = (url: string): boolean => {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return hostname === "chatgpt.com" || hostname.endsWith(".chatgpt.com") || hostname.includes("openai.com");
  } catch {
    return false;
  }
};

const clickExternalAnchor = (url: string): boolean => {
  try {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer external";
    anchor.referrerPolicy = "no-referrer-when-downgrade";
    anchor.style.position = "fixed";
    anchor.style.left = "-9999px";
    anchor.style.top = "-9999px";
    document.body.appendChild(anchor);
    anchor.click();
    window.setTimeout(() => anchor.remove(), 0);
    return true;
  } catch {
    return false;
  }
};

export const openExternal = (url: string): boolean => {
  const cleanUrl = url?.trim();
  if (!cleanUrl) return false;

  try {
    const opened = window.open(cleanUrl, "_blank", "noopener,noreferrer");
    if (opened) {
      opened.opener = null;
      return true;
    }
  } catch {}

  if (clickExternalAnchor(cleanUrl)) return true;

  try {
    const opened = window.open("about:blank", "_blank", "noopener,noreferrer");
    if (opened) {
      opened.opener = null;
      opened.location.replace(cleanUrl);
      return true;
    }
  } catch {}

  if (isChatGptLikeUrl(cleanUrl)) return false;

  try {
    window.location.assign(cleanUrl);
    return true;
  } catch {
    return false;
  }
};

export const isFrameHostileExternalUrl = isChatGptLikeUrl;