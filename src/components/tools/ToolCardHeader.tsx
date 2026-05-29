
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tool } from "@/types/tools";
import StarRating from "./StarRating";
import { FavoritesButton } from "@/components/favorites/FavoritesButton";
import { allTools } from "@/data/toolsData";
import { Brain, Blocks, Smartphone, Monitor } from "lucide-react";
import ToolDisclaimerBadges from "@/components/disclaimers/ToolDisclaimerBadges";
import AutoScaleTitle from "@/components/ui/auto-scale-title";

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

  // Determine tool type for category badges
  const isWeb3Tool = tool.category === "WEB3 Domains" || tool.tags?.includes("WEB3") || tool.tags?.includes("Blockchain");
  const isAITool = !isWeb3Tool;

  return (
    <CardHeader className="text-center pb-4 flex-shrink-0 relative z-10">
      {/* Favorites Button - top left */}
      <div className="absolute top-2 left-2 z-30">
        <FavoritesButton tool={tool} size="sm" />
      </div>
      
      {/* FREE Badge for AI Web Tools original tools - top right */}
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
        <CardTitle 
          className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 group-hover:from-cyan-200 group-hover:via-yellow-200 group-hover:to-cyan-200 transition-all duration-300 tracking-wide uppercase break-words hyphens-auto min-h-[2.5rem]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            textShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.3)',
            letterSpacing: '0.05em',
            wordBreak: 'break-word'
          }}
        >
          <AutoScaleTitle title={tool.title} baseSize="lg" />
        </CardTitle>
        
        {/* Tool Type Badge */}
        <div className="flex justify-center flex-wrap gap-2">
          {isWeb3Tool ? (
            <>
              <Badge className="text-xs bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 flex items-center gap-1">
                <Blocks size={12} />
                WEB3 DOMAIN
              </Badge>
              {/* Blockchain Indicator */}
              {tool.blockchain && (
                <Badge className={`text-xs border-0 flex items-center gap-1 ${
                  tool.blockchain === 'Solana' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                    : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                }`}>
                  {tool.blockchain}
                </Badge>
              )}
            </>
          ) : isAITool && (
            <Badge className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 flex items-center gap-1">
              <Brain size={12} />
              AI TOOL
            </Badge>
          )}
        </div>

        {/* Platform Badge — always obvious for mobile vs desktop */}
        {tool.platform && (
          <div className="flex justify-center flex-wrap gap-2">
            {tool.platform === "mobile" ? (
              <Badge className="text-xs bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 flex items-center gap-1 shadow-lg shadow-emerald-500/20">
                <Smartphone size={12} />
                MOBILE APP
              </Badge>
            ) : tool.platform === "desktop" ? (
              <Badge className="text-xs bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 flex items-center gap-1 shadow-lg shadow-blue-500/20">
                <Monitor size={12} />
                DESKTOP APP
              </Badge>
            ) : (
              <Badge className="text-xs bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white border-0 flex items-center gap-1 shadow-lg shadow-violet-500/20">
                <Monitor size={12} />
                CROSS-PLATFORM
              </Badge>
            )}
            {/* Specific platform chips */}
            {tool.platforms && tool.platforms.length > 0 && (
              <Badge variant="outline" className="text-[10px] border-gray-500 text-gray-300 bg-gray-800/60 flex items-center gap-1">
                {tool.platforms.join(" · ")}
              </Badge>
            )}
          </div>
        )}

        {tool.category && (
          <Badge variant="outline" className={`text-xs ${isAIWebToolsOriginal ? 'border-cyan-300 text-cyan-200 bg-cyan-500/20' : 'border-cyan-400 text-cyan-300 bg-cyan-500/10'}`}>
            {tool.category}
          </Badge>
        )}
        
        {/* Disclaimer badges for spiritual/medical tools */}
        <ToolDisclaimerBadges tool={tool} size="sm" className="justify-center mt-1" />
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
