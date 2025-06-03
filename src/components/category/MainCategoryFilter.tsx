
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getToolsByMainCategory, getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";
import { allTools } from "@/data/toolsData";

interface MainCategoryFilterProps {
  tools: Tool[];
  onFilteredToolsChange: (filteredTools: Tool[]) => void;
  currentMainCategory: string;
}

const MainCategoryFilter = ({ tools, onFilteredToolsChange, currentMainCategory }: MainCategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMainCategories, setSelectedMainCategories] = useState<string[]>([]);

  // Cache the categories data to prevent recalculation
  const mainCategoriesWithCounts = useMemo(() => {
    const globalCounts = getMainCategoriesWithCounts(allTools);
    
    const uniqueCategoriesMap = new Map<string, { name: string; emoji: string; count: number }>();
    
    mainCategories.forEach(mainCat => {
      const count = mainCat.name === "ALL AI TOOLS" ? allTools.length : (globalCounts[mainCat.name] || 0);
      
      if (!uniqueCategoriesMap.has(mainCat.name)) {
        uniqueCategoriesMap.set(mainCat.name, {
          name: mainCat.name,
          emoji: mainCat.emoji,
          count: count
        });
      }
    });
    
    return Array.from(uniqueCategoriesMap.values())
      .filter(cat => cat.count > 0 || cat.name === "ALL AI TOOLS")
      .sort((a, b) => {
        if (a.name === "ALL AI TOOLS") return -1;
        if (b.name === "ALL AI TOOLS") return 1;
        return b.count - a.count;
      });
  }, []); // Remove dependencies to prevent recalculation

  // Initialize with current category selected
  useEffect(() => {
    const categoryExists = mainCategoriesWithCounts.some(cat => cat.name === currentMainCategory);
    if (categoryExists && selectedMainCategories.length === 0) {
      setSelectedMainCategories([currentMainCategory]);
    }
  }, [currentMainCategory, mainCategoriesWithCounts.length]); // Simplified dependencies

  // Memoize filtered tools with reduced complexity
  const filteredTools = useMemo(() => {
    if (selectedMainCategories.length === 0) {
      return tools;
    }
    
    const selectedCategoryTools = new Map<string, Tool>();
    
    selectedMainCategories.forEach(categoryName => {
      const categoryTools = getToolsByMainCategory(allTools, categoryName);
      categoryTools.forEach(tool => {
        if (!selectedCategoryTools.has(tool.title)) {
          selectedCategoryTools.set(tool.title, tool);
        }
      });
    });
    
    const selectedTools = Array.from(selectedCategoryTools.values());
    const remainingTools = allTools.filter(tool => !selectedCategoryTools.has(tool.title));
    
    return [...selectedTools, ...remainingTools];
  }, [selectedMainCategories, tools.length]); // Simplified dependencies

  // Update parent with debounced effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilteredToolsChange(filteredTools);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [filteredTools]);

  const handleMainCategoryToggle = useCallback((mainCategoryName: string) => {
    setSelectedMainCategories(prev => {
      const isCurrentlySelected = prev.includes(mainCategoryName);
      
      // Prevent unchecking current category
      if (isCurrentlySelected && mainCategoryName === currentMainCategory) {
        return prev;
      }
      
      if (isCurrentlySelected) {
        return prev.filter(cat => cat !== mainCategoryName);
      } else {
        return [...prev, mainCategoryName];
      }
    });
  }, [currentMainCategory]);

  const clearAllFilters = useCallback(() => {
    setSelectedMainCategories([currentMainCategory]);
  }, [currentMainCategory]);

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
          Mix Multiple Categories
          {isExpanded ? <ChevronUp className="w-3 h-3 ml-2" /> : <ChevronDown className="w-3 h-3 ml-2" />}
          {selectedMainCategories.length > 1 && (
            <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300 text-xs">
              {selectedMainCategories.length} mixed
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Category Mix Display */}
      {selectedMainCategories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          <div className="text-xs text-cyan-400 font-semibold">Mixed Categories:</div>
          {selectedMainCategories.map(categoryName => {
            const categoryData = mainCategoriesWithCounts.find(cat => cat.name === categoryName);
            const isCurrentCategory = categoryName === currentMainCategory;
            return (
              <Badge
                key={categoryName}
                variant="secondary"
                className={`text-xs ${
                  isCurrentCategory 
                    ? 'bg-cyan-600/30 text-cyan-200 border-cyan-400/50' 
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                }`}
              >
                {categoryData?.emoji} {categoryName}
                {!isCurrentCategory && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleMainCategoryToggle(categoryName)}
                    className="ml-1 h-3 w-3 p-0 text-cyan-400 hover:text-cyan-200"
                  >
                    <X className="w-2 h-2" />
                  </Button>
                )}
                {isCurrentCategory && (
                  <span className="ml-1 text-xs opacity-70">(locked)</span>
                )}
              </Badge>
            );
          })}
          <Button
            onClick={clearAllFilters}
            variant="ghost"
            size="sm"
            className="text-cyan-400 hover:text-cyan-200 text-xs h-6"
          >
            Reset to {currentMainCategory}
          </Button>
        </div>
      )}

      {/* Compact Expandable Filter Panel */}
      {isExpanded && (
        <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-sm">
          {/* Main Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
            {mainCategoriesWithCounts.map(({ name, emoji, count }) => {
              const isChecked = selectedMainCategories.includes(name);
              const isCurrentCategory = name === currentMainCategory;
              
              return (
                <div
                  key={name}
                  className={`flex items-start space-x-2 p-2 hover:bg-cyan-500/10 rounded-md transition-colors min-h-[50px] ${
                    isCurrentCategory ? 'bg-cyan-500/15 border border-cyan-500/30' : ''
                  }`}
                >
                  <Checkbox
                    id={`main-category-${name}`}
                    checked={isChecked}
                    onCheckedChange={() => handleMainCategoryToggle(name)}
                    className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 flex-shrink-0 mt-1"
                    disabled={isCurrentCategory && isChecked}
                  />
                  <div className="flex-1 min-w-0 flex flex-col">
                    <label
                      htmlFor={`main-category-${name}`}
                      className={`text-xs font-bold cursor-pointer flex items-start leading-tight ${
                        isCurrentCategory ? 'text-cyan-200' : 'text-cyan-100'
                      }`}
                      title={name}
                    >
                      <span className="mr-1 flex-shrink-0">{emoji}</span>
                      <span className="break-words text-xs leading-tight font-bold">{name}</span>
                      {isCurrentCategory && <span className="ml-1 text-xs opacity-70">(current)</span>}
                    </label>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 text-xs mt-1 self-start"
                    >
                      {count} tools
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>

          {mainCategoriesWithCounts.length === 0 && (
            <div className="text-center py-3 text-gray-400 text-sm">
              No additional categories available
            </div>
          )}

          {/* Enhanced Filter Summary */}
          <div className="mt-3 pt-2 border-t border-cyan-500/20 text-center">
            <div className="text-xs text-cyan-300">
              {selectedMainCategories.length <= 1 
                ? `Showing ${filteredTools.length} tools in ${currentMainCategory}` 
                : `Mixing ${selectedMainCategories.length} categories (${filteredTools.length} total tools)`
              }
            </div>
            {selectedMainCategories.includes(currentMainCategory) && (
              <div className="text-xs text-cyan-400 mt-1">
                ✓ Current category "{currentMainCategory}" is automatically included
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCategoryFilter;
