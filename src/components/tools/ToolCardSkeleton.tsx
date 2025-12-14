import { memo } from "react";

const ToolCardSkeleton = memo(() => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl p-3 sm:p-4 lg:p-6 h-full flex flex-col animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="h-5 bg-gray-700/50 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-700/30 rounded w-1/2" />
        </div>
      </div>
      
      {/* Image skeleton */}
      <div className="w-full h-40 bg-gray-700/40 rounded-lg mb-3" />
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4 flex-1">
        <div className="h-3 bg-gray-700/30 rounded w-full" />
        <div className="h-3 bg-gray-700/30 rounded w-5/6" />
        <div className="h-3 bg-gray-700/30 rounded w-4/6" />
      </div>
      
      {/* Tags skeleton */}
      <div className="flex gap-2 mb-3">
        <div className="h-5 bg-gray-700/30 rounded-full w-16" />
        <div className="h-5 bg-gray-700/30 rounded-full w-20" />
      </div>
      
      {/* Button skeleton */}
      <div className="h-10 bg-cyan-900/30 rounded-lg w-full" />
    </div>
  );
});

ToolCardSkeleton.displayName = "ToolCardSkeleton";

export default ToolCardSkeleton;
