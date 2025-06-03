
import { TooltipProvider } from "@/components/ui/tooltip";
import { useSearchBar } from "@/hooks/useSearchBar";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { memo } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  preventAutoNavigation?: boolean;
}

const SearchBar = memo(({ searchTerm, onSearchChange, preventAutoNavigation = false }: SearchBarProps) => {
  const {
    isOpen,
    toolStats,
    searchResults,
    displayedResults,
    shouldShowResults,
    handleSearchChange,
    handleResultClick,
    handleKeyDown,
    handleInputBlur,
    handleInputFocus,
    handleScroll,
  } = useSearchBar({ searchTerm, onSearchChange });

  return (
    <TooltipProvider>
      <div className="max-w-2xl mx-auto relative">
        <SearchInput
          searchTerm={searchTerm}
          placeholder={`Search ${toolStats.marketing} AI tools... Try: 'chatgpt', 'midjourney', 'notion'`}
          onSearchChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />

        {isOpen && shouldShowResults && (
          <SearchResults
            searchResults={searchResults}
            displayedResults={displayedResults}
            displayedCount={displayedResults.length}
            onResultClick={handleResultClick}
            onScroll={handleScroll}
          />
        )}
      </div>
    </TooltipProvider>
  );
});

SearchBar.displayName = "SearchBar";
export default SearchBar;
