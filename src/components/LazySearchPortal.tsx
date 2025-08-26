import React, { Suspense, lazy, memo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Search } from 'lucide-react';

// Lazy load the SearchPortal component
const SearchPortal = lazy(() => import('@/components/SearchPortal'));

const SearchPortalSkeleton = () => (
  <div className="max-w-6xl mx-auto">
    <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
      <div className="flex items-center justify-center mb-6">
        <Search className="w-8 h-8 text-cyan-400 animate-pulse" />
      </div>
      
      <div className="space-y-6">
        <Skeleton className="h-12 w-full rounded-lg" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))}
        </div>
        
        <div className="text-center">
          <Skeleton className="h-10 w-48 mx-auto rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

const LazySearchPortal = memo(() => {
  return (
    <Suspense fallback={<SearchPortalSkeleton />}>
      <SearchPortal />
    </Suspense>
  );
});

LazySearchPortal.displayName = 'LazySearchPortal';

export default LazySearchPortal;