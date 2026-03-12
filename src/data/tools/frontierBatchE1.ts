import { Tool } from "@/types/tools";
import { Bot, Brain, Code, Shield, Users, Globe, Search, BarChart3, Phone, Cpu, Workflow, DollarSign, Briefcase, Building, Wrench } from "lucide-react";

import artisanHero from "@/assets/tools/artisan-ai-hero.jpg";
import elevenxHero from "@/assets/tools/11x-ai-hero.jpg";
import vendrHero from "@/assets/tools/vendr-hero.jpg";
import skyvernHero from "@/assets/tools/skyvern-hero.jpg";
import mollyHero from "@/assets/tools/molly-ai-hero.jpg";
import linkupHero from "@/assets/tools/linkup-ai-hero.jpg";
import nurixHero from "@/assets/tools/nurix-ai-hero.jpg";
import polymorphicHero from "@/assets/tools/polymorphic-hero.jpg";
import cognizantHero from "@/assets/tools/cognizant-neuro-hero.jpg";
import markovateHero from "@/assets/tools/markovate-hero.jpg";
import jetbrainsHero from "@/assets/tools/jetbrains-junie-hero.jpg";
import phidataHero from "@/assets/tools/phidata-hero.jpg";
import superagentHero from "@/assets/tools/superagent-hero.jpg";
import snowflakeHero from "@/assets/tools/snowflake-cortex-hero.jpg";
import persynioHero from "@/assets/tools/persynio-hero.jpg";
import overseerHero from "@/assets/tools/overseeros-hero.jpg";
import tinyfishHero from "@/assets/tools/tinyfish-hero.jpg";
import neyoxHero from "@/assets/tools/neyox-hero.jpg";
import darkMatterHero from "@/assets/tools/dark-matter-hero.jpg";
import rillaHero from "@/assets/tools/rilla-hero.jpg";

