import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Filter, ChevronDown } from "lucide-react";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { getMainCategoriesWithCounts } from "@/utils/categoryUtils/toolFiltering";
import { allTools } from "@/data/toolsData";

const CategoryFiltersAccordion = () => {
  const navigate = useNavigate();
  
  const mainCategoryCounts = getMainCategoriesWithCounts(allTools);

  const handleMainCategoryClick = (mainCategoryName: string) => {
    const encodedName = encodeURIComponent(mainCategoryName);
    navigate(`/main-category/${encodedName}`);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-8 px-4 relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            🔍 Advanced Category Filters
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Need something specific? Browse by detailed categories
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
          <AccordionItem value="advanced-filters" className="border-0">
            <AccordionTrigger className="text-white hover:text-cyan-400 hover:no-underline px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
              <div className="flex items-center space-x-3">
                <Filter className="w-5 h-5 text-cyan-400" />
                <span className="text-lg font-semibold">Browse All Categories</span>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-200 border-cyan-400/30">
                  {mainCategories.filter(cat => {
                    const count = cat.name === "ALL AI TOOLS" ? allTools.length : (mainCategoryCounts[cat.name] || 0);
                    return count > 0 || cat.name === "ALL AI TOOLS";
                  }).length} available
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {mainCategories.map((mainCat) => {
                  const count = mainCat.name === "ALL AI TOOLS" ? allTools.length : (mainCategoryCounts[mainCat.name] || 0);
                  
                  if (count === 0 && mainCat.name !== "ALL AI TOOLS") return null;
                  
                  return (
                    <Button
                      key={mainCat.name}
                      onClick={() => handleMainCategoryClick(mainCat.name)}
                      variant="outline"
                      size="sm"
                      className={`group relative overflow-hidden transition-all duration-200 transform hover:scale-105 border h-auto py-3 px-3 min-w-0 ${
                        mainCat.name === "ALL AI TOOLS"
                          ? "bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-400/40 text-yellow-200 hover:from-yellow-600/30 hover:to-orange-600/30 hover:text-yellow-100 hover:shadow-lg hover:border-yellow-300/50"
                          : "bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-gray-600/40 text-gray-300 hover:from-cyan-600/20 hover:to-blue-600/20 hover:text-white hover:shadow-md hover:border-cyan-400/40"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-1.5 w-full min-w-0">
                        <span className="text-lg flex-shrink-0">{mainCat.emoji}</span>
                        <span className="relative z-10 text-center leading-tight font-medium text-xs break-words hyphens-auto min-w-0 max-w-full">{mainCat.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs relative z-10 flex-shrink-0 px-2 py-0.5 ${
                            mainCat.name === "ALL AI TOOLS"
                              ? "bg-yellow-500/20 text-yellow-200 border-yellow-400/30"
                              : "bg-gray-600/30 text-gray-300 border-gray-500/30"
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

export default CategoryFiltersAccordion;