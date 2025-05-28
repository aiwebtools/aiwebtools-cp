import { Tool } from "@/types/tools";
import { 
  Palette, Brush, Camera, Image, Layers, 
  Sparkles, Wand2, PenTool, Scissors, 
  Crop, Filter, Eye, Target, Zap
} from "lucide-react";

export const imageAndDesign: Tool[] = [
  {
    icon: Palette,
    title: "Leonardo AI",
    description: "Advanced AI image generation platform with production-quality assets. Create stunning visuals, maintain style consistency, and generate professional-grade images for creative projects.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    category: "Image & Design",
    directUrl: "https://app.leonardo.ai/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/image_converted.jpeg/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    tags: ["image generation", "AI art", "creative", "professional", "visual design"],
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Brush,
    title: "Adobe Firefly",
    description: "Transform your words into stunning images with the power of Adobe's creative AI.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    category: "Image & Design",
    directUrl: "https://www.adobe.com/sensei/generative-ai/firefly.html",
    tags: ["text to image", "creative ai", "adobe"],
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Camera,
    title: "RunwayML Gen-2",
    description: "A multi-modal AI system that generates novel videos with text, images, and video clips.",
    emoji: "🎬",
    color: "from-purple-500 to-pink-600",
    category: "Image & Design",
    directUrl: "https://runwayml.com/gen2/",
    tags: ["video generation", "ai video", "multi-modal"],
    rating: 4.6,
    totalVotes: 4890
  },
  {
    icon: Image,
    title: "Midjourney",
    description: "Create imaginative art through collaborative AI. Join the Midjourney community and bring your visions to life.",
    emoji: "✨",
    color: "from-blue-500 to-purple-600",
    category: "Image & Design",
    directUrl: "https://www.midjourney.com/",
    tags: ["ai art", "community", "image generation"],
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Layers,
    title: "DALL·E 2",
    description: "Create realistic images and art from a text description in seconds with OpenAI's DALL·E 2.",
    emoji: "🖼️",
    color: "from-green-500 to-blue-600",
    category: "Image & Design",
    directUrl: "https://openai.com/dall-e-2/",
    tags: ["image generation", "text to image", "openai"],
    rating: 4.9,
    totalVotes: 6123
  },
  {
    icon: Sparkles,
    title: "NightCafe Creator",
    description: "AI Art Generator. Create amazing artworks in seconds using the power of Artificial Intelligence.",
    emoji: "🌟",
    color: "from-yellow-500 to-orange-600",
    category: "Image & Design",
    directUrl: "https://creator.nightcafe.studio/",
    tags: ["ai art", "image generation", "art creation"],
    rating: 4.4,
    totalVotes: 4234
  },
  {
    icon: Wand2,
    title: "Deep Image AI",
    description: "Enhance and upscale images with AI. Increase resolution, remove noise, and restore details automatically.",
    emoji: "🪄",
    color: "from-cyan-500 to-blue-600",
    category: "Image & Design",
    directUrl: "https://deep-image.ai/",
    tags: ["image enhancement", "upscaling", "noise removal"],
    rating: 4.3,
    totalVotes: 3987
  },
  {
    icon: PenTool,
    title: "Hotpot AI",
    description: "AI tools to automate tedious tasks and empower creativity. Generate graphics, write copy, and more.",
    emoji: "✍️",
    color: "from-pink-500 to-purple-600",
    category: "Image & Design",
    directUrl: "https://hotpot.ai/",
    tags: ["graphic design", "ai tools", "automation"],
    rating: 4.2,
    totalVotes: 3765
  },
  {
    icon: Scissors,
    title: "Remove.bg",
    description: "Remove image backgrounds automatically in 5 seconds with just one click. 100% automatically.",
    emoji: "✂️",
    color: "from-green-500 to-cyan-600",
    category: "Image & Design",
    directUrl: "https://www.remove.bg/",
    tags: ["background removal", "image editing", "automation"],
    rating: 4.5,
    totalVotes: 4444
  },
  {
    icon: Crop,
    title: "Let's Enhance",
    description: "Upscale images with AI for free. Enlarge photos without losing quality, enhance colors and fix blur.",
    emoji: "🖼️",
    color: "from-yellow-500 to-green-600",
    category: "Image & Design",
    directUrl: "https://letsenhance.io/",
    tags: ["image upscaling", "enhancement", "color correction"],
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Filter,
    title: "Lensa AI",
    description: "Create magical avatars with AI. Transform your photos into stunning digital portraits.",
    emoji: "👤",
    color: "from-blue-500 to-pink-600",
    category: "Image & Design",
    directUrl: "https://lensa-ai.com/",
    tags: ["ai avatars", "digital portraits", "image transformation"],
    rating: 4.6,
    totalVotes: 4789
  },
  {
    icon: Eye,
    title: "Stable Diffusion",
    description: "Generate detailed images conditioned on text descriptions. Open source and versatile.",
    emoji: "👁️",
    color: "from-purple-500 to-blue-600",
    category: "Image & Design",
    directUrl: "https://stability.ai/",
    tags: ["text to image", "open source", "image generation"],
    rating: 4.7,
    totalVotes: 5012
  },
  {
    icon: Target,
    title: "Craiyon",
    description: "Free AI image generator that draws images from text. Formerly AI DALL-E mini.",
    emoji: "🎯",
    color: "from-red-500 to-orange-600",
    category: "Image & Design",
    directUrl: "https://www.craiyon.com/",
    tags: ["free ai", "image generation", "text to image"],
    rating: 4.1,
    totalVotes: 3567
  },
  {
    icon: Zap,
    title: "Imagine AI",
    description: "Unleash your creativity with AI-generated art. Create unique and stunning visuals effortlessly.",
    emoji: "⚡",
    color: "from-cyan-500 to-purple-600",
    category: "Image & Design",
    directUrl: "https://www.imagineai.app/",
    tags: ["ai art", "image generation", "creative tools"],
    rating: 4.0,
    totalVotes: 3234
  },
  {
    icon: PenTool,
    title: "Graphic & Cover Design GPT",
    description: "Professional graphic design assistant for creating stunning visuals. Get expert help with logo design, book covers, marketing materials, brand identity, and creative graphic solutions.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    category: "Image & Design",
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/2e70f2ce-b17e-4b0f-b5d3-f36c9c22a2e3.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    tags: ["graphic design", "cover design", "branding", "visual design", "creative"],
    rating: 4.3,
    totalVotes: 2945
  }
];
