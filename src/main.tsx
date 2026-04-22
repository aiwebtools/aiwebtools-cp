import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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
// If app boots successfully, clear the guard so future errors can trigger again
window.setTimeout(() => sessionStorage.removeItem(CHUNK_RELOAD_KEY), 4000);

createRoot(rootElement).render(<App />);
