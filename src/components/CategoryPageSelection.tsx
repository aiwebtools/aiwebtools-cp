
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";
import { allTools } from "@/data/toolsData";

const CategoryPageSelection = () => {
  const navigate = useNavigate();
  
  // Get main category counts using the EXACT same logic as MainCategoryFilter
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);

  const handleMainCategoryClick = (mainCategoryName: string) => {
    // Instant navigation with zero processing delays
    const encodedName = encodeURIComponent(mainCategoryName);
    navigate(`/main-category/${encodedName}`);
    
    // Ensure user lands at top of the page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  console.log('📊 CategoryPageSelection: Main category counts:', mainCategoryCounts);

  return (
    <section className="py-8 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
            🎯 AI Tool Categories
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Explore AI tools by category
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full" defaultValue="categories">
          <AccordionItem value="categories" className="border-gray-700/50">
            <AccordionTrigger className="text-white hover:text-cyan-400 hover:no-underline">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">Browse Categories ({mainCategories.filter(cat => {
                  const count = cat.name === "ALL AI TOOLS" ? allTools.length : (mainCategoryCounts[cat.name] || 0);
                  return count > 0 || cat.name === "ALL AI TOOLS";
                }).length} available)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                {mainCategories.map((mainCat) => {
                  const count = mainCat.name === "ALL AI TOOLS" ? allTools.length : (mainCategoryCounts[mainCat.name] || 0);
                  
                  if (count === 0 && mainCat.name !== "ALL AI TOOLS") return null;
                  
                  return (
                    <Button
                      key={mainCat.name}
                      onClick={() => handleMainCategoryClick(mainCat.name)}
                      variant="outline"
                      className={`group relative overflow-hidden transition-all duration-150 transform hover:scale-105 border h-auto py-4 px-3 min-w-0 ${
                        mainCat.name === "ALL AI TOOLS"
                          ? "bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-yellow-400/50 text-yellow-200 hover:from-yellow-600/40 hover:to-orange-600/40 hover:text-yellow-100 hover:shadow-xl hover:border-yellow-300/60"
                          : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/50 text-gray-200 hover:from-cyan-600/20 hover:to-blue-600/20 hover:text-white hover:shadow-lg hover:border-cyan-400/50"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2 w-full min-w-0">
                        <span className="text-xl flex-shrink-0">{mainCat.emoji}</span>
                        <span className="relative z-10 text-center leading-tight font-bold text-xs break-words hyphens-auto min-w-0 max-w-full">{mainCat.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs relative z-10 flex-shrink-0 ${
                            mainCat.name === "ALL AI TOOLS"
                              ? "bg-yellow-500/20 text-yellow-200 border-yellow-400/40 group-hover:bg-yellow-400/30 group-hover:text-yellow-100 group-hover:border-yellow-300/50"
                              : "bg-black/30 text-gray-300 border-gray-500/40 group-hover:bg-cyan-500/20 group-hover:text-white group-hover:border-cyan-400/30"
                          }`}
                        >
                          {count}
                        </Badge>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default CategoryPageSelection;
