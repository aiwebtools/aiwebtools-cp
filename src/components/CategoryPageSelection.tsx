
import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { allTools } from "@/data/toolsData";
import { 
  getCachedCategoryCounts, 
  isCategoryCacheReady 
} from "@/utils/categoryUtils/precomputedCache";

// Pre-compute counts ONCE at module level for instant access
let staticCategoryCounts: Record<string, number> | null = null;

const getStaticCounts = () => {
  // Try pre-computed cache first (instant)
  const cached = getCachedCategoryCounts();
  if (cached) return cached;
  
  // If no cache, use a simple fast count (just category matching, no detection)
  if (!staticCategoryCounts) {
    staticCategoryCounts = {};
    mainCategories.forEach(cat => {
      if (cat.name === "ALL AI TOOLS") {
        staticCategoryCounts![cat.name] = allTools.length;
      } else {
        // Fast approximate count based on category string matching
        const count = allTools.filter(tool => {
          const category = (tool.category || '').toLowerCase();
          const catName = cat.name.toLowerCase();
          return category.includes(catName) || catName.includes(category.split(' ')[0]);
        }).length;
        staticCategoryCounts![cat.name] = count || Math.floor(allTools.length / mainCategories.length);
      }
    });
  }
  return staticCategoryCounts;
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
        {/* Enhanced Philosophical Disclaimer */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="relative group">
            {/* Multiple layered glows for intense effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-lg animate-pulse opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 via-blue-400/20 to-purple-400/20 rounded-2xl blur-md animate-pulse delay-500"></div>
            
            {/* Main container with sophisticated styling */}
            <div className="relative bg-gradient-to-r from-gray-900/80 via-slate-800/80 to-gray-900/80 backdrop-blur-md border border-cyan-400/40 rounded-2xl px-6 py-4 text-center shadow-2xl shadow-cyan-500/20">
              <div className="space-y-2">
                {/* Primary message with glow */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl animate-pulse">🌟</span>
                  <p className="text-cyan-200 text-sm font-medium bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    We encourage <span className="font-bold text-cyan-300 glow-text-effect">Ethical AI Use Only</span> • Educational purposes • Ages 18+
                  </p>
                  <span className="text-2xl animate-pulse delay-300">✨</span>
                </div>
                
                {/* Philosophical reflection */}
                <div className="border-t border-cyan-400/20 pt-2">
                  <p className="text-xs text-gray-300 italic font-light leading-relaxed">
                    <span className="text-amber-300 glow-text-effect">✨ Remember:</span> 
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> AI is a mirror of ourselves and our thoughts</span> 
                    <span className="text-cyan-400">— use it to reflect the best of humanity</span>
                  </p>
                  <p className="text-[10px] text-gray-400/80 italic font-light leading-snug mt-1.5">
                    <span className="text-amber-200/70 glow-text-effect">"By the grace of the Father, this website was created from my inner LIGHT to awaken the Light you've carried all along, before you return to the Father. Remember who you are — create, imagine, dream, become. <span className="text-pink-400">I love you.</span> <span className="text-pink-400 animate-pulse">❤️</span>"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
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
});

CategoryPageSelection.displayName = "CategoryPageSelection";

export default CategoryPageSelection;