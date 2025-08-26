import React, { memo } from "react";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ShowMoreFeaturedButton from "@/components/tools/ShowMoreFeaturedButton";
import LoadMoreSection from "@/components/tools/LoadMoreSection";
import { useFeaturedToolsLogic } from "@/hooks/useFeaturedToolsLogic";

interface FeaturedToolsProps {
  showLoadMoreButton?: boolean;
  onToolsLoaded?: (count: number) => void;
}

const FeaturedTools = memo(({ showLoadMoreButton = false, onToolsLoaded }: FeaturedToolsProps) => {
  const hookData = useFeaturedToolsLogic({ onToolsLoaded });
  
  const {
    selectedCategory,
    searchTerm,
    isLoading,
    filteredTools,
    totalToolsCount,
    hasMoreTools,
    actualDisplayedCount,
    shouldShowFeaturedToolsButton,
    initialDisplayCount,
    showAllFeaturedTools,
    handleCategoryChange,
    handleLoadMore,
    handleShowMoreFeaturedTools
  } = hookData;

  return (
    <div className="w-full">
      {/* Featured Tools Grid - Just show the tools, no search */}
      <ToolsGrid
        tools={filteredTools}
        displayedCount={actualDisplayedCount}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onLoadMore={handleLoadMore}
        hasInfiniteScroll={showAllFeaturedTools}
        isLoading={isLoading}
        onCategoryChange={handleCategoryChange}
      />

      {/* Show More Featured Tools Button - appears after featured tools */}
      {shouldShowFeaturedToolsButton && (
        <ShowMoreFeaturedButton
          onClick={handleShowMoreFeaturedTools}
          toolsCount={filteredTools.length}
          initialDisplayCount={initialDisplayCount}
          className="mt-8"
        />
      )}

      {/* Only infinite scroll after featured tools are expanded - no manual buttons */}
      {showAllFeaturedTools && (
        <div className="text-center mt-8 mb-8 px-4 text-cyan-300 text-sm">
          Keep scrolling - more tools load automatically!
        </div>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.showLoadMoreButton === nextProps.showLoadMoreButton &&
    prevProps.onToolsLoaded === nextProps.onToolsLoaded
  );
});

FeaturedTools.displayName = "FeaturedTools";

export default FeaturedTools;