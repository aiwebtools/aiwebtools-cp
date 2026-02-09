import { Tool } from "@/types/tools";
import { MessageSquare, Headphones, Bot, Sparkles, Users } from "lucide-react";
import intercomAiHero from "@/assets/tools/intercom-ai-hero.jpg";
import zendeskAiHero from "@/assets/tools/zendesk-ai-hero.jpg";
import adaSupportHero from "@/assets/tools/ada-support-hero.jpg";
import kustomerHero from "@/assets/tools/kustomer-hero.jpg";
import freshdeskAiHero from "@/assets/tools/freshdesk-ai-hero.jpg";

export const aiCustomerSupportTools: Tool[] = [
  {
    icon: MessageSquare,
    title: "Intercom AI",
    description: "AI-powered customer support platform with intelligent chatbots, automated responses, and personalized customer engagement. Resolve tickets faster with AI assistance.",
    emoji: "💬",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.intercom.com/?via=aiwebtools",
    imageUrl: intercomAiHero,
    tags: ["customer support", "chatbot", "AI automation", "live chat", "customer engagement", "helpdesk", "Support Agent", "agent"],
    category: "AI Customer Support",
    rating: 4.8,
    totalVotes: 9234
  },
  {
    icon: Headphones,
    title: "Zendesk AI",
    description: "AI-powered customer service platform with intelligent ticket routing, automated responses, and advanced analytics. Enhance support efficiency with machine learning.",
    emoji: "🎧",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.zendesk.com/?via=aiwebtools",
    imageUrl: zendeskAiHero,
    tags: ["customer support", "helpdesk", "AI automation", "ticket management", "customer service", "support analytics", "Support Agent", "agent"],
    category: "AI Customer Support",
    rating: 4.7,
    totalVotes: 12456
  },
  {
    icon: Bot,
    title: "Ada",
    description: "AI-powered customer service automation platform. Build intelligent chatbots that handle complex queries, provide instant answers, and scale support operations.",
    emoji: "🤖",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.ada.cx/?via=aiwebtools",
    imageUrl: adaSupportHero,
    tags: ["chatbot", "AI automation", "customer support", "conversational AI", "self-service", "support automation", "Support Agent", "agent"],
    category: "AI Customer Support",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: Sparkles,
    title: "Kustomer",
    description: "AI-driven customer service CRM with intelligent routing, automated workflows, and omnichannel support. Deliver personalized experiences at scale.",
    emoji: "✨",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.kustomer.com/?via=aiwebtools",
    imageUrl: kustomerHero,
    tags: ["CRM", "customer support", "AI automation", "omnichannel", "customer service", "workflow automation", "Support Agent", "agent"],
    category: "AI Customer Support",
    rating: 4.7,
    totalVotes: 6234
  },
  {
    icon: Users,
    title: "Freshdesk AI",
    description: "AI-powered helpdesk with smart ticket assignment, predictive support, and automated responses. Streamline customer support with intelligent automation.",
    emoji: "👥",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://freshdesk.com/?via=aiwebtools",
    imageUrl: freshdeskAiHero,
    tags: ["helpdesk", "customer support", "AI automation", "ticket management", "predictive support", "support analytics", "Support Agent", "agent"],
    category: "AI Customer Support",
    rating: 4.6,
    totalVotes: 7891
  }
];
