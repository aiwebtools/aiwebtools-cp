
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search AI tools... (try 'science', 'education', 'video')"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-ai-purple focus:ring-2 focus:ring-ai-purple/20 transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;
