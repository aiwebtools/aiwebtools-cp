
import { Tool } from "@/types/tools";
import ToolsGrid from "@/components/tools/ToolsGrid";

interface ToolsSectionProps {
  currentTools: Tool[];
  currentDisplayedCount: number;
  decodedCategoryName: string;
  searchTerm: string;
  showAllTools: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}

const ToolsSection = ({
  currentTools,
  currentDisplayedCount,
  decodedCategoryName,
  searchTerm,
  showAllTools,
  isLoading,
  onLoadMore
}: ToolsSectionProps) => {
  if (currentTools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-cyan-100 mb-4">
          {searchTerm ? 'No search results' : 'No tools found'}
        </h3>
        <p className="text-gray-300 mb-8">
          {searchTerm 
            ? `No tools found for "${searchTerm}" in this category.`
            : 'We couldn\'t find any tools in this category at the moment.'
          }
        </p>
      </div>
    );
  }

  return (
    <div id={showAllTools ? "all-tools-section" : "category-tools-section"}>
      <ToolsGrid
        tools={currentTools}
        displayedCount={currentDisplayedCount}
        selectedCategory={showAllTools ? null : decodedCategoryName}
        searchTerm={searchTerm}
        onLoadMore={onLoadMore}
        hasInfiniteScroll={true}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ToolsSection;
