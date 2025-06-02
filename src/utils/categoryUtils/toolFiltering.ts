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
  // First check if it's primarily an educational tool - if so, exclude it from historical category
  if (isPrimaryEducationTool(tool)) {
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
  
  // Exclude major LLMs and general education tools from historical category
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

// Helper function to detect PRIMARY education tools
const isPrimaryEducationTool = (tool: Tool): boolean => {
  const primaryEducationKeywords = [
    'quiz maker', 'course maker', 'training manual', 'children\'s book', 'homework helper',
    'essay writer', 'learn any course', 'learn any skill', 'college degree', 'home school',
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'university', 'college', 'school', 'degree', 'certification',
    'workshop', 'seminar', 'lecture', 'instruction', 'student', 'learner', 'classroom',
    'insect study', 'entomology', 'species research', 'biological studies'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // Exclude major LLMs from being classified as primary education tools
  if (isMajorLLM(tool)) {
    return false;
  }
  
  // CRITICAL: Force Insect Study Tool to be education
  if (titleLower.includes('insect study')) {
    console.log(`🎓 FORCE: Insect Study Tool detected as PRIMARY EDUCATION tool`);
    return true;
  }
  
  // Check if it's explicitly an education tool by name or category
  const isEducationByCategory = categoryLower.includes('education') || 
                               categoryLower.includes('learning');
  
  const isEducationByTitle = primaryEducationKeywords.some(keyword => 
    titleLower.includes(keyword)
  );
  
  return isEducationByCategory || isEducationByTitle;
};

// Helper function to detect education-related tools (broader scope)
const isEducationRelatedTool = (tool: Tool): boolean => {
  return isPrimaryEducationTool(tool) || 
         (tool.category?.toLowerCase().includes('education')) ||
         (tool.category?.toLowerCase().includes('learning'));
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

// Helper function to detect health-related tools - ENHANCED TO EXCLUDE INSECT STUDY TOOL
const isHealthRelatedTool = (tool: Tool): boolean => {
  // CRITICAL: Explicitly exclude insect study tool from health category
  const titleLower = tool.title.toLowerCase();
  if (titleLower.includes('insect study') || titleLower.includes('entomology')) {
    console.log(`🚫 EXCLUDING from health: ${tool.title} - this is an education tool`);
    return false;
  }
  
  // CRITICAL: Also exclude if it's already properly categorized as education
  if (tool.category === "Education & Learning" || tool.category === "Education & Research Tools") {
    console.log(`🚫 EXCLUDING from health: ${tool.title} - already in education category`);
    return false;
  }
  
  const healthKeywords = [
    'health', 'medical', 'wellness', 'healthcare', 'medicine', 'doctor', 'physician',
    'nurse', 'pharmacy', 'pharmaceutical', 'clinic', 'hospital', 'patient', 'therapy',
    'treatment', 'diagnosis', 'mental health', 'dental', 'veterinary', 'fitness',
    'nutrition', 'diet', 'exercise', 'lifestyle', 'personal care', 'skincare',
    'cannabis', 'insurance claims', 'genome', 'pharma', 'drug', 'medication',
    'marriage mender', 'mixologist', 'food quality', 'dr. gpt', 'personalized dr',
    'skin care', 'dermatology', 'beauty advice', 'cosmetics', 'oral care', 'oral health'
  ];
  
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // Force specific health tools that might be miscategorized
  const forceHealthTools = [
    'mental wellness gpt',
    'personalized dr. gpt',
    'doctor gpt',
    'veterinarian gpt',
    'pharmaceutical assistant gpt',
    'pharma research pro',
    'genome gpt',
    'marriage mender gpt',
    'skin care gpt',
    'skincare gpt',
    'dental gpt',
    'cannabis gpt',
    'insurance claims gpt',
    'food quality inspector gpt',
    'mixologist gpt'
  ];
  
  // Check if it's a forced health tool
  const isForcedHealthTool = forceHealthTools.some(healthTool => 
    titleLower.includes(healthTool) || titleLower === healthTool
  );
  
  if (isForcedHealthTool) {
    console.log(`🏥 FORCE: Detected health tool by name: ${tool.title}`);
    return true;
  }
  
  const isHealthByKeyword = healthKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  if (isHealthByKeyword) {
    console.log(`🏥 KEYWORD: Detected health tool: ${tool.title}`);
  }
  
  return isHealthByKeyword;
};

// Helper function to detect ALL industry-specific tools (comprehensive detection)
const isIndustrySpecificTool = (tool: Tool): boolean => {
  // Industry-specific keywords covering all major industries
  const industryKeywords = [
    // Healthcare & Medical
    'health', 'medical', 'wellness', 'healthcare', 'medicine', 'doctor', 'physician',
    'nurse', 'pharmacy', 'pharmaceutical', 'clinic', 'hospital', 'patient', 'therapy',
    'treatment', 'diagnosis', 'mental health', 'dental', 'veterinary', 'fitness',
    'nutrition', 'diet', 'exercise', 'lifestyle', 'personal care', 'skincare',
    'cannabis', 'insurance claims', 'genome', 'pharma', 'drug', 'medication',
    
    // Legal
    'legal', 'law', 'attorney', 'lawyer', 'court', 'judge', 'contract', 'litigation',
    'compliance', 'legislation', 'defender', 'justice', 'paralegal',
    
    // Education
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'university', 'college', 'school', 'degree', 'certification',
    'insect study', 'entomology', 'species research', 'biological studies',
    
    // Creative Arts & Design
    'graphic design', 'design', 'art', 'creative', 'illustration', 'photography',
    'video editing', 'animation', 'music', 'audio', 'tattoo', 'sketch', 'drawing',
    'painting', 'sculpture', 'pottery', 'crafts', 'fashion', 'interior design',
    'architecture', 'typography', 'branding', 'logo', 'visual', 'aesthetic',
    
    // Culinary & Food
    'cooking', 'chef', 'culinary', 'recipe', 'food', 'restaurant', 'kitchen',
    'baking', 'pastry', 'nutrition', 'mixologist', 'bartender', 'cocktail',
    'food quality', 'cuisine', 'gastronomy', 'menu', 'dining',
    
    // Agriculture & Farming
    'farming', 'agriculture', 'crop', 'livestock', 'harvest', 'soil', 'irrigation',
    'greenhouse', 'organic', 'pesticide', 'fertilizer', 'agronomist',
    
    // Real Estate & Property
    'real estate', 'property', 'housing', 'mortgage', 'rental', 'appraisal',
    'land', 'construction', 'renovation', 'home', 'building',
    
    // Finance & Trading
    'finance', 'trading', 'investment', 'banking', 'insurance', 'accounting',
    'tax', 'credit', 'loan', 'budget', 'financial planning', 'wealth management',
    
    // Transportation & Automotive
    'automotive', 'car', 'vehicle', 'transportation', 'logistics', 'shipping',
    'trucking', 'aviation', 'maritime', 'railway',
    
    // Manufacturing & Industrial
    'manufacturing', 'industrial', 'factory', 'production', 'assembly',
    'quality control', 'supply chain', 'robotics', 'automation',
    
    // Energy & Utilities
    'energy', 'solar', 'renewable', 'electricity', 'oil', 'gas', 'utility',
    'power generation', 'grid', 'sustainable',
    
    // Entertainment & Media
    'entertainment', 'media', 'broadcasting', 'journalism', 'publishing',
    'film', 'television', 'radio', 'gaming', 'sports', 'theater',
    
    // Science & Research
    'research', 'laboratory', 'scientific', 'experiment', 'analysis',
    'archaeology', 'geology', 'biology', 'chemistry', 'physics',
    'astronomy', 'meteorology', 'environmental science',
    
    // Emergency & Safety
    'emergency', 'firefighter', 'police', 'security', 'safety', 'rescue',
    'disaster', 'crisis management', 'first aid', 'paramedic',
    
    // Retail & E-commerce
    'retail', 'e-commerce', 'shopping', 'merchandising', 'inventory',
    'customer service', 'sales', 'marketing', 'advertising',
    
    // Tourism & Hospitality
    'tourism', 'hospitality', 'hotel', 'travel', 'vacation', 'booking',
    'restaurant', 'catering', 'event planning',
    
    // Telecommunications
    'telecommunications', 'telecom', 'network', 'wireless', 'internet',
    'communication', 'phone', 'mobile', 'broadband',
    
    // Textiles & Fashion
    'fashion', 'textile', 'clothing', 'apparel', 'fabric', 'garment',
    'styling', 'trend', 'runway', 'boutique'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // Check if tool matches any industry-specific keywords
  const matchesIndustryKeywords = industryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Also include tools that are already in known industry categories
  const industryCategories = [
    'health', 'medical', 'legal', 'education', 'creative', 'entertainment',
    'professional services', 'emergency', 'finance', 'specialized', 'robotics'
  ];
  
  const isInIndustryCategory = industryCategories.some(category => 
    categoryLower.includes(category)
  );
  
  if (matchesIndustryKeywords || isInIndustryCategory) {
    console.log(`🏭 INDUSTRY: Detected industry-specific tool: ${tool.title}`);
    return true;
  }
  
  return false;
};

// Build cache once for instant category filtering
const buildToolsCache = (tools: Tool[]) => {
  // Force rebuild if cache exists but we need to refresh
  if (cacheBuilt) {
    console.log('🔄 Forcing cache rebuild for industry category consolidation...');
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
  
  // Pre-process ALL industry-specific tools once - COMPREHENSIVE DETECTION
  const industrySpecificTools = tools.filter(tool => {
    const isIndustryTool = isIndustrySpecificTool(tool);
    return isIndustryTool;
  });
  
  // Pre-process STRICTLY historical tools (excluding education tools and major LLMs)
  const strictHistoricalTools = tools.filter(tool => isStrictlyHistoricalTimeRelatedTool(tool));
  
  // Pre-process education tools once (including historical education but excluding major LLMs)
  const educationRelatedTools = tools.filter(tool => isEducationRelatedTool(tool));
  
  // Pre-process video tools once
  const videoRelatedTools = tools.filter(tool => isVideoRelatedTool(tool));
  
  // Pre-process content creation tools (including major LLMs)
  const contentCreationTools = tools.filter(tool => isContentCreationTool(tool));
  
  // Pre-process data analytics tools (including major LLMs)
  const dataAnalyticsTools = tools.filter(tool => isDataAnalyticsTool(tool));
  
  console.log(`🎓 Education tools found: ${educationRelatedTools.length}`);
  console.log(`🕰️ Strict historical tools found: ${strictHistoricalTools.length}`);
  console.log(`✍️ Content creation tools found: ${contentCreationTools.length}`);
  console.log(`📊 Data analytics tools found: ${dataAnalyticsTools.length}`);
  console.log(`🏭 INDUSTRY SPECIFIC tools found: ${industrySpecificTools.length}`);
  
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
    else if (mainCat.name === "EDUCATION & LEARNING") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const educationalHistoricalTools = tools.filter(tool => 
        isPrimaryEducationTool(tool) && 
        (tool.description.toLowerCase().includes('historical') || 
         tool.description.toLowerCase().includes('history'))
      );
      
      const allEducationTools = [...subcategoryTools, ...educationRelatedTools, ...educationalHistoricalTools];
      categoryTools = allEducationTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "INDUSTRY SPECIFIC AI TOOLS") {
      // COMPREHENSIVE INDUSTRY TOOLS CATEGORY - INCLUDE ALL INDUSTRY-SPECIFIC TOOLS
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Combine subcategory tools with comprehensive industry detection
      const allIndustryTools = [...subcategoryTools, ...industrySpecificTools];
      categoryTools = allIndustryTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
      
      console.log(`🏭 FINAL Industry Specific category tools: ${categoryTools.length}`);
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
