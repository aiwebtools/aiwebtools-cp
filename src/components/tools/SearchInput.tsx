
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { memo } from "react";

interface SearchInputProps {
  searchTerm: string;
  placeholder: string;
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onBlur: () => void;
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
  // Detect mobile for optimized handling
  const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
  
  return (
    <div className="relative search-glow-optimized rounded-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        className="pl-10 pr-4 py-4 text-lg rounded-xl border-0 bg-black/60 text-white placeholder-gray-300 focus:ring-0 focus:outline-none backdrop-blur-sm"
        autoComplete="off"
        spellCheck={false}
        // Ultra-optimized for mobile with immediate response
        style={{ 
          transition: isMobile ? 'none' : 'all 0.1s ease',
          willChange: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitTransform: 'translate3d(0,0,0)',
          WebkitBackfaceVisibility: 'hidden',
          // Mobile-specific optimizations
          WebkitTapHighlightColor: 'transparent',
          touchAction: isMobile ? 'manipulation' : 'auto',
          userSelect: 'text'
        }}
        // Add mobile-specific attributes
        {...(isMobile && {
          inputMode: 'search',
          autoCapitalize: 'none',
          autoCorrect: 'off'
        })}
      />
    </div>
  );
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
