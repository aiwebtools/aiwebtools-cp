import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Suppress noise from browser wallet extensions (MetaMask, Phantom, Coinbase, etc.)
// These inject into every page and their failed auto-connect throws unhandled
// promise rejections that can trigger Lovable's blank-screen detector and break
// preview reverts. They are NOT app errors — silently swallow them.
const isExtensionNoise = (msg: string, stack: string) => {
  const haystack = `${msg} ${stack}`.toLowerCase();
  return (
    haystack.includes('metamask') ||
    haystack.includes('chrome-extension://') ||
    haystack.includes('moz-extension://') ||
    haystack.includes('phantom') ||
    haystack.includes('coinbase') ||
    haystack.includes('inpage.js') ||
    haystack.includes('failed to connect to wallet')
  );
};

window.addEventListener('unhandledrejection', (event) => {
  const reason: any = event.reason;
  const msg = reason?.message || String(reason || '');
  const stack = reason?.stack || '';
  if (isExtensionNoise(msg, stack)) {
    event.preventDefault();
    console.debug('[suppressed wallet extension error]', msg);
  }
});

window.addEventListener('error', (event) => {
  const msg = event.message || '';
  const stack = event.error?.stack || event.filename || '';
  if (isExtensionNoise(msg, stack)) {
    event.preventDefault();
    console.debug('[suppressed wallet extension error]', msg);
  }
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
