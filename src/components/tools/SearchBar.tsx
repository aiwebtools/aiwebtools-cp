import React from "react";
import GlobalSearchBar from "@/components/LazyGlobalSearchBar";
import { TooltipProvider } from "@/components/ui/tooltip";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  preventAutoNavigation?: boolean;
}

const SearchBar = ({ searchTerm, onSearchChange, preventAutoNavigation = false }: SearchBarProps) => {
  // Use the exact same GlobalSearchBar as the hero - maintaining complete consistency
  // The searchTerm and onSearchChange props are ignored since GlobalSearchBar manages its own state
  // This ensures 100% consistency with the hero search performance
  return (
    <TooltipProvider>
      <div className="w-full">
        <GlobalSearchBar />
      </div>
    </TooltipProvider>
  );
};

export default SearchBar;