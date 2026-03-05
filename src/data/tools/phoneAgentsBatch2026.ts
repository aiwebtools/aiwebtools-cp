import { Tool } from "@/types/tools";
import { Phone, Bot, Users, Zap, Globe } from "lucide-react";

import alowareHero from "@/assets/tools/aloware-hero.jpg";
import nooksHero from "@/assets/tools/nooks-hero.jpg";
import squadstackHero from "@/assets/tools/squadstack-hero.jpg";
import koncertHero from "@/assets/tools/koncert-hero.jpg";
import orumHero from "@/assets/tools/orum-hero.jpg";
import salesapeHero from "@/assets/tools/salesape-hero.jpg";
import nlpearlHero from "@/assets/tools/nlpearl-hero.jpg";
import dialzaraHero from "@/assets/tools/dialzara-hero.jpg";
import slangAiHero from "@/assets/tools/slang-ai-hero.jpg";
import rosieHero from "@/assets/tools/rosie-hero.jpg";
import smithAiHero from "@/assets/tools/smith-ai-hero.jpg";
import myAiFrontDeskHero from "@/assets/tools/my-ai-front-desk-hero.jpg";
import leapingAiHero from "@/assets/tools/leaping-ai-hero.jpg";
import callboticsHero from "@/assets/tools/callbotics-hero.jpg";
import alloHero from "@/assets/tools/allo-hero.jpg";

