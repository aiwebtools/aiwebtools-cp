import { Tool } from "@/types/tools";
import { 
  FileText
} from "lucide-react";

import bitAiHero from "@/assets/tools/bit-ai-hero.jpg";

export const collaborationTools: Tool[] = [
  {
    icon: FileText,
    title: "Bit.ai",
    description: "Modern workplace collaboration platform for creating, collaborating, and organizing knowledge. Features document creation, wikis, client portals, and smart integrations for teams worldwide.",
    emoji: "📄",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://bit.ai/?deal=aiwebtools",
    imageUrl: bitAiHero,
    tags: ["document collaboration", "knowledge management", "wikis", "client portals", "team workspace", "content management"],
    category: "Collaboration Tools",
    rating: 4.5,
    totalVotes: 1834
  }
];
