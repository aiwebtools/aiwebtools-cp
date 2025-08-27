import { Tool } from "@/types/tools";
import { searchAIWebToolsGPTs, scoreAIWebToolsGPT } from "./aiWebToolsSearch";
import { fuzzyMatchTool, phoneticMatch } from "./core/fuzzyMatching";
import { matchVibeCoding, scoreVibeCoding } from "./matching/vibeCodingMatching";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchCodingAgents, scoreCodingAgents } from "./matching/codingMatching";
import { matchGameTools, scoreGameTools } from "./matching/gameMatching";
import { matchUserTask, smartTypoCorrection, scoreToolByContext, matchTimeTravel, scoreTimeTravel, matchWriting, scoreWriting } from "./core/intelligentTaskMatching";
import { matchSpiritual, scoreSpiritual, matchParanormal, scoreParanormal } from "./matching/specialtyMatching";
import { superSmartTypoCorrection, getPartialMatchSuggestions, matchWithContext, superIntelligentScore } from "./core/superIntelligentSearch";
import { matchWebDevelopment, scoreWebDevelopment } from "./matching/webDevelopmentMatching";
import { getAdvancedPartialMatches, scoreAdvancedPartialMatch } from "./core/advancedPartialMatching";
import { getAIWebToolsPriorityScore, applyAIWebToolsPrioritization } from "@/utils/aiWebToolsPrioritization";

// Tools to exclude from search results
const EXCLUDED_TOOLS = [
  "PERSONAL CAPITAL",
  "PERSONAL ASSISTANT GPT",
  "personal financial advisor"
];

// Intent detection patterns for better search prioritization - EXPANDED FOR ALL CATEGORIES
const INTENT_PATTERNS = {
  education: {
    triggers: ['college', 'university', 'degree', 'education', 'learn', 'study', 'course', 'school', 'academic', 'skill', 'training', 'lesson', 'class', 'homework', 'tutor', 'teacher', 'student'],
    priority: ['COLLEGE DEGREE GPT', 'LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'Home-Schooling Assistant GPT', 'HomeSchool GPT', 'Quiz Maker Ai', 'Course Maker GPT'],
    categories: ['Education & Research Tools', 'Learning & Education', 'Educational Tools', 'Education & Learning']
  },
  creative: {
    triggers: ['book', 'write', 'writing', 'author', 'story', 'novel', 'script', 'content', 'blog', 'article', 'creative', 'design', 'art', 'graphic', 'logo', 'image', 'video', 'movie', 'music'],
    priority: ['BOOK WRITER GPT', 'Movie Script Writer GPT', 'Article and Blog Rewriter GPT', 'Graphic & Cover Design GPT', 'Movie Maker Studio AI SUITE', 'Music Video Maker AI Studio', 'RESTYLE ME GPT', 'Sketch Artist GPT'],
    categories: ['Writing & Text Generation', 'Content Creation', 'Creative Tools', 'Creative & Media', 'Creative & Design']
  },
  health: {
    triggers: ['doctor', 'health', 'medical', 'wellness', 'fitness', 'nutrition', 'therapy', 'mental', 'dental', 'veterinarian', 'pet', 'medicine', 'pharmaceutical'],
    priority: ['Personalized DR. GPT (Doctor GPT)', 'Mental Wellness GPT', 'Veterinarian GPT', 'Pharmaceutical Assistant GPT', 'DENTAL GPT', 'SKIN CARE GPT'],
    categories: ['Health & Wellness', 'Healthcare', 'Medical Tools', 'Health, Wellness & Personal Lifestyle']
  },
  business: {
    triggers: ['business', 'marketing', 'finance', 'trading', 'investment', 'money', 'budget', 'startup', 'entrepreneur', 'sales', 'management', 'productivity', 'resume', 'job'],
    priority: ['Business Plan Generator GPT', 'Startup Validator GPT', 'Trader GPT', 'MicroSaaS GPT', 'The Resume & Job Finder Ai Suite', 'Taxes GPT', 'Insurance Claims GPT'],
    categories: ['Business & Productivity', 'Finance & Trading', 'Marketing Tools', 'Business & Finance', 'Business Tools']
  },
  science: {
    triggers: ['science', 'research', 'analysis', 'data', 'laboratory', 'experiment', 'scientific', 'genome', 'dna', 'physics', 'chemistry', 'biology', 'space', 'astronomy'],
    priority: ['Nikola Tesla GPT', 'Stellaris: 🚀AI Space Explorer', 'Genome GPT', 'Alchemist Scientist GPT', 'Data Research Analysis Report GPT'],
    categories: ['Science & Research', 'Research & Learning', 'Scientific Tools', 'Data Analytics']
  },
  technology: {
    triggers: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'coding', 'programming', 'development', 'software', 'tech', 'computer', 'app', 'website'],
    priority: ['GODMODE GPT', 'Engineering GPT AI Suite', 'MULTITASKER GPT', 'Customizable GPT Maker'],
    categories: ['AI & Development', 'Technology Tools', 'Development Tools', 'AI Tools']
  },
  legal: {
    triggers: ['legal', 'law', 'attorney', 'lawyer', 'contract', 'legislation', 'government', 'civic', 'political', 'testimony', 'defender'],
    priority: ['Legal Draftsmith GPT', 'Public Defender GPT', 'Legislation Writer GPT', 'Public Testimony Writer GPT', 'Contract Review Bot'],
    categories: ['Legal & Government', 'Legal Tools', 'Government & Civic']
  },
  entertainment: {
    triggers: ['game', 'gaming', 'entertainment', 'fun', 'trivia', 'celebrity', 'movie', 'film', 'music', 'meme', 'comic', 'video game', 'videogame', 'game design', 'game development', 'game creation', 'game maker', 'game generator', '3d game', 'ai game', 'seele'],
    priority: ['Seele Video Game Generator', 'Game Design Document / Developer GPT', 'Trivia Night GPT', 'Celebrity Chatline GPT', 'MEME GENERATOR GPT', 'Comic Book Generator GPT'],
    categories: ['Entertainment & Gaming', 'Gaming Tools', 'Entertainment Tools', 'GAME DESIGN & DEVELOPMENT']
  },
  spiritual: {
    triggers: ['soul', 'spirit', 'spiritual', 'gematria', 'numerology', 'astrology', 'mystical', 'divine', 'cosmic', 'metaphysical', 'essence', 'soul map', 'soul mapping', 'blueprint', 'chakra', 'meditation', 'enlightenment', 'wisdom', 'philosophy', 'tarot', 'crystals', 'healing', 'consciousness', 'manifestation'],
    priority: ['Soul Map GPT', 'ALAN WATTS GPT', '🕊️Mary Magdalene GPT', 'TALK TO THE GODS GPT', 'Sophia Aeterna AI', 'Interpretis 🕰️'],
    categories: ['Spirituality & Philosophy', 'Mystical Tools', 'Personal Development', 'Philosophy']
  }
};

