
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyle } from "@/utils/categoryStyles";

interface CategorySelectorProps {
  categoriesWithCounts: Record<string, number>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = forwardRef<HTMLDivElement, CategorySelectorProps>(
  ({ categoriesWithCounts, selectedCategory, onCategoryChange }, ref) => {
    return (
      <div className="mb-16" ref={ref}>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
          Browse Other Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {Object.entries(categoriesWithCounts)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, count]) => {
              const categoryStyle = getCategoryStyle(category);
              const isSelected = category === selectedCategory;
              
              return (
                <Button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  variant="outline"
                  size="sm"
                  className={`
                    group relative overflow-hidden transition-all duration-300 transform hover:scale-105 w-full min-w-fit px-4 py-3 h-auto whitespace-normal text-left border
                    ${isSelected 
                      ? `${categoryStyle.colors.selected} text-white shadow-lg border-white/30` 
                      : `${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`
                    }
                  `}
                >
                  <div className="flex justify-between items-center w-full gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-lg">{categoryStyle.emoji}</span>
                      <span className="relative z-10 text-sm font-medium leading-tight">{category}</span>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs relative z-10 flex-shrink-0 ${
                        isSelected
                          ? "bg-white/25 text-white border-white/30" 
                          : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                      }`}
                    >
                      {count}
                    </Badge>
                  </div>
                </Button>
              );
            })}
        </div>
      </div>
    );
  }
);

CategorySelector.displayName = "CategorySelector";

export default CategorySelector;
