
import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";
import { Tool } from "@/types/tools";

interface MainCategoryFilterProps {
  tools: Tool[];
  onFilteredToolsChange: (filteredTools: Tool[]) => void;
  currentMainCategory?: string;
}

const MainCategoryFilter = ({ 
  tools, 
  onFilteredToolsChange, 
  currentMainCategory 
}: MainCategoryFilterProps) => {
  const navigate = useNavigate();
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);

  // Get counts for ALL categories using global tools data
  const mainCategoryCounts = useMemo(() => {
    return getMainCategoriesWithCounts(tools);
  }, [tools]);

  const handleMainCategoryClick = useCallback((mainCategoryName: string) => {
    // IMMEDIATE scroll to top BEFORE navigation
    window.scrollTo(0, 0);
    
    if (mainCategoryName === currentMainCategory) {
      // Same category - just filter tools
      setSelectedMainCategory(mainCategoryName);
      onFilteredToolsChange(tools);
    } else {
      // Different category - navigate
      const encodedName = encodeURIComponent(mainCategoryName);
      navigate(`/main-category/${encodedName}`);
    }
  }, [currentMainCategory, navigate, tools, onFilteredToolsChange]);

  const handleShowAllClick = useCallback(() => {
    // IMMEDIATE scroll to top BEFORE navigation
    window.scrollTo(0, 0);
    
    setSelectedMainCategory(null);
    onFilteredToolsChange(tools);
  }, [tools, onFilteredToolsChange]);

  // Initialize with current category
  useEffect(() => {
    if (currentMainCategory) {
      setSelectedMainCategory(currentMainCategory);
    }
  }, [currentMainCategory]);

  return (
    <div className="mb-8">
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
        Browse by Main Category
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-6">
        {/* Show All Button */}
        <Button
          onClick={handleShowAllClick}
          variant="outline"
          size="sm"
          className={`group relative overflow-hidden transition-all duration-150 transform hover:scale-105 text-xs border h-auto py-4 px-3 min-w-0 ${
            !selectedMainCategory
              ? "bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-yellow-400/50 text-yellow-200 shadow-lg"
              : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/50 text-gray-200 hover:from-purple-600/20 hover:to-blue-600/20 hover:text-white hover:shadow-md hover:border-purple-400/50"
          }`}
        >
          <div className="flex flex-col items-center space-y-2 w-full min-w-0">
            <span className="text-xl flex-shrink-0">🌟</span>
            <span className="relative z-10 text-center leading-tight font-bold text-xs break-words hyphens-auto min-w-0 max-w-full">Show All</span>
            <Badge 
              variant="secondary" 
              className={`text-xs relative z-10 flex-shrink-0 ${
                !selectedMainCategory
                  ? "bg-yellow-500/20 text-yellow-200 border-yellow-400/40"
                  : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
              }`}
            >
              {tools.length}
            </Badge>
          </div>
        </Button>

        {/* Main Category Buttons */}
        {mainCategories.map((mainCat) => {
          const count = mainCategoryCounts[mainCat.name] || 0;
          if (count === 0) return null;
          
          const isSelected = selectedMainCategory === mainCat.name;
          
          return (
            <Button
              key={mainCat.name}
              onClick={() => handleMainCategoryClick(mainCat.name)}
              variant="outline"
              size="sm"
              className={`group relative overflow-hidden transition-all duration-150 transform hover:scale-105 text-xs border h-auto py-4 px-3 min-w-0 ${
                isSelected
                  ? "bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-cyan-400/50 text-cyan-200 shadow-lg"
                  : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/50 text-gray-200 hover:from-purple-600/20 hover:to-blue-600/20 hover:text-white hover:shadow-md hover:border-purple-400/50"
              }`}
            >
              <div className="flex flex-col items-center space-y-2 w-full min-w-0">
                <span className="text-xl flex-shrink-0">{mainCat.emoji}</span>
                <span className="relative z-10 text-center leading-tight font-bold text-xs break-words hyphens-auto min-w-0 max-w-full">{mainCat.name}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs relative z-10 flex-shrink-0 ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-200 border-cyan-400/40"
                      : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                  }`}
                >
                  {count} tools
                </Badge>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategoryFilter;
