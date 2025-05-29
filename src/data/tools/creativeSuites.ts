
import { Tool } from "@/types/tools";
import { 
  Palette, 
  Camera, 
  Video, 
  Music, 
  Brush, 
  Wand2,
  Sparkles,
  Image,
  Film,
  Mic
} from "lucide-react";

export const creativeSuites: Tool[] = [
  {
    icon: Video,
    title: "TEXT TO VIDEO PROMPTER GPT",
    description: "Advanced text-to-video prompt generator for creating stunning AI videos. Optimize your prompts for platforms like Runway, Pika Labs, and other video AI tools.",
    emoji: "🎬",
    color: "from-red-500 to-purple-600",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=sCQ_7CyK4YE",
    category: "Creative Suites",
    tags: ["text to video", "AI video", "prompt generation", "video creation"],
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Palette,
    title: "CREATIVE DIRECTOR GPT",
    description: "Professional creative direction and artistic guidance for projects, campaigns, and creative endeavors across all mediums.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://creativedirectorgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    category: "Creative Suites",
    tags: ["creative direction", "artistic guidance", "project management", "creative strategy"],
    rating: 4.7,
    totalVotes: 2987
  },
  {
    icon: Brush,
    title: "Sketch Artist GPT",
    description: "Professional digital sketching and drawing assistant. Create detailed sketches, concept art, character designs, and artistic illustrations with AI-powered guidance.",
    emoji: "✏️",
    color: "from-gray-500 to-purple-600",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    category: "Creative Suites",
    tags: ["digital sketching", "concept art", "character design", "drawing", "illustration"],
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Film,
    title: "STORYBOARD CREATOR GPT",
    description: "Professional storyboard creation for films, animations, commercials, and video projects with detailed scene planning and visual storytelling.",
    emoji: "🎞️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://storyboardcreator.lovable.app/?via=aiwebtools",
    imageUrl: "https://images.unsplash.com/photo-1489599849587-2ee91cede3ba",
    category: "Creative Suites",
    tags: ["storyboard", "visual storytelling", "film planning", "animation"],
    rating: 4.5,
    totalVotes: 2123
  }
];
