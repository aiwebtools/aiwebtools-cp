import { Tool } from "@/types/tools";
import { isSpiritualityTool } from "@/utils/categoryUtils/spiritualityDetection";
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
import { deduplicateSearchResults } from "./core/searchDeduplication";
import { getAlphabeticalSortKey, sortToolsAlphabetically } from "./alphabeticalSorting";
import { performSimpleSearch } from "./simpleSearch";
import { applySearchInterleaving } from "./searchInterleaving";

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

// Disable noisy logging by default (console logging on every keystroke causes lag)
const SEARCH_DEBUG = false;
const debugLog = (...args: any[]) => {
  if (SEARCH_DEBUG) console.log(...args);
};

// Detect user intent based on search term
const detectIntent = (searchTerm: string): string | null => {
  const lowerTerm = searchTerm.toLowerCase();

  for (const [intent, config] of Object.entries(INTENT_PATTERNS)) {
    if (config.triggers.some(trigger => lowerTerm.includes(trigger))) {
      debugLog(`🎯 Detected intent: ${intent} for search: ${searchTerm}`);
      return intent;
    }
  }

  return null;
};

// Common compound words that users might type with spaces
const COMPOUND_WORD_MAPPINGS: Record<string, string> = {
  'chat gpt': 'chatgpt',
  'chat g p t': 'chatgpt',
  'chatg pt': 'chatgpt',
  'open ai': 'openai',
  'mid journey': 'midjourney',
  'stable diffusion': 'stablediffusion',
  'dall e': 'dalle',
  'eleven labs': 'elevenlabs',
  'perplexity ai': 'perplexityai',
  'claude ai': 'claude',
  'gemini ai': 'gemini',
  'google ai': 'googleai',
  'meta ai': 'metaai',
  'ai web tools': 'aiwebtools',
  'run way': 'runway',
  'pi ka': 'pika',
  'lu ma': 'luma',
  'veo 2': 'veo2',
  'veo 3': 'veo3',
  'sora 2': 'sora2',
  'gpt 4': 'gpt4',
  'gpt 4o': 'gpt4o',
  'gpt 5': 'gpt5',
  'claude 3': 'claude3',
  'claude 4': 'claude4',
};

