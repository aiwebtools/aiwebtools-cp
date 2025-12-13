
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Filter, X, Shuffle, ArrowDownAZ, ArrowUpZA } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getToolsByMainCategory, getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";
import { allTools } from "@/data/toolsData";
import { 
  applySmartInterleavedSorting, 
  applyAlphabeticalWithDeprioritization,
  SortMode 
} from "@/utils/toolSorting/smartToolSorting";

interface MainCategoryFilterProps {
  tools: Tool[];
  onFilteredToolsChange: (filteredTools: Tool[]) => void;
  currentMainCategory: string;
}

const MainCategoryFilter = ({ tools, onFilteredToolsChange, currentMainCategory }: MainCategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMainCategories, setSelectedMainCategories] = useState<string[]>([currentMainCategory]);
  const [sortMode, setSortMode] = useState<SortMode>('smart');
  const [shuffleKey, setShuffleKey] = useState(0);

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
  }, []);

  // Reset selected categories when current category changes (navigating to different category page)
  useEffect(() => {
    setSelectedMainCategories([currentMainCategory]);
    setSortMode('smart');
    setShuffleKey(0);
  }, [currentMainCategory]);

  // Fisher-Yates shuffle algorithm - creates NEW array with random order
  const shuffleArray = useCallback((array: Tool[], seed: number): Tool[] => {
    const shuffled = [...array];
    // Use seed to ensure different shuffle each time
    let currentSeed = seed;
    const random = () => {
      currentSeed = (currentSeed * 9301 + 49297) % 233280;
      return currentSeed / 233280;
    };
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Calculate base filtered tools (before shuffle)
  const baseFilteredTools = useMemo(() => {
    const categoriesToUse = selectedMainCategories.length === 0 
      ? [currentMainCategory] 
      : selectedMainCategories;
    
    const selectedCategoryTools = new Map<string, Tool>();
    
    categoriesToUse.forEach(categoryName => {
      const categoryTools = getToolsByMainCategory(allTools, categoryName);
      categoryTools.forEach(tool => {
        if (!selectedCategoryTools.has(tool.title)) {
          selectedCategoryTools.set(tool.title, tool);
        }
      });
    });
    
    return Array.from(selectedCategoryTools.values());
  }, [selectedMainCategories, currentMainCategory]);

  // Track sort state for cache
  const lastSortRef = React.useRef<{ mode: SortMode; key: number; tools: Tool[] }>({ mode: 'smart', key: 0, tools: [] });

  // Compute final tools with sorting applied
  const filteredTools = useMemo(() => {
    const cacheKey = `${sortMode}-${shuffleKey}`;
    
    // Apply appropriate sorting based on mode
    let sortedTools: Tool[];
    
    switch (sortMode) {
      case 'az':
        sortedTools = applyAlphabeticalWithDeprioritization(baseFilteredTools, 'asc');
        console.log(`🔤 A-Z Sort: ${sortedTools.length} tools`);
        break;
      case 'za':
        sortedTools = applyAlphabeticalWithDeprioritization(baseFilteredTools, 'desc');
        console.log(`🔤 Z-A Sort: ${sortedTools.length} tools`);
        break;
      case 'shuffle':
        // Use shuffle key for randomization
        if (lastSortRef.current.mode === 'shuffle' && lastSortRef.current.key === shuffleKey) {
          return lastSortRef.current.tools;
        }
        const seed = Date.now() + shuffleKey * 12345;
        sortedTools = shuffleArray(baseFilteredTools, seed);
        console.log(`🔀 Shuffle #${shuffleKey}: ${sortedTools.length} tools (first 3: ${sortedTools.slice(0, 3).map(t => t.title).join(', ')})`);
        break;
      case 'smart':
      default:
        sortedTools = applySmartInterleavedSorting(baseFilteredTools, currentMainCategory);
        console.log(`🎯 Smart Sort: ${sortedTools.length} tools with 2:1 interleaving`);
        break;
    }
    
    lastSortRef.current = { mode: sortMode, key: shuffleKey, tools: sortedTools };
    return sortedTools;
  }, [sortMode, shuffleKey, baseFilteredTools, shuffleArray, currentMainCategory]);

  // Track last state to detect changes
  const lastPassedRef = React.useRef<{ mode: SortMode; key: number }>({ mode: 'smart', key: -1 });
  
  useEffect(() => {
    const stateChanged = 
      lastPassedRef.current.mode !== sortMode || 
      lastPassedRef.current.key !== shuffleKey ||
      lastPassedRef.current.key === -1;
    
    if (stateChanged) {
      console.log(`🎯 MainCategoryFilter: Passing ${filteredTools.length} tools (mode: ${sortMode}, shuffle #${shuffleKey})`);
      lastPassedRef.current = { mode: sortMode, key: shuffleKey };
      onFilteredToolsChange(filteredTools);
    }
  }, [filteredTools, sortMode, shuffleKey, onFilteredToolsChange]);

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
    setSortMode('smart');
    setShuffleKey(0);
  }, [currentMainCategory]);

  const handleShuffle = useCallback(() => {
    setSortMode('shuffle');
    setShuffleKey(prev => prev + 1);
  }, []);

  const handleSortAZ = useCallback(() => {
    setSortMode('az');
    setShuffleKey(0);
  }, []);

  const handleSortZA = useCallback(() => {
    setSortMode('za');
    setShuffleKey(0);
  }, []);

  const handleSmartSort = useCallback(() => {
    setSortMode('smart');
    setShuffleKey(0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-4">
      {/* Filter Toggle + Sort Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
        {/* Mix Categories Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          size="sm"
          className="border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 bg-black/50 text-sm"
        >
          <Filter className="w-3 h-3 mr-2" />
          Mix Categories
          {isExpanded ? <ChevronUp className="w-3 h-3 ml-2" /> : <ChevronDown className="w-3 h-3 ml-2" />}
          {selectedMainCategories.length > 1 && (
            <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300 text-xs">
              {selectedMainCategories.length}
            </Badge>
          )}
        </Button>
        
        {/* Sort A-Z Button */}
        <Button
          onClick={handleSortAZ}
          variant="outline"
          size="sm"
          className={`text-sm transition-all ${
            sortMode === 'az' 
              ? 'border-green-400 text-green-300 bg-green-500/20' 
              : 'border-green-500/30 text-green-300 hover:border-green-400 hover:text-green-200 bg-black/50'
          }`}
          title="Sort alphabetically A to Z"
        >
          <ArrowDownAZ className="w-3 h-3 mr-1" />
          A-Z
        </Button>
        
        {/* Sort Z-A Button */}
        <Button
          onClick={handleSortZA}
          variant="outline"
          size="sm"
          className={`text-sm transition-all ${
            sortMode === 'za' 
              ? 'border-orange-400 text-orange-300 bg-orange-500/20' 
              : 'border-orange-500/30 text-orange-300 hover:border-orange-400 hover:text-orange-200 bg-black/50'
          }`}
          title="Sort alphabetically Z to A"
        >
          <ArrowUpZA className="w-3 h-3 mr-1" />
          Z-A
        </Button>
        
        {/* Shuffle Button */}
        <Button
          onClick={handleShuffle}
          variant="outline"
          size="sm"
          className={`text-sm transition-all ${
            sortMode === 'shuffle' 
              ? 'border-purple-400 text-purple-300 bg-purple-500/20' 
              : 'border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 bg-black/50'
          }`}
          title="Shuffle/randomize tool order"
        >
          <Shuffle className="w-3 h-3 mr-1" />
          {sortMode === 'shuffle' && shuffleKey > 0 ? `#${shuffleKey}` : 'Shuffle'}
        </Button>
        
        {/* Smart Sort (reset) - only show if not in smart mode */}
        {sortMode !== 'smart' && (
          <Button
            onClick={handleSmartSort}
            variant="outline"
            size="sm"
            className="border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 bg-black/50 text-sm"
            title="Reset to smart sorting (featured + category match)"
          >
            ✨ Smart
          </Button>
        )}
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
