
import { 
  Building, Share2, Users, Wrench, BarChart3
} from "lucide-react";
import { CategoryStyle } from "./types";

export const businessCategories: Record<string, CategoryStyle> = {
  "Business & Productivity": {
    emoji: "💼",
    colors: {
      bg: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
      border: "border-orange-500/40",
      hover: "hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-500/30 hover:border-orange-400",
      selected: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    icon: Building
  },
  "Professional Services": {
    emoji: "🏢",
    colors: {
      bg: "bg-gradient-to-r from-slate-500/20 to-gray-500/20",
      border: "border-slate-500/40",
      hover: "hover:bg-gradient-to-r hover:from-slate-500/30 hover:to-gray-500/30 hover:border-slate-400",
      selected: "bg-gradient-to-r from-slate-500 to-gray-600"
    },
    icon: Building
  },
  "Marketing & Social Media": {
    emoji: "📱",
    colors: {
      bg: "bg-gradient-to-r from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    icon: Share2
  },
  "Communication & Collaboration": {
    emoji: "💬",
    colors: {
      bg: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/40",
      hover: "hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400",
      selected: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    icon: Users
  },
  "Utilities & Productivity": {
    emoji: "🛠️",
    colors: {
      bg: "bg-gradient-to-r from-gray-500/20 to-blue-500/20",
      border: "border-gray-500/40",
      hover: "hover:bg-gradient-to-r hover:from-gray-500/30 hover:to-blue-500/30 hover:border-gray-400",
      selected: "bg-gradient-to-r from-gray-500 to-blue-600"
    },
    icon: Wrench
  },
  "Data & Analytics": {
    emoji: "📊",
    colors: {
      bg: "bg-gradient-to-r from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/40",
      hover: "hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400",
      selected: "bg-gradient-to-r from-emerald-500 to-teal-600"
    },
    icon: BarChart3
  }
};
