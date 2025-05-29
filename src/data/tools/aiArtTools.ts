import { Tool } from "@/types/tools";
import { BookOpen, Youtube } from "lucide-react";

export const aiArtTools: Tool[] = [
  {
    icon: Youtube,
    title: "Midjourney – Image Generation Platform",
    description: "Create stunning AI-generated images and artwork. Transform text prompts into beautiful, high-quality visual content.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-500",
    videoUrl: "https://www.youtube.com/watch?v=5deYUaqwreo",
    directUrl: "https://www.midjourney.com/home?via=aiwebtools",
    tags: ["image generation", "AI art", "creativity", "visual", "midjourney", "discord"],
    category: "AI Art"
  },
  {
    icon: Youtube,
    title: "Ideogram – Image Generator",
    description: "Generate high-quality images and graphics with AI. Create professional visuals, logos, and artistic content from text descriptions.",
    emoji: "🖼️",
    color: "from-blue-500 to-green-500",
    videoUrl: "https://www.youtube.com/watch?v=USSpwbe3Rxk",
    directUrl: "https://ideogram.ai/?via=aiwebtools",
    tags: ["image generation", "graphics", "AI art", "design", "logos", "professional"],
    category: "AI Art"
  },
  {
    icon: BookOpen,
    title: "\"MiddleJourney\" Midjourney Prompting Assistant",
    description: "Optimize your Midjourney prompts for better AI art generation. Create more effective prompts and improve your AI art results.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-visually-captivating-advertisement-for-the-.jpeg/:/cr=t:0.11%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true/qt=q:98",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    tags: ["midjourney", "prompts", "AI art", "optimization", "assistant"],
    category: "AI Art"
  },
  {
    icon: BookOpen,
    title: "Sketch Artist GPT",
    description: "Create detailed sketches and drawings with AI assistance. Generate artistic sketches, character designs, and illustration concepts.",
    emoji: "✏️",
    color: "from-gray-500 to-black-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-sketch-ar.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:300,cg:true",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    tags: ["sketching", "drawing", "art", "character design", "illustration"],
    category: "AI Art",
    rating: 4.3,
    totalVotes: 1847
  }
];
