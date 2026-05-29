import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "awt_session_id";
const RATE_LIMIT_MS = 5000; // don't spam more than 1 report / 5s
const SEEN_KEY = "awt_err_seen";

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "no-session";
  }
}

let lastSent = 0;
const sentHashes = new Set<string>();

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return String(h);
}

export interface ReportPayload {
  error_type: string;
  message: string;
  stack?: string;
  source?: string;
  line_number?: number;
  column_number?: number;
  component_stack?: string;
  severity?: "error" | "warning" | "fatal" | "info";
  metadata?: Record<string, unknown>;
}

export async function reportError(payload: ReportPayload): Promise<void> {
  try {
    const now = Date.now();
    if (now - lastSent < RATE_LIMIT_MS) return;
    // Skip self-referential noise from the reporter itself
    const msg = payload.message || "";
    if (/log-error|FunctionsFetchError|FunctionsHttpError|supabase\.functions/i.test(msg)) return;
    const sig = hash(`${payload.error_type}|${payload.message}|${payload.source || ""}|${payload.line_number || ""}`);
    if (sentHashes.has(sig)) return;
    sentHashes.add(sig);
    lastSent = now;

    const body = {
      ...payload,
      url: typeof window !== "undefined" ? window.location.href : "",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      session_id: getSessionId(),
    };

    // Fire-and-forget. Swallow ALL rejections so a failing edge function
    // never becomes an unhandledrejection that re-enters this handler.
    supabase.functions.invoke("log-error", { body }).catch(() => { /* noop */ });
  } catch (e) {
    // Never throw from error reporter, never console.error either.
  }
}

let installed = false;
export function installGlobalErrorHandlers() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  window.addEventListener("error", (event: ErrorEvent) => {
    reportError({
      error_type: "window.onerror",
      message: event.message || "Unknown error",
      stack: event.error?.stack,
      source: event.filename,
      line_number: event.lineno,
      column_number: event.colno,
      severity: "error",
    });
  });

  window.addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    reportError({
      error_type: "unhandledrejection",
      message: reason?.message ? String(reason.message) : String(reason),
      stack: reason?.stack,
      severity: "error",
    });
  });

  // Capture console.error as warnings (helpful for diagnosing UI issues)
  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    try {
      const text = args.map((a) => {
        if (a instanceof Error) return `${a.message}\n${a.stack || ""}`;
        if (typeof a === "string") return a;
        try { return JSON.stringify(a); } catch { return String(a); }
      }).join(" ");
      // Skip noisy/non-actionable warnings
      if (!/Warning:|DevTools|HMR|\[vite\]/.test(text)) {
        reportError({
          error_type: "console.error",
          message: text.slice(0, 1000),
          severity: "warning",
        });
      }
    } catch { /* noop */ }
    originalConsoleError(...args as []);
  };
}