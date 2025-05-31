
import { useState, useEffect, useMemo } from "react";
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
  
  // Memoize the category tools to prevent recalculation on every render
  const categoryTools = useMemo(() => {
    if (!mainCategory) return [];
    console.log(`🚀 Calculating tools for category: ${decodedCategoryName}`);
    const tools = getToolsByMainCategory(allTools, decodedCategoryName);
    console.log(`✅ Category tools calculated: ${tools.length} tools`);
    return tools;
  }, [decodedCategoryName, mainCategory]);
  
  // Memoize filtered tools to optimize search performance
  const filteredTools = useMemo(() => {
    if (!searchTerm.trim()) return categoryTools;
    console.log(`🔍 Filtering tools with search term: "${searchTerm}"`);
    const results = searchTools(categoryTools, searchTerm);
    console.log(`✅ Search results: ${results.length} tools`);
    return results;
  }, [categoryTools, searchTerm]);

  // Memoize all filtered tools for "See More" functionality
  const allFilteredTools = useMemo(() => {
    if (!searchTerm.trim()) return [...allTools];
    console.log(`🔍 Searching all tools with term: "${searchTerm}"`);
    const results = searchTools(allTools, searchTerm);
    console.log(`✅ All tools search results: ${results.length} tools`);
    return results;
  }, [searchTerm]);
  
  // Scroll to top when category changes - enhanced for immediate effect
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAllTools(false);
    setDisplayedCount(24);
    setSearchTerm(""); // Clear search when changing categories
  }, [decodedCategoryName]);
  
  if (!mainCategory) {
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // Calculate the actual displayed count based on what we're showing
  const currentTools = showAllTools ? allFilteredTools : filteredTools;
  const currentDisplayedCount = showAllTools ? allToolsDisplayedCount : displayedCount;

  const handleLoadMore = () => {
    if (isLoading || displayedCount >= filteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, filteredTools.length));
      setIsLoading(false);
    }, 100); // Reduced timeout for better performance
  };

  const handleAllToolsLoadMore = () => {
    if (isLoading || allToolsDisplayedCount >= allFilteredTools.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setAllToolsDisplayedCount(prev => Math.min(prev + 24, allFilteredTools.length));
      setIsLoading(false);
    }, 100);
  };

  // Optimized search handler
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setDisplayedCount(24);
    setAllToolsDisplayedCount(24);
  };

  const handleSeeMoreAITools = () => {
    setShowAllTools(true);
    setAllToolsDisplayedCount(24);
    setTimeout(() => {
      const toolsSection = document.getElementById('all-tools-section');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Setup infinite scroll - optimized
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
