
import { Tool } from "@/types/tools";
import { 
  Sprout, 
  Cloud, 
  BarChart3, 
  MapPin, 
  TrendingUp,
  Satellite
} from "lucide-react";

import farmlogsHero from "@/assets/tools/farmlogs-hero.jpg";
import granularHero from "@/assets/tools/granular-hero.jpg";
import farmersEdgeHero from "@/assets/tools/farmers-edge-hero.jpg";
import climateFieldviewHero from "@/assets/tools/climate-fieldview-hero.jpg";
import cropioHero from "@/assets/tools/cropio-hero.jpg";
import taranisHero from "@/assets/tools/taranis-hero.jpg";

export const aiAgricultureTools: Tool[] = [
  {
    icon: Sprout,
    title: "FarmLogs",
    description: "AI-powered farm management software providing field-level insights, crop planning, inventory management, and profitability tracking for precision agriculture.",
    emoji: "🌱",
    color: "from-green-500 to-teal-600",
    directUrl: "https://farmlogs.com/?via=aiwebtools",
    imageUrl: farmlogsHero,
    tags: ["farm management", "crop planning", "precision agriculture", "profitability", "field insights"],
    category: "AI Agriculture Tools",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: BarChart3,
    title: "Granular",
    description: "Comprehensive farm management platform using AI for crop performance analysis, financial planning, and data-driven farming decisions.",
    emoji: "📊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://granular.ag/?via=aiwebtools",
    imageUrl: granularHero,
    tags: ["farm analytics", "crop performance", "financial planning", "data-driven farming", "agribusiness"],
    category: "AI Agriculture Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Satellite,
    title: "Farmers Edge",
    description: "AI-driven precision agriculture platform with satellite imagery, weather data, and predictive analytics for optimized crop management.",
    emoji: "🛰️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.farmersedge.ca/?via=aiwebtools",
    imageUrl: farmersEdgeHero,
    tags: ["precision agriculture", "satellite imagery", "weather prediction", "crop optimization", "predictive analytics"],
    category: "AI Agriculture Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Cloud,
    title: "Climate FieldView",
    description: "Digital farming platform by Bayer using AI for field mapping, yield analysis, and prescription planting recommendations.",
    emoji: "☁️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.climate.com/fieldview?via=aiwebtools",
    imageUrl: climateFieldviewHero,
    tags: ["digital farming", "yield analysis", "field mapping", "prescription planting", "crop insights"],
    category: "AI Agriculture Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: TrendingUp,
    title: "Cropio",
    description: "AI satellite-based field monitoring and crop management system with weather forecasting and vegetation analysis for smart farming.",
    emoji: "📈",
    color: "from-green-500 to-yellow-600",
    directUrl: "https://about.cropio.com/?via=aiwebtools",
    imageUrl: cropioHero,
    tags: ["satellite monitoring", "crop management", "weather forecasting", "vegetation analysis", "smart farming"],
    category: "AI Agriculture Tools",
    rating: 4.3,
    totalVotes: 2765
  },
  {
    icon: MapPin,
    title: "Taranis",
    description: "AI-powered crop intelligence platform using aerial imagery and deep learning to detect early crop threats and optimize yields.",
    emoji: "🗺️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.taranis.ag/?via=aiwebtools",
    imageUrl: taranisHero,
    tags: ["crop intelligence", "aerial imagery", "threat detection", "yield optimization", "deep learning"],
    category: "AI Agriculture Tools",
    rating: 4.4,
    totalVotes: 3087
  }
];
