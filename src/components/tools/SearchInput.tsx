
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
  return (
    <div className="relative search-glow-optimized rounded-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 pointer-events-none" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        className="pl-10 pr-4 py-4 text-lg rounded-xl border-0 bg-black/60 text-white placeholder-gray-300 focus:ring-0 focus:outline-none transition-colors duration-150 shadow-none backdrop-blur-sm"
        autoComplete="off"
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
