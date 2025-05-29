
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyle } from "@/utils/categoryStyles";

interface SeeMoreCategoriesButtonProps {
  categoriesWithCounts: Record<string, number>;
  onCategoryChange: (category: string) => void;
  minCategoriesToShow?: number;
}

const SeeMoreCategoriesButton = ({ 
  categoriesWithCounts, 
  onCategoryChange,
  minCategoriesToShow = 12 
}: SeeMoreCategoriesButtonProps) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const allCategories = Object.entries(categoriesWithCounts)
    .sort(([a], [b]) => a.localeCompare(b));
  
  // Only show the button if there are more categories than the minimum
  if (allCategories.length <= minCategoriesToShow) {
    return null;
  }

  const displayedCategories = showAllCategories 
    ? allCategories 
    : allCategories.slice(0, minCategoriesToShow);

  const remainingCount = allCategories.length - minCategoriesToShow;

  return (
    <div className="mt-12 px-4 sm:px-0">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-6">
          <span className="text-2xl mr-3">🎯</span>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Explore More Categories
            </h3>
            <p className="text-sm text-gray-300">
              Discover tools organized by specialty and purpose
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {displayedCategories.map(([category, count]) => {
          const categoryStyle = getCategoryStyle(category);
          
          return (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              variant="outline"
              size="sm"
              className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 text-sm border ${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`}
            >
              <span className="text-sm mr-2">{categoryStyle.emoji}</span>
              <span className="relative z-10">{category}</span>
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs relative z-10 bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
              >
                {count}
              </Badge>
            </Button>
          );
        })}
      </div>

      {!showAllCategories && (
        <div className="text-center">
          <Button
            onClick={() => setShowAllCategories(true)}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            🔍 See {remainingCount} More Categories
          </Button>
        </div>
      )}
    </div>
  );
};

export default SeeMoreCategoriesButton;
