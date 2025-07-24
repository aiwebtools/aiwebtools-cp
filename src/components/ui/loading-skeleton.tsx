import { Skeleton } from "@/components/ui/skeleton";

export const ToolCardSkeleton = () => (
  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 h-full animate-pulse">
    <div className="flex items-center gap-3 mb-4">
      <Skeleton className="w-12 h-12 rounded-lg bg-gray-700" />
      <div className="flex-1">
        <Skeleton className="h-5 w-3/4 mb-2 bg-gray-700" />
        <Skeleton className="h-4 w-1/2 bg-gray-700" />
      </div>
    </div>
    <Skeleton className="h-32 w-full mb-4 rounded-lg bg-gray-700" />
    <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
    <Skeleton className="h-4 w-2/3 mb-4 bg-gray-700" />
    <Skeleton className="h-10 w-full bg-gray-700" />
  </div>
);

export const ToolGridSkeleton = ({ count = 12 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
    {Array.from({ length: count }).map((_, index) => (
      <ToolCardSkeleton key={index} />
    ))}
  </div>
);