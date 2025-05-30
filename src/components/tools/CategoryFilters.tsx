
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyle } from "@/utils/categoryStyles";
import SearchBar from "./SearchBar";

interface CategoryFiltersProps {
  categoriesWithCounts: Record<string, number>;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (term: string) => void;
  searchTerm: string;
}

const CategoryFilters = ({
  categoriesWithCounts,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
  searchTerm,
}: CategoryFiltersProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const categories = Object.entries(categoriesWithCounts).sort(([a], [b]) => a.localeCompare(b));
  const displayedCategories = showAll ? categories : categories.slice(0, 8);

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    
    // Scroll to the tools grid after a short delay to allow state update
    setTimeout(() => {
      const toolsGrid = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4');
      if (toolsGrid) {
        toolsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="mb-8 px-4 sm:px-0">
      <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        <Button
          onClick={() => onCategoryChange(null)}
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          className={`text-xs sm:text-sm transition-all duration-300 ${
            selectedCategory === null
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
              : "bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          All Tools
          <Badge variant="secondary" className="ml-2 text-xs bg-black/30 text-gray-300">
            {Object.values(categoriesWithCounts).reduce((a, b) => a + b, 0)}
          </Badge>
        </Button>

        {displayedCategories.map(([category, count]) => {
          const categoryStyle = getCategoryStyle(category);
          const isSelected = category === selectedCategory;
          
          return (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
              variant="outline"
              size="sm"
              className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm border ${
                isSelected 
                  ? `${categoryStyle.colors.selected} text-white shadow-lg border-white/30` 
                  : `${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`
              }`}
            >
              <span className="text-sm mr-1">{categoryStyle.emoji}</span>
              <span className="relative z-10">{category}</span>
              <Badge 
                variant="secondary" 
                className={`ml-2 text-xs relative z-10 ${
                  isSelected
                    ? "bg-white/25 text-white border-white/30" 
                    : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                }`}
              >
                {count}
              </Badge>
            </Button>
          );
        })}

        {categories.length > 8 && (
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="sm"
            className="bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-xs sm:text-sm"
          >
            {showAll ? "Show Less" : `+${categories.length - 8} More`}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;
