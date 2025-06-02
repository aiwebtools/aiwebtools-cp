import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";
import { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools,
  getAutomationPlatformsTools
} from "./categoryMatching";
import { CategoryCounts, MainCategoryCounts } from "./types";

// Create a cached mapping of tools by main category for instant lookup
let toolsCacheByMainCategory: Map<string, Tool[]> = new Map();
let cacheBuilt = false;

// Force cache rebuild by resetting the cache
export const resetCache = () => {
  toolsCacheByMainCategory.clear();
  cacheBuilt = false;
  console.log('🔄 Cache reset - will rebuild on next access');
};

// Force cache rebuild by resetting the cache - IMMEDIATE RESET
resetCache();

// Helper function to detect major LLMs that should appear in multiple categories
const isMajorLLM = (tool: Tool): boolean => {
  const majorLLMNames = [
    'chatgpt', 'claude', 'gemini', 'mistral', 'llama', 'anythingllm',
    'gpt-4', 'gpt-3.5', 'anthropic', 'google ai', 'meta ai'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  
  return majorLLMNames.some(llm => 
    titleLower.includes(llm) || 
    descriptionLower.includes(llm) ||
    (llm === 'chatgpt' && (titleLower.includes('chat gpt') || titleLower.includes('openai'))) ||
    (llm === 'anythingllm' && titleLower.includes('anything llm'))
  );
};

// Helper function to detect STRICTLY historical and time-based tools
const isStrictlyHistoricalTimeRelatedTool = (tool: Tool): boolean => {
  // First check if it's primarily an industry-specific tool - if so, exclude it from historical category
  if (isIndustrySpecificTool(tool)) {
    return false;
  }

  const strictHistoricalKeywords = [
    'time machine', 'time travel', 'historical figures', 'talk to history', 'historical headlines',
    'titanic resurrection', 'native american history', 'ancient calendar', 'historical map',
    'historical photography', 'historical demographics', 'historical royalty', 'historical geography',
    'historical literature', 'oraculum', 'interpretis', 'phenomenon explorer', 'hidden histories',
    'archaeological', 'artifact', 'heritage', 'medieval', 'renaissance', 'antiquity',
    'museum', 'archive', 'chronicle', 'manuscript', 'relic', 'fossil',
    'genealogy', 'ancestry', 'lineage', 'dynasty', 'monarchy', 'empire', 'kingdom',
    'revolution', 'war', 'battle', 'conquest', 'discovery', 'exploration', 'expedition',
    'prehistoric', 'paleolithic', 'neolithic', 'bronze age', 'iron age', 'stone age',
    'mystical', 'esoteric', 'occult', 'spiritual', 'divine', 'sacred', 'holy',
    'oracle', 'prophecy', 'divination', 'resurrection', 'reincarnation', 'afterlife',
    'temporal', 'chronological', 'anachronism'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  
  // Exclude major LLMs from historical category
  if (isMajorLLM(tool)) {
    return false;
  }
  
  // Check for specific historical tool names
  const historicalToolNames = [
    'time machine gpt', 'talk to history', 'historical headlines', 'titanic resurrection',
    'native american history', 'oraculum', 'interpretis', 'phenomenon explorer',
    'hidden histories', 'nikola tesla gpt', 'albert einstein gpt', 'alan watts gpt',
    'mary magdalene gpt', 'talk to the gods', 'fortune teller'
  ];
  
  const isHistoricalToolByName = historicalToolNames.some(name => 
    titleLower.includes(name)
  );
  
  if (isHistoricalToolByName) {
    return true;
  }
  
  // Check for strict historical keywords in title or primary description
  return strictHistoricalKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    (descriptionLower.includes(keyword) && 
     (descriptionLower.includes('historical') || descriptionLower.includes('history') || 
      descriptionLower.includes('time travel') || descriptionLower.includes('ancient')))
  );
};

// Helper function to detect industry-specific tools - COMPREHENSIVE DETECTION
const isIndustrySpecificTool = (tool: Tool): boolean => {
  const industryKeywords = [
    // Healthcare & Medical
    'health', 'medical', 'wellness', 'healthcare', 'medicine', 'doctor', 'physician',
    'nurse', 'pharmacy', 'pharmaceutical', 'clinic', 'hospital', 'patient', 'therapy',
    'treatment', 'diagnosis', 'mental health', 'dental', 'veterinary', 'fitness',
    'nutrition', 'diet', 'exercise', 'lifestyle', 'personal care', 'skincare',
    'cannabis', 'insurance claims', 'genome', 'pharma', 'drug', 'medication',
    'marriage mender', 'mixologist', 'food quality', 'dr. gpt', 'personalized dr',
    'skin care', 'dermatology', 'beauty advice', 'cosmetics', 'oral care', 'oral health',
    
    // Education & Learning
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'university', 'college', 'school', 'degree', 'certification',
    'workshop', 'seminar', 'lecture', 'instruction', 'student', 'learner', 'classroom',
    'insect study', 'entomology', 'species research', 'biological studies',
    
    // Legal & Government
    'legal', 'law', 'lawyer', 'attorney', 'court', 'judge', 'litigation', 'contract',
    'compliance', 'regulation', 'policy', 'government', 'legislation', 'civic',
    'public defender', 'legal drafting', 'testimony',
    
    // Emergency & Safety
    'emergency', 'firefighter', 'police', 'paramedic', 'safety', 'security', 'rescue',
    'disaster', 'crisis', 'first aid', 'surveillance', 'cybersecurity',
    
    // Creative Industries
    'graphic design', 'design', 'art', 'creative', 'photography', 'video editing',
    'music', 'audio', 'film', 'movie', 'animation', 'gaming', 'game design',
    'tattoo', 'sketch', 'illustration', 'coloring book', 'children\'s book',
    
    // Business & Finance
    'business', 'finance', 'accounting', 'trading', 'investment', 'banking',
    'insurance', 'real estate', 'property', 'startup', 'entrepreneur',
    'sales', 'marketing', 'consultant', 'hr', 'human resources',
    
    // Engineering & Technical
    'engineering', 'engineer', 'technical', 'software', 'hardware', 'robotics',
    'construction', 'architecture', 'automotive', 'aerospace', 'manufacturing',
    'energy', 'environmental', 'agriculture', 'farming', 'solar',
    
    // Hospitality & Food
    'restaurant', 'cooking', 'chef', 'food', 'culinary', 'hospitality',
    'tourism', 'travel', 'hotel', 'catering', 'beverage', 'wine',
    
    // Science & Research
    'research', 'scientist', 'laboratory', 'analysis', 'data science',
    'archaeology', 'geology', 'astronomy', 'physics', 'chemistry', 'biology',
    'psychology', 'sociology', 'anthropology', 'statistics',
    
    // Specialized Services
    'appraisal', 'valuation', 'inspection', 'consulting', 'coaching',
    'fitness training', 'personal trainer', 'life coach', 'spiritual',
    'astrology', 'fortune telling', 'prediction'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // Exclude major LLMs from being classified as industry-specific
  if (isMajorLLM(tool)) {
    return false;
  }
  
  const isIndustryByKeyword = industryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Also check if it's already categorized as an industry-specific category
  const industryCategories = [
    'health', 'medical', 'education', 'legal', 'professional', 'emergency',
    'creative', 'business', 'finance', 'engineering', 'technical', 'hospitality',
    'food', 'science', 'research', 'specialized', 'industry'
  ];
  
  const isIndustryByCategory = industryCategories.some(cat => 
    categoryLower.includes(cat)
  );
  
  return isIndustryByKeyword || isIndustryByCategory;
};

// Helper function to detect content creation tools
const isContentCreationTool = (tool: Tool): boolean => {
  const contentKeywords = [
    'writing', 'content creation', 'blog', 'article', 'copywriting', 'content generator',
    'text generation', 'story writing', 'book writing', 'screenplay', 'script',
    'marketing copy', 'social media content', 'email writing', 'creative writing',
    'grammar', 'proofreading', 'editing', 'content enhancement', 'seo writing'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return contentKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    categoryLower.includes(keyword)
  ) || isMajorLLM(tool); // Include major LLMs in content creation
};

// Helper function to detect data analytics tools
const isDataAnalyticsTool = (tool: Tool): boolean => {
  const analyticsKeywords = [
    'data analysis', 'analytics', 'statistics', 'data science', 'data visualization',
    'business intelligence', 'reporting', 'dashboard', 'metrics', 'insights',
    'predictive analytics', 'machine learning', 'ai analysis', 'data mining',
    'research analysis', 'data processing', 'computational analysis'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return analyticsKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    categoryLower.includes(keyword)
  ) || isMajorLLM(tool); // Include major LLMs in data analytics
};

// Build cache once for instant category filtering
const buildToolsCache = (tools: Tool[]) => {
  // Force rebuild if cache exists but we need to refresh
  if (cacheBuilt) {
    console.log('🔄 Forcing cache rebuild for industry-specific consolidation...');
    toolsCacheByMainCategory.clear();
    cacheBuilt = false;
  }
  
  if (cacheBuilt) return;
  
  console.log('🚀 Building tools cache for instant category filtering...');
  const startTime = performance.now();
  
  toolsCacheByMainCategory.clear();
  
  // Pre-process AI Web Tools GPTs once
  const aiWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool));
  
  // Pre-process chat/assistant tools once
  const chatRelatedTools = tools.filter(tool => isAIChatAssistantTool(tool));
  
  // Pre-process ALL industry-specific tools once - FORCE EVERYTHING INTO ONE CATEGORY
  const industrySpecificTools = tools.filter(tool => {
    const isIndustryTool = isIndustrySpecificTool(tool);
    // Force all industry-specific tools to have the unified category
    if (isIndustryTool && tool.category !== "Industry Specific AI TOOLS") {
      console.log(`🔄 Force updating industry tool category: ${tool.title} from "${tool.category}" to "Industry Specific AI TOOLS"`);
      tool.category = "Industry Specific AI TOOLS";
    }
    return isIndustryTool;
  });
  
  // Pre-process STRICTLY historical tools (excluding industry-specific tools and major LLMs)
  const strictHistoricalTools = tools.filter(tool => isStrictlyHistoricalTimeRelatedTool(tool));
  
  // Pre-process video tools once
  const videoRelatedTools = tools.filter(tool => isVideoRelatedTool(tool));
  
  // Pre-process content creation tools (including major LLMs)
  const contentCreationTools = tools.filter(tool => isContentCreationTool(tool));
  
  // Pre-process data analytics tools (including major LLMs)
  const dataAnalyticsTools = tools.filter(tool => isDataAnalyticsTool(tool));
  
  console.log(`🏭 Industry-specific tools found: ${industrySpecificTools.length}`);
  console.log(`🕰️ Strict historical tools found: ${strictHistoricalTools.length}`);
  console.log(`✍️ Content creation tools found: ${contentCreationTools.length}`);
  console.log(`📊 Data analytics tools found: ${dataAnalyticsTools.length}`);
  
  mainCategories.forEach(mainCat => {
    let categoryTools: Tool[] = [];
    
    // Handle special categories with pre-processed data
    if (mainCat.name === "AI WEB TOOLS ORIGINALS") {
      categoryTools = [...aiWebToolsGPTs];
    } 
    else if (mainCat.name === "ALL AI TOOLS") {
      categoryTools = [...tools]; // Show ALL tools without any filtering
    }
    else if (mainCat.name === "AI CHAT & ASSISTANTS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const majorLLMs = tools.filter(tool => isMajorLLM(tool));
      
      const allChatTools = [...subcategoryTools, ...chatRelatedTools, ...majorLLMs];
      categoryTools = allChatTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "CONTENT CREATION & WRITING") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allContentTools = [...subcategoryTools, ...contentCreationTools];
      categoryTools = allContentTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "DATA & ANALYTICS AI TOOLS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const enhancedDataTools = getDataAnalyticsTools(tools, mainCat.name);
      const allDataTools = [...subcategoryTools, ...enhancedDataTools, ...dataAnalyticsTools];
      categoryTools = allDataTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "Industry Specific AI TOOLS") {
      // CRITICAL: ONLY ONE UNIFIED INDUSTRY CATEGORY - USE ALL INDUSTRY TOOLS
      categoryTools = [...industrySpecificTools]; // Use ALL the pre-processed industry tools
      
      console.log(`🏭 FINAL UNIFIED Industry category tools: ${categoryTools.length}`);
      console.log(`📝 Sample industry tools: ${categoryTools.slice(0, 5).map(t => t.title).join(', ')}`);
    }
    else if (mainCat.name === "HISTORICAL & TIME-BASED AI TOOLS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allHistoricalTools = [...subcategoryTools, ...strictHistoricalTools];
      categoryTools = allHistoricalTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "VIDEO & MULTIMEDIA") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allVideoTools = [...subcategoryTools, ...videoRelatedTools];
      categoryTools = allVideoTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "AUTOMATION PLATFORMS") {
      categoryTools = getAutomationPlatformsTools(tools, mainCat.name);
    }
    else if (mainCat.name === "COMMUNICATION & COLLABORATION AI TOOLS") {
      categoryTools = getCommunicationCollaborationTools(tools, mainCat.name);
    }
    else {
      // Standard subcategory matching for other categories
      categoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
    }
    
    // Store the exact tools count for this category
    toolsCacheByMainCategory.set(mainCat.name, categoryTools);
    console.log(`📊 Category "${mainCat.name}": ${categoryTools.length} tools cached`);
  });
  
  cacheBuilt = true;
  const endTime = performance.now();
  console.log(`✅ Tools cache built in ${(endTime - startTime).toFixed(2)}ms for instant category access`);
  
  // Debug log to verify cache integrity
  console.log('🔍 Cache verification:');
  mainCategories.forEach(mainCat => {
    const count = toolsCacheByMainCategory.get(mainCat.name)?.length || 0;
    console.log(`  ${mainCat.name}: ${count} tools`);
  });
};

