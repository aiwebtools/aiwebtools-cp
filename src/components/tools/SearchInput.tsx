
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
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        className="pl-10 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-ai-purple focus:ring-2 focus:ring-ai-purple/20 transition-all duration-200 shadow-lg"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default SearchInput;
