
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
      "AI Development Tools": ["Advanced AI Tools", "Data & Analytics", "Automation & Workflows"],
      "Advanced AI Tools": ["AI Development Tools", "Business & Productivity", "Data & Analytics"],
      "Video & Content Creation": ["Image & Design Tools", "Audio & Voice Tools", "Creative & Entertainment"],
      "Image & Design Tools": ["Video & Content Creation", "Creative & Entertainment", "3D & Animation"],
      "Writing & Content Creation": ["Marketing & Social Media", "Business & Productivity", "Communication & Collaboration"],
      "Audio & Voice Tools": ["Video & Content Creation", "Creative & Entertainment", "Communication & Collaboration"],
      "Business & Productivity": ["Marketing & Social Media", "Data & Analytics", "Automation & Workflows"],
      "Marketing & Social Media": ["Writing & Content Creation", "Business & Productivity", "Communication & Collaboration"],
      "Communication & Collaboration": ["Business & Productivity", "Marketing & Social Media", "Professional Services"],
      "Professional Services": ["Business & Productivity", "Legal & Compliance", "Communication & Collaboration"],
      "Education & Learning": ["Health & Wellness", "Professional Services", "Data & Analytics"],
      "Health & Wellness": ["Education & Learning", "Professional Services", "Spirituality & Wellness"],
      "Finance & Trading": ["Business & Productivity", "Data & Analytics", "Professional Services"],
      "Legal & Compliance": ["Professional Services", "Business & Productivity", "Finance & Trading"],
      "Creative & Entertainment": ["Image & Design Tools", "Video & Content Creation", "Game Design & Development"],
      "Game Design & Development": ["Creative & Entertainment", "3D & Animation", "Video & Content Creation"],
      "3D & Animation": ["Image & Design Tools", "Game Design & Development", "Creative & Entertainment"],
      "Data & Analytics": ["Business & Productivity", "AI Development Tools", "Automation & Workflows"],
      "Automation & Workflows": ["Business & Productivity", "Data & Analytics", "AI Development Tools"],
      "Cloud Services": ["Business & Productivity", "Data & Analytics", "AI Development Tools"],
      "Utilities & Productivity": ["Business & Productivity", "Automation & Workflows", "Communication & Collaboration"]
    };
    
    return categoryRelations[category] || ["Business & Productivity", "AI Development Tools", "Creative & Entertainment"];
  };

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
    if (!selectedCategory) return;

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
    <div className="container mx-auto px-4 py-16">
      {/* Category Selection Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          🎯 Choose Your AI Tool Category
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Select a category to explore an endless stream of AI tools tailored to your needs
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
        {sortedCategories.map(([category, count]) => {
          const categoryStyle = getCategoryStyle(category);
          const isSelected = category === selectedCategory;
          
          return (
            <Button
              key={category}
              onClick={() => handleCategorySelect(category)}
              variant="outline"
              className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 h-auto py-4 px-4 ${
                isSelected 
                  ? `${categoryStyle.colors.selected} text-white shadow-lg border-white/30 scale-105` 
                  : `${categoryStyle.colors.bg} ${categoryStyle.colors.border} text-gray-200 ${categoryStyle.colors.hover} hover:text-white hover:shadow-md`
              }`}
            >
              <div className="flex flex-col items-center space-y-2 w-full">
                <span className="text-2xl">{categoryStyle.emoji}</span>
                <span className="relative z-10 text-center leading-tight font-medium text-sm">{category}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs relative z-10 ${
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
      {selectedCategory && (
        <div id="tools-display" className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              🚀 {selectedCategory} Tools
            </h3>
            <p className="text-gray-400">
              Showing {displayedTools.length} of {availableTools.length} tools
              {availableTools.length > displayedTools.length && " - scroll for more!"}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedTools.map((tool, index) => (
              <ToolCard key={`${tool.title}-${index}`} tool={tool} />
            ))}
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="text-center mt-8 py-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                <span className="text-cyan-200 text-lg">Loading more {selectedCategory} tools...</span>
              </div>
            </div>
          )}

          {/* Completion Message */}
          {!isLoading && displayedCount >= availableTools.length && availableTools.length > 20 && (
            <div className="text-center mt-12 py-8 text-cyan-300">
              <div className="text-2xl mb-2">🎉</div>
              <div className="text-lg font-semibold mb-2">
                You've explored all {availableTools.length} tools in {selectedCategory}!
              </div>
              <div className="text-sm opacity-80">
                Try exploring other categories to discover more amazing AI tools.
              </div>
            </div>
          )}
        </div>
      )}

      {/* Initial Call to Action */}
      {!selectedCategory && (
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Ready to Explore AI Tools?
          </h3>
          <p className="text-gray-400 mb-4">
            Select any category above to start your journey through our endless collection of AI tools.
          </p>
          <p className="text-sm text-cyan-300">
            Each category includes related tools to ensure you discover the perfect solution for your needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPageSelection;