export const frontierBatchE1: Tool[] = [
  {
    icon: Users, title: "Artisan",
    description: "An 'AI Employee' named Ava who acts as a full B2B sales development representative. Automates outbound prospecting, email sequences, follow-ups, and meeting booking with human-like personalization at enterprise scale.",
    emoji: "🎨", color: "from-purple-500 to-pink-600",
    directUrl: "https://artisan.co/?via=aiwebtools", imageUrl: artisanHero,
    tags: ["AI Agents", "Sales & CRM Tools", "SDR", "B2B sales", "outbound", "prospecting", "automation", "AI employee"], category: "Sales & CRM Tools", rating: 4.6,
  },
  {
    icon: Users, title: "11x AI",
    description: "High-growth AI SDR platform featuring 'Alice,' an autonomous sales development agent that claims massive conversion improvements over human reps. Handles discovery-to-booking pipeline at superhuman speed.",
    emoji: "⚡", color: "from-red-500 to-orange-600",
    directUrl: "https://11x.ai/?via=aiwebtools", imageUrl: elevenxHero,
    tags: ["AI Agents", "Sales & CRM Tools", "SDR", "lead generation", "conversion", "sales automation", "AI employee"], category: "Sales & CRM Tools", rating: 4.5,
  },
  {
    icon: DollarSign, title: "Vendr",
    description: "An agent that reveals real-world SaaS pricing instantly for negotiation leverage. Access verified pricing benchmarks from thousands of real transactions to ensure you never overpay for software subscriptions.",
    emoji: "💰", color: "from-green-500 to-emerald-600",
    directUrl: "https://vendr.com/?via=aiwebtools", imageUrl: vendrHero,
    tags: ["AI Agents", "Business & Productivity", "SaaS pricing", "negotiation", "procurement", "cost savings", "benchmarking"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Globe, title: "Skyvern",
    description: "An autonomous browser agent that uses visual reasoning to fill out forms, navigate complex workflows, and interact with any website. No brittle CSS selectors—understands pages like a human sees them.",
    emoji: "🌐", color: "from-indigo-500 to-blue-600",
    directUrl: "https://skyvern.com/?via=aiwebtools", imageUrl: skyvernHero,
    tags: ["AI Agents", "Web Tasks Agent", "browser automation", "visual reasoning", "form filling", "web scraping", "autonomous"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Search, title: "Linkup",
    description: "A high-accuracy search API designed specifically for AI agents to query the real-time web. Returns structured, verified data that agents can act on—not raw HTML or ads.",
    emoji: "🔗", color: "from-blue-500 to-cyan-600",
    directUrl: "https://linkup.ai/?via=aiwebtools", imageUrl: linkupHero,
    tags: ["AI Agents", "search API", "real-time web", "agent infrastructure", "data retrieval", "developer tools"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Phone, title: "Nurix AI",
    description: "An autonomous agentic platform designed to turn customer service from a cost center into a proactive revenue driver. Resolves issues, upsells intelligently, and optimizes the entire support experience.",
    emoji: "📈", color: "from-blue-600 to-blue-800",
    directUrl: "https://nurix.ai/?via=aiwebtools", imageUrl: nurixHero,
    tags: ["AI Agents", "customer service", "revenue optimization", "support automation", "upselling", "autonomous"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Workflow, title: "Polymorphic AI",
    description: "A specialized agent for 'Enterprise Process' that maps and automates messy, undocumented internal workflows. Discovers hidden processes, documents them, and deploys automation autonomously.",
    emoji: "🔄", color: "from-teal-500 to-blue-600",
    directUrl: "https://polymorphic.ai/?via=aiwebtools", imageUrl: polymorphicHero,
    tags: ["AI Agents", "Business & Productivity", "process automation", "workflow mapping", "enterprise", "undocumented processes"], category: "Business & Productivity", rating: 4.3,
  },
  {
    icon: Building, title: "Cognizant Neuro",
    description: "An accelerator framework that implements governed multi-agent systems into existing enterprise data platforms without requiring a complete system overhaul. Bridges legacy IT with autonomous AI.",
    emoji: "🏢", color: "from-blue-700 to-indigo-800",
    directUrl: "https://cognizant.com/?via=aiwebtools", imageUrl: cognizantHero,
    tags: ["AI Agents", "enterprise", "multi-agent", "legacy systems", "governance", "data platforms", "digital transformation"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Bot, title: "Markovate",
    description: "A specialized agency focused on building 'applied AI' agents for fast-growing startups and mid-market firms looking to automate operational workflows. From concept to production in weeks.",
    emoji: "🚀", color: "from-orange-500 to-red-600",
    directUrl: "https://markovate.com/?via=aiwebtools", imageUrl: markovateHero,
    tags: ["AI Agents", "agency", "startups", "applied AI", "operational automation", "custom agents"], category: "AI Agents", rating: 4.3,
  },
  {
    icon: Code, title: "JetBrains Junie",
    description: "A true autonomous software developer agent embedded within IntelliJ-based IDEs. Moves beyond 'chat' to act as a full coding partner—plans, writes, tests, and refactors code independently.",
    emoji: "💻", color: "from-purple-600 to-pink-700",
    directUrl: "https://jetbrains.com/junie/?via=aiwebtools", imageUrl: jetbrainsHero,
    tags: ["AI Agents", "Coding Agent", "IDE", "IntelliJ", "autonomous developer", "code generation", "refactoring"], category: "AI Agents", rating: 4.7,
  },
  {
    icon: BarChart3, title: "Phidata",
    description: "A data-centric framework that specializes in building agents for analytics, monitoring, and live dashboards. Create autonomous data analysts that query, visualize, and report insights.",
    emoji: "📊", color: "from-blue-500 to-purple-600",
    directUrl: "https://phidata.com/?via=aiwebtools", imageUrl: phidataHero,
    tags: ["AI Agents", "Multi-Agent Framework", "data analytics", "dashboards", "monitoring", "developer framework"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Bot, title: "SuperAgent",
    description: "Y Combinator-backed AI red teaming and security testing platform. Deploys specialized attack agents against your production AI systems to surface data leaks, harmful outputs, and unwanted actions before your users encounter them. Black-box adversarial testing for AI agents.",
    emoji: "⚡", color: "from-yellow-500 to-orange-600",
    directUrl: "https://superagent.sh/?via=aiwebtools", imageUrl: superagentHero,
    tags: ["AI Security", "Red Teaming", "Adversarial Testing", "AI Safety", "Agent Security", "Y Combinator"], category: "Security & Privacy", rating: 4.4,
  },
  {
    icon: Cpu, title: "Snowflake Cortex Agents",
    description: "Agents built directly into the Snowflake data cloud that can query, analyze, and act on petabytes of structured enterprise data safely. Native integration with your data warehouse.",
    emoji: "❄️", color: "from-blue-400 to-blue-700",
    directUrl: "https://snowflake.com/cortex/?via=aiwebtools", imageUrl: snowflakeHero,
    tags: ["AI Agents", "Data & Analytics", "data cloud", "enterprise data", "SQL", "analytics", "data warehouse"], category: "Data & Analytics", rating: 4.6,
  },
  {
    icon: Globe, title: "OverseerOS",
    description: "The 'World's First OS for Creators'—reverse-engineer any YouTube channel's strategy in seconds using autonomous research agents. Analyze content performance, audience demographics, and growth patterns.",
    emoji: "👁️", color: "from-red-500 to-red-700",
    directUrl: "https://overseeros.com/?via=aiwebtools", imageUrl: overseerHero,
    tags: ["AI Agents", "content creation", "YouTube analytics", "creator tools", "strategy", "audience analysis"], category: "Marketing & Sales", rating: 4.3,
  },
  {
    icon: Search, title: "TinyFish AI",
    description: "A browser-based agent that avoids 'brittle scripts' by using visual reasoning to check inventory, track prices, and monitor websites even if layouts change. Never breaks from UI updates.",
    emoji: "🐟", color: "from-cyan-500 to-blue-600",
    directUrl: "https://tinyfish.ai/?via=aiwebtools", imageUrl: tinyfishHero,
    tags: ["AI Agents", "Web Tasks Agent", "visual reasoning", "price tracking", "inventory", "web monitoring"], category: "AI Agents", rating: 4.2,
  },
  {
    icon: Phone, title: "Neyox AI Voice Agent",
    description: "A specialized lead-qualification voice agent for businesses that handles real-time call handling, bookings, and lead scoring. Converts inbound calls into qualified pipeline autonomously.",
    emoji: "📱", color: "from-green-500 to-teal-600",
    directUrl: "https://neyox.com/?via=aiwebtools", imageUrl: neyoxHero,
    tags: ["AI Agents", "Voice Agent", "lead qualification", "call handling", "bookings", "sales automation"], category: "Sales & CRM Tools", rating: 4.3,
  },
  {
    icon: BarChart3, title: "Rilla",
    description: "The leader in Conversation Intelligence for offline commerce. Uses agents to analyze in-person sales and service interactions, coaching reps to close more deals based on real conversation data.",
    emoji: "🎙️", color: "from-orange-500 to-red-500",
    directUrl: "https://rilla.com/?via=aiwebtools", imageUrl: rillaHero,
    tags: ["AI Agents", "conversation intelligence", "sales coaching", "offline commerce", "in-person analytics", "revenue optimization"], category: "Sales & CRM Tools", rating: 4.4,
  },
];
