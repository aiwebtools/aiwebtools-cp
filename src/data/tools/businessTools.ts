
import { Tool } from "@/types/tools";
import { 
  Shield,
  Wrench,
  MapPin,
  Truck,
  HardHat
} from "lucide-react";

import itSupportHero from "@/assets/tools/it-support-gpt-hero.jpg";
import securityConsultantHero from "@/assets/tools/security-consultant-gpt-hero.jpg";
import urbanPlannerHero from "@/assets/tools/urban-planner-gpt-hero.jpg";
import logisticsManagerHero from "@/assets/tools/logistics-manager-gpt-hero.jpg";
import safetyInspectorHero from "@/assets/tools/safety-inspector-gpt-hero.jpg";

export const businessTools: Tool[] = [
  {
    icon: Wrench,
    title: "IT SUPPORT GPT",
    description: "Comprehensive IT support and troubleshooting assistance for technical issues, system maintenance, and technology solutions. Provides expert guidance for hardware, software, and network problems.",
    emoji: "🔧",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://chatgpt.com/g/g-683b97eb3ac081918a1755a261409586-it-support-gpt",
    imageUrl: itSupportHero,
    category: "Business Tools",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Shield,
    title: "Security Consultant GPT",
    description: "Expert cybersecurity consulting and risk assessment services. Provides security audits, threat analysis, and recommendations for protecting digital assets and infrastructure.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-683b98ddf8708191a5a25fc94d0f0d32-security-consultant-gpt",
    imageUrl: securityConsultantHero,
    category: "Business Tools",
    rating: 4.7,
    totalVotes: 3987
  },
  {
    icon: MapPin,
    title: "Urban Planner GPT",
    description: "Professional urban planning and city development consultation. Assists with zoning analysis, community development, sustainable planning, and municipal project guidance.",
    emoji: "🏙️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-68bba6576cb881918abbcf39ac5d6c7b-urban-planner-gpt",
    imageUrl: urbanPlannerHero,
    category: "Business Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Truck,
    title: "Logistics Manager GPT",
    description: "Supply chain and logistics management expertise. Provides guidance on inventory optimization, shipping coordination, warehouse management, and distribution strategies.",
    emoji: "📦",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chatgpt.com/g/g-683b9a863cdc81919593479698ad685e-logistics-manager-gpt",
    imageUrl: logisticsManagerHero,
    category: "Business Tools",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: HardHat,
    title: "SAFETY INSPECTOR GPT",
    description: "Professional safety inspection and compliance consulting. Provides workplace safety assessments, regulatory compliance guidance, and risk mitigation strategies for various industries.",
    emoji: "🦺",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-683b9c463ec48191bd96a0013905aa97-safety-inspector-gpt",
    imageUrl: safetyInspectorHero,
    category: "Business Tools",
    rating: 4.5,
    totalVotes: 3789
  }
];
