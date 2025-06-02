
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Filter, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import { getCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";

interface MainCategoryFilterProps {
  tools: Tool[];
  onFilteredToolsChange: (filteredTools: Tool[]) => void;
  currentMainCategory: string;
}

const MainCategoryFilter = ({ tools, onFilteredToolsChange, currentMainCategory }: MainCategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categorySearch, setCategorySearch] = useState("");

  // Get available categories from the current tools
  const categoriesWithCounts = useMemo(() => {
    const counts = getCategoriesWithCounts(tools);
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count); // Sort by count descending
  }, [tools]);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!categorySearch.trim()) return categoriesWithCounts;
    
    const searchLower = categorySearch.toLowerCase();
    return categoriesWithCounts.filter(category =>
      category.name.toLowerCase().includes(searchLower)
    );
  }, [categoriesWithCounts, categorySearch]);

  // Apply category filters to tools
  const filteredTools = useMemo(() => {
    if (selectedCategories.length === 0) {
      return tools; // Return all tools if no categories selected
    }
    
    return tools.filter(tool => 
      selectedCategories.includes(tool.category || '')
    );
  }, [tools, selectedCategories]);

  // Update parent component when filtered tools change
  React.useEffect(() => {
    onFilteredToolsChange(filteredTools);
  }, [filteredTools, onFilteredToolsChange]);

  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryName)) {
        return prev.filter(cat => cat !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setCategorySearch("");
  };

  const clearCategorySearch = () => {
    setCategorySearch("");
  };

  return (
    <div className="max-w-4xl mx-auto mb-6">
      {/* Filter Toggle Button */}
      <div className="flex items-center justify-center mb-4">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className="border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 bg-black/50"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter by Category
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          {selectedCategories.length > 0 && (
            <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300">
              {selectedCategories.length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Filters Display */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {selectedCategories.map(category => (
            <Badge
              key={category}
              variant="secondary"
              className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            >
              {category}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCategoryToggle(category)}
                className="ml-2 h-4 w-4 p-0 text-cyan-400 hover:text-cyan-200"
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}
          <Button
            onClick={clearAllFilters}
            variant="ghost"
            size="sm"
            className="text-cyan-400 hover:text-cyan-200 text-xs"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Expandable Filter Panel */}
      {isExpanded && (
        <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
          {/* Category Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search categories..."
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              className="pl-10 pr-10 bg-black/50 border-cyan-500/30 text-cyan-100 placeholder-cyan-400/70 focus:border-cyan-400 focus:ring-cyan-400/30"
            />
            {categorySearch && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCategorySearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-cyan-400 hover:text-cyan-300"
              >
                <X className="w-3 h-3" />
              </Button>
            )}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
            {filteredCategories.map(({ name, count }) => (
              <div
                key={name}
                className="flex items-center space-x-2 p-2 hover:bg-cyan-500/10 rounded-md transition-colors cursor-pointer"
                onClick={() => handleCategoryToggle(name)}
              >
                <Checkbox
                  id={`category-${name}`}
                  checked={selectedCategories.includes(name)}
                  onCheckedChange={() => handleCategoryToggle(name)}
                  className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                />
                <label
                  htmlFor={`category-${name}`}
                  className="text-sm text-cyan-100 cursor-pointer flex-1 truncate"
                  title={name}
                >
                  {name}
                </label>
                <Badge
                  variant="secondary"
                  className="bg-cyan-500/20 text-cyan-300 text-xs"
                >
                  {count}
                </Badge>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && categorySearch && (
            <div className="text-center py-4 text-gray-400">
              No categories found for "{categorySearch}"
            </div>
          )}

          {/* Filter Summary */}
          <div className="mt-4 pt-3 border-t border-cyan-500/20 text-center">
            <div className="text-sm text-cyan-300">
              {selectedCategories.length === 0 
                ? `Showing all ${tools.length} tools` 
                : `Showing ${filteredTools.length} of ${tools.length} tools`
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCategoryFilter;
