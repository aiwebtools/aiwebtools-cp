
import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { allTools } from "@/data/toolsData";
import { getCachedCategoryCounts } from "@/utils/categoryUtils/precomputedCache";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";

// Pre-computed accurate counts using detection functions
let accurateCategoryCounts: Record<string, number> | null = null;
let countsInitialized = false;

const initializeAccurateCounts = () => {
  if (countsInitialized && accurateCategoryCounts) return accurateCategoryCounts;
  
  // Try pre-computed cache first (fastest)
  const cached = getCachedCategoryCounts();
  if (cached && Object.keys(cached).length > 0) {
    accurateCategoryCounts = cached;
    countsInitialized = true;
    return cached;
  }
  
  // Use the same detection functions as getToolsByMainCategory for accurate counts
  const counts = getMainCategoriesWithCounts(allTools);
  accurateCategoryCounts = counts;
  countsInitialized = true;
  return counts;
};

const getStaticCounts = () => {
  return initializeAccurateCounts();
};

const CategoryPageSelection = memo(() => {
  const navigate = useNavigate();
  
  // Use pre-computed counts - INSTANT, no heavy computation
  const mainCategoryCounts = useMemo(() => getStaticCounts(), []);

  const handleMainCategoryClick = (mainCategoryName: string) => {
    // INSTANT navigation - no delays
    const encodedName = encodeURIComponent(mainCategoryName);
    navigate(`/main-category/${encodedName}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent" style={{ textShadow: '0 0 30px rgba(0, 255, 0, 0.3)' }}>
          🎯 Choose Your AI Tool Category
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Select a category to explore an endless stream of AI tools tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {mainCategories.map((mainCat) => {
            // Use EXACT same logic: ALL AI TOOLS gets total count, others get from globalCounts
            const count = mainCat.name === "ALL AI TOOLS" ? allTools.length : (mainCategoryCounts[mainCat.name] || 0);
            
            if (count === 0 && mainCat.name !== "ALL AI TOOLS") return null;
            
            return (
              <Button
                key={mainCat.name}
                onClick={() => handleMainCategoryClick(mainCat.name)}
                variant="outline"
                className={`group relative overflow-hidden transition-all duration-150 transform hover:scale-105 border h-auto py-6 px-3 min-w-0 ${
                  mainCat.name === "ALL AI TOOLS"
                    ? "bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-yellow-400/50 text-yellow-200 hover:from-yellow-600/40 hover:to-orange-600/40 hover:text-yellow-100 hover:shadow-xl hover:border-yellow-300/60"
                    : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-green-600/30 text-gray-200 hover:from-green-600/20 hover:to-emerald-600/20 hover:text-white hover:shadow-lg hover:border-green-400/50"
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
                        : "bg-black/30 text-gray-300 border-green-500/40 group-hover:bg-green-500/20 group-hover:text-white group-hover:border-green-400/30"
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
});

CategoryPageSelection.displayName = "CategoryPageSelection";

export default CategoryPageSelection;