
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ToolCard from "@/components/tools/ToolCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allTools } from "@/data/toolsData";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { ChevronLeft, Grid3X3, ArrowUp } from "lucide-react";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryName || "");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toolsGridRef = useRef<HTMLDivElement>(null);
  const categoryButtonsRef = useRef<HTMLDivElement>(null);
  
  const categoriesWithCounts = getCategoriesWithCounts(allTools);
  const categoryTools = getToolsByCategory(allTools, selectedCategory);
  
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName));
    }
  }, [categoryName]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    navigate(`/category/${encodeURIComponent(category)}`);
    
    // Scroll to tools grid after a short delay to ensure the page has updated
    setTimeout(() => {
      if (toolsGridRef.current) {
        toolsGridRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCategories = () => {
    if (categoryButtonsRef.current) {
      categoryButtonsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const goBack = () => {
    navigate('/');
  };

  if (!selectedCategory || !categoriesWithCounts[selectedCategory]) {
    return (
      <div className="min-h-screen bg-black relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <div className="pt-32 px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
            <Button onClick={goBack} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button 
                onClick={goBack} 
                variant="outline" 
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <Button 
                onClick={scrollToCategories} 
                variant="outline" 
                className="border-pink-500/30 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400/50 transition-all duration-300"
              >
                Browse Categories
              </Button>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              <Grid3X3 className="inline-block w-8 h-8 md:w-10 md:h-10 mr-3 text-purple-400" />
              {selectedCategory}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Discover {categoryTools.length} AI tools in this category
            </p>
            
            <Badge variant="outline" className="text-lg px-6 py-3 border-purple-400 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300">
              {categoryTools.length} Tools Available
            </Badge>
          </div>

          {/* Category Toggle Section */}
          <div className="mb-16" ref={categoryButtonsRef}>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-6 text-center">
              Browse Other Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-6xl mx-auto">
              {Object.entries(categoriesWithCounts)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([category, count]) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={`
                    group relative overflow-hidden transition-all duration-300 transform hover:scale-105
                    ${category === selectedCategory 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25" 
                      : "border-purple-500/30 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/50 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-10 text-sm font-medium truncate">{category}</span>
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 text-xs relative z-10 ${
                      category === selectedCategory 
                        ? "bg-white/20 text-white" 
                        : "bg-purple-500/20 text-purple-200 group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    {count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mb-16" ref={toolsGridRef}>
            {categoryTools.length > 0 ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    AI Tools in {selectedCategory}
                  </h2>
                  <p className="text-gray-400">
                    Showing all {categoryTools.length} tools
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryTools.map((tool, index) => (
                    <ToolCard key={`${tool.title}-${index}`} tool={tool} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No Tools Found</h3>
                <p className="text-gray-400 mb-6">This category doesn't have any tools yet.</p>
                <Button 
                  onClick={goBack}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Explore Other Categories
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
            size="icon"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
        
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
