
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useCallback, useEffect, useRef, useState, useTransition } from "react";

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

  // IMPORTANT: Keep typing 100% instant by decoupling input value from heavy search renders.
  // The input uses local state; we update the global search term in a transition.
  const [localValue, setLocalValue] = useState(searchTerm);
  const [isPending, startTransition] = useTransition();

  // Sync external changes (clear, navigation, prediction accept) into the input.
  useEffect(() => {
    // Only sync when the external value differs. This avoids fighting the user's typing.
    if (searchTerm !== localValue) setLocalValue(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // Direct onChange handler for maximum speed
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setLocalValue(next); // paint immediately
      startTransition(() => onSearchChange(next)); // run search work in non-urgent lane
    },
    [onSearchChange, startTransition]
  );

  // Handle Tab key to accept prediction
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab" && prediction && onAcceptPrediction) {
        e.preventDefault();
        // Update the input instantly, then let the global handler update results.
        setLocalValue(prediction);
        startTransition(() => onAcceptPrediction());
        return;
      }
      onKeyDown(e);
    },
    [prediction, onAcceptPrediction, onKeyDown, startTransition]
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
          onClick={(e) => {
            e.stopPropagation();
            setLocalValue("");
            startTransition(() => onClear());
          }}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-white/10 z-10"
          aria-label="Clear search"
        >
          <X className="w-3 h-3" />
        </Button>
      )}

      {/* Optional: accessibility-friendly loading hint without impacting layout */}
      <div className="sr-only" aria-live="polite">
        {isPending ? "Searching" : ""}
      </div>
    </div>
  );
});

GlobalSearchInput.displayName = "GlobalSearchInput";
export default GlobalSearchInput;
