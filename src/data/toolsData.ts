
import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools,
  aiDevelopmentAndPlatforms,
  writingAndContent,
  imageAndDesign,
  businessAndProductivity,
  specializedAndNiche
} from './tools';
import { BookOpen, Youtube } from "lucide-react";

// Additional standalone tools that may need separate categorization
const additionalTools: Tool[] = [
  {
    icon: Youtube,
    title: "BHUMAN – Avatars Creation For Outreach",
    description: "Generates hyper-personalized video messages by cloning your face and voice for marketing and outreach campaigns.",
    emoji: "👤",
    color: "from-purple-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=W1WHD9IhGhs",
    directUrl: "https://app.bhuman.ai/?ref=zde0otr",
    tags: ["avatars", "outreach", "marketing", "personalization", "video cloning"],
    category: "Video & Animation Creation"
  },
  {
    icon: Youtube,
    title: "AI Tools Finder GPT",
    description: "Discover and find the perfect AI tools for your needs. Search through comprehensive databases of AI applications and services.",
    emoji: "🛠️",
    color: "from-blue-500 to-purple-500",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    tags: ["AI tools", "discovery", "search", "productivity", "finder", "database"],
    category: "AI Development & Platforms"
  },
  {
    icon: BookOpen,
    title: "Restaurant Menu Maker GPT",
    description: "Create professional restaurant menus with AI assistance. Design appealing menu layouts, descriptions, and pricing strategies.",
    emoji: "🍽️",
    color: "from-orange-500 to-red-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    tags: ["restaurant", "menu", "food", "hospitality", "design", "culinary"],
    category: "Business & Productivity Tools"
  },
  {
    icon: BookOpen,
    title: "🚀 Startup Validator GPT",
    description: "Validate your startup ideas with comprehensive AI analysis. Get market research, competitor analysis, and business model validation.",
    emoji: "🚀",
    color: "from-purple-500 to-blue-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-named-st_4i8GY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://startupvalidatorgpt.lovable.app/?via=aiwebtools",
    tags: ["startup", "validation", "business model", "market research", "entrepreneurship"],
    category: "Business & Productivity Tools"
  }
];

// Combine all tools from different categories with enhanced categorization
export const allTools: Tool[] = [
  ...aiDevelopmentAndPlatforms,
  ...writingAndContent,
  ...imageAndDesign,
  ...videoTools,
  ...audioMusicTools,
  ...businessAndProductivity,
  ...specializedAndNiche,
  ...businessTools,
  ...aiAssistants,
  ...aiArtTools,
  ...contentCreationTools,
  ...aiToolsAndDevelopment,
  ...specializedTools,
  ...additionalTools
];

// Create featured tools by selecting diverse tools from different categories
export const featuredTools: Tool[] = [
  allTools.find(tool => tool.title.includes("Claude")) || allTools[0],
  allTools.find(tool => tool.title.includes("Midjourney")) || allTools[1],
  allTools.find(tool => tool.title.includes("SUNO")) || allTools[2],
  allTools.find(tool => tool.title.includes("Business Plan")) || allTools[3],
  allTools.find(tool => tool.title.includes("SORA")) || allTools[4],
  allTools.find(tool => tool.title.includes("Ideogram")) || allTools[5]
];

