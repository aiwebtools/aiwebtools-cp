import React, { useState, useCallback } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterSearchBarProps {
  onFilterSearch: (searchTerm: string) => void;
  placeholder?: string;
}

const FilterSearchBar = ({ 
  onFilterSearch, 
  placeholder = "Filter by topic (e.g. book writer, movie script, play maker...)" 
}: FilterSearchBarProps) => {
  const [filterTerm, setFilterTerm] = useState("");

  const handleSearch = useCallback(() => {
    const trimmed = filterTerm.trim();
    if (trimmed) {
      console.log(`🔍 Filter search initiated: "${trimmed}"`);
      onFilterSearch(trimmed);
    }
  }, [filterTerm, onFilterSearch]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }, [handleSearch]);

  const handleClear = useCallback(() => {
    setFilterTerm("");
    onFilterSearch("");
  }, [onFilterSearch]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 px-4">
      <div className="text-center mb-3">
        <span className="text-sm font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-400/30">
          Filter Search
        </span>
      </div>
      
      <div className="relative">
        {/* Main search container */}
        <div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
          <div className="flex items-center">
            {/* Search icon */}
            <div className="pl-4 pr-2">
              <Search className="w-5 h-5 text-gray-400" />
            </div>

            {/* Input field */}
            <Input
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className={cn(
                "flex-1 border-0 bg-transparent text-white placeholder:text-gray-400",
                "focus:ring-0 focus:outline-none text-sm sm:text-base py-3 sm:py-4 px-2",
                "font-medium tracking-wide min-h-[44px]"
              )}
            />

            {/* Clear button (when there's text) */}
            {filterTerm && (
              <Button
                onClick={handleClear}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-700/50 mr-2 px-2"
              >
                ✕
              </Button>
            )}

            {/* Search button */}
            <Button
              onClick={handleSearch}
              disabled={!filterTerm.trim()}
              className={cn(
                "mr-3 px-4 py-2 rounded-xl transition-all duration-300",
                "bg-gradient-to-r from-purple-500 to-pink-500",
                "hover:from-purple-400 hover:to-pink-400 text-white font-semibold",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "shadow-lg hover:shadow-purple-500/25"
              )}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-2">
        <p className="text-xs text-gray-400">
          Search across all categories • Press Enter or click → to filter
        </p>
      </div>
    </div>
  );
};

export default FilterSearchBar;