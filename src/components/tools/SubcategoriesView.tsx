
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyle } from "@/utils/categoryStyles";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { mainCategories } from "@/utils/mainCategoryMapping";

interface SubcategoriesViewProps {
  selectedMainCategory: string | null;
  selectedCategory: string | null;
  categoriesWithCounts: Record<string, number>;
  onBackToMain: () => void;
  onSubCategoryClick: (category: string) => void;
}

const SubcategoriesView = ({ 
  selectedMainCategory, 
  selectedCategory, 
  categoriesWithCounts, 
  onBackToMain, 
  onSubCategoryClick 
}: SubcategoriesViewProps) => {
  const sortedCategories = getSortedStandardizedCategories();

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
    <>
      {selectedMainCategory && (
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBackToMain}
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
              onClick={() => onSubCategoryClick(category)}
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
  );
};

export default SubcategoriesView;
