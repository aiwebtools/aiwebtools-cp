
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

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [displayedCount, setDisplayedCount] = useState(48);
  const [isLoading, setIsLoading] = useState(false);

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

  // Endless tools generation for categories
  const finalFilteredTools = useMemo(() => {
    let endlessTools = [...categoryTools];
    const remaining = displayedCount - endlessTools.length;
    if (remaining > 0) {
      const similar = getContextAwareAdditionalTools(
        endlessTools,
        "",
        standardizedCategory,
        Math.min(remaining, 100)
      );
      const uniqueSimilar = similar.filter(tool => 
        !endlessTools.some(existing => existing.title === tool.title)
      );
      endlessTools = [...endlessTools, ...uniqueSimilar];
      const stillNeeded = displayedCount - endlessTools.length;
      if (stillNeeded > 0) {
        const others = allTools.filter(tool => 
          !endlessTools.some(existing => existing.title === tool.title)
        );
        endlessTools = [...endlessTools, ...others.slice(0, stillNeeded)];
      }
    }
    return endlessTools;
  }, [categoryTools, displayedCount, standardizedCategory]);

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
    setDisplayedCount(48);
    
    // Log category page load for verification
    console.log(`📄 Category page loaded: "${standardizedCategory}" (${categoryTools.length} tools)`);
  }, [standardizedCategory, categoryTools.length]);

  const handleLoadMore = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 48);
      setIsLoading(false);
    }, 100);
  };

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
        description={`Discover ${categoryTools.length} premium ${standardizedCategory.toLowerCase()} AI tools. Find the best artificial intelligence solutions for ${standardizedCategory.toLowerCase()} tasks and workflows.`}
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
        
        <div className="pt-32 md:pt-36 lg:pt-40">
          <CategoryHeader 
            categoryName={standardizedCategory}
            toolCount={categoryTools.length}
          />
          
          <ToolsGrid 
            tools={finalFilteredTools}
            displayedCount={displayedCount}
            selectedCategory={standardizedCategory}
            searchTerm=""
            onLoadMore={handleLoadMore}
            hasInfiniteScroll={true}
            isLoading={isLoading}
          />
        </div>
        
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
