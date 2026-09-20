// Tool detail page prefetching utility for instant navigation.
//
// The previous version injected `<link rel="prefetch" as="document">` tags, which
// do nothing for in-app (SPA) navigation — the browser fetched an HTML shell the
// router never uses, while the real cost of opening a tool page (the ToolDetail
// code chunk plus the large tool index) was still paid on click. That is what
// made tool pages feel slow.
//
// Now we warm the actual JavaScript modules once, off the critical path, so the
// first click on any tool renders immediately.

let modulesWarmed = false;
let warmPromise: Promise<unknown> | null = null;

const prefetchedTools = new Set<string>();

const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const schedule = (fn: () => void, timeout = 600) => {
  if (typeof window === 'undefined') return;
  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void })
    .requestIdleCallback;
  if (idle) idle(fn, { timeout });
  else window.setTimeout(fn, 60);
};

/**
 * Warm the tool-detail route code and the tool index so navigating to any tool
 * page is instant. Safe to call as often as you like — it only runs once.
 */
export const warmToolDetailModules = (): Promise<unknown> => {
  if (warmPromise) return warmPromise;
  modulesWarmed = true;
  warmPromise = Promise.all([
    import('@/pages/ToolDetail').catch(() => null),
    import('@/data/toolsData').catch(() => null),
  ]);
  return warmPromise;
};

/**
 * Called on hover/touch of a tool card. The first call warms the shared modules;
 * afterwards it is a no-op, since every tool page reuses the same code and data.
 */
export const prefetchToolData = (toolTitle: string): void => {
  const slug = generateSlug(toolTitle);
  if (prefetchedTools.has(slug) && modulesWarmed) return;
  prefetchedTools.add(slug);
  schedule(() => {
    void warmToolDetailModules();
  });
};

export const clearPrefetchCache = (): void => {
  prefetchedTools.clear();
};

export const isToolPrefetched = (toolTitle: string): boolean =>
  modulesWarmed || prefetchedTools.has(generateSlug(toolTitle));
