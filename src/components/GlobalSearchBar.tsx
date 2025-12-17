
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGlobalSearch } from "@/hooks/useGlobalSearch";
import GlobalSearchInput from "@/components/search/GlobalSearchInput";
import GlobalSearchResults from "@/components/search/GlobalSearchResults";

const GlobalSearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    isLoadingMore,
    toolStats,
    searchRef,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
  } = useGlobalSearch();

  return (
    <TooltipProvider>
      <div className="w-full flex justify-center">
        <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
        <GlobalSearchInput
          searchTerm={searchTerm}
          toolStats={toolStats}
          onSearchChange={setSearchTerm}
          onKeyDown={handleKeyDown}
          onClear={clearSearch}
        />

        {isOpen && searchResults.length > 0 && (
          <GlobalSearchResults
            searchResults={searchResults}
            displayedCount={displayedCount}
            isLoadingMore={isLoadingMore}
            onToolClick={handleToolClick}
            onDirectAccess={handleDirectAccess}
            onScroll={handleScroll}
          />
        )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default GlobalSearchBar;
