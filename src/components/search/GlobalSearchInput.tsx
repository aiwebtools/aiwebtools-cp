
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface GlobalSearchInputProps {
  searchTerm: string;
  toolStats: { marketing: string };
  onSearchChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onClear: () => void;
}

const GlobalSearchInput = ({
  searchTerm,
  toolStats,
  onSearchChange,
  onKeyDown,
  onClear,
}: GlobalSearchInputProps) => {
  return (
    <div className="relative divine-glow-border rounded-lg">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 z-10" />
      <Input
        type="text"
        placeholder={`Search ${toolStats.marketing} AI tools...`}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="pl-10 pr-10 bg-black/50 border-0 text-white placeholder-gray-300 focus:ring-0 focus:outline-none rounded-lg shadow-none backdrop-blur-sm"
      />
      {searchTerm && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-300 hover:text-white hover:bg-white/10 z-10"
        >
          <X className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
};

export default GlobalSearchInput;
