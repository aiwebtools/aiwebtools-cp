
import { Tool } from "@/types/tools";
import { AlertTriangle } from "lucide-react";

import hormuzCrisisGptHero from "@/assets/tools/hormuz-crisis-gpt-hero.jpg";

export const hormuzCrisisGPT: Tool[] = [
  {
    icon: AlertTriangle,
    title: "Hormuz Crisis Impact Prediction Engine GPT",
    description: "Real-time oil crisis survival countdown by country, with shock-impact scenarios. This advanced AI prediction engine analyzes how long each nation could sustain itself if the Strait of Hormuz were shut down, running worst-case oil countdown simulations, supply chain disruption models, and geopolitical impact assessments. Essential for researchers, analysts, policymakers, and anyone preparing for energy disruption scenarios.",
    emoji: "🛢️",
    color: "from-red-600 to-amber-700",
    directUrl: "https://chatgpt.com/g/g-69c5edc44cf481919bf1605933d97003-hormuz-crisis-impact-prediction-engine-gpt",
    imageUrl: hormuzCrisisGptHero,
    tags: [
      "oil crisis", "Hormuz", "Strait of Hormuz", "geopolitical analysis", "energy crisis",
      "oil supply", "crisis prediction", "survival countdown", "oil reserves", "energy disruption",
      "supply chain", "petroleum", "OPEC", "oil embargo", "fuel shortage",
      "geopolitics", "crisis management", "prediction engine", "risk assessment", "national security",
      "oil shock", "energy independence", "strategic reserves", "global trade", "crisis simulation",
      "Custom GPT", "simulation"
    ],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 2847,
    isFree: true,
    tagline: "How many days would your country survive if the oil stopped flowing?"
  }
];
