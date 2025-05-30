
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";

export const useToolDetail = (toolIndex: number) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [toolsLoadedCount, setToolsLoadedCount] = useState(12);

  const tool = allTools[toolIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Verify tool exists and is properly indexed
    if (tool) {
      console.log(`📄 Loaded tool page ${toolIndex}: "${tool.title}" in category "${tool.category}"`);
      console.log(`🔍 Tool searchability test: Can find by title = ${searchTools(allTools, tool.title).length > 0}`);
    } else {
      console.error(`❌ Tool at index ${toolIndex} not found in collection of ${allTools.length} tools`);
    }
  }, [toolIndex, tool]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      const results = searchTools(allTools, value);
      if (results.length > 0) {
        const firstResultIndex = allTools.findIndex(t => t.title === results[0].title);
        navigate(`/tool/${firstResultIndex}`);
      }
    }
  };

  const handleSeeMoreTools = () => {
    setShowMoreTools(true);
    // Scroll to the tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('more-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
