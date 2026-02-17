import { Tool } from "@/types/tools";
import { 
  Mail, 
  Target, 
  BarChart3, 
  Search, 
  Globe
} from "lucide-react";

import mailchimpHero from "@/assets/tools/mailchimp-hero.jpg";
import hubspotHero from "@/assets/tools/hubspot-hero.jpg";
import googleAnalyticsHero from "@/assets/tools/google-analytics-hero.jpg";
import semrushHero from "@/assets/tools/semrush-hero.jpg";
import ahrefsHero from "@/assets/tools/ahrefs-hero.jpg";

export const marketingTools: Tool[] = [
  {
    icon: Mail,
    title: "Mailchimp",
    description: "Email marketing platform with automation, analytics, and audience management. Create campaigns, newsletters, and automated sequences.",
    emoji: "📧",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://mailchimp.com/",
    imageUrl: mailchimpHero,
    tags: ["email marketing", "automation", "newsletters", "campaigns", "analytics"],
    category: "Marketing & Analytics",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Target,
    title: "HubSpot",
    description: "Comprehensive marketing, sales, and service platform with CRM, email marketing, lead generation, and analytics tools.",
    emoji: "🎯",
    color: "from-orange-500 to-red-600",
    directUrl: "https://hubspot.com/",
    imageUrl: hubspotHero,
    tags: ["CRM", "marketing automation", "lead generation", "sales", "analytics"],
    category: "Marketing & Analytics",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: Search,
    title: "Google Analytics",
    description: "Web analytics platform that tracks and reports website traffic, user behavior, and conversion data for optimization.",
    emoji: "📊",
    color: "from-blue-500 to-green-600",
    directUrl: "https://analytics.google.com/",
    imageUrl: googleAnalyticsHero,
    tags: ["web analytics", "traffic analysis", "conversion tracking", "SEO"],
    category: "Marketing & Analytics",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Globe,
    title: "SEMrush",
    description: "Digital marketing toolkit for SEO, PPC, content marketing, and competitive research. Analyze keywords and track rankings.",
    emoji: "🌐",
    color: "from-green-500 to-blue-600",
    directUrl: "https://semrush.com/",
    imageUrl: semrushHero,
    tags: ["SEO", "keyword research", "competitive analysis", "PPC", "content marketing"],
    category: "Marketing & Analytics",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: BarChart3,
    title: "Ahrefs",
    description: "SEO toolset for backlink analysis, keyword research, competitor analysis, and rank tracking to improve search visibility.",
    emoji: "📈",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://ahrefs.com/",
    imageUrl: ahrefsHero,
    tags: ["SEO", "backlink analysis", "keyword research", "rank tracking"],
    category: "Marketing & Analytics",
    rating: 4.5,
    totalVotes: 3789
  }
];
