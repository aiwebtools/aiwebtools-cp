import { useEffect, useState } from "react";
import type { SearchDiagnostics } from "@/hooks/useGlobalSearch";

/**
 * Search debugging dashboard.
 * Hidden by default. Enable with ?searchdebug=1 in the URL, or press
 * Ctrl+Shift+S anywhere on the site. Purely presentational — zero cost when off.
 */
const SearchDebugDashboard = ({ diagnostics }: { diagnostics: SearchDiagnostics }) => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      if (new URLSearchParams(window.location.search).get("searchdebug") === "1") return true;
      return window.localStorage.getItem("aiwt_search_debug") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        setVisible((prev) => {
          try { window.localStorage.setItem("aiwt_search_debug", prev ? "0" : "1"); } catch { /* noop */ }
          return !prev;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!visible) return null;

  const rows: Array<[string, string]> = [
    ["Index", diagnostics.indexReady ? `ready (${diagnostics.indexSize.toLocaleString()} tools)` : "loading…"],
    ["Index load", `${diagnostics.indexLoadMs} ms`],
    ["Query", diagnostics.lastQuery || "—"],
    ["Terms", diagnostics.lastTerms.length ? diagnostics.lastTerms.join(", ") : "—"],
    ["Source", diagnostics.lastSource],
    ["Latency", `${diagnostics.lastElapsedMs} ms`],
    ["Results", diagnostics.resultCount.toLocaleString()],
    ["Displayed", `${diagnostics.displayedCount.toLocaleString()} / ${diagnostics.resultCount.toLocaleString()}`],
    ["Pages loaded", String(diagnostics.pageLoads)],
  ];

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-72 rounded-lg border border-primary/40 bg-background/95 p-3 font-mono text-[11px] shadow-lg backdrop-blur">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-bold text-primary">SEARCH DIAGNOSTICS</span>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => {
            setVisible(false);
            try { window.localStorage.setItem("aiwt_search_debug", "0"); } catch { /* noop */ }
          }}
          aria-label="Close search diagnostics"
        >
          ✕
        </button>
      </div>
      <dl className="space-y-1">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-2">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="truncate text-right text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
      {diagnostics.lastError ? (
        <p className="mt-2 break-words text-destructive">{diagnostics.lastError}</p>
      ) : null}
    </div>
  );
};

export default SearchDebugDashboard;
