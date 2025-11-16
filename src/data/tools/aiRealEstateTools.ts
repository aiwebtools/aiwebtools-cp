import { Tool } from "@/types/tools";
import { Home, Building, MapPin, TrendingUp, Search, DollarSign } from "lucide-react";

export const aiRealEstateTools: Tool[] = [
  {
    icon: Home,
    title: "Zillow AI",
    description: "AI-powered real estate platform with Zestimate home valuations, market trend analysis, and intelligent property recommendations. Find homes, estimate values, and research neighborhoods.",
    emoji: "🏠",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.zillow.com/?via=aiwebtools",
    tags: ["real estate", "home valuation", "property search", "market analysis", "Zestimate", "housing market"],
    category: "AI Real Estate",
    rating: 4.7,
    totalVotes: 28934
  },
  {
    icon: Building,
    title: "Redfin AI",
    description: "AI-enhanced real estate search with instant home valuations, market insights, and personalized recommendations. Tour homes virtually and get expert agent support.",
    emoji: "🏢",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.redfin.com/?via=aiwebtools",
    tags: ["real estate", "property search", "home valuation", "virtual tours", "market insights", "real estate agent"],
    category: "AI Real Estate",
    rating: 4.6,
    totalVotes: 19876
  },
  {
    icon: MapPin,
    title: "Compass AI",
    description: "AI-powered luxury real estate platform with predictive analytics, smart search, and exclusive listings. Advanced property intelligence for buyers and sellers.",
    emoji: "🧭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.compass.com/?via=aiwebtools",
    tags: ["luxury real estate", "property search", "predictive analytics", "exclusive listings", "smart search", "property intelligence"],
    category: "AI Real Estate",
    rating: 4.5,
    totalVotes: 9876
  },
  {
    icon: TrendingUp,
    title: "Reonomy",
    description: "AI-powered commercial real estate intelligence platform. Access property data, ownership information, market trends, and investment opportunities with deep analytics.",
    emoji: "📊",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.reonomy.com/?via=aiwebtools",
    tags: ["commercial real estate", "property data", "market intelligence", "investment analysis", "CRE", "property insights"],
    category: "AI Real Estate",
    rating: 4.6,
    totalVotes: 6789
  },
  {
    icon: Search,
    title: "Realtor.com AI",
    description: "AI-enhanced property search with real-time listings, market trends, and personalized recommendations. Find homes, compare prices, and connect with local agents.",
    emoji: "🔍",
    color: "from-blue-600 to-cyan-700",
    directUrl: "https://www.realtor.com/?via=aiwebtools",
    tags: ["real estate", "property search", "MLS listings", "market trends", "home finder", "real-time data"],
    category: "AI Real Estate",
    rating: 4.5,
    totalVotes: 16234
  },
  {
    icon: DollarSign,
    title: "Opendoor",
    description: "AI-powered home buying and selling platform with instant offers, transparent pricing, and seamless transactions. Skip traditional listings and sell your home in days.",
    emoji: "💰",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.opendoor.com/?via=aiwebtools",
    tags: ["iBuying", "instant offers", "home selling", "real estate", "quick sale", "automated valuation"],
    category: "AI Real Estate",
    rating: 4.4,
    totalVotes: 11234
  }
];
