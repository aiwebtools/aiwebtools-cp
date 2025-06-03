
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  searchTerm: string;
  placeholder: string;
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onBlur: () => void;
  onFocus: () => void;
}

const SearchInput = ({
  searchTerm,
  placeholder,
  onSearchChange,
  onKeyDown,
  onBlur,
  onFocus,
}: SearchInputProps) => {
  return (
    <div className="relative divine-glow-border rounded-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        className="pl-10 pr-4 py-4 text-lg rounded-xl border-0 bg-black/50 text-white placeholder-gray-300 focus:ring-0 focus:outline-none transition-all duration-300 shadow-none backdrop-blur-sm"
      />
    </div>
  );
};

export default SearchInput;
