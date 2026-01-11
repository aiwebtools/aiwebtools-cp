// Centralized consent storage helper.
// Fixes rare cases where localStorage is blocked (some desktop privacy modes),
// which can break the disclaimer accept → navigate flow.

export const CONSENT_KEY = "aitools-consent-v3";

const getCookie = (name: string): string | null => {
  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|; )${name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&")}=([^;]*)`)
    );
    return match ? decodeURIComponent(match[1]) : null;
  } catch {
    return null;
  }
};

const setCookie = (name: string, value: string) => {
  try {
    // 1 year, site-wide, lax
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}; Max-Age=${60 * 60 * 24 * 365}; Path=/; SameSite=Lax`;
  } catch {
    // ignore
  }
};

export const getConsentAccepted = (): boolean => {
  // In-memory fallback (covers Safari/iOS privacy modes where storage/cookies can be blocked)
  try {
    if (typeof window !== "undefined" && (window as any).__AIT_CONSENT_ACCEPTED__ === true) {
      return true;
    }
  } catch {
    // ignore
  }

  // localStorage
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const v = window.localStorage.getItem(CONSENT_KEY);
      if (v) return true;
    }
  } catch {
    // ignore
  }

  // sessionStorage fallback
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const v = window.sessionStorage.getItem(CONSENT_KEY);
      if (v) return true;
    }
  } catch {
    // ignore
  }

  // cookie fallback
  const cookieVal = getCookie(CONSENT_KEY);
  return cookieVal === "true";
};

export const setConsentAccepted = (accepted = true) => {
  const v = accepted ? "true" : "";

  // In-memory fallback (works even if storage/cookies are blocked)
  try {
    (window as any).__AIT_CONSENT_ACCEPTED__ = accepted;
  } catch {
    // ignore
  }

  try {
    window.localStorage?.setItem(CONSENT_KEY, v);
  } catch {
    // ignore
  }

  try {
    window.sessionStorage?.setItem(CONSENT_KEY, v);
  } catch {
    // ignore
  }

  setCookie(CONSENT_KEY, "true");
};
