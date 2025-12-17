
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useCallback } from "react";

interface GlobalSearchInputProps {
  searchTerm: string;
  toolStats: { marketing: string };
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onClear: () => void;
}

const GlobalSearchInput = memo(({
  searchTerm,
  toolStats,
  onSearchChange,
  onKeyDown,
  onClear,
}: GlobalSearchInputProps) => {
  // Direct onChange handler for maximum speed
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  return (
    <div className="relative rounded-lg border border-border">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 pointer-events-none" />
      <Input
        type="text"
        placeholder={`Search ${toolStats.marketing} AI tools...`}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className="pl-10 pr-10 bg-black/60 border-0 text-white placeholder-gray-300 focus:ring-0 focus:outline-none rounded-lg backdrop-blur-sm focus:bg-black/80"
        autoComplete="off"
        spellCheck={false}
        inputMode="search"
        autoCapitalize="none"
        autoCorrect="off"
        data-testid="global-search-input"
        aria-label="Search AI tools"
        aria-describedby="search-help"
      />
      {/* Hidden helper text for screen readers */}
      <div id="search-help" className="sr-only">
        Use arrow keys to navigate results, Enter to open, Escape to close
      </div>
      {searchTerm && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-white/10"
          aria-label="Clear search"
        >
          <X className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
});

GlobalSearchInput.displayName = "GlobalSearchInput";
export default GlobalSearchInput;
