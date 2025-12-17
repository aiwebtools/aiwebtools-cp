import { Info } from "lucide-react";

interface UniversalInfoBadgeProps {
  size?: "xs" | "sm" | "md";
  className?: string;
}

const UniversalInfoBadge = ({ size = "xs", className = "" }: UniversalInfoBadgeProps) => {
  const sizeClasses = {
    xs: "text-[7px] px-1.5 py-0.5 gap-1",
    sm: "text-[8px] px-2 py-0.5 gap-1",
    md: "text-[10px] px-2 py-1 gap-1.5"
  };

  const iconSizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3"
  };

  return (
    <span 
      className={`inline-flex items-center ${sizeClasses[size]} bg-black/40 text-white/60 rounded-full font-medium border border-white/10 backdrop-blur-sm ${className}`}
      title="For informational, educational & self-empowerment purposes only"
    >
      <Info className={`${iconSizes[size]} flex-shrink-0`} />
      <span className="whitespace-nowrap">Info • Education • Empowerment Only</span>
    </span>
  );
};

export default UniversalInfoBadge;
