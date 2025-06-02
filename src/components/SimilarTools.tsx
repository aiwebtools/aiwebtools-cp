
import { useMemo, useState, useCallback } from "react";
import { Tool } from "@/types/tools";
import VirtualizedToolsGrid from "@/components/tools/VirtualizedToolsGrid";
import { allTools } from "@/data/toolsData";

interface SimilarToolsProps {
  currentTool: Tool;
  currentToolIndex: number;
}

const SimilarTools = ({ currentTool, currentToolIndex }: SimilarToolsProps) => {
  const [displayedCount, setDisplayedCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  // Find all similar tools for infinite scroll
  const allSimilarTools = useMemo(() => {
    const similar = allTools.filter((tool, index) => {
      if (index === currentToolIndex) return false;
      
      // Check category match
      const categoryMatch = tool.category === currentTool.category;
      
      // Check tag overlap
      const tagOverlap = currentTool.tags && tool.tags ? 
        tool.tags.some(tag => currentTool.tags?.includes(tag)) : false;
      
      // Check for keyword similarity in descriptions
      const currentKeywords = currentTool.description.toLowerCase().split(' ').filter(word => word.length > 4);
      const toolKeywords = tool.description.toLowerCase().split(' ').filter(word => word.length > 4);
      const commonKeywords = currentKeywords.filter(word => toolKeywords.includes(word));
      const keywordMatch = commonKeywords.length >= 2;
      
      return categoryMatch || tagOverlap || keywordMatch;
    });
    
    // If we don't have enough similar tools, add random tools to ensure endless scroll
    if (similar.length < 50) {
      const randomTools = allTools
        .filter((_, index) => index !== currentToolIndex && !similar.some(s => s.title === _.title))
        .sort(() => 0.5 - Math.random());
      
      similar.push(...randomTools);
    }
    
    // Shuffle for variety
    return similar.sort(() => 0.5 - Math.random());
  }, [currentTool, currentToolIndex]);

  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, allSimilarTools.length));
      setIsLoading(false);
    }, 300);
  }, [isLoading, allSimilarTools.length]);

  const hasMoreTools = displayedCount < allSimilarTools.length;

  if (allSimilarTools.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 cyber-glow">
        Similar AI Tools in {currentTool.category}
      </h3>
      <VirtualizedToolsGrid
        tools={allSimilarTools}
        displayedCount={displayedCount}
        searchTerm=""
        selectedCategory={currentTool.category}
        enableInfiniteScroll={true}
        onLoadMore={handleLoadMore}
        isLoading={isLoading}
        hasMoreTools={hasMoreTools}
      />
    </div>
  );
};

export default SimilarTools;
