import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AlphabeticalFilter, { alphabetRanges } from "./AlphabeticalFilter";
import CategoryFilter from "./CategoryFilter";
import { getCurrentToolCount } from "@/utils/toolCounter";
import { allTools } from "@/data/toolsData";

interface SearchFiltersProps {
  onFilterChange?: (filters: { alphabetical: string | null; category: string | null }) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const navigate = useNavigate();
  const [selectedAlphabetical, setSelectedAlphabetical] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get category counts from tool data
  const getCategoryCounts = useCallback(() => {
    const counts: Record<string, number> = {};
    
    // Count ALL AI TOOLS
    counts["ALL AI TOOLS"] = allTools.length;
    
    // Count tools by category
    allTools.forEach(tool => {
      if (tool.category) {
        counts[tool.category] = (counts[tool.category] || 0) + 1;
      }
    });

    return counts;
  }, []);

  const categoryCounts = getCategoryCounts();

  const handleAlphabeticalSelect = useCallback((range: string | null) => {
    setSelectedAlphabetical(range);
    
    if (range) {
      // Filter tools by alphabetical range
      const rangeData = alphabetRanges.find(r => r.value === range);
      if (rangeData) {
        const filteredTools = allTools.filter(tool => 
          rangeData.pattern.test(tool.title)
        );
        console.log(`Filtered ${filteredTools.length} tools for range ${range}`);
      }
    }
    
    onFilterChange?.({
      alphabetical: range,
      category: selectedCategory
    });
  }, [selectedCategory, onFilterChange]);

  const handleCategorySelect = useCallback((category: string | null) => {
    setSelectedCategory(category);
    
    if (category && category !== "ALL AI TOOLS") {
      // Navigate to the specific category page
      const encodedCategory = encodeURIComponent(category);
      navigate(`/main-category/${encodedCategory}`);
    } else if (category === "ALL AI TOOLS") {
      // Navigate to all tools page
      navigate('/main-category/ALL%20AI%20TOOLS');
    }
    
    onFilterChange?.({
      alphabetical: selectedAlphabetical,
      category: category
    });
  }, [selectedAlphabetical, onFilterChange, navigate]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Alphabetical Filter */}
      <AlphabeticalFilter
        selectedRange={selectedAlphabetical}
        onRangeSelect={handleAlphabeticalSelect}
      />
      
      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        categoryCounts={categoryCounts}
      />
    </div>
  );
};

export default SearchFilters;