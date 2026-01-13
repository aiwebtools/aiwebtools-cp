import { Tool } from "@/types/tools";
import { 
  needsSpiritualDisclaimer, 
  needsMedicalDisclaimer,
  needsCompanionDisclaimer,
  needsDivinationDisclaimer
} from "@/utils/toolDisclaimerDetection";
import SpiritualDisclaimerBadge from "./SpiritualDisclaimerBadge";
import MedicalDisclaimerBadge from "./MedicalDisclaimerBadge";
import CompanionDisclaimerBadge from "./CompanionDisclaimerBadge";
import DivinationDisclaimerBadge from "./DivinationDisclaimerBadge";
import UniversalInfoBadge from "./UniversalInfoBadge";
import { isAIWebToolsGPT } from "@/utils/aiWebToolsPrioritization";

interface ToolDisclaimerBadgesProps {
  tool: Tool;
  size?: "sm" | "md" | "lg";
  showFullText?: boolean;
  className?: string;
  showUniversal?: boolean;
}

const ToolDisclaimerBadges = ({ 
  tool, 
  size = "sm",
  showFullText = false,
  className = "",
  showUniversal = true
}: ToolDisclaimerBadgesProps) => {
  const showSpiritual = needsSpiritualDisclaimer(tool);
  const showMedical = needsMedicalDisclaimer(tool);
  const showCompanion = needsCompanionDisclaimer(tool);
  const showDivination = needsDivinationDisclaimer(tool);
  const isOurTool = isAIWebToolsGPT(tool);

  // Map size to universal badge size
  const universalSize = size === "sm" ? "xs" : size === "md" ? "sm" : "md";

  // Only show badges if it's our tool or has specific disclaimers
  if (!isOurTool && !showSpiritual && !showMedical && !showCompanion && !showDivination) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {/* Universal info badge - only for our tools */}
      {showUniversal && isOurTool && (
        <UniversalInfoBadge size={universalSize} />
      )}
      {showSpiritual && (
        <SpiritualDisclaimerBadge tool={tool} size={size} showFullText={showFullText} />
      )}
      {showMedical && (
        <MedicalDisclaimerBadge tool={tool} size={size} showFullText={showFullText} />
      )}
      {showCompanion && (
        <CompanionDisclaimerBadge tool={tool} size={size} showFullText={showFullText} />
      )}
      {showDivination && (
        <DivinationDisclaimerBadge tool={tool} size={size} showFullText={showFullText} />
      )}
    </div>
  );
};

export default ToolDisclaimerBadges;
