
import { useState } from "react";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils";
import { allTools } from "@/data/toolsData";
import SearchBar from "./SearchBar";
import CategoryViewToggle from "./CategoryViewToggle";
import AllToolsButton from "./AllToolsButton";
import MainCategoriesView from "./MainCategoriesView";
import SubcategoriesView from "./SubcategoriesView";

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

  return (
    <div className="mb-8 px-4 sm:px-0">
      <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
      
      <CategoryViewToggle 
        viewMode={viewMode} 
        onViewModeChange={setViewMode} 
      />

      <div className="space-y-4">
        <AllToolsButton 
          selectedCategory={selectedCategory}
          totalTools={totalTools}
          onCategoryChange={onCategoryChange}
        />

        {viewMode === 'main' && (
          <MainCategoriesView 
            mainCategoryCounts={mainCategoryCounts}
            onMainCategoryClick={handleMainCategoryClick}
          />
        )}

        {viewMode === 'sub' && (
          <SubcategoriesView 
            selectedMainCategory={selectedMainCategory}
            selectedCategory={selectedCategory}
            categoriesWithCounts={categoriesWithCounts}
            onBackToMain={handleBackToMain}
            onSubCategoryClick={handleSubCategoryClick}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;
