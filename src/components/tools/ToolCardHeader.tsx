
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import StarRating from "./StarRating";

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
  return (
    <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
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
            toolId={`tool-${toolIndex}`}
          />
        </div>
      </div>
    </CardHeader>
  );
};

export default ToolCardHeader;
