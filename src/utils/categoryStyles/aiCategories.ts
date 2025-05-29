
import { 
  Brain, Code, Bot, Zap
} from "lucide-react";
import { CategoryStyle } from "./types";

export const aiCategories: Record<string, CategoryStyle> = {
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
  "Robotics Companies": {
    emoji: "🤖",
    colors: {
      bg: "bg-gradient-to-r from-indigo-500/20 to-cyan-500/20",
      border: "border-indigo-500/40",
      hover: "hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-cyan-500/30 hover:border-indigo-400",
      selected: "bg-gradient-to-r from-indigo-500 to-cyan-600"
    },
    icon: Bot
  }
};
