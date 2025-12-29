
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
  
  // 100% INSTANT typing - completely decoupled from search
  // Local state for instant paint, search updates via RAF
  const [localValue, setLocalValue] = useState(searchTerm);
  const rafRef = useRef<number | null>(null);
  const pendingValueRef = useRef<string | null>(null);

  // Sync external changes (clear, navigation, prediction accept)
  useEffect(() => {
    if (searchTerm !== localValue) {
      setLocalValue(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // LIGHTNING-FAST onChange - instant paint, immediate search trigger
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      
      // INSTANT paint - absolutely zero delay
      setLocalValue(next);
      
      // Cancel any pending update
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      
      // Trigger search IMMEDIATELY using queueMicrotask
      // This runs after React's batch update but before paint - fastest possible
      queueMicrotask(() => {
        onSearchChange(next);
      });
    },
    [onSearchChange]
  );

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

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

  // Calculate the ghost text (prediction minus what user typed)
  const ghostText =
    prediction && localValue && prediction.toLowerCase().startsWith(localValue.toLowerCase())
      ? prediction.slice(localValue.length)
      : null;

  // Instant focus when clicking anywhere on the container
  const handleContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Handle clear with instant local update
  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalValue("");
    onClear();
  }, [onClear]);

  return (
    <div className="relative rounded-lg border border-border cursor-text" onClick={handleContainerClick}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 pointer-events-none z-10" />

      {/* Ghost text prediction layer */}
      {ghostText && (
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <span className="pl-10 text-transparent">{localValue}</span>
          <span className="text-gray-500/60 font-normal">{ghostText}</span>
          <span className="ml-2 text-[10px] text-cyan-500/50 hidden sm:inline">Tab ↹</span>
        </div>
      )}

      <Input
        ref={inputRef}
        type="text"
        placeholder={`Search ${toolStats.marketing} AI tools...`}
        value={localValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="pl-10 pr-10 bg-black/60 border-0 text-white placeholder-gray-300 focus:ring-0 focus:outline-none rounded-lg backdrop-blur-sm focus:bg-black/80 relative z-[1] bg-transparent cursor-text"
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
