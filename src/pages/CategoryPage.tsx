
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CategoryHeader from "@/components/category/CategoryHeader";
import CategorySelector from "@/components/category/CategorySelector";
import ToolsDisplay from "@/components/category/ToolsDisplay";
import ScrollToTopButton from "@/components/category/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/toolsData";
import { getCategoriesWithCounts, getToolsByCategory } from "@/utils/categoryUtils";
import { ChevronLeft } from "lucide-react";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryName || "");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [displayedCount, setDisplayedCount] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toolsGridRef = useRef<HTMLDivElement>(null);
  const categoryButtonsRef = useRef<HTMLDivElement>(null);
  
  const categoriesWithCounts = getCategoriesWithCounts(allTools);
  
  // Handle "All Categories" special case
  const isAllCategories = selectedCategory === "All Categories";
  const categoryTools = isAllCategories ? allTools : getToolsByCategory(allTools, selectedCategory);
  
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName));
    }
  }, [categoryName]);

  const handleLoadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 20);
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      if (isLoading) return;
      
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        const threshold = 800;
        const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
        
        if (nearBottom && displayedCount < categoryTools.length && !isLoading) {
          handleLoadMore();
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [displayedCount, categoryTools.length, handleLoadMore, isLoading]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayedCount(20);
    setIsLoading(false);
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

  // Check if category exists or is the special "All Categories" case
  if (!selectedCategory || (!isAllCategories && !categoriesWithCounts[selectedCategory])) {
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
          <CategoryHeader 
            selectedCategory={selectedCategory}
            toolsCount={categoryTools.length}
            onScrollToCategories={scrollToCategories}
          />

          <ToolsDisplay
            ref={toolsGridRef}
            selectedCategory={selectedCategory}
            categoryTools={categoryTools}
            displayedCount={displayedCount}
            hasInfiniteScroll={true}
            isLoading={isLoading}
          />

          <CategorySelector
            ref={categoryButtonsRef}
            categoriesWithCounts={categoriesWithCounts}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        
        <ScrollToTopButton 
          showScrollTop={showScrollTop}
          onScrollToTop={scrollToTop}
        />
        
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
