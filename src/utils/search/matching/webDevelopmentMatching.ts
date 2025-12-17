
import { Tool } from "@/types/tools";

// Comprehensive web development keywords
const webDevelopmentKeywords = [
  'web', 'website', 'web development', 'web dev', 'frontend', 'backend', 'fullstack',
  'html', 'css', 'javascript', 'js', 'react', 'vue', 'angular', 'node', 'nodejs',
  'coding', 'programming', 'development', 'developer', 'dev', 'code',
  'app', 'application', 'mobile app', 'web app', 'webapp',
  'ui', 'ux', 'interface', 'design', 'responsive', 'bootstrap', 'tailwind',
  'api', 'rest', 'graphql', 'database', 'sql', 'nosql', 'mongodb',
  'deployment', 'hosting', 'server', 'cloud', 'aws', 'azure', 'vercel', 'netlify',
  'framework', 'library', 'tool', 'builder', 'generator', 'creator',
  'cms', 'ecommerce', 'blog', 'portfolio', 'landing page',
  'seo', 'optimization', 'performance', 'speed', 'analytics',
  'saas', 'platform', 'service', 'solution'
];

// Specific web development tools to prioritize
const webDevelopmentTools = [
  'website gpt 2.0',
  'website gpt',
  'lovable.dev',
  'bolt.new',
  'vercel v0',
  'replit',
  'github copilot',
  'webflow',
  'framer',
  'builder.io',
  'netlify',
  'supabase',
  'railway',
  'cloudflare workers',
  'tabnine',
  'mutable ai',
  'sourcegraph',
  'deepcode',
  'code climate',
  'durable ai',
  'amazon codewhisperer',
  'engineering gpt'
];

// Common misspellings for web development
const webDevMisspellings = [
  'webdev', 'web-dev', 'webdevelopment', 'web-development',
  'webiste', 'websit', 'webstie', 'webite',
  'frontent', 'frontned', 'front-end', 'frontend',
  'bakend', 'back-end', 'backend',
  'fullstac', 'full-stack', 'fullstack',
  'programing', 'programmin', 'progaming',
  'developement', 'develoment', 'developmenet',
  'aplplication', 'aplicaton', 'aplication',
  'respnsive', 'responive', 'responsiv'
];

export const matchWebDevelopment = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Check if search term is web development related
  const isWebDevSearch = webDevelopmentKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) ||
    keyword.includes(lowerSearchTerm)
  ) || webDevMisspellings.some(misspelling => 
    lowerSearchTerm.includes(misspelling)
  );

  if (isWebDevSearch) {
    // Priority 1: Specific web development tools
    const isWebDevTool = webDevelopmentTools.some(toolName => 
      tool.title.toLowerCase().includes(toolName) ||
      searchableText.includes(toolName)
    );

    // Priority 2: Web development keywords in tool content
    const hasWebDevContent = webDevelopmentKeywords.some(keyword => 
      searchableText.includes(keyword)
    );

    // Priority 3: Development category
    const isDevCategory = tool.category?.toLowerCase().includes('development') ||
                         tool.category?.toLowerCase().includes('coding') ||
                         tool.category?.toLowerCase().includes('web') ||
                         tool.category?.toLowerCase().includes('programming');

    // Priority 4: Web development tags
    const hasWebDevTags = tool.tags?.some(tag => 
      webDevelopmentKeywords.some(keyword => 
        tag.toLowerCase().includes(keyword)
      )
    );

    return isWebDevTool || hasWebDevContent || isDevCategory || hasWebDevTags;
  }

  return false;
};

export const scoreWebDevelopment = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  let score = 0;

  // Check if this is a web development search
  const isWebDevSearch = webDevelopmentKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) ||
    keyword.includes(lowerSearchTerm)
  ) || webDevMisspellings.some(misspelling => 
    lowerSearchTerm.includes(misspelling)
  );

  if (isWebDevSearch) {
    // Ultra high priority for specific web dev tools
    for (const toolName of webDevelopmentTools) {
      if (tool.title.toLowerCase().includes(toolName)) {
        score += 15000; // Massive boost for web dev tools
        // Debug logging disabled by default for performance
        break;
      }
    }

    // High priority for web dev keywords in title
    for (const keyword of webDevelopmentKeywords) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 10000;
        // Debug logging disabled by default for performance
        break;
      }
    }

    // Medium priority for development category
    if (
      tool.category?.toLowerCase().includes("development") ||
      tool.category?.toLowerCase().includes("coding") ||
      tool.category?.toLowerCase().includes("web")
    ) {
      score += 8000;
      // Debug logging disabled by default for performance
    }

    // Medium priority for web dev content in description
    for (const keyword of webDevelopmentKeywords) {
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 6000;
        // Debug logging disabled by default for performance
        break;
      }
    }

    // Tag matching bonus
    if (tool.tags) {
      for (const tag of tool.tags) {
        for (const keyword of webDevelopmentKeywords) {
          if (tag.toLowerCase().includes(keyword)) {
            score += 4000;
          }
        }
      }
    }
  }

  return score;
};
