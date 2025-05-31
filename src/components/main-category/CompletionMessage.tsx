
import { Tool } from "@/types/tools";

interface CompletionMessageProps {
  showCompletionMessage: boolean;
  currentTools: Tool[];
  showAllTools: boolean;
  decodedCategoryName: string;
}

const CompletionMessage = ({
  showCompletionMessage,
  currentTools,
  showAllTools,
  decodedCategoryName
}: CompletionMessageProps) => {
  if (!showCompletionMessage) return null;

  return (
    <div className="text-center mt-12 mb-16 px-4 text-cyan-300">
      <div className="text-2xl mb-4">🎉</div>
      <div className="text-lg font-semibold mb-4">
        You've explored all {currentTools.length} tools{showAllTools ? ' in our database' : ` in ${decodedCategoryName}`}!
      </div>
      <div className="text-sm opacity-80 mb-8">
        {showAllTools 
          ? "Try searching or filtering by category to discover specific tools."
          : "Try exploring other categories to discover more tools."
        }
      </div>
    </div>
  );
};

export default CompletionMessage;
