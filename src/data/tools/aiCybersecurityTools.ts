import { Tool } from "@/types/tools";
import { Shield, Lock, AlertTriangle, Eye, Zap, ShieldCheck } from "lucide-react";

export const aiCybersecurityTools: Tool[] = [
  {
    icon: Shield,
    title: "Darktrace",
    description: "AI-powered cyber defense platform using self-learning technology to detect, respond to, and neutralize cyber threats in real-time. Protects against unknown threats and zero-day attacks.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://darktrace.com/?via=aiwebtools",
    tags: ["cybersecurity", "threat detection", "AI security", "zero-day protection", "autonomous response", "network security"],
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
    tags: ["endpoint security", "threat intelligence", "EDR", "incident response", "cloud security", "AI protection"],
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
    tags: ["endpoint security", "autonomous protection", "cloud security", "threat prevention", "AI detection", "EDR"],
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
    tags: ["network security", "threat detection", "NDR", "behavioral analysis", "cloud security", "AI monitoring"],
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
    tags: ["XDR", "threat detection", "security automation", "endpoint protection", "network security", "AI analytics"],
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
    tags: ["endpoint protection", "predictive security", "threat prevention", "AI detection", "machine learning", "lightweight"],
    category: "AI Cybersecurity",
    rating: 4.6,
    totalVotes: 7456
  }
];
