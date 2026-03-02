
import { Tool } from "@/types/tools";
import { 
  Camera, 
  Sparkles, 
  Zap, 
  Image, 
  Wand2,
  Palette
} from "lucide-react";

import luminarNeoHero from "@/assets/tools/luminar-neo-hero.jpg";
import topazPhotoAiHero from "@/assets/tools/topaz-photo-ai-hero.jpg";
import skylumHero from "@/assets/tools/skylum-hero.jpg";
import on1PhotoRawHero from "@/assets/tools/on1-photo-raw-hero.jpg";
import dxoPhotolabHero from "@/assets/tools/dxo-photolab-hero.jpg";
import evotoAiHero from "@/assets/tools/evoto-ai-hero.jpg";

export const aiPhotographyTools: Tool[] = [
  {
    icon: Sparkles,
    title: "Luminar Neo",
    description: "AI-powered photo editing software with intelligent sky replacement, portrait enhancement, and automated adjustments for professional results.",
    emoji: "✨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://skylum.com/luminar?via=aiwebtools",
    imageUrl: luminarNeoHero,
    tags: ["Photo Editor", "photo editing", "AI enhancement", "sky replacement", "portrait editing", "professional editing"],
    category: "AI Photography Tools",
    rating: 4.7,
    totalVotes: 5432
  },
  {
    icon: Zap,
    title: "Topaz Photo AI",
    description: "Advanced AI photo enhancement suite with noise reduction, sharpening, and upscaling for maximizing image quality automatically.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.topazlabs.com/topaz-photo-ai?via=aiwebtools",
    imageUrl: topazPhotoAiHero,
    tags: ["Photo Editor", "Image Upscaler", "AI enhancement", "noise reduction", "upscaling", "sharpening", "image quality"],
    category: "AI Photography Tools",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Camera,
    title: "Skylum",
    description: "AI photography software company offering creative tools with machine learning-powered editing, effects, and workflow automation.",
    emoji: "📷",
    color: "from-green-500 to-teal-600",
    directUrl: "https://skylum.com/?via=aiwebtools",
    imageUrl: skylumHero,
    tags: ["Photo Editor", "creative tools", "workflow automation", "AI effects", "photo software", "professional editing"],
    category: "AI Photography Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Image,
    title: "ON1 Photo RAW",
    description: "Comprehensive photo editing and organization software with AI-powered masking, effects, and non-destructive editing workflow.",
    emoji: "🖼️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.on1.com/?via=aiwebtools",
    imageUrl: on1PhotoRawHero,
    tags: ["Photo Editor", "photo editing", "RAW processing", "AI masking", "photo organization", "non-destructive editing"],
    category: "AI Photography Tools",
    rating: 4.5,
    totalVotes: 3987
  },
  {
    icon: Wand2,
    title: "DxO PhotoLab",
    description: "Professional RAW photo editor with AI-powered noise reduction, lens corrections, and advanced color science for photographers.",
    emoji: "🪄",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.dxo.com/dxo-photolab/?via=aiwebtools",
    imageUrl: dxoPhotolabHero,
    tags: ["Photo Editor", "RAW editing", "noise reduction", "lens corrections", "color science", "professional tools"],
    category: "AI Photography Tools",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Palette,
    title: "Evoto AI",
    description: "AI photo editing platform with batch processing, portrait retouching, and one-click enhancement for efficient professional workflows.",
    emoji: "🎨",
    color: "from-pink-500 to-red-600",
    directUrl: "https://www.evoto.ai/?via=aiwebtools",
    imageUrl: evotoAiHero,
    tags: ["Photo Editor", "batch editing", "portrait retouching", "one-click enhancement", "professional workflow", "AI automation"],
    category: "AI Photography Tools",
    rating: 4.4,
    totalVotes: 3234
  }
];
