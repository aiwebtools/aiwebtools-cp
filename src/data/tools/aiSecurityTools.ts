
import { Tool } from "@/types/tools";
import { 
  Shield, Lock, Eye, AlertTriangle, Search, Bug, Key,
  Fingerprint, ShieldCheck, Scan, Radar, Zap
} from "lucide-react";

export const aiSecurityTools: Tool[] = [
  {
    icon: Shield,
    title: "Darktrace",
    description: "AI-powered cybersecurity platform that detects and responds to cyber threats in real-time using machine learning.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://darktrace.com/",
    tags: ["cybersecurity", "threat detection", "machine learning", "real-time protection"],
    category: "Specialized Tools",
    rating: 4.7,
    totalVotes: 2345
  },
  {
    icon: Eye,
    title: "Vectra AI",
    description: "AI-driven network detection and response platform that identifies cyberattacker behaviors and hidden threats.",
    emoji: "👁️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://vectra.ai/",
    tags: ["network security", "threat hunting", "behavioral analysis", "NDR"],
    category: "Specialized Tools",
    rating: 4.6,
    totalVotes: 1987
  },
  {
    icon: Bug,
    title: "Snyk",
    description: "AI-powered developer security platform that finds and fixes vulnerabilities in code, dependencies, and containers.",
    emoji: "🐛",
    color: "from-green-500 to-blue-600",
    directUrl: "https://snyk.io/",
    tags: ["code security", "vulnerability scanning", "developer tools", "DevSecOps"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 1654
  },
  {
    icon: Scan,
    title: "DeepCode (Snyk Code)",
    description: "AI code review tool that analyzes code for security vulnerabilities and quality issues using deep learning.",
    emoji: "🔍",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://snyk.io/product/snyk-code/",
    tags: ["static analysis", "code review", "security scanning", "AI analysis"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 1432
  },
  {
    icon: ShieldCheck,
    title: "CrowdStrike Falcon",
    description: "AI-powered endpoint protection platform with threat intelligence and automated incident response capabilities.",
    emoji: "🦅",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.crowdstrike.com/",
    tags: ["endpoint protection", "threat intelligence", "incident response", "AI security"],
    category: "Specialized Tools",
    rating: 4.8,
    totalVotes: 3210
  }
];
