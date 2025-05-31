
interface ActiveFiltersProps {
  selectedCategory: string | null;
  searchTerm: string;
  totalTools: number;
}

const ActiveFilters = ({ selectedCategory, searchTerm, totalTools }: ActiveFiltersProps) => {
  if (!selectedCategory && !searchTerm) return null;

  return (
    <div className="mb-8 text-center">
      <div className="inline-flex items-center space-x-2 bg-black/80 border border-cyan-500/30 px-4 py-2 rounded-lg shadow-md">
        <span className="text-cyan-200">Showing:</span>
        {selectedCategory && (
          <span className="bg-cyan-600 text-black px-3 py-1 rounded-full text-sm font-bold">
            {selectedCategory}
          </span>
        )}
        {searchTerm && (
          <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold">
            "{searchTerm}"
          </span>
        )}
        <span className="text-cyan-200">({totalTools} tools)</span>
      </div>
      {/* Debug info for AI CHAT & ASSISTANTS */}
      {selectedCategory === "AI CHAT & ASSISTANTS" && (
        <div className="mt-2 text-xs text-gray-400">
          Debug: AI Web Tools GPTs should appear first in this category
        </div>
      )}
    </div>
  );
};

export default ActiveFilters;
