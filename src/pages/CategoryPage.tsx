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

// Category styling configuration
const getCategoryStyle = (category: string) => {
  const categoryStyles: Record<string, { emoji: string; colors: { bg: string; border: string; hover: string; selected: string } }> = {
    "Writing & Content": {
      emoji: "✍️",
      colors: {
        bg: "bg-blue-800/40",
        border: "border-blue-400/60",
        hover: "hover:bg-blue-500/20 hover:border-blue-400/80",
        selected: "bg-gradient-to-r from-blue-500 to-blue-600"
      }
    },
    "Image & Design": {
      emoji: "🎨",
      colors: {
        bg: "bg-purple-800/40",
        border: "border-purple-400/60",
        hover: "hover:bg-purple-500/20 hover:border-purple-400/80",
        selected: "bg-gradient-to-r from-purple-500 to-purple-600"
      }
    },
    "Video Tools": {
      emoji: "🎬",
      colors: {
        bg: "bg-red-800/40",
        border: "border-red-400/60",
        hover: "hover:bg-red-500/20 hover:border-red-400/80",
        selected: "bg-gradient-to-r from-red-500 to-red-600"
      }
    },
    "Audio & Music": {
      emoji: "🎵",
      colors: {
        bg: "bg-green-800/40",
        border: "border-green-400/60",
        hover: "hover:bg-green-500/20 hover:border-green-400/80",
        selected: "bg-gradient-to-r from-green-500 to-green-600"
      }
    },
    "Business & Productivity": {
      emoji: "💼",
      colors: {
        bg: "bg-orange-800/40",
        border: "border-orange-400/60",
        hover: "hover:bg-orange-500/20 hover:border-orange-400/80",
        selected: "bg-gradient-to-r from-orange-500 to-orange-600"
      }
    },
    "Education & Learning": {
      emoji: "📚",
      colors: {
        bg: "bg-indigo-800/40",
        border: "border-indigo-400/60",
        hover: "hover:bg-indigo-500/20 hover:border-indigo-400/80",
        selected: "bg-gradient-to-r from-indigo-500 to-indigo-600"
      }
    },
    "AI Development Tools": {
      emoji: "🤖",
      colors: {
        bg: "bg-teal-800/40",
        border: "border-teal-400/60",
        hover: "hover:bg-teal-500/20 hover:border-teal-400/80",
        selected: "bg-gradient-to-r from-teal-500 to-teal-600"
      }
    },
    "AI Chat Platforms": {
      emoji: "💬",
      colors: {
        bg: "bg-pink-800/40",
        border: "border-pink-400/60",
        hover: "hover:bg-pink-500/20 hover:border-pink-400/80",
        selected: "bg-gradient-to-r from-pink-500 to-pink-600"
      }
    },
    "Healthcare Professionals": {
      emoji: "🏥",
      colors: {
        bg: "bg-emerald-800/40",
        border: "border-emerald-400/60",
        hover: "hover:bg-emerald-500/20 hover:border-emerald-400/80",
        selected: "bg-gradient-to-r from-emerald-500 to-emerald-600"
      }
    },
    "Legal Professionals": {
      emoji: "⚖️",
      colors: {
        bg: "bg-amber-800/40",
        border: "border-amber-400/60",
        hover: "hover:bg-amber-500/20 hover:border-amber-400/80",
        selected: "bg-gradient-to-r from-amber-500 to-amber-600"
      }
    },
    "Creative & Entertainment": {
      emoji: "🎭",
      colors: {
        bg: "bg-rose-800/40",
        border: "border-rose-400/60",
        hover: "hover:bg-rose-500/20 hover:border-rose-400/80",
        selected: "bg-gradient-to-r from-rose-500 to-rose-600"
      }
    },
    "Research & Learning": {
      emoji: "🔬",
      colors: {
        bg: "bg-violet-800/40",
        border: "border-violet-400/60",
        hover: "hover:bg-violet-500/20 hover:border-violet-400/80",
        selected: "bg-gradient-to-r from-violet-500 to-violet-600"
      }
    },
    "AI Agents": {
      emoji: "🤵",
      colors: {
        bg: "bg-slate-800/40",
        border: "border-slate-400/60",
        hover: "hover:bg-slate-500/20 hover:border-slate-400/80",
        selected: "bg-gradient-to-r from-slate-500 to-slate-600"
      }
    },
    "Game Design & Development": {
      emoji: "🎮",
      colors: {
        bg: "bg-lime-800/40",
        border: "border-lime-400/60",
        hover: "hover:bg-lime-500/20 hover:border-lime-400/80",
        selected: "bg-gradient-to-r from-lime-500 to-lime-600"
      }
    },
    "Time & History": {
      emoji: "⏰",
      colors: {
        bg: "bg-yellow-800/40",
        border: "border-yellow-400/60",
        hover: "hover:bg-yellow-500/20 hover:border-yellow-400/80",
        selected: "bg-gradient-to-r from-yellow-500 to-yellow-600"
      }
    }
  };

  // Default style for categories not explicitly defined
  const defaultStyle = {
    emoji: "🔧",
    colors: {
      bg: "bg-gray-800/40",
      border: "border-gray-400/60",
      hover: "hover:bg-gray-500/20 hover:border-gray-400/80",
      selected: "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  };

  return categoryStyles[category] || defaultStyle;
};

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
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
              Browse Other Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
              {Object.entries(categoriesWithCounts)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([category, count]) => {
                  const categoryStyle = getCategoryStyle(category);
                  const isSelected = category === selectedCategory;
                  
                  return (
                    <Button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      variant="outline"
                      size="sm"
                      className={`
                        group relative overflow-hidden transition-all duration-300 transform hover:scale-105 w-full min-w-fit px-4 py-3 h-auto whitespace-normal text-left border
                        ${isSelected 
                          ? `${categoryStyle.colors.selected} text-white shadow-lg border-white/30` 
                          : `${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`
                        }
                      `}
                    >
                      <div className="flex justify-between items-center w-full gap-2">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-lg">{categoryStyle.emoji}</span>
                          <span className="relative z-10 text-sm font-medium leading-tight">{category}</span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs relative z-10 flex-shrink-0 ${
                            isSelected
                              ? "bg-white/25 text-white border-white/30" 
                              : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                          }`}
                        >
                          {count}
                        </Badge>
                      </div>
                    </Button>
                  );
                })}
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
