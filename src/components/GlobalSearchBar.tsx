import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGlobalSearch } from "@/hooks/useGlobalSearch";
import GlobalSearchInput from "@/components/search/GlobalSearchInput";
import GlobalSearchResults from "@/components/search/GlobalSearchResults";
import FunnyQuotesRotator from "@/components/search/FunnyQuotesRotator";
import SearchDebugDashboard from "@/components/search/SearchDebugDashboard";


interface GlobalSearchBarProps {
  autoFocus?: boolean;
}

const GlobalSearchBar = ({ autoFocus = false }: GlobalSearchBarProps) => {
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

  // Warm the search worker as soon as the bar mounts (menu-open time) instead of
  // waiting for the first focus, so the first keystroke is never a cold start.
  useEffect(() => {
    prepareSearch();
  }, [prepareSearch]);

  return (
    <TooltipProvider>
      <div className="w-full flex justify-center">
        <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
          <GlobalSearchInput
            autoFocus={autoFocus}
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

          {isOpen && searchResults.length === 0 && searchTerm.trim().length > 0 && (
            <div className="absolute z-50 mt-2 w-full rounded-xl border border-emerald-500/30 bg-gray-950/95 backdrop-blur px-4 py-5 text-center shadow-xl">
              <p className="text-sm font-semibold text-emerald-300">
                No AI tools match "{searchTerm.trim()}"
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Try a different spelling, a shorter phrase, or a category name.
              </p>
            </div>
          )}


          <SearchDebugDashboard diagnostics={diagnostics} />

        </div>
      </div>
    </TooltipProvider>
  );
};

export default GlobalSearchBar;
