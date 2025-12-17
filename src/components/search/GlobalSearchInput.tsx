
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useCallback } from "react";

interface GlobalSearchInputProps {
  searchTerm: string;
  toolStats: { marketing: string };
  prediction?: string;
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onClear: () => void;
  onAcceptPrediction?: () => void;
}

const GlobalSearchInput = memo(({
  searchTerm,
  toolStats,
  prediction,
  onSearchChange,
  onKeyDown,
  onClear,
  onAcceptPrediction,
}: GlobalSearchInputProps) => {
  // Direct onChange handler for maximum speed
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  // Handle Tab key to accept prediction
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && prediction && onAcceptPrediction) {
      e.preventDefault();
      onAcceptPrediction();
      return;
    }
    onKeyDown(e);
  }, [prediction, onAcceptPrediction, onKeyDown]);

  // Calculate the ghost text (prediction minus what user typed)
  const ghostText = prediction && searchTerm && prediction.toLowerCase().startsWith(searchTerm.toLowerCase())
    ? prediction.slice(searchTerm.length)
    : null;

  return (
    <div className="relative rounded-lg border border-border">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 pointer-events-none z-10" />
      
      {/* Ghost text prediction layer */}
      {ghostText && (
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <span className="pl-10 text-transparent">{searchTerm}</span>
          <span className="text-gray-500/60 font-normal">{ghostText}</span>
          <span className="ml-2 text-[10px] text-cyan-500/50 hidden sm:inline">Tab ↹</span>
        </div>
      )}
      
      <Input
        type="text"
        placeholder={`Search ${toolStats.marketing} AI tools...`}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="pl-10 pr-10 bg-black/60 border-0 text-white placeholder-gray-300 focus:ring-0 focus:outline-none rounded-lg backdrop-blur-sm focus:bg-black/80 relative z-[1] bg-transparent"
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
        Use arrow keys to navigate results, Enter to open, Tab to accept suggestion, Escape to close
      </div>
      {searchTerm && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-white/10 z-10"
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
