
import { Tool } from "@/types/tools";
import ToolCard from "@/components/tools/ToolCard";
import LoadMoreButton from "@/components/tools/LoadMoreButton";

interface ToolsGridProps {
  tools: Tool[];
  displayedCount: number;
  selectedCategory: string | null;
  searchTerm: string;
  onLoadMore: () => void;
}

const ToolsGrid = ({ tools, displayedCount, selectedCategory, searchTerm, onLoadMore }: ToolsGridProps) => {
  const displayTools = tools.slice(0, displayedCount);

  const getSectionTitle = () => {
    if (selectedCategory) {
      return <>🎯 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">{selectedCategory}</span></>;
    }
    if (searchTerm) {
      return <>🔍 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Search Results</span></>;
    }
    return <>🚀 <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Complete AI Tools Collection</span></>;
  };

  if (displayTools.length === 0) return null;

  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-cyan-100 mb-8 cyber-glow">
          {getSectionTitle()}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayTools.map((tool, index) => (
          <ToolCard key={`${tool.title}-${index}`} tool={tool} />
        ))}
      </div>

      <LoadMoreButton 
        displayedCount={displayedCount}
        totalCount={tools.length}
        onLoadMore={onLoadMore}
      />
    </>
  );
};

export default ToolsGrid;