// Helper function to detect AI Web Tools GPTs
const isAIWebToolsGPT = (tool: Tool): boolean => {
  return tool.directUrl?.includes('lovable.app') || 
         tool.directUrl?.includes('aiwebtools') ||
         tool.description?.toLowerCase().includes('aiwebtools') ||
         tool.tags?.some(tag => tag.toLowerCase().includes('aiwebtools'));
};

// Helper function to detect AI Chat & Assistant tools with enhanced matching
const isAIChatAssistantTool = (tool: Tool): boolean => {
  const chatKeywords = [
    'chat', 'chatbot', 'assistant', 'conversational ai', 'ai chat', 'dialogue',
    'conversation', 'virtual assistant', 'personal ai', 'ai companion', 'smart assistant',
    'digital assistant', 'voice assistant', 'text assistant', 'ai support', 'chatgpt',
    'claude', 'gemini', 'bard', 'ai helper', 'task assistant', 'productivity assistant',
    'ai bot', 'smart bot', 'intelligent assistant', 'language model', 'llm', 'gpt',
    'ai communication', 'messaging ai', 'interactive ai', 'natural language ai',
    'ai interaction', 'response ai', 'query ai', 'question answering', 'ai guidance',
    'ai advisor', 'consultation ai', 'recommendation ai', 'planning ai', 'strategy ai'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return chatKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  ) || isMajorLLM(tool); // Include major LLMs in chat category
};

