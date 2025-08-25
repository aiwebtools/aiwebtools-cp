
import React, { memo } from "react";
import CategoryFilters from "@/components/tools/CategoryFilters";
import ActiveFilters from "@/components/tools/ActiveFilters";
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
    categoriesWithCounts,
    hasMoreTools,
    actualDisplayedCount,
    shouldShowFeaturedToolsButton,
    initialDisplayCount,
    handleCategoryChange,
    handleSearchChange,
    handleLoadMore,
    handleShowMoreFeaturedTools
  } = useFeaturedToolsLogic({ onToolsLoaded });

  // Convert categoriesWithCounts array to Record format if needed
  const categoriesRecord = Array.isArray(categoriesWithCounts) 
    ? categoriesWithCounts.reduce((acc, item) => {
        acc[item.name] = item.count;
        return acc;
      }, {} as Record<string, number>)
    : categoriesWithCounts;

  return (
    <div className="w-full">
      {/* Show More Featured Tools Button - placed above search bar */}
      {shouldShowFeaturedToolsButton && (
        <ShowMoreFeaturedButton
          onClick={handleShowMoreFeaturedTools}
          toolsCount={filteredTools.length}
          initialDisplayCount={initialDisplayCount}
        />
      )}

      <div className="px-4 sm:px-0">
        <ActiveFilters
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          totalTools={totalToolsCount}
        />
      </div>

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

      {/* Show More Featured Tools Button - appears after Marriage Mender GPT */}
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
