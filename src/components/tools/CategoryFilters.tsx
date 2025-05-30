
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyle } from "@/utils/categoryStyles";
import { getStandardizedCategoryTitle, getSortedStandardizedCategories } from "@/utils/categoryTitles";
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
  
  // Use the sorted categories from the organized structure
  const sortedCategories = getSortedStandardizedCategories();
  
  // Show top 12 categories by default, then allow expansion
  const displayedCategories = showAll ? sortedCategories : sortedCategories.slice(0, 12);

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

  const totalTools = Object.values(categoriesWithCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="mb-8 px-4 sm:px-0">
      <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
      
      {/* Category Groups with better organization */}
      <div className="space-y-4">
        {/* All Tools Button */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={() => onCategoryChange(null)}
            variant={selectedCategory === null ? "default" : "outline"}
            size="lg"
            className={`text-sm transition-all duration-300 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            🎯 All AI Tools
            <Badge variant="secondary" className="ml-2 text-xs bg-black/30 text-gray-300">
              {totalTools}
            </Badge>
          </Button>
        </div>

        {/* Organized Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {displayedCategories.map(([category, count]) => {
            const categoryStyle = getCategoryStyle(category);
            const isSelected = category === selectedCategory;
            
            return (
              <Button
                key={category}
                onClick={() => handleCategoryClick(category)}
                variant="outline"
                size="sm"
                className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 text-xs border h-auto py-3 px-3 ${
                  isSelected 
                    ? `${categoryStyle.colors.selected} text-white shadow-lg border-white/30` 
                    : `${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`
                }`}
              >
                <div className="flex flex-col items-center space-y-1 w-full">
                  <span className="text-lg">{categoryStyle.emoji}</span>
                  <span className="relative z-10 text-center leading-tight font-medium">{category}</span>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs relative z-10 ${
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

        {/* Show More/Less Toggle */}
        {sortedCategories.length > 12 && (
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="sm"
              className="bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-sm"
            >
              {showAll ? "Show Less Categories" : `Show ${sortedCategories.length - 12} More Categories`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;
