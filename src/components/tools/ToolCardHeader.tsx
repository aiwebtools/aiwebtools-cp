
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import StarRating from "./StarRating";
import { allTools } from "@/data/toolsData";

interface ToolCardHeaderProps {
  tool: Tool;
  toolIndex: number;
  isFeatured: boolean;
  cardSize: string;
  titleSize: string;
  isAIWebToolsOriginal: boolean;
  boostedRating: number;
  defaultVotes: number;
}

const ToolCardHeader = ({ 
  tool, 
  toolIndex, 
  isFeatured, 
  cardSize, 
  titleSize, 
  isAIWebToolsOriginal, 
  boostedRating, 
  defaultVotes 
}: ToolCardHeaderProps) => {
  
  // Find the correct index in allTools array
  const correctToolIndex = allTools.findIndex(t => 
    t.title === tool.title && 
    t.directUrl === tool.directUrl && 
    t.category === tool.category
  );

  // Use the correct index, fallback to provided index if not found
  const linkIndex = correctToolIndex !== -1 ? correctToolIndex : toolIndex;

  return (
    <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
      {/* FREE Badge for AI Web Tools original tools */}
      {isAIWebToolsOriginal && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-bl-lg rounded-tr-xl text-xs font-bold shadow-lg transform animate-pulse">
            FREE
          </div>
        </div>
      )}
      
      <div className={`${cardSize} mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl ${isAIWebToolsOriginal ? 'ring-2 ring-cyan-400/50' : ''}`}>
        {tool.emoji}
      </div>
      <div className="space-y-2">
        <CardTitle className={`${titleSize} font-bold text-cyan-200 group-hover:text-cyan-100 transition-colors leading-tight drop-shadow-lg`}>
          {tool.title}
        </CardTitle>
        {tool.category && (
          <Badge variant="outline" className={`text-xs ${isAIWebToolsOriginal ? 'border-cyan-300 text-cyan-200 bg-cyan-500/20' : 'border-cyan-400 text-cyan-300 bg-cyan-500/10'}`}>
            {tool.category}
          </Badge>
        )}
        <div className="pt-2">
          <StarRating 
            rating={boostedRating} 
            totalVotes={defaultVotes} 
            showVoteCount={!isFeatured}
            toolId={`tool-${linkIndex}`}
          />
        </div>
      </div>
    </CardHeader>
  );
};

export default ToolCardHeader;
