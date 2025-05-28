
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  searchTerm: string;
  onClearSearch: () => void;
}

const NoResults = ({ searchTerm, onClearSearch }: NoResultsProps) => {
  return (
    <div className="text-center py-12">
      <div className="text-gray-500 text-xl mb-4">No AI tools found for "{searchTerm}"</div>
      <Button 
        onClick={onClearSearch}
        variant="outline" 
        className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white"
      >
        Clear Search
      </Button>
    </div>
  );
};

export default NoResults;
