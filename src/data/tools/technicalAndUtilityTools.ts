
import { Tool } from "@/types/tools";
import { 
  Settings, 
  Database, 
  Cloud, 
  Shield, 
  Monitor, 
  Cpu, 
  HardDrive,
  Network,
  Lock,
  Zap,
  Terminal,
  Layers
} from "lucide-react";

import mongodbAtlasHero from "@/assets/tools/mongodb-atlas-hero.jpg";
import awsHero from "@/assets/tools/aws-hero.jpg";
import datadogHero from "@/assets/tools/datadog-hero.jpg";
import dockerHero from "@/assets/tools/docker-hero.jpg";
import kubernetesHero from "@/assets/tools/kubernetes-hero.jpg";
import hashicorpVaultHero from "@/assets/tools/hashicorp-vault-hero.jpg";
import terraformHero from "@/assets/tools/terraform-hero.jpg";
import redisHero from "@/assets/tools/redis-hero.jpg";
import elasticsearchHero from "@/assets/tools/elasticsearch-hero.jpg";

export const technicalAndUtilityTools: Tool[] = [
  {
    icon: Database,
    title: "MongoDB Atlas",
    description: "Cloud database service with AI-powered performance optimization, automated scaling, and intelligent query suggestions for modern applications.",
    emoji: "🍃",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.mongodb.com/atlas",
    imageUrl: mongodbAtlasHero,
    tags: ["cloud database", "performance optimization", "automated scaling", "NoSQL", "modern applications"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Cloud,
    title: "AWS",
    description: "Comprehensive cloud computing platform with AI/ML services, serverless computing, and intelligent automation for scalable applications.",
    emoji: "☁️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://aws.amazon.com/",
    imageUrl: awsHero,
    tags: ["cloud computing", "AI/ML services", "serverless", "automation", "scalable"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: Shield,
    title: "Cloudflare",
    description: "Web infrastructure and security platform with AI-powered DDoS protection, performance optimization, and edge computing capabilities.",
    emoji: "🛡️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.cloudflare.com/",
    imageUrl: "/src/assets/tools/cloudflare-hero.png",
    tags: ["web security", "DDoS protection", "performance optimization", "edge computing", "CDN"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Monitor,
    title: "Datadog",
    description: "Monitoring and analytics platform with AI-powered anomaly detection, intelligent alerting, and performance insights for applications.",
    emoji: "📊",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.datadoghq.com/",
    imageUrl: datadogHero,
    tags: ["monitoring", "anomaly detection", "analytics", "performance insights", "alerting"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Terminal,
    title: "Docker",
    description: "Containerization platform with AI-assisted deployment optimization, automated scaling, and intelligent resource management.",
    emoji: "🐳",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.docker.com/",
    imageUrl: dockerHero,
    tags: ["containerization", "deployment optimization", "automated scaling", "resource management", "DevOps"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Layers,
    title: "Kubernetes",
    description: "Container orchestration platform with AI-enhanced auto-scaling, intelligent workload distribution, and automated cluster management.",
    emoji: "⚙️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://kubernetes.io/",
    imageUrl: kubernetesHero,
    tags: ["container orchestration", "auto-scaling", "workload distribution", "cluster management", "cloud native"],
    category: "DEVELOPMENT & CODING",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Lock,
    title: "HashiCorp Vault",
    description: "Secrets management platform with AI-powered threat detection, automated credential rotation, and intelligent access policies.",
    emoji: "🔐",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://www.vaultproject.io/",
    imageUrl: hashicorpVaultHero,
    tags: ["secrets management", "threat detection", "credential rotation", "access policies", "security"],
    category: "DEVELOPMENT & CODING",
    rating: 4.2,
    totalVotes: 2654
  },
  {
    icon: Network,
    title: "Terraform",
    description: "Infrastructure as code tool with AI-assisted configuration optimization, automated provisioning, and intelligent resource planning.",
    emoji: "🏗️",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.terraform.io/",
    imageUrl: terraformHero,
    tags: ["infrastructure as code", "configuration optimization", "automated provisioning", "resource planning", "HashiCorp"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Cpu,
    title: "Redis",
    description: "In-memory data structure store with AI-powered caching optimization, intelligent data persistence, and automated performance tuning.",
    emoji: "🔴",
    color: "from-red-500 to-orange-600",
    directUrl: "https://redis.io/",
    imageUrl: redisHero,
    tags: ["in-memory database", "caching optimization", "data persistence", "performance tuning", "real-time"],
    category: "DEVELOPMENT & CODING",
    rating: 4.3,
    totalVotes: 3123
  },
  {
    icon: HardDrive,
    title: "Elasticsearch",
    description: "Search and analytics engine with AI-powered relevance tuning, automated indexing optimization, and intelligent query suggestions.",
    emoji: "🔍",
    color: "from-yellow-500 to-green-600",
    directUrl: "https://www.elastic.co/",
    imageUrl: elasticsearchHero,
    tags: ["search engine", "analytics", "relevance tuning", "indexing optimization", "query suggestions"],
    category: "DEVELOPMENT & CODING",
    rating: 4.2,
    totalVotes: 2345
  }
];
