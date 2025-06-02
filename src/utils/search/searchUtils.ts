import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { enhancedKeywordMatching, enhancedToolScoring } from "./enhancedKeywordMatching";

// Enhanced search function with better indexing for all tools
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  const expandedKeywords = getExpandedKeywords(searchTerm);
  
  console.log(`🔍 Enhanced search for: "${searchTerm}"`);
  console.log(`📝 Expanded keywords:`, expandedKeywords.slice(0, 10));
  
  const results = tools.filter(tool => {
    const toolText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    
    // PRIORITY 1: AGENTS SEARCH - HIGHEST PRIORITY
    if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
      // Top priority AI agent tools
      if (tool.title.toLowerCase().includes('chatgpt operator')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('manus autonomous agent')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('surf.new web agents')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('lindy ai automation')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('auto-gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('babyagi')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('agentgpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('god mode gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('ai town')) {
        return true;
      }
      
      // General agent matching
      if (tool.title.toLowerCase().includes('agent') || 
          tool.description.toLowerCase().includes('agent') ||
          tool.title.toLowerCase().includes('autonomous') ||
          tool.description.toLowerCase().includes('autonomous') ||
          tool.category?.toLowerCase().includes('agent') ||
          tool.tags?.some(tag => tag.toLowerCase().includes('agent'))) {
        return true;
      }
    }
    
    // PRIORITY 2: CODING AGENT SEARCH - HIGH PRIORITY
    if (lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
        (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent'))) {
      const codingAgentTools = [
        'lovable.dev',
        'bolt.new',
        'chatgpt operator',
        'manus autonomous agent',
        'auto-gpt',
        'agentgpt'
      ];
      
      // Exact match for priority coding agent tools
      if (codingAgentTools.some(codingTool => tool.title.toLowerCase().includes(codingTool))) {
        return true;
      }
      
      // General coding agent matching
      if (tool.title.toLowerCase().includes('coding') || 
          tool.description.toLowerCase().includes('coding') ||
          tool.title.toLowerCase().includes('code') ||
          tool.description.toLowerCase().includes('code') ||
          tool.title.toLowerCase().includes('programming') ||
          tool.description.toLowerCase().includes('programming') ||
          tool.category?.toLowerCase().includes('coding') ||
          tool.tags?.some(tag => tag.toLowerCase().includes('coding'))) {
        return true;
      }
    }
    
    // PRIORITY 3: WEB DESIGN SEARCH - HIGH PRIORITY
    if (lowerSearchTerm.includes('web design') || lowerSearchTerm.includes('website design') ||
        lowerSearchTerm.includes('web development') || lowerSearchTerm.includes('website development')) {
      const webDesignTools = [
        'lovable.dev',
        'bolt.new',
        'figma',
        'canva',
        'webflow',
        'framer'
      ];
      
      // Exact match for priority web design tools
      if (webDesignTools.some(webTool => tool.title.toLowerCase().includes(webTool))) {
        return true;
      }
      
      // General web design matching
      if (tool.title.toLowerCase().includes('web design') || 
          tool.description.toLowerCase().includes('web design') ||
          tool.title.toLowerCase().includes('website') ||
          tool.description.toLowerCase().includes('website') ||
          tool.title.toLowerCase().includes('web development') ||
          tool.description.toLowerCase().includes('web development') ||
          tool.category?.toLowerCase().includes('web') ||
          tool.tags?.some(tag => tag.toLowerCase().includes('web'))) {
        return true;
      }
    }
    
    // PRIORITY 4: TEXT TO WEBSITE SEARCH - HIGH PRIORITY
    if (lowerSearchTerm.includes('text to website') || lowerSearchTerm.includes('text-to-website') ||
        (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('website'))) {
      const textToWebsiteTools = [
        'lovable.dev',
        'bolt.new',
        'webflow',
        'framer'
      ];
      
      // Exact match for priority text-to-website tools
      if (textToWebsiteTools.some(websiteTool => tool.title.toLowerCase().includes(websiteTool))) {
        return true;
      }
      
      // General text-to-website matching
      if (tool.title.toLowerCase().includes('text-to-website') || 
          tool.description.toLowerCase().includes('text-to-website') ||
          tool.title.toLowerCase().includes('website builder') ||
          tool.description.toLowerCase().includes('website builder') ||
          tool.title.toLowerCase().includes('site generator') ||
          tool.description.toLowerCase().includes('site generator') ||
          tool.category?.toLowerCase().includes('website builder') ||
          tool.tags?.some(tag => tag.toLowerCase().includes('text-to-website'))) {
        return true;
      }
    }
    
    // PRIORITY 5: TEXT TO VIDEO SEARCH - HIGH PRIORITY
    if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
        (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
      // Top priority text-to-video tools
      if (tool.title.toLowerCase().includes('luma labs dream machine') || tool.title.toLowerCase().includes('luma dream machine')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('pika labs')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('google veo 3') || tool.title.toLowerCase().includes('veo3')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('movie maker studio')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('runwayml gen-2') || tool.title.toLowerCase().includes('runwayml')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('sora')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('text to video prompt generator')) {
        return true;
      }
      
      // General text-to-video matching
      if (tool.title.toLowerCase().includes('text-to-video')) {
        return true;
      }
      if (tool.description.toLowerCase().includes('text-to-video')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('video generation')) {
        return true;
      }
      if (tool.description.toLowerCase().includes('video generation')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('ai video')) {
        return true;
      }
      if (tool.description.toLowerCase().includes('ai video')) {
        return true;
      }
      if (tool.category?.toLowerCase().includes('video generation')) {
        return true;
      }
      if (tool.tags?.some(tag => tag.toLowerCase().includes('text-to-video'))) {
        return true;
      }
    }
    
    // PRIORITY 6: HISTORY SEARCH - ONLY FOR EXPLICIT HISTORY SEARCHES
    if (lowerSearchTerm === 'history' || lowerSearchTerm.includes('historical')) {
      // Top priority history tools
      if (tool.title.toLowerCase().includes('time machine gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('talk to history gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('historical headlines gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('titanic resurrections gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('uncovering hidden historical patterns gpt')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('native american history time machine gpt')) {
        return true;
      }
      
      // General history matching for explicit history searches
      if (tool.title.toLowerCase().includes('history')) {
        return true;
      }
      if (tool.description.toLowerCase().includes('history')) {
        return true;
      }
      if (tool.title.toLowerCase().includes('historical')) {
        return true;
      }
      if (tool.description.toLowerCase().includes('historical')) {
        return true;
      }
      if (tool.category?.toLowerCase().includes('history')) {
        return true;
      }
      if (tool.tags?.some(tag => tag.toLowerCase().includes('history'))) {
        return true;
      }
    }
    
    // PRIORITY 7: Exact title match (high priority for non-agent/history/video/web searches)
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 8: Enhanced keyword matching for new tools
    if (enhancedKeywordMatching(tool, searchTerm)) {
      return true;
    }
    
    // PRIORITY 9: Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 10: Any word in title starts with search term
    const titleWords = tool.title.toLowerCase().split(' ');
    if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
      return true;
    }
    
    // PRIORITY 11: Check individual words for King Blueberry specifically
    if (lowerSearchTerm === 'king' || lowerSearchTerm === 'blueberry') {
      if (tool.title.toLowerCase().includes('king blueberry')) {
        return true;
      }
    }
    
    // PRIORITY 12: Direct text match in any field
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 13: Word-by-word matching
    const hasAllWords = searchWords.every(word => toolText.includes(word));
    if (hasAllWords) {
      return true;
    }
    
    // PRIORITY 14: Expanded keyword matching
    if (expandedKeywords.some(keyword => toolText.includes(keyword.toLowerCase()))) {
      return true;
    }
    
    // PRIORITY 15: Partial matching for longer terms
    if (lowerSearchTerm.length >= 4) {
      const partialMatches = [
        tool.title.toLowerCase().includes(lowerSearchTerm),
        tool.description?.toLowerCase().includes(lowerSearchTerm),
        tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
      ];
      
      if (partialMatches.some(match => match)) {
        return true;
      }
    }
    
    return false;
  });
  
  // Enhanced scoring and sorting
  const scoredResults = results.map(tool => ({
    tool,
    score: calculateSearchScore(tool, searchTerm, expandedKeywords)
  }));
  
  // Sort by score (highest first)
  scoredResults.sort((a, b) => b.score - a.score);
  
  const finalResults = scoredResults.map(result => result.tool);
  
  console.log(`✅ Enhanced search found ${finalResults.length} results`);
  
  // Log relevant search results for debugging
  if (lowerSearchTerm.includes('agent')) {
    console.log(`🤖 Agent search results:`, finalResults.filter(t => 
      t.title.toLowerCase().includes('agent') || 
      t.title.toLowerCase().includes('autonomous') ||
      t.category?.toLowerCase().includes('agent')
    ).slice(0, 10).map(t => t.title));
  }
  if (lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('web design') || 
      lowerSearchTerm.includes('text to website')) {
    console.log(`💻 Web development search results:`, finalResults.filter(t => 
      t.title.toLowerCase().includes('lovable') || 
      t.title.toLowerCase().includes('bolt') ||
      t.title.toLowerCase().includes('figma') ||
      t.title.toLowerCase().includes('canva') ||
      t.title.toLowerCase().includes('webflow')
    ).slice(0, 10).map(t => t.title));
  }
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    console.log(`🎬 Text-to-video search results:`, finalResults.filter(t => 
      t.title.toLowerCase().includes('luma') || 
      t.title.toLowerCase().includes('pika') ||
      t.title.toLowerCase().includes('veo') ||
      t.title.toLowerCase().includes('movie maker') ||
      t.title.toLowerCase().includes('runwayml') ||
      t.title.toLowerCase().includes('sora') ||
      t.category?.toLowerCase().includes('video generation')
    ).slice(0, 10).map(t => t.title));
  }
  if (lowerSearchTerm === 'history' || lowerSearchTerm.includes('historical')) {
    console.log(`📚 History search results:`, finalResults.filter(t => 
      t.title.toLowerCase().includes('history') || 
      t.title.toLowerCase().includes('historical') ||
      t.category?.toLowerCase().includes('history')
    ).slice(0, 10).map(t => t.title));
  }
  return finalResults;
};

// Enhanced scoring function
const calculateSearchScore = (tool: Tool, searchTerm: string, expandedKeywords: string[]): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  const titleWords = tool.title.toLowerCase().split(' ');
  let score = 0;
  
  // AGENTS SEARCH SCORING - ABSOLUTE HIGHEST PRIORITY
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents') {
    // Top priority AI agent tools
    if (tool.title.toLowerCase().includes('chatgpt operator')) {
      score += 3000; // Highest priority
    }
    if (tool.title.toLowerCase().includes('manus autonomous agent')) {
      score += 2950; // Second highest
    }
    if (tool.title.toLowerCase().includes('surf.new web agents')) {
      score += 2900; // Third highest
    }
    if (tool.title.toLowerCase().includes('lindy ai automation')) {
      score += 2850; // Fourth highest
    }
    
    // Other important agent tools
    if (tool.title.toLowerCase().includes('auto-gpt')) {
      score += 2800;
    }
    if (tool.title.toLowerCase().includes('babyagi')) {
      score += 2750;
    }
    if (tool.title.toLowerCase().includes('agentgpt')) {
      score += 2700;
    }
    if (tool.title.toLowerCase().includes('god mode gpt')) {
      score += 2650;
    }
    if (tool.title.toLowerCase().includes('ai town')) {
      score += 2600;
    }
    
    // General agent matching
    if (tool.title.toLowerCase().includes('agent')) {
      score += 2500;
    }
    if (tool.description.toLowerCase().includes('agent')) {
      score += 2200;
    }
    if (tool.title.toLowerCase().includes('autonomous')) {
      score += 2400;
    }
    if (tool.description.toLowerCase().includes('autonomous')) {
      score += 2100;
    }
    if (tool.category?.toLowerCase().includes('agent')) {
      score += 2300;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('agent'))) {
      score += 2200;
    }
  }
  
  // CODING AGENT SEARCH SCORING - HIGH PRIORITY
  if (lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
      (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent'))) {
    // Top priority coding agent tools
    if (tool.title.toLowerCase().includes('lovable.dev')) {
      score += 3200; // Highest priority
    }
    if (tool.title.toLowerCase().includes('bolt.new')) {
      score += 3150; // Second highest
    }
    if (tool.title.toLowerCase().includes('chatgpt operator')) {
      score += 3100;
    }
    if (tool.title.toLowerCase().includes('manus autonomous agent')) {
      score += 3050;
    }
    if (tool.title.toLowerCase().includes('auto-gpt')) {
      score += 3000;
    }
    if (tool.title.toLowerCase().includes('agentgpt')) {
      score += 2950;
    }
    
    // General coding agent matching
    if (tool.title.toLowerCase().includes('coding') || tool.title.toLowerCase().includes('code')) {
      score += 2800;
    }
    if (tool.description.toLowerCase().includes('coding') || tool.description.toLowerCase().includes('code')) {
      score += 2600;
    }
    if (tool.title.toLowerCase().includes('programming')) {
      score += 2700;
    }
    if (tool.description.toLowerCase().includes('programming')) {
      score += 2500;
    }
    if (tool.category?.toLowerCase().includes('coding')) {
      score += 2600;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('coding'))) {
      score += 2500;
    }
  }
  
  // WEB DESIGN SEARCH SCORING - HIGH PRIORITY
  if (lowerSearchTerm.includes('web design') || lowerSearchTerm.includes('website design') ||
      lowerSearchTerm.includes('web development') || lowerSearchTerm.includes('website development')) {
    // Top priority web design tools
    if (tool.title.toLowerCase().includes('lovable.dev')) {
      score += 3100; // Highest priority for web design
    }
    if (tool.title.toLowerCase().includes('bolt.new')) {
      score += 3050; // Second highest
    }
    if (tool.title.toLowerCase().includes('figma')) {
      score += 3000;
    }
    if (tool.title.toLowerCase().includes('canva')) {
      score += 2950;
    }
    if (tool.title.toLowerCase().includes('webflow')) {
      score += 2900;
    }
    if (tool.title.toLowerCase().includes('framer')) {
      score += 2850;
    }
    
    // General web design matching
    if (tool.title.toLowerCase().includes('web design')) {
      score += 2700;
    }
    if (tool.description.toLowerCase().includes('web design')) {
      score += 2500;
    }
    if (tool.title.toLowerCase().includes('website')) {
      score += 2600;
    }
    if (tool.description.toLowerCase().includes('website')) {
      score += 2400;
    }
    if (tool.category?.toLowerCase().includes('web')) {
      score += 2500;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('web'))) {
      score += 2400;
    }
  }
  
  // TEXT TO WEBSITE SEARCH SCORING - HIGH PRIORITY
  if (lowerSearchTerm.includes('text to website') || lowerSearchTerm.includes('text-to-website') ||
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('website'))) {
    // Top priority text-to-website tools
    if (tool.title.toLowerCase().includes('lovable.dev')) {
      score += 3000; // Highest priority for text-to-website
    }
    if (tool.title.toLowerCase().includes('bolt.new')) {
      score += 2950; // Second highest
    }
    if (tool.title.toLowerCase().includes('webflow')) {
      score += 2900;
    }
    if (tool.title.toLowerCase().includes('framer')) {
      score += 2850;
    }
    
    // General text-to-website matching
    if (tool.title.toLowerCase().includes('text-to-website')) {
      score += 2600;
    }
    if (tool.description.toLowerCase().includes('text-to-website')) {
      score += 2400;
    }
    if (tool.title.toLowerCase().includes('website builder')) {
      score += 2500;
    }
    if (tool.description.toLowerCase().includes('website builder')) {
      score += 2300;
    }
    if (tool.title.toLowerCase().includes('site generator')) {
      score += 2400;
    }
    if (tool.description.toLowerCase().includes('site generator')) {
      score += 2200;
    }
    if (tool.category?.toLowerCase().includes('website builder')) {
      score += 2400;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('text-to-website'))) {
      score += 2300;
    }
  }
  
  // TEXT TO VIDEO SEARCH SCORING - HIGH PRIORITY
  if (lowerSearchTerm.includes('text to video') || lowerSearchTerm.includes('text-to-video') || 
      (lowerSearchTerm.includes('text') && lowerSearchTerm.includes('video'))) {
    // Top priority text-to-video tools
    if (tool.title.toLowerCase().includes('luma labs dream machine') || tool.title.toLowerCase().includes('luma dream machine')) {
      score += 2800; // Highest priority for text-to-video
    }
    if (tool.title.toLowerCase().includes('pika labs')) {
      score += 2750;
    }
    if (tool.title.toLowerCase().includes('google veo 3') || tool.title.toLowerCase().includes('veo3')) {
      score += 2700;
    }
    if (tool.title.toLowerCase().includes('movie maker studio')) {
      score += 2650;
    }
    if (tool.title.toLowerCase().includes('runwayml gen-2') || tool.title.toLowerCase().includes('runwayml')) {
      score += 2600;
    }
    if (tool.title.toLowerCase().includes('sora')) {
      score += 2550;
    }
    if (tool.title.toLowerCase().includes('text to video prompt generator')) {
      score += 2500;
    }
    
    // General text-to-video matching
    if (tool.title.toLowerCase().includes('text-to-video')) {
      score += 2400;
    }
    if (tool.description.toLowerCase().includes('text-to-video')) {
      score += 2200;
    }
    if (tool.title.toLowerCase().includes('video generation')) {
      score += 2300;
    }
    if (tool.description.toLowerCase().includes('video generation')) {
      score += 2100;
    }
    if (tool.title.toLowerCase().includes('ai video')) {
      score += 2200;
    }
    if (tool.description.toLowerCase().includes('ai video')) {
      score += 2000;
    }
    if (tool.category?.toLowerCase().includes('video generation')) {
      score += 2200;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('text-to-video'))) {
      score += 2100;
    }
  }
  
  // HISTORY SEARCH SCORING - ONLY FOR EXPLICIT HISTORY SEARCHES
  if (lowerSearchTerm === 'history' || lowerSearchTerm.includes('historical')) {
    // Top priority history tools
    if (tool.title.toLowerCase().includes('time machine gpt')) {
      score += 2500; // Highest priority for history
    }
    if (tool.title.toLowerCase().includes('talk to history gpt')) {
      score += 2450;
    }
    if (tool.title.toLowerCase().includes('historical headlines gpt')) {
      score += 2400;
    }
    if (tool.title.toLowerCase().includes('titanic resurrections gpt')) {
      score += 2350;
    }
    if (tool.title.toLowerCase().includes('uncovering hidden historical patterns gpt')) {
      score += 2300;
    }
    if (tool.title.toLowerCase().includes('native american history time machine gpt')) {
      score += 2250;
    }
    
    // General history matching for explicit history searches
    if (tool.title.toLowerCase().includes('history')) {
      score += 2000;
    }
    if (tool.description.toLowerCase().includes('history')) {
      score += 1800;
    }
    if (tool.title.toLowerCase().includes('historical')) {
      score += 1900;
    }
    if (tool.description.toLowerCase().includes('historical')) {
      score += 1700;
    }
    if (tool.category?.toLowerCase().includes('history')) {
      score += 1900;
    }
    if (tool.tags?.some(tag => tag.toLowerCase().includes('history'))) {
      score += 1800;
    }
  }
  
  // Enhanced scoring for new tools
  score += enhancedToolScoring(tool, searchTerm);
  
  // Exact word matching in title (Very High Priority for non-agent/history/video/web searches)
  if (titleWords.some(word => word === lowerSearchTerm)) {
    score += 800;
  }
  
  // Title starts with search term
  if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
    score += 700;
  }
  
  // Any word in title starts with search term
  if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
    score += 600;
  }
  
  // Exact title match
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 500;
  }
  
  // Description match
  if (tool.description?.toLowerCase().includes(lowerSearchTerm)) {
    score += 250;
  }
  
  // Tag matches
  if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) {
    score += 200;
  }
  
  // Category match
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    score += 150;
  }
  
  // Expanded keyword matches
  const keywordMatches = expandedKeywords.filter(keyword => 
    toolText.includes(keyword.toLowerCase())
  ).length;
  score += keywordMatches * 50;
  
  // Boost for AI Web Tools original GPTs
  if (tool.directUrl?.includes('lovable.app')) {
    score += 25;
  }
  
  return score;
};
