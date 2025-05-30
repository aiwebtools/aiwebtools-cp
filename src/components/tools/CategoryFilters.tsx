
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyle } from "@/utils/categoryStyles";
import { getStandardizedCategoryTitle, getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils";
import { allTools } from "@/data/toolsData";
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
  const [viewMode, setViewMode] = useState<'main' | 'sub'>('main');
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  
  // Get main category counts
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);
  
  // Use the sorted categories from the organized structure
  const sortedCategories = getSortedStandardizedCategories();
  
  const handleMainCategoryClick = (mainCategoryName: string) => {
    setSelectedMainCategory(mainCategoryName);
    setViewMode('sub');
  };

  const handleSubCategoryClick = (category: string) => {
    onCategoryChange(category);
    
    // Scroll to the tools grid after a short delay to allow state update
    setTimeout(() => {
      const toolsGrid = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3.xl\\:grid-cols-4');
      if (toolsGrid) {
        toolsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleBackToMain = () => {
    setViewMode('main');
    setSelectedMainCategory(null);
  };

  const totalTools = Object.values(categoriesWithCounts).reduce((a, b) => a + b, 0);

  // Get subcategories for selected main category
  const getSubcategoriesForDisplay = () => {
    if (!selectedMainCategory) return [];
    
    const mainCat = mainCategories.find(cat => cat.name === selectedMainCategory);
    if (!mainCat) return [];
    
    return mainCat.subcategories
      .map(sub => [sub, categoriesWithCounts[sub] || 0] as [string, number])
      .filter(([, count]) => count > 0)
      .sort(([a], [b]) => a.localeCompare(b));
  };

  return (
    <div className="mb-8 px-4 sm:px-0">
      <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
      
      {/* View Mode Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-800/50 rounded-lg p-1">
          <Button
            onClick={() => setViewMode('main')}
            variant={viewMode === 'main' ? "default" : "ghost"}
            size="sm"
            className={`text-sm ${
              viewMode === 'main'
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            📁 Main Categories
          </Button>
          <Button
            onClick={() => setViewMode('sub')}
            variant={viewMode === 'sub' ? "default" : "ghost"}
            size="sm"
            className={`text-sm ${
              viewMode === 'sub'
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            🗂️ All Subcategories
          </Button>
        </div>
      </div>

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

        {/* Main Categories View */}
        {viewMode === 'main' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {mainCategories.map((mainCat) => {
              const count = mainCategoryCounts[mainCat.name] || 0;
              if (count === 0) return null;
              
              return (
                <Button
                  key={mainCat.name}
                  onClick={() => handleMainCategoryClick(mainCat.name)}
                  variant="outline"
                  size="sm"
                  className="group relative overflow-hidden transition-all duration-300 transform hover:scale-105 text-xs border h-auto py-4 px-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30 text-gray-200 hover:from-purple-600/30 hover:to-blue-600/30 hover:text-white hover:shadow-md hover:border-purple-400/50"
                >
                  <div className="flex flex-col items-center space-y-2 w-full">
                    <span className="text-xl">{mainCat.emoji}</span>
                    <span className="relative z-10 text-center leading-tight font-bold text-xs">{mainCat.name}</span>
                    <Badge 
                      variant="secondary" 
                      className="text-xs relative z-10 bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                    >
                      {count} tools
                    </Badge>
                  </div>
                </Button>
              );
            })}
          </div>
        )}

        {/* Subcategories View */}
        {viewMode === 'sub' && (
          <>
            {selectedMainCategory && (
              <div className="flex items-center justify-between mb-4">
                <Button
                  onClick={handleBackToMain}
                  variant="outline"
                  size="sm"
                  className="bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-sm"
                >
                  ← Back to Main Categories
                </Button>
                <h3 className="text-lg font-semibold text-cyan-400">
                  {selectedMainCategory} Subcategories
                </h3>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {(selectedMainCategory ? getSubcategoriesForDisplay() : sortedCategories).map(([category, count]) => {
                const categoryStyle = getCategoryStyle(category);
                const isSelected = category === selectedCategory;
                
                return (
                  <Button
                    key={category}
                    onClick={() => handleSubCategoryClick(category)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;
