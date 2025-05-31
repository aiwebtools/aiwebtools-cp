
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Brush, 
  Camera, 
  Scissors, 
  Music, 
  Film,
  PenTool,
  Wand2,
  Sparkles,
  Image,
  Edit
} from "lucide-react";

export const artAndCreativeGPTs: Tool[] = [
  {
    icon: PenTool,
    title: "Sketch Artist GPT",
    description: "Sketch Artist GPT is your AI-powered sketch art assistant, turning images or text descriptions into clean, high-resolution sketches using advanced Python and DALLE technology. Whether you're uploading a photo or describing an idea, Sketch Artist GPT delivers precise, professional sketches ready for creative use.",
    emoji: "✏️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["sketch art", "drawing", "digital sketching", "art creation", "image to sketch", "creative tools", "aiwebtools"],
    category: "Art & Creative",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Edit,
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the blog or article you wish to rewrite and bam! 🎯",
    emoji: "📝",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["article rewriting", "blog rewriting", "SEO optimization", "content rewriting", "content enhancement", "aiwebtools"],
    category: "Art & Creative",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Palette,
    title: "Color Palette Generator",
    description: "Generate beautiful and harmonious color palettes for your design projects.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://example.com/colorpalette",
    tags: ["color palette", "design", "harmony", "web design", "branding"],
    category: "Art & Creative",
    rating: 4.3,
    totalVotes: 2765
  },
  {
    icon: Brush,
    title: "AI-Powered Art Generator",
    description: "Create unique and stunning artwork using the power of artificial intelligence.",
    emoji: "🖌️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://example.com/aiart",
    tags: ["AI art", "art generation", "digital art", "creative AI", "artwork"],
    category: "Art & Creative",
    rating: 4.6,
    totalVotes: 3123
  },
  {
    icon: Camera,
    title: "Photo Enhancer",
    description: "Enhance and improve the quality of your photos with AI-driven tools.",
    emoji: "📸",
    color: "from-green-500 to-blue-600",
    directUrl: "https://example.com/photoenhance",
    tags: ["photo enhancement", "image quality", "AI photo", "image editing", "photography"],
    category: "Art & Creative",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Scissors,
    title: "Background Remover",
    description: "Automatically remove backgrounds from images with precision and ease.",
    emoji: "✂️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://example.com/removebg",
    tags: ["background removal", "image editing", "photo editing", "AI tools", "graphics"],
    category: "Art & Creative",
    rating: 4.7,
    totalVotes: 3345
  },
  {
    icon: Music,
    title: "AI Music Composer",
    description: "Compose original music tracks using artificial intelligence.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://example.com/aimusic",
    tags: ["AI music", "music composition", "songwriting", "AI tools", "music creation"],
    category: "Art & Creative",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Film,
    title: "Video Style Transfer",
    description: "Apply artistic styles to your videos using AI style transfer techniques.",
    emoji: "🎬",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://example.com/videostyle",
    tags: ["video editing", "style transfer", "AI video", "artistic video", "video effects"],
    category: "Art & Creative",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Wand2,
    title: "AI Logo Generator",
    description: "Create professional logos for your brand using AI-powered design tools.",
    emoji: "🪄",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-ICcKk0tgw-creative-logo-generator-and-assistant",
    tags: ["logo design", "AI logo", "branding", "graphic design", "AI tools"],
    category: "Art & Creative",
    rating: 4.8,
    totalVotes: 3567
  },
  {
    icon: Sparkles,
    title: "Creative Writing Assistant",
    description: "Enhance your creative writing with AI-powered suggestions and tools.",
    emoji: "✨",
    color: "from-red-500 to-purple-600",
    directUrl: "https://example.com/aiwriting",
    tags: ["creative writing", "AI writing", "writing assistant", "content creation", "AI tools"],
    category: "Art & Creative",
    rating: 4.3,
    totalVotes: 2789
  },
  {
    icon: Image,
    title: "AI-Powered Image Upscaler",
    description: "Upscale and enhance the resolution of your images using AI technology.",
    emoji: "🖼️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://example.com/aiupscale",
    tags: ["image upscaling", "image enhancement", "AI image", "photo editing", "resolution"],
    category: "Art & Creative",
    rating: 4.6,
    totalVotes: 3210
  }
];
