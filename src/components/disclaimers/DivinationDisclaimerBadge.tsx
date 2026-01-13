import { AlertTriangle, Eye, Sparkles } from "lucide-react";
import { Tool } from "@/types/tools";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DivinationDisclaimerBadgeProps {
  tool: Tool;
  size?: "sm" | "md" | "lg";
  showFullText?: boolean;
}

const DivinationDisclaimerBadge = ({ 
  tool, 
  size = "sm",
  showFullText = false 
}: DivinationDisclaimerBadgeProps) => {
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
      bg-gradient-to-r from-amber-900/80 to-orange-900/80 
      border border-amber-500/50 
      rounded-full 
      backdrop-blur-sm
      ${sizeClasses[size]}
    `}>
      <Eye className={`${iconSize[size]} text-amber-400`} />
      <span className="text-amber-200 font-medium">
        {showFullText ? "Entertainment • Not Prophecy" : "Entertainment"}
      </span>
      <Sparkles className={`${iconSize[size]} text-orange-300`} />
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
          className="max-w-sm bg-gray-900/95 border-amber-500/50 text-gray-200 p-4"
        >
          <div className="space-y-3">
            <p className="font-semibold text-amber-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              Educational Entertainment Disclaimer
            </p>
            <p className="text-xs">
              This tool is for <span className="text-cyan-300 font-medium">entertainment and self-reflection</span> only. 
              It cannot predict the future or provide genuine spiritual insight.
            </p>
            <p className="text-xs text-amber-200">
              ⚡ True wisdom comes from within. Use this tool for fun and contemplation, 
              not life decisions.
            </p>
            <p className="text-xs text-gray-400 italic">
              "The future is not written—it is created by your choices."
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DivinationDisclaimerBadge;
