
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
  
  // Don't show anything if loading or no more tools
  if (isLoading || !hasMoreTools) return null;
  
  // Only show the load more button when we've expanded past featured tools
  // And only on homepage (no category/search)
  if (!selectedCategory && !searchTerm && showAllFeaturedTools && actualDisplayedCount > 8) {
    return (
      <div className="text-center mt-8 mb-8 px-4">
        <Button
          onClick={onLoadMore}
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
        >
          Load More AI Web Tools GPTs
        </Button>
        <div className="mt-3 text-cyan-300 text-sm">
          {actualDisplayedCount} of {totalToolsCount} AI tools loaded
        </div>
      </div>
    );
  }

  return null;
};

export default LoadMoreSection;
