
import React, { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDebounce } from "@/hooks/useDebounce";

interface CategoryFiltersProps {
  categoriesWithCounts: Array<{ name: string; count: number }>;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (searchTerm: string) => void;
  searchTerm: string;
}

const CategoryFilters = ({ 
  categoriesWithCounts, 
  selectedCategory, 
  onCategoryChange, 
  onSearchChange, 
  searchTerm 
}: CategoryFiltersProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  
  // Debounce the search to prevent excessive API calls/filtering
  const debouncedSearchTerm = useDebounce(localSearchTerm, 300);
  
  // Update parent when debounced term changes
  React.useEffect(() => {
    onSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchChange]);

  // Sync local state with prop changes
  React.useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setLocalSearchTerm("");
    onSearchChange("");
  }, [onSearchChange]);

  const handleCategoryClick = useCallback((categoryName: string) => {
    const newCategory = selectedCategory === categoryName ? null : categoryName;
    onCategoryChange(newCategory);
    setLocalSearchTerm("");
  }, [selectedCategory, onCategoryChange]);

  // Memoize filtered categories to prevent unnecessary re-renders
  const filteredCategories = useMemo(() => {
    if (!localSearchTerm.trim()) return categoriesWithCounts;
    
    const searchLower = localSearchTerm.toLowerCase();
    return categoriesWithCounts.filter(category =>
      category.name.toLowerCase().includes(searchLower)
    );
  }, [categoriesWithCounts, localSearchTerm]);

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search AI Web Tools GPTs..."
          value={localSearchTerm}
          onChange={handleSearchInputChange}
          className="pl-10 pr-10 bg-black/50 border-cyan-500/30 text-cyan-100 placeholder-cyan-400/70 focus:border-cyan-400 focus:ring-cyan-400/30 rounded-lg"
        />
        {localSearchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-cyan-400 hover:text-cyan-300"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      {!localSearchTerm && (
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => onCategoryChange(null)}
            className={`transition-all duration-200 ${
              selectedCategory === null
                ? "bg-cyan-500 text-white border-cyan-500"
                : "border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200"
            }`}
          >
            All Categories
            <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300">
              {categoriesWithCounts.reduce((sum, cat) => sum + cat.count, 0)}
            </Badge>
          </Button>

          {filteredCategories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => handleCategoryClick(category.name)}
              className={`transition-all duration-200 ${
                selectedCategory === category.name
                  ? "bg-cyan-500 text-white border-cyan-500"
                  : "border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-300">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(CategoryFilters);
