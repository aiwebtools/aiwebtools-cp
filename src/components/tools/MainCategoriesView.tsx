
import { memo, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { useNavigate } from "react-router-dom";
import { getToolsByMainCategory } from "@/utils/categoryUtils/toolFiltering";
import { allTools } from "@/data/toolsData";
// Prefetched categories cache
const prefetchedCategories = new Set<string>();

interface MainCategoriesViewProps {
  mainCategoryCounts: Record<string, number>;
  onMainCategoryClick: (mainCategoryName: string) => void;
}

const MainCategoriesView = memo(({ mainCategoryCounts, onMainCategoryClick }: MainCategoriesViewProps) => {
  const navigate = useNavigate();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryClick = useCallback((mainCategoryName: string) => {
    // INSTANT navigation
    const encodedName = encodeURIComponent(mainCategoryName);
    onMainCategoryClick(mainCategoryName);
    navigate(`/main-category/${encodedName}`, { state: { instantCategory: { name: mainCategoryName } } });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [navigate, onMainCategoryClick]);

  // Prefetch category data on hover (after 100ms delay to avoid unnecessary prefetches)
  const handleCategoryHover = useCallback((mainCategoryName: string) => {
    import("@/pages/MainCategoryPage").catch(() => {});
    if (prefetchedCategories.has(mainCategoryName)) return;
    
    hoverTimeoutRef.current = setTimeout(() => {
      // Trigger cache population by calling getToolsByMainCategory
      getToolsByMainCategory(allTools, mainCategoryName);
      prefetchedCategories.add(mainCategoryName);
    }, 100);
  }, []);

  const handleCategoryLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {mainCategories.map((mainCat) => {
        const count = mainCategoryCounts[mainCat.name] || 0;
        if (count === 0) return null;
        
        return (
          <Button
            key={mainCat.name}
            onClick={() => handleCategoryClick(mainCat.name)}
            onMouseEnter={() => handleCategoryHover(mainCat.name)}
            onMouseLeave={handleCategoryLeave}
            variant="outline"
            size="sm"
            className="group relative overflow-hidden transition-all duration-150 transform hover:scale-105 text-xs border h-auto py-4 px-3 min-w-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30 text-gray-200 hover:from-purple-600/30 hover:to-blue-600/30 hover:text-white hover:shadow-md hover:border-purple-400/50"
          >
            <div className="flex flex-col items-center space-y-2 w-full min-w-0">
              <span className="text-xl flex-shrink-0">{mainCat.emoji}</span>
              <span className="relative z-10 text-center leading-tight font-bold text-xs break-words hyphens-auto min-w-0 max-w-full">{mainCat.name}</span>
              <Badge 
                variant="secondary" 
                className="text-xs relative z-10 bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 flex-shrink-0"
              >
                {count} tools
              </Badge>
            </div>
          </Button>
        );
      })}
    </div>
  );
});

MainCategoriesView.displayName = "MainCategoriesView";

export default MainCategoriesView;
