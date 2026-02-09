
import { Tool } from "@/types/tools";
import { 
  Plane, 
  MapPin, 
  Compass, 
  Hotel, 
  Calendar,
  TrendingDown
} from "lucide-react";

import hopperAiHero from "@/assets/tools/hopper-ai-hero.jpg";
import kayakAiHero from "@/assets/tools/kayak-ai-hero.jpg";
import skiplaggedHero from "@/assets/tools/skiplagged-hero.jpg";
import wanderlogHero from "@/assets/tools/wanderlog-hero.jpg";
import skyscannerAiHero from "@/assets/tools/skyscanner-ai-hero.jpg";
import mightyTravelsHero from "@/assets/tools/mighty-travels-hero.jpg";

export const aiTravelTourismTools: Tool[] = [
  {
    icon: Plane,
    title: "Hopper AI",
    description: "AI-powered travel app predicting flight and hotel prices with 95% accuracy, notifying you when to book for maximum savings.",
    emoji: "✈️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.hopper.com/?via=aiwebtools",
    imageUrl: hopperAiHero,
    tags: ["flight booking", "price prediction", "travel deals", "hotel booking", "AI forecasting"],
    category: "AI Travel & Tourism Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Compass,
    title: "Kayak AI",
    description: "AI-enhanced travel search engine comparing hundreds of sites to find the best deals on flights, hotels, and car rentals.",
    emoji: "🧭",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.kayak.com/?via=aiwebtools",
    imageUrl: kayakAiHero,
    tags: ["travel search", "price comparison", "flight deals", "hotel search", "trip planning"],
    category: "AI Travel & Tourism Tools",
    rating: 4.5,
    totalVotes: 6789
  },
  {
    icon: TrendingDown,
    title: "Skiplagged",
    description: "AI-powered travel platform finding hidden city ticketing and cheap flights using innovative booking strategies.",
    emoji: "📉",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://skiplagged.com/?via=aiwebtools",
    imageUrl: skiplaggedHero,
    tags: ["hidden city tickets", "cheap flights", "travel hacks", "flight deals", "budget travel"],
    category: "AI Travel & Tourism Tools",
    rating: 4.3,
    totalVotes: 3876
  },
  {
    icon: MapPin,
    title: "Wanderlog",
    description: "AI trip planner and collaborative travel itinerary organizer with automatic route optimization and expense tracking.",
    emoji: "📍",
    color: "from-green-500 to-teal-600",
    directUrl: "https://wanderlog.com/?via=aiwebtools",
    imageUrl: wanderlogHero,
    tags: ["trip planning", "itinerary", "route optimization", "collaboration", "travel organization"],
    category: "AI Travel & Tourism Tools",
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Hotel,
    title: "Skyscanner AI",
    description: "Intelligent travel search platform using AI to find flexible travel dates, multi-city routes, and best price combinations.",
    emoji: "🏨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.skyscanner.com/?via=aiwebtools",
    imageUrl: skyscannerAiHero,
    tags: ["flexible dates", "multi-city", "price alerts", "travel search", "route planning"],
    category: "AI Travel & Tourism Tools",
    rating: 4.5,
    totalVotes: 5234
  },
  {
    icon: Calendar,
    title: "Mighty Travels",
    description: "AI travel assistant finding premium flight deals, business class discounts, and personalized travel recommendations.",
    emoji: "📅",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://mightytravels.com/?via=aiwebtools",
    imageUrl: mightyTravelsHero,
    tags: ["premium deals", "business class", "personalized", "travel alerts", "luxury travel"],
    category: "AI Travel & Tourism Tools",
    rating: 4.2,
    totalVotes: 2987
  }
];
