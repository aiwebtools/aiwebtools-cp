import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PerformanceMonitor } from './utils/performanceMonitor'

// Start performance tracking
PerformanceMonitor.mark('app-start');

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

PerformanceMonitor.mark('react-render-start');
createRoot(rootElement).render(<App />);
PerformanceMonitor.mark('react-render-end');

// Measure initial render performance
setTimeout(() => {
  PerformanceMonitor.measure('react-render-time', 'react-render-start', 'react-render-end');
}, 0);
