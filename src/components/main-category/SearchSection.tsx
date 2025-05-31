
import SearchBar from "@/components/tools/SearchBar";

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchSection = ({ searchTerm, onSearchChange }: SearchSectionProps) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        🔍 Search All AI Tools
      </h3>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        preventAutoNavigation={true}
      />
    </div>
  );
};

export default SearchSection;
