
export const getCategoryStyle = (category: string) => {
  const categoryStyles: Record<string, { emoji: string; colors: { bg: string; border: string; hover: string; selected: string } }> = {
    "Writing & Content": {
      emoji: "✍️",
      colors: {
        bg: "bg-blue-800/40",
        border: "border-blue-400/60",
        hover: "hover:bg-blue-500/20 hover:border-blue-400/80",
        selected: "bg-gradient-to-r from-blue-500 to-blue-600"
      }
    },
    "Image & Design": {
      emoji: "🎨",
      colors: {
        bg: "bg-purple-800/40",
        border: "border-purple-400/60",
        hover: "hover:bg-purple-500/20 hover:border-purple-400/80",
        selected: "bg-gradient-to-r from-purple-500 to-purple-600"
      }
    },
    "Video Tools": {
      emoji: "🎬",
      colors: {
        bg: "bg-red-800/40",
        border: "border-red-400/60",
        hover: "hover:bg-red-500/20 hover:border-red-400/80",
        selected: "bg-gradient-to-r from-red-500 to-red-600"
      }
    },
    "Audio & Music": {
      emoji: "🎵",
      colors: {
        bg: "bg-green-800/40",
        border: "border-green-400/60",
        hover: "hover:bg-green-500/20 hover:border-green-400/80",
        selected: "bg-gradient-to-r from-green-500 to-green-600"
      }
    },
    "Business & Productivity": {
      emoji: "💼",
      colors: {
        bg: "bg-orange-800/40",
        border: "border-orange-400/60",
        hover: "hover:bg-orange-500/20 hover:border-orange-400/80",
        selected: "bg-gradient-to-r from-orange-500 to-orange-600"
      }
    },
    "Education & Learning": {
      emoji: "📚",
      colors: {
        bg: "bg-indigo-800/40",
        border: "border-indigo-400/60",
        hover: "hover:bg-indigo-500/20 hover:border-indigo-400/80",
        selected: "bg-gradient-to-r from-indigo-500 to-indigo-600"
      }
    },
    "AI Development Tools": {
      emoji: "🤖",
      colors: {
        bg: "bg-teal-800/40",
        border: "border-teal-400/60",
        hover: "hover:bg-teal-500/20 hover:border-teal-400/80",
        selected: "bg-gradient-to-r from-teal-500 to-teal-600"
      }
    },
    "AI Chat Platforms": {
      emoji: "💬",
      colors: {
        bg: "bg-pink-800/40",
        border: "border-pink-400/60",
        hover: "hover:bg-pink-500/20 hover:border-pink-400/80",
        selected: "bg-gradient-to-r from-pink-500 to-pink-600"
      }
    },
    "Healthcare Professionals": {
      emoji: "🏥",
      colors: {
        bg: "bg-emerald-800/40",
        border: "border-emerald-400/60",
        hover: "hover:bg-emerald-500/20 hover:border-emerald-400/80",
        selected: "bg-gradient-to-r from-emerald-500 to-emerald-600"
      }
    },
    "Legal Professionals": {
      emoji: "⚖️",
      colors: {
        bg: "bg-amber-800/40",
        border: "border-amber-400/60",
        hover: "hover:bg-amber-500/20 hover:border-amber-400/80",
        selected: "bg-gradient-to-r from-amber-500 to-amber-600"
      }
    },
    "Creative & Entertainment": {
      emoji: "🎭",
      colors: {
        bg: "bg-rose-800/40",
        border: "border-rose-400/60",
        hover: "hover:bg-rose-500/20 hover:border-rose-400/80",
        selected: "bg-gradient-to-r from-rose-500 to-rose-600"
      }
    },
    "Research & Learning": {
      emoji: "🔬",
      colors: {
        bg: "bg-violet-800/40",
        border: "border-violet-400/60",
        hover: "hover:bg-violet-500/20 hover:border-violet-400/80",
        selected: "bg-gradient-to-r from-violet-500 to-violet-600"
      }
    },
    "AI Agents": {
      emoji: "🤵",
      colors: {
        bg: "bg-slate-800/40",
        border: "border-slate-400/60",
        hover: "hover:bg-slate-500/20 hover:border-slate-400/80",
        selected: "bg-gradient-to-r from-slate-500 to-slate-600"
      }
    },
    "Game Design & Development": {
      emoji: "🎮",
      colors: {
        bg: "bg-lime-800/40",
        border: "border-lime-400/60",
        hover: "hover:bg-lime-500/20 hover:border-lime-400/80",
        selected: "bg-gradient-to-r from-lime-500 to-lime-600"
      }
    },
    "Time & History": {
      emoji: "⏰",
      colors: {
        bg: "bg-yellow-800/40",
        border: "border-yellow-400/60",
        hover: "hover:bg-yellow-500/20 hover:border-yellow-400/80",
        selected: "bg-gradient-to-r from-yellow-500 to-yellow-600"
      }
    }
  };

  // Default style for categories not explicitly defined
  const defaultStyle = {
    emoji: "🔧",
    colors: {
      bg: "bg-gray-800/40",
      border: "border-gray-400/60",
      hover: "hover:bg-gray-500/20 hover:border-gray-400/80",
      selected: "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  };

  return categoryStyles[category] || defaultStyle;
};
