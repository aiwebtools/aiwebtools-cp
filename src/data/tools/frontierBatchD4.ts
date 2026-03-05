import { Tool } from "@/types/tools";
import { Globe, Code, BarChart3, Users, Cpu, Building2, Factory, ShoppingCart, Brain, Wrench, Layers, Rocket } from "lucide-react";

import azumoHero from "@/assets/tools/azumo-hero.jpg";
import diffcoHero from "@/assets/tools/diffco-hero.jpg";
import geomotivHero from "@/assets/tools/geomotiv-hero.jpg";
import digitalScientistsHero from "@/assets/tools/digital-scientists-hero.jpg";
import eleksHero from "@/assets/tools/eleks-hero.jpg";
import techanicHero from "@/assets/tools/techanic-hero.jpg";
import a3logicsHero from "@/assets/tools/a3logics-hero.jpg";
import emerlineHero from "@/assets/tools/emerline-hero.jpg";
import kanerikaHero from "@/assets/tools/kanerika-hero.jpg";
import scandiwebHero from "@/assets/tools/scandiweb-hero.jpg";
import intuzHero from "@/assets/tools/intuz-hero.jpg";
import solulabHero from "@/assets/tools/solulab-hero.jpg";

export const frontierBatchD4: Tool[] = [
  {
    icon: Globe, title: "Azumo",
    description: "A boutique AI agency that builds production-grade agents for computer vision and real-time operational requirements. Specializes in custom CV solutions and edge-deployed autonomous systems.",
    emoji: "👁️", color: "from-blue-600 to-teal-600",
    directUrl: "https://azumo.co/?via=aiwebtools", imageUrl: azumoHero,
    tags: ["AI Agents", "Developer Tools", "computer vision", "real-time ops", "custom agents", "boutique agency", "AI Agency"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Rocket, title: "Diffco",
    description: "Focuses on 'High-Velocity' agent implementation, specifically for product teams working under extreme deadlines. Rapid prototyping and deployment of AI agents for fast-moving startups.",
    emoji: "🚀", color: "from-orange-500 to-red-600",
    directUrl: "https://diffco.com/?via=aiwebtools", imageUrl: diffcoHero,
    tags: ["AI Agents", "Developer Tools", "rapid prototyping", "high-velocity", "product teams", "startup agents", "AI Agency"], category: "AI Agents", rating: 4.3,
  },
  {
    icon: BarChart3, title: "Geomotiv",
    description: "Specializes in 'MarTech' agents that optimize ad-buying and content distribution across global markets. AI-powered marketing technology for international campaign orchestration.",
    emoji: "🌍", color: "from-green-500 to-yellow-500",
    directUrl: "https://geomotiv.com/?via=aiwebtools", imageUrl: geomotivHero,
    tags: ["Marketing & Sales", "AI Agents", "MarTech", "ad optimization", "content distribution", "global marketing", "AI Agency"], category: "Marketing & Sales", rating: 4.3,
  },
  {
    icon: Building2, title: "Digital Scientists",
    description: "Leading the implementation of AI agents for the public sector, focusing on accessible citizen services. Builds government-grade AI solutions that improve civic engagement and service delivery.",
    emoji: "🏛️", color: "from-blue-500 to-blue-700",
    directUrl: "https://digitalscientists.com/?via=aiwebtools", imageUrl: digitalScientistsHero,
    tags: ["AI Agents", "Business & Productivity", "public sector", "government AI", "citizen services", "civic tech", "AI Agency"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Cpu, title: "ELEKS",
    description: "High-end MLOps agents designed to bridge the gap between 'Edge AI' hardware and cloud-based reasoning. Enterprise-grade machine learning operations for hybrid infrastructure.",
    emoji: "⚡", color: "from-purple-600 to-purple-800",
    directUrl: "https://eleks.com/?via=aiwebtools", imageUrl: eleksHero,
    tags: ["AI Agents", "Developer Tools", "MLOps", "edge AI", "cloud reasoning", "enterprise", "AI Agency"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Layers, title: "Techanic Infotech",
    description: "Specializes in 'Autonomous Ecosystems' capable of planning and orchestrating complex multi-agent business operations. End-to-end agent architecture for enterprise digital transformation.",
    emoji: "🔗", color: "from-teal-500 to-cyan-600",
    directUrl: "https://techanicinfotech.com/?via=aiwebtools", imageUrl: techanicHero,
    tags: ["AI Agents", "Business & Productivity", "multi-agent", "orchestration", "autonomous ecosystems", "enterprise", "AI Agency"], category: "AI Agents", rating: 4.3,
  },
  {
    icon: Factory, title: "A3Logics",
    description: "Builds custom 'Autonomous Workers' that manage repetitive tasks across logistics and supply chain management. AI-powered workforce automation for warehousing and distribution.",
    emoji: "📦", color: "from-blue-500 to-orange-500",
    directUrl: "https://a3logics.com/?via=aiwebtools", imageUrl: a3logicsHero,
    tags: ["AI Agents", "Business & Productivity", "logistics", "supply chain", "autonomous workers", "warehouse automation", "AI Agency"], category: "AI Agents", rating: 4.3,
  },
  {
    icon: Brain, title: "Emerline",
    description: "Specializes in 'High-Performance Agents' that use autonomous reasoning and predictive modeling for information science. Advanced AI consulting for data-intensive enterprises.",
    emoji: "🧠", color: "from-blue-700 to-gold-500",
    directUrl: "https://emerline.com/?via=aiwebtools", imageUrl: emerlineHero,
    tags: ["AI Agents", "Data & Analytics", "predictive modeling", "autonomous reasoning", "information science", "AI consulting", "AI Agency"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Wrench, title: "Kanerika",
    description: "An Austin-based firm that specializes in the orchestration of agents for manufacturing and industrial operations. Smart factory automation with AI-driven quality control and process optimization.",
    emoji: "🏭", color: "from-gray-600 to-blue-600",
    directUrl: "https://kanerika.com/?via=aiwebtools", imageUrl: kanerikaHero,
    tags: ["AI Agents", "Business & Productivity", "manufacturing", "industrial AI", "factory automation", "process optimization", "AI Agency"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: ShoppingCart, title: "scandiweb",
    description: "Focuses on AI agent development specifically for Retail and E-commerce scale-ups. Builds intelligent shopping experiences, inventory management agents, and conversion optimization systems.",
    emoji: "🛒", color: "from-white to-coral-400",
    directUrl: "https://scandiweb.com/?via=aiwebtools", imageUrl: scandiwebHero,
    tags: ["AI Agents", "Marketing & Sales", "e-commerce", "retail AI", "shopping agents", "conversion optimization", "AI Agency"], category: "Marketing & Sales", rating: 4.3,
  },
  {
    icon: Code, title: "Intuz",
    description: "A San Francisco firm providing full-cycle agent development, including the 'Memory Systems' required for long-term user context. Builds persistent AI agents that remember and evolve.",
    emoji: "💾", color: "from-purple-500 to-purple-700",
    directUrl: "https://intuz.com/?via=aiwebtools", imageUrl: intuzHero,
    tags: ["AI Agents", "Developer Tools", "memory systems", "long-term context", "full-cycle development", "persistent agents", "AI Agency"], category: "AI Agents", rating: 4.3,
  },
  {
    icon: Users, title: "SoluLab",
    description: "A developer of 'Data-Driven Decision Agents' for startups, focusing on workflow automation and engagement. Builds intelligent systems that turn raw data into actionable business strategies.",
    emoji: "📊", color: "from-blue-400 to-blue-600",
    directUrl: "https://solulab.com/?via=aiwebtools", imageUrl: solulabHero,
    tags: ["AI Agents", "Business & Productivity", "data-driven", "workflow automation", "startup agents", "decision intelligence", "AI Agency"], category: "AI Agents", rating: 4.3,
  },
];
