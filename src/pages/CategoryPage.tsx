
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CategoryHeader from "@/components/category/CategoryHeader";
import ToolsDisplay from "@/components/category/ToolsDisplay";
import ScrollToTopButton from "@/components/category/ScrollToTopButton";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { allTools } from "@/data/toolsData";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { getStandardizedCategoryTitle } from "@/utils/categoryTitles";
import { generateStructuredData } from "@/utils/seo";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(12);
  const [toolsLoaded, setToolsLoaded] = useState(false);

  // Decode and standardize the category name
  const decodedCategory = categoryName ? decodeURIComponent(categoryName) : "";
  const standardizedCategory = getStandardizedCategoryTitle(decodedCategory);
  
  // Get tools for this category with lazy loading
  const categoryTools = useMemo(() => {
    if (!toolsLoaded) return [];
    
    console.log(`📂 Loading category page for: "${standardizedCategory}"`);
    const tools = getToolsByCategory(allTools, standardizedCategory);
    console.log(`📊 Found ${tools.length} tools in category "${standardizedCategory}"`);
    return tools.slice(0, 500);
  }, [standardizedCategory, toolsLoaded]);

  // Filter tools by search with optimized memoization
  const filteredTools = useMemo(() => {
    if (!toolsLoaded) return [];
    
    if (!searchTerm.trim()) {
      return categoryTools;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = categoryTools.filter(tool => 
      tool.title.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(term))
    );
    
    console.log(`🔍 Filtered category "${standardizedCategory}" with search "${searchTerm}": ${filtered.length} tools`);
    return filtered.slice(0, 100);
  }, [categoryTools, searchTerm, standardizedCategory, toolsLoaded]);

  // Immediate scroll and reset on category change
  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayedCount(12);
    setSearchTerm("");
    setToolsLoaded(false);
    
    console.log(`📄 Category page loaded: "${standardizedCategory}"`);
  }, [standardizedCategory]);

  const handleLoadMore = useCallback(() => {
    setDisplayedCount(prev => Math.min(prev + 12, filteredTools.length));
  }, [filteredTools.length]);

  const handleLoadTools = useCallback(() => {
    console.log(`🚀 Loading tools for category: "${standardizedCategory}"`);
    setToolsLoaded(true);
  }, [standardizedCategory]);

  // Memoized structured data and breadcrumbs
  const categoryStructuredData = useMemo(() => generateStructuredData('category', {
    title: standardizedCategory,
    description: `Discover the best AI tools in the ${standardizedCategory} category`,
    toolCount: allTools.length
  }), [standardizedCategory]);

  const breadcrumbItems = useMemo(() => [
    { name: "Home", url: "https://aitools.studio" },
    { name: "AI Tools", url: "https://aitools.studio/#tools-section" },
    { name: standardizedCategory, url: `https://aitools.studio/category/${encodeURIComponent(standardizedCategory)}` }
  ], [standardizedCategory]);

  // Calculate tool count as number for CategoryHeader
  const toolCount = useMemo(() => {
    return toolsLoaded ? categoryTools.length : 100;
  }, [toolsLoaded, categoryTools.length]);

  if (!decodedCategory) {
    return (
      <div className="min-h-screen bg-black relative">
        <SEOHead
          title="Category Not Found"
          description="The requested category could not be found. Browse our collection of AI tool categories."
          noIndex={true}
        />
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-cyan-100 mb-4">Category Not Found</h1>
            <p className="text-gray-300">This category doesn't exist in our directory.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <SEOHead
        title={`${standardizedCategory} AI Tools - Best ${standardizedCategory} Tools 2025`}
        description={`Discover premium ${standardizedCategory.toLowerCase()} AI tools. Find the best artificial intelligence solutions for ${standardizedCategory.toLowerCase()} tasks and workflows.`}
        keywords={[
          `${standardizedCategory.toLowerCase()} ai tools`,
          `best ${standardizedCategory.toLowerCase()} tools`,
          `${standardizedCategory.toLowerCase()} artificial intelligence`,
          `ai ${standardizedCategory.toLowerCase()} software`,
          "ai tools directory",
          "artificial intelligence tools",
          "ai tools 2025"
        ]}
        url={`/category/${encodeURIComponent(standardizedCategory)}`}
        structuredData={categoryStructuredData}
        category={standardizedCategory}
      />
      
      <BreadcrumbSEO items={breadcrumbItems} />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        <CategoryHeader 
          categoryName={standardizedCategory}
          toolCount={toolCount}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        {/* Load Tools Button - Only show if tools not loaded */}
        {!toolsLoaded && (
          <div className="text-center mb-12 px-4">
            <button
              onClick={handleLoadTools}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              🚀 LOAD {standardizedCategory.toUpperCase()} TOOLS
            </button>
            <div className="mt-4 text-cyan-300 text-sm">
              Click to view all tools in this category
            </div>
          </div>
        )}
        
        {/* Tools Display - Only render when loaded */}
        {toolsLoaded && (
          <ToolsDisplay 
            tools={filteredTools}
            displayedCount={displayedCount}
            onLoadMore={handleLoadMore}
            hasMoreTools={displayedCount < filteredTools.length}
            categoryName={standardizedCategory}
            searchTerm={searchTerm}
          />
        )}
        
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
