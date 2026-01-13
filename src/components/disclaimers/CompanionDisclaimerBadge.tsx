import { AlertTriangle, Heart, Users } from "lucide-react";
import { Tool } from "@/types/tools";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CompanionDisclaimerBadgeProps {
  tool: Tool;
  size?: "sm" | "md" | "lg";
  showFullText?: boolean;
}

const CompanionDisclaimerBadge = ({ 
  tool, 
  size = "sm",
  showFullText = false 
}: CompanionDisclaimerBadgeProps) => {
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
      bg-gradient-to-r from-rose-900/80 to-pink-900/80 
      border border-rose-500/50 
      rounded-full 
      backdrop-blur-sm
      ${sizeClasses[size]}
    `}>
      <Heart className={`${iconSize[size]} text-rose-400`} />
      <span className="text-rose-200 font-medium">
        {showFullText ? "Seek Real Human Connection" : "Real Love > AI"}
      </span>
      <Users className={`${iconSize[size]} text-pink-300`} />
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
          className="max-w-sm bg-gray-900/95 border-rose-500/50 text-gray-200 p-4"
        >
          <div className="space-y-3">
            <p className="font-semibold text-rose-300 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              Real Human Connection Matters
            </p>
            <p className="text-xs">
              AI companions can provide <span className="text-cyan-300">entertainment and practice</span>, 
              but they cannot replace the depth of <span className="text-rose-300 font-medium">genuine human relationships</span>.
            </p>
            <p className="text-xs text-yellow-200">
              💛 Seek real love, friendship, and community. You deserve authentic connection.
            </p>
            <p className="text-xs text-gray-400 italic">
              "The greatest gift is not found in an algorithm, but in the heart of another human being."
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CompanionDisclaimerBadge;
