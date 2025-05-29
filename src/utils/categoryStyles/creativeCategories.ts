
import { 
  Palette, Video, PenTool, Eye, Headphones, Sparkles
} from "lucide-react";
import { CategoryStyle } from "./types";

export const creativeCategories: Record<string, CategoryStyle> = {
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
  "Creative & Design": {
    emoji: "🎨",
    colors: {
      bg: "bg-gradient-to-r from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/40",
      hover: "hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400",
      selected: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    icon: Palette
  }
};
