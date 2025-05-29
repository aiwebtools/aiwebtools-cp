
// Main keyword mapping index that combines all keyword categories
import { coreAIKeywords } from './coreAIKeywords';
import { creativeKeywords } from './creativeKeywords';
import { businessKeywords } from './businessKeywords';
import { technicalKeywords } from './technicalKeywords';
import { industryKeywords } from './industryKeywords';
import { contentKeywords } from './contentKeywords';
import { userIntentKeywords } from './userIntentKeywords';
import { specialtyKeywords } from './specialtyKeywords';
import { searchMetaKeywords } from './searchMetaKeywords';

// Enhanced keyword mapping for intelligent search - AI tools focused
export const keywordMapping: Record<string, string[]> = {
  ...coreAIKeywords,
  ...creativeKeywords,
  ...businessKeywords,
  ...technicalKeywords,
  ...industryKeywords,
  ...contentKeywords,
  ...userIntentKeywords,
  ...specialtyKeywords,
  ...searchMetaKeywords,
};

// Enhanced search synonyms for better matching
export const searchSynonyms: Record<string, string[]> = {
  "AI": ["artificial intelligence", "machine learning", "smart", "intelligent", "automated"],
  "tool": ["software", "application", "platform", "solution", "utility", "service"],
  "generator": ["creator", "maker", "builder", "producer", "engine"],
  "assistant": ["helper", "aide", "companion", "guide", "support"],
  "free": ["gratis", "no cost", "complimentary", "open source"],
  "premium": ["paid", "pro", "professional", "advanced", "subscription"],
  "create": ["generate", "make", "build", "produce", "design"],
  "edit": ["modify", "change", "update", "enhance", "improve"],
  "analyze": ["examine", "study", "review", "assess", "evaluate"],
  "design": ["create", "build", "craft", "develop", "style"],
  "cover": ["wrapper", "jacket", "face", "front", "surface"],
  "graph": ["chart", "diagram", "plot", "visualization", "infographic"],
  "3d": ["three dimensional", "3D modeling", "3D design", "three-d"],
  "automation": ["workflow", "process automation", "task automation", "auto"],
  "analytics": ["data analysis", "business intelligence", "reporting", "metrics"]
};

// Category-specific keywords for better categorization
export const categoryKeywords: Record<string, string[]> = {
  "Creative Suites": ["creative tools", "design suites", "artistic platforms", "creative AI", "multimedia", "professional creative", "all-in-one creative"],
  "Advanced AI Tools": ["advanced AI", "AI platforms", "sophisticated AI", "AI development", "enterprise AI", "professional AI"],
  "Video & Content Creation": ["video AI", "video generator", "film AI", "video editing", "animation AI", "video creation", "content creation", "multimedia"],
  "Image & Design Tools": ["AI art", "image generator", "visual AI", "art creation", "picture generator", "design tools", "graphic design", "cover design", "logo design"],
  "Writing & Content Creation": ["AI writing", "content creation", "text generator", "copywriting", "article writer", "writing assistant"],
  "Business & Productivity": ["business AI", "productivity tools", "workflow automation", "business automation", "office tools"],
  "Audio & Voice Tools": ["music AI", "audio generator", "sound AI", "music creation", "voice AI", "audio editing"],
  "AI Development Tools": ["AI development", "machine learning", "neural networks", "AI programming", "developer tools"],
  "Education & Learning": ["educational AI", "learning tools", "teaching AI", "academic AI", "training tools"],
  "Specialized Tools": ["niche tools", "technical tools", "industry-specific", "professional tools", "expert systems"],
  "Time & History": ["historical AI", "time tools", "history research", "historical analysis", "timeline tools"],
  "Spirituality & Wellness": ["spiritual AI", "wellness tools", "meditation AI", "spiritual guidance", "mindfulness"],
  "Game Design & Development": ["game AI", "game development", "gaming tools", "game design", "interactive entertainment"],
  "Emergency Services": ["emergency tools", "safety AI", "crisis management", "first aid", "disaster response"],
  "Professional Services": ["professional AI", "service tools", "business services", "expert assistance", "consultation tools"],
  "3D & Visualization": ["3D modeling", "3D design", "3D animation", "3D rendering", "visualization", "three dimensional", "3D tools"],
  "Data & Analytics": ["data analysis", "business intelligence", "analytics", "data visualization", "reporting", "dashboards", "metrics"],
  "Automation & Workflows": ["automation", "workflow", "process automation", "task automation", "business automation", "workflow tools"]
};

// Export individual keyword categories for specific use cases
export {
  coreAIKeywords,
  creativeKeywords,
  businessKeywords,
  technicalKeywords,
  industryKeywords,
  contentKeywords,
  userIntentKeywords,
  specialtyKeywords,
  searchMetaKeywords,
};
