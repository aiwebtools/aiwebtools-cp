import { TooltipProvider } from "@/components/ui/tooltip";
import { useGlobalSearch } from "@/hooks/useGlobalSearch";
import GlobalSearchInput from "@/components/search/GlobalSearchInput";
import GlobalSearchResults from "@/components/search/GlobalSearchResults";
import FunnyQuotesRotator from "@/components/search/FunnyQuotesRotator";

const GlobalSearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    directMatchCount,
    displayedCount,
    isOpen,
    isLoadingMore,
    toolStats,
    searchRef,
    prediction,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
    acceptPrediction,
    prepareSearch,
    diagnostics,
  } = useGlobalSearch();


  return (
    <TooltipProvider>
      <div className="w-full flex justify-center">
        <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
          <GlobalSearchInput
            searchTerm={searchTerm}
            toolStats={toolStats}
            prediction={prediction}
            onSearchChange={setSearchTerm}
            onFocus={prepareSearch}
            onKeyDown={handleKeyDown}
            onClear={clearSearch}
            onAcceptPrediction={acceptPrediction}
          />

          {/* Funny rotating quotes under search bar */}
          {!isOpen && <FunnyQuotesRotator />}

          {isOpen && searchResults.length > 0 && (
            <GlobalSearchResults
              searchResults={searchResults}
              displayedCount={displayedCount}
              isLoadingMore={isLoadingMore}
              directMatchCount={directMatchCount}
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
