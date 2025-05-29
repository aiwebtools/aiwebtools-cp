
import { Button } from "@/components/ui/button";

interface LoadMoreButtonProps {
  displayedCount: number;
  totalCount: number;
  onLoadMore: () => void;
}

const LoadMoreButton = ({ displayedCount, totalCount, onLoadMore }: LoadMoreButtonProps) => {
  if (displayedCount >= totalCount) {
    if (totalCount > 20) {
      return (
        <div className="text-center mt-12 text-cyan-300">
          🎉 You've seen all {totalCount} tools! 
          <span className="block mt-2">Try searching or filtering by category to discover specific tools.</span>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="text-center mt-12">
      <div className="mb-4 text-cyan-200">
        Showing {displayedCount} of {totalCount} tools
      </div>
      <Button 
        onClick={onLoadMore}
        size="lg" 
        variant="outline" 
        className="border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black px-8 py-4 rounded-xl transition-all duration-300 bg-black/50"
      >
        Load More Tools
      </Button>
    </div>
  );
};

export default LoadMoreButton;