// Enhanced search function with comprehensive keywords
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase();
  return tools.filter(tool => 
    tool.title.toLowerCase().includes(term) ||
    tool.description.toLowerCase().includes(term) ||
    tool.category?.toLowerCase().includes(term) ||
    tool.tags?.some(tag => tag.toLowerCase().includes(term)) ||
    
    // Enhanced search keywords for better discoverability
    (term.includes('video') && (tool.title.toLowerCase().includes('video') || tool.description.toLowerCase().includes('video') || tool.category?.includes('Video'))) ||
    (term.includes('music') && (tool.title.toLowerCase().includes('music') || tool.description.toLowerCase().includes('music') || tool.category?.includes('Audio'))) ||
    (term.includes('ai') && tool.title.toLowerCase().includes('ai')) ||
    (term.includes('gpt') && tool.title.toLowerCase().includes('gpt')) ||
    (term.includes('image') && (tool.title.toLowerCase().includes('image') || tool.description.toLowerCase().includes('image'))) ||
    (term.includes('business') && (tool.title.toLowerCase().includes('business') || tool.category?.includes('Business'))) ||
    (term.includes('art') && (tool.title.toLowerCase().includes('art') || tool.category?.includes('Art') || tool.category?.includes('Design'))) ||
    (term.includes('chat') && tool.title.toLowerCase().includes('chat')) ||
    (term.includes('legal') && (tool.title.toLowerCase().includes('legal') || tool.category?.includes('Legal'))) ||
    (term.includes('audio') && (tool.category?.includes('Audio') || tool.description.toLowerCase().includes('audio'))) ||
    (term.includes('writing') && (tool.tags?.some(tag => tag.toLowerCase().includes('writing')) || tool.category?.includes('Writing'))) ||
    (term.includes('content') && (tool.tags?.some(tag => tag.toLowerCase().includes('content')) || tool.category?.includes('Content'))) ||
    (term.includes('generation') && tool.tags?.some(tag => tag.toLowerCase().includes('generation'))) ||
    (term.includes('development') && (tool.category?.includes('Development') || tool.tags?.some(tag => tag.toLowerCase().includes('development')))) ||
    (term.includes('platform') && (tool.category?.includes('Platform') || tool.tags?.some(tag => tag.toLowerCase().includes('platform')))) ||
    (term.includes('design') && (tool.category?.includes('Design') || tool.tags?.some(tag => tag.toLowerCase().includes('design')))) ||
    (term.includes('productivity') && (tool.category?.includes('Productivity') || tool.tags?.some(tag => tag.toLowerCase().includes('productivity')))) ||
    (term.includes('automation') && tool.tags?.some(tag => tag.toLowerCase().includes('automation'))) ||
    (term.includes('local') && tool.tags?.some(tag => tag.toLowerCase().includes('local'))) ||
    (term.includes('3d') && tool.tags?.some(tag => tag.toLowerCase().includes('3d'))) ||
    (term.includes('sketch') && tool.tags?.some(tag => tag.toLowerCase().includes('sketch'))) ||
    (term.includes('podcast') && tool.tags?.some(tag => tag.toLowerCase().includes('podcast'))) ||
    (term.includes('presentation') && tool.tags?.some(tag => tag.toLowerCase().includes('presentation'))) ||
    (term.includes('script') && tool.tags?.some(tag => tag.toLowerCase().includes('script'))) ||
    (term.includes('analysis') && tool.tags?.some(tag => tag.toLowerCase().includes('analysis'))) ||
    (term.includes('research') && tool.tags?.some(tag => tag.toLowerCase().includes('research'))) ||
    (term.includes('education') && tool.tags?.some(tag => tag.toLowerCase().includes('education'))) ||
    (term.includes('health') && tool.tags?.some(tag => tag.toLowerCase().includes('health'))) ||
    (term.includes('mental') && tool.tags?.some(tag => tag.toLowerCase().includes('mental'))) ||
    (term.includes('wellness') && tool.tags?.some(tag => tag.toLowerCase().includes('wellness'))) ||
    (term.includes('spiritual') && tool.tags?.some(tag => tag.toLowerCase().includes('spiritual'))) ||
    (term.includes('mushroom') && tool.tags?.some(tag => tag.toLowerCase().includes('mushroom'))) ||
    (term.includes('oil') && tool.tags?.some(tag => tag.toLowerCase().includes('oil'))) ||
    (term.includes('gas') && tool.tags?.some(tag => tag.toLowerCase().includes('gas'))) ||
    (term.includes('dream') && tool.tags?.some(tag => tag.toLowerCase().includes('dream'))) ||
    (term.includes('history') && tool.tags?.some(tag => tag.toLowerCase().includes('history'))) ||
    (term.includes('tattoo') && tool.tags?.some(tag => tag.toLowerCase().includes('tattoo'))) ||
    (term.includes('avatar') && tool.tags?.some(tag => tag.toLowerCase().includes('avatar'))) ||
    (term.includes('voice') && tool.tags?.some(tag => tag.toLowerCase().includes('voice'))) ||
    (term.includes('speech') && tool.tags?.some(tag => tag.toLowerCase().includes('speech'))) ||
    (term.includes('text to speech') && tool.description.toLowerCase().includes('text to speech')) ||
    (term.includes('coloring') && tool.tags?.some(tag => tag.toLowerCase().includes('coloring'))) ||
    (term.includes('children') && tool.tags?.some(tag => tag.toLowerCase().includes('children'))) ||
    (term.includes('book') && tool.tags?.some(tag => tag.toLowerCase().includes('book'))) ||
    (term.includes('grant') && tool.tags?.some(tag => tag.toLowerCase().includes('grant'))) ||
    (term.includes('insurance') && tool.tags?.some(tag => tag.toLowerCase().includes('insurance'))) ||
    (term.includes('claims') && tool.tags?.some(tag => tag.toLowerCase().includes('claims'))) ||
    (term.includes('contract') && tool.tags?.some(tag => tag.toLowerCase().includes('contract'))) ||
    (term.includes('legislation') && tool.tags?.some(tag => tag.toLowerCase().includes('legislation'))) ||
    (term.includes('movie') && tool.tags?.some(tag => tag.toLowerCase().includes('movie'))) ||
    (term.includes('film') && tool.tags?.some(tag => tag.toLowerCase().includes('movie'))) ||
    (term.includes('cinema') && tool.tags?.some(tag => tag.toLowerCase().includes('cinema'))) ||
    (term.includes('restaurant') && tool.tags?.some(tag => tag.toLowerCase().includes('restaurant'))) ||
    (term.includes('menu') && tool.tags?.some(tag => tag.toLowerCase().includes('menu'))) ||
    (term.includes('startup') && tool.tags?.some(tag => tag.toLowerCase().includes('startup'))) ||
    (term.includes('validation') && tool.tags?.some(tag => tag.toLowerCase().includes('validation'))) ||
    (term.includes('finder') && tool.tags?.some(tag => tag.toLowerCase().includes('finder'))) ||
    (term.includes('search') && tool.tags?.some(tag => tag.toLowerCase().includes('search'))) ||
    (term.includes('person') && tool.tags?.some(tag => tag.toLowerCase().includes('person'))) ||
    (term.includes('people') && tool.tags?.some(tag => tag.toLowerCase().includes('people'))) ||
    (term.includes('detection') && tool.tags?.some(tag => tag.toLowerCase().includes('detection'))) ||
    (term.includes('detector') && tool.tags?.some(tag => tag.toLowerCase().includes('detection'))) ||
    (term.includes('wisdom') && tool.tags?.some(tag => tag.toLowerCase().includes('wisdom'))) ||
    (term.includes('philosophy') && tool.tags?.some(tag => tag.toLowerCase().includes('philosophy'))) ||
    (term.includes('peace') && tool.tags?.some(tag => tag.toLowerCase().includes('peace'))) ||
    (term.includes('ubi') && tool.tags?.some(tag => tag.toLowerCase().includes('ubi'))) ||
    (term.includes('basic income') && tool.description.toLowerCase().includes('basic income')) ||
    (term.includes('government') && tool.tags?.some(tag => tag.toLowerCase().includes('government'))) ||
    (term.includes('policy') && tool.tags?.some(tag => tag.toLowerCase().includes('policy'))) ||
    (term.includes('economics') && tool.tags?.some(tag => tag.toLowerCase().includes('economics'))) ||
    (term.includes('simulation') && tool.tags?.some(tag => tag.toLowerCase().includes('simulation'))) ||
    (term.includes('future') && tool.tags?.some(tag => tag.toLowerCase().includes('future')))
  );
};

// Helper function to get categories with counts
export const getCategoriesWithCounts = (): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get tools by category
export const getToolsByCategory = (category: string): Tool[] => {
  return allTools.filter(tool => tool.category === category);
};
