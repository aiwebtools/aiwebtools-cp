
import { Button } from "@/components/ui/button";

interface LoadMoreSectionProps {
  showLoadMoreButton?: boolean;
  hasMoreTools: boolean;
  isLoading: boolean;
  selectedCategory: string | null;
  searchTerm: string;
  showAllFeaturedTools: boolean;
  actualDisplayedCount: number;
  totalToolsCount: number;
  onLoadMore: () => void;
}

const LoadMoreSection = ({
  showLoadMoreButton = false,
  hasMoreTools,
  isLoading,
  selectedCategory,
  searchTerm,
  showAllFeaturedTools,
  actualDisplayedCount,
  totalToolsCount,
  onLoadMore
}: LoadMoreSectionProps) => {
  const handleLoadMoreButton = () => {
    // Just load more tools without any scrolling
    onLoadMore();
  };

  return (
    <>
      {/* Enhanced SEE MORE AI TOOLS Button - only show when needed and not loading */}
      {showLoadMoreButton && hasMoreTools && !isLoading && (
        <div className="text-center mt-12 mb-16 px-4">
          <Button
            onClick={handleLoadMoreButton}
            size="lg"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            🚀 SEE MORE AI TOOLS
          </Button>
          <div className="mt-4 text-cyan-300 text-sm">
            Showing {actualDisplayedCount} of {totalToolsCount} amazing AI tools
          </div>
        </div>
      )}

      {/* Homepage load more button - only when no category/search and showing all featured tools */}
      {!showLoadMoreButton && hasMoreTools && !selectedCategory && !searchTerm && showAllFeaturedTools && !isLoading && (
        <div className="text-center mt-8 mb-8 px-4">
          <Button
            onClick={onLoadMore}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            data-load-more-trigger
          >
            Load More AI Web Tools GPTs
          </Button>
          <div className="mt-3 text-cyan-300 text-sm">
            {actualDisplayedCount} of {totalToolsCount} AI Web Tools GPTs loaded
          </div>
        </div>
      )}

      {/* Show completion message when all tools are loaded */}
      {!hasMoreTools && !isLoading && totalToolsCount > 20 && (
        <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
          <div className="text-2xl mb-2">🎉</div>
          <div className="text-lg font-semibold mb-2">
            You've explored all {totalToolsCount} amazing AI tools!
          </div>
          <div className="text-sm opacity-80">
            Try searching or filtering by category to discover specific tools.
          </div>
        </div>
      )}
    </>
  );
};

export default LoadMoreSection;
