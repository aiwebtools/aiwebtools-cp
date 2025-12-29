import { useEffect, useCallback } from 'react';

// Common routes to prefetch on app load
const PRIORITY_ROUTES = [
  '/main-category/ALL%20AI%20TOOLS',
  '/main-category/AI%20AGENTS',
  '/main-category/IMAGE%20%26%20DESIGN',
  '/main-category/VIDEO%20%26%20MULTIMEDIA',
  '/main-category/WRITING%20%26%20CONTENT',
  '/main-category/CODING%20%26%20DEVELOPMENT',
  '/ai-tools-hub',
  '/favorites',
];

// Prefetch a route by creating a prefetch link
const prefetchRoute = (route: string) => {
  // Check if already prefetched
  if (document.querySelector(`link[href="${route}"]`)) return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  link.as = 'document';
  document.head.appendChild(link);
};

// Prefetch with requestIdleCallback for non-blocking - immediate for better navigation
const idlePrefetch = (routes: string[]) => {
  // Prefetch immediately but in microtask to not block render
  queueMicrotask(() => {
    routes.forEach(prefetchRoute);
  });
};

export const usePrefetchRoutes = () => {
  useEffect(() => {
    // Prefetch priority routes after initial render
    idlePrefetch(PRIORITY_ROUTES);
  }, []);
};

// Hook for prefetching on hover
export const usePrefetchOnHover = () => {
  const prefetch = useCallback((route: string) => {
    prefetchRoute(route);
  }, []);

  return prefetch;
};

// Utility to prefetch a specific route imperatively
export const prefetchNow = (route: string) => {
  prefetchRoute(route);
};
