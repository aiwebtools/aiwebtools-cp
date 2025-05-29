
import { CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tool } from "@/types/tools";
import ToolCardMedia from "./ToolCardMedia";

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
      
      {/* Always link to individual tool page first, then external if available */}
      <Link to={`/tool/${toolIndex}`} className="mt-auto">
        <Button 
          size={buttonSize as any}
          className={`w-full ${isAIWebToolsOriginal ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'} text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30`}
        >
          View Details
        </Button>
      </Link>
    </CardContent>
  );
};

export default ToolCardContent;
