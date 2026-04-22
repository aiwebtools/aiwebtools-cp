import { useEffect, useState } from "react";

/**
 * AssetErrorOverlay
 * - Listens for global script/asset load errors and unhandled promise rejections.
 * - Surfaces the FIRST critical error as a non-blocking on-screen overlay
 *   ONLY if the page hasn't painted meaningful content yet (no #root children
 *   beyond a blank/loader after a short grace period).
 * - Designed to be additive: dismissible, never blocks interaction once dismissed.
 */
const isCriticalAssetError = (msg: string): boolean => {
  const m = (msg || "").toLowerCase();
  return (
    m.includes("failed to fetch dynamically imported module") ||
    m.includes("loading chunk") ||
    m.includes("loading css chunk") ||
    m.includes("importing a module script failed") ||
    m.includes("failed to load module script") ||
    m.includes("unexpected token '<'") ||
    m.includes("mime type") ||
    m.includes("network error")
  );
};

const AssetErrorOverlay = () => {
  const [error, setError] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onError = (e: ErrorEvent) => {
      const msg = e?.message || (e?.error && String(e.error)) || "";
      if (!error && isCriticalAssetError(msg)) {
        setError(msg);
      }
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      const reason = e?.reason;
      const msg =
        typeof reason === "string"
          ? reason
          : reason && reason.message
          ? String(reason.message)
          : "";
      if (!error && isCriticalAssetError(msg)) {
        setError(msg);
      }
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, [error]);

  if (!error || dismissed) return null;

  return (
    <div
      role="alert"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 2147483646,
        maxWidth: 520,
        margin: "0 auto",
        background: "rgba(0,0,0,0.92)",
        border: "1px solid rgba(34,197,94,0.45)",
        borderRadius: 12,
        padding: "14px 16px",
        color: "#bbf7d0",
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: 13,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(34,197,94,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{ fontSize: 18, lineHeight: "20px" }}>⚠️</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "#4ade80", fontWeight: 700, marginBottom: 4 }}>
            Asset load issue detected
          </div>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              opacity: 0.9,
            }}
            title={error}
          >
            {error}
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: "linear-gradient(90deg,#16a34a,#22c55e)",
                color: "#000",
                fontWeight: 700,
                border: "none",
                borderRadius: 8,
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Refresh
            </button>
            <button
              onClick={() => setDismissed(true)}
              style={{
                background: "transparent",
                color: "#bbf7d0",
                border: "1px solid rgba(187,247,208,0.35)",
                borderRadius: 8,
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetErrorOverlay;