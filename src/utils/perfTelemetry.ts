// Lightweight client performance telemetry.
// Measures: search-typing latency, long-task freezes, dropdown open time,
// slow lazy-route transitions. Reports as severity='info' via reportError.
// Zero-op in server/worker contexts. Sample-rated and coalesced so we never
// spam the log-error edge function.

import { reportError } from "./errorReporting";

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
  // Observe every session because this also drives automatic degradation;
  // uploads remain sampled inside recordMetric/reportFreezeIfSevere.
  if (!isBrowser || longTaskObserver) return;
  try {
    if (typeof PerformanceObserver === "undefined") return;
    const supported = (PerformanceObserver as unknown as { supportedEntryTypes?: string[] }).supportedEntryTypes ?? [];
    if (!supported.includes("longtask")) return;
    longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration >= 100) {
          recordMetric("longtask.ms", entry.duration);
          // Capture attribution (script URLs / container name) so freeze
          // reports pinpoint the culprit even without prior user interaction.
          const attr = (entry as any).attribution as Array<any> | undefined;
          const attribution = Array.isArray(attr)
            ? attr.slice(0, 3).map((a) => ({
                name: a?.name,
                containerType: a?.containerType,
                containerSrc: a?.containerSrc,
                containerId: a?.containerId,
              }))
            : undefined;
          reportFreezeIfSevere(entry.duration, {
            startTime: Math.round(entry.startTime),
            attribution,
          });
          if (entry.duration >= 500 && entry.startTime < 15000) {
            setPerfDegraded("opening-long-task");
          }
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

// ============ Interaction breadcrumbs ============
// Ring buffer of the last ~24 user actions so freeze reports know what the
// user actually did in the seconds before the main thread stalled. Kept in
// memory only — flushed alongside any long-task event >250ms so we can trace
// the exact code path causing the occasional mobile freeze.
type Breadcrumb = { t: number; kind: string; label: string };
const crumbs: Breadcrumb[] = [];
const MAX_CRUMBS = 24;

export function addBreadcrumb(kind: string, label: string) {
  if (!isBrowser) return;
  crumbs.push({ t: Math.round(performance.now()), kind, label: label.slice(0, 80) });
  if (crumbs.length > MAX_CRUMBS) crumbs.shift();
}

export function recentBreadcrumbs(): Breadcrumb[] {
  return crumbs.slice(-MAX_CRUMBS);
}

// Install once — attach at pointer-down/touch-start (not click) so we catch
// the very first interaction latency. Passive listeners keep scroll smooth.
let interactionInstalled = false;
export function installInteractionBreadcrumbs() {
  if (!isBrowser || interactionInstalled) return;
  interactionInstalled = true;
  const handler = (e: Event) => {
    const t = e.target as HTMLElement | null;
    if (!t || !t.closest) return;
    const el = t.closest("[data-perf], a, button, [role=button], input, textarea") as HTMLElement | null;
    if (!el) return;
    const label =
      el.getAttribute("data-perf") ||
      el.getAttribute("aria-label") ||
      (el as HTMLAnchorElement).href ||
      (el.textContent || "").trim().slice(0, 40) ||
      el.tagName;
    addBreadcrumb(e.type, label);
  };
  window.addEventListener("pointerdown", handler, { passive: true, capture: true });
  window.addEventListener("touchstart", handler, { passive: true, capture: true });
}

// Enhance long-task observer to include recent breadcrumbs when the freeze is
// severe enough to be user-visible. We only send one report per 5s to avoid
// flooding the log-error edge function.
let lastFreezeReport = 0;
export function reportFreezeIfSevere(durationMs: number, extra?: Record<string, unknown>) {
  // Severe freezes are operational errors, not analytics. Capture them in
  // every session; only routine aggregate metrics remain sample-rated.
  if (!isBrowser) return;
  if (durationMs < 300) return;
  const now = performance.now();
  if (now - lastFreezeReport < 5000) return;
  lastFreezeReport = now;
  reportError({
    error_type: "perf.freeze",
    message: `main-thread frozen ${Math.round(durationMs)}ms`,
    severity: "warning",
    metadata: {
      mobile: isMobile(),
      durationMs: Math.round(durationMs),
      path: typeof location !== "undefined" ? location.pathname : "",
      breadcrumbs: recentBreadcrumbs(),
      ...(extra ?? {}),
    },
  });
}

// Flush on page hide so we never lose metrics on iOS/Safari.
if (isBrowser && enabled) {
  window.addEventListener("pagehide", flush, { capture: true });
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
}

// ============ Slow-click observer ============
// Global click latency tracker: measures the delta between pointerdown and the
// next painted frame after the corresponding click. If a click on any button,
// link, or [role=button] blocks the main thread long enough that the next
// frame is delayed past our threshold, we record + report it with a label
// derived from data-perf / aria-label / text so we can pinpoint exactly which
// control is freezing on mobile. Zero per-button wiring required.
let slowClickInstalled = false;
const SLOW_CLICK_MS = 200;   // record any click that costs a visible frame drop
const REPORT_CLICK_MS = 450; // upgrade to a warning report above this
let lastSlowClickReport = 0;

export function installSlowClickObserver() {
  if (!isBrowser || slowClickInstalled) return;
  slowClickInstalled = true;
  let pendingLabel: string | null = null;
  let pendingStart = 0;

  const labelFor = (el: HTMLElement): string => {
    return (
      el.getAttribute("data-perf") ||
      el.getAttribute("aria-label") ||
      (el as HTMLAnchorElement).href ||
      (el.textContent || "").trim().slice(0, 40) ||
      el.tagName
    );
  };

  window.addEventListener(
    "pointerdown",
    (e) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.closest) return;
      const el = t.closest("a, button, [role=button], [data-perf]") as HTMLElement | null;
      if (!el) return;
      pendingLabel = labelFor(el);
      pendingStart = performance.now();
    },
    { passive: true, capture: true }
  );

  window.addEventListener(
    "click",
    () => {
      if (!pendingLabel || !pendingStart) return;
      const label = pendingLabel;
      const start = pendingStart;
      pendingLabel = null;
      pendingStart = 0;
      // Measure to the next painted frame — this is when the user actually
      // sees a response. A double rAF ensures we're past commit + paint.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const duration = performance.now() - start;
          if (duration >= SLOW_CLICK_MS) {
            recordMetric("click.slow.ms", duration, { label });
            if (duration >= REPORT_CLICK_MS) {
              const now = performance.now();
              if (now - lastSlowClickReport >= 5000) {
                lastSlowClickReport = now;
                reportError({
                  error_type: "perf.slow_click",
                  message: `slow click ${Math.round(duration)}ms on ${label}`,
                  severity: "info",
                  metadata: {
                    mobile: isMobile(),
                    durationMs: Math.round(duration),
                    label,
                    path: typeof location !== "undefined" ? location.pathname : "",
                    breadcrumbs: recentBreadcrumbs(),
                  },
                });
              }
            }
          }
        });
      });
    },
    { passive: true, capture: true }
  );
}

// ============ Degraded-performance mode (prevention) ============
// When the device demonstrably cannot keep up (sustained dropped frames while
// scrolling, or a very slow first load), we flip a global flag. CSS and heavy
// effect components read it to back off animations, so a slow device degrades
// gracefully instead of freezing. This runs regardless of telemetry sampling.
let degraded = false;
export const isPerfDegraded = () => degraded;

export function setPerfDegraded(reason: string) {
  if (!isBrowser || degraded) return;
  degraded = true;
  try {
    document.documentElement.setAttribute("data-perf-degraded", "1");
    window.dispatchEvent(new CustomEvent("awt:perf-degraded", { detail: { reason } }));
  } catch { /* noop */ }
  recordMetric("perf.degraded", 1, { reason });
}

// ============ First-load vitals ============
// TTFB / FCP / LCP / DOM-interactive + our own boot marks, recorded once.
let bootVitalsInstalled = false;
export function installBootVitals() {
  if (!isBrowser || bootVitalsInstalled) return;
  bootVitalsInstalled = true;

  const observePaint = (type: string, metric: string, onValue?: (v: number) => void) => {
    try {
      if (typeof PerformanceObserver === "undefined") return;
      const supported =
        (PerformanceObserver as unknown as { supportedEntryTypes?: string[] }).supportedEntryTypes ?? [];
      if (!supported.includes(type)) return;
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1] as any;
        if (!last) return;
        const value = type === "largest-contentful-paint" ? last.startTime : last.startTime;
        recordMetric(metric, value);
        onValue?.(value);
      });
      po.observe({ type, buffered: true } as any);
    } catch { /* noop */ }
  };

  observePaint("paint", "boot.fcp.ms");
  observePaint("largest-contentful-paint", "boot.lcp.ms", (v) => {
    // A >6s LCP means this device/network is struggling — degrade proactively.
    if (v > 6000) setPerfDegraded("slow-lcp");
  });

  // Track layout instability and interaction latency so future regressions are
  // diagnosable without reproducing them locally.
  try {
    const supported = (PerformanceObserver as unknown as { supportedEntryTypes?: string[] }).supportedEntryTypes ?? [];
    if (supported.includes("layout-shift")) {
      let cls = 0;
      const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as Array<PerformanceEntry & { value?: number; hadRecentInput?: boolean }>) {
          if (!entry.hadRecentInput) cls += entry.value ?? 0;
        }
        recordMetric("boot.cls.x1000", cls * 1000);
      });
      po.observe({ type: "layout-shift", buffered: true } as any);
    }
    if (supported.includes("event")) {
      const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration >= 100) recordMetric("interaction.inp.ms", entry.duration);
        }
      });
      po.observe({ type: "event", buffered: true, durationThreshold: 100 } as any);
    }
  } catch { /* unsupported browser */ }

  const readNav = () => {
    try {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      if (!nav) return;
      recordMetric("boot.ttfb.ms", nav.responseStart);
      recordMetric("boot.dom_interactive.ms", nav.domInteractive);
      recordMetric("boot.load.ms", nav.loadEventEnd || nav.domComplete);
    } catch { /* noop */ }
  };
  if (document.readyState === "complete") readNav();
  else window.addEventListener("load", () => window.setTimeout(readNav, 0), { once: true });
}

