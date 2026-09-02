
import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";

export const useToolDetail = (toolIndex: number) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [toolsLoadedCount, setToolsLoadedCount] = useState(12);

  const tool = allTools[toolIndex];

  useLayoutEffect(() => {
    if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [toolIndex]);

  useEffect(() => {
    // Verify tool exists and is properly indexed
    if (tool) {
      console.log(`📄 Loaded tool page ${toolIndex}: "${tool.title}" in category "${tool.category}"`);
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
