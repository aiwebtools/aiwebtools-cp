import { Tool } from "@/types/tools";
import { Bone } from "lucide-react";

import pawpHero from "@/assets/tools/pawp-hero.jpg";

// Pet gadgets/devices (Petcube, Furbo, Whistle, Fi, PetPace) moved to aiGadgetsDevicesTools.ts
// Only AI software tools remain here
export const aiPetCareTools: Tool[] = [
  {
    icon: Bone,
    title: "Pawp",
    description: "AI-powered telehealth for pets providing 24/7 virtual vet consultations, emergency fund coverage, and pet health guidance.",
    emoji: "🦴",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.pawp.com/?via=aiwebtools",
    imageUrl: pawpHero,
    tags: ["pet telehealth", "virtual vet", "24/7 support", "emergency coverage", "health guidance"],
    category: "AI Pet Care Tools",
    rating: 4.3,
    totalVotes: 2654
  }
];
