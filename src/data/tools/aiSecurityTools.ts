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

import crowdstrikeHero from "@/assets/tools/crowdstrike-hero.jpg";
import darktraceHero from "@/assets/tools/darktrace-hero.jpg";
import sentineloneHero from "@/assets/tools/sentinelone-hero.jpg";
import vectraHero from "@/assets/tools/vectra-hero.jpg";
import snykHero from "@/assets/tools/snyk-hero.jpg";
import cortexXdrHero from "@/assets/tools/cortex-xdr-hero.jpg";
import onePasswordHero from "@/assets/tools/1password-hero.jpg";
import nordvpnHero from "@/assets/tools/nordvpn-hero.jpg";
import oktaHero from "@/assets/tools/okta-hero.jpg";
import vantaHero from "@/assets/tools/vanta-hero.jpg";
import shodanHero from "@/assets/tools/shodan-hero.jpg";
import bitwardenHero from "@/assets/tools/bitwarden-hero.jpg";
import malwarebytesHero from "@/assets/tools/malwarebytes-hero.jpg";

export const aiSecurityTools: Tool[] = [
  {
    icon: Shield,
    title: "Hacker Defender Cybersecurity Expert",
    description: "Advanced cybersecurity protection and hacking defense system designed to safeguard infrastructure from cyber threats. Provides expert-level security analysis, threat detection, vulnerability assessment, and defensive strategies to protect against malicious attacks and unauthorized access attempts.",
    emoji: "🛡️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-robot-with-a-large-shield-tha.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    tags: ["cybersecurity", "hacking defense", "infrastructure protection", "threat detection", "security analysis", "vulnerability assessment", "Cybersecurity", "Threat Detection", "Custom GPT"],
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
    tags: ["cybersecurity", "infrastructure protection", "defense mechanisms", "attack mitigation", "security consulting", "Cybersecurity", "Threat Detection", "Custom GPT"],
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
    directUrl: "https://vectra.ai/?via=aiwebtools",
    imageUrl: vectraHero,
    tags: ["network security", "threat hunting", "behavioral analysis", "NDR", "VPN & Network Security", "Threat Detection"],
    category: "AI Security Tools",
    rating: 4.6,
    totalVotes: 1987
  },
  {
    icon: Bug,
    title: "Snyk",
    description: "AI-powered developer security platform that finds and fixes vulnerabilities in code, dependencies, and containers.",
    emoji: "🐛",
    color: "from-green-500 to-blue-600",
    directUrl: "https://snyk.io/?via=aiwebtools",
    imageUrl: snykHero,
    tags: ["code security", "vulnerability scanning", "developer tools", "DevSecOps", "Vulnerability Scanner", "Cybersecurity"],
    category: "AI Security Tools",
    rating: 4.5,
    totalVotes: 1654
  },
  {
    icon: Search,
    title: "DeepCode (Snyk Code)",
    description: "AI code review tool that analyzes code for security vulnerabilities and quality issues using deep learning.",
    emoji: "🔍",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://snyk.io/product/snyk-code/?via=aiwebtools",
    imageUrl: snykHero,
    tags: ["static analysis", "code review", "security scanning", "AI analysis", "Vulnerability Scanner", "Cybersecurity"],
    category: "AI Security Tools",
    rating: 4.4,
    totalVotes: 1432
  },
  {
    icon: Shield,
    title: "CrowdStrike Falcon",
    description: "AI-powered endpoint protection platform with threat intelligence and automated incident response capabilities.",
    emoji: "🦅",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.crowdstrike.com/?via=aiwebtools",
    imageUrl: crowdstrikeHero,
    tags: ["endpoint protection", "threat intelligence", "incident response", "AI security", "Endpoint Protection", "Threat Detection"],
    category: "AI Security Tools",
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
    imageUrl: shodanHero,
    tags: ["search engine", "IoT devices", "cybersecurity research", "network scanning", "connected devices", "Vulnerability Scanner", "Penetration Testing"],
    category: "AI Security Tools",
    rating: 4.4,
    totalVotes: 2890
  },
  {
    icon: Globe,
    title: "ZoomEye",
    description: "A cyberspace search engine for discovering internet-connected devices, vulnerabilities, and digital assets. Comprehensive network reconnaissance and security research platform.",
    emoji: "👁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://zoomeye.ai/?via=aiwebtools",
    imageUrl: shodanHero,
    tags: ["cyberspace search", "network reconnaissance", "vulnerability discovery", "digital assets", "security research", "Vulnerability Scanner", "Penetration Testing"],
    category: "AI Security Tools",
    rating: 4.5,
    totalVotes: 2234
  },
  {
    icon: Lock,
    title: "1Password",
    description: "Enterprise-grade password manager with AI-powered security monitoring, breach detection, and secure credential sharing for teams and individuals.",
    emoji: "🔐",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://1password.com/?via=aiwebtools",
    imageUrl: onePasswordHero,
    tags: ["password manager", "credential vault", "security", "team sharing", "Password Management", "Identity Protection"],
    category: "AI Security Tools",
    rating: 4.9,
    totalVotes: 15678
  },
  {
    icon: Key,
    title: "Bitwarden",
    description: "Open-source password management solution with end-to-end encryption, secure password generation, and cross-platform sync for individuals and enterprises.",
    emoji: "🔑",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://bitwarden.com/?via=aiwebtools",
    imageUrl: bitwardenHero,
    tags: ["password manager", "open source", "encryption", "cross-platform", "Password Management", "Encryption Tools"],
    category: "AI Security Tools",
    rating: 4.8,
    totalVotes: 12345
  },
  {
    icon: Shield,
    title: "NordVPN",
    description: "Premium VPN service with AI-powered threat protection, malware blocking, and secure encrypted connections across global servers.",
    emoji: "🌐",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://nordvpn.com/?via=aiwebtools",
    imageUrl: nordvpnHero,
    tags: ["VPN", "privacy", "encryption", "malware protection", "VPN & Network Security", "Privacy Tools"],
    category: "AI Security Tools",
    rating: 4.7,
    totalVotes: 23456
  },
  {
    icon: Eye,
    title: "ProtonVPN",
    description: "Privacy-focused VPN from the makers of ProtonMail with secure core servers, kill switch, and no-logs policy for maximum anonymity.",
    emoji: "🛡️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://protonvpn.com/?via=aiwebtools",
    imageUrl: nordvpnHero,
    tags: ["VPN", "privacy", "no-logs", "secure core", "VPN & Network Security", "Privacy Tools"],
    category: "AI Security Tools",
    rating: 4.7,
    totalVotes: 18234
  },
  {
    icon: Lock,
    title: "Signal",
    description: "End-to-end encrypted messaging app with disappearing messages, sealed sender technology, and open-source privacy-first communication.",
    emoji: "💬",
    color: "from-blue-500 to-cyan-500",
    directUrl: "https://signal.org/?via=aiwebtools",
    imageUrl: bitwardenHero,
    tags: ["encrypted messaging", "privacy", "end-to-end encryption", "secure chat", "Encryption Tools", "Privacy Tools"],
    category: "AI Security Tools",
    rating: 4.9,
    totalVotes: 34567
  },
  {
    icon: Shield,
    title: "SentinelOne",
    description: "Autonomous AI-powered cybersecurity platform for endpoint, cloud, and identity protection. Prevent, detect, and respond to threats with machine learning.",
    emoji: "⚔️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.sentinelone.com/?via=aiwebtools",
    imageUrl: sentineloneHero,
    tags: ["endpoint security", "autonomous protection", "cloud security", "threat prevention", "AI detection", "EDR", "Endpoint Protection", "Threat Detection"],
    category: "AI Security Tools",
    rating: 4.8,
    totalVotes: 9876
  },
  {
    icon: AlertTriangle,
    title: "Palo Alto Networks Cortex XDR",
    description: "AI-powered extended detection and response platform. Unify security data, detect sophisticated threats, and automate investigation and response.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.paloaltonetworks.com/?via=aiwebtools",
    imageUrl: cortexXdrHero,
    tags: ["XDR", "threat detection", "security automation", "endpoint protection", "network security", "Endpoint Protection", "Threat Detection"],
    category: "AI Security Tools",
    rating: 4.7,
    totalVotes: 11234
  },
  {
    icon: Shield,
    title: "Darktrace",
    description: "AI-powered cyber defense platform using self-learning technology to detect, respond to, and neutralize cyber threats in real-time.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://darktrace.com/?via=aiwebtools",
    imageUrl: darktraceHero,
    tags: ["AI security", "threat detection", "autonomous response", "network security", "zero-day protection", "Cybersecurity", "Threat Detection"],
    category: "AI Security Tools",
    rating: 4.8,
    totalVotes: 8234
  },
  {
    icon: Database,
    title: "Qualys",
    description: "Cloud-based security and compliance platform with vulnerability management, web application scanning, and continuous monitoring.",
    emoji: "📊",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.qualys.com/?via=aiwebtools",
    imageUrl: vantaHero,
    tags: ["vulnerability management", "compliance", "web scanning", "continuous monitoring", "Vulnerability Scanner", "Compliance & Audit"],
    category: "AI Security Tools",
    rating: 4.6,
    totalVotes: 7654
  },
  {
    icon: Bug,
    title: "Burp Suite",
    description: "Industry-leading web security testing platform for penetration testing, vulnerability scanning, and application security assessment.",
    emoji: "🐛",
    color: "from-orange-400 to-red-500",
    directUrl: "https://portswigger.net/burp?via=aiwebtools",
    imageUrl: snykHero,
    tags: ["penetration testing", "web security", "vulnerability scanner", "security testing", "Penetration Testing", "Vulnerability Scanner"],
    category: "AI Security Tools",
    rating: 4.8,
    totalVotes: 14567
  },
  {
    icon: Search,
    title: "Nessus",
    description: "Comprehensive vulnerability assessment solution for identifying security weaknesses, misconfigurations, and compliance issues across networks.",
    emoji: "🔍",
    color: "from-teal-500 to-green-600",
    directUrl: "https://www.tenable.com/products/nessus?via=aiwebtools",
    imageUrl: vectraHero,
    tags: ["vulnerability assessment", "network scanning", "compliance", "security audit", "Vulnerability Scanner", "Compliance & Audit"],
    category: "AI Security Tools",
    rating: 4.7,
    totalVotes: 11234
  },
  {
    icon: Shield,
    title: "Okta",
    description: "Enterprise identity and access management platform with SSO, MFA, and adaptive authentication powered by AI threat detection.",
    emoji: "🔓",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.okta.com/?via=aiwebtools",
    imageUrl: oktaHero,
    tags: ["identity management", "SSO", "MFA", "access control", "authentication", "Identity Protection", "Password Management"],
    category: "AI Security Tools",
    rating: 4.7,
    totalVotes: 16789
  },
  {
    icon: FileText,
    title: "Vanta",
    description: "Automated security compliance platform for SOC 2, HIPAA, ISO 27001 with continuous monitoring and evidence collection.",
    emoji: "📋",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.vanta.com/?via=aiwebtools",
    imageUrl: vantaHero,
    tags: ["compliance automation", "SOC 2", "HIPAA", "ISO 27001", "security audit", "Compliance & Audit"],
    category: "AI Security Tools",
    rating: 4.8,
    totalVotes: 8765
  },
  {
    icon: Eye,
    title: "PrivacyBadger",
    description: "Browser extension that automatically learns to block invisible trackers and protects your privacy while browsing the web.",
    emoji: "🦡",
    color: "from-red-500 to-orange-500",
    directUrl: "https://privacybadger.org/?via=aiwebtools",
    imageUrl: nordvpnHero,
    tags: ["tracker blocker", "privacy", "browser extension", "anti-tracking", "Privacy Tools"],
    category: "AI Security Tools",
    rating: 4.5,
    totalVotes: 12345
  },
  {
    icon: Shield,
    title: "Malwarebytes",
    description: "Advanced anti-malware and endpoint protection with real-time threat detection, ransomware protection, and exploit mitigation.",
    emoji: "🦠",
    color: "from-blue-600 to-cyan-600",
    directUrl: "https://www.malwarebytes.com/?via=aiwebtools",
    imageUrl: malwarebytesHero,
    tags: ["anti-malware", "ransomware protection", "endpoint security", "threat detection", "Endpoint Protection", "Cybersecurity"],
    category: "AI Security Tools",
    rating: 4.6,
    totalVotes: 23456
  }
];
