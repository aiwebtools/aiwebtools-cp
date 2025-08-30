
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CategoryHeader from "@/components/category/CategoryHeader";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ScrollToTopButton from "@/components/category/ScrollToTopButton";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { allTools } from "@/data/toolsData";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { getStandardizedCategoryTitle } from "@/utils/categoryTitles";
import { generateStructuredData } from "@/utils/seo";
import { getContextAwareAdditionalTools } from "@/utils/contextAwareSimilarTools";
import { useForeverScroll } from "@/components/category/ForeverScrollManager";

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Decode and standardize the category name
  const decodedCategory = categoryName ? decodeURIComponent(categoryName) : "";
  const standardizedCategory = getStandardizedCategoryTitle(decodedCategory);
  
  // Get tools for this category
  const categoryTools = useMemo(() => {
    console.log(`📂 Loading category page for: "${standardizedCategory}"`);
    const tools = getToolsByCategory(allTools, standardizedCategory);
    console.log(`📊 Found ${tools.length} tools in category "${standardizedCategory}"`);
    return tools;
  }, [standardizedCategory]);

  // Use forever scroll manager
  const {
    displayedTools,
    displayedCount,
    totalCycles,
    currentCyclePosition,
    isLoading,
    loadMore,
    cycleCount
  } = useForeverScroll({
    tools: categoryTools,
    initialDisplayCount: 48,
    increment: 48
  });

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
    
    // Log category page load for verification
    console.log(`📄 Category page loaded: "${standardizedCategory}" (${categoryTools.length} tools)`);
  }, [standardizedCategory, categoryTools.length]);

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

  const categoryStructuredData = generateStructuredData('category');

  const breadcrumbItems = [
    { name: "Home", url: "https://aitools.studio" },
    { name: "AI Tools", url: "https://aitools.studio/#tools-section" },
    { name: standardizedCategory, url: `https://aitools.studio/category/${encodeURIComponent(standardizedCategory)}` }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <SEOHead
        title={`${standardizedCategory} AI Tools - Best ${standardizedCategory} Tools 2025`}
        description={`Discover ${categoryTools.length} premium ${standardizedCategory.toLowerCase()} AI tools. Find the best artificial intelligence solutions for ${standardizedCategory.toLowerCase()} tasks and workflows. Forever scroll through endless discoveries.`}
        keywords={[
          `${standardizedCategory.toLowerCase()} ai tools`,
          `best ${standardizedCategory.toLowerCase()} tools`,
          `${standardizedCategory.toLowerCase()} artificial intelligence`,
          `ai ${standardizedCategory.toLowerCase()} software`,
          "ai tools directory",
          "artificial intelligence tools",
          "ai tools 2025",
          "forever scroll ai tools"
        ]}
        url={`/category/${encodeURIComponent(standardizedCategory)}`}
        structuredData={categoryStructuredData}
        category={standardizedCategory}
      />
      
      <BreadcrumbSEO items={breadcrumbItems} />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        {/* Enhanced Category Header with Forever Scroll Info */}
        <div className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 cyber-glow">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                {standardizedCategory} AI TOOLS
              </span>
            </h1>
            
            <div className="text-cyan-300 text-lg font-semibold space-y-2 mb-4">
              <div>
                {categoryTools.length} unique tools • Cycle {cycleCount} • Forever Discovery Mode
              </div>
              
              {categoryTools.length > 0 && (
                <div className="text-sm text-cyan-300 opacity-80">
                  🔄 Position: {currentCyclePosition}/{categoryTools.length} • Total viewed: {displayedCount} • Never-ending exploration
                </div>
              )}
            </div>
            
            <div className="text-cyan-200 text-sm opacity-70">
              🌟 Forever Scroll Active - Tools reshuffle each cycle for continuous discovery!
            </div>
          </div>
        </div>
        
        <ToolsGrid 
          tools={displayedTools}
          displayedCount={displayedTools.length}
          selectedCategory={standardizedCategory}
          searchTerm=""
          onLoadMore={loadMore}
          hasInfiniteScroll={true}
          isLoading={isLoading}
        />
        
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
