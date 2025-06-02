
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
  const mainCategoryCounts: MainCategoryCounts = {};
  
  mainCategories.forEach(mainCat => {
    let count = 0;
    
    // Special handling for AI WEB TOOLS ORIGINALS
    if (mainCat.name === "AI WEB TOOLS ORIGINALS") {
      count = tools.filter(tool => isAIWebToolsGPT(tool)).length;
    } 
    // Enhanced handling for AI CHAT & ASSISTANTS
    else if (mainCat.name === "AI CHAT & ASSISTANTS") {
      // Get tools that match subcategories
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Also get tools that are chat/assistant-related by content analysis
      const chatRelatedTools = tools.filter(tool => isAIChatAssistantTool(tool));
      
      // Combine and deduplicate
      const allChatTools = [...subcategoryTools, ...chatRelatedTools];
      const uniqueChatTools = allChatTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
      
      count = uniqueChatTools.length;
      
      console.log(`🤖 AI CHAT & ASSISTANTS enhanced counting:`, {
        subcategoryMatched: subcategoryTools.length,
        contentMatched: chatRelatedTools.length,
        uniqueTotal: uniqueChatTools.length,
        sampleTitles: uniqueChatTools.slice(0, 10).map(t => t.title)
      });
    }
    // Special enhanced handling for Health, Wellness & Personal Lifestyle
    else if (mainCat.name === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
      // Get tools that match subcategories
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Also get tools that are health-related by content analysis
      const healthRelatedTools = tools.filter(tool => isHealthRelatedTool(tool));
      
      // Combine and deduplicate
      const allHealthTools = [...subcategoryTools, ...healthRelatedTools];
      const uniqueHealthTools = allHealthTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
      
      count = uniqueHealthTools.length;
    } 
    // Special enhanced handling for Historical & Time-Based AI Tools
    else if (mainCat.name === "HISTORICAL & TIME-BASED AI TOOLS") {
      // Get tools that match subcategories
      const subcategoryTools = tools.filter(tool => {
        if (!tool.category) return false;
        return mainCat.subcategories.some(subcat => 
          isSimilarCategory(tool.category, subcat)
        );
      });
      
      // Also get tools that are historical/time-related by content analysis
      const historicalRelatedTools = tools.filter(tool => isHistoricalTimeRelatedTool(tool));
      
      // Combine and deduplicate
      const allHistoricalTools = [...subcategoryTools, ...historicalRelatedTools];
      const uniqueHistoricalTools = allHistoricalTools.filter((tool, index, self) => 
        index === self.findIndex(t => t.title === tool.title)
      );
      
      count = uniqueHistoricalTools.length;
    } 
    else {
      mainCat.subcategories.forEach(subcat => {
        const categoryTools = getToolsByCategory(tools, subcat);
        count += categoryTools.length;
      });
    }
    
    mainCategoryCounts[mainCat.name] = count;
  });
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 Getting tools for main category: "${mainCategoryName}"`);
  console.log(`📊 Total available tools in database: ${tools.length}`);
  
  // Special case for "AI WEB TOOLS ORIGINALS" - return all AI Web Tools GPTs
  if (mainCategoryName === "AI WEB TOOLS ORIGINALS") {
    console.log(`🌟 AI WEB TOOLS ORIGINALS requested - filtering AI Web Tools GPTs`);
    
    const aiWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool));
    
    console.log(`✅ Found ${aiWebToolsGPTs.length} AI Web Tools GPTs for AI WEB TOOLS ORIGINALS`);
    return aiWebToolsGPTs;
  }
  
  // Special case for "ALL AI TOOLS" - return ALL tools with AI Web Tools GPTs prioritized
  if (mainCategoryName === "ALL AI TOOLS") {
    console.log(`🌟 ALL AI TOOLS requested - returning all ${tools.length} tools with prioritization`);
    
    const aiWebToolsGPTs = tools.filter(tool => isAIWebToolsGPT(tool));
    const otherTools = tools.filter(tool => !isAIWebToolsGPT(tool));
    
    console.log(`🎯 AI Web Tools GPTs: ${aiWebToolsGPTs.length}, Other tools: ${otherTools.length}`);
    
    const allToolsWithPriority = [...aiWebToolsGPTs, ...otherTools];
    console.log(`✅ Returning total of ${allToolsWithPriority.length} tools for ALL AI TOOLS`);
    
    return allToolsWithPriority;
  }
  
  // Enhanced handling for AI CHAT & ASSISTANTS
  if (mainCategoryName === "AI CHAT & ASSISTANTS") {
    console.log(`🤖 AI CHAT & ASSISTANTS requested - using enhanced matching`);
    
    const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
    if (!mainCategory) return [];
    
    // Get tools that match subcategories
    const subcategoryTools = tools.filter(tool => {
      if (!tool.category) return false;
      return mainCategory.subcategories.some(subcat => 
        isSimilarCategory(tool.category, subcat)
      );
    });
    
    // Also get tools that are chat/assistant-related by content analysis
    const chatRelatedTools = tools.filter(tool => isAIChatAssistantTool(tool));
    
    // Combine and deduplicate
    const allChatTools = [...subcategoryTools, ...chatRelatedTools];
    const uniqueChatTools = allChatTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    console.log(`🤖 Found ${subcategoryTools.length} subcategory-matched tools, ${chatRelatedTools.length} content-matched tools, ${uniqueChatTools.length} total unique chat tools`);
    console.log(`🤖 Sample chat tools found:`, uniqueChatTools.slice(0, 10).map(t => ({ title: t.title, category: t.category })));
    
    return uniqueChatTools;
  }
  
  // Special enhanced handling for Health, Wellness & Personal Lifestyle
  if (mainCategoryName === "HEALTH, WELLNESS & PERSONAL LIFESTYLE") {
    console.log(`🏥 HEALTH, WELLNESS & PERSONAL LIFESTYLE requested - using enhanced matching`);
    
    const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
    if (!mainCategory) return [];
    
    // Get tools that match subcategories
    const subcategoryTools = tools.filter(tool => {
      if (!tool.category) return false;
      return mainCategory.subcategories.some(subcat => 
        isSimilarCategory(tool.category, subcat)
      );
    });
    
    // Also get tools that are health-related by content analysis
    const healthRelatedTools = tools.filter(tool => isHealthRelatedTool(tool));
    
    // Combine and deduplicate
    const allHealthTools = [...subcategoryTools, ...healthRelatedTools];
    const uniqueHealthTools = allHealthTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    console.log(`🏥 Found ${subcategoryTools.length} subcategory-matched tools, ${healthRelatedTools.length} content-matched tools, ${uniqueHealthTools.length} total unique health tools`);
    
    return uniqueHealthTools;
  }
  
  // Special enhanced handling for HISTORICAL & TIME-BASED AI TOOLS
  if (mainCategoryName === "HISTORICAL & TIME-BASED AI TOOLS") {
    console.log(`🕰️ HISTORICAL & TIME-BASED AI TOOLS requested - using enhanced matching`);
    
    const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
    if (!mainCategory) return [];
    
    // Get tools that match subcategories
    const subcategoryTools = tools.filter(tool => {
      if (!tool.category) return false;
      return mainCategory.subcategories.some(subcat => 
        isSimilarCategory(tool.category, subcat)
      );
    });
    
    // Also get tools that are historical/time-related by content analysis
    const historicalRelatedTools = tools.filter(tool => isHistoricalTimeRelatedTool(tool));
    
    // Combine and deduplicate
    const allHistoricalTools = [...subcategoryTools, ...historicalRelatedTools];
    const uniqueHistoricalTools = allHistoricalTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    console.log(`🕰️ Found ${subcategoryTools.length} subcategory-matched tools, ${historicalRelatedTools.length} content-matched tools, ${uniqueHistoricalTools.length} total unique historical tools`);
    console.log(`🕰️ Sample historical tools found:`, uniqueHistoricalTools.slice(0, 10).map(t => ({ title: t.title, category: t.category })));
    
    return uniqueHistoricalTools;
  }
  
  // Special case for "DATA & ANALYTICS AI TOOLS" - use enhanced matching
  if (mainCategoryName === "DATA & ANALYTICS AI TOOLS") {
    console.log(`📊 DATA & ANALYTICS AI TOOLS requested - using enhanced matching`);
    const analyticsTools = getDataAnalyticsTools(tools, mainCategoryName);
    console.log(`✅ Found ${analyticsTools.length} analytics tools`);
    return analyticsTools;
  }
  
  // Special case for "AUTOMATION PLATFORMS" - use enhanced matching
  if (mainCategoryName === "AUTOMATION PLATFORMS") {
    console.log(`🤖 AUTOMATION PLATFORMS requested - using enhanced matching`);
    const automationTools = getAutomationPlatformsTools(tools, mainCategoryName);
    console.log(`✅ Found ${automationTools.length} automation tools`);
    return automationTools;
  }
  
  // Special enhanced handling for VIDEO & MULTIMEDIA category
  if (mainCategoryName === "VIDEO & MULTIMEDIA") {
    console.log(`🎬 VIDEO & MULTIMEDIA category requested`);
    
    // Get tools that match video subcategories
    const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
    if (!mainCategory) return [];
    
    const categoryTools = tools.filter(tool => {
      if (!tool.category) return false;
      
      return mainCategory.subcategories.some(subcat => {
        const normalizedToolCategory = tool.category.toLowerCase().trim();
        const normalizedSubcat = subcat.toLowerCase().trim();
        
        return normalizedToolCategory === normalizedSubcat ||
               normalizedToolCategory.includes(normalizedSubcat) ||
               normalizedSubcat.includes(normalizedToolCategory);
      });
    });
    
    // Also get tools that are video-related by content analysis
    const videoRelatedTools = tools.filter(tool => isVideoRelatedTool(tool));
    
    // Combine and deduplicate
    const allVideoTools = [...categoryTools, ...videoRelatedTools];
    const uniqueVideoTools = allVideoTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    console.log(`🎥 Found ${categoryTools.length} category-matched tools, ${videoRelatedTools.length} content-matched tools, ${uniqueVideoTools.length} total unique video tools`);
    
    return uniqueVideoTools;
  }
  
  // Find the main category configuration
  const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
  
  if (!mainCategory) {
    console.warn(`❌ Main category "${mainCategoryName}" not found`);
    return [];
  }
  
  console.log(`📂 Found main category with ${mainCategory.subcategories.length} subcategories`);
  
  // Get tools that match any of the subcategories
  const categoryTools = tools.filter(tool => {
    if (!tool.category) return false;
    
    return mainCategory.subcategories.some(subcat => {
      const normalizedToolCategory = tool.category.toLowerCase().trim();
      const normalizedSubcat = subcat.toLowerCase().trim();
      
      return normalizedToolCategory === normalizedSubcat ||
             normalizedToolCategory.includes(normalizedSubcat) ||
             normalizedSubcat.includes(normalizedToolCategory);
    });
  });
  
  console.log(`✅ Found ${categoryTools.length} tools for main category "${mainCategoryName}"`);
  
  return categoryTools;
};
