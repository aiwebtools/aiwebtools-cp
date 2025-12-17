import { Info } from "lucide-react";

interface UniversalInfoBadgeProps {
  size?: "xs" | "sm" | "md";
  className?: string;
}

const UniversalInfoBadge = ({ size = "xs", className = "" }: UniversalInfoBadgeProps) => {
  const sizeClasses = {
    xs: "text-[8px] px-1 py-0.5 gap-0.5",
    sm: "text-[9px] px-1.5 py-0.5 gap-1",
    md: "text-xs px-2 py-1 gap-1"
  };

  const iconSizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3"
  };

  return (
    <span 
      className={`inline-flex items-center ${sizeClasses[size]} bg-muted/50 text-muted-foreground/70 rounded font-medium ${className}`}
      title="For informational, educational & self-empowerment purposes only"
    >
      <Info className={iconSizes[size]} />
      <span>Information purposes only</span>
    </span>
  );
};

export default UniversalInfoBadge;
