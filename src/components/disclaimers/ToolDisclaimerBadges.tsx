import { Tool } from "@/types/tools";
import { needsSpiritualDisclaimer, needsMedicalDisclaimer } from "@/utils/toolDisclaimerDetection";
import SpiritualDisclaimerBadge from "./SpiritualDisclaimerBadge";
import MedicalDisclaimerBadge from "./MedicalDisclaimerBadge";
import UniversalInfoBadge from "./UniversalInfoBadge";

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

  // Map size to universal badge size
  const universalSize = size === "sm" ? "xs" : size === "md" ? "sm" : "md";

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {/* Universal info badge - always shown but very tiny */}
      {showUniversal && (
        <UniversalInfoBadge size={universalSize} />
      )}
      {showSpiritual && (
        <SpiritualDisclaimerBadge tool={tool} size={size} showFullText={showFullText} />
      )}
      {showMedical && (
        <MedicalDisclaimerBadge tool={tool} size={size} showFullText={showFullText} />
      )}
    </div>
  );
};

export default ToolDisclaimerBadges;