export const phoneAgentsBatch2026: Tool[] = [
  {
    icon: Phone, title: "Aloware",
    description: "Deep native integration with HubSpot and Salesforce. Triggers AI phone calls based on CRM actions like new lead form fills instantly. Smart sales dialer with CRM-driven automation.",
    emoji: "📱", color: "from-green-500 to-blue-600",
    directUrl: "https://aloware.com/?via=aiwebtools", imageUrl: alowareHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "HubSpot", "Salesforce", "CRM", "sales dialer", "outbound calls", "agent"], category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Users, title: "Nooks",
    description: "An 'AI Dialer' that combines a phone agent with a virtual sales floor, allowing human reps to jump in mid-call. Parallel dialing with real-time coaching and collaboration.",
    emoji: "🏢", color: "from-blue-500 to-orange-500",
    directUrl: "https://nooks.ai/?via=aiwebtools", imageUrl: nooksHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "virtual sales floor", "AI dialer", "parallel dialing", "sales coaching", "agent"], category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Phone, title: "SquadStack AI",
    description: "Focuses on 'Outcome-Driven' calling, prioritizing high connectivity and actual sales conversions over just making calls. Results-first AI telecalling platform.",
    emoji: "📊", color: "from-purple-500 to-green-500",
    directUrl: "https://squadstack.com/?via=aiwebtools", imageUrl: squadstackHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "outcome-driven", "sales conversions", "telecalling", "connectivity", "agent"], category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Phone, title: "Koncert",
    description: "A multi-channel dialer that uses AI to detect exactly when a human answers, filtering out 100% of voicemails for your reps. Maximum live connection rates.",
    emoji: "🎯", color: "from-red-500 to-blue-700",
    directUrl: "https://koncert.com/?via=aiwebtools", imageUrl: koncertHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "multi-channel dialer", "voicemail detection", "live connections", "sales", "agent"], category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Zap, title: "Orum",
    description: "The pioneer of parallel dialing—calls 10 lines at once and bridges the human rep to the first person who picks up. Maximizes sales team productivity by 5x.",
    emoji: "⚡", color: "from-teal-500 to-purple-600",
    directUrl: "https://orum.com/?via=aiwebtools", imageUrl: orumHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "parallel dialing", "sales productivity", "outbound", "multi-line", "agent"], category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Bot, title: "SalesAPE",
    description: "A self-training sales agent that gets better at handling objections based on its successful closes. Machine learning-powered sales conversations that improve over time.",
    emoji: "🦍", color: "from-orange-500 to-black",
    directUrl: "https://salesape.ai/?via=aiwebtools", imageUrl: salesapeHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "self-training", "objection handling", "sales AI", "machine learning", "agent"], category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Phone, title: "NLPearl",
    description: "Built specifically for B2C sales (real estate, solar, insurance) where empathy and tone are critical for trust. Emotionally intelligent voice agent for high-trust industries.",
    emoji: "💎", color: "from-blue-300 to-blue-600",
    directUrl: "https://nlpearl.ai/?via=aiwebtools", imageUrl: nlpearlHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "B2C sales", "real estate", "insurance", "empathy", "trust", "agent"], category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Phone, title: "Dialzara",
    description: "Pure SMB focus at $29/mo. Sets up in 15 minutes to answer phones for local service businesses. The most affordable AI receptionist for small businesses.",
    emoji: "📞", color: "from-green-500 to-green-700",
    directUrl: "https://dialzara.com/?via=aiwebtools", imageUrl: dialzaraHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "SMB", "AI receptionist", "affordable", "local business", "inbound calls", "agent"], category: "Phone & Voice Agents", rating: 4.3,
  },
  {
    icon: Phone, title: "Slang.ai",
    description: "The leader for restaurants. Integrates with Resy and OpenTable to take reservations over the phone automatically. Purpose-built AI phone agent for the hospitality industry.",
    emoji: "🍽️", color: "from-red-500 to-amber-500",
    directUrl: "https://slang.ai/?via=aiwebtools", imageUrl: slangAiHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "restaurant", "reservations", "OpenTable", "Resy", "hospitality", "agent"], category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Phone, title: "Rosie",
    description: "Optimized for Home Services (Plumbers/HVAC). Can tell the difference between a real emergency and a general inquiry. Smart call triage for service businesses.",
    emoji: "🏠", color: "from-pink-400 to-blue-400",
    directUrl: "https://heyrosie.com/?via=aiwebtools", imageUrl: rosieHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "home services", "plumber", "HVAC", "emergency triage", "inbound calls", "agent"], category: "Phone & Voice Agents", rating: 4.3,
  },
  {
    icon: Users, title: "Smith.ai",
    description: "A hybrid AI + human receptionist service. If the AI gets confused, a real human receptionist jumps in and takes over. The safety net for critical business calls.",
    emoji: "🤝", color: "from-blue-700 to-amber-500",
    directUrl: "https://smith.ai/?via=aiwebtools", imageUrl: smithAiHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "hybrid", "human fallback", "receptionist", "business calls", "inbound", "agent"], category: "Phone & Voice Agents", rating: 4.5,
  },
  {
    icon: Phone, title: "My AI Front Desk",
    description: "Specialized for medical and dental offices with strict HIPAA-compliant scheduling. AI receptionist designed for healthcare practices that need regulatory compliance.",
    emoji: "🏥", color: "from-blue-500 to-blue-700",
    directUrl: "https://myaifrontdesk.com/?via=aiwebtools", imageUrl: myAiFrontDeskHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "HIPAA", "medical", "dental", "healthcare", "scheduling", "compliance", "agent"], category: "Phone & Voice Agents", rating: 4.4,
  },
  {
    icon: Bot, title: "Leaping AI",
    description: "Specialized in relieving call center fatigue by automating 100% of repetitive scheduling calls. Free your human agents to handle only complex, high-value interactions.",
    emoji: "🦘", color: "from-green-500 to-purple-500",
    directUrl: "https://leaping.ai/?via=aiwebtools", imageUrl: leapingAiHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "scheduling automation", "call center", "repetitive calls", "agent relief", "agent"], category: "Phone & Voice Agents", rating: 4.3,
  },
  {
    icon: Phone, title: "CallBotics",
    description: "Mid-market champion handling end-to-end resolution for billing and e-commerce support. AI phone agent that resolves issues completely without human escalation.",
    emoji: "🤖", color: "from-blue-500 to-orange-500",
    directUrl: "https://callbotics.ai/?via=aiwebtools", imageUrl: callboticsHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "billing support", "e-commerce", "mid-market", "end-to-end resolution", "agent"], category: "Phone & Voice Agents", rating: 4.3,
  },
  {
    icon: Globe, title: "Allo",
    description: "Full phone system + AI receptionist with simple, flat-rate pricing. Complete business phone solution with built-in AI answering and call routing.",
    emoji: "📱", color: "from-cyan-500 to-blue-700",
    directUrl: "https://withallo.com/?via=aiwebtools", imageUrl: alloHero,
    tags: ["Voice Agent", "Phone & Voice Agents", "phone agents", "phone system", "AI receptionist", "flat-rate", "call routing", "business phone", "agent"], category: "Phone & Voice Agents", rating: 4.3,
  },
];
