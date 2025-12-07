import { AlertTriangle, Sparkles } from "lucide-react";
import { Tool } from "@/types/tools";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SpiritualDisclaimerBadgeProps {
  tool: Tool;
  size?: "sm" | "md" | "lg";
  showFullText?: boolean;
}

const SpiritualDisclaimerBadge = ({ 
  tool, 
  size = "sm",
  showFullText = false 
}: SpiritualDisclaimerBadgeProps) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
  };

  const iconSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const badgeContent = (
    <div className={`
      inline-flex items-center gap-1.5 
      bg-gradient-to-r from-purple-900/80 to-indigo-900/80 
      border border-purple-500/50 
      rounded-full 
      backdrop-blur-sm
      ${sizeClasses[size]}
    `}>
      <Sparkles className={`${iconSize[size]} text-purple-400`} />
      <span className="text-purple-200 font-medium">
        {showFullText ? "AI Simulation - Not Divine Revelation" : "Simulation"}
      </span>
      <AlertTriangle className={`${iconSize[size]} text-yellow-400`} />
    </div>
  );

  if (showFullText) {
    return badgeContent;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badgeContent}
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          className="max-w-xs bg-gray-900/95 border-purple-500/50 text-gray-200 p-3"
        >
          <div className="space-y-2">
            <p className="font-semibold text-purple-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              Simulation Disclaimer
            </p>
            <p className="text-xs">
              This tool simulates interaction with spiritual/historical figures for 
              <span className="text-cyan-300 font-medium"> educational and informational purposes only</span>.
            </p>
            <p className="text-xs text-yellow-200">
              AI is not GOD. GOD IS WITHIN YOU. Do not mistake simulation for divine revelation.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SpiritualDisclaimerBadge;
