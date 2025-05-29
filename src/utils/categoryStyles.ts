
import { 
  Palette, Zap, Video, PenTool, Headphones, Code, 
  BookOpen, Settings, Clock, Heart, Gamepad2, 
  Shield, Building, Brain, Sparkles, Eye,
  Box, BarChart3, Bot, Share2, Users, 
  Globe, Wrench, Cloud, Newspaper, Activity
} from "lucide-react";

export interface CategoryStyle {
  emoji: string;
  colors: {
    bg: string;
    border: string;
    hover: string;
    selected: string;
  };
  icon: any;
}

export const categoryStyles: Record<string, CategoryStyle> = {
  "Creative Suites": {
    emoji: "🎨",
    colors: {
      bg: "bg-gradient-to-r from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    icon: Palette
  },
  "Advanced AI Tools": {
    emoji: "🧠",
    colors: {
      bg: "bg-gradient-to-r from-purple-500/20 to-blue-500/20",
      border: "border-purple-500/40",
      hover: "hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-400",
      selected: "bg-gradient-to-r from-purple-500 to-blue-600"
    },
    icon: Brain
  },
  "Video & Content Creation": {
    emoji: "🎬",
    colors: {
      bg: "bg-gradient-to-r from-red-500/20 to-purple-500/20",
      border: "border-red-500/40",
      hover: "hover:bg-gradient-to-r hover:from-red-500/30 hover:to-purple-500/30 hover:border-red-400",
      selected: "bg-gradient-to-r from-red-500 to-purple-600"
    },
    icon: Video
  },
  "Image & Design Tools": {
    emoji: "🖼️",
    colors: {
      bg: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/40",
      hover: "hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400",
      selected: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    icon: Eye
  },
  "Writing & Content Creation": {
    emoji: "✍️",
    colors: {
      bg: "bg-gradient-to-r from-green-500/20 to-blue-500/20",
      border: "border-green-500/40",
      hover: "hover:bg-gradient-to-r hover:from-green-500/30 hover:to-blue-500/30 hover:border-green-400",
      selected: "bg-gradient-to-r from-green-500 to-blue-600"
    },
    icon: PenTool
  },
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
  "Audio & Voice Tools": {
    emoji: "🎵",
    colors: {
      bg: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/40",
      hover: "hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400",
      selected: "bg-gradient-to-r from-purple-500 to-pink-600"
    },
    icon: Headphones
  },
  "AI Development Tools": {
    emoji: "⚡",
    colors: {
      bg: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/40",
      hover: "hover:bg-gradient-to-r hover:from-yellow-500/30 hover:to-orange-500/30 hover:border-yellow-400",
      selected: "bg-gradient-to-r from-yellow-500 to-orange-600"
    },
    icon: Code
  },
  "Education & Learning": {
    emoji: "📚",
    colors: {
      bg: "bg-gradient-to-r from-teal-500/20 to-green-500/20",
      border: "border-teal-500/40",
      hover: "hover:bg-gradient-to-r hover:from-teal-500/30 hover:to-green-500/30 hover:border-teal-400",
      selected: "bg-gradient-to-r from-teal-500 to-green-600"
    },
    icon: BookOpen
  },
  "Specialized Tools": {
    emoji: "🔧",
    colors: {
      bg: "bg-gradient-to-r from-gray-500/20 to-blue-500/20",
      border: "border-gray-500/40",
      hover: "hover:bg-gradient-to-r hover:from-gray-500/30 hover:to-blue-500/30 hover:border-gray-400",
      selected: "bg-gradient-to-r from-gray-500 to-blue-600"
    },
    icon: Settings
  },
  "Time & History": {
    emoji: "⏰",
    colors: {
      bg: "bg-gradient-to-r from-amber-500/20 to-yellow-500/20",
      border: "border-amber-500/40",
      hover: "hover:bg-gradient-to-r hover:from-amber-500/30 hover:to-yellow-500/30 hover:border-amber-400",
      selected: "bg-gradient-to-r from-amber-500 to-yellow-600"
    },
    icon: Clock
  },
  "Spirituality & Wellness": {
    emoji: "🧘",
    colors: {
      bg: "bg-gradient-to-r from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-500/40",
      hover: "hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400",
      selected: "bg-gradient-to-r from-indigo-500 to-purple-600"
    },
    icon: Heart
  },
  "Game Design & Development": {
    emoji: "🎮",
    colors: {
      bg: "bg-gradient-to-r from-violet-500/20 to-purple-500/20",
      border: "border-violet-500/40",
      hover: "hover:bg-gradient-to-r hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-400",
      selected: "bg-gradient-to-r from-violet-500 to-purple-600"
    },
    icon: Gamepad2
  },
  "Emergency Services": {
    emoji: "🚨",
    colors: {
      bg: "bg-gradient-to-r from-red-500/20 to-orange-500/20",
      border: "border-red-500/40",
      hover: "hover:bg-gradient-to-r hover:from-red-500/30 hover:to-orange-500/30 hover:border-red-400",
      selected: "bg-gradient-to-r from-red-500 to-orange-600"
    },
    icon: Shield
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
  "Creative & Entertainment": {
    emoji: "🎭",
    colors: {
      bg: "bg-gradient-to-r from-pink-500/20 to-rose-500/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-rose-500/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-500 to-rose-600"
    },
    icon: Sparkles
  },
  "3D & Visualization": {
    emoji: "📦",
    colors: {
      bg: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/40",
      hover: "hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400",
      selected: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    icon: Box
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
  },
  "Automation & Workflows": {
    emoji: "🤖",
    colors: {
      bg: "bg-gradient-to-r from-violet-500/20 to-indigo-500/20",
      border: "border-violet-500/40",
      hover: "hover:bg-gradient-to-r hover:from-violet-500/30 hover:to-indigo-500/30 hover:border-violet-400",
      selected: "bg-gradient-to-r from-violet-500 to-indigo-600"
    },
    icon: Bot
  },
  // New categories
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
  "Creative & Design": {
    emoji: "🎨",
    colors: {
      bg: "bg-gradient-to-r from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    icon: Palette
  },
  "Cloud Services": {
    emoji: "☁️",
    colors: {
      bg: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20",
      border: "border-blue-500/40",
      hover: "hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-indigo-500/30 hover:border-blue-400",
      selected: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    icon: Cloud
  },
  "Information & Research": {
    emoji: "📰",
    colors: {
      bg: "bg-gradient-to-r from-gray-500/20 to-blue-500/20",
      border: "border-gray-500/40",
      hover: "hover:bg-gradient-to-r hover:from-gray-500/30 hover:to-blue-500/30 hover:border-gray-400",
      selected: "bg-gradient-to-r from-gray-500 to-blue-600"
    },
    icon: Newspaper
  },
  "Health & Wellness": {
    emoji: "💚",
    colors: {
      bg: "bg-gradient-to-r from-green-500/20 to-blue-500/20",
      border: "border-green-500/40",
      hover: "hover:bg-gradient-to-r hover:from-green-500/30 hover:to-blue-500/30 hover:border-green-400",
      selected: "bg-gradient-to-r from-green-500 to-blue-600"
    },
    icon: Activity
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
