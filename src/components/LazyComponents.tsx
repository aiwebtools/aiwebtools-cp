import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
export const LazySearchPortal = lazy(() => import('@/components/SearchPortal'));
export const LazyFeaturedToolsSection = lazy(() => import('@/components/tools/FeaturedToolsSection'));
export const LazyToolsGrid = lazy(() => import('@/components/tools/ToolsGrid'));

// Loading skeletons for better UX
const SearchPortalSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-12 w-full" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-24 w-full" />
      ))}
    </div>
  </div>
);

const ToolsGridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 12 }).map((_, i) => (
      <Skeleton key={i} className="h-48 w-full" />
    ))}
  </div>
);

const FeaturedToolsSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-8 w-48" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-64 w-full" />
      ))}
    </div>
  </div>
);

// Wrapped components with suspense
export const SuspenseSearchPortal = (props: any) => (
  <Suspense fallback={<SearchPortalSkeleton />}>
    <LazySearchPortal {...props} />
  </Suspense>
);

export const SuspenseToolsGrid = (props: any) => (
  <Suspense fallback={<ToolsGridSkeleton />}>
    <LazyToolsGrid {...props} />
  </Suspense>
);

export const SuspenseFeaturedToolsSection = (props: any) => (
  <Suspense fallback={<FeaturedToolsSkeleton />}>
    <LazyFeaturedToolsSection {...props} />
  </Suspense>
);