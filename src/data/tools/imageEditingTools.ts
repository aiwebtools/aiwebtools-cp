
import { Tool } from "@/types/tools";
import { 
  Edit3,
  Upload,
  Scissors,
  PaintBucket,
  Settings,
  Brush,
  Monitor,
  Camera,
  Target
} from "lucide-react";

export const imageEditingTools: Tool[] = [
  {
    icon: Upload,
    title: "LetsEnhance.io",
    description: "Go-to solution for enhancing and upscaling images with ease. Increase resolution, improve quality, add clarity with one click. Generate captivating AI art in high quality with free start and API access options.",
    emoji: "⬆️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://letsenhance.io/",
    tags: ["image enhancement", "upscaling", "one click", "AI art generation", "API access", "high quality"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Edit3,
    title: "FOTOR",
    description: "User-friendly and versatile online photo editor offering wide range of capabilities for editing and enhancing images effortlessly. Features AI-powered tools, batch editor, and creative options for professional touch.",
    emoji: "📸",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.fotor.com/",
    tags: ["photo editor", "AI-powered", "batch editing", "background removal", "collages", "professional touch"],
    category: "Image Generation Platforms",
    rating: 4.4,
    totalVotes: 3567
  },
  {
    icon: Edit3,
    title: "Pixlr",
    description: "Versatile and user-friendly online photo editor and design tool that harnesses AI power. Pixlr X for quick design, Pixlr E for advanced editing, AI image generator, Photomash Studio for one-click visual creation.",
    emoji: "🎨",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://pixlr.com/",
    tags: ["AI image generator", "Photomash Studio", "one-click creation", "animations", "filters", "premium access"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4234
  },
  {
    icon: Upload,
    title: "PicWish",
    description: "AI-powered image processing platform designed to simplify and enhance photo editing tasks. Remove backgrounds, unblur images, enhance resolution, extract text, AI art generation with APIs for developers.",
    emoji: "🌟",
    color: "from-green-500 to-teal-600",
    directUrl: "https://picwish.com/",
    tags: ["background removal", "image unblur", "text extraction", "AI art generation", "developer APIs", "productivity boost"],
    category: "Image Generation Platforms",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Upload,
    title: "IMGlarger",
    description: "AI-powered image enhancer and upscaler that empowers users to enhance photo quality, increase resolution, and add clarity effortlessly. Fast automatic processing up to 8k resolution with data security within 24 hours.",
    emoji: "📈",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://shareasale.com/r.cfm?b=1434994&u=3604681&m=92386&urllink=&afftrack=",
    tags: ["8k resolution", "automatic processing", "data security", "photo enhancement", "high-quality printing", "artifact removal"],
    category: "Image Generation Platforms",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Upload,
    title: "Deep-Image.ai",
    description: "Forefront of image enhancement offering intuitive AI-powered tools that streamline editing process. Upscale images, correct colors, remove backgrounds with comprehensive solutions for various sectors and enhanced customer conversion.",
    emoji: "🎨",
    color: "from-green-500 to-teal-600",
    directUrl: "https://deep-image.ai/",
    tags: ["image enhancement", "upscaling", "color correction", "print quality", "e-commerce", "real estate"],
    category: "Image Generation Platforms",
    rating: 4.5,
    totalVotes: 3567
  },
  {
    icon: Scissors,
    title: "Magic Eraser",
    description: "User-friendly online photo editor that simplifies removing unwanted elements from images. Drag-and-drop interface, no signup required, eliminates distractions with PRO version for high-resolution downloads and bulk editing.",
    emoji: "✂️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://magicstudio.com/?via=aiwebtools",
    tags: ["drag-and-drop", "no signup", "unwanted removal", "PRO version", "bulk editing", "real estate"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Monitor,
    title: "DiffusionBee",
    description: "Groundbreaking AI art generation tool that empowers users to create stunning images through Stable Diffusion technology locally without usage limitations. Prioritizes privacy with local processing and active Discord community.",
    emoji: "🐝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://diffusionbee.com/",
    tags: ["Stable Diffusion", "local processing", "unlimited use", "privacy-focused", "text-to-image", "Discord community"],
    category: "Image Generation Platforms",
    rating: 4.7,
    totalVotes: 4789
  },
  {
    icon: Camera,
    title: "Lensa",
    description: "Comprehensive image editing application designed to elevate photos to new heights. Magic Correction tool, facial retouching, background alteration, unique filters and special effects with borders for extra edge.",
    emoji: "📱",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://prisma-ai.com/lensa",
    tags: ["Magic Correction", "facial retouching", "background blur", "unique filters", "special effects", "photo elevation"],
    category: "Image Generation Platforms",
    rating: 4.6,
    totalVotes: 4234
  }
];