export const getCategoriesWithCounts = (tools: Tool[]): CategoryCounts => {
  const categoryCounts: CategoryCounts = {};
  
  tools.forEach(tool => {
    const category = tool.category;
    if (category) {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

export const getToolsByCategory = (tools: Tool[], categoryName: string): Tool[] => {
  // Special handling for AI Web Tools Originals category
  if (categoryName === "AI WEB TOOLS ORIGINALS" || categoryName === "AI Web Tools Originals") {
    return tools.filter(tool => isAIWebToolsGPT(tool));
  }
  
  // Special handling for Data & Analytics category
  if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
    return getDataAnalyticsTools(tools, categoryName);
  }
  
  // Special handling for Marketing & Sales category
  if (categoryName === "MARKETING & SALES AI TOOLS" || categoryName === "Marketing & Analytics" || categoryName === "E-commerce & Marketing Tools" || categoryName === "Business & Sales Tools") {
    return getMarketingSalesTools(tools, categoryName);
  }
  
  // Enhanced handling for Communication & Collaboration category
  if (categoryName === "COMMUNICATION & COLLABORATION AI TOOLS" || categoryName === "Communication & Entertainment" || categoryName === "Communication Tools") {
    return getCommunicationCollaborationTools(tools, categoryName);
  }
  
  // Special handling for Automation Platforms category
  if (categoryName === "AUTOMATION PLATFORMS" || categoryName === "Automation Platforms" || categoryName === "Automation & Workflows") {
    return getAutomationPlatformsTools(tools, categoryName);
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  // Build cache if not built yet
  buildToolsCache(tools);
  
  const mainCategoryCounts: MainCategoryCounts = {};
  
  // Use cached results for instant counts
  mainCategories.forEach(mainCat => {
    const cachedTools = toolsCacheByMainCategory.get(mainCat.name) || [];
    mainCategoryCounts[mainCat.name] = cachedTools.length;
  });
  
  console.log('📊 Main category counts:', mainCategoryCounts);
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🚀 Fast lookup for main category: "${mainCategoryName}"`);
  
  // Build cache if not built yet
  buildToolsCache(tools);
  
  // Return cached results instantly - these are the EXACT same tools used for counting
  const cachedTools = toolsCacheByMainCategory.get(mainCategoryName);
  
  if (cachedTools) {
    console.log(`✅ Instant cache hit! Returning ${cachedTools.length} tools for "${mainCategoryName}"`);
    console.log(`🔍 First 5 tools: ${cachedTools.slice(0, 5).map(t => t.title).join(', ')}`);
    return cachedTools;
  }
  
  console.warn(`❌ No cache found for main category "${mainCategoryName}"`);
  return [];
};
