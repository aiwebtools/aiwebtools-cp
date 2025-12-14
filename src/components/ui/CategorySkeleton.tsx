import { memo } from 'react';
import { Loader2 } from 'lucide-react';

const shimmer = "animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%]";

const CategorySkeleton = memo(() => {
  return (
    <div className="w-full">
      {/* Spinning loader indicator */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
        <span className="text-cyan-300 text-sm font-medium">Loading AI Tools...</span>
      </div>
      
      {/* Header skeleton */}
      <div className="mb-6 flex flex-col items-center">
        <div className={`h-8 w-48 rounded-lg ${shimmer} mb-3`} />
        <div className={`h-4 w-72 rounded ${shimmer}`} />
      </div>
      
      {/* Filter bar skeleton */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-9 w-24 rounded-full ${shimmer}`} />
        ))}
      </div>
      
      {/* Tools grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-4"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {/* Tool card skeleton */}
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-lg ${shimmer}`} />
              <div className="flex-1">
                <div className={`h-5 w-3/4 rounded ${shimmer} mb-2`} />
                <div className={`h-3 w-1/2 rounded ${shimmer}`} />
              </div>
            </div>
            <div className={`h-3 w-full rounded ${shimmer} mb-2`} />
            <div className={`h-3 w-4/5 rounded ${shimmer}`} />
          </div>
        ))}
      </div>
    </div>
  );
});

CategorySkeleton.displayName = 'CategorySkeleton';

export default CategorySkeleton;
