import { Info } from "lucide-react";

interface UniversalInfoBadgeProps {
  size?: "xs" | "sm" | "md";
  className?: string;
}

const UniversalInfoBadge = ({ size = "xs", className = "" }: UniversalInfoBadgeProps) => {
  const sizeClasses = {
    xs: "text-[6px] px-1 py-0.5 gap-0.5",
    sm: "text-[7px] px-1.5 py-0.5 gap-0.5",
    md: "text-[8px] px-2 py-0.5 gap-1"
  };

  const iconSizes = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5"
  };

  return (
    <span 
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-950/60 text-green-400 rounded-full font-medium border border-green-500/30 backdrop-blur-sm animate-pulse ${className}`}
      title="For informational, educational & self-empowerment purposes only"
      style={{
        textShadow: '0 0 6px rgba(34, 197, 94, 0.4)'
      }}
    >
      <Info className={`${iconSizes[size]} flex-shrink-0 text-green-400`} />
      <span className="whitespace-nowrap">Info • Education • Empowerment Only</span>
    </span>
  );
};

export default UniversalInfoBadge;
