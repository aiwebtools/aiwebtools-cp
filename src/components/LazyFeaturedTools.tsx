import React, { Suspense, lazy, memo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load the FeaturedTools component
const FeaturedToolsSection = lazy(() => import('@/components/tools/FeaturedToolsSection'));

interface LazyFeaturedToolsProps {
  onToolsLoaded?: (count: number) => void;
}

const ToolsLoadingSkeleton = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <Skeleton className="h-12 w-96 mx-auto mb-4" />
      <Skeleton className="h-6 w-64 mx-auto" />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  </div>
);

const LazyFeaturedTools = memo(({ onToolsLoaded }: LazyFeaturedToolsProps) => {
  return (
    <Suspense fallback={<ToolsLoadingSkeleton />}>
      <FeaturedToolsSection onToolsLoaded={onToolsLoaded} />
    </Suspense>
  );
});

LazyFeaturedTools.displayName = 'LazyFeaturedTools';

export default LazyFeaturedTools;