// Lightweight client performance telemetry.
// Measures: search-typing latency, long-task freezes, dropdown open time,
// slow lazy-route transitions. Reports as severity='info' via reportError.
// Zero-op in server/worker contexts. Sample-rated and coalesced so we never
// spam the log-error edge function.

import { reportError } from "@/utils/errorReporting";

type Metric = { name: string; value: number; extra?: Record<string, unknown> };

const isBrowser = typeof window !== "undefined" && typeof performance !== "undefined";
const isMobile = () =>
  isBrowser &&
  (window.innerWidth <= 768 ||
    window.matchMedia?.("(hover: none) and (pointer: coarse)").matches);

// Coalesce metrics into a single upload every 15s to keep network chatter minimal.
const batch: Metric[] = [];
let flushTimer: number | null = null;
// Session sample: 10% of desktop sessions, 25% of mobile sessions.
const enabled = (() => {
  if (!isBrowser) return false;
  try {
    const key = "awt_perf_sample_v1";
    let v = sessionStorage.getItem(key);
    if (!v) {
      const roll = Math.random();
      v = roll < (isMobile() ? 0.25 : 0.1) ? "1" : "0";
      sessionStorage.setItem(key, v);
    }
    return v === "1";
  } catch { return false; }
})();

function scheduleFlush() {
  if (!enabled || !isBrowser || flushTimer !== null) return;
  flushTimer = window.setTimeout(flush, 15000);
}

function flush() {
  flushTimer = null;
  if (batch.length === 0) return;
  // Aggregate by metric name for compactness.
  const agg: Record<string, { count: number; sum: number; max: number; p95Sample: number[] }> = {};
  for (const m of batch) {
    const a = agg[m.name] ?? (agg[m.name] = { count: 0, sum: 0, max: 0, p95Sample: [] });
    a.count++;
    a.sum += m.value;
    if (m.value > a.max) a.max = m.value;
    if (a.p95Sample.length < 40) a.p95Sample.push(m.value);
  }
  batch.length = 0;
  const summary: Record<string, { count: number; avg: number; max: number; p95: number }> = {};
  for (const [k, a] of Object.entries(agg)) {
    const sorted = a.p95Sample.sort((x, y) => x - y);
    const idx = Math.max(0, Math.floor(sorted.length * 0.95) - 1);
    summary[k] = {
      count: a.count,
      avg: Math.round(a.sum / a.count),
      max: Math.round(a.max),
      p95: Math.round(sorted[idx] ?? a.max),
    };
  }
  reportError({
    error_type: "perf.telemetry",
    message: `perf ${Object.keys(summary).join(",")}`,
    severity: "info",
    metadata: { mobile: isMobile(), metrics: summary },
  });
}

export function recordMetric(name: string, value: number, extra?: Record<string, unknown>) {
  if (!enabled || !isBrowser || !Number.isFinite(value) || value < 0) return;
  // Cap ridiculous outliers so a stuck tab doesn't skew everything.
  batch.push({ name, value: Math.min(value, 60_000), extra });
  if (batch.length >= 60) flush();
  else scheduleFlush();
}

// ============ Long-task freeze observer ============
// Any main-thread block >100ms is a "freeze" per PWA perf guidance. Report the
// duration so we can spot regressions after code changes.
let longTaskObserver: PerformanceObserver | null = null;
export function installLongTaskObserver() {
  if (!enabled || !isBrowser || longTaskObserver) return;
  try {
    if (typeof PerformanceObserver === "undefined") return;
    // @ts-expect-error - longtask is not in every lib.dom yet
    if (!(PerformanceObserver.supportedEntryTypes || []).includes("longtask")) return;
    longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration >= 100) {
          recordMetric("longtask.ms", entry.duration);
        }
      }
    });
    longTaskObserver.observe({ type: "longtask", buffered: true } as any);
  } catch { /* noop */ }
}

// ============ Route transition timing ============
let routeStart = 0;
let routeName = "";
export function markRouteStart(pathname: string) {
  if (!enabled || !isBrowser) return;
  routeStart = performance.now();
  routeName = pathname;
}
export function markRouteReady() {
  if (!enabled || !isBrowser || !routeStart) return;
  const duration = performance.now() - routeStart;
  routeStart = 0;
  if (duration >= 250) recordMetric("route.ready.ms", duration, { path: routeName });
}

// Flush on page hide so we never lose metrics on iOS/Safari.
if (isBrowser && enabled) {
  window.addEventListener("pagehide", flush, { capture: true });
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
}
