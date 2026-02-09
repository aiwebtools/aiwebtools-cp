
import { Tool } from "@/types/tools";
import { 
  Film, 
  User, 
  Zap, 
  Video, 
  Users,
  Play
} from "lucide-react";

import cascadeurHero from "@/assets/tools/cascadeur-hero.jpg";
import deepmotionHero from "@/assets/tools/deepmotion-hero.jpg";
import plaskHero from "@/assets/tools/plask-hero.jpg";
import movmiHero from "@/assets/tools/movmi-hero.jpg";
import wonderDynamicsHero from "@/assets/tools/wonder-dynamics-hero.jpg";
import krikeyAiHero from "@/assets/tools/krikey-ai-hero.jpg";

export const aiAnimationTools: Tool[] = [
  {
    icon: User,
    title: "Cascadeur",
    description: "AI-assisted 3D animation software for creating realistic character animations with physics-based motion and keyframe interpolation.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://cascadeur.com/?via=aiwebtools",
    imageUrl: cascadeurHero,
    tags: ["3D animation", "character animation", "physics-based", "keyframe animation", "motion design", "Animation", "3D Animation"],
    category: "AI Animation Tools",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Users,
    title: "DeepMotion",
    description: "AI motion capture platform converting video into 3D animations with markerless tracking for games, films, and virtual reality.",
    emoji: "🎬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.deepmotion.com/?via=aiwebtools",
    imageUrl: deepmotionHero,
    tags: ["motion capture", "markerless tracking", "video-to-3D", "animation AI", "VR animation", "Motion Capture", "3D Animation"],
    category: "AI Animation Tools",
    rating: 4.6,
    totalVotes: 3876
  },
  {
    icon: Zap,
    title: "Plask",
    description: "Browser-based AI motion capture tool extracting animations from video for quick 3D character rigging and animation workflows.",
    emoji: "⚡",
    color: "from-green-500 to-teal-600",
    directUrl: "https://plask.ai/?via=aiwebtools",
    imageUrl: plaskHero,
    tags: ["browser mocap", "video-to-animation", "character rigging", "quick animation", "web-based", "Motion Capture", "Animation"],
    category: "AI Animation Tools",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Video,
    title: "Movmi",
    description: "AI-powered human motion capture from 2D video without sensors, perfect for animators and game developers needing quick mocap.",
    emoji: "🎥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://movmi.co/?via=aiwebtools",
    imageUrl: movmiHero,
    tags: ["2D to 3D", "sensorless mocap", "human motion", "game animation", "quick mocap", "Motion Capture", "Animation"],
    category: "AI Animation Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Film,
    title: "Wonder Dynamics",
    description: "AI tool automatically animating, lighting, and compositing CG characters into live-action footage with minimal manual work.",
    emoji: "🎞️",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://wonderdynamics.com/?via=aiwebtools",
    imageUrl: wonderDynamicsHero,
    tags: ["CG animation", "auto-compositing", "live-action VFX", "character animation", "automated workflow", "Live Action VFX", "3D Animation"],
    category: "AI Animation Tools",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Play,
    title: "Krikey AI",
    description: "AI animation platform for creating custom 3D animations and avatars with simple text prompts and gesture-based controls.",
    emoji: "▶️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.krikey.ai/?via=aiwebtools",
    imageUrl: krikeyAiHero,
    tags: ["text-to-animation", "3D avatars", "gesture control", "custom animations", "no-code animation", "Animation", "3D Animation"],
    category: "AI Animation Tools",
    rating: 4.3,
    totalVotes: 2654
  }
];
