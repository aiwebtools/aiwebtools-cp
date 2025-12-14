
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";

export const useToolDetail = (toolIndex: number) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [toolsLoadedCount, setToolsLoadedCount] = useState(12);

  const tool = allTools[toolIndex];

  useEffect(() => {
    // Multiple aggressive scroll attempts to ensure we get to the absolute top
    const scrollToTop = () => {
      // Method 1: Immediate scroll to 0,0
      window.scrollTo(0, 0);
      
      // Method 2: Set document scroll positions to 0
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Use smooth scroll to top as backup
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' for immediate scroll
      });
    };

    // Execute immediately
    scrollToTop();
    
    // Execute again after a tiny delay to override any other scroll events
    setTimeout(scrollToTop, 10);
    
    // Execute one more time after DOM settles
    setTimeout(scrollToTop, 50);
    
    // Final attempt after component fully renders
    setTimeout(scrollToTop, 100);
    
    // Verify tool exists and is properly indexed
    if (tool) {
      console.log(`📄 Loaded tool page ${toolIndex}: "${tool.title}" in category "${tool.category}"`);
      console.log(`📍 Ensuring scroll to absolute top of page for tool details view`);
    } else {
      console.error(`❌ Tool at index ${toolIndex} not found in collection of ${allTools.length} tools`);
    }
  }, [toolIndex, tool]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // Remove auto-navigation - let the SearchBar handle result selection through clicks
  };

  const handleSeeMoreTools = () => {
    setShowMoreTools(true);
    // INSTANT scroll to tools section
    const toolsSection = document.getElementById('more-tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'auto' });
    }
  };

  const handleToolsLoaded = (count: number) => {
    setToolsLoadedCount(count);
  };

  return {
    tool,
    searchTerm,
    showMoreTools,
    toolsLoadedCount,
    handleSearchChange,
    handleSeeMoreTools,
    handleToolsLoaded
  };
};
