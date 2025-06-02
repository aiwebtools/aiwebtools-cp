
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getToolsByMainCategory } from "@/utils/categoryUtils/toolFiltering";

interface MainCategoryFilterProps {
  tools: Tool[];
  onFilteredToolsChange: (filteredTools: Tool[]) => void;
  currentMainCategory: string;
}

const MainCategoryFilter = ({ tools, onFilteredToolsChange, currentMainCategory }: MainCategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMainCategories, setSelectedMainCategories] = useState<string[]>([]);

  // Get available main categories with their tool counts
  const mainCategoriesWithCounts = useMemo(() => {
    return mainCategories.map(mainCat => {
      // Get tools for this main category from the global tools array
      const categoryTools = getToolsByMainCategory(tools, mainCat.name);
      return {
        name: mainCat.name,
        emoji: mainCat.emoji,
        count: categoryTools.length
      };
    }).filter(cat => cat.count > 0) // Only show categories that have tools
      .sort((a, b) => b.count - a.count); // Sort by count descending
  }, [tools]);

  // Apply main category filters to tools
  const filteredTools = useMemo(() => {
    if (selectedMainCategories.length === 0) {
      return tools; // Return all tools if no categories selected
    }
    
    // Get tools from all selected main categories
    const allFilteredTools: Tool[] = [];
    selectedMainCategories.forEach(mainCategoryName => {
      const categoryTools = getToolsByMainCategory(tools, mainCategoryName);
      allFilteredTools.push(...categoryTools);
    });
    
    // Remove duplicates by title
    const uniqueTools = allFilteredTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    return uniqueTools;
  }, [tools, selectedMainCategories]);

  // Update parent component when filtered tools change
  React.useEffect(() => {
    onFilteredToolsChange(filteredTools);
  }, [filteredTools, onFilteredToolsChange]);

  const handleMainCategoryToggle = (mainCategoryName: string) => {
    setSelectedMainCategories(prev => {
      if (prev.includes(mainCategoryName)) {
        return prev.filter(cat => cat !== mainCategoryName);
      } else {
        return [...prev, mainCategoryName];
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedMainCategories([]);
  };

  return (
    <div className="max-w-4xl mx-auto mb-4">
      {/* Compact Filter Toggle Button */}
      <div className="flex items-center justify-center mb-3">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          size="sm"
          className="border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 bg-black/50 text-sm"
        >
          <Filter className="w-3 h-3 mr-2" />
          Filter by Main Category
          {isExpanded ? <ChevronUp className="w-3 h-3 ml-2" /> : <ChevronDown className="w-3 h-3 ml-2" />}
          {selectedMainCategories.length > 0 && (
            <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300 text-xs">
              {selectedMainCategories.length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Filters Display */}
      {selectedMainCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {selectedMainCategories.map(categoryName => {
            const categoryData = mainCategoriesWithCounts.find(cat => cat.name === categoryName);
            return (
              <Badge
                key={categoryName}
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs"
              >
                {categoryData?.emoji} {categoryName}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleMainCategoryToggle(categoryName)}
                  className="ml-1 h-3 w-3 p-0 text-cyan-400 hover:text-cyan-200"
                >
                  <X className="w-2 h-2" />
                </Button>
              </Badge>
            );
          })}
          <Button
            onClick={clearAllFilters}
            variant="ghost"
            size="sm"
            className="text-cyan-400 hover:text-cyan-200 text-xs h-6"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Compact Expandable Filter Panel */}
      {isExpanded && (
        <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-sm">
          {/* Main Categories Grid - More compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
            {mainCategoriesWithCounts.map(({ name, emoji, count }) => (
              <div
                key={name}
                className="flex items-center space-x-2 p-2 hover:bg-cyan-500/10 rounded-md transition-colors cursor-pointer"
                onClick={() => handleMainCategoryToggle(name)}
              >
                <Checkbox
                  id={`main-category-${name}`}
                  checked={selectedMainCategories.includes(name)}
                  onCheckedChange={() => handleMainCategoryToggle(name)}
                  className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                />
                <label
                  htmlFor={`main-category-${name}`}
                  className="text-xs text-cyan-100 cursor-pointer flex-1 truncate"
                  title={name}
                >
                  {emoji} {name}
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

          {mainCategoriesWithCounts.length === 0 && (
            <div className="text-center py-3 text-gray-400 text-sm">
              No main categories available
            </div>
          )}

          {/* Compact Filter Summary */}
          <div className="mt-3 pt-2 border-t border-cyan-500/20 text-center">
            <div className="text-xs text-cyan-300">
              {selectedMainCategories.length === 0 
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
