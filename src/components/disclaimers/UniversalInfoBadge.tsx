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
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-950/60 text-green-400 rounded-full font-medium border border-green-500/30 backdrop-blur-sm animate-pulse ${className}`}
      title="For informational, educational & self-empowerment purposes only"
      style={{
        textShadow: '0 0 8px rgba(34, 197, 94, 0.5)'
      }}
    >
      <Info className={`${iconSizes[size]} flex-shrink-0 text-green-400`} />
      <span className="whitespace-nowrap">Info • Education • Empowerment Only</span>
    </span>
  );
};

export default UniversalInfoBadge;
