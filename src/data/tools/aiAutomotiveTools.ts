
import { Tool } from "@/types/tools";
import { 
  Car, 
  Search, 
  TrendingUp, 
  DollarSign, 
  CheckCircle,
  MapPin
} from "lucide-react";

import cargurusHero from "@/assets/tools/cargurus-hero.jpg";
import carvanaHero from "@/assets/tools/carvana-hero.jpg";
import autotraderHero from "@/assets/tools/autotrader-hero.jpg";
import truecarHero from "@/assets/tools/truecar-hero.jpg";
import edmundsHero from "@/assets/tools/edmunds-hero.jpg";
import carsComHero from "@/assets/tools/cars-com-hero.jpg";

export const aiAutomotiveTools: Tool[] = [
  {
    icon: Search,
    title: "CarGurus AI",
    description: "AI-powered car shopping platform analyzing millions of listings to show fair pricing, dealer ratings, and smart recommendations.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.cargurus.com/?via=aiwebtools",
    imageUrl: cargurusHero,
    tags: ["car shopping", "price analysis", "dealer ratings", "car listings", "fair pricing"],
    category: "AI Automotive Tools",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Car,
    title: "Carvana AI",
    description: "AI-enhanced online car buying platform with virtual tours, instant financing, and home delivery for hassle-free vehicle purchases.",
    emoji: "🚗",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.carvana.com/?via=aiwebtools",
    imageUrl: carvanaHero,
    tags: ["online car buying", "virtual tours", "instant financing", "home delivery", "used cars"],
    category: "AI Automotive Tools",
    rating: 4.4,
    totalVotes: 4567
  },
  {
    icon: TrendingUp,
    title: "AutoTrader AI",
    description: "Comprehensive AI car marketplace with smart search filters, price predictions, and dealer inventory analysis for informed buying.",
    emoji: "📈",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.autotrader.com/?via=aiwebtools",
    imageUrl: autotraderHero,
    tags: ["car marketplace", "smart search", "price predictions", "dealer inventory", "vehicle research"],
    category: "AI Automotive Tools",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: DollarSign,
    title: "TrueCar",
    description: "AI-driven car pricing platform showing what others paid, guaranteed savings, and certified dealer network for transparent buying.",
    emoji: "💰",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.truecar.com/?via=aiwebtools",
    imageUrl: truecarHero,
    tags: ["car pricing", "guaranteed savings", "price transparency", "certified dealers", "car buying"],
    category: "AI Automotive Tools",
    rating: 4.3,
    totalVotes: 3876
  },
  {
    icon: CheckCircle,
    title: "Edmunds AI",
    description: "AI automotive research platform with expert reviews, pricing analysis, and smart comparison tools for vehicle shopping.",
    emoji: "✅",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.edmunds.com/?via=aiwebtools",
    imageUrl: edmundsHero,
    tags: ["automotive research", "expert reviews", "pricing analysis", "comparison tools", "car guides"],
    category: "AI Automotive Tools",
    rating: 4.5,
    totalVotes: 3987
  },
  {
    icon: MapPin,
    title: "Cars.com AI",
    description: "AI-powered automotive marketplace with local inventory search, dealer connections, and personalized car recommendations.",
    emoji: "📍",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.cars.com/?via=aiwebtools",
    imageUrl: carsComHero,
    tags: ["automotive marketplace", "local inventory", "dealer connections", "personalized recommendations", "car search"],
    category: "AI Automotive Tools",
    rating: 4.4,
    totalVotes: 3234
  }
];
