
import { CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tool } from "@/types/tools";
import ToolCardMedia from "./ToolCardMedia";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { allTools } from "@/data/toolsData";

interface ToolCardContentProps {
  tool: Tool;
  toolIndex: number;
  isFeatured: boolean;
  buttonSize: string;
  isAIWebToolsOriginal: boolean;
  imageHeight: string;
  getDescription: () => string;
}

const ToolCardContent = ({ 
  tool, 
  toolIndex, 
  isFeatured, 
  buttonSize, 
  isAIWebToolsOriginal, 
  imageHeight, 
  getDescription 
}: ToolCardContentProps) => {
  
  const handleDirectAccess = (e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Direct access clicked for:', tool.title);
      // Pass the tool title to the time portal effect
      createTimePortalEffect(tool.directUrl, tool.title);
    }
  };

  // Find the correct index in allTools array
  const correctToolIndex = allTools.findIndex(t => 
    t.title === tool.title && 
    t.directUrl === tool.directUrl && 
    t.category === tool.category
  );

  // Use the correct index, fallback to provided index if not found
  const linkIndex = correctToolIndex !== -1 ? correctToolIndex : toolIndex;

  return (
    <CardContent className="text-center flex-grow flex flex-col relative z-10">
      <ToolCardMedia 
        tool={tool} 
        isFeatured={isFeatured} 
        imageHeight={imageHeight} 
      />
      
      <CardDescription className={`${isAIWebToolsOriginal ? 'text-cyan-100' : 'text-gray-300'} mb-4 leading-relaxed text-sm flex-grow`}>
        {getDescription()}
      </CardDescription>
      
      <div className="mt-auto space-y-2">
        {/* View Details Button - always links to tool page with correct index */}
        <Link to={`/tool/${linkIndex}`}>
          <Button 
            size={buttonSize as any}
            className={`w-full ${isAIWebToolsOriginal ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'} text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30`}
          >
            View Details
          </Button>
        </Link>
        
        {/* Direct Access Button - only show if tool has directUrl */}
        {tool.directUrl && (
          <Button 
            size={buttonSize as any}
            onClick={handleDirectAccess}
            variant="outline"
            className="w-full border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 USE IT NOW
          </Button>
        )}
      </div>
    </CardContent>
  );
};

export default ToolCardContent;
