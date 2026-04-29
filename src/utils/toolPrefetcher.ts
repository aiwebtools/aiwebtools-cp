// Tool detail page prefetching utility for instant navigation
import { allTools } from "@/data/toolsData";

// Cache of prefetched tool slugs
const prefetchedTools = new Set<string>();

// Generate slug from tool title (must match route generation logic)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Prefetch tool detail page data by pre-warming the cache
export const prefetchToolData = (toolTitle: string): void => {
  const slug = generateSlug(toolTitle);
  
  // Skip if already prefetched
  if (prefetchedTools.has(slug)) return;
  
  // Mark as prefetched immediately to prevent duplicate prefetches
  prefetchedTools.add(slug);
  
  // Prefetch the route document for faster navigation
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `/${slug}`;
      link.as = 'document';
      document.head.appendChild(link);
    }, { timeout: 500 });
  } else {
    // Fallback for Safari
    setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `/${slug}`;
      link.as = 'document';
      document.head.appendChild(link);
    }, 50);
  }
};

// Clear prefetch cache (useful for memory management)
export const clearPrefetchCache = (): void => {
  prefetchedTools.clear();
};

// Check if tool is already prefetched
export const isToolPrefetched = (toolTitle: string): boolean => {
  return prefetchedTools.has(generateSlug(toolTitle));
};
