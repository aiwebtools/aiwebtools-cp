
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ToolCard from "@/components/tools/ToolCard";
import { getCategoryStyle } from "@/utils/categoryStyles";
import { getSortedStandardizedCategories } from "@/utils/categoryTitles";
import { getToolsByCategory } from "@/utils/categoryUtils";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { createDeduplicatedToolsList } from "@/utils/toolDeduplication";

const CategoryPageSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedTools, setDisplayedTools] = useState<Tool[]>([]);
  const [displayedCount, setDisplayedCount] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [availableTools, setAvailableTools] = useState<Tool[]>([]);

  const sortedCategories = getSortedStandardizedCategories();

  // Get related categories for better tool flow
  const getRelatedCategories = (category: string): string[] => {
    const categoryRelations: Record<string, string[]> = {
      "AI Development & Platforms": ["Data Science & Analytics", "Automation Platforms", "Industry-Specific Solutions"],
      "Writing & Text Generation": ["AI Assistants & Search", "Business Operations & Productivity", "Education & Research Tools"],
      "Image & Design Generation": ["Video & Animation Tools", "Creative & Entertainment (General & Gaming)", "Marketing & Sales Solutions"],
      "Video & Animation Tools": ["Image & Design Generation", "Audio & Music Tools", "Creative & Entertainment (General & Gaming)"],
      "Audio & Music Tools": ["Video & Animation Tools", "Creative & Entertainment (General & Gaming)", "Communication & Collaboration Tools"],
      "Business Operations & Productivity": ["Marketing & Sales Solutions", "Data Science & Analytics", "Automation Platforms"],
      "Marketing & Sales Solutions": ["Business Operations & Productivity", "Communication & Collaboration Tools", "Image & Design Generation"],
      "Communication & Collaboration Tools": ["Business Operations & Productivity", "AI Assistants & Search", "Marketing & Sales Solutions"],
      "AI Assistants & Search": ["Writing & Text Generation", "Communication & Collaboration Tools", "Business Operations & Productivity"],
      "Data Science & Analytics": ["AI Development & Platforms", "Business Operations & Productivity", "Education & Research Tools"],
      "Automation Platforms": ["AI Development & Platforms", "Business Operations & Productivity", "Data Science & Analytics"],
      "Education & Research Tools": ["AI Assistants & Search", "Data Science & Analytics", "Writing & Text Generation"],
      "Industry-Specific Solutions": ["AI Development & Platforms", "Business Operations & Productivity", "Data Science & Analytics"],
      "Creative & Entertainment (General & Gaming)": ["Image & Design Generation", "Video & Animation Tools", "Audio & Music Tools"],
      "Health, Wellness & Personal Lifestyle": ["AI Assistants & Search", "Education & Research Tools", "Industry-Specific Solutions"],
      "Historical & Time-Based AI Tools": ["Education & Research Tools", "Industry-Specific Solutions", "Creative & Entertainment (General & Gaming)"]
    };
    
    return categoryRelations[category] || ["Business Operations & Productivity", "AI Development & Platforms", "Creative & Entertainment (General & Gaming)"];
  };

  const handleShowAllTools = useCallback(() => {
    console.log(`🎯 Showing all tools`);
    setSelectedCategory(null);
    setDisplayedCount(20);
    setIsLoading(true);

    // Show all tools with smart deduplication
    const deduplicatedTools = createDeduplicatedToolsList(allTools, 0);
    
    console.log(`✨ All tools: ${deduplicatedTools.length} tools`);
    
    setAvailableTools(deduplicatedTools);
    setDisplayedTools(deduplicatedTools.slice(0, 20));
    setIsLoading(false);

    // Scroll to tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('tools-display');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  const handleCategorySelect = useCallback((category: string) => {
    console.log(`🎯 Selected category: ${category}`);
    setSelectedCategory(category);
    setDisplayedCount(20);
    setIsLoading(true);

    // Get primary tools from selected category
    const primaryTools = getToolsByCategory(allTools, category);
    console.log(`📂 Found ${primaryTools.length} primary tools in ${category}`);

    // Get related tools from similar categories to ensure continuous flow
    const relatedCategories = getRelatedCategories(category);
    const relatedTools = allTools.filter(tool => 
      relatedCategories.includes(tool.category || '') && 
      !primaryTools.some(primary => primary.title === tool.title)
    );
    console.log(`🔗 Found ${relatedTools.length} related tools from categories: ${relatedCategories.join(', ')}`);

    // Combine and deduplicate tools with priority to primary category
    const combinedTools = [...primaryTools, ...relatedTools];
    const deduplicatedTools = createDeduplicatedToolsList(combinedTools, 0);
    
    console.log(`✨ Final tool set: ${deduplicatedTools.length} tools (${primaryTools.length} primary + ${relatedTools.length} related)`);
    
    setAvailableTools(deduplicatedTools);
    setDisplayedTools(deduplicatedTools.slice(0, 20));
    setIsLoading(false);

    // Scroll to tools section
    setTimeout(() => {
      const toolsSection = document.getElementById('tools-display');
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  const loadMoreTools = useCallback(() => {
    if (isLoading || displayedCount >= availableTools.length) return;
    
    console.log(`🚀 Loading more tools - Current: ${displayedCount}, Available: ${availableTools.length}`);
    setIsLoading(true);
    
    setTimeout(() => {
      const newCount = Math.min(displayedCount + 16, availableTools.length);
      setDisplayedTools(availableTools.slice(0, newCount));
      setDisplayedCount(newCount);
      setIsLoading(false);
    }, 300);
  }, [isLoading, displayedCount, availableTools]);

  // Infinite scroll implementation
  useEffect(() => {
    if (!selectedCategory && availableTools.length === 0) return;

    const handleScroll = () => {
      if (isLoading || displayedCount >= availableTools.length) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const threshold = 800;
      const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
      
      if (nearBottom) {
        loadMoreTools();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategory, isLoading, displayedCount, availableTools.length, loadMoreTools]);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
      {/* Category Selection Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 sm:mb-4">
          🎯 Choose Your AI Tool Category
        </h2>
        <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 px-2">
          Select a category to explore an endless stream of AI tools tailored to your needs
        </p>
      </div>

      {/* Show All AI Tools Button - Golden and Prominent */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <Button
          onClick={handleShowAllTools}
          size="lg"
          className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold ${
            selectedCategory === null 
              ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black shadow-xl shadow-yellow-500/25 scale-105" 
              : "bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 text-black shadow-lg hover:shadow-yellow-500/25"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 w-full">
            <span className="text-xl sm:text-2xl">🌟</span>
            <span className="relative z-10 text-center leading-tight font-bold">Show All AI Tools</span>
            <Badge 
              variant="secondary" 
              className="text-xs bg-black/20 text-black border-black/30"
            >
              {allTools.length}+ tools
            </Badge>
          </div>
        </Button>
      </div>

      {/* Categories Grid - Enhanced for better text display */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 mb-12 sm:mb-16">
        {sortedCategories.map(([category, count]) => {
          const categoryStyle = getCategoryStyle(category);
          const isSelected = category === selectedCategory;
          
          return (
            <Button
              key={category}
              onClick={() => handleCategorySelect(category)}
              variant="outline"
              className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 h-auto py-4 sm:py-5 px-3 sm:px-4 text-xs sm:text-sm min-h-[120px] sm:min-h-[140px] ${
                isSelected 
                  ? `${categoryStyle.colors.selected} text-white shadow-lg border-white/30 scale-105` 
                  : `${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`
              }`}
            >
              <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 w-full h-full">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{categoryStyle.emoji}</span>
                <span className="relative z-10 text-center leading-tight font-medium text-xs sm:text-sm hyphens-auto break-words max-w-full px-1">
                  {category}
                </span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs relative z-10 flex-shrink-0 ${
                    isSelected
                      ? "bg-white/25 text-white border-white/30" 
                      : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                  }`}
                >
                  {count} tools
                </Badge>
              </div>
            </Button>
          );
        })}
      </div>

      {/* Tools Display Section */}
      {(selectedCategory || availableTools.length > 0) && (
        <div id="tools-display" className="mt-8 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              🚀 {selectedCategory || "All AI Tools"}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Showing {displayedTools.length} of {availableTools.length} tools
              {availableTools.length > displayedTools.length && " - scroll for more!"}
            </p>
          </div>

          {/* Tools Grid - Responsive */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 sm:gap-6">
            {displayedTools.map((tool, index) => (
              <ToolCard key={`${tool.title}-${index}`} tool={tool} />
            ))}
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="text-center mt-6 sm:mt-8 py-6 sm:py-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-cyan-500"></div>
                <span className="text-cyan-200 text-sm sm:text-lg">Loading more {selectedCategory || "AI"} tools...</span>
              </div>
            </div>
          )}

          {/* Completion Message */}
          {!isLoading && displayedCount >= availableTools.length && availableTools.length > 20 && (
            <div className="text-center mt-8 sm:mt-12 py-6 sm:py-8 text-cyan-300">
              <div className="text-xl sm:text-2xl mb-2">🎉</div>
              <div className="text-base sm:text-lg font-semibold mb-2">
                You've explored all {availableTools.length} tools in {selectedCategory || "our collection"}!
              </div>
              <div className="text-xs sm:text-sm opacity-80">
                {selectedCategory ? "Try exploring other categories to discover more amazing AI tools." : "You've seen our entire collection of AI tools!"}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Initial Call to Action */}
      {!selectedCategory && availableTools.length === 0 && (
        <div className="text-center mt-8 sm:mt-16 py-8 sm:py-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20 mx-2 sm:mx-0">
          <div className="text-2xl sm:text-4xl mb-4">🎯</div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            Ready to Explore AI Tools?
          </h3>
          <p className="text-gray-400 mb-4 text-sm sm:text-base px-4">
            Select any category above or click "Show All AI Tools" to start your journey through our collection.
          </p>
          <p className="text-xs sm:text-sm text-cyan-300 px-4">
            Each category includes related tools to ensure you discover the perfect solution for your needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPageSelection;
