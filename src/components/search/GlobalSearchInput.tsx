
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useCallback, useEffect, useRef, useState } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const queuedSearchIdRef = useRef(0);

  // Keep visual typing fully local and instant
  const [localValue, setLocalValue] = useState(searchTerm);

  // Sync external changes (clear, navigation, prediction accept)
  useEffect(() => {
    if (searchTerm !== localValue) {
      setLocalValue(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // Zero-delay local paint, then hand off search work in a microtask
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      const requestId = ++queuedSearchIdRef.current;

      setLocalValue(next);

      queueMicrotask(() => {
        if (queuedSearchIdRef.current === requestId) {
          onSearchChange(next);
        }
      });
    },
    [onSearchChange]
  );

  // Handle Tab key to accept prediction
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab" && prediction && onAcceptPrediction) {
        e.preventDefault();
        setLocalValue(prediction);
        onAcceptPrediction();
        return;
      }
      onKeyDown(e);
    },
    [prediction, onAcceptPrediction, onKeyDown]
  );

  const ghostText =
    prediction && localValue && prediction.toLowerCase().startsWith(localValue.toLowerCase())
      ? prediction.slice(localValue.length)
      : null;

  const handleContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    queuedSearchIdRef.current += 1;
    setLocalValue("");
    onClear();
  }, [onClear]);

  return (
    <div className="relative rounded-lg border border-border cursor-text gpu-accelerated" onClick={handleContainerClick} style={{ transform: 'translateZ(0)', willChange: 'contents' }}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 pointer-events-none z-10" />

      {ghostText && (
        <div className="absolute inset-0 flex items-center pointer-events-none z-[2]">
          <span className="pl-10 text-transparent select-none">{localValue}</span>
          <span className="text-emerald-300/90 font-medium drop-shadow-[0_0_4px_rgba(16,185,129,0.45)]">
            {ghostText}
          </span>
          <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide text-emerald-200 bg-emerald-500/15 border border-emerald-400/30 hidden sm:inline">
            Tab ↹
          </span>
        </div>
      )}

      <Input
        ref={inputRef}
        type="text"
        placeholder={`Search ${toolStats.marketing} AI tools...`}
        value={localValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="pl-10 pr-10 bg-black/60 border-0 text-white placeholder-gray-300 focus:ring-0 focus:outline-none rounded-lg focus:bg-black/80 relative z-[1] bg-transparent cursor-text"
        style={{ transform: 'translateZ(0)' }}
        autoComplete="off"
        spellCheck={false}
        inputMode="search"
        autoCapitalize="none"
        autoCorrect="off"
        data-testid="global-search-input"
        aria-label="Search AI tools"
        aria-describedby="search-help"
      />

      <div id="search-help" className="sr-only">
        Use arrow keys to navigate results, Enter to open, Tab to accept suggestion, Escape to close
      </div>

      {localValue && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClear}
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
