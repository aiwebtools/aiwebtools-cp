import { Tool } from "@/types/tools";

export const matchAppBuilding = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // App building keywords
  const appBuildingKeywords = [
    'app build', 'app builder', 'application build', 'mobile app', 
    'web app', 'app development', 'app creator', 'no code app',
    'website build', 'website builder', 'web builder', 'site builder',
    'create app', 'build app', 'make app', 'develop app'
  ];
  
  // Website building keywords  
  const websiteBuildingKeywords = [
    'website build', 'website builder', 'web builder', 'site builder',
    'website creator', 'web creator', 'site creator', 'web development',
    'website development', 'create website', 'build website', 'make website',
    'develop website', 'web design', 'landing page', 'webpage'
  ];
  
  // Check if search term matches app/website building intent
  const isAppBuildingSearch = appBuildingKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  const isWebsiteBuildingSearch = websiteBuildingKeywords.some(keyword =>
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (isAppBuildingSearch || isWebsiteBuildingSearch) {
    // Priority app/website building tools
    const priorityTools = [
      'bubble', 'webflow', 'wix', 'squarespace', 'wordpress',
      'github copilot', 'cursor', 'replit', 'v0 by vercel',
      'claude artifacts', 'chatgpt canvas', 'bolt.new',
      'lovable', 'windsurf', 'framer', 'tilda'
    ];
    
    // Agent-based app builders
    const agentBuilders = [
      'surf.new web agents', 'manus autonomous agent', 'lindy ai automation',
      'auto-gpt', 'chatgpt operator', 'agentgpt'
    ];
    
    // Check priority tools
    if (priorityTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // Check agent builders
    if (agentBuilders.some(agent => lowerTitle.includes(agent))) {
      return true;
    }
    
    // General matching for app/website building
    const buildingTerms = [
      'build', 'builder', 'create', 'creator', 'develop', 'development',
      'design', 'designer', 'generator', 'maker', 'no code', 'low code'
    ];
    
    const appWebTerms = [
      'app', 'application', 'website', 'web', 'site', 'landing page',
      'frontend', 'backend', 'fullstack', 'ui', 'ux'
    ];
    
    // Check if tool involves building apps/websites
    const hasBuildingTerm = buildingTerms.some(term =>
      lowerTitle.includes(term) || lowerDescription.includes(term)
    );
    
    const hasAppWebTerm = appWebTerms.some(term =>
      lowerTitle.includes(term) || lowerDescription.includes(term) || 
      lowerCategory.includes(term) || lowerTags.some(tag => tag.includes(term))
    );
    
    if (hasBuildingTerm && hasAppWebTerm) {
      return true;
    }
    
    // Check categories
    const buildingCategories = [
      'web development', 'app development', 'development', 'coding',
      'design', 'no code', 'low code', 'website builder', 'app builder'
    ];
    
    if (buildingCategories.some(cat => lowerCategory.includes(cat))) {
      return true;
    }
  }
  
  return false;
};

export const scoreAppBuilding = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  // App building keywords
  const appBuildingKeywords = [
    'app build', 'app builder', 'application build', 'mobile app', 
    'web app', 'app development', 'app creator', 'no code app',
    'website build', 'website builder', 'web builder', 'site builder',
    'create app', 'build app', 'make app', 'develop app'
  ];
  
  // Website building keywords  
  const websiteBuildingKeywords = [
    'website build', 'website builder', 'web builder', 'site builder',
    'website creator', 'web creator', 'site creator', 'web development',
    'website development', 'create website', 'build website', 'make website',
    'develop website', 'web design', 'landing page', 'webpage'
  ];
  
  // Check if search term matches app/website building intent
  const isAppBuildingSearch = appBuildingKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  const isWebsiteBuildingSearch = websiteBuildingKeywords.some(keyword =>
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (isAppBuildingSearch || isWebsiteBuildingSearch) {
    // Highest priority: Specialized app/website builders
    if (lowerTitle.includes('bubble')) {
      score += 3000;
    }
    if (lowerTitle.includes('webflow')) {
      score += 2900;
    }
    if (lowerTitle.includes('v0 by vercel') || lowerTitle.includes('v0.dev')) {
      score += 2800;
    }
    if (lowerTitle.includes('cursor')) {
      score += 2700;
    }
    if (lowerTitle.includes('bolt.new') || lowerTitle.includes('bolt')) {
      score += 2600;
    }
    if (lowerTitle.includes('lovable')) {
      score += 2500;
    }
    if (lowerTitle.includes('windsurf')) {
      score += 2400;
    }
    if (lowerTitle.includes('replit')) {
      score += 2300;
    }
    if (lowerTitle.includes('claude artifacts')) {
      score += 2200;
    }
    if (lowerTitle.includes('chatgpt canvas')) {
      score += 2100;
    }
    
    // High priority: Agent-based builders
    if (lowerTitle.includes('surf.new web agents')) {
      score += 2500;
    }
    if (lowerTitle.includes('manus autonomous agent')) {
      score += 2400;
    }
    if (lowerTitle.includes('chatgpt operator')) {
      score += 2300;
    }
    if (lowerTitle.includes('lindy ai automation')) {
      score += 2200;
    }
    if (lowerTitle.includes('auto-gpt')) {
      score += 2100;
    }
    if (lowerTitle.includes('agentgpt')) {
      score += 2000;
    }
    
    // Medium priority: Traditional builders
    if (lowerTitle.includes('wix')) {
      score += 1900;
    }
    if (lowerTitle.includes('squarespace')) {
      score += 1800;
    }
    if (lowerTitle.includes('wordpress')) {
      score += 1700;
    }
    if (lowerTitle.includes('framer')) {
      score += 1600;
    }
    if (lowerTitle.includes('tilda')) {
      score += 1500;
    }
    
    // Coding tools
    if (lowerTitle.includes('github copilot')) {
      score += 2000;
    }
    if (lowerTitle.includes('copilot')) {
      score += 1900;
    }
    
    // General building terms in title
    if (lowerTitle.includes('builder')) {
      score += 1500;
    }
    if (lowerTitle.includes('build')) {
      score += 1400;
    }
    if (lowerTitle.includes('creator')) {
      score += 1300;
    }
    if (lowerTitle.includes('create')) {
      score += 1200;
    }
    if (lowerTitle.includes('develop')) {
      score += 1100;
    }
    if (lowerTitle.includes('generator')) {
      score += 1000;
    }
    if (lowerTitle.includes('maker')) {
      score += 900;
    }
    
    // App/web terms in title
    if (lowerTitle.includes('website')) {
      score += 1200;
    }
    if (lowerTitle.includes('web app')) {
      score += 1300;
    }
    if (lowerTitle.includes('app')) {
      score += 1100;
    }
    if (lowerTitle.includes('application')) {
      score += 1000;
    }
    
    // Description matches
    if (lowerDescription.includes('build') && lowerDescription.includes('app')) {
      score += 800;
    }
    if (lowerDescription.includes('build') && lowerDescription.includes('website')) {
      score += 800;
    }
    if (lowerDescription.includes('create') && lowerDescription.includes('app')) {
      score += 700;
    }
    if (lowerDescription.includes('create') && lowerDescription.includes('website')) {
      score += 700;
    }
    
    // Category bonuses
    if (lowerCategory.includes('development')) {
      score += 600;
    }
    if (lowerCategory.includes('coding')) {
      score += 500;
    }
    if (lowerCategory.includes('design')) {
      score += 400;
    }
    if (lowerCategory.includes('no code')) {
      score += 700;
    }
    if (lowerCategory.includes('low code')) {
      score += 600;
    }
    
    // Tag bonuses
    if (lowerTags.some(tag => tag.includes('builder'))) {
      score += 400;
    }
    if (lowerTags.some(tag => tag.includes('development'))) {
      score += 300;
    }
    if (lowerTags.some(tag => tag.includes('no code'))) {
      score += 500;
    }
  }
  
  return score;
};