import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Phone, 
  Video, 
  Mail, 
  Users,
  Mic,
  Share2,
  Calendar,
  Bell,
  Globe
} from "lucide-react";

import nucleusHero from "@/assets/tools/nucleus-ai-hero.jpg";
import blandHero from "@/assets/tools/bland-ai-hero.jpg";
import vapiHero from "@/assets/tools/vapi-ai-hero.jpg";
import synthflowHero from "@/assets/tools/synthflow-hero.jpg";
import aircallHero from "@/assets/tools/aircall-ai-hero.jpg";
import outreachHero from "@/assets/tools/outreach-io-hero.jpg";
import salesloftHero from "@/assets/tools/salesloft-hero.jpg";
import apolloHero from "@/assets/tools/apollo-io-hero.jpg";
import gongHero from "@/assets/tools/gong-io-hero.jpg";
import chorusHero from "@/assets/tools/chorus-hero.jpg";
import clayHero from "@/assets/tools/clay-hero.jpg";
import instantlyHero from "@/assets/tools/instantly-ai-hero.jpg";
import lemlistHero from "@/assets/tools/lemlist-hero.jpg";
import smartleadHero from "@/assets/tools/smartlead-hero.jpg";

export const communicationTools: Tool[] = [
  {
    icon: Phone,
    title: "Nucleus AI Inbound Call Agents Platform",
    description: "Advanced AI-powered inbound call handling platform that automates customer service, lead qualification, and appointment scheduling. Nucleus AI provides intelligent call routing, real-time sentiment analysis, and seamless CRM integration for businesses looking to enhance their phone communication capabilities.",
    emoji: "📞",
    color: "from-blue-500 to-purple-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://nucleus.ai/?via=aiwebtools",
    imageUrl: nucleusHero,
    tags: ["Voice Agent", "phone agents", "call center", "inbound calls", "customer service", "ai phone system", "agent"],
    rating: 4.7,
    totalVotes: 1890
  },
  {
    icon: Phone,
    title: "Bland AI",
    description: "Build AI phone agents that can make and receive calls with human-like conversation abilities. Perfect for appointment scheduling, customer support, lead qualification, and outbound sales campaigns.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://bland.ai/?via=aiwebtools",
    imageUrl: blandHero,
    tags: ["Voice Agent", "phone agents", "voice ai", "outbound calls", "appointment scheduling", "sales calls", "agent"],
    rating: 4.6,
    totalVotes: 1654
  },
  {
    icon: Mic,
    title: "Vapi AI",
    description: "Voice AI platform for building conversational phone agents. Create AI assistants that can handle complex phone conversations, integrate with your systems, and provide 24/7 customer support.",
    emoji: "🎙️",
    color: "from-purple-500 to-pink-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://vapi.ai/?via=aiwebtools",
    imageUrl: vapiHero,
    tags: ["Voice Agent", "voice ai", "phone automation", "conversational ai", "call handling", "voice assistants", "agent"],
    rating: 4.5,
    totalVotes: 1423
  },
  {
    icon: Mic,
    title: "Synthflow",
    description: "No-code platform for building AI voice assistants and phone agents. Create sophisticated voice workflows for customer support, lead generation, and appointment booking without technical expertise.",
    emoji: "🔧",
    color: "from-cyan-500 to-blue-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://synthflow.ai/?via=aiwebtools",
    imageUrl: synthflowHero,
    tags: ["Voice Agent", "no-code", "voice assistants", "phone automation", "workflow builder", "voice ai", "agent"],
    rating: 4.3,
    totalVotes: 1156
  },
  {
    icon: Phone,
    title: "Aircall AI",
    description: "Cloud-based phone system with integrated AI features for call analytics, sentiment analysis, and automated call routing. Enhance your team's communication with intelligent call management.",
    emoji: "☁️",
    color: "from-blue-500 to-green-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://aircall.io/?via=aiwebtools",
    imageUrl: aircallHero,
    tags: ["cloud phone", "call analytics", "call routing", "team communication", "phone system"],
    rating: 4.5,
    totalVotes: 2134
  },
  {
    icon: Mail,
    title: "Outreach.io",
    description: "AI-powered sales engagement platform that automates outbound communication across email, phone, and social channels. Streamline your sales outreach with intelligent sequencing and personalization.",
    emoji: "📧",
    color: "from-indigo-500 to-purple-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://outreach.io/?via=aiwebtools",
    imageUrl: outreachHero,
    tags: ["sales outreach", "email automation", "sales engagement", "multi-channel", "lead generation"],
    rating: 4.6,
    totalVotes: 3245
  },
  {
    icon: Share2,
    title: "SalesLoft",
    description: "Revenue intelligence platform with AI-powered communication tools for sales teams. Automate outreach, track engagement, and optimize sales conversations across multiple channels.",
    emoji: "💼",
    color: "from-yellow-500 to-orange-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://salesloft.com/?via=aiwebtools",
    imageUrl: salesloftHero,
    tags: ["sales automation", "revenue intelligence", "outreach automation", "sales communication", "crm integration"],
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Globe,
    title: "Apollo.io",
    description: "All-in-one sales intelligence platform with AI-powered prospecting, outreach automation, and communication tools. Find leads, verify contacts, and automate personalized outreach campaigns.",
    emoji: "🌐",
    color: "from-teal-500 to-blue-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://apollo.io/?via=aiwebtools",
    imageUrl: apolloHero,
    tags: ["sales intelligence", "prospecting", "outreach automation", "lead generation", "contact database"],
    rating: 4.4,
    totalVotes: 2567
  },
  {
    icon: MessageSquare,
    title: "Gong.io",
    description: "Revenue intelligence platform that analyzes sales calls, emails, and meetings to provide AI-powered insights. Improve your team's communication effectiveness and close more deals.",
    emoji: "🎯",
    color: "from-purple-500 to-blue-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://gong.io/?via=aiwebtools",
    imageUrl: gongHero,
    tags: ["revenue intelligence", "call analysis", "sales insights", "conversation analytics", "sales coaching"],
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Video,
    title: "Chorus by ZoomInfo",
    description: "Conversation intelligence platform that records, transcribes, and analyzes sales calls to provide actionable insights. Enhance your sales communication with AI-powered conversation analytics.",
    emoji: "📹",
    color: "from-green-500 to-teal-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://chorus.ai/?via=aiwebtools",
    imageUrl: chorusHero,
    tags: ["conversation intelligence", "call recording", "sales analytics", "meeting insights", "sales training"],
    rating: 4.5,
    totalVotes: 2234
  },
  {
    icon: Users,
    title: "Clay",
    description: "AI-powered data enrichment and outreach platform that helps you find prospects, enrich contact data, and automate personalized outreach campaigns at scale.",
    emoji: "👥",
    color: "from-pink-500 to-purple-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://clay.com/?via=aiwebtools",
    imageUrl: clayHero,
    tags: ["data enrichment", "prospect research", "outreach automation", "lead generation", "sales automation"],
    rating: 4.6,
    totalVotes: 1876
  },
  {
    icon: Mail,
    title: "Instantly.ai",
    description: "Cold email automation platform with AI-powered personalization and deliverability optimization. Scale your outbound email campaigns while maintaining high deliverability rates.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://instantly.ai/?via=aiwebtools",
    imageUrl: instantlyHero,
    tags: ["cold email", "email automation", "deliverability", "outreach campaigns", "email marketing"],
    rating: 4.4,
    totalVotes: 1654
  },
  {
    icon: Share2,
    title: "Lemlist",
    description: "Multi-channel outreach platform with AI-powered personalization for email, LinkedIn, and phone outreach. Create engaging campaigns that convert prospects into customers.",
    emoji: "🚀",
    color: "from-orange-500 to-pink-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://lemlist.com/?via=aiwebtools",
    imageUrl: lemlistHero,
    tags: ["multi-channel outreach", "email campaigns", "linkedin automation", "personalization", "sales outreach"],
    rating: 4.3,
    totalVotes: 1432
  },
  {
    icon: Mail,
    title: "Smartlead",
    description: "AI-powered cold email platform with unlimited mailboxes and advanced deliverability features. Scale your outbound email campaigns while protecting your sender reputation.",
    emoji: "📬",
    color: "from-green-500 to-blue-600",
    category: "Communication & Collaboration AI Tools",
    directUrl: "https://smartlead.ai/?via=aiwebtools",
    imageUrl: smartleadHero,
    tags: ["cold email", "unlimited mailboxes", "email deliverability", "outbound campaigns", "email warming"],
    rating: 4.5,
    totalVotes: 1789
  }
];
