
import { Settings, Code, FileText, Image, Video, Headphones, Building, Zap, TrendingUp, MessageSquare, Search, BarChart3, GraduationCap, Factory, Gamepad2, Heart, Clock } from "lucide-react";
import { CategoryStyle } from "./types";

export type { CategoryStyle } from "./types";

export const categoryStyles: Record<string, CategoryStyle> = {
  // New consolidated categories
  "AI Development & Platforms": {
    emoji: "🔧",
    colors: {
      bg: "bg-gradient-to-r from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/40",
      hover: "hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-indigo-500/30 hover:border-purple-400",
      selected: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    icon: Code
  },
  "Writing & Text Generation": {
    emoji: "✍️",
    colors: {
      bg: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/40",
      hover: "hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400",
      selected: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    icon: FileText
  },
  "Image & Design Generation": {
    emoji: "🎨",
    colors: {
      bg: "bg-gradient-to-r from-pink-500/20 to-rose-500/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-rose-500/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-500 to-rose-600"
    },
    icon: Image
  },
  "Video & Animation Tools": {
    emoji: "🎬",
    colors: {
      bg: "bg-gradient-to-r from-red-500/20 to-orange-500/20",
      border: "border-red-500/40",
      hover: "hover:bg-gradient-to-r hover:from-red-500/30 hover:to-orange-500/30 hover:border-red-400",
      selected: "bg-gradient-to-r from-red-500 to-orange-600"
    },
    icon: Video
  },
  "Audio & Music Tools": {
    emoji: "🎵",
    colors: {
      bg: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
      border: "border-green-500/40",
      hover: "hover:bg-gradient-to-r hover:from-green-500/30 hover:to-emerald-500/30 hover:border-green-400",
      selected: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    icon: Headphones
  },
  "Business Operations & Productivity": {
    emoji: "💼",
    colors: {
      bg: "bg-gradient-to-r from-slate-500/20 to-gray-500/20",
      border: "border-slate-500/40",
      hover: "hover:bg-gradient-to-r hover:from-slate-500/30 hover:to-gray-500/30 hover:border-slate-400",
      selected: "bg-gradient-to-r from-slate-500 to-gray-600"
    },
    icon: Building
  },
  "Automation Platforms": {
    emoji: "⚡",
    colors: {
      bg: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/40",
      hover: "hover:bg-gradient-to-r hover:from-yellow-500/30 hover:to-amber-500/30 hover:border-yellow-400",
      selected: "bg-gradient-to-r from-yellow-500 to-amber-600"
    },
    icon: Zap
  },
  "Marketing & Sales Solutions": {
    emoji: "📈",
    colors: {
      bg: "bg-gradient-to-r from-teal-500/20 to-cyan-500/20",
      border: "border-teal-500/40",
      hover: "hover:bg-gradient-to-r hover:from-teal-500/30 hover:to-cyan-500/30 hover:border-teal-400",
      selected: "bg-gradient-to-r from-teal-500 to-cyan-600"
    },
    icon: TrendingUp
  },
  "Communication & Collaboration Tools": {
    emoji: "💬",
    colors: {
      bg: "bg-gradient-to-r from-violet-500/20 to-purple-500/20",
      border: "border-violet-500/40",
      hover: "hover:bg-gradient-to-r hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400",
      selected: "bg-gradient-to-r from-violet-500 to-purple-600"
    },
    icon: MessageSquare
  },
  "AI Assistants & Search": {
    emoji: "🔍",
    colors: {
      bg: "bg-gradient-to-r from-indigo-500/20 to-blue-500/20",
      border: "border-indigo-500/40",
      hover: "hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-blue-500/30 hover:border-indigo-400",
      selected: "bg-gradient-to-r from-indigo-500 to-blue-600"
    },
    icon: Search
  },
  "Data Science & Analytics": {
    emoji: "📊",
    colors: {
      bg: "bg-gradient-to-r from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/40",
      hover: "hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400",
      selected: "bg-gradient-to-r from-emerald-500 to-teal-600"
    },
    icon: BarChart3
  },
  "Education & Research Tools": {
    emoji: "🎓",
    colors: {
      bg: "bg-gradient-to-r from-sky-500/20 to-blue-500/20",
      border: "border-sky-500/40",
      hover: "hover:bg-gradient-to-r hover:from-sky-500/30 hover:to-blue-500/30 hover:border-sky-400",
      selected: "bg-gradient-to-r from-sky-500 to-blue-600"
    },
    icon: GraduationCap
  },
  "Industry-Specific Solutions": {
    emoji: "🏭",
    colors: {
      bg: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
      border: "border-orange-500/40",
      hover: "hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-500/30 hover:border-orange-400",
      selected: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    icon: Factory
  },
  "Creative & Entertainment (General & Gaming)": {
    emoji: "🎮",
    colors: {
      bg: "bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20",
      border: "border-fuchsia-500/40",
      hover: "hover:bg-gradient-to-r hover:from-fuchsia-500/30 hover:to-pink-500/30 hover:border-fuchsia-400",
      selected: "bg-gradient-to-r from-fuchsia-500 to-pink-600"
    },
    icon: Gamepad2
  },
  "Health, Wellness & Personal Lifestyle": {
    emoji: "💚",
    colors: {
      bg: "bg-gradient-to-r from-lime-500/20 to-green-500/20",
      border: "border-lime-500/40",
      hover: "hover:bg-gradient-to-r hover:from-lime-500/30 hover:to-green-500/30 hover:border-lime-400",
      selected: "bg-gradient-to-r from-lime-500 to-green-600"
    },
    icon: Heart
  },
  "Historical & Time-Based AI Tools": {
    emoji: "⏰",
    colors: {
      bg: "bg-gradient-to-r from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/40",
      hover: "hover:bg-gradient-to-r hover:from-amber-500/30 hover:to-orange-500/30 hover:border-amber-400",
      selected: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    icon: Clock
  }
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
