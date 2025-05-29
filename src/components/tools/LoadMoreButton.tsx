
import { Button } from "@/components/ui/button";

interface LoadMoreButtonProps {
  displayedCount: number;
  totalCount: number;
  onLoadMore: () => void;
  isLoading?: boolean;
  showAsBackup?: boolean;
}

const LoadMoreButton = ({ 
  displayedCount, 
  totalCount, 
  onLoadMore, 
  isLoading = false,
  showAsBackup = false 
}: LoadMoreButtonProps) => {
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
        disabled={isLoading}
        size="lg" 
        variant="outline" 
        className={`border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black px-8 py-4 rounded-xl transition-all duration-300 bg-black/50 ${
          showAsBackup ? 'bg-orange-500/20 border-orange-500 hover:bg-orange-600' : ''
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
            <span>Loading More Tools...</span>
          </div>
        ) : (
          <>
            {showAsBackup ? '🚨 Load More (Backup)' : 'Load More Tools'}
          </>
        )}
      </Button>
      {showAsBackup && (
        <div className="mt-2 text-xs text-orange-300">
          Backup button in case auto-loading isn't working
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;
