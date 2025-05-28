
import { Tool } from "@/types/tools";
import { 
  Palette, ImageIcon, Sparkles, Brush, Wand2, Paintbrush
} from "lucide-react";

export const aiImageGeneration: Tool[] = [
  {
    icon: Palette,
    title: "DALL·E 3",
    description: "Create realistic and imaginative images from text descriptions",
    emoji: "🎨",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://openai.com/dall-e-3",
    tags: ["image generation", "text to image", "ai art"],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Sparkles,
    title: "NightCafe Creator",
    description: "Generate AI art and images with multiple AI art generation methods.",
    emoji: "✨",
    color: "from-purple-500 to-red-500",
    directUrl: "https://nightcafe.studio/",
    tags: ["ai art", "image generation", "ai art community"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Paintbrush,
    title: "Sketch Artist GPT",
    description: "Professional digital sketch artist and drawing assistant. Create sketches, digital artwork, character designs, and artistic illustrations with AI-powered drawing guidance.",
    emoji: "✏️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["sketching", "digital art", "drawing", "character design", "artistic illustration"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Palette,
    title: "Midjourney – Image Generation Platform",
    description: "Leading AI image generation platform for creating stunning visual art. Generate high-quality images, artwork, and creative visuals from text prompts with advanced AI models.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.midjourney.com/home",
    videoUrl: "https://www.youtube.com/watch?v=5deYUaqwreo",
    tags: ["AI art", "image generation", "creative visuals", "text-to-image", "digital art"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Sparkles,
    title: "Ideogram – Image Generator",
    description: "Advanced AI image generator with text integration capabilities. Create images with readable text, logos, and precise visual content generation for various creative projects.",
    emoji: "✨",
    color: "from-cyan-500 to-purple-600",
    directUrl: "https://ideogram.ai/",
    videoUrl: "https://www.youtube.com/watch?v=USSpwbe3Rxk",
    tags: ["text-to-image", "logo creation", "AI generator", "visual content", "graphic design"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 3789
  }
];
