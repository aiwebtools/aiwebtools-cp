
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTopButton from "@/components/category/ScrollToTopButton";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import ToolsGrid from "@/components/tools/ToolsGrid";
import SearchBar from "@/components/tools/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { getToolsByMainCategory } from "@/utils/categoryUtils";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { useNavigate } from "react-router-dom";

const MainCategoryPage = () => {
  const { mainCategoryName } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(24);
  const [isLoading, setIsLoading] = useState(false);

  // Decode and find the main category
  const decodedMainCategory = mainCategoryName ? decodeURIComponent(mainCategoryName) : "";
  const mainCategory = mainCategories.find(cat => cat.name === decodedMainCategory);
  
  // Get tools for this main category
  const mainCategoryTools = useMemo(() => {
    console.log(`📂 Loading main category page for: "${decodedMainCategory}"`);
    const tools = getToolsByMainCategory(allTools, decodedMainCategory);
    console.log(`📊 Found ${tools.length} tools in main category "${decodedMainCategory}"`);
    return tools;
  }, [decodedMainCategory]);

  // Filter tools by search if search term exists
  const filteredTools = useMemo(() => {
    if (!searchTerm.trim()) {
      return mainCategoryTools;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = mainCategoryTools.filter(tool => 
      tool.title.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(term))
    );
    
    console.log(`🔍 Filtered main category "${decodedMainCategory}" with search "${searchTerm}": ${filtered.length} tools`);
    return filtered;
  }, [mainCategoryTools, searchTerm, decodedMainCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayedCount(24);
    setSearchTerm("");
    
    // Log main category page load for verification
    console.log(`📄 Main category page loaded: "${decodedMainCategory}" (${mainCategoryTools.length} tools)`);
  }, [decodedMainCategory, mainCategoryTools.length]);

  const handleLoadMore = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 24);
      setIsLoading(false);
    }, 300);
  };

  const hasMoreTools = displayedCount < filteredTools.length;

  if (!decodedMainCategory || !mainCategory) {
    return (
      <div className="min-h-screen bg-black relative">
        <SEOHead
          title="Category Not Found"
          description="The requested main category could not be found. Browse our collection of AI tool categories."
          noIndex={true}
        />
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-cyan-100 mb-4">Main Category Not Found</h1>
            <p className="text-gray-300">This main category doesn't exist in our directory.</p>
            <Button onClick={() => navigate('/')} className="mt-4">
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://aitools.studio" },
    { name: "AI Tools", url: "https://aitools.studio/#tools-section" },
    { name: decodedMainCategory, url: `https://aitools.studio/main-category/${encodeURIComponent(decodedMainCategory)}` }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <SEOHead
        title={`${decodedMainCategory} - Best AI Tools 2025`}
        description={`Discover ${mainCategoryTools.length} premium ${decodedMainCategory.toLowerCase()} AI tools. Find the best artificial intelligence solutions for ${decodedMainCategory.toLowerCase()} tasks and workflows.`}
        keywords={[
          `${decodedMainCategory.toLowerCase()} ai tools`,
          `best ${decodedMainCategory.toLowerCase()} tools`,
          `${decodedMainCategory.toLowerCase()} artificial intelligence`,
          `ai ${decodedMainCategory.toLowerCase()} software`,
          "ai tools directory",
          "artificial intelligence tools",
          "ai tools 2025"
        ]}
        url={`/main-category/${encodeURIComponent(decodedMainCategory)}`}
      />
      
      <BreadcrumbSEO items={breadcrumbItems} />
      
      <AnimatedBackground />
      <div className="relative z-10 cyber-grid">
        <Header />
        
        {/* Category Header */}
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="sm"
                className="bg-gray-800/70 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{mainCategory.emoji}</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
                {decodedMainCategory}
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                {mainCategory.description}
              </p>
              <div className="text-cyan-300 mb-8">
                {filteredTools.length} AI tools available{searchTerm && ` matching "${searchTerm}"`}
              </div>
              
              <div className="max-w-md mx-auto">
                <SearchBar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
              </div>
            </div>
          </div>
        </section>

        {/* Tools Display */}
        <section className="py-8 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <ToolsGrid
              tools={filteredTools}
              displayedCount={displayedCount}
              selectedCategory={null}
              searchTerm={searchTerm}
              onLoadMore={handleLoadMore}
              hasInfiniteScroll={false}
              isLoading={isLoading}
            />

            {/* Show More Button */}
            {hasMoreTools && (
              <div className="text-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  size="lg"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Loading More Tools...</span>
                    </div>
                  ) : (
                    <>🚀 Show More AI Tools</>
                  )}
                </Button>
                <div className="mt-4 text-cyan-300 text-sm">
                  Showing {displayedCount} of {filteredTools.length} tools
                </div>
              </div>
            )}

            {/* Completion Message */}
            {!hasMoreTools && !isLoading && filteredTools.length > 20 && (
              <div className="text-center mt-12 text-cyan-300">
                <div className="text-2xl mb-2">🎉</div>
                <div className="text-lg font-semibold mb-2">
                  You've explored all {filteredTools.length} {decodedMainCategory} tools!
                </div>
                <div className="text-sm opacity-80">
                  Try searching or exploring other categories to discover more tools.
                </div>
              </div>
            )}
          </div>
        </section>
        
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default MainCategoryPage;
