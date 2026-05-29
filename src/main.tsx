import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { installGlobalErrorHandlers } from './utils/errorReporting'

// Install global crash/error handlers (window.onerror, unhandledrejection, console.error)
installGlobalErrorHandlers();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

console.log("[boot] main.tsx start", window.location.pathname);

// Self-heal stale Vite chunk errors (post-deploy / HMR mismatches).
// Forces ONE hard reload, then clears the flag so we never loop.
const CHUNK_RELOAD_KEY = '__chunk_reload_attempted__';
const isChunkError = (msg: string) =>
  /Failed to fetch dynamically imported module/i.test(msg) ||
  /Importing a module script failed/i.test(msg) ||
  /ChunkLoadError/i.test(msg) ||
  /Loading chunk [\d]+ failed/i.test(msg);

window.addEventListener('error', (event) => {
  const msg = event?.message || (event as any)?.error?.message || '';
  if (isChunkError(msg) && !sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
    sessionStorage.setItem(CHUNK_RELOAD_KEY, '1');
    window.location.reload();
  }
});
window.addEventListener('unhandledrejection', (event) => {
  const msg = (event?.reason && (event.reason.message || String(event.reason))) || '';
  if (isChunkError(msg) && !sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
    sessionStorage.setItem(CHUNK_RELOAD_KEY, '1');
    window.location.reload();
  }
});
const BootFallback = ({ failed = false }: { failed?: boolean }) => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
    <div className="text-center space-y-4 max-w-sm">
      <div className="mx-auto h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-primary">AIWebTools.ai is loading</h1>
        <p className="text-sm text-muted-foreground">
          {failed ? "A preview module stalled. Reload once to reconnect cleanly." : "Stabilizing the Matrix..."}
        </p>
      </div>
      {failed ? (
        <button
          className="rounded-md border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/25"
          onClick={() => {
            sessionStorage.removeItem(CHUNK_RELOAD_KEY);
            window.location.reload();
          }}
        >
          Reload site
        </button>
      ) : null}
    </div>
  </div>
);

const root = createRoot(rootElement);
// NOTE: do NOT render a boot fallback here — index.html already shows the
// matrix loading spinner inside #root until React mounts. Rendering another
// fallback would create a second visible loading screen.

import('./App.tsx')
  .then(({ default: App }) => {
    try {
      sessionStorage.removeItem('__aiwt_boot_watchdog_reload__');
    } catch {
      // Storage can be unavailable in strict privacy modes; rendering still continues.
    }
    root.render(<App />);
    // NOTE: we intentionally do NOT clear CHUNK_RELOAD_KEY after boot.
    // Clearing it allowed mid-session errors to trigger a second reload,
    // which users perceived as random "refresh screens". One self-heal per
    // session is enough — anything after that should surface a manual button.
  })
  .catch((error) => {
    const msg = error?.message || String(error || '');
    if (!sessionStorage.getItem(CHUNK_RELOAD_KEY) && isChunkError(msg)) {
      sessionStorage.setItem(CHUNK_RELOAD_KEY, '1');
      window.location.reload();
      return;
    }

    console.error('[boot] App failed to load:', error);
    root.render(<BootFallback failed />);
  });
