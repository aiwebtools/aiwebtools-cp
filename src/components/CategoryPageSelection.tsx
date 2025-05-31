
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils";
import { allTools } from "@/data/toolsData";

const CategoryPageSelection = () => {
  const navigate = useNavigate();
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  
  // Get main category counts
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);

  const handleMainCategoryClick = (mainCategoryName: string) => {
    // Navigate to main category page
    navigate(`/main-category/${encodeURIComponent(mainCategoryName)}`);
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
          🎯 Choose Your AI Tool Category
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Select a category to explore an endless stream of AI tools tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {mainCategories.map((mainCat) => {
            const count = mainCat.name === "ALL AI TOOLS" ? allTools.length : (mainCategoryCounts[mainCat.name] || 0);
            if (count === 0 && mainCat.name !== "ALL AI TOOLS") return null;
            
            return (
              <Button
                key={mainCat.name}
                onClick={() => handleMainCategoryClick(mainCat.name)}
                variant="outline"
                className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 border h-auto py-6 px-4 min-w-0 ${
                  mainCat.name === "ALL AI TOOLS"
                    ? "bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-yellow-400/50 text-yellow-200 hover:from-yellow-600/40 hover:to-orange-600/40 hover:text-yellow-100 hover:shadow-xl hover:border-yellow-300/60"
                    : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/50 text-gray-200 hover:from-cyan-600/20 hover:to-blue-600/20 hover:text-white hover:shadow-lg hover:border-cyan-400/50"
                }`}
              >
                <div className="flex flex-col items-center space-y-3 w-full min-w-0">
                  <span className="text-2xl flex-shrink-0">{mainCat.emoji}</span>
                  <span className="relative z-10 text-center leading-tight font-bold text-sm break-words hyphens-auto min-w-0 max-w-full">{mainCat.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs relative z-10 flex-shrink-0 ${
                      mainCat.name === "ALL AI TOOLS"
                        ? "bg-yellow-500/20 text-yellow-200 border-yellow-400/40 group-hover:bg-yellow-400/30 group-hover:text-yellow-100 group-hover:border-yellow-300/50"
                        : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-cyan-500/20 group-hover:text-white group-hover:border-cyan-400/30"
                    }`}
                  >
                    {count} tools
                  </Badge>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPageSelection;