// Detect user intent based on search term
const detectIntent = (searchTerm: string): string | null => {
  const lowerTerm = searchTerm.toLowerCase();
  
  for (const [intent, config] of Object.entries(INTENT_PATTERNS)) {
    if (config.triggers.some(trigger => lowerTerm.includes(trigger))) {
      console.log(`🎯 Detected intent: ${intent} for search: ${searchTerm}`);
      return intent;
    }
  }
  
  return null;
};

  // Enhanced search function with SUPER INTELLIGENT partial matching and prediction
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    // 🚀 Even for empty searches, apply AI Web Tools prioritization
    return applyAIWebToolsPrioritization(tools.filter(tool => !EXCLUDED_TOOLS.includes(tool.title)));
  }

  // DEBUG: Check if ElevenLabs and Suno are in the tools array when searching for them
  if (searchTerm.toLowerCase().includes('eleven') || searchTerm.toLowerCase().includes('suno')) {
    const elevenLabsTools = tools.filter(tool => tool.title.toLowerCase().includes('eleven'));
    const sunoTools = tools.filter(tool => tool.title.toLowerCase().includes('suno'));
    console.log(`🔍 SEARCH DEBUG for "${searchTerm}": Total tools: ${tools.length}`);
    console.log(`🔍 ElevenLabs tools found: ${elevenLabsTools.length}`, elevenLabsTools.map(t => t.title));
    console.log(`🔍 Suno tools found: ${sunoTools.length}`, sunoTools.map(t => t.title));
  }

  // STEP 1: Super intelligent typo correction and advanced partial matching
  const correctedSearchTerm = superSmartTypoCorrection(searchTerm);
  const partialSuggestions = getPartialMatchSuggestions(searchTerm);
  const advancedPartialMatches = getAdvancedPartialMatches(searchTerm, tools);
  
  // Reduced console logging for performance - only for critical debugging
  if (searchTerm.toLowerCase().includes('debug')) {
    console.log(`🧠 SUPER SEARCH: "${searchTerm}" → "${correctedSearchTerm}"`);
  }

  const normalizedSearchTerm = correctedSearchTerm.toLowerCase().trim();
  const searchWords = normalizedSearchTerm.split(/[\s,.-]+/).filter(word => word.length > 1);
  
  // Enhanced phonetic variations  
  const phoneticVariations = searchTerm.length <= 8 ? phoneticMatch(normalizedSearchTerm) : [];
  
  // Enhanced intent detection
  const userIntent = detectIntent(normalizedSearchTerm);
  const intentConfig = userIntent ? INTENT_PATTERNS[userIntent as keyof typeof INTENT_PATTERNS] : null;
  
  // VIDEO SEARCH PRIORITY - Strict video tool filtering
  if (normalizedSearchTerm === 'video' || normalizedSearchTerm.includes('video')) {
    console.log('🎬 VIDEO SEARCH DETECTED - Filtering for video tools only');
    
    // First, find all tools with "video" in title, description, category, or tags
    const videoTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('video') || 
             lowerDescription.includes('video') ||
             lowerCategory.includes('video') ||
             lowerTags.some(tag => tag.includes('video'));
    });
    
    console.log(`🎬 Found ${videoTools.length} video tools:`, videoTools.slice(0, 5).map(t => t.title));
    
    // Sort video tools by relevance - exact title matches first
    const sortedVideoTools = videoTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Highest priority: "video" in title
      if (a.title.toLowerCase().includes('video')) scoreA += 10000;
      if (b.title.toLowerCase().includes('video')) scoreB += 10000;
      
      // High priority: video generation/creation tools
      if (a.title.toLowerCase().includes('video generat') || a.title.toLowerCase().includes('video maker') || a.title.toLowerCase().includes('video creator')) scoreA += 8000;
      if (b.title.toLowerCase().includes('video generat') || b.title.toLowerCase().includes('video maker') || b.title.toLowerCase().includes('video creator')) scoreB += 8000;
      
      // Medium priority: AI Web Tools video GPTs (only if they contain "video")
      if (a.directUrl?.includes('lovable.app') && a.title.toLowerCase().includes('video')) scoreA += 6000;
      if (b.directUrl?.includes('lovable.app') && b.title.toLowerCase().includes('video')) scoreB += 6000;
      
      // Lower priority: video in description
      if (a.description.toLowerCase().includes('video')) scoreA += 3000;
      if (b.description.toLowerCase().includes('video')) scoreB += 3000;
      
      return scoreB - scoreA;
    });
    
    // Add remaining non-video tools at the end with much lower priority
    const nonVideoTools = tools.filter(tool => !videoTools.includes(tool));
    const finalVideoResults = [...sortedVideoTools, ...nonVideoTools];
    
    return performEnhancedSearch(finalVideoResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }
  
  // AUDIO/MUSIC TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'audio' || normalizedSearchTerm.includes('audio') || 
      normalizedSearchTerm.includes('music') || normalizedSearchTerm.includes('sound') || 
      normalizedSearchTerm.includes('voice')) {
    console.log('🎵 AUDIO SEARCH DETECTED - Filtering for audio tools only');
    
    const audioTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('audio') || lowerTitle.includes('music') || 
             lowerTitle.includes('sound') || lowerTitle.includes('voice') ||
             lowerDescription.includes('audio') || lowerDescription.includes('music') ||
             lowerDescription.includes('sound') || lowerDescription.includes('voice') ||
             lowerCategory.includes('audio') || lowerCategory.includes('music') ||
             lowerTags.some(tag => tag.includes('audio') || tag.includes('music') || 
                                  tag.includes('sound') || tag.includes('voice'));
    });
    
    console.log(`🎵 Found ${audioTools.length} audio tools:`, audioTools.slice(0, 5).map(t => t.title));
    
    const sortedAudioTools = audioTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Exact term match in title gets highest priority
      if (normalizedSearchTerm.includes('audio') && a.title.toLowerCase().includes('audio')) scoreA += 10000;
      if (normalizedSearchTerm.includes('audio') && b.title.toLowerCase().includes('audio')) scoreB += 10000;
      if (normalizedSearchTerm.includes('music') && a.title.toLowerCase().includes('music')) scoreA += 10000;
      if (normalizedSearchTerm.includes('music') && b.title.toLowerCase().includes('music')) scoreB += 10000;
      if (normalizedSearchTerm.includes('voice') && a.title.toLowerCase().includes('voice')) scoreA += 10000;
      if (normalizedSearchTerm.includes('voice') && b.title.toLowerCase().includes('voice')) scoreB += 10000;
      if (normalizedSearchTerm.includes('sound') && a.title.toLowerCase().includes('sound')) scoreA += 10000;
      if (normalizedSearchTerm.includes('sound') && b.title.toLowerCase().includes('sound')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonAudioTools = tools.filter(tool => !audioTools.includes(tool));
    const finalAudioResults = [...sortedAudioTools, ...nonAudioTools];
    return performEnhancedSearch(finalAudioResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // EDUCATION/LEARNING TOOL PRIORITY - Enhanced detection  
  if (normalizedSearchTerm === 'education' || normalizedSearchTerm.includes('education') ||
      normalizedSearchTerm === 'learn' || normalizedSearchTerm.includes('learn') ||
      normalizedSearchTerm === 'course' || normalizedSearchTerm.includes('course') ||
      normalizedSearchTerm === 'school' || normalizedSearchTerm.includes('school')) {
    console.log('🎓 EDUCATION SEARCH DETECTED - Filtering for education tools only');
    
    const educationTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('education') || lowerTitle.includes('learn') || 
             lowerTitle.includes('course') || lowerTitle.includes('school') ||
             lowerTitle.includes('college') || lowerTitle.includes('skill') ||
             lowerTitle.includes('training') || lowerTitle.includes('tutorial') ||
             lowerDescription.includes('education') || lowerDescription.includes('learn') ||
             lowerDescription.includes('course') || lowerDescription.includes('school') ||
             lowerCategory.includes('education') || lowerCategory.includes('learning') ||
             lowerTags.some(tag => tag.includes('education') || tag.includes('learning') || 
                                  tag.includes('course') || tag.includes('skill'));
    });
    
    console.log(`🎓 Found ${educationTools.length} education tools:`, educationTools.slice(0, 5).map(t => t.title));
    
    const sortedEducationTools = educationTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Priority for AI Web Tools education GPTs
      if (a.title.toLowerCase().includes('learn any skill gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('learn any skill gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('learn any course gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('learn any course gpt')) scoreB += 11000;
      if (a.title.toLowerCase().includes('college degree gpt')) scoreA += 10000;
      if (b.title.toLowerCase().includes('college degree gpt')) scoreB += 10000;
      
      // Exact term matches in title
      if (normalizedSearchTerm.includes('education') && a.title.toLowerCase().includes('education')) scoreA += 9000;
      if (normalizedSearchTerm.includes('education') && b.title.toLowerCase().includes('education')) scoreB += 9000;
      if (normalizedSearchTerm.includes('learn') && a.title.toLowerCase().includes('learn')) scoreA += 9000;
      if (normalizedSearchTerm.includes('learn') && b.title.toLowerCase().includes('learn')) scoreB += 9000;
      
      return scoreB - scoreA;
    });
    
    const nonEducationTools = tools.filter(tool => !educationTools.includes(tool));
    const finalEducationResults = [...sortedEducationTools, ...nonEducationTools];
    return performEnhancedSearch(finalEducationResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // CHAT TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'chat' || normalizedSearchTerm.includes('chat') ||
      normalizedSearchTerm.includes('conversation') || normalizedSearchTerm.includes('chatbot')) {
    console.log('💬 CHAT SEARCH DETECTED - Filtering for chat tools only');
    
    const chatTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('chat') || lowerTitle.includes('conversation') || 
             lowerTitle.includes('talk') || lowerTitle.includes('assistant') ||
             lowerTitle.includes('gpt') || lowerTitle.includes('ai') ||
             lowerDescription.includes('chat') || lowerDescription.includes('conversation') ||
             lowerDescription.includes('talk') || lowerDescription.includes('assistant') ||
             lowerCategory.includes('chat') || lowerCategory.includes('assistant') ||
             lowerTags.some(tag => tag.includes('chat') || tag.includes('conversation') || 
                                  tag.includes('assistant') || tag.includes('ai'));
    });
    
    console.log(`💬 Found ${chatTools.length} chat tools:`, chatTools.slice(0, 5).map(t => t.title));
    
    const sortedChatTools = chatTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Exact "chat" in title gets highest priority
      if (a.title.toLowerCase().includes('chat')) scoreA += 10000;
      if (b.title.toLowerCase().includes('chat')) scoreB += 10000;
      
      // GPT tools get high priority for chat searches
      if (a.title.toLowerCase().includes('gpt')) scoreA += 8000;
      if (b.title.toLowerCase().includes('gpt')) scoreB += 8000;
      
      return scoreB - scoreA;
    });
    
    const nonChatTools = tools.filter(tool => !chatTools.includes(tool));
    const finalChatResults = [...sortedChatTools, ...nonChatTools];
    return performEnhancedSearch(finalChatResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // AGENT TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'agent' || normalizedSearchTerm.includes('agent') ||
      normalizedSearchTerm.includes('assistant') || normalizedSearchTerm.includes('ai assistant')) {
    console.log('🤖 AGENT SEARCH DETECTED - Filtering for agent tools only');
    
    const agentTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('agent') || lowerTitle.includes('assistant') || 
             lowerTitle.includes('gpt') || lowerTitle.includes('ai') ||
             lowerDescription.includes('agent') || lowerDescription.includes('assistant') ||
             lowerDescription.includes('ai assistant') || lowerDescription.includes('ai agent') ||
             lowerCategory.includes('agent') || lowerCategory.includes('assistant') ||
             lowerTags.some(tag => tag.includes('agent') || tag.includes('assistant') || 
                                  tag.includes('ai'));
    });
    
    console.log(`🤖 Found ${agentTools.length} agent tools:`, agentTools.slice(0, 5).map(t => t.title));
    
    const sortedAgentTools = agentTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Exact "agent" in title gets highest priority
      if (a.title.toLowerCase().includes('agent')) scoreA += 10000;
      if (b.title.toLowerCase().includes('agent')) scoreB += 10000;
      
      // "Assistant" in title gets high priority
      if (a.title.toLowerCase().includes('assistant')) scoreA += 9000;
      if (b.title.toLowerCase().includes('assistant')) scoreB += 9000;
      
      return scoreB - scoreA;
    });
    
    const nonAgentTools = tools.filter(tool => !agentTools.includes(tool));
    const finalAgentResults = [...sortedAgentTools, ...nonAgentTools];
    return performEnhancedSearch(finalAgentResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }
  
  // PRIORITY: For "personal" searches, prioritize AI Web Tools GPTs
  if (normalizedSearchTerm.includes('personal')) {
    const aiWebToolsResults = searchAIWebToolsGPTs(tools, searchTerm);
    
    const scoredAIWebTools = aiWebToolsResults
      .map(tool => ({ tool, score: scoreAIWebToolsGPT(tool, searchTerm) }))
      .sort((a, b) => {
        // First sort by score (highest first)
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // Then alphabetically by title
        return a.tool.title.localeCompare(b.tool.title);
      })
      .map(result => result.tool);
    
    const remainingTools = tools.filter(tool => 
      !EXCLUDED_TOOLS.includes(tool.title) &&
      !aiWebToolsResults.some(aiTool => aiTool.title === tool.title)
    );
    
    const regularResults = performEnhancedSearch(remainingTools, searchTerm, searchWords, phoneticVariations, intentConfig);
    
    // 🚀 Apply prioritization to combined results
    return applyAIWebToolsPrioritization([...scoredAIWebTools, ...regularResults]);
  }
  
  // CATEGORY-SPECIFIC PRIORITY MATCHING with AI Web Tools prioritization
  // Health/Medical searches
  if (normalizedSearchTerm.includes('health') || normalizedSearchTerm.includes('medical') || 
      normalizedSearchTerm.includes('doctor') || normalizedSearchTerm.includes('wellness')) {
    const healthTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('health') ||
      tool.category?.toLowerCase().includes('wellness') ||
      tool.title.toLowerCase().includes('health') ||
      tool.title.toLowerCase().includes('medical') ||
      tool.title.toLowerCase().includes('doctor')
    );
    const prioritizedHealthSearch = [...healthTools, ...tools.filter(t => !healthTools.includes(t))];
    return applyAIWebToolsPrioritization(performEnhancedSearch(prioritizedHealthSearch, searchTerm, searchWords, phoneticVariations, intentConfig));
  }
  
  // Business/Finance searches
  if (normalizedSearchTerm.includes('business') || normalizedSearchTerm.includes('finance') || 
      normalizedSearchTerm.includes('money') || normalizedSearchTerm.includes('trading')) {
    const businessTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('business') ||
      tool.category?.toLowerCase().includes('finance') ||
      tool.title.toLowerCase().includes('business') ||
      tool.title.toLowerCase().includes('finance')
    );
    const prioritizedBusinessSearch = [...businessTools, ...tools.filter(t => !businessTools.includes(t))];
    return applyAIWebToolsPrioritization(performEnhancedSearch(prioritizedBusinessSearch, searchTerm, searchWords, phoneticVariations, intentConfig));
  }
  
  // Game/Entertainment searches - HIGH PRIORITY with expanded video game understanding
  if (normalizedSearchTerm.includes('game') || normalizedSearchTerm.includes('gaming') || 
      normalizedSearchTerm.includes('video game') || normalizedSearchTerm.includes('videogame') ||
      normalizedSearchTerm.includes('game design') || normalizedSearchTerm.includes('game development') ||
      normalizedSearchTerm.includes('game creation') || normalizedSearchTerm.includes('game maker') ||
      normalizedSearchTerm.includes('game generator') || normalizedSearchTerm.includes('game builder') ||
      normalizedSearchTerm.includes('seele') || normalizedSearchTerm.includes('rosebud') ||
      normalizedSearchTerm.includes('entertainment') || normalizedSearchTerm.includes('metaverse') ||
      (normalizedSearchTerm.includes('video') && normalizedSearchTerm.includes('making')) ||
      (normalizedSearchTerm.includes('ai') && normalizedSearchTerm.includes('making') && normalizedSearchTerm.includes('video')) ||
      normalizedSearchTerm.includes('playable') || normalizedSearchTerm.includes('interactive game')) {
    
    const gameTools = tools.filter(tool => 
      // Direct title matches
      tool.title.toLowerCase().includes('game') ||
      tool.title.toLowerCase().includes('seele') ||
      tool.title.toLowerCase().includes('rosebud') ||
      
      // Description matches for game creation
      tool.description.toLowerCase().includes('game') ||
      tool.description.toLowerCase().includes('playable') ||
      tool.description.toLowerCase().includes('metaverse') ||
      tool.description.toLowerCase().includes('interactive game') ||
      tool.description.toLowerCase().includes('3d game') ||
      tool.description.toLowerCase().includes('video game') ||
      
      // Category matches
      tool.category?.toLowerCase().includes('game') ||
      tool.category?.toLowerCase().includes('entertainment') ||
      
      // Tag matches
      tool.tags?.some(tag => {
        const lowerTag = tag.toLowerCase();
        return lowerTag.includes('game') || 
               lowerTag.includes('3d') || 
               lowerTag.includes('metaverse') ||
               lowerTag.includes('interactive') ||
               lowerTag.includes('playable') ||
               lowerTag.includes('unity') ||
               lowerTag.includes('unreal');
      }) ||
      
      // URL matches for specific game tools
      tool.directUrl?.includes('gamedesigngpt') ||
      tool.directUrl?.includes('seeles.ai') ||
      tool.directUrl?.includes('rosebud')
    );
    
    // Sort game tools by relevance to video game creation
    const sortedGameTools = gameTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Boost for video game creation tools
      if (a.title.toLowerCase().includes('seele') || a.title.toLowerCase().includes('video game generator')) scoreA += 1000;
      if (b.title.toLowerCase().includes('seele') || b.title.toLowerCase().includes('video game generator')) scoreB += 1000;
      
      if (a.title.toLowerCase().includes('game design') || a.description.toLowerCase().includes('game development')) scoreA += 800;
      if (b.title.toLowerCase().includes('game design') || b.description.toLowerCase().includes('game development')) scoreB += 800;
      
      if (a.description.toLowerCase().includes('ai') && a.description.toLowerCase().includes('game creation')) scoreA += 700;
      if (b.description.toLowerCase().includes('ai') && b.description.toLowerCase().includes('game creation')) scoreB += 700;
      
      return scoreB - scoreA;
    });
    
      // Enhanced gaming/video game prioritization
    if (searchTerm.toLowerCase().includes('debug')) {
      console.log(`🎮 Game search prioritized: Found ${gameTools.length} game-related tools`);
    }
    const prioritizedGameSearch = [...sortedGameTools, ...tools.filter(t => !gameTools.includes(t))];
    return applyAIWebToolsPrioritization(performEnhancedSearch(prioritizedGameSearch, searchTerm, searchWords, phoneticVariations, intentConfig));
  }

  // Creative/Media searches
  if (normalizedSearchTerm.includes('creative') || normalizedSearchTerm.includes('media') || 
      normalizedSearchTerm.includes('video') || normalizedSearchTerm.includes('music') ||
      normalizedSearchTerm.includes('art') || normalizedSearchTerm.includes('design')) {
    const creativeTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('creative') ||
      tool.category?.toLowerCase().includes('media') ||
      tool.title.toLowerCase().includes('video') ||
      tool.title.toLowerCase().includes('music') ||
      tool.title.toLowerCase().includes('art') ||
      tool.title.toLowerCase().includes('design')
    );
    const prioritizedCreativeSearch = [...creativeTools, ...tools.filter(t => !creativeTools.includes(t))];
    return applyAIWebToolsPrioritization(performEnhancedSearch(prioritizedCreativeSearch, searchTerm, searchWords, phoneticVariations, intentConfig));
  }
  
  // Education/Learning searches
  if (normalizedSearchTerm.includes('learn') || normalizedSearchTerm.includes('education') || 
      normalizedSearchTerm.includes('course') || normalizedSearchTerm.includes('school')) {
    const educationTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('education') ||
      tool.category?.toLowerCase().includes('learning') ||
      tool.title.toLowerCase().includes('learn') ||
      tool.title.toLowerCase().includes('education')
    );
    const prioritizedEducationSearch = [...educationTools, ...tools.filter(t => !educationTools.includes(t))];
    return applyAIWebToolsPrioritization(performEnhancedSearch(prioritizedEducationSearch, searchTerm, searchWords, phoneticVariations, intentConfig));
  }
  
  // Regular enhanced search with improved scoring and AI Web Tools prioritization
  const regularSearchResults = performEnhancedSearch(tools, searchTerm, searchWords, phoneticVariations, intentConfig);
  return applyAIWebToolsPrioritization(regularSearchResults);
};

