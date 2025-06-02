import React, { useState, useMemo, useEffect } from 'react';
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

  // Get EXACTLY the same counts that are shown on the main category cards
  const mainCategoriesWithCounts = useMemo(() => {
    console.log('🔄 MainCategoryFilter: Using EXACT same counting logic as main category cards...');
    
    // Use the EXACT same function that populates the main category cards
    const globalCounts = getMainCategoriesWithCounts(allTools);
    
    console.log('📊 MainCategoryFilter Global Counts:', globalCounts);
    
    const categoriesData = mainCategories.map(mainCat => {
      // For "ALL AI TOOLS", use the total count of all tools
      const count = mainCat.name === "ALL AI TOOLS" ? allTools.length : (globalCounts[mainCat.name] || 0);
      
      console.log(`📊 MainCategoryFilter ${mainCat.name}: ${count} tools (${mainCat.name === "ALL AI TOOLS" ? 'total tools' : 'from global counts'})`);
      
      return {
        name: mainCat.name,
        emoji: mainCat.emoji,
        count: count
      };
    }).filter(cat => {
      // Only show categories with tools (except show ALL AI TOOLS even if somehow count is 0)
      return cat.count > 0 || cat.name === "ALL AI TOOLS";
    }).sort((a, b) => {
      // Sort by count descending, but keep ALL AI TOOLS at the top
      if (a.name === "ALL AI TOOLS") return -1;
      if (b.name === "ALL AI TOOLS") return 1;
      return b.count - a.count;
    });
    
    console.log('🎯 MainCategoryFilter Final categories with counts:', categoriesData.map(c => `${c.name}: ${c.count}`));
    return categoriesData;
  }, []);

  // Initialize with current main category selected
  useEffect(() => {
    console.log(`🎯 MainCategoryFilter initializing for: ${currentMainCategory}`);
    
    const categoryExists = mainCategoriesWithCounts.some(cat => cat.name === currentMainCategory);
    if (categoryExists) {
      setSelectedMainCategories([currentMainCategory]);
    }
  }, [currentMainCategory, mainCategoriesWithCounts]);

  // Apply main category filters with priority ordering
  const filteredTools = useMemo(() => {
    if (selectedMainCategories.length === 0) {
      console.log(`📂 No filters selected - showing all ${tools.length} tools for ${currentMainCategory}`);
      return tools;
    }
    
    console.log(`🎯 Priority filtering by selected categories: ${selectedMainCategories.join(', ')}`);
    
    // Create a Map to store unique tools by title to prevent duplicates
    const uniqueToolsMap = new Map<string, Tool>();
    
    // First, add all tools from selected main categories using GLOBAL allTools
    selectedMainCategories.forEach(mainCategoryName => {
      const categoryTools = getToolsByMainCategory(allTools, mainCategoryName);
      console.log(`📂 ${mainCategoryName}: adding ${categoryTools.length} priority tools (from global allTools)`);
      
      categoryTools.forEach(tool => {
        if (!uniqueToolsMap.has(tool.title)) {
          uniqueToolsMap.set(tool.title, tool);
        }
      });
    });
    
    // Convert priority tools from Map to Array
    const priorityTools = Array.from(uniqueToolsMap.values());
    
    // Get remaining tools from the entire database that are NOT in the priority list
    const remainingTools = allTools.filter(tool => !uniqueToolsMap.has(tool.title));
    
    // Combine: priority tools first, then remaining tools
    const orderedTools = [...priorityTools, ...remainingTools];
    
    console.log(`✅ Priority ordered result: ${priorityTools.length} priority tools + ${remainingTools.length} remaining tools = ${orderedTools.length} total`);
    console.log(`🔍 Priority tools titles (first 10):`, priorityTools.slice(0, 10).map(t => t.title));
    
    return orderedTools;
  }, [selectedMainCategories, currentMainCategory, tools]);

  // Update parent component when filtered tools change
  useEffect(() => {
    console.log(`🔄 Updating parent with ${filteredTools.length} priority-ordered tools`);
    console.log(`🎯 Selected categories: ${selectedMainCategories.join(', ')}`);
    onFilteredToolsChange(filteredTools);
  }, [filteredTools, onFilteredToolsChange]);

  const handleMainCategoryToggle = (mainCategoryName: string) => {
    console.log(`🔄 Toggling category: ${mainCategoryName}`);
    
    setSelectedMainCategories(prev => {
      const isCurrentlySelected = prev.includes(mainCategoryName);
      console.log(`📋 Current selection state for ${mainCategoryName}: ${isCurrentlySelected}`);
      
      if (isCurrentlySelected) {
        const newSelection = prev.filter(cat => cat !== mainCategoryName);
        console.log(`➖ Removing ${mainCategoryName}, new selection:`, newSelection);
        return newSelection;
      } else {
        const newSelection = [...prev, mainCategoryName];
        console.log(`➕ Adding ${mainCategoryName}, new selection:`, newSelection);
        return newSelection;
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedMainCategories([currentMainCategory]);
  };

  // Enhanced debug logging
  console.log(`🔍 MainCategoryFilter Debug:`, {
    currentMainCategory,
    totalInputTools: tools.length,
    categoriesShown: mainCategoriesWithCounts.length,
    selectedCategories: selectedMainCategories,
    filteredToolsCount: filteredTools.length,
    priorityToolsCount: selectedMainCategories.length > 0 ? getToolsByMainCategory(allTools, selectedMainCategories[0])?.length : 0,
    usingPriorityOrdering: selectedMainCategories.length > 0
  });

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
          Additional Category Filters
          {isExpanded ? <ChevronUp className="w-3 h-3 ml-2" /> : <ChevronDown className="w-3 h-3 ml-2" />}
          {selectedMainCategories.length > 1 && (
            <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300 text-xs">
              +{selectedMainCategories.length - 1}
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Filters Display */}
      {selectedMainCategories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {selectedMainCategories.filter(cat => cat !== currentMainCategory).map(categoryName => {
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
            Reset Filters
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
              console.log(`🔘 Rendering checkbox for ${name}: checked=${isChecked}, count=${count}`);
              
              return (
                <div
                  key={name}
                  className="flex items-start space-x-2 p-2 hover:bg-cyan-500/10 rounded-md transition-colors min-h-[50px]"
                >
                  <Checkbox
                    id={`main-category-${name}`}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      console.log(`🎯 Checkbox onCheckedChange for ${name}: ${checked}`);
                      handleMainCategoryToggle(name);
                    }}
                    className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 flex-shrink-0 mt-1"
                  />
                  <div className="flex-1 min-w-0 flex flex-col">
                    <label
                      htmlFor={`main-category-${name}`}
                      className="text-xs font-bold text-cyan-100 cursor-pointer flex items-start leading-tight"
                      title={name}
                    >
                      <span className="mr-1 flex-shrink-0">{emoji}</span>
                      <span className="break-words text-xs leading-tight font-bold">{name}</span>
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
                : `Prioritizing ${selectedMainCategories.length} categories (${filteredTools.length} total tools) - filtered tools shown first`
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCategoryFilter;
