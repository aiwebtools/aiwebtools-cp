
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";
import CategoryHeader from "@/components/main-category/CategoryHeader";
import SearchSection from "@/components/main-category/SearchSection";
import ToolsCountDisplay from "@/components/main-category/ToolsCountDisplay";
import ToolsSection from "@/components/main-category/ToolsSection";
import CompletionMessage from "@/components/main-category/CompletionMessage";
import SeeMoreSection from "@/components/main-category/SeeMoreSection";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { searchTools } from "@/utils/searchUtils";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams<{ mainCategoryName: string }>();
  const navigate = useNavigate();
  const [displayedCount, setDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllTools, setShowAllTools] = useState(false);
  const [allToolsDisplayedCount, setAllToolsDisplayedCount] = useState(24);

  const decodedCategoryName = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  
  // Find the main category
  const mainCategory = mainCategories.find(cat => cat.name === decodedCategoryName);
  
  // Scroll to top when category changes - enhanced for immediate effect
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Also use requestAnimationFrame to ensure it happens after any layout changes
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    
    // Additional timeout to catch any delayed renders
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // Reset states when category changes
    setShowAllTools(false);
    setDisplayedCount(24);
  }, [decodedCategoryName]);
  
  if (!mainCategory) {
    // If category not found, redirect to home
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // Get tools for this main category immediately - no more lazy loading
  const categoryTools = getToolsByMainCategory(allTools, decodedCategoryName);
  
  console.log(`🔍 MainCategoryPage Debug for "${decodedCategoryName}":`, {
    isAllAITools: decodedCategoryName === "ALL AI TOOLS",
    categoryToolsCount: categoryTools.length,
    totalAllToolsCount: allTools.length
  });
  
  // Apply search filter if search term exists
  const filteredTools = searchTerm.trim() 
    ? searchTools(categoryTools, searchTerm)
    : categoryTools;

  // Get all tools for "See More" functionality - ensure we get ALL tools
  const allFilteredTools = searchTerm.trim() 
    ? searchTools(allTools, searchTerm)
    : [...allTools]; // Create a copy to avoid mutation
  
  console.log(`📊 Current display state:`, {
    categoryToolsCount: categoryTools.length,
    filteredToolsCount: filteredTools.length,
    allFilteredToolsCount: allFilteredTools.length,
    totalAllToolsCount: allTools.length,
    showAllTools,
    searchTerm: searchTerm || 'none',
    displayedCount,
    allToolsDisplayedCount
  });

  // Calculate the actual displayed count based on what we're showing
  const currentTools = showAllTools ? allFilteredTools : filteredTools;
  const currentDisplayedCount = showAllTools ? allToolsDisplayedCount : displayedCount;

  const handleLoadMore = () => {
    if (isLoading || displayedCount >= filteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, filteredTools.length));
      setIsLoading(false);
    }, 300); // Reduced timeout for better performance
  };

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allFilteredTools.length) return;
    
    console.log(`🚀 Loading more tools: ${allToolsDisplayedCount} -> ${Math.min(allToolsDisplayedCount + 24, allFilteredTools.length)} of ${allFilteredTools.length}`);
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allFilteredTools.length));
      setIsLoading(false);
    }, 300);
  };

  // Fixed search handler that doesn't cause navigation or scroll issues
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setDisplayedCount(24); // Reset displayed count when searching
    setAllToolsDisplayedCount(24); // Reset all tools count when searching
  };

  const handleSeeMoreAITools = () => {
    console.log(`🚀 See More AI Tools clicked! Total tools available: ${allTools.length}`);
    setShowAllTools(true);
    setAllToolsDisplayedCount(24); // Start with 24 tools and let infinite scroll handle the rest
    // Scroll to the tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('all-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Setup infinite scroll - enhanced for better performance
  useInfiniteScroll({
    isLoading,
    showLoadMoreButton: false,
    displayedCount: currentDisplayedCount,
    totalTools: currentTools.length,
    onLoadMore: showAllTools ? handleAllToolsLoadMore : handleLoadMore,
    searchTerm: searchTerm
  });

  const hasMoreTools = currentDisplayedCount < currentTools.length;
  const showCompletionMessage = !hasMoreTools && !isLoading && currentTools.length > 20;

  console.log(`📊 Final render state:`, {
    currentToolsLength: currentTools.length,
    currentDisplayedCount,
    hasMoreTools,
    showAllTools,
    decodedCategoryName
  });

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <SEOHead
        title={`${decodedCategoryName} - AI Tools Directory`}
        description={`Discover the best ${decodedCategoryName.toLowerCase()} for your needs. ${mainCategory.description}`}
        keywords={[decodedCategoryName.toLowerCase(), "ai tools", "artificial intelligence"]}
      />
      
      <AnimatedBackground />
      
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <CategoryHeader 
            categoryName={decodedCategoryName}
            emoji={mainCategory.emoji}
            description={mainCategory.description}
          />

          <SearchSection 
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          <ToolsCountDisplay 
            showAllTools={showAllTools}
            searchTerm={searchTerm}
            allFilteredTools={allFilteredTools}
            filteredTools={filteredTools}
            allTools={allTools}
          />

          <ToolsSection 
            currentTools={currentTools}
            currentDisplayedCount={currentDisplayedCount}
            decodedCategoryName={decodedCategoryName}
            searchTerm={searchTerm}
            showAllTools={showAllTools}
            isLoading={isLoading}
            onLoadMore={showAllTools ? handleAllToolsLoadMore : handleLoadMore}
          />

          <CompletionMessage 
            showCompletionMessage={showCompletionMessage}
            currentTools={currentTools}
            showAllTools={showAllTools}
            decodedCategoryName={decodedCategoryName}
          />
        </main>

        <SeeMoreSection 
          showAllTools={showAllTools}
          decodedCategoryName={decodedCategoryName}
          allToolsLength={allTools.length}
          onSeeMoreAITools={handleSeeMoreAITools}
        />
        
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
