
import { useState, useCallback, useEffect } from "react";
import { useFeaturedToolsState } from "@/hooks/useFeaturedToolsState";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { verifyFeaturedToolsContent, runFullToolVerification } from "@/utils/toolIndexing";
import { searchTools } from "@/utils/searchUtils";

interface UseFeaturedToolsLogicProps {
  onToolsLoaded?: (count: number) => void;
}

export const useFeaturedToolsLogic = ({ onToolsLoaded }: UseFeaturedToolsLogicProps) => {
  const [showAllFeaturedTools, setShowAllFeaturedTools] = useState(false);
  
  const {
    selectedCategory,
    searchTerm,
    displayedCount,
    isLoading,
    setDisplayedCount,
    setIsLoading,
    handleCategoryChange,
    handleSearchChange,
    filteredTools,
    totalToolsCount,
    categoriesWithCounts,
    hasMoreTools
  } = useFeaturedToolsState();

  // Find Marriage Mender GPT index with more flexible matching
  const marriageMenderIndex = filteredTools.findIndex(tool => 
    tool.title.toLowerCase().includes('marriage mender') ||
    tool.title.toLowerCase().includes('marriage') && tool.title.toLowerCase().includes('mender')
  );
  
  // Set initial display count based on Marriage Mender GPT position or default to 25
  const initialDisplayCount = marriageMenderIndex !== -1 ? marriageMenderIndex + 1 : 25;

  // Calculate actual displayed count based on show more state
  const actualDisplayedCount = (!selectedCategory && !searchTerm && !showAllFeaturedTools) 
    ? Math.min(initialDisplayCount, filteredTools.length)
    : displayedCount;

  // Check if we should show the "Show More Featured Tools" button
  const shouldShowFeaturedToolsButton = !selectedCategory && !searchTerm && 
    filteredTools.length > initialDisplayCount && !showAllFeaturedTools;

  // Run comprehensive verification on component mount
  useEffect(() => {
    console.log('🚀 Running featured tools verification...');
    
    // Run full tool verification
    const verificationResults = runFullToolVerification(searchTools);
    
    // Verify featured tools content specifically
    const featuredVerification = verifyFeaturedToolsContent(filteredTools);
    
    console.log('📊 Featured Tools Verification Results:', featuredVerification);
    
    if (featuredVerification.missingCount > 0) {
      console.error(`❌ CRITICAL ISSUE: ${featuredVerification.missingCount} AI Web Tools GPTs missing from featured tools!`);
      console.error('Missing tools:', featuredVerification.missingTitles.slice(0, 20));
    } else {
      console.log('✅ All AI Web Tools GPTs are properly included in featured tools!');
    }
  }, [filteredTools]);

  // Handle scroll position memory
  useScrollMemory({ displayedCount: actualDisplayedCount, selectedCategory, searchTerm });

  // Enhanced logging with verification details
  console.log(`📊 FeaturedTools Component Stats:`);
  console.log(`   Total tools available: ${totalToolsCount}`);
  console.log(`   Filtered tools: ${filteredTools.length}`);
  console.log(`   Currently displayed: ${actualDisplayedCount}`);
  console.log(`   Has more tools: ${hasMoreTools}`);
  
  // Count AI Web Tools GPTs in current display
  const aiWebToolsInDisplay = filteredTools.slice(0, actualDisplayedCount).filter(tool => 
    tool.directUrl?.includes('lovable.app')
  ).length;
  console.log(`🎯 AI Web Tools GPTs currently displayed: ${aiWebToolsInDisplay}`);
  
  // Log first few tool titles for debugging
  console.log(`🔍 First 15 filtered tools:`, filteredTools.slice(0, 15).map(t => t.title));

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMoreTools) return;
    
    console.log(`🚀 Loading more tools - Current: ${displayedCount}, Total: ${filteredTools.length}`);
    setIsLoading(true);
    
    setTimeout(() => {
      const newCount = Math.min(displayedCount + 25, filteredTools.length); // Load 25 more tools at a time
      console.log(`📈 Setting new count: ${newCount}`);
      setDisplayedCount(newCount);
      setIsLoading(false);
      // Notify parent component about tools loaded
      if (onToolsLoaded) {
        onToolsLoaded(newCount);
      }
    }, 100);
  }, [isLoading, displayedCount, setDisplayedCount, setIsLoading, onToolsLoaded, hasMoreTools, filteredTools.length]);

  const handleShowMoreFeaturedTools = () => {
    console.log('🚀 Show More Featured Tools clicked!');
    setShowAllFeaturedTools(true);
    setDisplayedCount(filteredTools.length); // Show all tools
  };

  // Enable infinite scroll for homepage - always active when not filtering
  const enableInfiniteScroll = !selectedCategory && !searchTerm;
  
  console.log(`🔄 Infinite scroll enabled: ${enableInfiniteScroll}, Has more tools: ${hasMoreTools}`);

  // Handle infinite scroll - enabled for homepage
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false, // Always use infinite scroll for homepage
    displayedCount: actualDisplayedCount,
    totalTools: filteredTools.length,
    onLoadMore: handleLoadMore
  });

  return {
    // State
    showAllFeaturedTools,
    selectedCategory,
    searchTerm,
    isLoading,
    filteredTools,
    totalToolsCount,
    categoriesWithCounts,
    hasMoreTools,
    actualDisplayedCount,
    shouldShowFeaturedToolsButton,
    initialDisplayCount,
    
    // Handlers
    handleCategoryChange,
    handleSearchChange,
    handleLoadMore,
    handleShowMoreFeaturedTools
  };
};
