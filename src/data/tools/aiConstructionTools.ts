
import { Tool } from "@/types/tools";
import { 
  HardHat, 
  Building, 
  FileText, 
  Hammer, 
  Users,
  Calendar
} from "lucide-react";

import procoreHero from "@/assets/tools/procore-hero.jpg";
import buildertrendHero from "@/assets/tools/buildertrend-hero.jpg";
import plangridHero from "@/assets/tools/plangrid-hero.jpg";
import fieldwireHero from "@/assets/tools/fieldwire-hero.jpg";
import coconstructHero from "@/assets/tools/coconstruct-hero.jpg";
import smartsheetConstructionHero from "@/assets/tools/smartsheet-construction-hero.jpg";

export const aiConstructionTools: Tool[] = [
  {
    icon: Building,
    title: "Procore AI",
    description: "Leading construction management platform with AI-powered project tracking, document management, and real-time collaboration for builders.",
    emoji: "🏗️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.procore.com/?via=aiwebtools",
    imageUrl: procoreHero,
    tags: ["construction management", "project tracking", "document management", "collaboration", "building software"],
    category: "AI Construction Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: HardHat,
    title: "Buildertrend",
    description: "Cloud-based construction project management software with AI scheduling, budget tracking, and client communication tools.",
    emoji: "👷",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://buildertrend.com/?via=aiwebtools",
    imageUrl: buildertrendHero,
    tags: ["project management", "scheduling", "budget tracking", "client communication", "construction software"],
    category: "AI Construction Tools",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: FileText,
    title: "PlanGrid",
    description: "AI-enhanced construction productivity software for blueprint management, field reports, and real-time project documentation.",
    emoji: "📋",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.plangrid.com/?via=aiwebtools",
    imageUrl: plangridHero,
    tags: ["blueprints", "field reports", "documentation", "construction productivity", "digital plans"],
    category: "AI Construction Tools",
    rating: 4.4,
    totalVotes: 3987
  },
  {
    icon: Users,
    title: "Fieldwire",
    description: "Job site management app with AI-powered task scheduling, punch lists, and team coordination for construction workflows.",
    emoji: "👥",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.fieldwire.com/?via=aiwebtools",
    imageUrl: fieldwireHero,
    tags: ["job site management", "task scheduling", "punch lists", "team coordination", "workflow management"],
    category: "AI Construction Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Hammer,
    title: "CoConstruct",
    description: "Custom builder and remodeler software with AI estimating, project scheduling, and client selections management.",
    emoji: "🔨",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.coconstruct.com/?via=aiwebtools",
    imageUrl: coconstructHero,
    tags: ["custom building", "estimating", "project scheduling", "client management", "remodeling"],
    category: "AI Construction Tools",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Calendar,
    title: "Smartsheet Construction",
    description: "AI-powered work execution platform for construction with automated workflows, resource management, and portfolio tracking.",
    emoji: "📅",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.smartsheet.com/industries/construction?via=aiwebtools",
    imageUrl: smartsheetConstructionHero,
    tags: ["work execution", "automated workflows", "resource management", "portfolio tracking", "construction planning"],
    category: "AI Construction Tools",
    rating: 4.4,
    totalVotes: 3234
  }
];
