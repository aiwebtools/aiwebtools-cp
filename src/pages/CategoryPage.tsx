
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
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

  // Filter tools by search if search term exists
  const filteredTools = useMemo(() => {
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
    return filtered;
  }, [categoryTools, searchTerm]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayedCount(12);
    setSearchTerm("");
    
    // Log category page load for verification
    console.log(`📄 Category page loaded: "${standardizedCategory}" (${categoryTools.length} tools)`);
  }, [standardizedCategory, categoryTools.length]);

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 12);
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

  const categoryStructuredData = generateStructuredData('category', {
    title: standardizedCategory,
    description: `Discover the best AI tools in the ${standardizedCategory} category`,
    toolCount: categoryTools.length
  });

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
        
        <CategoryHeader 
          categoryName={standardizedCategory}
          toolCount={categoryTools.length}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <ToolsDisplay 
          tools={filteredTools}
          displayedCount={displayedCount}
          onLoadMore={handleLoadMore}
          hasMoreTools={displayedCount < filteredTools.length}
          categoryName={standardizedCategory}
          searchTerm={searchTerm}
        />
        
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