// Normalize compound words in search term
const normalizeCompoundWords = (term: string): string => {
  let normalized = term.toLowerCase().trim();
  
  // Apply compound word mappings
  for (const [spaced, compound] of Object.entries(COMPOUND_WORD_MAPPINGS)) {
    if (normalized.includes(spaced)) {
      normalized = normalized.replace(new RegExp(spaced, 'gi'), compound);
    }
  }
  
  return normalized;
};

  // Optimized search function with performance safeguards
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    const filtered = tools.filter(tool => !EXCLUDED_TOOLS.includes(tool.title));
    const prioritized = applyAIWebToolsPrioritization(filtered);
    return deduplicateSearchResults(prioritized);
  }

  // Performance guard - only fall back to simple search for very long gibberish
  const trimmed = searchTerm.trim();
  if (trimmed.length > 50 || (trimmed.length > 30 && !/^[a-zA-Z\s]{3,}/.test(trimmed))) {
    return performSimpleSearch(tools, searchTerm);
  }

  // Normalize compound words (e.g., "CHAT GPT" → "chatgpt")
  const compoundNormalized = normalizeCompoundWords(searchTerm);

  // Use advanced search for most queries - intent matching needs this!
  const shouldUseAdvancedSearch = trimmed.length <= 30 && /^[a-zA-Z\s]{2,}$/.test(trimmed);

  // CRITICAL: Never typo-correct very short prefixes (e.g., "lea" → "health")
  // Short prefixes must behave as literal partial matching.
  const canTypoCorrect = shouldUseAdvancedSearch && compoundNormalized.trim().length >= 4;

  const correctedSearchTerm = canTypoCorrect ? superSmartTypoCorrection(compoundNormalized) : compoundNormalized;
  const partialSuggestions = shouldUseAdvancedSearch ? getPartialMatchSuggestions(compoundNormalized) : [];
  const advancedPartialMatches = shouldUseAdvancedSearch ? getAdvancedPartialMatches(compoundNormalized, tools) : [];
  const normalizedSearchTerm = correctedSearchTerm.toLowerCase().trim();
  // Also create a no-space version for matching compound words in tool titles
  const noSpaceSearchTerm = normalizedSearchTerm.replace(/\s+/g, '');
  const searchWords = normalizedSearchTerm.split(/[\s,.-]+/).filter(word => word.length > 1);
  
  // Enhanced phonetic variations  
  const phoneticVariations = searchTerm.length <= 10 ? phoneticMatch(normalizedSearchTerm) : [];
  
  // Enhanced intent detection
  const userIntent = detectIntent(normalizedSearchTerm);
  const intentConfig = userIntent ? INTENT_PATTERNS[userIntent as keyof typeof INTENT_PATTERNS] : null;
  
  // VIDEO SEARCH PRIORITY - Strict video tool filtering
  if (normalizedSearchTerm === 'video' || normalizedSearchTerm.includes('video')) {
    debugLog('🎬 VIDEO SEARCH DETECTED - Filtering for video tools only');
    
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
    
    debugLog(`🎬 Found ${videoTools.length} video tools:`, videoTools.slice(0, 5).map(t => t.title));
    
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
    
    // Keep non-video tools available for endless browsing, but NEVER let them outrank video matches
    const nonVideoTools = tools.filter(tool => !videoTools.includes(tool));
    const rankedVideo = performEnhancedSearch(sortedVideoTools, searchTerm, searchWords, phoneticVariations, intentConfig);
    return [...rankedVideo, ...nonVideoTools];
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
    debugLog('🎓 EDUCATION SEARCH DETECTED - Filtering for education tools only');
    
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
    
    debugLog(`🎓 Found ${educationTools.length} education tools:`, educationTools.slice(0, 5).map(t => t.title));
    
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
    const rankedEducation = performEnhancedSearch(sortedEducationTools, searchTerm, searchWords, phoneticVariations, intentConfig);

    // CRITICAL: For "learn any"-style queries, hard-pin our matching tools at the top (stable for all devices)
    const q = normalizedSearchTerm;
    const shouldPinLearnAny = q.startsWith('learn any') || q.includes('learn any ');
    if (shouldPinLearnAny) {
      const pinnedOrder = [
        'learn any course gpt',
        'learn any skill gpt',
        'college degree gpt',
      ];

      const pinned: Tool[] = [];
      const rest: Tool[] = [];
      for (const t of rankedEducation) {
        const title = t.title.toLowerCase();
        if (pinnedOrder.some(p => title.includes(p))) pinned.push(t);
        else rest.push(t);
      }

      pinned.sort((a, b) => {
        const at = a.title.toLowerCase();
        const bt = b.title.toLowerCase();
        return pinnedOrder.findIndex(p => at.includes(p)) - pinnedOrder.findIndex(p => bt.includes(p));
      });

      return [...pinned, ...rest, ...nonEducationTools];
    }

    return [...rankedEducation, ...nonEducationTools];
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

  // RESEARCH TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'research' || normalizedSearchTerm.includes('research') ||
      normalizedSearchTerm.includes('analysis') || normalizedSearchTerm.includes('data')) {
    console.log('🔬 RESEARCH SEARCH DETECTED - Filtering for research tools only');
    
    const researchTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('research') || lowerTitle.includes('analysis') || 
             lowerTitle.includes('data') || lowerTitle.includes('investigat') ||
             lowerTitle.includes('study') || lowerTitle.includes('report') ||
             lowerTitle.includes('science') || lowerTitle.includes('academic') ||
             lowerDescription.includes('research') || lowerDescription.includes('analysis') ||
             lowerDescription.includes('data') || lowerDescription.includes('investigat') ||
             lowerCategory.includes('research') || lowerCategory.includes('analysis') ||
             lowerCategory.includes('science') || lowerCategory.includes('data') ||
             lowerTags.some(tag => tag.includes('research') || tag.includes('analysis') || 
                                  tag.includes('data') || tag.includes('science'));
    });
    
    console.log(`🔬 Found ${researchTools.length} research tools:`, researchTools.slice(0, 5).map(t => t.title));
    
    const sortedResearchTools = researchTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Priority for AI Web Tools research GPTs
      if (a.title.toLowerCase().includes('data research analysis report gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('data research analysis report gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('pharma research pro')) scoreA += 11000;
      if (b.title.toLowerCase().includes('pharma research pro')) scoreB += 11000;
      
      // Exact "research" in title gets highest priority
      if (a.title.toLowerCase().includes('research')) scoreA += 10000;
      if (b.title.toLowerCase().includes('research')) scoreB += 10000;
      
      // Analysis and data tools get high priority
      if (a.title.toLowerCase().includes('analysis')) scoreA += 9000;
      if (b.title.toLowerCase().includes('analysis')) scoreB += 9000;
      if (a.title.toLowerCase().includes('data')) scoreA += 8000;
      if (b.title.toLowerCase().includes('data')) scoreB += 8000;
      
      return scoreB - scoreA;
    });
    
    const nonResearchTools = tools.filter(tool => !researchTools.includes(tool));
    const finalResearchResults = [...sortedResearchTools, ...nonResearchTools];
    return performEnhancedSearch(finalResearchResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // GPTS TOOL PRIORITY - Enhanced detection (show all GPTs and AI assistants)
  if (normalizedSearchTerm === 'gpt' || normalizedSearchTerm === 'gpts' || 
      normalizedSearchTerm.includes('gpt') || normalizedSearchTerm.includes('chatgpt') ||
      normalizedSearchTerm.includes('claude') || normalizedSearchTerm.includes('gemini') ||
      normalizedSearchTerm.includes('ai assistant') || normalizedSearchTerm.includes('custom gpt')) {
    console.log('🤖 GPT SEARCH DETECTED - Prioritizing all GPTs and AI assistants');
    
    const gptTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('gpt') || lowerTitle.includes('chatgpt') || 
             lowerTitle.includes('claude') || lowerTitle.includes('gemini') ||
             lowerTitle.includes('assistant') || lowerTitle.includes('ai') ||
             lowerTitle.includes('openai') || lowerTitle.includes('anthropic') ||
             lowerDescription.includes('gpt') || lowerDescription.includes('chatgpt') ||
             lowerDescription.includes('claude') || lowerDescription.includes('gemini') ||
             lowerDescription.includes('ai assistant') || lowerDescription.includes('custom gpt') ||
             lowerCategory.includes('ai') || lowerCategory.includes('assistant') ||
             lowerTags.some(tag => tag.includes('gpt') || tag.includes('ai') || 
                                  tag.includes('assistant') || tag.includes('chatbot')) ||
             // Include all AI Web Tools GPTs
             tool.directUrl?.includes('lovable.app') || tool.directUrl?.includes('aiwebtools');
    });
    
    console.log(`🤖 Found ${gptTools.length} GPT/AI tools:`, gptTools.slice(0, 5).map(t => t.title));
    
    const sortedGPTTools = gptTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // HIGHEST PRIORITY: All AI Web Tools GPTs
      if (a.directUrl?.includes('lovable.app') || a.directUrl?.includes('aiwebtools')) scoreA += 15000;
      if (b.directUrl?.includes('lovable.app') || b.directUrl?.includes('aiwebtools')) scoreB += 15000;
      
      // HIGH PRIORITY: Major AI assistants
      if (a.title.toLowerCase().includes('chatgpt') || a.title.toLowerCase().includes('openai')) scoreA += 12000;
      if (b.title.toLowerCase().includes('chatgpt') || b.title.toLowerCase().includes('openai')) scoreB += 12000;
      if (a.title.toLowerCase().includes('claude') || a.title.toLowerCase().includes('anthropic')) scoreA += 11000;
      if (b.title.toLowerCase().includes('claude') || b.title.toLowerCase().includes('anthropic')) scoreB += 11000;
      if (a.title.toLowerCase().includes('gemini') || a.title.toLowerCase().includes('google ai')) scoreA += 10000;
      if (b.title.toLowerCase().includes('gemini') || b.title.toLowerCase().includes('google ai')) scoreB += 10000;
      
      // MEDIUM PRIORITY: GPT in title
      if (a.title.toLowerCase().includes('gpt')) scoreA += 9000;
      if (b.title.toLowerCase().includes('gpt')) scoreB += 9000;
      
      // LOWER PRIORITY: AI assistants
      if (a.title.toLowerCase().includes('assistant')) scoreA += 8000;
      if (b.title.toLowerCase().includes('assistant')) scoreB += 8000;
      if (a.title.toLowerCase().includes('ai')) scoreA += 7000;
      if (b.title.toLowerCase().includes('ai')) scoreB += 7000;
      
      return scoreB - scoreA;
    });
    
    const nonGPTTools = tools.filter(tool => !gptTools.includes(tool));
    const finalGPTResults = [...sortedGPTTools, ...nonGPTTools];
    return performEnhancedSearch(finalGPTResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // SPIRITUALITY/RELIGION TOOL PRIORITY - COMPREHENSIVE keyword detection
  const SPIRITUAL_TRIGGERS = [
    // Core spiritual terms
    'spiritual', 'spirituality', 'religion', 'religious', 'faith',
    // Deities & figures
    'god', 'gods', 'deity', 'divine', 'jesus', 'christ', 'buddha', 'allah', 
    'krishna', 'shiva', 'vishnu', 'zeus', 'apollo', 'athena', 'odin', 'thor',
    'muhammad', 'prophet', 'saint', 'apostle', 'angel', 'archangel',
    // Scriptures & texts
    'bible', 'quran', 'torah', 'gospel', 'scripture', 'testament', 'vedas', 'gita',
    // Traditions & practices
    'meditation', 'prayer', 'worship', 'mantra', 'enlightenment', 'awakening',
    'mystical', 'mystic', 'mysticism', 'esoteric', 'occult', 'metaphysical',
    // Philosophy & wisdom
    'philosophy', 'philosophical', 'wisdom', 'ancient wisdom', 'enlighten',
    'soul', 'spirit', 'cosmic', 'consciousness', 'transcend', 'sacred', 'holy',
    // World religions
    'christian', 'christianity', 'islam', 'islamic', 'hindu', 'hinduism',
    'buddhist', 'buddhism', 'jewish', 'judaism', 'taoist', 'taoism',
    'pagan', 'wicca', 'shamanic', 'gnostic', 'sufi', 'zen',
    // Light/dark spiritual
    'light', 'darkness', 'heaven', 'hell', 'afterlife', 'resurrection',
    'reincarnation', 'karma', 'dharma', 'chakra', 'kundalini', 'aura'
  ];
  
  const isSpiritualSearch = SPIRITUAL_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger));
  
  if (isSpiritualSearch) {
    console.log('🕉️ SPIRITUALITY SEARCH DETECTED - Filtering for spiritual/religious tools');

    // Use the centralized detector so we catch: religion, God, light, deities, scripture, philosophy, etc.
    const spiritualTools = tools.filter(isSpiritualityTool);

    console.log(`🕉️ Found ${spiritualTools.length} spiritual tools`);

    const sortedSpiritualTools = spiritualTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      // TIER 1: EXACT SPELLING MATCH IN TITLE (HIGHEST PRIORITY)
      // If user types "religion", tools with "religion" in name come first
      if (titleA.includes(normalizedSearchTerm)) scoreA += 50000;
      if (titleB.includes(normalizedSearchTerm)) scoreB += 50000;
      
      // Word-by-word spelling match for multi-word searches
      searchWords.forEach(word => {
        if (word.length >= 3) {
          if (titleA.includes(word)) scoreA += 20000;
          if (titleB.includes(word)) scoreB += 20000;
        }
      });

      // TIER 2: Best religion-specific tools (when searching religion/religious)
      if (normalizedSearchTerm.includes('religion') || normalizedSearchTerm.includes('religious')) {
        const topReligionTools = [
          'religious studies', 'mary magdalene', 'essenes', 'god is light',
          'i am q', 'talk to the gods', 'bible', 'kabbalah', 'jewish',
          'alan watts', 'carl sagan', 'sophia aeterna', 'oraculum',
          'resurrection', 'interpretis', 'mani', 'manicheism', 'prophet of light',
          'quan yin', 'yemaya', 'buddha', 'krishna'
        ];
        if (topReligionTools.some(t => titleA.includes(t))) scoreA += 15000;
        if (topReligionTools.some(t => titleB.includes(t))) scoreB += 15000;
      }

      // TIER 3: Best god-related tools
      if (normalizedSearchTerm.includes('god') || normalizedSearchTerm.includes('gods') || 
          normalizedSearchTerm.includes('deity') || normalizedSearchTerm.includes('divine')) {
        const topGodTools = [
          'talk to the gods', 'god is light', 'godmode', 'mary magdalene',
          'resurrection', 'sophia aeterna', 'quan yin', 'yemaya', 'i am q'
        ];
        if (topGodTools.some(t => titleA.includes(t))) scoreA += 15000;
        if (topGodTools.some(t => titleB.includes(t))) scoreB += 15000;
      }

      // TIER 4: Best bible/scripture tools
      if (normalizedSearchTerm.includes('bible') || normalizedSearchTerm.includes('scripture') ||
          normalizedSearchTerm.includes('testament') || normalizedSearchTerm.includes('gospel')) {
        const topBibleTools = [
          'bible', 'mary magdalene', 'essenes', 'religious studies',
          'god is light', 'resurrection', 'interpretis'
        ];
        if (topBibleTools.some(t => titleA.includes(t))) scoreA += 15000;
        if (topBibleTools.some(t => titleB.includes(t))) scoreB += 15000;
      }

      // TIER 5: Premium spiritual tools general boost
      const premiumSpiritualTools = [
        'talk to the gods', 'mary magdalene', 'alan watts', 'carl sagan',
        'sophia aeterna', 'oraculum', 'god is light', 'resurrection',
        'time machine', 'talk to history', 'kabbalah', 'interpretis',
        'mani', 'manicheism', 'quan yin', 'yemaya', 'self sufficiency',
        'soul map', 'i am q', 'essenes', 'buddha', 'krishna'
      ];
      if (premiumSpiritualTools.some(t => titleA.includes(t))) scoreA += 5000;
      if (premiumSpiritualTools.some(t => titleB.includes(t))) scoreB += 5000;

      return scoreB - scoreA;
    });

    // Run normal relevance search first, then HARD-pin spiritual tools to the top.
    const baseResults = performEnhancedSearch(tools, searchTerm, searchWords, phoneticVariations, intentConfig);
    const spiritualSet = new Set(spiritualTools);

    const pinnedSpiritual = sortedSpiritualTools.filter(t => baseResults.includes(t));
    const remainder = baseResults.filter(t => !spiritualSet.has(t));

    return [...pinnedSpiritual, ...remainder];
  }

  // SCHOOL TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'school' || normalizedSearchTerm.includes('school') ||
      normalizedSearchTerm.includes('homeschool') || normalizedSearchTerm.includes('classroom')) {
    console.log('🏫 SCHOOL SEARCH DETECTED - Filtering for school/education tools');
    
    const schoolTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('school') || lowerTitle.includes('homeschool') ||
             lowerTitle.includes('education') || lowerTitle.includes('classroom') ||
             lowerTitle.includes('teacher') || lowerTitle.includes('student') ||
             lowerTitle.includes('learn') || lowerTitle.includes('course') ||
             lowerDescription.includes('school') || lowerDescription.includes('education') ||
             lowerCategory.includes('education') || lowerCategory.includes('learning') ||
             lowerTags.some(tag => tag.includes('education') || tag.includes('school') ||
                                  tag.includes('learning'));
    });
    
    console.log(`🏫 Found ${schoolTools.length} school tools:`, schoolTools.slice(0, 5).map(t => t.title));
    
    const sortedSchoolTools = schoolTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      // Priority for AI Web Tools school GPTs
      if (a.title.toLowerCase().includes('home-schooling assistant gpt') || a.title.toLowerCase().includes('homeschool gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('home-schooling assistant gpt') || b.title.toLowerCase().includes('homeschool gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('college degree gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('college degree gpt')) scoreB += 11000;
      
      // Exact "school" in title
      if (a.title.toLowerCase().includes('school')) scoreA += 10000;
      if (b.title.toLowerCase().includes('school')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonSchoolTools = tools.filter(tool => !schoolTools.includes(tool));
    const finalSchoolResults = [...sortedSchoolTools, ...nonSchoolTools];
    return performEnhancedSearch(finalSchoolResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // BUSINESS TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'business' || normalizedSearchTerm.includes('business') ||
      normalizedSearchTerm.includes('startup') || normalizedSearchTerm.includes('entrepreneur')) {
    console.log('💼 BUSINESS SEARCH DETECTED - Filtering for business tools only');
    
    const businessTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('business') || lowerTitle.includes('startup') ||
             lowerTitle.includes('entrepreneur') || lowerTitle.includes('company') ||
             lowerTitle.includes('enterprise') || lowerTitle.includes('corporate') ||
             lowerDescription.includes('business') || lowerDescription.includes('startup') ||
             lowerCategory.includes('business') || lowerCategory.includes('productivity') ||
             lowerTags.some(tag => tag.includes('business') || tag.includes('startup'));
    });
    
    console.log(`💼 Found ${businessTools.length} business tools:`, businessTools.slice(0, 5).map(t => t.title));
    
    const sortedBusinessTools = businessTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('business plan generator gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('business plan generator gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('startup validator gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('startup validator gpt')) scoreB += 11000;
      if (a.title.toLowerCase().includes('microsaas gpt')) scoreA += 10000;
      if (b.title.toLowerCase().includes('microsaas gpt')) scoreB += 10000;
      
      if (a.title.toLowerCase().includes('business')) scoreA += 9000;
      if (b.title.toLowerCase().includes('business')) scoreB += 9000;
      
      return scoreB - scoreA;
    });
    
    const nonBusinessTools = tools.filter(tool => !businessTools.includes(tool));
    const finalBusinessResults = [...sortedBusinessTools, ...nonBusinessTools];
    return performEnhancedSearch(finalBusinessResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // WRITING TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'writing' || normalizedSearchTerm.includes('writing') ||
      normalizedSearchTerm.includes('write') || normalizedSearchTerm.includes('content')) {
    debugLog('✍️ WRITING SEARCH DETECTED - Filtering for writing tools only');
    
    const writingTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('writing') || lowerTitle.includes('writer') ||
             lowerTitle.includes('write') || lowerTitle.includes('content') ||
             lowerTitle.includes('copywriting') || lowerTitle.includes('blog') ||
             lowerTitle.includes('article') || lowerTitle.includes('book') ||
             lowerDescription.includes('writing') || lowerDescription.includes('content') ||
             lowerCategory.includes('writing') || lowerCategory.includes('content') ||
             lowerTags.some(tag => tag.includes('writing') || tag.includes('content'));
    });
    
    debugLog(`✍️ Found ${writingTools.length} writing tools:`, writingTools.slice(0, 5).map(t => t.title));
    
    const sortedWritingTools = writingTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('book writer gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('book writer gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('article and blog rewriter gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('article and blog rewriter gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('writing')) scoreA += 10000;
      if (b.title.toLowerCase().includes('writing')) scoreB += 10000;
      if (a.title.toLowerCase().includes('writer')) scoreA += 9000;
      if (b.title.toLowerCase().includes('writer')) scoreB += 9000;
      
      return scoreB - scoreA;
    });
    
    const nonWritingTools = tools.filter(tool => !writingTools.includes(tool));
    const rankedWriting = performEnhancedSearch(sortedWritingTools, searchTerm, searchWords, phoneticVariations, intentConfig);
    return [...rankedWriting, ...nonWritingTools];
  }

  // IMAGE TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'image' || normalizedSearchTerm.includes('image') ||
      normalizedSearchTerm.includes('picture') || normalizedSearchTerm.includes('photo')) {
    console.log('🖼️ IMAGE SEARCH DETECTED - Filtering for image tools only');
    
    const imageTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('image') || lowerTitle.includes('photo') ||
             lowerTitle.includes('picture') || lowerTitle.includes('art') ||
             lowerTitle.includes('graphic') || lowerTitle.includes('visual') ||
             lowerDescription.includes('image') || lowerDescription.includes('photo') ||
             lowerCategory.includes('image') || lowerCategory.includes('art') ||
             lowerTags.some(tag => tag.includes('image') || tag.includes('art'));
    });
    
    console.log(`🖼️ Found ${imageTools.length} image tools:`, imageTools.slice(0, 5).map(t => t.title));
    
    const sortedImageTools = imageTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('restyle me gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('restyle me gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('graphic & cover design gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('graphic & cover design gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('image')) scoreA += 10000;
      if (b.title.toLowerCase().includes('image')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonImageTools = tools.filter(tool => !imageTools.includes(tool));
    const finalImageResults = [...sortedImageTools, ...nonImageTools];
    return performEnhancedSearch(finalImageResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // DESIGN TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'design' || normalizedSearchTerm.includes('design') ||
      normalizedSearchTerm.includes('graphic') || normalizedSearchTerm.includes('logo')) {
    console.log('🎨 DESIGN SEARCH DETECTED - Filtering for design tools only');
    
    const designTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('design') || lowerTitle.includes('graphic') ||
             lowerTitle.includes('logo') || lowerTitle.includes('creative') ||
             lowerTitle.includes('sketch') || lowerTitle.includes('art') ||
             lowerDescription.includes('design') || lowerDescription.includes('graphic') ||
             lowerCategory.includes('design') || lowerCategory.includes('creative') ||
             lowerTags.some(tag => tag.includes('design') || tag.includes('creative'));
    });
    
    console.log(`🎨 Found ${designTools.length} design tools:`, designTools.slice(0, 5).map(t => t.title));
    
    const sortedDesignTools = designTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('graphic & cover design gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('graphic & cover design gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('sketch artist gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('sketch artist gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('design')) scoreA += 10000;
      if (b.title.toLowerCase().includes('design')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonDesignTools = tools.filter(tool => !designTools.includes(tool));
    const finalDesignResults = [...sortedDesignTools, ...nonDesignTools];
    return performEnhancedSearch(finalDesignResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // MUSIC TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'music' || normalizedSearchTerm.includes('music') ||
      normalizedSearchTerm.includes('sound') || normalizedSearchTerm.includes('audio')) {
    console.log('🎵 MUSIC SEARCH DETECTED - Filtering for music tools only');
    
    const musicTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('music') || lowerTitle.includes('sound') ||
             lowerTitle.includes('audio') || lowerTitle.includes('voice') ||
             lowerTitle.includes('song') || lowerTitle.includes('melody') ||
             lowerDescription.includes('music') || lowerDescription.includes('audio') ||
             lowerCategory.includes('music') || lowerCategory.includes('audio') ||
             lowerTags.some(tag => tag.includes('music') || tag.includes('audio'));
    });
    
    console.log(`🎵 Found ${musicTools.length} music tools:`, musicTools.slice(0, 5).map(t => t.title));
    
    const sortedMusicTools = musicTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('music video maker ai studio')) scoreA += 12000;
      if (b.title.toLowerCase().includes('music video maker ai studio')) scoreB += 12000;
      if (a.title.toLowerCase().includes('music melodies & lessons gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('music melodies & lessons gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('music')) scoreA += 10000;
      if (b.title.toLowerCase().includes('music')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonMusicTools = tools.filter(tool => !musicTools.includes(tool));
    const finalMusicResults = [...sortedMusicTools, ...nonMusicTools];
    return performEnhancedSearch(finalMusicResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // CODING TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'coding' || normalizedSearchTerm.includes('coding') ||
      normalizedSearchTerm.includes('programming') || normalizedSearchTerm.includes('code') ||
      normalizedSearchTerm.includes('developer') || normalizedSearchTerm.includes('development')) {
    console.log('💻 CODING SEARCH DETECTED - Filtering for coding tools only');
    
    const codingTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('coding') || lowerTitle.includes('code') ||
             lowerTitle.includes('programming') || lowerTitle.includes('developer') ||
             lowerTitle.includes('development') || lowerTitle.includes('software') ||
             lowerDescription.includes('coding') || lowerDescription.includes('programming') ||
             lowerCategory.includes('development') || lowerCategory.includes('coding') ||
             lowerTags.some(tag => tag.includes('coding') || tag.includes('development'));
    });
    
    console.log(`💻 Found ${codingTools.length} coding tools:`, codingTools.slice(0, 5).map(t => t.title));
    
    const sortedCodingTools = codingTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('engineering gpt ai suite')) scoreA += 12000;
      if (b.title.toLowerCase().includes('engineering gpt ai suite')) scoreB += 12000;
      
      if (a.title.toLowerCase().includes('coding')) scoreA += 10000;
      if (b.title.toLowerCase().includes('coding')) scoreB += 10000;
      if (a.title.toLowerCase().includes('code')) scoreA += 9000;
      if (b.title.toLowerCase().includes('code')) scoreB += 9000;
      
      return scoreB - scoreA;
    });
    
    const nonCodingTools = tools.filter(tool => !codingTools.includes(tool));
    const finalCodingResults = [...sortedCodingTools, ...nonCodingTools];
    return performEnhancedSearch(finalCodingResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // MARKETING TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'marketing' || normalizedSearchTerm.includes('marketing') ||
      normalizedSearchTerm.includes('advertising') || normalizedSearchTerm.includes('promotion')) {
    console.log('📈 MARKETING SEARCH DETECTED - Filtering for marketing tools only');
    
    const marketingTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('marketing') || lowerTitle.includes('advertising') ||
             lowerTitle.includes('promotion') || lowerTitle.includes('sales') ||
             lowerTitle.includes('social media') || lowerTitle.includes('seo') ||
             lowerDescription.includes('marketing') || lowerDescription.includes('advertising') ||
             lowerCategory.includes('marketing') || lowerCategory.includes('sales') ||
             lowerTags.some(tag => tag.includes('marketing') || tag.includes('sales'));
    });
    
    console.log(`📈 Found ${marketingTools.length} marketing tools:`, marketingTools.slice(0, 5).map(t => t.title));
    
    const sortedMarketingTools = marketingTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('marketing')) scoreA += 10000;
      if (b.title.toLowerCase().includes('marketing')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonMarketingTools = tools.filter(tool => !marketingTools.includes(tool));
    const finalMarketingResults = [...sortedMarketingTools, ...nonMarketingTools];
    return performEnhancedSearch(finalMarketingResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // HEALTH TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'health' || normalizedSearchTerm.includes('health') ||
      normalizedSearchTerm.includes('medical') || normalizedSearchTerm.includes('wellness') ||
      normalizedSearchTerm.includes('fitness') || normalizedSearchTerm.includes('doctor')) {
    console.log('🏥 HEALTH SEARCH DETECTED - Filtering for health tools only');
    
    const healthTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('health') || lowerTitle.includes('medical') ||
             lowerTitle.includes('doctor') || lowerTitle.includes('wellness') ||
             lowerTitle.includes('fitness') || lowerTitle.includes('medicine') ||
             lowerDescription.includes('health') || lowerDescription.includes('medical') ||
             lowerCategory.includes('health') || lowerCategory.includes('wellness') ||
             lowerTags.some(tag => tag.includes('health') || tag.includes('medical'));
    });
    
    console.log(`🏥 Found ${healthTools.length} health tools:`, healthTools.slice(0, 5).map(t => t.title));
    
    const sortedHealthTools = healthTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('personalized dr. gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('personalized dr. gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('mental wellness gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('mental wellness gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('health')) scoreA += 10000;
      if (b.title.toLowerCase().includes('health')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonHealthTools = tools.filter(tool => !healthTools.includes(tool));
    const finalHealthResults = [...sortedHealthTools, ...nonHealthTools];
    return performEnhancedSearch(finalHealthResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // FINANCE TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'finance' || normalizedSearchTerm.includes('finance') ||
      normalizedSearchTerm.includes('money') || normalizedSearchTerm.includes('trading') ||
      normalizedSearchTerm.includes('investment') || normalizedSearchTerm.includes('tax')) {
    console.log('💰 FINANCE SEARCH DETECTED - Filtering for finance tools only');
    
    const financeTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('finance') || lowerTitle.includes('money') ||
             lowerTitle.includes('trading') || lowerTitle.includes('investment') ||
             lowerTitle.includes('tax') || lowerTitle.includes('budget') ||
             lowerDescription.includes('finance') || lowerDescription.includes('trading') ||
             lowerCategory.includes('finance') || lowerCategory.includes('trading') ||
             lowerTags.some(tag => tag.includes('finance') || tag.includes('trading'));
    });
    
    console.log(`💰 Found ${financeTools.length} finance tools:`, financeTools.slice(0, 5).map(t => t.title));
    
    const sortedFinanceTools = financeTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('trader gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('trader gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('taxes gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('taxes gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('finance')) scoreA += 10000;
      if (b.title.toLowerCase().includes('finance')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonFinanceTools = tools.filter(tool => !financeTools.includes(tool));
    const finalFinanceResults = [...sortedFinanceTools, ...nonFinanceTools];
    return performEnhancedSearch(finalFinanceResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // LEGAL TOOL PRIORITY - Enhanced detection (already exists but enhancing)
  if (normalizedSearchTerm === 'legal' || normalizedSearchTerm.includes('legal') ||
      normalizedSearchTerm.includes('law') || normalizedSearchTerm.includes('contract')) {
    console.log('⚖️ LEGAL SEARCH DETECTED - Filtering for legal tools only');
    
    const legalTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('legal') || lowerTitle.includes('law') ||
             lowerTitle.includes('contract') || lowerTitle.includes('legislation') ||
             lowerTitle.includes('attorney') || lowerTitle.includes('lawyer') ||
             lowerDescription.includes('legal') || lowerDescription.includes('contract') ||
             lowerCategory.includes('legal') || lowerCategory.includes('law') ||
             lowerTags.some(tag => tag.includes('legal') || tag.includes('law'));
    });
    
    console.log(`⚖️ Found ${legalTools.length} legal tools:`, legalTools.slice(0, 5).map(t => t.title));
    
    const sortedLegalTools = legalTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('legal draftsmith gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('legal draftsmith gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('public defender gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('public defender gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('legal')) scoreA += 10000;
      if (b.title.toLowerCase().includes('legal')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonLegalTools = tools.filter(tool => !legalTools.includes(tool));
    const finalLegalResults = [...sortedLegalTools, ...nonLegalTools];
    return performEnhancedSearch(finalLegalResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // SCIENCE TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'science' || normalizedSearchTerm.includes('science') ||
      normalizedSearchTerm.includes('scientific') || normalizedSearchTerm.includes('laboratory')) {
    console.log('🧪 SCIENCE SEARCH DETECTED - Filtering for science tools only');
    
    const scienceTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('science') || lowerTitle.includes('scientific') ||
             lowerTitle.includes('research') || lowerTitle.includes('laboratory') ||
             lowerTitle.includes('experiment') || lowerTitle.includes('analysis') ||
             lowerDescription.includes('science') || lowerDescription.includes('research') ||
             lowerCategory.includes('science') || lowerCategory.includes('research') ||
             lowerTags.some(tag => tag.includes('science') || tag.includes('research'));
    });
    
    console.log(`🧪 Found ${scienceTools.length} science tools:`, scienceTools.slice(0, 5).map(t => t.title));
    
    const sortedScienceTools = scienceTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('nikola tesla gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('nikola tesla gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('alchemist scientist gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('alchemist scientist gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('science')) scoreA += 10000;
      if (b.title.toLowerCase().includes('science')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonScienceTools = tools.filter(tool => !scienceTools.includes(tool));
    const finalScienceResults = [...sortedScienceTools, ...nonScienceTools];
    return performEnhancedSearch(finalScienceResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // TRAVEL TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'travel' || normalizedSearchTerm.includes('travel') ||
      normalizedSearchTerm.includes('trip') || normalizedSearchTerm.includes('vacation')) {
    console.log('✈️ TRAVEL SEARCH DETECTED - Filtering for travel tools only');
    
    const travelTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('travel') || lowerTitle.includes('trip') ||
             lowerTitle.includes('vacation') || lowerTitle.includes('journey') ||
             lowerTitle.includes('adventure') || lowerTitle.includes('tourism') ||
             lowerDescription.includes('travel') || lowerDescription.includes('trip') ||
             lowerCategory.includes('travel') || lowerCategory.includes('tourism') ||
             lowerTags.some(tag => tag.includes('travel') || tag.includes('trip'));
    });
    
    console.log(`✈️ Found ${travelTools.length} travel tools:`, travelTools.slice(0, 5).map(t => t.title));
    
    const sortedTravelTools = travelTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('travel advisor gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('travel advisor gpt')) scoreB += 12000;
      
      if (a.title.toLowerCase().includes('travel')) scoreA += 10000;
      if (b.title.toLowerCase().includes('travel')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonTravelTools = tools.filter(tool => !travelTools.includes(tool));
    const finalTravelResults = [...sortedTravelTools, ...nonTravelTools];
    return performEnhancedSearch(finalTravelResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // FOOD TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'food' || normalizedSearchTerm.includes('food') ||
      normalizedSearchTerm.includes('cooking') || normalizedSearchTerm.includes('recipe') ||
      normalizedSearchTerm.includes('chef') || normalizedSearchTerm.includes('restaurant')) {
    console.log('🍽️ FOOD SEARCH DETECTED - Filtering for food tools only');
    
    const foodTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('food') || lowerTitle.includes('cooking') ||
             lowerTitle.includes('recipe') || lowerTitle.includes('chef') ||
             lowerTitle.includes('restaurant') || lowerTitle.includes('culinary') ||
             lowerDescription.includes('food') || lowerDescription.includes('cooking') ||
             lowerCategory.includes('food') || lowerCategory.includes('cooking') ||
             lowerTags.some(tag => tag.includes('food') || tag.includes('cooking'));
    });
    
    console.log(`🍽️ Found ${foodTools.length} food tools:`, foodTools.slice(0, 5).map(t => t.title));
    
    const sortedFoodTools = foodTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('chef "sizzle" ai culinary assistant')) scoreA += 12000;
      if (b.title.toLowerCase().includes('chef "sizzle" ai culinary assistant')) scoreB += 12000;
      if (a.title.toLowerCase().includes('restaurant menu maker gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('restaurant menu maker gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('food')) scoreA += 10000;
      if (b.title.toLowerCase().includes('food')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonFoodTools = tools.filter(tool => !foodTools.includes(tool));
    const finalFoodResults = [...sortedFoodTools, ...nonFoodTools];
    return performEnhancedSearch(finalFoodResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // FITNESS TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'fitness' || normalizedSearchTerm.includes('fitness') ||
      normalizedSearchTerm.includes('workout') || normalizedSearchTerm.includes('exercise')) {
    console.log('💪 FITNESS SEARCH DETECTED - Filtering for fitness tools only');
    
    const fitnessTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('fitness') || lowerTitle.includes('workout') ||
             lowerTitle.includes('exercise') || lowerTitle.includes('training') ||
             lowerTitle.includes('gym') || lowerTitle.includes('health') ||
             lowerDescription.includes('fitness') || lowerDescription.includes('workout') ||
             lowerCategory.includes('fitness') || lowerCategory.includes('health') ||
             lowerTags.some(tag => tag.includes('fitness') || tag.includes('workout'));
    });
    
    console.log(`💪 Found ${fitnessTools.length} fitness tools:`, fitnessTools.slice(0, 5).map(t => t.title));
    
    const sortedFitnessTools = fitnessTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('fitness')) scoreA += 10000;
      if (b.title.toLowerCase().includes('fitness')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonFitnessTools = tools.filter(tool => !fitnessTools.includes(tool));
    const finalFitnessResults = [...sortedFitnessTools, ...nonFitnessTools];
    return performEnhancedSearch(finalFitnessResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // GAMING TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'gaming' || normalizedSearchTerm.includes('gaming') ||
      normalizedSearchTerm === 'game' || normalizedSearchTerm.includes('game')) {
    console.log('🎮 GAMING SEARCH DETECTED - Filtering for gaming tools only');
    
    const gamingTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('game') || lowerTitle.includes('gaming') ||
             lowerTitle.includes('entertainment') || lowerTitle.includes('trivia') ||
             lowerTitle.includes('fun') || lowerTitle.includes('play') ||
             lowerDescription.includes('game') || lowerDescription.includes('gaming') ||
             lowerCategory.includes('gaming') || lowerCategory.includes('entertainment') ||
             lowerTags.some(tag => tag.includes('game') || tag.includes('gaming'));
    });
    
    console.log(`🎮 Found ${gamingTools.length} gaming tools:`, gamingTools.slice(0, 5).map(t => t.title));
    
    const sortedGamingTools = gamingTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('game design document / developer gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('game design document / developer gpt')) scoreB += 12000;
      if (a.title.toLowerCase().includes('trivia night gpt')) scoreA += 11000;
      if (b.title.toLowerCase().includes('trivia night gpt')) scoreB += 11000;
      
      if (a.title.toLowerCase().includes('game')) scoreA += 10000;
      if (b.title.toLowerCase().includes('game')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonGamingTools = tools.filter(tool => !gamingTools.includes(tool));
    const finalGamingResults = [...sortedGamingTools, ...nonGamingTools];
    return performEnhancedSearch(finalGamingResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // SOCIAL TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'social' || normalizedSearchTerm.includes('social') ||
      normalizedSearchTerm.includes('media') || normalizedSearchTerm.includes('networking')) {
    console.log('👥 SOCIAL SEARCH DETECTED - Filtering for social tools only');
    
    const socialTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('social') || lowerTitle.includes('media') ||
             lowerTitle.includes('networking') || lowerTitle.includes('community') ||
             lowerTitle.includes('chat') || lowerTitle.includes('communication') ||
             lowerDescription.includes('social') || lowerDescription.includes('media') ||
             lowerCategory.includes('social') || lowerCategory.includes('media') ||
             lowerTags.some(tag => tag.includes('social') || tag.includes('media'));
    });
    
    console.log(`👥 Found ${socialTools.length} social tools:`, socialTools.slice(0, 5).map(t => t.title));
    
    const sortedSocialTools = socialTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('social safety net gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('social safety net gpt')) scoreB += 12000;
      
      if (a.title.toLowerCase().includes('social')) scoreA += 10000;
      if (b.title.toLowerCase().includes('social')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonSocialTools = tools.filter(tool => !socialTools.includes(tool));
    const finalSocialResults = [...sortedSocialTools, ...nonSocialTools];
    return performEnhancedSearch(finalSocialResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // AUTOMATION TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'automation' || normalizedSearchTerm.includes('automation') ||
      normalizedSearchTerm.includes('workflow') || normalizedSearchTerm.includes('productivity')) {
    console.log('⚙️ AUTOMATION SEARCH DETECTED - Filtering for automation tools only');
    
    const automationTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('automation') || lowerTitle.includes('workflow') ||
             lowerTitle.includes('productivity') || lowerTitle.includes('efficiency') ||
             lowerTitle.includes('automated') || lowerTitle.includes('streamline') ||
             lowerDescription.includes('automation') || lowerDescription.includes('workflow') ||
             lowerCategory.includes('automation') || lowerCategory.includes('productivity') ||
             lowerTags.some(tag => tag.includes('automation') || tag.includes('productivity'));
    });
    
    console.log(`⚙️ Found ${automationTools.length} automation tools:`, automationTools.slice(0, 5).map(t => t.title));
    
    const sortedAutomationTools = automationTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('multitasker gpt')) scoreA += 12000;
      if (b.title.toLowerCase().includes('multitasker gpt')) scoreB += 12000;
      
      if (a.title.toLowerCase().includes('automation')) scoreA += 10000;
      if (b.title.toLowerCase().includes('automation')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonAutomationTools = tools.filter(tool => !automationTools.includes(tool));
    const finalAutomationResults = [...sortedAutomationTools, ...nonAutomationTools];
    return performEnhancedSearch(finalAutomationResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // TRANSLATION TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'translation' || normalizedSearchTerm.includes('translation') ||
      normalizedSearchTerm.includes('translate') || normalizedSearchTerm.includes('language')) {
    console.log('🌐 TRANSLATION SEARCH DETECTED - Filtering for translation tools only');
    
    const translationTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('translation') || lowerTitle.includes('translate') ||
             lowerTitle.includes('language') || lowerTitle.includes('multilingual') ||
             lowerTitle.includes('interpreter') || lowerTitle.includes('linguistic') ||
             lowerDescription.includes('translation') || lowerDescription.includes('translate') ||
             lowerCategory.includes('translation') || lowerCategory.includes('language') ||
             lowerTags.some(tag => tag.includes('translation') || tag.includes('language'));
    });
    
    console.log(`🌐 Found ${translationTools.length} translation tools:`, translationTools.slice(0, 5).map(t => t.title));
    
    const sortedTranslationTools = translationTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('translation')) scoreA += 10000;
      if (b.title.toLowerCase().includes('translation')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonTranslationTools = tools.filter(tool => !translationTools.includes(tool));
    const finalTranslationResults = [...sortedTranslationTools, ...nonTranslationTools];
    return performEnhancedSearch(finalTranslationResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // VOICE TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'voice' || normalizedSearchTerm.includes('voice') ||
      normalizedSearchTerm.includes('speech') || normalizedSearchTerm.includes('tts')) {
    console.log('🗣️ VOICE SEARCH DETECTED - Filtering for voice tools only');
    
    const voiceTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('voice') || lowerTitle.includes('speech') ||
             lowerTitle.includes('tts') || lowerTitle.includes('text-to-speech') ||
             lowerTitle.includes('audio') || lowerTitle.includes('vocal') ||
             lowerDescription.includes('voice') || lowerDescription.includes('speech') ||
             lowerCategory.includes('voice') || lowerCategory.includes('audio') ||
             lowerTags.some(tag => tag.includes('voice') || tag.includes('speech'));
    });
    
    console.log(`🗣️ Found ${voiceTools.length} voice tools:`, voiceTools.slice(0, 5).map(t => t.title));
    
    const sortedVoiceTools = voiceTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('voice')) scoreA += 10000;
      if (b.title.toLowerCase().includes('voice')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonVoiceTools = tools.filter(tool => !voiceTools.includes(tool));
    const finalVoiceResults = [...sortedVoiceTools, ...nonVoiceTools];
    return performEnhancedSearch(finalVoiceResults, searchTerm, searchWords, phoneticVariations, intentConfig);
  }

  // PHOTO TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'photo' || normalizedSearchTerm.includes('photo') ||
      normalizedSearchTerm.includes('photography') || normalizedSearchTerm.includes('picture')) {
    console.log('📸 PHOTO SEARCH DETECTED - Filtering for photo tools only');
    
    const photoTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('photo') || lowerTitle.includes('photography') ||
             lowerTitle.includes('picture') || lowerTitle.includes('image') ||
             lowerTitle.includes('visual') || lowerTitle.includes('camera') ||
             lowerDescription.includes('photo') || lowerDescription.includes('photography') ||
             lowerCategory.includes('photo') || lowerCategory.includes('image') ||
             lowerTags.some(tag => tag.includes('photo') || tag.includes('image'));
    });
    
    console.log(`📸 Found ${photoTools.length} photo tools:`, photoTools.slice(0, 5).map(t => t.title));
    
    const sortedPhotoTools = photoTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.title.toLowerCase().includes('photo')) scoreA += 10000;
      if (b.title.toLowerCase().includes('photo')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonPhotoTools = tools.filter(tool => !photoTools.includes(tool));
    const finalPhotoResults = [...sortedPhotoTools, ...nonPhotoTools];
    return performEnhancedSearch(finalPhotoResults, searchTerm, searchWords, phoneticVariations, intentConfig);
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
  // 🚀 Apply AI Web Tools prioritization and deduplication to final results
  const prioritizedResults = applyAIWebToolsPrioritization(regularSearchResults);
  
  // 🧹 FINAL STEP: Apply search deduplication to remove duplicate tools
  console.log(`🔍 Before deduplication: ${prioritizedResults.length} results`);
  const deduplicatedResults = deduplicateSearchResults(prioritizedResults);
  console.log(`🔍 After deduplication: ${deduplicatedResults.length} results`);
  
  return deduplicatedResults;
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
  
  // Create no-space version for compound word matching (e.g., "chat gpt" → "chatgpt")
  const noSpaceTerm = finalNormalizedTerm.replace(/\s+/g, '');
  
  // Detect user task intent
  const userTask = matchUserTask(finalNormalizedTerm);
  
  // Reduced console logging for performance
  
  const results = tools
    .filter(tool => !EXCLUDED_TOOLS.includes(tool.title))
    .map(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerTitleNoSpace = lowerTitle.replace(/\s+/g, ''); // For compound matching
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = (tool.tags || []).map(tag => tag.toLowerCase());
      
      let score = 0;
      let matched = false;

      // COMPOUND WORD MATCHING: "chat gpt" should find "ChatGPT"
      if (noSpaceTerm.length >= 4 && lowerTitleNoSpace.includes(noSpaceTerm)) {
        matched = true;
        score += 18000; // Very high priority for compound word matches
        console.log(`🔗 Compound match: "${noSpaceTerm}" found in "${lowerTitle}"`);
      }

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

      // ADVANCED PARTIAL MATCHING: Enhanced predictive matching for prefixes - REMOVED FOR PERFORMANCE
      // Performance fix: This was calling getAdvancedPartialMatches for each tool individually
      // The function is already called once at the beginning for all tools (line 108)
      // Removing this section that was causing 48+ function calls per keystroke

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

      // WORD-BY-WORD MATCHING FOR LONG TOOL NAMES
      // Split title into words for precise matching (e.g., "Babylonian Star Protocol" matches "babylon")
      const titleWords = lowerTitle.split(/[\s\-_&]+/);
      
      for (const word of searchWords) {
        if (word.length < 3) continue; // Skip very short words
        
        // HIGH PRIORITY: Search word matches START of a title word
        // e.g., "babylon" matches "babylonian" in "Babylonian Star Protocol GPT"
        const wordStartMatch = titleWords.some(tw => tw.startsWith(word));
        if (wordStartMatch) {
          matched = true;
          score += 8000; // High priority for word-start matches
        }
        // MEDIUM-HIGH: Search word is contained in title
        else if (lowerTitle.includes(word)) {
          matched = true;
          score += 4000;
        }
        
        // Check description and tags
        if (lowerDescription.includes(word)) {
          matched = true;
          score += 1500;
        }
        if (lowerCategory.includes(word)) {
          matched = true;
          score += 800;
        }
        for (const tag of lowerTags) {
          if (tag.includes(word) || tag.startsWith(word)) {
            matched = true;
            score += 600;
          }
        }
      }

      // SPIRITUAL TOOL QUALITY RANKING - Extra boost for known top-tier spiritual tools
      // Only applies when search term is spiritual-related
      const isSpiritualSearch = finalNormalizedTerm.includes("spirit") || 
        finalNormalizedTerm.includes("god") || 
        finalNormalizedTerm.includes("soul") ||
        finalNormalizedTerm.includes("divine") ||
        finalNormalizedTerm.includes("meditation") ||
        finalNormalizedTerm.includes("buddha") ||
        finalNormalizedTerm.includes("jesus") ||
        finalNormalizedTerm.includes("religious") ||
        finalNormalizedTerm.includes("mystical") ||
        finalNormalizedTerm.includes("philosophy") ||
        finalNormalizedTerm.includes("wisdom") ||
        lowerCategory.includes("spiritual") ||
        lowerCategory.includes("philosophy");

      if (isSpiritualSearch && matched) {
        // Tier 1: Premier spiritual tools (+5000)
        const tier1Spiritual = [
          "talk to the gods gpt",
          "sophia aeterna ai",
          "god is light gpt",
          "resurrection gpt",
          "buddha gpt",
          "alan watts gpt",
          "mary magdalene gpt",
          "carl sagan gpt",
          "oraculum",
          "dream interpreter gpt"
        ];
        
        // Tier 2: Excellent spiritual tools (+3500)
        const tier2Spiritual = [
          "talk to history gpt",
          "time machine gpt",
          "manicheism gpt",
          "mingjiao prophet of light gpt",
          "council of light gpt",
          "yemaya",
          "quan yin gpt",
          "ancient essenes gpt",
          "kabbalah gpt",
          "torah gpt",
          "jesus gpt",
          "chief crazy horse gpt",
          "st. francis gpt",
          "rumi gpt",
          "socrates gpt",
          "marcus aurelius gpt"
        ];
        
        // Tier 3: Good spiritual tools (+2000)
        const tier3Spiritual = [
          "fortune teller gpt",
          "tarot",
          "astrology",
          "numerology",
          "psychic",
          "self sufficiency gpt",
          "intergalactic ancient archivist"
        ];

        const titleCheck = lowerTitle;
        if (tier1Spiritual.some(t => titleCheck.includes(t))) {
          score += 5000;
        } else if (tier2Spiritual.some(t => titleCheck.includes(t))) {
          score += 3500;
        } else if (tier3Spiritual.some(t => titleCheck.includes(t))) {
          score += 2000;
        }
        
        // Additional boost for tools in the actual Spiritual category
        if (lowerCategory.includes("spiritual") || lowerCategory.includes("philosophy")) {
          score += 1500;
        }
      }

      // EDUCATIONAL TOOL QUALITY RANKING - Boost educational tools for education-related searches
      const isEducationSearch = finalNormalizedTerm.includes("college") || 
        finalNormalizedTerm.includes("university") || 
        finalNormalizedTerm.includes("school") ||
        finalNormalizedTerm.includes("education") ||
        finalNormalizedTerm.includes("degree") ||
        finalNormalizedTerm.includes("course") ||
        finalNormalizedTerm.includes("learn") ||
        finalNormalizedTerm.includes("tutor") ||
        finalNormalizedTerm.includes("teach") ||
        finalNormalizedTerm.includes("class") ||
        finalNormalizedTerm.includes("study");

      if (isEducationSearch && matched) {
        // Tier 1: Premier educational tools (+6000)
        const tier1Education = [
          "college degree gpt",
          "learn any course gpt",
          "learn any skill gpt",
          "homeschool gpt",
          "home-schooling assistant gpt",
          "quiz maker",
          "course maker gpt",
          "course creator gpt"
        ];
        
        // Tier 2: Excellent educational tools (+4000)
        const tier2Education = [
          "algebraic expression",
          "math",
          "language tutor",
          "ppt presentation",
          "pptx",
          "powerpoint",
          "training manual",
          "book writer gpt"
        ];
        
        // Non-educational keywords to demote (-3000)
        const nonEducationKeywords = [
          "firearm", "gun", "weapon", "marriage", "mender", "therapy",
          "video analysis", "surveillance", "trading", "crypto", "cannabis",
          "tattoo", "mixologist", "bartender", "chef", "cooking"
        ];

        const titleCheck = lowerTitle;
        const descCheck = lowerDescription;
        
        if (tier1Education.some(t => titleCheck.includes(t))) {
          score += 6000;
        } else if (tier2Education.some(t => titleCheck.includes(t))) {
          score += 4000;
        }
        
        // Boost tools in Education category
        if (lowerCategory.includes("education") || lowerCategory.includes("learning") || lowerCategory.includes("academic")) {
          score += 3000;
        }
        
        // Demote non-educational tools
        if (nonEducationKeywords.some(k => titleCheck.includes(k) || descCheck.includes(k))) {
          score -= 5000;
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

  // Apply deduplication to enhance search results and avoid showing duplicate tools
  const deduplicatedResults = deduplicateSearchResults(results);
  debugLog(`🔍 Enhanced search: ${results.length} → ${deduplicatedResults.length} (removed ${results.length - deduplicatedResults.length} duplicates)`);

  // PINNED PRIORITIES: Certain intents must ALWAYS show the right tool first.
  // This bypasses 2:1 interleaving only for the pinned head items.
  const lowerTerm = searchTerm.toLowerCase();
  const pinnedTitles: string[] = [];

  // Spirit queries: demote specific non-spiritual tools that falsely match
  // ONLY applies to explicit "spirit" or "spiritual" searches - does NOT affect other searches
  const isSpiritQuery = lowerTerm.startsWith("spirit") || lowerTerm === "spiritual" || (lowerTerm.includes("spirit") && lowerTerm.length <= 12);
  
  // Only demote these specific tools - no broad category filtering
  const demoteTitles = isSpiritQuery
    ? new Set<string>([
        // 4 clearly non-spiritual tools to demote from spirit search
        "cyber-kabbalah light code translation engine gpt",
        "time machine of unwritten history gpt",
        "self sufficiency gpt",
        "jarvis – the steward of humanity gpt",
        "jarvis - the steward of humanity gpt",
      ])
    : null;

  const maybeDemote = (list: Tool[]) => {
    if (!demoteTitles) return list;
    const demoted: Tool[] = [];
    const kept: Tool[] = [];

    for (const t of list) {
      const title = (t?.title || "").toLowerCase();
      if (demoteTitles.has(title)) {
        demoted.push(t);
      } else {
        kept.push(t);
      }
    }

    if (!demoted.length) return list;

    // Insert demoted items around position 30 (or end if list is shorter)
    const insertAt = Math.min(30, kept.length);
    return [...kept.slice(0, insertAt), ...demoted, ...kept.slice(insertAt)];
  };

  const demotionAdjustedResults = maybeDemote(deduplicatedResults);

  // Book writing intent (natural language)
  if ((lowerTerm.includes("write") && lowerTerm.includes("book")) || lowerTerm.includes("book writing") || lowerTerm.includes("book writer")) {
    pinnedTitles.push("BOOK WRITER GPT");
  }

  // Movie making intent (natural language)
  if ((lowerTerm.includes("make") || lowerTerm.includes("create")) && (lowerTerm.includes("movie") || lowerTerm.includes("film") || lowerTerm.includes("video"))) {
    pinnedTitles.push("Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora Prompt Assistant", "Luma Dream Machine Prompt Assistant");
  }

  // Spiritual/Spirit intent - prioritize best spiritual tools
  if (isSpiritQuery || (lowerTerm.includes("spirit") && lowerTerm.includes("gpt"))) {
    pinnedTitles.push(
      "TALK TO THE GODS GPT",
      "Sophia Aeterna AI",
      "God Is Light GPT",
      "Resurrection GPT",
      "Oraculum – The Revealer of Hidden \"Truths\"",
      "Dream Interpreter GPT",
      "Mary Magdalene GPT",
      "ALAN WATTS GPT",
      "TIME MACHINE GPT",
      "TALK TO HISTORY GPT"
    );
  }

  const pinned: Tool[] = [];
  if (pinnedTitles.length) {
    const set = new Set<string>();
    for (const title of pinnedTitles) {
      const found = demotionAdjustedResults.find(t => t.title.toLowerCase() === title.toLowerCase());
      if (found && !set.has(found.title)) {
        set.add(found.title);
        pinned.push(found);
      }
    }
  }

  const remaining = pinned.length
    ? demotionAdjustedResults.filter(t => !pinned.some(p => p.title === t.title))
    : demotionAdjustedResults;

  // Apply 2:1 interleaving: 2 external tools, then 1 Custom GPT/Gem (for the remaining results)
  const interleavedResults = applySearchInterleaving(remaining);
  debugLog(`🔄 Applied 2:1 interleaving to ${interleavedResults.length} search results`);

  return pinned.length ? [...pinned, ...interleavedResults] : interleavedResults;
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