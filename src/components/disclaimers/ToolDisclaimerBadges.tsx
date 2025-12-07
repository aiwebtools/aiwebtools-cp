import { Tool } from "@/types/tools";
import { needsSpiritualDisclaimer, needsMedicalDisclaimer } from "@/utils/toolDisclaimerDetection";
import SpiritualDisclaimerBadge from "./SpiritualDisclaimerBadge";
import MedicalDisclaimerBadge from "./MedicalDisclaimerBadge";

interface ToolDisclaimerBadgesProps {
  tool: Tool;
  size?: "sm" | "md" | "lg";
  showFullText?: boolean;
  className?: string;
}

const ToolDisclaimerBadges = ({ 
  tool, 
  size = "sm",
  showFullText = false,
  className = ""
}: ToolDisclaimerBadgesProps) => {
  const showSpiritual = needsSpiritualDisclaimer(tool);
  const showMedical = needsMedicalDisclaimer(tool);

  if (!showSpiritual && !showMedical) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
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
