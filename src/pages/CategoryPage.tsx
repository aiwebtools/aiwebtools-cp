
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
import { ChevronLeft, Grid3X3 } from "lucide-react";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryName || "");
  const toolsGridRef = useRef<HTMLDivElement>(null);
  
  const categoriesWithCounts = getCategoriesWithCounts(allTools);
  const categoryTools = getToolsByCategory(allTools, selectedCategory);
  
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName));
    }
  }, [categoryName]);

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
            <Button onClick={goBack} className="bg-gradient-to-r from-cyan-600 to-blue-600">
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
      <div className="relative z-10 cyber-grid">
        <Header />
        <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Button 
              onClick={goBack} 
              variant="outline" 
              className="mb-6 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-glow">
              <Grid3X3 className="inline-block w-8 h-8 mr-3 text-cyan-400" />
              {selectedCategory}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">
              Discover {categoryTools.length} AI tools in this category
            </p>
            
            <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-400 text-cyan-300 bg-cyan-500/10">
              {categoryTools.length} Tools Available
            </Badge>
          </div>

          {/* Category Toggle Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4 text-center">
              Browse Other Categories
            </h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              {Object.entries(categoriesWithCounts).map(([category, count]) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={`
                    ${category === selectedCategory 
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white" 
                      : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  `}
                >
                  {category}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-white/20 text-white text-xs"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryTools.map((tool, index) => (
                  <ToolCard key={`${tool.title}-${index}`} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No Tools Found</h3>
                <p className="text-gray-400">This category doesn't have any tools yet.</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