// ============ Scroll jank observer ============
// Samples frame durations only while the user is scrolling. Frames over ~50ms
// are visible stutters; a run of them means the page is freezing under the
// user's finger. We record the worst frame per scroll burst, report severe
// bursts, and auto-degrade after repeated bad bursts so it stops happening.
let scrollJankInstalled = false;
const JANK_FRAME_MS = 50;
const SEVERE_BURST_MS = 300;
let badBursts = 0;
let lastJankReport = 0;

export function installScrollJankObserver() {
  if (!isBrowser || scrollJankInstalled) return;
  scrollJankInstalled = true;

  let sampling = false;
  let lastFrame = 0;
  let lastScrollAt = 0;
  let worstFrame = 0;
  let jankFrames = 0;
  let frames = 0;

  const endBurst = () => {
    sampling = false;
    if (frames > 4 && worstFrame >= JANK_FRAME_MS) {
      recordMetric("scroll.jank.ms", worstFrame, { jankFrames, frames });
      if (worstFrame >= SEVERE_BURST_MS) {
        badBursts++;
        const now = performance.now();
        if (now - lastJankReport >= 10000) {
          lastJankReport = now;
          reportError({
            error_type: "perf.scroll_jank",
            message: `scroll stutter ${Math.round(worstFrame)}ms frame`,
            severity: "warning",
            metadata: {
              mobile: isMobile(),
              worstFrameMs: Math.round(worstFrame),
              jankFrames,
              frames,
              path: typeof location !== "undefined" ? location.pathname : "",
              breadcrumbs: recentBreadcrumbs(),
            },
          });
        }
        if (badBursts >= 1) setPerfDegraded("scroll-jank");
      }
    }
    worstFrame = 0;
    jankFrames = 0;
    frames = 0;
  };

  const tick = () => {
    const now = performance.now();
    const delta = now - lastFrame;
    lastFrame = now;
    frames++;
    if (delta > JANK_FRAME_MS) {
      jankFrames++;
      if (delta > worstFrame) worstFrame = delta;
    }
    // Stop sampling ~300ms after the last scroll event.
    if (now - lastScrollAt > 300) {
      endBurst();
      return;
    }
    requestAnimationFrame(tick);
  };

  const onScroll = () => {
    lastScrollAt = performance.now();
    if (sampling) return;
    sampling = true;
    lastFrame = performance.now();
    requestAnimationFrame(tick);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("touchmove", onScroll, { passive: true });
}

// ============ First-interaction responsiveness ============
// The opening route can look ready while a late import/commit monopolizes the
// next frame. Measure the first real pointer or scroll response in every
// session so this specific regression is visible in production telemetry.
let firstInteractionInstalled = false;
export function installFirstInteractionObserver() {
  if (!isBrowser || firstInteractionInstalled) return;
  firstInteractionInstalled = true;

  const cleanup = () => {
    window.removeEventListener("pointerdown", measure);
    window.removeEventListener("touchstart", measure);
    window.removeEventListener("scroll", measure);
  };
  const measure = (event: Event) => {
    cleanup();
    const startedAt = performance.now();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const duration = performance.now() - startedAt;
        recordMetric("opening.first_interaction.ms", duration, { type: event.type });
        if (duration >= 300) {
          reportFreezeIfSevere(duration, {
            phase: "first-interaction",
            interactionType: event.type,
          });
          setPerfDegraded("slow-first-interaction");
        }
      });
    });
  };

  window.addEventListener("pointerdown", measure, { passive: true });
  window.addEventListener("touchstart", measure, { passive: true });
  window.addEventListener("scroll", measure, { passive: true });
}
