
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CategoryFiltersProps {
  categoriesWithCounts: Record<string, number>;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (term: string) => void;
  searchTerm: string;
}

const CategoryFilters = ({
  categoriesWithCounts,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
  searchTerm,
}: CategoryFiltersProps) => {
  return (
    <section className="py-12 bg-black/40 backdrop-blur-sm border-y border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-black/60 border-cyan-500/30 text-cyan-100 placeholder-cyan-400/60 focus:border-cyan-400 focus:ring-cyan-400/30"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => onCategoryChange(null)}
              className={`${
                selectedCategory === null
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
                  : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
              } transition-all duration-300`}
            >
              All Tools ({Object.values(categoriesWithCounts).reduce((a, b) => a + b, 0)})
            </Button>
            {Object.entries(categoriesWithCounts)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, count]) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => onCategoryChange(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
                      : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
                  } transition-all duration-300`}
                >
                  {category} ({count})
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilters;
