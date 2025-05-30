
import SearchBar from "@/components/tools/SearchBar";

interface ToolSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalTools: number;
}

const ToolSearch = ({ searchTerm, onSearchChange, totalTools }: ToolSearchProps) => {
  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cyber-glow">
          Discover More AI Tools
        </h3>
        <p className="text-gray-300 mb-6">Search through our collection of {totalTools}+ AI tools to find your next favorite</p>
      </div>
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />
    </div>
  );
};

export default ToolSearch;
