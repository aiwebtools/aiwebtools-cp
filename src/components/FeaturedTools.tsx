
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
    handleCategoryChange,
    handleLoadMore,
    handleShowMoreFeaturedTools
  } = useFeaturedToolsLogic({ onToolsLoaded });

  return (
    <div className="w-full">
      {/* Featured Tools Grid - Just show the tools, no search */}
      <ToolsGrid
        tools={filteredTools}
        displayedCount={actualDisplayedCount}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onLoadMore={handleLoadMore}
        hasInfiniteScroll={true}
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

      <LoadMoreSection
        showLoadMoreButton={showLoadMoreButton}
        hasMoreTools={hasMoreTools}
        isLoading={isLoading}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        showAllFeaturedTools={true}
        actualDisplayedCount={actualDisplayedCount}
        totalToolsCount={totalToolsCount}
        onLoadMore={handleLoadMore}
      />
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
