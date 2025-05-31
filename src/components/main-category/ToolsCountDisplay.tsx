
import { Tool } from "@/types/tools";

interface ToolsCountDisplayProps {
  showAllTools: boolean;
  searchTerm: string;
  allFilteredTools: Tool[];
  filteredTools: Tool[];
  allTools: Tool[];
}

const ToolsCountDisplay = ({ 
  showAllTools, 
  searchTerm, 
  allFilteredTools, 
  filteredTools, 
  allTools 
}: ToolsCountDisplayProps) => {
  return (
    <div className="text-center mb-8">
      <div className="text-cyan-400 font-semibold">
        {showAllTools 
          ? (searchTerm ? `${allFilteredTools.length} tools found` : `${allTools.length} total tools available`)
          : (searchTerm ? `${filteredTools.length} tools found` : `${filteredTools.length} tools available`)
        }
      </div>
    </div>
  );
};

export default ToolsCountDisplay;
