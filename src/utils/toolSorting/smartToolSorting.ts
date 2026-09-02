import { Tool } from "@/types/tools";
import { isAIWebToolsGPT } from "@/utils/aiWebToolsPrioritization";

// Common default phone assistants that everyone already has - deprioritize GLOBALLY
const GLOBAL_DEPRIORITIZED_TOOLS = [
  'siri', 'google assistant', 'alexa', 'cortana', 'bixby',
  'google now', 'samsung bixby', 'apple siri', 'amazon alexa',
  'microsoft cortana', 'hey google', 'ok google'
];

// ============================================================================
// PER-CATEGORY PRIORITY & DEPRIORITIZATION CONFIGURATION
// Each category can have:
//   - prioritized: tools that should appear FIRST (boost to top)
//   - deprioritized: tools that should appear LAST (push to bottom)
// ============================================================================

interface CategorySortConfig {
  prioritized: string[];
  deprioritized: string[];
}

const CATEGORY_SORT_CONFIG: Record<string, CategorySortConfig> = {
  // EDUCATION & LEARNING - Educational platforms and learning GPTs first, dev tools last
  "education": {
    prioritized: [
      'college degree gpt', 'learn any course', 'learn any skill', 'home school', 
      'homeschool', 'quiz maker', 'course maker', 'course creator', 'duolingo',
      'khan academy', 'coursera', 'udemy', 'edx', 'skillshare', 'masterclass',
      'brilliant', 'codecademy', 'datacamp', 'pluralsight', 'linkedin learning',
      'notion', 'anki', 'quizlet', 'study', 'tutor', 'teacher', 'education',
      'learning', 'school', 'university', 'academic', 'training manual'
    ],
    deprioritized: [
      'lm studio', 'ollama', 'gpt4all', 'text generation webui', 'oobabooga',
      'localai', 'jan', 'anything llm', 'open webui'
    ]
  },

  // HEALTH & WELLNESS - Medical/wellness GPTs and health platforms first
  "health": {
    prioritized: [
      'doctor gpt', 'personalized dr', 'medicus', 'veterinarian gpt', 'pet care', 'mental wellness',
      'pharmaceutical', 'pharma research', 'food quality', 'cannabis gpt', 'genome gpt',
      'fitness', 'nutrition', 'meditation', 'therapy', 'counseling', 'healthcare',
      'medical', 'wellness', 'mindfulness', 'calm', 'headspace', 'betterhelp',
      'teladoc', 'zocdoc', 'healthline', 'webmd', 'mayo clinic'
    ],
    deprioritized: [
      'lm studio', 'ollama', 'code', 'developer', 'github', 'programming'
    ]
  },

  // AI AGENTS - Agent frameworks and automation tools first
  "agent": {
    prioritized: [
      'autogpt', 'auto-gpt', 'agentgpt', 'babyagi', 'superagi', 'crewai', 'langchain',
      'zapier', 'make.com', 'n8n', 'bardeen', 'axiom', 'browse ai', 'apify',
      'openai agents', 'anthropic claude', 'computer use', 'operator', 'manus',
      'devin', 'cognition', 'cursor', 'windsurf', 'replit agent', 'lovable',
      'bolt', 'v0', 'gptengineer', 'github copilot', 'tabnine', 'codeium',
      'automation', 'workflow', 'agent', 'assistant', 'chatbot'
    ],
    deprioritized: [
      'image generator', 'photo editor', 'video maker', 'music generator'
    ]
  },

  // IMAGE & DESIGN - Image generators and design tools first
  "image": {
    prioritized: [
      'midjourney', 'dall-e', 'dalle', 'stable diffusion', 'leonardo ai', 'ideogram',
      'flux', 'firefly', 'playground ai', 'canva', 'figma', 'adobe', 'photoshop',
      'illustrator', 'sketch', 'invision', 'graphic design', 'logo', 'image',
      'photo', 'design', 'art', 'illustration', 'recraft', 'krea', 'exactly.ai',
      'flair.ai', 'seelab', 'restyle me', 'tattoo gpt', 'coloring book'
    ],
    deprioritized: [
      'code', 'developer', 'programming', 'video', 'audio', 'music'
    ]
  },

  // VIDEO & MULTIMEDIA - Video generators and editors first
  "video": {
    prioritized: [
      'sora', 'runway', 'pika', 'luma', 'kling', 'hailuo', 'minimax', 'invideo',
      'synthesia', 'heygen', 'd-id', 'colossyan', 'kapwing', 'descript', 'clipchamp',
      'premiere', 'davinci resolve', 'final cut', 'movie maker studio', 'movie script',
      'movie scene maker', 'music video maker', 'video', 'film', 'cinema', 'veo'
    ],
    deprioritized: [
      'code', 'developer', 'text', 'document', 'spreadsheet'
    ]
  },

  // AUDIO & VOICE - Audio/music tools first
  "audio": {
    prioritized: [
      'elevenlabs', 'murf', 'play.ht', 'resemble', 'descript', 'adobe podcast',
      'suno', 'udio', 'soundraw', 'aiva', 'amper', 'boomy', 'loudly', 'music',
      'voice', 'audio', 'sound', 'podcast', 'speech', 'transcription', 'whisper',
      'music melodies', 'mixologist'
    ],
    deprioritized: [
      'image', 'video', 'code', 'document'
    ]
  },

  // CONTENT CREATION & WRITING - Writing tools first
  "content": {
    prioritized: [
      'book writer gpt', 'movie script writer', 'playwriter', 'blog', 'article',
      'jasper', 'copy.ai', 'writesonic', 'rytr', 'grammarly', 'quillbot', 'notion',
      'writer', 'content', 'copywriting', 'seo', 'headline', 'story', 'novel',
      'podcast script', 'grant writer', 'legislation writer', 'rewriter'
    ],
    deprioritized: [
      'image generator', 'video maker', 'code', 'developer'
    ]
  },

  // BUSINESS & PRODUCTIVITY - Business and productivity tools first
  "business": {
    prioritized: [
      'business plan', 'startup validator', 'microsaas', 'trader gpt', 'taxes gpt',
      'insurance claims', 'property data', 'resume', 'job finder', 'contract review',
      'notion', 'slack', 'asana', 'monday', 'trello', 'clickup', 'airtable',
      'salesforce', 'hubspot', 'zoho', 'freshworks', 'productivity', 'crm',
      'project management', 'spreadsheet', 'analytics', 'dashboard'
    ],
    deprioritized: [
      'game', 'entertainment', 'fun', 'music', 'art'
    ]
  },

  // DATA & ANALYTICS - Data tools first
  "data": {
    prioritized: [
      'data analysis', 'data research', 'illuminous', 'probability gpt', 'genome gpt',
      'tableau', 'power bi', 'looker', 'metabase', 'superset', 'grafana',
      'snowflake', 'databricks', 'bigquery', 'redshift', 'analytics', 'insights',
      'visualization', 'dashboard', 'report', 'statistics', 'predictive'
    ],
    deprioritized: [
      'image', 'video', 'music', 'game', 'entertainment'
    ]
  },

  // CODING & DEVELOPMENT - Dev tools first
  "coding": {
    prioritized: [
      'github copilot', 'cursor', 'windsurf', 'codeium', 'tabnine', 'replit',
      'lovable', 'bolt', 'v0', 'devin', 'codex', 'anthropic', 'claude', 'chatgpt',
      'lm studio', 'ollama', 'code', 'developer', 'programming', 'software',
      'javascript', 'python', 'typescript', 'react', 'api', 'debug', 'testing'
    ],
    deprioritized: [
      'meditation', 'wellness', 'cooking', 'recipe', 'travel', 'vacation'
    ]
  },

  // SPIRITUALITY & PHILOSOPHY - Spiritual GPTs first
  "spiritual": {
    prioritized: [
      'talk to the gods', 'mary magdalene', 'alan watts', 'sophia aeterna', 'oraculum',
      'resurrection gpt', 'manicheism', 'god is light', 'mani gpt', 'buddha', 'rumi',
      'talk to history', 'philosophy', 'meditation', 'mindfulness', 'wisdom',
      'enlightenment', 'consciousness', 'spiritual', 'sacred', 'divine', 'yemaya',
      'quan yin', 'chief crazy horse', 'st. francis', 'socrates', 'marcus aurelius'
    ],
    deprioritized: [
      'code', 'developer', 'business', 'sales', 'marketing', 'analytics'
    ]
  },

  // GAMING & ENTERTAINMENT - Game tools first
  "gaming": {
    prioritized: [
      'game design', 'unity', 'unreal', 'godot', 'roblox', 'trivia night',
      'fortune teller', 'celebrity chatline', 'imagination traveler', 'neo matrix',
      'game', 'gaming', 'play', 'fun', 'entertainment', 'esports', 'streaming',
      'twitch', 'discord', 'steam', 'epic games'
    ],
    deprioritized: [
      'medical', 'healthcare', 'legal', 'tax', 'insurance', 'compliance'
    ]
  },

  // CREATIVE & ENTERTAINMENT - Creative tools first
  "creative": {
    prioritized: [
      'midjourney', 'dall-e', 'stable diffusion', 'runway', 'pika', 'canva',
      'figma', 'adobe', 'creative', 'art', 'design', 'music', 'video', 'photo',
      'illustration', 'animation', 'graphic', 'visual', 'artistic', 'studio'
    ],
    deprioritized: [
      'spreadsheet', 'database', 'accounting', 'tax', 'legal', 'compliance'
    ]
  },

  // SECURITY & PRIVACY - Security tools first
  "security": {
    prioritized: [
      'hacking defender', 'cyber security', 'antivirus', 'vpn', 'password',
      '1password', 'lastpass', 'bitwarden', 'dashlane', 'nordvpn', 'expressvpn',
      'proton', 'security', 'privacy', 'encryption', 'firewall', 'protection',
      'authentication', 'identity', 'compliance', 'audit'
    ],
    deprioritized: [
      'game', 'entertainment', 'music', 'art', 'cooking', 'travel'
    ]
  },

  // RESEARCH & ACADEMIC - Research tools first
  "research": {
    prioritized: [
      'perplexity', 'elicit', 'consensus', 'semantic scholar', 'research rabbit',
      'scite', 'connected papers', 'data research', 'fact checker', 'indiana archaeologist',
      'nikola tesla gpt', 'albert einstein', 'alchemist scientist', 'genome gpt',
      'research', 'academic', 'paper', 'journal', 'citation', 'study', 'analysis'
    ],
    deprioritized: [
      'game', 'entertainment', 'cooking', 'recipe', 'travel', 'vacation'
    ]
  },

  // INDUSTRY SPECIFIC - Industry tools first
  "industry": {
    prioritized: [
      'agronomus', 'drill baby drill', 'solar land', 'firefighter gpt', 'survivalist',
      'fisherman gpt', 'home renovator', 'restaurant menu', 'antique appraisal',
      'material valuation', 'farm finder', 'industry', 'specialized', 'professional',
      'enterprise', 'manufacturing', 'logistics', 'supply chain'
    ],
    deprioritized: [
      'game', 'entertainment', 'social media', 'meme', 'fun'
    ]
  },

  // 3D & VISUALIZATION - 3D tools first
  "3d": {
    prioritized: [
      'blender', 'unity', 'unreal', 'cinema 4d', 'maya', 'zbrush', '3ds max',
      'sketchup', 'rhino', 'houdini', 'substance', '3d', 'visualization',
      'render', 'model', 'animation', 'cgi', 'vr', 'ar', 'metaverse'
    ],
    deprioritized: [
      'text', 'document', 'spreadsheet', 'accounting', 'tax'
    ]
  },

  // AI CHAT & ASSISTANTS - Major LLMs and chat tools first
  "chat": {
    prioritized: [
      'chatgpt', 'claude', 'gemini', 'grok', 'llama', 'mistral', 'perplexity',
      'copilot', 'pi', 'poe', 'character.ai', 'replika', 'chai', 'chat',
      'assistant', 'conversation', 'dialogue', 'ai chat', 'llm'
    ],
    deprioritized: [
      'image generator', 'video maker', 'spreadsheet', 'accounting'
    ]
  }
};