// Perform enhanced search with intent prioritization and fuzzy matching
const performEnhancedSearch = (
  tools: Tool[], 
  searchTerm: string, 
  searchWords: string[], 
  phoneticVariations: string[],
  intentConfig: any
): Tool[] => {
  // Apply intelligent typo correction first
  const processedSearchTerm = superSmartTypoCorrection(searchTerm);
  const finalNormalizedTerm = processedSearchTerm.toLowerCase().trim();
  
  // Detect user task intent
  const userTask = matchUserTask(finalNormalizedTerm);
  
  // Reduced console logging for performance
  
  const results = tools
    .filter(tool => !EXCLUDED_TOOLS.includes(tool.title))
    .map(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = (tool.tags || []).map(tag => tag.toLowerCase());
      
      let score = 0;
      let matched = false;

      // AIWEBTOOLS PRIORITY BOOST - Special handling for our custom GPTs (with relevance checking)
      const aiWebToolsPriorityScore = getAIWebToolsPriorityScore(tool, searchTerm);
      if (aiWebToolsPriorityScore > 0) {
        score += aiWebToolsPriorityScore;
        if (lowerTitle.includes(finalNormalizedTerm)) {
          score += 3000; // Additional boost for matching AI Web Tools
        }
      }

      // INTELLIGENT TASK-BASED SCORING: Boost tools that match detected user tasks
      if (userTask.taskType && userTask.score > 0) {
        const contextScore = scoreToolByContext(tool, finalNormalizedTerm, userTask);
        if (contextScore > 0) {
          matched = true;
          score += contextScore;
        }
      }

      // INTENT PRIORITY BOOST: If we detected intent, boost priority tools
      if (intentConfig) {
        // Massive boost for priority tools
        if (intentConfig.priority.some((priorityTool: string) => 
          tool.title.toLowerCase().includes(priorityTool.toLowerCase()) ||
          priorityTool.toLowerCase().includes(lowerTitle)
        )) {
          matched = true;
          score += 25000; // Highest priority
        }
        
        // Boost for matching categories
        if (intentConfig.categories.some((cat: string) => 
          lowerCategory.includes(cat.toLowerCase()) ||
          cat.toLowerCase().includes(lowerCategory)
        )) {
          matched = true;
          score += 5000;
        }
      }

      // SPECIAL MATCHING: Time Travel searches - HIGHEST PRIORITY
      if (matchTimeTravel(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreTimeTravel(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: Creative Writing searches - HIGH PRIORITY
      if (matchWriting(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreWriting(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: Vibe Coding Agent searches
      if (matchVibeCoding(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreVibeCoding(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: AI Agent searches
      if (matchAgents(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreAgents(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: Game searches - HIGH PRIORITY for video game tools
      if (matchGameTools(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreGameTools(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: Coding Agent searches
      if (matchCodingAgents(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreCodingAgents(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: Web Development searches - HIGH PRIORITY
      if (matchWebDevelopment(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreWebDevelopment(tool, finalNormalizedTerm);
      }

      // SPECIAL MATCHING: Spiritual/Paranormal searches - REDUCED PRIORITY
      if (matchSpiritual(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreSpiritual(tool, finalNormalizedTerm);
      }
      
      if (matchParanormal(tool, finalNormalizedTerm)) {
        matched = true;
        score += scoreParanormal(tool, finalNormalizedTerm);
      }

      // ENHANCED "GOD" MATCHING for spiritual tools - REDUCED BOOST
      if (finalNormalizedTerm.includes('god') && (
        tool.title.toLowerCase().includes('god') || 
        tool.title.toLowerCase().includes('gods') ||
        tool.description.toLowerCase().includes('god') ||
        tool.description.toLowerCase().includes('gods') ||
        tool.description.toLowerCase().includes('deities') ||
        tool.tags?.some(tag => tag.toLowerCase().includes('god') || tag.toLowerCase().includes('gods'))
      )) {
        matched = true;
        score += 8000; // Reduced from 20000
      }

      // SUPER INTELLIGENT MATCHING: Context-aware partial matching
      if (!matched && matchWithContext(tool, searchTerm)) {
        matched = true;
        score += superIntelligentScore(tool, searchTerm);
      }

      // ADVANCED PARTIAL MATCHING: Enhanced predictive matching for prefixes
      const advancedMatches = getAdvancedPartialMatches(searchTerm, [tool]);
      if (!matched && advancedMatches.length > 0) {
        matched = true;
        const suggestions = getPartialMatchSuggestions(searchTerm);
        const partialScore = scoreAdvancedPartialMatch(tool, searchTerm, suggestions);
        score += partialScore;
      }

      // HIGHEST PRIORITY: Exact title match
      if (lowerTitle === finalNormalizedTerm) {
        matched = true;
        score += 20000;
      }
      // VERY HIGH PRIORITY: Title starts with search term
      else if (lowerTitle.startsWith(finalNormalizedTerm)) {
        matched = true;
        score += 15000;
      }
      // HIGH PRIORITY: Title contains search term
      else if (lowerTitle.includes(finalNormalizedTerm)) {
        matched = true;
        score += 10000;
      }

      // SPELLING CORRECTION AND PHONETIC MATCHING
      for (const variation of phoneticVariations) {
        if (lowerTitle.includes(variation.toLowerCase())) {
          matched = true;
          score += 8000;
        }
        if (lowerDescription.includes(variation.toLowerCase())) {
          matched = true;
          score += 3000;
        }
      }

      // MEDIUM-HIGH PRIORITY: Description contains exact term (check both original and corrected)
      if (lowerDescription.includes(finalNormalizedTerm) || lowerDescription.includes(processedSearchTerm.toLowerCase())) {
        matched = true;
        score += 6000;
      }

      // MEDIUM PRIORITY: Category match (check both original and corrected)
      if (lowerCategory.includes(finalNormalizedTerm) || lowerCategory.includes(processedSearchTerm.toLowerCase())) {
        matched = true;
        score += 4000;
      }

      // MEDIUM PRIORITY: Tag matches (check both original and corrected)
      for (const tag of lowerTags) {
        if (tag.includes(finalNormalizedTerm) || tag.includes(processedSearchTerm.toLowerCase())) {
          matched = true;
          score += 3000;
        }
      }

      // LOWER PRIORITY: Individual word matches
      for (const word of searchWords) {
        if (word.length < 2) continue;
        
        if (lowerTitle.includes(word)) {
          matched = true;
          score += 2000;
        }
        if (lowerDescription.includes(word)) {
          matched = true;
          score += 1000;
        }
        if (lowerCategory.includes(word)) {
          matched = true;
          score += 500;
        }
        for (const tag of lowerTags) {
          if (tag.includes(word)) {
            matched = true;
            score += 300;
          }
        }
      }

      return { tool, score, matched };
    })
    .filter(result => result.matched)
    .sort((a, b) => {
      // First sort by score (highest first)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Then alphabetically by title
      return a.tool.title.localeCompare(b.tool.title);
    })
    .map(result => result.tool);

  return results;
};

// Helper function to remove duplicate tools
export const removeDuplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  return tools.filter(tool => {
    if (EXCLUDED_TOOLS.includes(tool.title)) {
      return false;
    }
    
    if (seen.has(tool.title)) {
      return false;
    }
    seen.add(tool.title);
    return true;
  });
};