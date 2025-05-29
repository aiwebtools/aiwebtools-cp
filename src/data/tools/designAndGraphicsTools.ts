
import { Tool } from "@/types/tools";
import { 
  Type, 
  Palette, 
  Image, 
  Sparkles
} from "lucide-react";

export const designAndGraphicsTools: Tool[] = [
  {
    icon: Type,
    title: "FontJoy",
    description: "Simplifies the art of font pairing with its intuitive and AI-driven platform. With just a click, FontJoy generates font combinations using deep learning algorithms, helping you effortlessly discover harmonious typefaces for your projects.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://fontjoy.com/",
    tags: ["font pairing", "deep learning", "typefaces", "design", "neural networks", "typography"],
    category: "Design & Graphics Tools",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Image,
    title: "APOB",
    description: "Create your AI Portrait. Supercharge your AI image and video content creation with unmatched quality, speed, and consistency. Make yourself be an anime character, professional film star, or more.",
    emoji: "🎭",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://apob.ai/",
    tags: ["AI portrait", "anime character", "film star", "image creation", "video content", "consistency"],
    category: "Design & Graphics Tools",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Sparkles,
    title: "Simplified",
    description: "Versatile all-in-one AI platform trusted by over 2.5 million marketing teams. Offers AI tools for graphics design, video editing, AI copywriting, social media management, and more, all within one app.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://simplified.com/?fpr=kenneth81",
    tags: ["2.5M teams", "graphics design", "video editing", "copywriting", "social media", "all-in-one"],
    category: "Design & Graphics Tools",
    rating: 4.6,
    totalVotes: 4567
  }
];
