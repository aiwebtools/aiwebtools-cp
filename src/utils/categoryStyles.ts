
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
    },
    // Adding missing categories from the image
    "AI Art": {
      emoji: "🖼️",
      colors: {
        bg: "bg-fuchsia-800/40",
        border: "border-fuchsia-400/60",
        hover: "hover:bg-fuchsia-500/20 hover:border-fuchsia-400/80",
        selected: "bg-gradient-to-r from-fuchsia-500 to-fuchsia-600"
      }
    },
    "AI Assistants": {
      emoji: "🤖",
      colors: {
        bg: "bg-cyan-800/40",
        border: "border-cyan-400/60",
        hover: "hover:bg-cyan-500/20 hover:border-cyan-400/80",
        selected: "bg-gradient-to-r from-cyan-500 to-cyan-600"
      }
    },
    "AI Development": {
      emoji: "⚙️",
      colors: {
        bg: "bg-sky-800/40",
        border: "border-sky-400/60",
        hover: "hover:bg-sky-500/20 hover:border-sky-400/80",
        selected: "bg-gradient-to-r from-sky-500 to-sky-600"
      }
    },
    "AI Infrastructure": {
      emoji: "🏗️",
      colors: {
        bg: "bg-stone-800/40",
        border: "border-stone-400/60",
        hover: "hover:bg-stone-500/20 hover:border-stone-400/80",
        selected: "bg-gradient-to-r from-stone-500 to-stone-600"
      }
    },
    "AI Inference Platforms": {
      emoji: "🧠",
      colors: {
        bg: "bg-zinc-800/40",
        border: "border-zinc-400/60",
        hover: "hover:bg-zinc-500/20 hover:border-zinc-400/80",
        selected: "bg-gradient-to-r from-zinc-500 to-zinc-600"
      }
    },
    "AI Productivity Tools": {
      emoji: "⚡",
      colors: {
        bg: "bg-yellow-700/40",
        border: "border-yellow-300/60",
        hover: "hover:bg-yellow-500/20 hover:border-yellow-300/80",
        selected: "bg-gradient-to-r from-yellow-400 to-yellow-500"
      }
    },
    "AI Tools": {
      emoji: "🛠️",
      colors: {
        bg: "bg-neutral-800/40",
        border: "border-neutral-400/60",
        hover: "hover:bg-neutral-500/20 hover:border-neutral-400/80",
        selected: "bg-gradient-to-r from-neutral-500 to-neutral-600"
      }
    },
    "AI Tools & Development": {
      emoji: "🔧",
      colors: {
        bg: "bg-red-700/40",
        border: "border-red-300/60",
        hover: "hover:bg-red-500/20 hover:border-red-300/80",
        selected: "bg-gradient-to-r from-red-400 to-red-500"
      }
    },
    "AI Tools & Utilities": {
      emoji: "🔨",
      colors: {
        bg: "bg-orange-700/40",
        border: "border-orange-300/60",
        hover: "hover:bg-orange-500/20 hover:border-orange-300/80",
        selected: "bg-gradient-to-r from-orange-400 to-orange-500"
      }
    },
    "Art & Design": {
      emoji: "🎨",
      colors: {
        bg: "bg-purple-700/40",
        border: "border-purple-300/60",
        hover: "hover:bg-purple-500/20 hover:border-purple-300/80",
        selected: "bg-gradient-to-r from-purple-400 to-purple-500"
      }
    },
    "Advanced AI Tools": {
      emoji: "🚀",
      colors: {
        bg: "bg-blue-700/40",
        border: "border-blue-300/60",
        hover: "hover:bg-blue-500/20 hover:border-blue-300/80",
        selected: "bg-gradient-to-r from-blue-400 to-blue-500"
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
