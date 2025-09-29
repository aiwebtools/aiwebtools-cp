import { Tool } from "@/types/tools";
import { 
  Shield, 
  Lock, 
  Key, 
  AlertTriangle, 
  Eye, 
  Search,
  Database,
  Bug,
  FileText,
  Globe
} from "lucide-react";

export const aiSecurityTools: Tool[] = [
  {
    icon: Shield,
    title: "Hacker Defender Cybersecurity Expert",
    description: "Advanced cybersecurity protection and hacking defense system designed to safeguard infrastructure from cyber threats. Provides expert-level security analysis, threat detection, vulnerability assessment, and defensive strategies to protect against malicious attacks and unauthorized access attempts.",
    emoji: "🛡️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    tags: ["cybersecurity", "hacking defense", "infrastructure protection", "threat detection", "security analysis", "vulnerability assessment"],
    category: "AI Security Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "Cyber Security GPT",
    description: "Given the increasing threat of infrastructure attacks, AiWebTools.Ai aims to encourage the creation of solutions. Our cybersecurity assistant can deploy defense mechanisms and strategies to mitigate the impact of such attacks. Cybersecurity teams can rely on this assistant for advice, opinions, and assistance in deploying code whenever needed to defend against unwarranted infrastructure attacks.",
    emoji: "🛡️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-robot-with-a-large-shield-tha.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["cybersecurity", "infrastructure protection", "defense mechanisms", "attack mitigation", "security consulting"],
    category: "AI Security Tools",
    rating: 4.6,
    totalVotes: 3456
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
    icon: Search,
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
    icon: Shield,
    title: "CrowdStrike Falcon",
    description: "AI-powered endpoint protection platform with threat intelligence and automated incident response capabilities.",
    emoji: "🦅",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.crowdstrike.com/",
    tags: ["endpoint protection", "threat intelligence", "incident response", "AI security"],
    category: "Specialized Tools",
    rating: 4.8,
    totalVotes: 3210
  },
  {
    icon: Search,
    title: "Shodan",
    description: "A search engine that scans the internet for connected devices and systems, often used for cybersecurity research. Discover IoT devices, servers, and network infrastructure worldwide.",
    emoji: "🔍",
    color: "from-red-500 to-orange-600",
    directUrl: "https://shodan.io/?via=aiwebtools",
    tags: ["search engine", "IoT devices", "cybersecurity research", "network scanning", "connected devices"],
    category: "AI Security Tools",
    rating: 4.4,
    totalVotes: 2890
  },
  {
    icon: Eye,
    title: "FotoForensics",
    description: "An online tool for forensic image analysis to detect edits, manipulations, and authenticity issues in photos. Analyze digital images for tampering and forensic evidence.",
    emoji: "🔬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://fotoforensics.com/?via=aiwebtools",
    tags: ["image forensics", "photo analysis", "tampering detection", "authenticity", "digital forensics"],
    category: "AI Security Tools",
    rating: 4.3,
    totalVotes: 1567
  },
  {
    icon: Globe,
    title: "ZoomEye",
    description: "A cyberspace search engine for discovering internet-connected devices, vulnerabilities, and digital assets. Comprehensive network reconnaissance and security research platform.",
    emoji: "👁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://zoomeye.ai/?via=aiwebtools",
    tags: ["cyberspace search", "network reconnaissance", "vulnerability discovery", "digital assets", "security research"],
    category: "AI Security Tools",
    rating: 4.5,
    totalVotes: 2234
  }
];
