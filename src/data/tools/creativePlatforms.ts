
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Camera, 
  Music, 
  Video, 
  Edit,
  Layers,
  Brush,
  Image,
  Mic,
  Film
} from "lucide-react";

import gimpHero from "@/assets/tools/gimp-hero.jpg";
import openshotHero from "@/assets/tools/openshot-hero.jpg";
import audacityHero from "@/assets/tools/audacity-hero.jpg";
import kritaHero from "@/assets/tools/krita-hero.jpg";
import darktableHero from "@/assets/tools/darktable-hero.jpg";

export const creativePlatforms: Tool[] = [
  {
    icon: Palette,
    title: "GIMP",
    description: "Free and open-source image editor with advanced features for photo retouching, image composition, and graphic design.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://gimp.org/",
    imageUrl: gimpHero,
    tags: ["image editing", "photo retouching", "graphic design", "open source", "free"],
    category: "Creative Platforms",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Video,
    title: "OpenShot",
    description: "Free, open-source video editor with simple interface, unlimited tracks, and support for many formats and effects.",
    emoji: "🎬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://openshot.org/",
    imageUrl: openshotHero,
    tags: ["video editing", "open source", "free", "effects", "unlimited tracks"],
    category: "Creative Platforms",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Music,
    title: "Audacity",
    description: "Free, open-source audio editor and recorder for multi-track editing, recording, and audio processing on multiple platforms.",
    emoji: "🎵",
    color: "from-red-500 to-purple-600",
    directUrl: "https://audacity.sourceforge.io/",
    imageUrl: audacityHero,
    tags: ["audio editing", "recording", "open source", "multi-track", "free"],
    category: "Creative Platforms",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Brush,
    title: "Krita",
    description: "Free and open-source painting program designed for concept artists, illustrators, and digital painters with advanced brush engines.",
    emoji: "🖌️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://krita.org/",
    imageUrl: kritaHero,
    tags: ["digital painting", "illustration", "concept art", "open source", "brushes"],
    category: "Creative Platforms",
    rating: 4.7,
    totalVotes: 3789
  },
  {
    icon: Camera,
    title: "Darktable",
    description: "Open-source photography workflow application and RAW developer. Professional photo editing and color correction tools.",
    emoji: "📷",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://darktable.org/",
    imageUrl: darktableHero,
    tags: ["RAW processing", "photography", "color correction", "open source", "workflow"],
    category: "Creative Platforms",
    rating: 4.4,
    totalVotes: 2987
  }
];
