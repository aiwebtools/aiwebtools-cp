
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import SearchBar from "@/components/tools/SearchBar";
import CategoryViewToggle from "@/components/tools/CategoryViewToggle";
import MainCategoriesView from "@/components/tools/MainCategoriesView";
import SubcategoriesView from "@/components/tools/SubcategoriesView";
import AllToolsButton from "@/components/tools/AllToolsButton";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";
import { allTools } from "@/data/toolsData";

interface CategoryFiltersProps {
  categoriesWithCounts: Record<string, number>;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (searchTerm: string) => void;
  searchTerm: string;
}

const CategoryFilters = ({
  categoriesWithCounts,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
  searchTerm
}: CategoryFiltersProps) => {
  const [viewMode, setViewMode] = useState<'main' | 'sub'>('main');
  const [isExpanded, setIsExpanded] = useState(true);

  // Get accurate main category counts from the global cache
  const mainCategoriesWithCounts = getMainCategoriesWithCounts(allTools);

  const totalTools = Object.values(categoriesWithCounts).reduce((sum, count) => sum + count, 0);

  const handleCategorySelect = (category: string | null) => {
    onCategoryChange(category);
  };

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          preventAutoNavigation={true}
        />
      </div>

      {/* View Toggle */}
      <CategoryViewToggle 
        viewMode={viewMode} 
        onViewModeChange={setViewMode} 
      />

      {/* All Tools Button */}
      <AllToolsButton
        selectedCategory={selectedCategory}
        totalTools={totalTools}
        onCategoryChange={handleCategorySelect}
      />

      {/* Categories Section */}
      <div className="mb-4">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          className="w-full text-cyan-300 hover:text-cyan-100 mb-4"
        >
          <span className="text-lg font-semibold">
            {viewMode === 'main' ? '📁 Browse Main Categories' : '🗂️ Browse All SubCategories'}
          </span>
          {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>

        {isExpanded && (
          <div className="space-y-4">
            {viewMode === 'main' ? (
              <MainCategoriesView
                mainCategoryCounts={mainCategoriesWithCounts}
                onMainCategoryClick={handleCategorySelect}
              />
            ) : (
              <SubcategoriesView
                categoriesWithCounts={categoriesWithCounts}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategorySelect}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;
