
import { Tool } from "@/types/tools";
import { getToolNameMatchScore, calculateIntentScore } from "./search/scoringUtils";
import { getExpandedKeywords } from "./search/keywordExpansion";

// Enhanced search function with comprehensive keywords and intelligent matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase().trim();
  console.log(`🔍 Searching for: "${term}" across ${tools.length} tools`);
  
  // Minimum length check to prevent single character searches from triggering keyword expansion
  const isShortSearch = term.length <= 2;
  
  // Enhanced category keyword mapping for consolidated categories - including all new categories
  const categoryKeywords: Record<string, string[]> = {
    "Video & Content Creation": ["video", "content", "editing", "movie", "film", "cinema", "youtube", "streaming", "production", "animation", "multimedia"],
    "Image & Design Tools": ["image", "design", "art", "photo", "picture", "graphic", "visual", "illustration", "logo", "color", "cover", "graph", "chart", "infographic"],
    "Business & Productivity": ["business", "productivity", "work", "office", "management", "team", "collaboration", "finance", "sales", "marketing", "email"],
    "Writing & Content Creation": ["writing", "content", "text", "article", "blog", "copy", "document", "research", "paper", "manuscript"],
    "AI Development Tools": ["ai", "development", "coding", "programming", "developer", "api", "model", "inference", "agent", "machine learning"],
    "Audio & Voice Tools": ["audio", "voice", "music", "sound", "podcast", "speech", "recording", "synthesis"],
    "Education & Learning": ["education", "learning", "study", "school", "teacher", "student", "course", "training", "academic"],
    "Professional Services": ["professional", "healthcare", "legal", "medical", "law", "finance", "trading", "pharmacy", "consultation", "gpt"],
    "Creative & Entertainment": ["creative", "entertainment", "fun", "game", "play", "art", "media", "interactive"],
    "Time & History": ["history", "historical", "time", "past", "ancient", "heritage", "archaeological", "timeline"],
    "Spirituality & Wellness": ["spiritual", "wellness", "meditation", "mindfulness", "peace", "healing", "consciousness"],
    "Emergency Services": ["emergency", "safety", "fire", "rescue", "survival", "first aid", "crisis"],
    "Game Design & Development": ["game", "gaming", "design", "development", "player", "interactive", "entertainment"],
    "Specialized Tools": ["specialized", "niche", "specific", "technical", "utility", "custom", "expert"],
    "Creative Suites": ["creative", "suite", "design", "multimedia", "professional", "comprehensive", "all-in-one"],
    "Advanced AI Tools": ["advanced", "ai", "sophisticated", "enterprise", "professional", "cutting-edge"],
    
    // New categories from recent additions
    "Marketing & Social Media": ["marketing", "social", "media", "advertising", "promotion", "brand", "instagram", "facebook", "twitter", "linkedin", "tiktok", "social media", "campaigns"],
    "Communication & Collaboration": ["communication", "collaboration", "team", "messaging", "chat", "video call", "meeting", "whatsapp", "telegram", "skype", "discord"],
    "Utilities & Productivity": ["utilities", "productivity", "tools", "converter", "compression", "pdf", "file", "document", "optimization", "archive"],
    "Creative & Design": ["creative", "design", "canva", "figma", "photoshop", "illustration", "graphics", "visual", "artwork", "templates"],
    "Cloud Services": ["cloud", "storage", "hosting", "server", "infrastructure", "aws", "google cloud", "dropbox", "drive", "backup"],
    "Information & Research": ["information", "research", "news", "wikipedia", "knowledge", "data", "facts", "study", "academic"],
    "Health & Wellness": ["health", "wellness", "fitness", "medical", "nutrition", "exercise", "mental health", "meditation", "tracking"],
    
    // GPT-specific category keywords - CRUCIAL for Ken's GPTs
    "Custom GPTs": ["gpt", "assistant", "chatbot", "conversational ai", "ai helper", "custom gpt", "personalized ai"]
  };
  
  // Helper function to check if a tool matches the search term with scoring
  const getToolMatchScore = (tool: Tool, searchTerm: string): number => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    let score = 0;
    
    // First, check for intelligent tool name matching
    const nameMatchScore = getToolNameMatchScore(tool.title, searchTerm);
    score += nameMatchScore;
    
    // SPECIAL GPT HANDLING - Essential for Ken's custom GPTs
    if (searchTerm.toLowerCase() === 'gpt') {
      if (lowerTitle.includes('gpt')) {
        score += 500; // Massive boost for GPT tools when searching "gpt"
      }
      if (lowerDescription.includes('gpt') || lowerDescription.includes('assistant')) {
        score += 200;
      }
      // Extra boost for Ken's custom GPTs
      if (tool.directUrl?.includes('lovable.app')) {
        score += 150;
      }
    }
    
    // For very short searches, prioritize name matching
    if (isShortSearch) {
      // If we have a good name match, boost it significantly
      if (nameMatchScore > 200) {
        return score + 1000; // High priority for good name matches on short searches
      }
      
      // Only match if the search term is at the beginning of words for other content
      const titleWords = lowerTitle.split(' ');
      const hasWordStart = titleWords.some(word => word.startsWith(searchTerm));
      const categoryWords = lowerCategory.split(' ');
      const hasCategoryWordStart = categoryWords.some(word => word.startsWith(searchTerm));
      
      if (hasWordStart) score += 100;
      if (hasCategoryWordStart) score += 50;
      
      // Also check tags for word starts
      const hasTagWordStart = lowerTags.some(tag => 
        tag.split(' ').some(word => word.startsWith(searchTerm))
      );
      if (hasTagWordStart) score += 30;
      
      return score;
    }
    
    // Get expanded keywords for intelligent matching (only for longer searches)
    const expandedKeywords = getExpandedKeywords(searchTerm);
    
    // Exact title matches get highest score (case insensitive)
    if (lowerTitle === searchTerm) {
      score += 200;
    }
    
    // Direct title matches get very high score
    if (lowerTitle.includes(searchTerm)) {
      score += 100;
    }
    
    // Partial title matches
    const searchWords = searchTerm.split(' ');
    const titleMatchCount = searchWords.filter(word => lowerTitle.includes(word)).length;
    score += titleMatchCount * 25;
    
    // Category matches with consolidated category keywords
    if (lowerCategory.includes(searchTerm)) {
      score += 50;
    }
    
    // Check against category-specific keywords for all categories including new ones
    if (tool.category) {
      const categoryKeys = categoryKeywords[tool.category] || [];
      const categoryKeywordMatches = categoryKeys.filter(keyword => 
        keyword.includes(searchTerm) || searchTerm.includes(keyword)
      ).length;
      score += categoryKeywordMatches * 15;
      
      // Special handling for common search terms
      if (searchTerm.includes('social') && tool.category.includes('Social Media')) score += 40;
      if (searchTerm.includes('video') && tool.category.includes('Video')) score += 40;
      if (searchTerm.includes('design') && tool.category.includes('Design')) score += 40;
      if (searchTerm.includes('communication') && tool.category.includes('Communication')) score += 40;
      if (searchTerm.includes('productivity') && tool.category.includes('Productivity')) score += 40;
    }
    
    // Tag matches
    const tagMatchCount = lowerTags.filter(tag => 
      tag.includes(searchTerm) || searchTerm.includes(tag)
    ).length;
    score += tagMatchCount * 20;
    
    // Description matches
    if (lowerDescription.includes(searchTerm)) {
      score += 30;
    }
    
    // Expanded keyword matches (only for longer searches)
    if (!isShortSearch) {
      expandedKeywords.forEach(keyword => {
        if (keyword !== searchTerm) { // Don't double count the original term
          if (lowerTitle.includes(keyword)) score += 30;
          if (lowerDescription.includes(keyword)) score += 20;
          if (lowerCategory.includes(keyword)) score += 25;
          if (lowerTags.some(tag => tag.includes(keyword))) score += 15;
        }
      });
    }
    
    // Add intent-based scoring
    score += calculateIntentScore(tool, searchTerm);
    
    // Boost for exact tool name matches (case insensitive, remove special characters)
    const normalizedTitle = lowerTitle.replace(/[^a-z0-9]/g, '');
    const normalizedSearch = searchTerm.replace(/[^a-z0-9]/g, '');
    if (normalizedTitle.includes(normalizedSearch)) {
      score += 50;
    }
    
    // Special boost for design-related terms when searching for "cover" or "graph"
    if ((searchTerm.includes('cover') || searchTerm.includes('graph')) && 
        (lowerTitle.includes('design') || lowerCategory.includes('design'))) {
      score += 40;
    }
    
    // Boost for popular tool names
    const popularTools = ['canva', 'figma', 'notion', 'slack', 'discord', 'whatsapp', 'spotify', 'youtube', 'github'];
    if (popularTools.some(popular => lowerTitle.includes(popular) && searchTerm.includes(popular))) {
      score += 60;
    }
    
    return score;
  };
  
  // Get all tools with their match scores
  const toolsWithScores = tools.map(tool => ({
    tool,
    score: getToolMatchScore(tool, term)
  }));
  
  // Filter tools with score > 0 and sort by score (descending)
  const results = toolsWithScores
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
  
  console.log(`✅ Search results for "${term}": ${results.length} tools found`);
  console.log(`📊 Top 5 results:`, results.slice(0, 5).map(t => ({ title: t.title, category: t.category })));
  
  // Special logging for GPT searches
  if (term === 'gpt') {
    const gptResults = results.filter(t => t.title.toLowerCase().includes('gpt'));
    console.log(`🤖 GPT tools found: ${gptResults.length}`, gptResults.map(t => t.title));
  }
  
  // Verify search is working across the full tool collection
  if (results.length === 0 && tools.length > 0) {
    console.warn(`⚠️ No search results found for "${term}" in collection of ${tools.length} tools`);
  }
  
  return results;
};
