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
import { getMatchingPhraseHandler, toolMatchesPhraseHandler, scorePhraseHandlerMatch } from "./commonPhraseHandlers";

// Tools to exclude from search results
const EXCLUDED_TOOLS = [
  "PERSONAL CAPITAL",
  "PERSONAL ASSISTANT GPT",
  "personal financial advisor"
];

// Intent detection patterns for better search prioritization - EXPANDED FOR ALL CATEGORIES
const INTENT_PATTERNS = {
  // NEW: Video generation - top priority for video-related queries
  video_generation: {
    triggers: ['video generator', 'video generation', 'text to video', 'text-to-video', 'ai video', 'make video', 'create video', 'generate video', 'video maker', 'video creator', 'video ai', 'video producing', 'video synthesis', 'sora', 'runway', 'pika', 'luma', 'kling', 'heygen', 'synthesia'],
    priority: ['Sora', 'SORA by OpenAI', 'SORA 2', 'Runway Gen-3', 'Runway ML', 'RunwayML', 'RunwayML Gen-2', 'Pika', 'Pika Labs', 'Luma Dream Machine', 'Luma AI', 'Luma Labs Dream Machine', 'KLING AI', 'HeyGen', 'Synthesia', 'InVideo AI', 'Veo', 'Stable Video Diffusion', 'Movie Maker Studio AI SUITE', 'Music Video Maker AI Studio', 'D-ID', 'Kaiber', 'Colossyan'],
    categories: ['AI Video Generation', 'Video & Multimedia', 'Video & Animation Tools', 'Video Generation', 'VIDEO & MULTIMEDIA']
  },
  education: {
    triggers: ['college', 'university', 'degree', 'education', 'learn', 'study', 'course', 'school', 'academic', 'skill', 'training', 'lesson', 'class', 'homework', 'tutor', 'teacher', 'student'],
    priority: ['COLLEGE DEGREE GPT', 'LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'Home-Schooling Assistant GPT', 'HomeSchool GPT', 'Quiz Maker Ai', 'Course Maker GPT'],
    categories: ['Education & Research Tools', 'Learning & Education', 'Educational Tools', 'Education & Learning']
  },
  creative: {
    triggers: ['book', 'write', 'writing', 'author', 'story', 'novel', 'script', 'content', 'blog', 'article', 'creative', 'design', 'art', 'graphic', 'logo', 'image', 'movie', 'music'],
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
    priority: ['G-Mode GPT', 'Engineering GPT AI Suite', 'MULTITASKER GPT', 'Customizable GPT Maker'],
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
  },
  // NEW: Relationships, love, dating, emotional support
  relationships: {
    triggers: ['love', 'loving', 'relationship', 'relationships', 'dating', 'date', 'marriage', 'married', 'spouse', 'husband', 'wife', 'partner', 'soulmate', 'couple', 'couples', 'romance', 'romantic', 'flirt', 'flirting', 'rizz', 'heartbreak', 'heartbroken', 'breakup', 'divorce', 'cheating', 'infidelity', 'friend', 'friends', 'friendship', 'companion', 'companionship', 'connection', 'relationship help', 'relationship advice', 'couples therapy'],
    priority: ['Marriage Mender GPT', 'Mental Wellness GPT', 'Rizz AI', 'Hinge AI', 'eHarmony AI', 'Coffee Meets Bagel', 'Fortune Teller GPT', 'Relate'],
    categories: ['Health & Wellness', 'AI Dating & Relationship', 'Mental Health & Wellness', 'Personal Development']
  },
  // NEW: Grief, death, loss, memorial
  grief: {
    triggers: ['death', 'dead', 'died', 'dying', 'grief', 'grieve', 'grieving', 'mourning', 'loss', 'lost someone', 'losing someone', 'bereavement', 'memorial', 'legacy', 'remembrance', 'remember', 'deceased', 'funeral', 'passed away', 'passing', 'afterlife', 'heaven', 'immortalize', 'preserve', 'bring back', 'loved one', 'loved ones', 'miss someone', 'missing someone', 'tribute', 'honor', 'reconnect'],
    priority: ['Resurrection GPT', 'Mental Wellness GPT', 'ImmortalizeME', 'Titanic Resurrections GPT', 'Talk to History GPT', 'Soul Map GPT', 'Sophia Aeterna AI'],
    categories: ['Health & Wellness', 'Mental Health & Wellness', 'Spirituality & Philosophy', 'Personal Development']
  },
  // NEW: Mental health, therapy, emotional support
  mental_health: {
    triggers: ['mental health', 'mental wellness', 'anxiety', 'anxious', 'depression', 'depressed', 'sad', 'sadness', 'stressed', 'stress', 'therapy', 'therapist', 'counseling', 'counselor', 'help me', 'need help', 'support', 'emotional support', 'comfort', 'guidance', 'advice', 'talk to someone', 'someone to talk to', 'lonely', 'loneliness', 'hopeless', 'hopelessness', 'despair', 'crisis', 'struggling', 'overwhelmed', 'burnout', 'cope', 'coping', 'healing', 'self-care', 'selfcare', 'mindfulness', 'meditate', 'calm', 'relax', 'vent', 'venting', 'feelings', 'emotions', 'emotional', 'trauma', 'ptsd'],
    priority: ['Mental Wellness GPT', 'Marriage Mender GPT', 'ALAN WATTS GPT', 'Sophia Aeterna AI', 'Dream Interpreter GPT'],
    categories: ['Health & Wellness', 'Mental Health & Wellness', 'AI Mental Health & Wellness Tools', 'Personal Development']
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
  // Web3 mappings
  'web 3': 'web3',
  'web3 domains': 'web3domains',
  'world peace': 'worldpeace',
  'world trade': 'worldtrade',
  'transfer money': 'transfermoney',
  'transfer coin': 'transfercoin',
  'coin transfer': 'cointransfer',
  'cash transfer': 'cashtransfer',
  'transfer cash': 'transfercash',
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

  // Performance guard - fall back to simple search for long queries to prevent freezing
  const trimmed = searchTerm.trim();
  if (trimmed.length > 40) {
    return performSimpleSearch(tools, searchTerm);
  }
  if (trimmed.length > 25 && !/^[a-zA-Z\s]{3,}/.test(trimmed)) {
    return performSimpleSearch(tools, searchTerm);
  }

  // SINGLE LETTER SEARCH - Show tools starting with that letter AND tools containing it as a standalone word
  if (trimmed.length === 1 && /^[a-zA-Z]$/.test(trimmed)) {
    const letter = trimmed.toLowerCase();
    debugLog(`🔤 SINGLE LETTER SEARCH: "${letter}" - Finding all tools starting with or containing this letter as a word`);
    
    // Priority 1: Tools where the letter is a standalone word in the title (e.g., "Q" in "I Am Q I AM You GPT")
    const standaloneWordMatch = tools.filter(tool => {
      if (EXCLUDED_TOOLS.includes(tool.title)) return false;
      const titleWords = tool.title.toLowerCase().split(/[\s\-–—]+/);
      return titleWords.includes(letter);
    });
    
    // Priority 2: Tools starting with the letter
    const startsWithTools = tools.filter(tool => {
      if (EXCLUDED_TOOLS.includes(tool.title)) return false;
      if (standaloneWordMatch.includes(tool)) return false;
      const sortKey = getAlphabeticalSortKey(tool.title);
      return sortKey.startsWith(letter);
    });
    
    // Sort each group alphabetically
    const sortAlpha = (a: Tool, b: Tool) => {
      const keyA = getAlphabeticalSortKey(a.title);
      const keyB = getAlphabeticalSortKey(b.title);
      return keyA.localeCompare(keyB);
    };
    
    standaloneWordMatch.sort(sortAlpha);
    startsWithTools.sort(sortAlpha);
    
    const matchingTools = [...standaloneWordMatch, ...startsWithTools];
    
    debugLog(`🔤 Found ${matchingTools.length} tools for "${letter}" (${standaloneWordMatch.length} standalone word matches)`);
    
    // Return matching tools first, then remaining tools
    const matchingSet = new Set(matchingTools.map(t => t.title));
    const remainingTools = tools.filter(tool => 
      !EXCLUDED_TOOLS.includes(tool.title) && !matchingSet.has(tool.title)
    ).sort(sortAlpha);
    
    return deduplicateSearchResults([...matchingTools, ...remainingTools]);
  }

  // Normalize compound words (e.g., "CHAT GPT" → "chatgpt")
  const compoundNormalized = normalizeCompoundWords(searchTerm);

  // Use advanced search for most queries - intent matching needs this!
  // IMPORTANT: allow digits + dots so queries like "web3", "web 3", ".worldtrade" still get full intelligence.
  // Cap at 25 chars for advanced search to prevent lag on long queries
  const shouldUseAdvancedSearch = trimmed.length <= 25 && /^[a-zA-Z0-9\s.]{1,}$/.test(trimmed);

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
  
  // COMMON PHRASE HANDLER - Check 50 common search phrases first
  const phraseHandler = getMatchingPhraseHandler(normalizedSearchTerm);
  if (phraseHandler) {
    debugLog(`🎯 PHRASE HANDLER MATCHED: Finding tools for "${normalizedSearchTerm}"`);
    
    // Get all matching tools
    const matchingTools = tools.filter(tool => {
      if (EXCLUDED_TOOLS.includes(tool.title)) return false;
      return toolMatchesPhraseHandler(tool, phraseHandler);
    });
    
    debugLog(`🎯 Found ${matchingTools.length} matching tools`);
    
    // Score and sort matching tools
    const scoredTools = matchingTools.map(tool => ({
      tool,
      score: scorePhraseHandlerMatch(tool, phraseHandler)
    })).sort((a, b) => b.score - a.score);
    
    const sortedMatchingTools = scoredTools.map(st => st.tool);
    
    // Get non-matching tools for infinite scroll
    const nonMatchingTools = tools.filter(tool => 
      !EXCLUDED_TOOLS.includes(tool.title) && !matchingTools.includes(tool)
    );
    
    return deduplicateSearchResults([...sortedMatchingTools, ...nonMatchingTools]);
  }

  // TIME MACHINE SEARCH PRIORITY - Exact phrase matching for all time machine variants
  if (normalizedSearchTerm.includes('time machine') || normalizedSearchTerm.includes('timemachine') ||
      (normalizedSearchTerm.includes('time') && normalizedSearchTerm.includes('machine'))) {
    debugLog('⏰ TIME MACHINE SEARCH DETECTED - Finding all time machine tools');
    
    const timeMachineTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      
      return lowerTitle.includes('time machine') || 
             lowerTitle.includes('time travel') ||
             lowerDescription.includes('time machine') ||
             lowerDescription.includes('time travel') ||
             lowerTags.some(tag => tag.includes('time machine') || tag.includes('time travel'));
    });
    
    debugLog(`⏰ Found ${timeMachineTools.length} time machine tools:`, timeMachineTools.map(t => t.title));
    
    // Sort time machine tools - exact "time machine" in title first, NO auto GPT priority
    const sortedTimeMachineTools = timeMachineTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      // HIGHEST: Exact "time machine gpt" at the start
      if (titleA.startsWith('time machine gpt')) scoreA += 50000;
      if (titleB.startsWith('time machine gpt')) scoreB += 50000;
      
      // HIGH: Contains "time machine" in title
      if (titleA.includes('time machine')) scoreA += 30000;
      if (titleB.includes('time machine')) scoreB += 30000;
      
      // MEDIUM: Contains "time travel" in title  
      if (titleA.includes('time travel')) scoreA += 20000;
      if (titleB.includes('time travel')) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonTimeMachineTools = tools.filter(tool => !timeMachineTools.includes(tool));
    return [...sortedTimeMachineTools, ...nonTimeMachineTools];
  }

  // WEB3 DOMAIN SEARCH PRIORITY - Find all Web3/blockchain domains when searching for domain names
  const WEB3_DOMAIN_TRIGGERS = [
    // Direct domain name searches (with or without dot)
    '.worldtrade', 'worldtrade', '.worldpeace', 'worldpeace', '.transfermoney', 'transfermoney',
    '.transfercoin', 'transfercoin', '.cointransfer', 'cointransfer', '.transfercash', 'transfercash',
    '.cashtransfer', 'cashtransfer', '.ai-tools', 'ai-tools', '.aiwebtools', 'aiwebtools',
    '.aimainframe', 'aimainframe', '.aitoolscompany', 'aitoolscompany',
    '.robotsales', 'robotsales', '.robotshop', 'robotshop', '.robotstore', 'robotstore',
    '.worldtrader', 'worldtrader',
    // Web3/blockchain domain terms
    'web3', 'web 3', 'web3 domain', 'blockchain domain', 'decentralized domain', 'crypto domain',
    'nft domain', 'web3 domains', 'register domain', 'freename', 'decentralized web',
    // Cash/money transfer terms that map to domains
    'transfer money', 'send money', 'coin transfer', 'cash transfer', 'crypto transfer'
  ];
  
  if (WEB3_DOMAIN_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger)) ||
      normalizedSearchTerm.startsWith('.') || // Any search starting with a dot
      (normalizedSearchTerm.includes('domain') && (normalizedSearchTerm.includes('web') || normalizedSearchTerm.includes('crypto') || normalizedSearchTerm.includes('blockchain')))) {
    debugLog('🌐 WEB3 DOMAIN SEARCH DETECTED - Finding all Web3/blockchain domains');
    
    const web3DomainTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      // Match WEB3 Domains category or domain-related tools
      return lowerCategory.includes('web3') || lowerCategory.includes('domain') ||
             lowerTitle.includes('domain') || lowerTitle.startsWith('.') ||
             lowerTags.some(tag => tag.includes('web3') || tag.includes('domain') || tag.includes('blockchain domain') || tag.startsWith('.'));
    });
    
    debugLog(`🌐 Found ${web3DomainTools.length} Web3 domain tools:`, web3DomainTools.map(t => t.title));
    
    // Sort Web3 domain tools - exact domain name matches first
    const sortedWeb3DomainTools = web3DomainTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      const tagsA = a.tags?.map(t => t.toLowerCase()).join(' ') || '';
      const tagsB = b.tags?.map(t => t.toLowerCase()).join(' ') || '';
      
      // HIGHEST: Exact domain name match in title (user searched for ".worldtrade" and tool is ".worldtrade Domain")
      if (titleA.includes(normalizedSearchTerm.replace('.', ''))) scoreA += 100000;
      if (titleB.includes(normalizedSearchTerm.replace('.', ''))) scoreB += 100000;
      
      // HIGH: Domain name in tags
      if (tagsA.includes(normalizedSearchTerm.replace('.', ''))) scoreA += 80000;
      if (tagsB.includes(normalizedSearchTerm.replace('.', ''))) scoreB += 80000;
      
      // MEDIUM-HIGH: Financial/money transfer domains when searching for transfer terms
      if (normalizedSearchTerm.includes('money') || normalizedSearchTerm.includes('transfer') || normalizedSearchTerm.includes('cash') || normalizedSearchTerm.includes('coin')) {
        if (titleA.includes('transfer') || titleA.includes('cash') || titleA.includes('coin') || titleA.includes('money')) scoreA += 60000;
        if (titleB.includes('transfer') || titleB.includes('cash') || titleB.includes('coin') || titleB.includes('money')) scoreB += 60000;
      }
      
      // MEDIUM: World/global domains when searching world terms
      if (normalizedSearchTerm.includes('world') || normalizedSearchTerm.includes('peace') || normalizedSearchTerm.includes('trade')) {
        if (titleA.includes('world')) scoreA += 50000;
        if (titleB.includes('world')) scoreB += 50000;
      }
      
      // MEDIUM: AI/robot domains when searching AI terms
      if (normalizedSearchTerm.includes('ai') || normalizedSearchTerm.includes('robot')) {
        if (titleA.includes('ai') || titleA.includes('robot')) scoreA += 40000;
        if (titleB.includes('ai') || titleB.includes('robot')) scoreB += 40000;
      }
      
      return scoreB - scoreA;
    });
    
    const nonWeb3DomainTools = tools.filter(tool => !web3DomainTools.includes(tool));
    return [...sortedWeb3DomainTools, ...nonWeb3DomainTools];
  }

  // APP BUILDER SEARCH PRIORITY - Tools that build apps, websites, UI
  const APP_BUILDER_TRIGGERS = [
    'app builder', 'app building', 'build app', 'build apps', 'app maker', 'app creator',
    'website builder', 'site builder', 'web builder', 'no code', 'nocode', 'low code', 'lowcode',
    'ui builder', 'ui design', 'interface builder', 'drag and drop', 'visual builder',
    'app development', 'app generator', 'create app', 'make app', 'develop app'
  ];
  
  if (APP_BUILDER_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger)) ||
      (normalizedSearchTerm.includes('app') && normalizedSearchTerm.includes('build'))) {
    debugLog('📱 APP BUILDER SEARCH DETECTED - Finding app/website building tools');
    
    // Keywords for app building tools
    const APP_BUILDER_KEYWORDS = [
      // Core app builder terms
      'app builder', 'app building', 'app maker', 'app creator', 'app generator', 'app development',
      // Website/web builders
      'website builder', 'site builder', 'web builder', 'landing page', 'webpage',
      // No-code/low-code platforms
      'no code', 'nocode', 'no-code', 'low code', 'lowcode', 'low-code', 'visual builder',
      // UI/Design tools
      'ui builder', 'ui design', 'interface', 'drag and drop', 'visual development',
      // Coding/development agents
      'coding agent', 'code agent', 'developer agent', 'dev agent', 'code generator',
      'ai coder', 'ai developer', 'ai coding', 'ai development',
      // Specific platforms
      'lovable', 'bolt', 'replit', 'v0', 'vercel', 'webflow', 'bubble', 'softr', 'glide',
      'adalo', 'thunkable', 'flutterflow', 'appgyver', 'outsystems', 'mendix',
      'retool', 'internal tool', 'admin panel', 'dashboard builder',
      // Related terms
      'prototype', 'wireframe', 'mockup', 'frontend', 'full stack', 'fullstack',
      'react', 'next.js', 'web app', 'mobile app', 'saas', 'mvp', 'startup builder'
    ];
    
    const appBuilderTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      return APP_BUILDER_KEYWORDS.some(keyword => allText.includes(keyword)) ||
             lowerCategory.includes('development') || lowerCategory.includes('coding') ||
             lowerCategory.includes('no-code') || lowerCategory.includes('web builder') ||
             lowerTags.some(tag => tag.includes('app builder') || tag.includes('coding agent') || tag.includes('no code'));
    });
    
    debugLog(`📱 Found ${appBuilderTools.length} app builder tools`);
    
    // Sort app builder tools by relevance
    const sortedAppBuilderTools = appBuilderTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      const descA = a.description.toLowerCase();
      const descB = b.description.toLowerCase();
      const tagsA = a.tags?.map(t => t.toLowerCase()).join(' ') || '';
      const tagsB = b.tags?.map(t => t.toLowerCase()).join(' ') || '';
      
      // HIGHEST: Exact "app builder" in title
      if (titleA.includes('app builder')) scoreA += 80000;
      if (titleB.includes('app builder')) scoreB += 80000;
      
      // VERY HIGH: "app building" or "app maker" in title
      if (titleA.includes('app building') || titleA.includes('app maker') || titleA.includes('app creator')) scoreA += 70000;
      if (titleB.includes('app building') || titleB.includes('app maker') || titleB.includes('app creator')) scoreB += 70000;
      
      // HIGH: Major no-code/low-code platforms
      const majorPlatforms = ['lovable', 'bolt', 'replit', 'v0', 'webflow', 'bubble', 'softr', 'glide', 'flutterflow'];
      if (majorPlatforms.some(p => titleA.includes(p))) scoreA += 60000;
      if (majorPlatforms.some(p => titleB.includes(p))) scoreB += 60000;
      
      // HIGH: Coding agents
      if (titleA.includes('coding agent') || titleA.includes('code agent') || titleA.includes('coder')) scoreA += 55000;
      if (titleB.includes('coding agent') || titleB.includes('code agent') || titleB.includes('coder')) scoreB += 55000;
      
      // MEDIUM-HIGH: Website builder in title
      if (titleA.includes('website builder') || titleA.includes('site builder') || titleA.includes('web builder')) scoreA += 50000;
      if (titleB.includes('website builder') || titleB.includes('site builder') || titleB.includes('web builder')) scoreB += 50000;
      
      // MEDIUM: No-code/low-code in title or tags
      if (titleA.includes('no code') || titleA.includes('nocode') || titleA.includes('low code') || tagsA.includes('no code')) scoreA += 45000;
      if (titleB.includes('no code') || titleB.includes('nocode') || titleB.includes('low code') || tagsB.includes('no code')) scoreB += 45000;
      
      // MEDIUM: UI/interface builder
      if (titleA.includes('ui') || titleA.includes('interface') || titleA.includes('frontend')) scoreA += 40000;
      if (titleB.includes('ui') || titleB.includes('interface') || titleB.includes('frontend')) scoreB += 40000;
      
      // LOWER: App building in description
      if (descA.includes('build app') || descA.includes('app builder') || descA.includes('create app')) scoreA += 30000;
      if (descB.includes('build app') || descB.includes('app builder') || descB.includes('create app')) scoreB += 30000;
      
      // LOWEST: Development/coding category
      if (a.category?.toLowerCase().includes('development') || a.category?.toLowerCase().includes('coding')) scoreA += 20000;
      if (b.category?.toLowerCase().includes('development') || b.category?.toLowerCase().includes('coding')) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonAppBuilderTools = tools.filter(tool => !appBuilderTools.includes(tool));
    return [...sortedAppBuilderTools, ...nonAppBuilderTools];
  }

  // HISTORY SEARCH PRIORITY - Comprehensive historical tools detection
  if (normalizedSearchTerm === 'history' || normalizedSearchTerm.includes('history') ||
      normalizedSearchTerm.includes('historical') || normalizedSearchTerm.includes('ancient')) {
    debugLog('📜 HISTORY SEARCH DETECTED - Finding all history-related tools');
    
    // Historical figures, spiritual gurus, ancient civilizations
    const HISTORICAL_KEYWORDS = [
      // Core history terms
      'history', 'historical', 'ancient', 'medieval', 'renaissance', 'era', 'century', 'past',
      // Time travel/exploration
      'time machine', 'time travel', 'time traveler',
      // Ancient civilizations
      'atlantis', 'babylon', 'egypt', 'egyptian', 'rome', 'roman', 'greek', 'greece', 'mesopotamia', 
      'sumerian', 'aztec', 'mayan', 'inca', 'viking', 'celtic', 'persian', 'ottoman', 'byzantine',
      // Historical figures (spiritual gurus, philosophers, leaders)
      'buddha', 'confucius', 'socrates', 'plato', 'aristotle', 'marcus aurelius', 'seneca',
      'jesus', 'mary magdalene', 'moses', 'muhammad', 'krishna', 'shiva', 'vishnu',
      'alan watts', 'rumi', 'hafiz', 'lao tzu', 'laozi', 'zhuangzi',
      'nikola tesla', 'albert einstein', 'leonardo da vinci', 'newton', 'galileo',
      'cleopatra', 'caesar', 'alexander', 'napoleon', 'genghis khan',
      'geronimo', 'crazy horse', 'sitting bull', 'native american',
      'titanic', 'resurrection', 'resurrections',
      // Religious/spiritual history
      'prophet', 'saint', 'apostle', 'disciple', 'biblical', 'scripture',
      'gnostic', 'manichae', 'zoroastr', 'vedic', 'sufi',
      // Historical roles/concepts
      'apothecary', 'alchemist', 'alchemy', 'oracle', 'sage', 'philosopher',
      'archaeolog', 'indiana', 'artifact', 'heritage', 'civilization',
      'headline', 'pattern', 'hidden', 'interpret', 'archiv'
    ];
    
    const historyTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      // Check for any historical keywords
      return HISTORICAL_KEYWORDS.some(keyword => allText.includes(keyword)) ||
             lowerCategory.includes('time') ||
             lowerCategory.includes('spiritual') ||
             lowerCategory.includes('philosophy');
    });
    
    debugLog(`📜 Found ${historyTools.length} history tools:`, historyTools.slice(0, 20).map(t => t.title));
    
    // Sort history tools by relevance - NO auto GPT priority, pure relevance-based
    const sortedHistoryTools = historyTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      const descA = a.description.toLowerCase();
      const descB = b.description.toLowerCase();
      
      // HIGHEST: Exact "history" in title
      if (titleA.includes('history')) scoreA += 50000;
      if (titleB.includes('history')) scoreB += 50000;
      
      // HIGH: "historical" in title
      if (titleA.includes('historical')) scoreA += 40000;
      if (titleB.includes('historical')) scoreB += 40000;
      
      // HIGH: Time travel/machine tools
      if (titleA.includes('time machine') || titleA.includes('time travel')) scoreA += 35000;
      if (titleB.includes('time machine') || titleB.includes('time travel')) scoreB += 35000;
      
      // MEDIUM-HIGH: Ancient civilizations in title
      if (titleA.includes('atlantis') || titleA.includes('babylon') || titleA.includes('egypt')) scoreA += 30000;
      if (titleB.includes('atlantis') || titleB.includes('babylon') || titleB.includes('egypt')) scoreB += 30000;
      
      // MEDIUM: Historical figures in title
      const figureKeywords = ['tesla', 'einstein', 'buddha', 'socrates', 'alan watts', 'rumi', 'mary magdalene', 'titanic'];
      if (figureKeywords.some(k => titleA.includes(k))) scoreA += 25000;
      if (figureKeywords.some(k => titleB.includes(k))) scoreB += 25000;
      
      // MEDIUM: Archaeology, apothecary, alchemy
      if (titleA.includes('archaeolog') || titleA.includes('indiana') || titleA.includes('apothecary') || titleA.includes('alchemist')) scoreA += 20000;
      if (titleB.includes('archaeolog') || titleB.includes('indiana') || titleB.includes('apothecary') || titleB.includes('alchemist')) scoreB += 20000;
      
      // LOWER: History in description only
      if (descA.includes('history') || descA.includes('historical')) scoreA += 10000;
      if (descB.includes('history') || descB.includes('historical')) scoreB += 10000;
      
      return scoreB - scoreA;
    });
    
    const nonHistoryTools = tools.filter(tool => !historyTools.includes(tool));
    return [...sortedHistoryTools, ...nonHistoryTools];
  }

  // VIDEO SEARCH PRIORITY - COMPREHENSIVE detection for 50+ tools
  const VIDEO_TRIGGERS = [
    'video', 'film', 'movie', 'cinema', 'animation', 'animate', 'animated',
    'editing', 'editor', 'production', 'filmmaker', 'creator', 'content creator',
    'youtube', 'tiktok', 'reels', 'shorts', 'streaming', 'live', 'broadcast',
    'vlog', 'vlogger', 'documentary', 'commercial', 'ad', 'advertisement', 'trailer',
    'sora', 'runway', 'pika', 'luma', 'kling', 'hailuo', 'veo', 'gen-2', 'gen-3',
    'text to video', 'ai video', 'video generation', 'video generator', 'video maker',
    'motion', 'vfx', 'visual effects', 'cgi', 'render', 'rendering', '3d animation',
    'explainer', 'tutorial', 'screencast', 'screen recording', 'webcam', 'camera',
    'clip', 'footage', 'stock video', 'b-roll', 'montage', 'slideshow', 'timelapse',
    'slow motion', 'speed ramp', 'transition', 'subtitle', 'caption', 'transcript'
  ];
  
  if (VIDEO_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger))) {
    debugLog('🎬 VIDEO SEARCH DETECTED - Filtering for video tools');
    
    const videoTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      return VIDEO_TRIGGERS.some(trigger => allText.includes(trigger)) ||
             lowerCategory.includes('video') || lowerCategory.includes('film') ||
             lowerCategory.includes('animation');
    });
    
    debugLog(`🎬 Found ${videoTools.length} video tools`);
    
    const sortedVideoTools = videoTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      // Major video tools first
      const majorVideoTools = ['sora', 'runway', 'pika', 'luma', 'kling', 'hailuo', 'veo', 'gen-2', 'gen-3'];
      if (majorVideoTools.some(t => titleA.includes(t))) scoreA += 18000;
      if (majorVideoTools.some(t => titleB.includes(t))) scoreB += 18000;
      
      // Custom GPTs
      if (titleA.includes('movie maker studio')) scoreA += 16000;
      if (titleB.includes('movie maker studio')) scoreB += 16000;
      if (titleA.includes('movie script writer')) scoreA += 15000;
      if (titleB.includes('movie script writer')) scoreB += 15000;
      if (titleA.includes('movie scene maker')) scoreA += 14000;
      if (titleB.includes('movie scene maker')) scoreB += 14000;
      if (titleA.includes('music video maker')) scoreA += 13000;
      if (titleB.includes('music video maker')) scoreB += 13000;
      if (titleA.includes('video analysis')) scoreA += 12000;
      if (titleB.includes('video analysis')) scoreB += 12000;
      
      // Spelling match boost
      if (titleA.includes(normalizedSearchTerm)) scoreA += 20000;
      if (titleB.includes(normalizedSearchTerm)) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonVideoTools = tools.filter(tool => !videoTools.includes(tool));
    return [...sortedVideoTools, ...nonVideoTools];
  }
  
  // AUDIO/MUSIC TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'audio' || normalizedSearchTerm.includes('audio') || 
      normalizedSearchTerm.includes('music') || normalizedSearchTerm.includes('sound') || 
      normalizedSearchTerm.includes('voice')) {
    debugLog('🎵 AUDIO SEARCH DETECTED - Filtering for audio tools only');
    
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
    
    debugLog(`🎵 Found ${audioTools.length} audio tools:`, audioTools.slice(0, 5).map(t => t.title));
    
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
    debugLog('💬 CHAT SEARCH DETECTED - Filtering for chat tools only');
    
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
    
    debugLog(`💬 Found ${chatTools.length} chat tools:`, chatTools.slice(0, 5).map(t => t.title));
    
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
    debugLog('🤖 AGENT SEARCH DETECTED - Filtering for agent tools only');
    
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
    
    debugLog(`🤖 Found ${agentTools.length} agent tools:`, agentTools.slice(0, 5).map(t => t.title));
    
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
    debugLog('🔬 RESEARCH SEARCH DETECTED - Filtering for research tools only');
    
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
    
    debugLog(`🔬 Found ${researchTools.length} research tools:`, researchTools.slice(0, 5).map(t => t.title));
    
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
    debugLog('🤖 GPT SEARCH DETECTED - Prioritizing all GPTs and AI assistants');
    
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
    
    debugLog(`🤖 Found ${gptTools.length} GPT/AI tools:`, gptTools.slice(0, 5).map(t => t.title));
    
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
    debugLog('🕉️ SPIRITUALITY SEARCH DETECTED - Filtering for spiritual/religious tools');

    // Use the centralized detector so we catch: religion, God, light, deities, scripture, philosophy, etc.
    const spiritualTools = tools.filter(isSpiritualityTool);

    debugLog(`🕉️ Found ${spiritualTools.length} spiritual tools`);

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
        'sophia aeterna', 'oraculum', 'god is light', 'god is light — roman catholic', 'resurrection',
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
    debugLog('🏫 SCHOOL SEARCH DETECTED - Filtering for school/education tools');
    
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
    
    debugLog(`🏫 Found ${schoolTools.length} school tools:`, schoolTools.slice(0, 5).map(t => t.title));
    
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

  // BUSINESS TOOL PRIORITY - COMPREHENSIVE detection for 50+ tools
  const BUSINESS_TRIGGERS = [
    'business', 'startup', 'entrepreneur', 'company', 'enterprise', 'corporate',
    'finance', 'financial', 'investment', 'investor', 'trading', 'trader', 'stock',
    'market', 'marketing', 'sales', 'revenue', 'profit', 'budget', 'accounting',
    'tax', 'taxes', 'insurance', 'banking', 'crypto', 'cryptocurrency', 'blockchain',
    'management', 'project', 'productivity', 'workflow', 'automation', 'crm',
    'hr', 'hiring', 'resume', 'job', 'career', 'interview', 'salary', 'payroll',
    'invoice', 'contract', 'proposal', 'pitch', 'presentation', 'meeting', 'schedule',
    'analytics', 'metrics', 'kpi', 'dashboard', 'report', 'data', 'strategy',
    'consulting', 'advisor', 'coach', 'mentor', 'networking', 'leads', 'conversion',
    'saas', 'microsaas', 'product', 'service', 'customer', 'client', 'vendor',
    'supply chain', 'logistics', 'operations', 'manufacturing', 'real estate',
    'property', 'landlord', 'rent', 'mortgage', 'credit', 'loan', 'debt'
  ];
  
  if (BUSINESS_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger))) {
    debugLog('💼 BUSINESS SEARCH DETECTED - Filtering for business tools');
    
    const businessTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      return BUSINESS_TRIGGERS.some(trigger => allText.includes(trigger)) ||
             lowerCategory.includes('business') || lowerCategory.includes('finance') ||
             lowerCategory.includes('productivity') || lowerCategory.includes('marketing');
    });
    
    debugLog(`💼 Found ${businessTools.length} business tools`);
    
    const sortedBusinessTools = businessTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      // Priority for custom GPTs
      if (titleA.includes('business plan generator')) scoreA += 15000;
      if (titleB.includes('business plan generator')) scoreB += 15000;
      if (titleA.includes('startup validator')) scoreA += 14000;
      if (titleB.includes('startup validator')) scoreB += 14000;
      if (titleA.includes('trader gpt')) scoreA += 13000;
      if (titleB.includes('trader gpt')) scoreB += 13000;
      if (titleA.includes('taxes gpt')) scoreA += 12000;
      if (titleB.includes('taxes gpt')) scoreB += 12000;
      if (titleA.includes('microsaas')) scoreA += 11000;
      if (titleB.includes('microsaas')) scoreB += 11000;
      if (titleA.includes('resume') || titleA.includes('job finder')) scoreA += 10000;
      if (titleB.includes('resume') || titleB.includes('job finder')) scoreB += 10000;
      
      // Spelling match boost
      if (titleA.includes(normalizedSearchTerm)) scoreA += 20000;
      if (titleB.includes(normalizedSearchTerm)) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonBusinessTools = tools.filter(tool => !businessTools.includes(tool));
    return [...sortedBusinessTools, ...nonBusinessTools];
  }

  // WRITING TOOL PRIORITY - COMPREHENSIVE detection for 50+ tools
  const WRITING_TRIGGERS = [
    'writing', 'writer', 'write', 'content', 'copywriting', 'blog', 'article',
    'book', 'novel', 'story', 'script', 'screenplay', 'playwright', 'play',
    'essay', 'poem', 'poetry', 'manuscript', 'author', 'journalist', 'editor',
    'text', 'copy', 'narrative', 'storytelling', 'creative writing', 'fiction',
    'non-fiction', 'memoir', 'biography', 'documentation', 'report', 'proposal',
    'letter', 'email', 'newsletter', 'press release', 'speech', 'presentation',
    'grant', 'testimony', 'legislation', 'contract', 'legal document', 'rewrite',
    'paraphrase', 'summarize', 'translate', 'proofread', 'grammar', 'seo'
  ];
  
  if (WRITING_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger))) {
    debugLog('✍️ WRITING SEARCH DETECTED - Filtering for writing tools');
    
    const writingTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      return WRITING_TRIGGERS.some(trigger => allText.includes(trigger)) ||
             lowerCategory.includes('writing') || lowerCategory.includes('content') ||
             lowerCategory.includes('creative');
    });
    
    debugLog(`✍️ Found ${writingTools.length} writing tools`);
    
    const sortedWritingTools = writingTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      // Priority for custom GPTs
      if (titleA.includes('book writer gpt')) scoreA += 15000;
      if (titleB.includes('book writer gpt')) scoreB += 15000;
      if (titleA.includes('movie script writer')) scoreA += 14000;
      if (titleB.includes('movie script writer')) scoreB += 14000;
      if (titleA.includes('playwriter gpt')) scoreA += 13000;
      if (titleB.includes('playwriter gpt')) scoreB += 13000;
      if (titleA.includes('article') || titleA.includes('blog')) scoreA += 12000;
      if (titleB.includes('article') || titleB.includes('blog')) scoreB += 12000;
      if (titleA.includes('grant writer')) scoreA += 11000;
      if (titleB.includes('grant writer')) scoreB += 11000;
      if (titleA.includes('podcast')) scoreA += 10000;
      if (titleB.includes('podcast')) scoreB += 10000;
      
      // Spelling match boost
      if (titleA.includes(normalizedSearchTerm)) scoreA += 20000;
      if (titleB.includes(normalizedSearchTerm)) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonWritingTools = tools.filter(tool => !writingTools.includes(tool));
    return [...sortedWritingTools, ...nonWritingTools];
  }

  // IMAGE TOOL PRIORITY - COMPREHENSIVE detection for 50+ tools
  const IMAGE_TRIGGERS = [
    'image', 'photo', 'picture', 'art', 'graphic', 'visual', 'illustration',
    'drawing', 'painting', 'sketch', 'portrait', 'design', 'creative',
    'midjourney', 'dall-e', 'dalle', 'stable diffusion', 'leonardo', 'ideogram',
    'flux', 'firefly', 'canva', 'photoshop', 'illustrator', 'figma',
    'logo', 'icon', 'banner', 'poster', 'cover', 'thumbnail', 'avatar',
    'wallpaper', 'background', 'texture', 'pattern', 'colorize', 'enhance',
    'upscale', 'edit', 'remove background', 'face', 'style', 'restyle',
    'generate image', 'ai art', 'digital art', 'artwork', 'comic', 'manga',
    'anime', 'cartoon', 'realistic', '3d', 'render', 'mockup', 'tattoo'
  ];
  
  if (IMAGE_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger))) {
    debugLog('🖼️ IMAGE SEARCH DETECTED - Filtering for image tools');
    
    const imageTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      return IMAGE_TRIGGERS.some(trigger => allText.includes(trigger)) ||
             lowerCategory.includes('image') || lowerCategory.includes('art') ||
             lowerCategory.includes('design') || lowerCategory.includes('creative');
    });
    
    debugLog(`🖼️ Found ${imageTools.length} image tools`);
    
    const sortedImageTools = imageTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      // Major image tools first
      const majorImageTools = ['midjourney', 'dall-e', 'dalle', 'stable diffusion', 'leonardo', 'ideogram', 'flux', 'firefly'];
      if (majorImageTools.some(t => titleA.includes(t))) scoreA += 18000;
      if (majorImageTools.some(t => titleB.includes(t))) scoreB += 18000;
      
      // Custom GPTs
      if (titleA.includes('restyle me gpt')) scoreA += 15000;
      if (titleB.includes('restyle me gpt')) scoreB += 15000;
      if (titleA.includes('graphic') || titleA.includes('design')) scoreA += 14000;
      if (titleB.includes('graphic') || titleB.includes('design')) scoreB += 14000;
      if (titleA.includes('sketch artist')) scoreA += 13000;
      if (titleB.includes('sketch artist')) scoreB += 13000;
      if (titleA.includes('tattoo')) scoreA += 12000;
      if (titleB.includes('tattoo')) scoreB += 12000;
      
      // Spelling match boost
      if (titleA.includes(normalizedSearchTerm)) scoreA += 20000;
      if (titleB.includes(normalizedSearchTerm)) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonImageTools = tools.filter(tool => !imageTools.includes(tool));
    return [...sortedImageTools, ...nonImageTools];
  }

  // DESIGN TOOL PRIORITY - Enhanced detection
  if (normalizedSearchTerm === 'design' || normalizedSearchTerm.includes('design') ||
      normalizedSearchTerm.includes('graphic') || normalizedSearchTerm.includes('logo')) {
    debugLog('🎨 DESIGN SEARCH DETECTED - Filtering for design tools only');
    
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

  // MUSIC TOOL PRIORITY - COMPREHENSIVE detection for 50+ tools
  const MUSIC_TRIGGERS = [
    'music', 'sound', 'audio', 'voice', 'song', 'melody', 'beat', 'rhythm',
    'instrument', 'piano', 'guitar', 'drum', 'bass', 'violin', 'singing', 'vocal',
    'singer', 'composer', 'composition', 'producer', 'production', 'mix', 'mixing',
    'master', 'mastering', 'dj', 'remix', 'sample', 'loop', 'track', 'album',
    'playlist', 'podcast', 'radio', 'streaming', 'spotify', 'soundcloud',
    'tts', 'text to speech', 'speech', 'clone', 'cloning', 'ai voice', 'voiceover',
    'narrator', 'narration', 'audiobook', 'jingle', 'soundtrack', 'score',
    'suno', 'udio', 'elevenlabs', 'murf', 'lovo', 'play.ht', 'speechify',
    'synthesizer', 'synth', 'electronic', 'edm', 'hip hop', 'rock', 'jazz', 'classical',
    'lyric', 'lyrics', 'chord', 'note', 'scale', 'tempo', 'bpm', 'key', 'tune'
  ];
  
  if (MUSIC_TRIGGERS.some(trigger => normalizedSearchTerm.includes(trigger))) {
    console.log('🎵 MUSIC SEARCH DETECTED - Filtering for music tools');
    
    const musicTools = tools.filter(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || '';
      const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
      const allText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      
      return MUSIC_TRIGGERS.some(trigger => allText.includes(trigger)) ||
             lowerCategory.includes('music') || lowerCategory.includes('audio') ||
             lowerCategory.includes('voice');
    });
    
    console.log(`🎵 Found ${musicTools.length} music tools`);
    
    const sortedMusicTools = musicTools.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      
      // Major music tools first
      const majorMusicTools = ['suno', 'udio', 'elevenlabs', 'murf', 'lovo', 'speechify'];
      if (majorMusicTools.some(t => titleA.includes(t))) scoreA += 18000;
      if (majorMusicTools.some(t => titleB.includes(t))) scoreB += 18000;
      
      // Custom GPTs
      if (titleA.includes('music video maker')) scoreA += 15000;
      if (titleB.includes('music video maker')) scoreB += 15000;
      if (titleA.includes('music melodies')) scoreA += 14000;
      if (titleB.includes('music melodies')) scoreB += 14000;
      if (titleA.includes('mixologist')) scoreA += 12000;
      if (titleB.includes('mixologist')) scoreB += 12000;
      
      // Spelling match boost
      if (titleA.includes(normalizedSearchTerm)) scoreA += 20000;
      if (titleB.includes(normalizedSearchTerm)) scoreB += 20000;
      
      return scoreB - scoreA;
    });
    
    const nonMusicTools = tools.filter(tool => !musicTools.includes(tool));
    return [...sortedMusicTools, ...nonMusicTools];
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
  debugLog(`🔍 Before deduplication: ${prioritizedResults.length} results`);
  const deduplicatedResults = deduplicateSearchResults(prioritizedResults);
  debugLog(`🔍 After deduplication: ${deduplicatedResults.length} results`);
  
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
  
  // PRE-COMPUTE SEARCH INTENTS (computed once, used for all tools - efficient)
  const searchIntent = {
    medical: finalNormalizedTerm.includes("doctor") || finalNormalizedTerm.includes("medical") || 
             finalNormalizedTerm.includes("health") || finalNormalizedTerm.includes("nurse") ||
             finalNormalizedTerm.includes("diagnosis") || finalNormalizedTerm.includes("symptom") ||
             finalNormalizedTerm.includes("pharmacy") || finalNormalizedTerm.includes("wellness"),
    legal: finalNormalizedTerm.includes("lawyer") || finalNormalizedTerm.includes("attorney") || 
           finalNormalizedTerm.includes("legal") || finalNormalizedTerm.includes("law") ||
           finalNormalizedTerm.includes("court") || finalNormalizedTerm.includes("contract"),
    business: finalNormalizedTerm.includes("business") || finalNormalizedTerm.includes("entrepreneur") || 
              finalNormalizedTerm.includes("startup") || finalNormalizedTerm.includes("marketing") ||
              finalNormalizedTerm.includes("sales") || finalNormalizedTerm.includes("company"),
    creative: finalNormalizedTerm.includes("art") || finalNormalizedTerm.includes("design") || 
              finalNormalizedTerm.includes("creative") || finalNormalizedTerm.includes("draw") ||
              finalNormalizedTerm.includes("paint") || finalNormalizedTerm.includes("sketch"),
    tech: finalNormalizedTerm.includes("code") || finalNormalizedTerm.includes("programming") || 
          finalNormalizedTerm.includes("developer") || finalNormalizedTerm.includes("software") ||
          finalNormalizedTerm.includes("coding") || finalNormalizedTerm.includes("engineer"),
    science: finalNormalizedTerm.includes("science") || finalNormalizedTerm.includes("research") || 
             finalNormalizedTerm.includes("physics") || finalNormalizedTerm.includes("chemistry") ||
             finalNormalizedTerm.includes("biology") || finalNormalizedTerm.includes("lab"),
    finance: finalNormalizedTerm.includes("finance") || finalNormalizedTerm.includes("trading") || 
             finalNormalizedTerm.includes("investment") || finalNormalizedTerm.includes("stock") ||
             finalNormalizedTerm.includes("crypto") || finalNormalizedTerm.includes("money"),
    writing: finalNormalizedTerm.includes("write") || finalNormalizedTerm.includes("writing") || 
             finalNormalizedTerm.includes("blog") || finalNormalizedTerm.includes("article") ||
             finalNormalizedTerm.includes("content") || finalNormalizedTerm.includes("copy"),
    education: finalNormalizedTerm.includes("college") || finalNormalizedTerm.includes("university") || 
               finalNormalizedTerm.includes("school") || finalNormalizedTerm.includes("education") ||
               finalNormalizedTerm.includes("degree") || finalNormalizedTerm.includes("course") ||
               finalNormalizedTerm.includes("learn") || finalNormalizedTerm.includes("tutor") ||
               finalNormalizedTerm.includes("teach") || finalNormalizedTerm.includes("study")
  };
  
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
        debugLog(`🔗 Compound match: "${noSpaceTerm}" found in "${lowerTitle}"`);
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
        if (word.length < 2) continue; // Allow 2-letter words for better matching
        
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

      // INTENT-BASED SCORING - Pre-computed intent flags are checked here
      // Medical/Healthcare intent
      if (searchIntent.medical && matched) {
        if (lowerCategory.includes("health") || lowerCategory.includes("medical") || lowerCategory.includes("wellness")) {
          score += 4000;
        }
        if (["doctor gpt", "dr. gpt", "medical", "health", "diagnosis", "symptom", "pharmacy", "rx", "veterinarian", "pet care"].some(k => lowerTitle.includes(k))) {
          score += 5000;
        }
        if (["firearm", "trading", "crypto", "game", "entertainment"].some(k => lowerTitle.includes(k))) {
          score -= 4000;
        }
      }
      
      // Legal intent
      if (searchIntent.legal && matched) {
        if (lowerCategory.includes("legal") || lowerTitle.includes("law") || lowerTitle.includes("attorney") || lowerTitle.includes("lawyer")) {
          score += 5000;
        }
        if (["public defender", "contract", "legislation", "legal draft"].some(k => lowerTitle.includes(k))) {
          score += 4000;
        }
      }
      
      // Business/Entrepreneur intent
      if (searchIntent.business && matched) {
        if (lowerCategory.includes("business") || lowerCategory.includes("marketing") || lowerCategory.includes("productivity")) {
          score += 3000;
        }
        if (["business plan", "startup", "entrepreneur", "microsaas", "marketing", "sales", "resume", "job"].some(k => lowerTitle.includes(k))) {
          score += 5000;
        }
      }
      
      // Creative/Art intent
      if (searchIntent.creative && matched) {
        if (lowerCategory.includes("creative") || lowerCategory.includes("design") || lowerCategory.includes("art") || lowerCategory.includes("music")) {
          score += 3000;
        }
        if (["graphic design", "tattoo", "sketch", "coloring", "art", "music", "creative"].some(k => lowerTitle.includes(k))) {
          score += 4000;
        }
      }
      
      // Tech/Programming intent
      if (searchIntent.tech && matched) {
        if (lowerCategory.includes("coding") || lowerCategory.includes("development") || lowerCategory.includes("tech")) {
          score += 4000;
        }
        if (["code", "developer", "programming", "github", "copilot", "cursor", "replit", "coding"].some(k => lowerTitle.includes(k))) {
          score += 5000;
        }
      }
      
      // Science/Research intent
      if (searchIntent.science && matched) {
        if (lowerCategory.includes("science") || lowerCategory.includes("research") || lowerCategory.includes("academic")) {
          score += 4000;
        }
        if (["research", "science", "data analysis", "genome", "physics", "chemistry", "einstein", "tesla", "galileo"].some(k => lowerTitle.includes(k))) {
          score += 5000;
        }
      }
      
      // Finance/Trading intent  
      if (searchIntent.finance && matched) {
        if (lowerCategory.includes("finance") || lowerCategory.includes("trading") || lowerCategory.includes("crypto")) {
          score += 4000;
        }
        if (["trader", "trading", "finance", "investment", "crypto", "stock", "credit score", "taxes"].some(k => lowerTitle.includes(k))) {
          score += 5000;
        }
      }
      
      // Writing/Content intent
      if (searchIntent.writing && matched) {
        if (lowerCategory.includes("writing") || lowerCategory.includes("content")) {
          score += 4000;
        }
        if (["book writer", "script", "blog", "article", "rewriter", "copywriting", "content"].some(k => lowerTitle.includes(k))) {
          score += 5000;
        }
      }
      
      // Education intent (expanded)
      if (searchIntent.education && matched) {
        if (lowerCategory.includes("education") || lowerCategory.includes("learning") || lowerCategory.includes("academic")) {
          score += 4000;
        }
        if (["college degree", "learn any course", "learn any skill", "homeschool", "quiz maker", "course", "tutor", "training manual"].some(k => lowerTitle.includes(k))) {
          score += 6000;
        }
        // Demote clearly non-educational
        if (["firearm", "gun", "marriage", "mender", "video analysis", "trading", "cannabis", "tattoo", "mixologist", "bartender"].some(k => lowerTitle.includes(k) || lowerDescription.includes(k))) {
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
      "GOD IS LIGHT — Roman Catholic Edition GPT",
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