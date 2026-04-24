import { Tool } from "@/types/tools";
import { Video, Wand2 } from "lucide-react";

export const videoPromptGPTs: Tool[] = [
  {
    icon: Video,
    title: "Meta.ai Video Prompt Generator GPT",
    description: "Generate expertly crafted text prompts for Meta.ai video generation. This specialized GPT creates detailed, optimized prompts and storylines specifically designed for Meta.ai's video creation capabilities. Perfect for quick copy-paste productivity, it helps you create compelling video prompts that maximize Meta.ai's potential.",
    emoji: "🎬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-691b5852be7c8191beda5d0429f727bd-meta-ai-video-prompt-generator",
    imageUrl: "/src/assets/tools/meta-video-prompt-hero.png",
    tags: ["Meta.ai", "video prompts", "prompt generator", "video creation", "storylines", "productivity", "copy paste", "AI video", "Custom GPT"],
    category: "AI Web Tools GPTs",
    rating: 4.8,
    totalVotes: 892
  }
];
