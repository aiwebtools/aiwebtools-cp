
import { Settings, Code, FileText, Image, Video, Headphones, Building, Zap, TrendingUp, MessageSquare, Search, BarChart3, GraduationCap, Factory, Gamepad2, Heart, Clock, Briefcase, Globe } from "lucide-react";
import { CategoryStyle } from "./types";

export type { CategoryStyle } from "./types";

export const categoryStyles: Record<string, CategoryStyle> = {
  // AI Development & Platforms - Purple/Indigo
  "AI Development & Platforms": {
    emoji: "🔧",
    colors: {
      bg: "bg-gradient-to-r from-purple-600/20 to-indigo-600/20",
      border: "border-purple-500/40",
      hover: "hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:border-purple-400",
      selected: "bg-gradient-to-r from-purple-600 to-indigo-700"
    },
    icon: Code
  },

  // Writing & Text Generation - Blue/Cyan
  "Writing & Text Generation": {
    emoji: "✍️",
    colors: {
      bg: "bg-gradient-to-r from-blue-600/20 to-cyan-600/20",
      border: "border-blue-500/40",
      hover: "hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-cyan-600/30 hover:border-blue-400",
      selected: "bg-gradient-to-r from-blue-600 to-cyan-700"
    },
    icon: FileText
  },

  // Image & Design Generation - Pink/Rose
  "Image & Design Generation": {
    emoji: "🎨",
    colors: {
      bg: "bg-gradient-to-r from-pink-600/20 to-rose-600/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-600/30 hover:to-rose-600/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-600 to-rose-700"
    },
    icon: Image
  },

  // Video & Animation Tools - Red/Orange
  "Video & Animation Tools": {
    emoji: "🎬",
    colors: {
      bg: "bg-gradient-to-r from-red-600/20 to-orange-600/20",
      border: "border-red-500/40",
      hover: "hover:bg-gradient-to-r hover:from-red-600/30 hover:to-orange-600/30 hover:border-red-400",
      selected: "bg-gradient-to-r from-red-600 to-orange-700"
    },
    icon: Video
  },

  // Audio & Music Tools - Green/Emerald
  "Audio & Music Tools": {
    emoji: "🎵",
    colors: {
      bg: "bg-gradient-to-r from-green-600/20 to-emerald-600/20",
      border: "border-green-500/40",
      hover: "hover:bg-gradient-to-r hover:from-green-600/30 hover:to-emerald-600/30 hover:border-green-400",
      selected: "bg-gradient-to-r from-green-600 to-emerald-700"
    },
    icon: Headphones
  },

  // Sound Effects & SFX - Cyan/Teal
  "SOUND EFFECTS & SFX": {
    emoji: "🔊",
    colors: {
      bg: "bg-gradient-to-r from-cyan-600/20 to-teal-600/20",
      border: "border-cyan-500/40",
      hover: "hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-teal-600/30 hover:border-cyan-400",
      selected: "bg-gradient-to-r from-cyan-600 to-teal-700"
    },
    icon: Headphones
  },

  // Business Operations & Productivity - Slate/Gray
  "Business Operations & Productivity": {
    emoji: "💼",
    colors: {
      bg: "bg-gradient-to-r from-slate-600/20 to-gray-600/20",
      border: "border-slate-500/40",
      hover: "hover:bg-gradient-to-r hover:from-slate-600/30 hover:to-gray-600/30 hover:border-slate-400",
      selected: "bg-gradient-to-r from-slate-600 to-gray-700"
    },
    icon: Building
  },

  // Automation Platforms - Yellow/Amber
  "Automation Platforms": {
    emoji: "⚡",
    colors: {
      bg: "bg-gradient-to-r from-yellow-600/20 to-amber-600/20",
      border: "border-yellow-500/40",
      hover: "hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-amber-600/30 hover:border-yellow-400",
      selected: "bg-gradient-to-r from-yellow-600 to-amber-700"
    },
    icon: Zap
  },

  // Marketing & Sales Solutions - Teal/Cyan
  "Marketing & Sales Solutions": {
    emoji: "📈",
    colors: {
      bg: "bg-gradient-to-r from-teal-600/20 to-cyan-600/20",
      border: "border-teal-500/40",
      hover: "hover:bg-gradient-to-r hover:from-teal-600/30 hover:to-cyan-600/30 hover:border-teal-400",
      selected: "bg-gradient-to-r from-teal-600 to-cyan-700"
    },
    icon: TrendingUp
  },

  // Communication & Collaboration Tools - Violet/Purple
  "Communication & Collaboration Tools": {
    emoji: "💬",
    colors: {
      bg: "bg-gradient-to-r from-violet-600/20 to-purple-600/20",
      border: "border-violet-500/40",
      hover: "hover:bg-gradient-to-r hover:from-violet-600/30 hover:to-purple-600/30 hover:border-violet-400",
      selected: "bg-gradient-to-r from-violet-600 to-purple-700"
    },
    icon: MessageSquare
  },

  // AI Assistants & Search - Indigo/Blue
  "AI Assistants & Search": {
    emoji: "🔍",
    colors: {
      bg: "bg-gradient-to-r from-indigo-600/20 to-blue-600/20",
      border: "border-indigo-500/40",
      hover: "hover:bg-gradient-to-r hover:from-indigo-600/30 hover:to-blue-600/30 hover:border-indigo-400",
      selected: "bg-gradient-to-r from-indigo-600 to-blue-700"
    },
    icon: Search
  },

  // Data Science & Analytics - Emerald/Teal
  "Data Science & Analytics": {
    emoji: "📊",
    colors: {
      bg: "bg-gradient-to-r from-emerald-600/20 to-teal-600/20",
      border: "border-emerald-500/40",
      hover: "hover:bg-gradient-to-r hover:from-emerald-600/30 hover:to-teal-600/30 hover:border-emerald-400",
      selected: "bg-gradient-to-r from-emerald-600 to-teal-700"
    },
    icon: BarChart3
  },

  // Education & Research Tools - Sky/Blue
  "Education & Research Tools": {
    emoji: "🎓",
    colors: {
      bg: "bg-gradient-to-r from-sky-600/20 to-blue-600/20",
      border: "border-sky-500/40",
      hover: "hover:bg-gradient-to-r hover:from-sky-600/30 hover:to-blue-600/30 hover:border-sky-400",
      selected: "bg-gradient-to-r from-sky-600 to-blue-700"
    },
    icon: GraduationCap
  },

  // Industry-Specific Solutions - Orange/Red
  "Industry-Specific Solutions": {
    emoji: "🏭",
    colors: {
      bg: "bg-gradient-to-r from-orange-600/20 to-red-600/20",
      border: "border-orange-500/40",
      hover: "hover:bg-gradient-to-r hover:from-orange-600/30 hover:to-red-600/30 hover:border-orange-400",
      selected: "bg-gradient-to-r from-orange-600 to-red-700"
    },
    icon: Factory
  },

  // Creative & Entertainment (General & Gaming) - Fuchsia/Pink
  "Creative & Entertainment (General & Gaming)": {
    emoji: "🎮",
    colors: {
      bg: "bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20",
      border: "border-fuchsia-500/40",
      hover: "hover:bg-gradient-to-r hover:from-fuchsia-600/30 hover:to-pink-600/30 hover:border-fuchsia-400",
      selected: "bg-gradient-to-r from-fuchsia-600 to-pink-700"
    },
    icon: Gamepad2
  },

  // Health, Wellness & Personal Lifestyle - Lime/Green
  "Health, Wellness & Personal Lifestyle": {
    emoji: "💚",
    colors: {
      bg: "bg-gradient-to-r from-lime-600/20 to-green-600/20",
      border: "border-lime-500/40",
      hover: "hover:bg-gradient-to-r hover:from-lime-600/30 hover:to-green-600/30 hover:border-lime-400",
      selected: "bg-gradient-to-r from-lime-600 to-green-700"
    },
    icon: Heart
  },

  // Historical & Time-Based AI Tools - Amber/Orange
  "Historical & Time-Based AI Tools": {
    emoji: "⏰",
    colors: {
      bg: "bg-gradient-to-r from-amber-600/20 to-orange-600/20",
      border: "border-amber-500/40",
      hover: "hover:bg-gradient-to-r hover:from-amber-600/30 hover:to-orange-600/30 hover:border-amber-400",
      selected: "bg-gradient-to-r from-amber-600 to-orange-700"
    },
    icon: Clock
  },

  // WEB3 & Blockchain - Cyan/Blue futuristic
  "WEB3 & BLOCKCHAIN": {
    emoji: "🌐",
    colors: {
      bg: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/40",
      hover: "hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400",
      selected: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    icon: Globe
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
