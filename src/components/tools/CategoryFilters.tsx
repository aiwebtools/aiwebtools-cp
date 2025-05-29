
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CategoryFiltersProps {
  categoriesWithCounts: Record<string, number>;
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
  onClearFilters: () => void;
  searchTerm: string;
}

const CategoryFilters = ({ 
  categoriesWithCounts, 
  selectedCategory, 
  onCategorySelect, 
  onClearFilters,
  searchTerm 
}: CategoryFiltersProps) => {
  return (
    <div className="mb-12 max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full bg-black/80 rounded-xl shadow-lg border border-cyan-500/30 neon-border">
        <AccordionItem value="categories" className="border-none">
          <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-cyan-100 hover:text-cyan-400">
            Browse Tools by Category ({Object.keys(categoriesWithCounts).length} Categories)
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(categoriesWithCounts).map(([category, count]) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`justify-between h-auto p-3 text-left ${
                    selectedCategory === category 
                      ? "bg-cyan-600 text-black border-cyan-400" 
                      : "border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black bg-black/50"
                  }`}
                  onClick={() => onCategorySelect(category)}
                >
                  <span className="text-sm font-medium">{category}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category 
                      ? "bg-black text-cyan-400" 
                      : "bg-cyan-600 text-black"
                  }`}>
                    {count}
                  </span>
                </Button>
              ))}
            </div>
            {(selectedCategory || searchTerm) && (
              <div className="mt-4 text-center">
                <Button onClick={onClearFilters} variant="outline" size="sm" className="border-cyan-500 text-cyan-100 hover:bg-cyan-600 hover:text-black">
                  Clear All Filters
                </Button>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryFilters;
