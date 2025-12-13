
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Filter, X, Shuffle, ArrowDownAZ, ArrowUpZA, Bot } from "lucide-react";
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

// Agent sub-type definitions with emoji and keywords for filtering
const AGENT_SUBTYPES = [
  { id: 'all', label: 'All Agents', emoji: '🤖', keywords: [] },
  { id: 'custom-gpt', label: 'Custom GPTs & Gems', emoji: '✨', keywords: ['custom gpt', 'gpt', 'gem', 'gemini gem'] },
  { id: 'chatbot', label: 'Chatbot Agents', emoji: '💬', keywords: ['chatbot agent', 'chatbot', 'conversational', 'chat bot', 'support agent'] },
  { id: 'coding', label: 'Coding Agents', emoji: '💻', keywords: ['coding agent', 'code', 'developer', 'programming', 'software'] },
  { id: 'automation', label: 'Automation Agents', emoji: '⚙️', keywords: ['automation agent', 'workflow', 'automate', 'zapier', 'make.com', 'n8n'] },
  { id: 'web-tasks', label: 'Web Task Agents', emoji: '🌐', keywords: ['web tasks agent', 'browser', 'computer use', 'web automation'] },
  { id: 'voice', label: 'Voice Agents', emoji: '🎙️', keywords: ['voice agent', 'speech', 'voice ai'] },
  { id: 'multi-agent', label: 'Multi-Agent', emoji: '🔗', keywords: ['multi-agent', 'framework', 'orchestration', 'swarm'] },
  { id: 'research', label: 'Research Agents', emoji: '🔬', keywords: ['research agent', 'analysis', 'investigation'] },
  { id: 'task', label: 'Task Agents', emoji: '✅', keywords: ['task agent', 'assistant', 'execution'] },
  { id: 'sales', label: 'Sales Agents', emoji: '💼', keywords: ['sales agent', 'crm', 'revenue', 'lead'] },
  { id: 'support', label: 'Support Agents', emoji: '🎧', keywords: ['support agent', 'customer support', 'helpdesk', 'ticket'] },
];

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
  const [selectedAgentType, setSelectedAgentType] = useState<string>('all');
  
  // Check if we're on the AI AGENTS page
  const isAgentsPage = currentMainCategory === "AI AGENTS";

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
    setSelectedAgentType('all'); // Reset agent type filter
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

  // Calculate base filtered tools (before shuffle) - now includes agent type filtering
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
    
    let toolsArray = Array.from(selectedCategoryTools.values());
    
    // Apply agent sub-type filter if on AI AGENTS page and a specific type is selected
    if (isAgentsPage && selectedAgentType !== 'all') {
      const agentSubtype = AGENT_SUBTYPES.find(t => t.id === selectedAgentType);
      if (agentSubtype && agentSubtype.keywords.length > 0) {
        toolsArray = toolsArray.filter(tool => {
          const title = tool.title.toLowerCase();
          const description = (tool.description || '').toLowerCase();
          const tags = (tool.tags || []).map(t => t.toLowerCase());
          const directUrl = (tool.directUrl || '').toLowerCase();
          
          // Special handling for Custom GPTs & Gems - check URL patterns
          if (selectedAgentType === 'custom-gpt') {
            const isCustomGPT = directUrl.includes('chatgpt.com/g/') || 
                               directUrl.includes('.lovable.app') ||
                               directUrl.includes('gemini.google.com/gem/') ||
                               tags.some(tag => tag.includes('custom gpt') || tag.includes('gemini gem') || tag.includes('custom gem'));
            return isCustomGPT;
          }
          
          // Check if tool matches any of the agent subtype keywords
          return agentSubtype.keywords.some(keyword => {
            const kw = keyword.toLowerCase();
            return title.includes(kw) || 
                   description.includes(kw) || 
                   tags.some(tag => tag.includes(kw));
          });
        });
        console.log(`🤖 Agent filter "${agentSubtype.label}": ${toolsArray.length} tools`);
      }
    }
    
    return toolsArray;
  }, [selectedMainCategories, currentMainCategory, isAgentsPage, selectedAgentType]);

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
    setSelectedAgentType('all'); // Reset agent type filter
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
    <div className="max-w-3xl mx-auto mb-4">
      {/* Agent Sub-Type Filter Pills - Only shown on AI AGENTS page */}
      {isAgentsPage && (
        <div className="mb-4">
          <div className="text-center mb-2">
            <span className="text-xs text-cyan-400/70 font-medium">🤖 Filter by Agent Type</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {AGENT_SUBTYPES.map((subtype) => (
              <button
                key={subtype.id}
                onClick={() => setSelectedAgentType(subtype.id)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedAgentType === subtype.id
                    ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-200 border border-cyan-400/60 shadow-lg shadow-cyan-500/20'
                    : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/40 hover:text-cyan-300'
                }`}
              >
                <span>{subtype.emoji}</span>
                <span>{subtype.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Compact Sort & Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
        {/* Mix Categories - Compact Pill */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            isExpanded || selectedMainCategories.length > 1
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
              : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/40 hover:text-cyan-300'
          }`}
        >
          <Filter className="w-3 h-3" />
          Mix
          {selectedMainCategories.length > 1 && (
            <span className="bg-cyan-500/30 text-cyan-200 px-1.5 rounded-full text-[10px]">
              {selectedMainCategories.length}
            </span>
          )}
          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
        
        {/* A-Z Pill */}
        <button
          onClick={handleSortAZ}
          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            sortMode === 'az'
              ? 'bg-green-500/20 text-green-300 border border-green-400/50'
              : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-green-500/40 hover:text-green-300'
          }`}
          title="Sort A to Z"
        >
          <ArrowDownAZ className="w-3 h-3" />
          A-Z
        </button>
        
        {/* Z-A Pill */}
        <button
          onClick={handleSortZA}
          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            sortMode === 'za'
              ? 'bg-orange-500/20 text-orange-300 border border-orange-400/50'
              : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-orange-500/40 hover:text-orange-300'
          }`}
          title="Sort Z to A"
        >
          <ArrowUpZA className="w-3 h-3" />
          Z-A
        </button>
        
        {/* Shuffle Pill */}
        <button
          onClick={handleShuffle}
          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
            sortMode === 'shuffle'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/50'
              : 'bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-purple-500/40 hover:text-purple-300'
          }`}
          title="Shuffle randomly"
        >
          <Shuffle className="w-3 h-3" />
          {sortMode === 'shuffle' && shuffleKey > 0 ? `#${shuffleKey}` : '🎲'}
        </button>
        
        {/* Smart Reset - Only if not in smart mode */}
        {sortMode !== 'smart' && (
          <button
            onClick={handleSmartSort}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-800/60 text-gray-400 border border-gray-600/30 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
            title="Reset to smart sorting"
          >
            ✨ Reset
          </button>
        )}
      </div>

      {/* Active Mix Tags - Compact */}
      {selectedMainCategories.length > 1 && (
        <div className="flex flex-wrap gap-1 justify-center mb-2">
          {selectedMainCategories.map(categoryName => {
            const categoryData = mainCategoriesWithCounts.find(cat => cat.name === categoryName);
            const isCurrentCategory = categoryName === currentMainCategory;
            return (
              <span
                key={categoryName}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] ${
                  isCurrentCategory 
                    ? 'bg-cyan-600/30 text-cyan-200 border border-cyan-400/40' 
                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                }`}
              >
                {categoryData?.emoji} {categoryName.split(' ')[0]}
                {!isCurrentCategory && (
                  <button
                    onClick={() => handleMainCategoryToggle(categoryName)}
                    className="hover:text-white transition-colors"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                )}
              </span>
            );
          })}
          <button
            onClick={clearAllFilters}
            className="text-cyan-400 hover:text-cyan-200 text-[10px] underline"
          >
            Reset
          </button>
        </div>
      )}

      {/* Expandable Category Grid - More Compact */}
      {isExpanded && (
        <div className="bg-gray-900/70 border border-cyan-500/20 rounded-xl p-2 backdrop-blur-sm animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 max-h-40 overflow-y-auto scrollbar-thin">
            {mainCategoriesWithCounts.map(({ name, emoji, count }) => {
              const isChecked = selectedMainCategories.includes(name);
              const isCurrentCategory = name === currentMainCategory;
              
              return (
                <button
                  key={name}
                  onClick={() => handleMainCategoryToggle(name)}
                  disabled={isCurrentCategory && isChecked}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left transition-all duration-200 ${
                    isChecked
                      ? 'bg-cyan-500/25 border border-cyan-400/50 text-cyan-200'
                      : 'bg-gray-800/50 border border-gray-700/30 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-300'
                  } ${isCurrentCategory ? 'ring-1 ring-cyan-500/50' : ''}`}
                >
                  <span className="text-sm">{emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium truncate leading-tight">{name}</div>
                    <div className="text-[9px] opacity-60">{count}</div>
                  </div>
                  {isChecked && <span className="text-cyan-400 text-xs">✓</span>}
                </button>
              );
            })}
          </div>
          
          {/* Summary */}
          <div className="text-center text-[10px] text-cyan-400/70 mt-2 pt-1.5 border-t border-cyan-500/10">
            {selectedMainCategories.length <= 1 
              ? `${filteredTools.length} tools`
              : `${selectedMainCategories.length} categories mixed (${filteredTools.length} tools)`
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCategoryFilter;
