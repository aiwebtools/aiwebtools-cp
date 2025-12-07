import { AlertTriangle, Heart } from "lucide-react";
import { Tool } from "@/types/tools";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MedicalDisclaimerBadgeProps {
  tool: Tool;
  size?: "sm" | "md" | "lg";
  showFullText?: boolean;
}

const MedicalDisclaimerBadge = ({ 
  tool, 
  size = "sm",
  showFullText = false 
}: MedicalDisclaimerBadgeProps) => {
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
      bg-gradient-to-r from-red-900/80 to-orange-900/80 
      border border-red-500/50 
      rounded-full 
      backdrop-blur-sm
      ${sizeClasses[size]}
    `}>
      <Heart className={`${iconSize[size]} text-red-400`} />
      <span className="text-red-200 font-medium">
        {showFullText ? "Not Medical Advice - Simulation Only" : "Not Medical Advice"}
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
          className="max-w-xs bg-gray-900/95 border-red-500/50 text-gray-200 p-3"
        >
          <div className="space-y-2">
            <p className="font-semibold text-red-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              Medical Disclaimer
            </p>
            <p className="text-xs">
              This tool is for <span className="text-cyan-300 font-medium">educational and informational purposes only</span>.
            </p>
            <p className="text-xs text-yellow-200">
              NOT a replacement for professional medical advice, diagnosis, or treatment. 
              Always consult a qualified healthcare provider.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default MedicalDisclaimerBadge;
