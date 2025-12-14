import { memo } from "react";
import ToolCardSkeleton from "./ToolCardSkeleton";

interface ToolsGridSkeletonProps {
  count?: number;
}

const ToolsGridSkeleton = memo(({ count = 12 }: ToolsGridSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ToolCardSkeleton key={index} />
      ))}
    </div>
  );
});

ToolsGridSkeleton.displayName = "ToolsGridSkeleton";

export default ToolsGridSkeleton;
