
import { TooltipProvider } from "@/components/ui/tooltip";
import { useSearchBar } from "@/hooks/useSearchBar";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  preventAutoNavigation?: boolean;
}

const SearchBar = ({ searchTerm, onSearchChange, preventAutoNavigation = false }: SearchBarProps) => {
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
          placeholder={`Search ${toolStats.marketing} AI tools... Try: 'canva', 'notion', 'social media', 'video editing', 'whatsapp', 'spotify', 'github', 'figma'`}
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
};

export default SearchBar;
