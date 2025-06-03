
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { memo, useCallback } from "react";

interface SearchInputProps {
  searchTerm: string;
  placeholder: string;
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
  onFocus: () => void;
}

const SearchInput = memo(({
  searchTerm,
  placeholder,
  onSearchChange,
  onKeyDown,
  onBlur,
  onFocus,
}: SearchInputProps) => {
  // Direct onChange handler for maximum speed - no debouncing
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  return (
    <div className="relative rounded-xl border border-gray-600">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        className="pl-10 pr-4 py-4 text-lg rounded-xl border-0 bg-black/60 text-white placeholder-gray-300 backdrop-blur-sm search-glow-optimized"
        autoComplete="off"
        spellCheck={false}
        inputMode="search"
        autoCapitalize="none"
        autoCorrect="off"
        data-testid="search-input"
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
    </div>
  );
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
