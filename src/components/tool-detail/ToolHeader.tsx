
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { Tool } from "@/types/tools";
import StarRating from "@/components/tools/StarRating";
import { useNavigate } from "react-router-dom";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { isFreeTool } from "@/utils/freeToolDetection";

interface ToolHeaderProps {
  tool: Tool;
  defaultRating: number;
  defaultVotes: number;
  toolIndex?: number;
}

const ToolHeader = ({ tool, defaultRating, defaultVotes, toolIndex }: ToolHeaderProps) => {
  const navigate = useNavigate();

  const handleUseItNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('USE IT NOW button clicked in header for:', tool.title);
    console.log('Tool directUrl:', tool.directUrl);
    
    // Pass the tool title to the time portal effect
    createTimePortalEffect(tool.directUrl || '', tool.title);
  };

  const handleCategoryClick = () => {
    if (tool.category) {
      navigate(`/category/${encodeURIComponent(tool.category)}`);
    }
  };

  const handleSendFeedback = () => {
    const subject = encodeURIComponent(`Feedback for ${tool.title}`);
    const body = encodeURIComponent(`Hi,

I would like to provide feedback about ${tool.title}:

[Please describe your concerns, bugs, or suggestions here]

Thank you!`);
    
    const mailtoUrl = `mailto:contact@ai-webtools.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Check if this is a FREE custom GPT (lovable.app, chatgpt.com/g/, gemini.google.com/gem/, or tagged as custom GPT)
  const isFreeCustomGPT = isFreeTool(tool);
  
  // Check if this is an AI Web Tools LLC original tool (has lovable.app in the URL) for feedback button
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;

  return (
    <div className="text-center pb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 relative">
      {/* FREE Badge for custom GPTs */}
      {isFreeCustomGPT && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 animate-pulse">
            FREE
          </div>
        </div>
      )}
      
      <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-4xl shadow-lg shadow-cyan-500/30 glow-effect`}>
        {tool.emoji}
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
          {tool.title}
        </h1>
        {tool.category && (
          <Badge 
            variant="outline" 
            className="text-sm border-cyan-400 text-cyan-400 bg-cyan-400/10 px-4 py-2 glow-effect cursor-pointer hover:bg-cyan-400/20 hover:border-cyan-300 transition-all duration-200 transform hover:scale-105"
            onClick={handleCategoryClick}
          >
            {tool.category}
          </Badge>
        )}
        <div className="flex justify-center">
          <StarRating 
            rating={defaultRating} 
            totalVotes={defaultVotes}
            toolId={toolIndex !== undefined ? `tool-${toolIndex}` : undefined}
          />
        </div>
        <div className="pt-4 space-y-3 px-4">
          <Button 
            size="lg"
            onClick={handleUseItNow}
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 interactive-button glow-effect"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {tool.directUrl ? "USE IT NOW" : "COMING SOON"}
          </Button>
          
          {isAIWebToolsOriginal && (
            <div className="px-2 sm:px-0">
              <Button 
                size="lg"
                onClick={handleSendFeedback}
                variant="outline"
                className="w-full sm:w-auto border-yellow-500/50 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-400 px-2 sm:px-4 py-3 text-xs sm:text-sm rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-4 h-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="text-center leading-tight">
                  <span className="block sm:hidden">CREATOR</span>
                  <span className="block sm:hidden">FEEDBACK</span>
                  <span className="hidden sm:block">SEND CREATOR FEEDBACK</span>
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolHeader;
