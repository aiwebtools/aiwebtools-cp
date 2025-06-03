
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
  // Direct onChange handler for maximum speed - no debouncing
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  return (
    <div className="relative rounded-lg border border-gray-600">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 pointer-events-none" />
      <Input
        type="text"
        placeholder={`Search ${toolStats.marketing} AI tools...`}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className="pl-10 pr-10 bg-black/60 border-0 text-white placeholder-gray-300 rounded-lg backdrop-blur-sm search-glow-optimized"
        autoComplete="off"
        spellCheck={false}
        inputMode="search"
        autoCapitalize="none"
        autoCorrect="off"
        data-testid="global-search-input"
        style={{
          // Force immediate rendering on iOS
          WebkitAppearance: 'none',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
          fontSize: '16px', // Prevent zoom on iOS
          transition: 'none',
          willChange: 'auto',
          contain: 'layout style paint'
        }}
      />
      {searchTerm && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-white/10"
          style={{
            transition: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <X className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
});

GlobalSearchInput.displayName = "GlobalSearchInput";
export default GlobalSearchInput;
