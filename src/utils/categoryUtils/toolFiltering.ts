
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

// Helper function to detect historical and time-based tools
const isHistoricalTimeRelatedTool = (tool: Tool): boolean => {
  const historicalKeywords = [
    'historical', 'history', 'time', 'ancient', 'past', 'timeline', 'era', 'period',
    'civilization', 'archaeology', 'archaeological', 'artifact', 'heritage', 'legacy',
    'medieval', 'renaissance', 'antiquity', 'vintage', 'retro', 'classic', 'traditional',
    'museum', 'archive', 'chronicle', 'documentary', 'manuscript', 'relic', 'fossil',
    'genealogy', 'ancestry', 'lineage', 'dynasty', 'monarchy', 'empire', 'kingdom',
    'revolution', 'war', 'battle', 'conquest', 'discovery', 'exploration', 'expedition',
    'philosopher', 'philosophy', 'wisdom', 'culture', 'cultural', 'ethnic', 'tribal',
    'folklore', 'legend', 'myth', 'mythology', 'epic', 'saga', 'tale', 'story',
    'einstein', 'tesla', 'newton', 'shakespeare', 'aristotle', 'plato', 'socrates',
    'napoleon', 'caesar', 'cleopatra', 'lincoln', 'washington', 'churchill',
    'titanic', 'pyramids', 'colosseum', 'stonehenge', 'pharaoh', 'viking', 'samurai',
    'gregorian', 'julian', 'calendar', 'chronology', 'decades', 'centuries', 'millennium',
    'prehistoric', 'paleolithic', 'neolithic', 'bronze age', 'iron age', 'stone age',
    'mystical', 'esoteric', 'occult', 'spiritual', 'divine', 'sacred', 'holy',
    'oracle', 'prophecy', 'divination', 'tarot', 'astrology', 'zodiac', 'horoscope',
    'resurrection', 'reincarnation', 'afterlife', 'eternity', 'immortal', 'eternal',
    'time machine', 'time travel', 'temporal', 'chronological', 'anachronism',
    'alan watts', 'mary magdalene', 'jesus', 'buddha', 'confucius', 'lao tzu'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return historicalKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
};

// Helper function to detect educational tools (including historical education)
const isEducationRelatedTool = (tool: Tool): boolean => {
  const educationKeywords = [
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'skill', 'knowledge', 'research', 'university', 'college', 'school',
    'degree', 'certification', 'workshop', 'seminar', 'lecture', 'instruction',
    'pedagogy', 'student', 'learner', 'classroom', 'assessment', 'evaluation',
    'comprehension', 'understanding', 'analysis', 'critical thinking', 'problem solving',
    'science education', 'mathematics education', 'language learning', 'history learning',
    'educational simulation', 'learning platform', 'study guide', 'educational content'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return educationKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
};

// Build cache once for instant category filtering
const buildToolsCache = (tools: Tool[]) => {
  if (cacheBuilt) return;
  
  console.log('🚀 Building tools cache for instant category filtering...');
  const startTime = performance.now();
  
  toolsCacheByMainCategory.clear();
  
  // Pre-process AI Web Tools GPTs once
  const aiWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool));
  
  // Pre-process chat/assistant tools once
  const chatRelatedTools = tools.filter(tool => isAIChatAssistantTool(tool));
  
  // Pre-process health tools once  
  const healthRelatedTools = tools.filter(tool => isHealthRelatedTool(tool));
  
  // Pre-process historical tools once
  const historicalRelatedTools = tools.filter(tool => isHistoricalTimeRelatedTool(tool));
  
  // Pre-process education tools once (including historical education)
  const educationRelatedTools = tools.filter(tool => isEducationRelatedTool(tool));
  
  // Pre-process video tools once
  const videoRelatedTools = tools.filter(tool => isVideoRelatedTool(tool));
  
  // INVESTIGATION: Log communication & collaboration tools analysis
  console.log('🔍 INVESTIGATING COMMUNICATION & COLLABORATION TOOLS...');
  const allCommCategoryNames = tools.map(tool => tool.category).filter(Boolean);
  const uniqueCommCategories = [...new Set(allCommCategoryNames)];
  console.log('📋 All unique categories in database:', uniqueCommCategories);
  
  const commRelatedCategories = uniqueCommCategories.filter(cat => 
    cat?.toLowerCase().includes('communication') ||
    cat?.toLowerCase().includes('collaboration') ||
    cat?.toLowerCase().includes('entertainment') ||
    cat?.toLowerCase().includes('chat') ||
    cat?.toLowerCase().includes('social')
  );
  console.log('🎯 Communication-related categories found:', commRelatedCategories);
  
  const potentialCommTools = tools.filter(tool => 
    tool.category && (
      tool.category.toLowerCase().includes('communication') ||
      tool.category.toLowerCase().includes('collaboration') ||
      tool.category.toLowerCase().includes('entertainment') ||
      tool.category.toLowerCase().includes('chat') ||
      tool.category.toLowerCase().includes('social')
    )
  );
  console.log('🔧 Total potential communication tools found:', potentialCommTools.length);
  console.log('📝 Sample potential comm tools:', potentialCommTools.slice(0, 10).map(t => `${t.title} (${t.category})`));
  
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
      // Combine subcategory matches with content analysis
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Merge and deduplicate by title only
      const allChatTools = [...subcategoryTools, ...chatRelatedTools];
      categoryTools = allChatTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "EDUCATION & LEARNING") {
      // Enhanced education category that includes historical education tools
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Include educational historical tools that may not be in education categories
      const historicalEducationTools = historicalRelatedTools.filter(tool => 
        isEducationRelatedTool(tool) || 
        tool.description.toLowerCase().includes('educational') ||
        tool.description.toLowerCase().includes('learning') ||
        tool.description.toLowerCase().includes('student') ||
        tool.description.toLowerCase().includes('perfect for students')
      );
      
      const allEducationTools = [...subcategoryTools, ...educationRelatedTools, ...historicalEducationTools];
      categoryTools = allEducationTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allHealthTools = [...subcategoryTools, ...healthRelatedTools];
      categoryTools = allHealthTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
    }
    else if (mainCat.name === "HISTORICAL & TIME-BASED AI TOOLS") {
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      const allHistoricalTools = [...subcategoryTools, ...historicalRelatedTools];
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
    else if (mainCat.name === "DATA & ANALYTICS AI TOOLS") {
      categoryTools = getDataAnalyticsTools(tools, mainCat.name);
    }
    else if (mainCat.name === "AUTOMATION PLATFORMS") {
      categoryTools = getAutomationPlatformsTools(tools, mainCat.name);
    }
    else if (mainCat.name === "COMMUNICATION & COLLABORATION AI TOOLS") {
      // DETAILED INVESTIGATION for this specific category
      console.log('🕵️ DEEP DIVE: COMMUNICATION & COLLABORATION AI TOOLS');
      console.log('📊 Main category subcategories:', mainCat.subcategories);
      
      categoryTools = getCommunicationCollaborationTools(tools, mainCat.name);
      
      console.log('🎯 Final communication tools after getCommunicationCollaborationTools:', categoryTools.length);
      console.log('📋 Communication tools list:', categoryTools.map(t => `${t.title} (${t.category})`));
      
      // Let's also check what the subcategory matching would find
      const subcategoryMatchedTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      console.log('🔍 Subcategory matched tools:', subcategoryMatchedTools.length);
      console.log('📝 Subcategory matched tools list:', subcategoryMatchedTools.map(t => `${t.title} (${t.category})`));
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
  );
};

// Helper function to detect health-related tools
const isHealthRelatedTool = (tool: Tool): boolean => {
  const healthKeywords = [
    'health', 'medical', 'wellness', 'healthcare', 'medicine', 'doctor', 'physician',
    'nurse', 'pharmacy', 'pharmaceutical', 'clinic', 'hospital', 'patient', 'therapy',
    'treatment', 'diagnosis', 'mental health', 'dental', 'veterinary', 'fitness',
    'nutrition', 'diet', 'exercise', 'lifestyle', 'personal care', 'skincare',
    'cannabis', 'insurance claims', 'genome', 'pharma', 'drug', 'medication'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return healthKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
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
