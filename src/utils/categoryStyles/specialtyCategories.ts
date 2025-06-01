
import { 
  BookOpen, Settings, Clock, Heart, Gamepad2, 
  Shield, Box, Cloud, Newspaper, Activity
} from "lucide-react";
import { CategoryStyle } from "./types";

export const specialtyCategories: Record<string, CategoryStyle> = {
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
  "Health, Wellness & Personal Lifestyle": {
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
