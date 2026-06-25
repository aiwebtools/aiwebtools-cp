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
(window as any).__aiwtBootTrace?.('main.tsx-eval');

// Self-heal stale Vite chunk errors (post-deploy / HMR mismatches).
// Uses the SHARED reload guard from index.html so we never stack reloads
// on top of the watchdog or lazyWithRetry reload paths.
const reloadGuard = () =>
  (window as any).__aiwtReloadGuard as
    | { canReload: () => boolean; mark: (r?: string) => void; clear: () => void }
    | undefined;
const isChunkError = (msg: string) =>
  /Failed to fetch dynamically imported module/i.test(msg) ||
  /Importing a module script failed/i.test(msg) ||
  /ChunkLoadError/i.test(msg) ||
  /Loading chunk [\d]+ failed/i.test(msg);

window.addEventListener('error', (event) => {
  const msg = event?.message || (event as any)?.error?.message || '';
  const g = reloadGuard();
  if (isChunkError(msg) && g?.canReload()) {
    g.mark('window-error');
    window.location.reload();
  }
});
window.addEventListener('unhandledrejection', (event) => {
  const msg = (event?.reason && (event.reason.message || String(event.reason))) || '';
  const g = reloadGuard();
  if (isChunkError(msg) && g?.canReload()) {
    g.mark('unhandledrejection');
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
            reloadGuard()?.clear();
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
    (window as any).__aiwtBootTrace?.('App-module-loaded');
    root.render(<App />);
    (window as any).__aiwtBootTrace?.('react-render-called');
    // Signal the index.html loader to fade out as soon as React paints.
    // Without this dispatch the loader only relies on the 100ms DOM-poll
    // or the 9s watchdog, which left the cube parked at 70-80%.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        try { window.dispatchEvent(new Event('aiwt:route-ready')); } catch { /* noop */ }
      });
    });
    // NOTE: We intentionally do NOT clear the reload guard after a successful
    // boot. The 30s cooldown in index.html prevents loop-reloads while still
    // letting a genuine later-session stale-chunk trigger one recovery reload.
  })
  .catch((error) => {
    const msg = error?.message || String(error || '');
    const g = reloadGuard();
    if (isChunkError(msg) && g?.canReload()) {
      g.mark('App-import-failed');
      window.location.reload();
      return;
    }

    console.error('[boot] App failed to load:', error);
    root.render(<BootFallback failed />);
  });
