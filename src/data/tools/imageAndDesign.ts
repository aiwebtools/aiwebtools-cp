
import { Tool } from "@/types/tools";
import { aiImageGeneration } from "./aiImageGeneration";
import { imageEditingTools } from "./imageEditingTools";
import { designAndGraphicsTools } from "./designAndGraphicsTools";
import { Box, Cube } from "lucide-react";

// Additional tools specific to imageAndDesign category
const additionalImageDesignTools: Tool[] = [
  {
    icon: Box,
    title: "Meshy AI - TEXT TO 3D Generator",
    description: "Revolutionary AI platform for generating 3D models from text descriptions. Create detailed 3D assets for games, design, and visualization projects.",
    emoji: "🧊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.meshy.ai/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377357834886582463/image.png?ex=6838abf1&is=68375a71&hm=8796d07ef297f42d59644ba648de8f8e892976312a6e04ec90242aea3c02c9ad&",
    tags: ["3D generation", "text to 3D", "3D modeling", "game assets", "visualization"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 3234
  }
];

export const imageAndDesign: Tool[] = [
  ...aiImageGeneration,
  ...imageEditingTools,
  ...designAndGraphicsTools,
  ...additionalImageDesignTools
];
