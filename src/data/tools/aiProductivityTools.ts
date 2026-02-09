import { Tool } from "@/types/tools";
import { Brain, Box } from "lucide-react";

import threeDPrintGptHero from "@/assets/tools/3d-print-gpt-hero.jpg";

export const aiProductivityTools: Tool[] = [
  {
    icon: Box,
    title: "3D Print GPT",
    description: "Advanced 3D printing assistant for design optimization, troubleshooting, material selection, and printing guidance. Expert advice for all levels of 3D printing.",
    emoji: "🖨️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://3dprintgpt.lovable.app/?via=aiwebtools",
    imageUrl: threeDPrintGptHero,
    tags: ["3D printing", "design optimization", "troubleshooting", "materials", "printing guidance", "Automation Platform", "Task Management"],
    category: "AI Productivity Tools",
    rating: 4.3,
    totalVotes: 2456
  },
  {
    icon: Brain,
    title: "MicroSaaS GPT",
    description: "AI-powered micro-SaaS business development assistant. Get guidance on building, launching, and scaling small software-as-a-service businesses.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["micro-SaaS", "business development", "software", "startup", "entrepreneurship", "Business Intelligence", "Workflow Optimization"],
    category: "AI Productivity Tools",
    rating: 4.2,
    totalVotes: 2123
  }
];
