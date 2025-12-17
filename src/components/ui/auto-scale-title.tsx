import React, { useMemo } from "react";

interface AutoScaleTitleProps {
  title: string;
  className?: string;
  baseSize?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

/**
 * Auto-scaling title component that reduces font size for longer titles
 */
const AutoScaleTitle = ({ 
  title, 
  className = "", 
  baseSize = "md",
  style = {}
}: AutoScaleTitleProps) => {
  
  const { fontSize, lineHeight } = useMemo(() => {
    const len = title.length;
    
    // Base sizes for different card types
    const baseSizes = {
      sm: { short: "text-xs sm:text-sm", medium: "text-[11px] sm:text-xs", long: "text-[10px] sm:text-[11px]" },
      md: { short: "text-sm sm:text-base md:text-lg", medium: "text-xs sm:text-sm md:text-base", long: "text-[11px] sm:text-xs md:text-sm" },
      lg: { short: "text-base sm:text-lg lg:text-xl", medium: "text-sm sm:text-base lg:text-lg", long: "text-xs sm:text-sm lg:text-base" }
    };
    
    const sizes = baseSizes[baseSize];
    
    // Scale based on character count
    if (len <= 20) {
      return { fontSize: sizes.short, lineHeight: "leading-tight" };
    } else if (len <= 35) {
      return { fontSize: sizes.medium, lineHeight: "leading-tight" };
    } else {
      return { fontSize: sizes.long, lineHeight: "leading-snug" };
    }
  }, [title, baseSize]);

  return (
    <span 
      className={`${fontSize} ${lineHeight} ${className}`}
      style={style}
    >
      {title}
    </span>
  );
};

export default AutoScaleTitle;
