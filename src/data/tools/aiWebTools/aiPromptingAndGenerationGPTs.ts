
import { Tool } from "@/types/tools";
import { Zap, Video, Film, Clapperboard, Play, Sparkles } from "lucide-react";

export const aiPromptingAndGenerationGPTs: Tool[] = [
  {
    icon: Video,
    title: "Sora Prompt Assistant",
    description: "Unleash your creativity with the SORA Prompt Assistant, your ultimate assistant for crafting epic video prompts and bringing cinematic ideas to life! From brainstorming to execution, I turn your visions into stunning video realities—let's create magic together!",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-city-with-tall-buildings-th_JdXy-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["video prompts", "AI prompting", "creative assistance", "video generation", "prompt engineering"],
    category: "AI Prompting & Generation",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Film,
    title: "Luma Dream Machine Prompt Assistant",
    description: "Luma Dream Machine is a text-to-video engine designed to bring your ideas to life. Our prompt assistant helps you create epic prompts to use with this engine, turning your envisioned films into reality.",
    emoji: "🌙",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-neon-lit-advertisement-for-the-l.jpeg/:/cr=t:50%25,l:0%25,w:100%25,h:50%25/rs=w:1240,h:620,cg:true",
    tags: ["video generation", "prompt engineering", "AI video", "text-to-video", "creative tools"],
    category: "AI Prompting & Generation",
    rating: 4.7,
    totalVotes: 5678
  },
  {
    icon: Play,
    title: "Movie Scene Maker GPT",
    description: "Transform Yourself Into A Movie Star Become the star of your own cinematic adventure with Movie Scene Maker GPT. Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline. Powered by GPT 4o Image Generation Technology.",
    emoji: "🎭",
    color: "from-red-500 to-purple-600",
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    tags: ["movie scenes", "personalized content", "video generation", "entertainment", "AI cinematography"],
    category: "AI Prompting & Generation",
    rating: 4.9,
    totalVotes: 7890
  }
];
