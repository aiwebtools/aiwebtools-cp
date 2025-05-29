
import { Settings } from "lucide-react";
import { CategoryStyle } from "./types";
import { aiCategories } from "./aiCategories";
import { creativeCategories } from "./creativeCategories";
import { businessCategories } from "./businessCategories";
import { specialtyCategories } from "./specialtyCategories";

export { CategoryStyle } from "./types";

export const categoryStyles: Record<string, CategoryStyle> = {
  ...aiCategories,
  ...creativeCategories,
  ...businessCategories,
  ...specialtyCategories
};

// Default style for unknown categories
const defaultStyle: CategoryStyle = {
  emoji: "🔧",
  colors: {
    bg: "bg-gradient-to-r from-gray-500/20 to-slate-500/20",
    border: "border-gray-500/40",
    hover: "hover:bg-gradient-to-r hover:from-gray-500/30 hover:to-slate-500/30 hover:border-gray-400",
    selected: "bg-gradient-to-r from-gray-500 to-slate-600"
  },
  icon: Settings
};

export const getCategoryStyle = (category: string): CategoryStyle => {
  return categoryStyles[category] || defaultStyle;
};
