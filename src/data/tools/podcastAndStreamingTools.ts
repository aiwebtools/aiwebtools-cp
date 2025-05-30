
import { Tool } from "@/types/tools";
import { Radio, Mic, Zap, Sparkles } from "lucide-react";

export const podcastAndStreamingTools: Tool[] = [
  {
    icon: Radio,
    title: "Resound.fm",
    description: "Game-changing AI podcast editor founded by professional audio engineers. Reduces post-production time with proprietary machine learning models to detect and eliminate distracting filler sounds.",
    emoji: "📻",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://www.resound.fm/?via=aiwebtools",
    tags: ["AI podcast editor", "filler sound removal", "machine learning", "post-production", "seamless editing", "professional audio"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Zap,
    title: "Krisp",
    description: "AI-powered solution designed to enhance online meetings by improving voice clarity and providing a Meeting Assistant. Boosts productivity during virtual meetings.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://krisp.ai/",
    tags: ["voice clarity", "meeting assistant", "noise cancellation", "productivity", "virtual meetings", "clear communication"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Radio,
    title: "Podium",
    description: "Podcast production powerhouse offering suite of AI-powered tools to streamline content creation. Generates episode summaries, chapters, transcripts, and social media posts.",
    emoji: "📻",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://hello.podium.page/?via=aiwebtools",
    tags: ["podcast production", "episode summaries", "transcripts", "social media posts", "accessibility", "discoverability"],
    category: "Audio & Music Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Sparkles,
    title: "Wondercraft",
    description: "Cutting-edge AI-powered podcast creation tool that effortlessly transforms existing content into captivating podcasts. Hyper-realistic AI voices convert text to audio.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.wondercraft.ai/?via=aiwebtools",
    tags: ["podcast creation", "hyper-realistic voices", "text to audio", "show notes", "video clips", "Spotify publishing"],
    category: "Audio & Music Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Mic,
    title: "Cleanvoice.ai",
    description: "Solution to save valuable time on podcast editing. Artificial intelligence tool efficiently removes filler sounds, stuttering, and mouth noises from podcast or audio recordings.",
    emoji: "🧹",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://cleanvoice.ai/",
    tags: ["podcast editing", "filler sound removal", "multilingual", "stuttering removal", "silence shortening", "15k+ podcasters"],
    category: "Audio & Music Tools",
    rating: 4.5,
    totalVotes: 3789
  }
];
