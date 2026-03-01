import { Tool } from "@/types/tools";
import { Shield, Lock, AlertTriangle, Eye, Zap, ShieldCheck } from "lucide-react";

import darktraceHero from "@/assets/tools/darktrace-hero.jpg";
import crowdstrikeHero from "@/assets/tools/crowdstrike-hero.jpg";
import sentineloneHero from "@/assets/tools/sentinelone-hero.jpg";
import vectraHero from "@/assets/tools/vectra-hero.jpg";
import cortexXdrHero from "@/assets/tools/cortex-xdr-hero.jpg";
import cylanceHero from "@/assets/tools/cylance-hero.jpg";

export const aiCybersecurityTools: Tool[] = [
  {
    icon: Shield,
    title: "Darktrace",
    description: "AI-powered cyber defense platform using self-learning technology to detect, respond to, and neutralize cyber threats in real-time. Protects against unknown threats and zero-day attacks.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://darktrace.com/?via=aiwebtools",
    imageUrl: darktraceHero,
    tags: ["Security", "cybersecurity", "threat detection", "AI security", "zero-day protection", "autonomous response", "network security", "Cybersecurity", "Threat Detection"],
    category: "AI Cybersecurity",
    rating: 4.8,
    totalVotes: 8234
  },
  {
    icon: Lock,
    title: "CrowdStrike Falcon",
    description: "AI-native endpoint protection platform with real-time threat intelligence, behavioral analysis, and automated incident response. Cloud-delivered security for endpoints.",
    emoji: "🦅",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.crowdstrike.com/?via=aiwebtools",
    imageUrl: crowdstrikeHero,
    tags: ["Security", "endpoint security", "threat intelligence", "EDR", "incident response", "cloud security", "AI protection", "Endpoint Protection", "Threat Detection"],
    category: "AI Cybersecurity",
    rating: 4.9,
    totalVotes: 12456
  },
  {
    icon: ShieldCheck,
    title: "SentinelOne",
    description: "Autonomous AI-powered cybersecurity platform for endpoint, cloud, and identity protection. Prevent, detect, and respond to threats with machine learning and automation.",
    emoji: "⚔️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.sentinelone.com/?via=aiwebtools",
    imageUrl: sentineloneHero,
    tags: ["Security", "endpoint security", "autonomous protection", "cloud security", "threat prevention", "AI detection", "EDR", "Endpoint Protection", "Cybersecurity"],
    category: "AI Cybersecurity",
    rating: 4.8,
    totalVotes: 9876
  },
  {
    icon: Eye,
    title: "Vectra AI",
    description: "AI-driven network detection and response platform. Detect attackers in real-time across cloud, data center, and enterprise networks with behavioral analysis.",
    emoji: "👁️",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.vectra.ai/?via=aiwebtools",
    imageUrl: vectraHero,
    tags: ["Security", "network security", "threat detection", "NDR", "behavioral analysis", "cloud security", "AI monitoring", "VPN & Network Security", "Threat Detection"],
    category: "AI Cybersecurity",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: AlertTriangle,
    title: "Palo Alto Networks (Cortex XDR)",
    description: "AI-powered extended detection and response platform. Unify security data, detect sophisticated threats, and automate investigation and response across your environment.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.paloaltonetworks.com/?via=aiwebtools",
    imageUrl: cortexXdrHero,
    tags: ["Security", "XDR", "threat detection", "security automation", "endpoint protection", "network security", "AI analytics", "Endpoint Protection", "Threat Detection"],
    category: "AI Cybersecurity",
    rating: 4.7,
    totalVotes: 11234
  },
  {
    icon: Zap,
    title: "Cylance (BlackBerry)",
    description: "AI-powered prevention-first cybersecurity using machine learning to predict and prevent threats before they execute. Lightweight endpoint protection.",
    emoji: "⚡",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.blackberry.com/us/en/products/cylance-endpoint-security?via=aiwebtools",
    imageUrl: cylanceHero,
    tags: ["Security", "endpoint protection", "predictive security", "threat prevention", "AI detection", "machine learning", "lightweight", "Endpoint Protection", "Cybersecurity"],
    category: "AI Cybersecurity",
    rating: 4.6,
    totalVotes: 7456
  }
];