// Cache for deprioritization checks to avoid repeated string operations
const deprioritizedCache = new WeakMap<Tool, boolean>();

// Check if a tool is a common default assistant (global deprioritization)
export const isDeprioritizedTool = (tool: Tool): boolean => {
  if (deprioritizedCache.has(tool)) {
    return deprioritizedCache.get(tool)!;
  }
  const titleLower = tool.title.toLowerCase();
  const result = GLOBAL_DEPRIORITIZED_TOOLS.some(name => titleLower.includes(name));
  deprioritizedCache.set(tool, result);
  return result;
};

// Get config for a category by matching keywords
const getCategoryConfig = (categoryContext: string): CategorySortConfig | null => {
  const categoryLower = categoryContext.toLowerCase();
  
  // Find matching config by checking if category name contains any config key
  for (const [key, config] of Object.entries(CATEGORY_SORT_CONFIG)) {
    if (categoryLower.includes(key)) {
      return config;
    }
  }
  return null;
};

// Check if tool matches any keywords
const toolMatchesKeywords = (tool: Tool, keywords: string[]): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descLower = (tool.description || '').toLowerCase();
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  const combined = `${titleLower} ${descLower} ${tagsLower}`;
  
  return keywords.some(keyword => combined.includes(keyword.toLowerCase()));
};

