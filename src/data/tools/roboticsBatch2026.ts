import { Tool } from "@/types/tools";
import { Bot, Building, Heart, Wrench, Factory } from "lucide-react";
import noetixBumiHero from "@/assets/tools/noetix-bumi-hero.jpg";
import mirokaiHero from "@/assets/tools/mirokai-hero.jpg";
import fourierGr2Hero from "@/assets/tools/fourier-gr2-hero.jpg";
import agibotHero from "@/assets/tools/agibot-hero.jpg";
import standardBotsHero from "@/assets/tools/standard-bots-hero.jpg";

export const roboticsBatch2026: Tool[] = [
  {
    icon: Bot,
    title: "Noetix Bumi",
    description: "An affordable mini-humanoid robot standing 94cm tall, designed for high-end hobbyists and classroom education. At just $1,400, it's the most accessible entry point into humanoid robotics for schools, makers, and STEM programs.",
    emoji: "🤖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://noetix.com/?via=aiwebtools",
    imageUrl: noetixBumiHero,
    tags: ["mini humanoid", "education robot", "STEM robotics", "affordable robot", "classroom robot", "hobbyist robot", "bipedal robot", "Robotics Companies", "AI Gadgets & Devices"],
    category: "Robotics Companies",
    rating: 4.3,
    totalVotes: 876
  },
  {
    icon: Building,
    title: "Mirokaï (Enchanted Tools)",
    description: "A social logistics robot with an anime-inspired design and a unique rolling-globe base for fluid movement in hospitals and hotels. Priced at ~$30,000, Mirokaï bridges the gap between functional service robotics and emotionally engaging design for hospitality and healthcare environments.",
    emoji: "✨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://enchanted.tools/?via=aiwebtools",
    imageUrl: mirokaiHero,
    tags: ["social robot", "hospital robot", "hospitality robot", "service robot", "logistics robot", "anime robot", "Robotics Companies", "AI Gadgets & Devices"],
    category: "Robotics Companies",
    rating: 4.5,
    totalVotes: 1234
  },
  {
    icon: Heart,
    title: "Fourier Intelligence GR-2",
    description: "A highly advanced bipedal humanoid robot with a massive 50kg payload capacity, specifically designed for healthcare, rehabilitation, and elder care support. At ~$150,000+, the GR-2 represents the cutting edge of medical-grade humanoid robotics with high-dexterity manipulation.",
    emoji: "🏥",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://fourierintelligence.com/?via=aiwebtools",
    imageUrl: fourierGr2Hero,
    tags: ["healthcare robot", "rehabilitation robot", "elder care robot", "bipedal humanoid", "medical robotics", "high payload robot", "Robotics Companies"],
    category: "Robotics Companies",
    rating: 4.6,
    totalVotes: 987
  },
  {
    icon: Factory,
    title: "AGIBOT",
    description: "A global humanoid robotics manufacturer offering the A-Series (universal humanoid workers) and X-Series (interactive/research platforms). With a flagship store launched at MWC 2026, AGIBOT provides both purchase and Robot-as-a-Service (RaaS) options starting at €899/day for enterprise deployment.",
    emoji: "🏭",
    color: "from-gray-600 to-blue-600",
    directUrl: "https://store.agibot.com/?via=aiwebtools",
    imageUrl: agibotHero,
    tags: ["universal humanoid", "commercial robot", "RaaS", "robot as a service", "A-Series robot", "X-Series robot", "enterprise robotics", "Robotics Companies"],
    category: "Robotics Companies",
    rating: 4.4,
    totalVotes: 1543
  },
  {
    icon: Wrench,
    title: "Standard Bots RO1",
    description: "An AI-powered collaborative robot arm priced at $37,000, offering a unique lease-to-own model starting at just $5/hour. Designed for small-to-mid manufacturing shops, the RO1 cobot brings accessible industrial automation with intuitive AI programming and safe human-robot collaboration.",
    emoji: "🦾",
    color: "from-orange-500 to-red-600",
    directUrl: "https://standardbots.com/?via=aiwebtools",
    imageUrl: standardBotsHero,
    tags: ["cobot", "collaborative robot", "robot arm", "manufacturing automation", "lease to own", "industrial robot", "small business robot", "Robotics Companies", "AI Gadgets & Devices"],
    category: "Robotics Companies",
    rating: 4.5,
    totalVotes: 1098
  }
];