// Sort A-Z by title
export const sortToolsAZ = (tools: Tool[]): Tool[] => {
  return [...tools].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort Z-A by title
export const sortToolsZA = (tools: Tool[]): Tool[] => {
  return [...tools].sort((a, b) => b.title.localeCompare(a.title));
};

// Cache for smart sorted results - keyed by category + tools hash
let smartSortCache: Map<string, Tool[]> = new Map();
const MAX_CACHE_SIZE = 20;

const getToolsHash = (tools: Tool[]): string => {
  // Fingerprint every item. Length + first/last collided for different filter
  // subsets and returned a stale list from another category/filter state.
  if (tools.length === 0) return 'empty';
  let hash = 2166136261;
  for (const tool of tools) {
    const value = `${tool.title}\u0000${tool.directUrl || ''}`;
    for (let i = 0; i < value.length; i++) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
  }
  return `${tools.length}-${hash >>> 0}`;
};

/**
 * Smart interleaved sorting with per-category prioritization:
 * 1. Prioritizes tools matching category-specific priority keywords (shown FIRST)
 * 2. Deprioritizes tools matching category-specific deprioritize keywords (shown LAST)
 * 3. Always deprioritizes common default assistants (Siri, Alexa, etc.)
 * 4. Interleaves AIWebTools GPTs after every 2 external tools
 * 5. Ensures AIWebTools GPTs shown are relevant to the category
 * 
 * Results are cached for instant subsequent lookups.
 */
export const applySmartInterleavedSorting = (
  tools: Tool[],
  categoryContext?: string
): Tool[] => {
  if (!tools || tools.length === 0) return tools;
  
  // Check cache first
  const cacheKey = `${categoryContext || 'none'}-${getToolsHash(tools)}`;
  const cached = smartSortCache.get(cacheKey);
  if (cached) return cached;

  const config = categoryContext ? getCategoryConfig(categoryContext) : null;
  
  // Separate tools into groups
  const prioritized: Tool[] = [];
  const deprioritized: Tool[] = [];
  const aiWebToolsGPTs: Tool[] = [];
  const externalTools: Tool[] = [];
  
  tools.forEach(tool => {
    // Global deprioritized (phone assistants) - always at end
    if (isDeprioritizedTool(tool)) {
      deprioritized.push(tool);
      return;
    }

    // Category-specific deprioritization
    if (config && toolMatchesKeywords(tool, config.deprioritized)) {
      deprioritized.push(tool);
      return;
    }

    // Category-specific prioritization
    if (config && toolMatchesKeywords(tool, config.prioritized)) {
      if (isAIWebToolsGPT(tool)) {
        // Prioritized GPTs go into a special bucket
        prioritized.push(tool);
      } else {
        prioritized.push(tool);
      }
      return;
    }

    // Normal sorting
    if (isAIWebToolsGPT(tool)) {
      aiWebToolsGPTs.push(tool);
    } else {
      externalTools.push(tool);
    }
  });
  
  // If we have a category context, sort AIWebTools GPTs by relevance to category
  const sortedAIWebToolsGPTs = categoryContext 
    ? sortByRelevanceToCategory(aiWebToolsGPTs, categoryContext)
    : aiWebToolsGPTs;
  
  // Sort prioritized tools by relevance score for even better ordering
  const sortedPrioritized = categoryContext
    ? sortByRelevanceToCategory(prioritized, categoryContext)
    : prioritized;
  
  // Build final result:
  // 1. Prioritized tools first (sorted by relevance)
  // 2. Interleaved: 2 external tools, then 1 AIWebTools GPT
  // 3. Deprioritized tools at the end
  
  const interleaved: Tool[] = [];
  let externalIndex = 0;
  let gptIndex = 0;
  
  while (externalIndex < externalTools.length || gptIndex < sortedAIWebToolsGPTs.length) {
    // Add up to 2 external tools
    for (let i = 0; i < 2 && externalIndex < externalTools.length; i++) {
      interleaved.push(externalTools[externalIndex++]);
    }
    
    // Add 1 AIWebTools GPT if available
    if (gptIndex < sortedAIWebToolsGPTs.length) {
      interleaved.push(sortedAIWebToolsGPTs[gptIndex++]);
    }
  }
  
  // Add remaining GPTs if any
  while (gptIndex < sortedAIWebToolsGPTs.length) {
    interleaved.push(sortedAIWebToolsGPTs[gptIndex++]);
  }
  
  // Final order: prioritized first, then interleaved, then deprioritized
  const result = [...sortedPrioritized, ...interleaved, ...deprioritized];
  
  // Cache result (with size limit)
  if (smartSortCache.size >= MAX_CACHE_SIZE) {
    // Remove oldest entry
    const firstKey = smartSortCache.keys().next().value;
    if (firstKey) smartSortCache.delete(firstKey);
  }
  smartSortCache.set(cacheKey, result);
  
  return result;
};

// Sort tools by relevance to a category
const sortByRelevanceToCategory = (tools: Tool[], categoryContext: string): Tool[] => {
  const categoryLower = categoryContext.toLowerCase();
  const categoryWords = categoryLower.split(/[\s&]+/).filter(w => w.length > 2);
  
  return [...tools].sort((a, b) => {
    const scoreA = getRelevanceScore(a, categoryWords);
    const scoreB = getRelevanceScore(b, categoryWords);
    return scoreB - scoreA; // Higher score first
  });
};

// Calculate relevance score based on title, description, tags matching category words
const getRelevanceScore = (tool: Tool, categoryWords: string[]): number => {
  let score = 0;
  const titleLower = tool.title.toLowerCase();
  const descLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(t => t.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  categoryWords.forEach(word => {
    if (titleLower.includes(word)) score += 10;
    if (categoryLower.includes(word)) score += 8;
    if (tagsLower.includes(word)) score += 5;
    if (descLower.includes(word)) score += 2;
  });
  
  return score;
};

// Apply alphabetical sorting with deprioritization
export const applyAlphabeticalWithDeprioritization = (
  tools: Tool[],
  direction: 'asc' | 'desc'
): Tool[] => {
  const deprioritized: Tool[] = [];
  const normalTools: Tool[] = [];
  
  tools.forEach(tool => {
    if (isDeprioritizedTool(tool)) {
      deprioritized.push(tool);
    } else {
      normalTools.push(tool);
    }
  });
  
  // Sort both groups alphabetically
  const sortFn = direction === 'asc' 
    ? (a: Tool, b: Tool) => a.title.localeCompare(b.title)
    : (a: Tool, b: Tool) => b.title.localeCompare(a.title);
  
  normalTools.sort(sortFn);
  deprioritized.sort(sortFn);
  
  // Normal tools first, deprioritized at end
  return [...normalTools, ...deprioritized];
};

export type SortMode = 'smart' | 'az' | 'za' | 'shuffle';
