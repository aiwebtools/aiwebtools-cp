import { Tool } from "@/types/tools";

// Advanced partial matching for super intelligent search predictions
export const getAdvancedPartialMatches = (searchTerm: string, tools: Tool[]): Tool[] => {
  const lowerTerm = searchTerm.toLowerCase().trim();
  
  // Enhanced prefix prediction mapping
  const prefixPredictions: Record<string, string[]> = {
    // COLLEGE/EDUCATION family - Enhanced for "college" partial typing
    'c': ['college', 'course', 'content', 'chat', 'cannabis', 'creative'],
    'co': ['college', 'course', 'content', 'contract', 'coloring', 'comic', 'coding'],
    'col': ['college', 'coloring', 'collectible'],
    'coll': ['college', 'collectible'],
    'colle': ['college'],
    'colleg': ['college'],
    'college': ['college degree'],
    
    // LEARNING family - Enhanced
    'l': ['learn', 'legal', 'legislation', 'logo'],
    'le': ['learn', 'legal', 'legislation', 'legislator', 'learning'],
    'lea': ['learn', 'learning'],
    'lear': ['learn', 'learning'],
    'learn': ['learning', 'learner'],
    'learni': ['learning'],
    'learning': ['learner'],
    
    // VIDEO family - Enhanced  
    'v': ['video', 'voice', 'virtual', 'vet'],
    'vi': ['video', 'virtual', 'visual', 'vision'],
    'vid': ['video'],
    'vide': ['video'],
    'video': ['videos'],
    
    // AUDIO family - Enhanced
    'a': ['audio', 'ai', 'art', 'agent', 'assistant'],
    'au': ['audio', 'automobile'],
    'aud': ['audio'],
    'audi': ['audio'],
    'audio': ['audios'],
    
    // CHAT family - Enhanced
    'ch': ['chat', 'chef', 'chemistry'],
    'cha': ['chat', 'character'],
    'chat': ['chatbot', 'chatgpt'],
    
    // AGENT family - Enhanced
    'ag': ['agent', 'agriculture'],
    'age': ['agent'],
    'agen': ['agent'],
    'agent': ['agents'],
    
    // RESEARCH family - Enhanced
    'r': ['research', 'resume', 'real', 'religion'],
    're': ['resume', 'research', 'real', 'religion', 'restaurant'],
    'res': ['resume', 'research', 'restaurant', 'results'],
    'rese': ['research'],
    'resea': ['research'],
    'resear': ['research'],
    'research': ['researcher'],
    
    // GPT family - Enhanced
    'g': ['gpt', 'game', 'graphic', 'god'],
    'gp': ['gpt'],
    'gpt': ['gpts'],
    
    // SPIRITUAL family - Enhanced  
    's': ['spiritual', 'soul', 'school', 'science'],
    'sp': ['spiritual', 'speech', 'special', 'space'],
    'spi': ['spiritual', 'spine', 'spirit'],
    'spir': ['spiritual', 'spirit'],
    'spiri': ['spiritual', 'spirit'],
    'spirit': ['spiritual'],
    'spiritu': ['spiritual'],
    'spiritua': ['spiritual'],
    'spiritual': ['spirituality'],
    
    // SOUL family - Enhanced
    'so': ['soul', 'social', 'solar'],
    'sou': ['soul', 'sound'],
    'soul': ['souls'],
    
    // SCHOOL family - Enhanced
    'sc': ['school', 'science', 'script'],
    'sch': ['school', 'schedule'],
    'scho': ['school'],
    'schoo': ['school'],
    'school': ['schools'],
    
    // RELIGION/ANCIENT/WISDOM family - Enhanced
    'rel': ['religion', 'religious'],
    'reli': ['religion', 'religious'],
    'relig': ['religion', 'religious'],
    'religio': ['religion', 'religious'],
    'religion': ['religious'],
    'an': ['ancient', 'analysis', 'animal'],
    'anc': ['ancient'],
    'anci': ['ancient'],
    'ancie': ['ancient'],
    'ancien': ['ancient'],
    'ancient': ['ancients'],
    'w': ['wisdom', 'writer', 'wellness'],
    'wi': ['wisdom', 'writer'],
    'wis': ['wisdom'],
    'wisd': ['wisdom'],
    'wisdo': ['wisdom'],
    'wisdom': ['wise'],
    
    // SCR family - ENHANCED for transcription, scribing, scripts
    'scr': ['scribe', 'script', 'screenplay', 'transcribe', 'transcription', 'scriptwriter'],
    'scri': ['scribe', 'script', 'scriptwriter', 'transcribe', 'manuscript'],
    'scrip': ['script', 'scriptwriter', 'prescription', 'transcript'],
    'script': ['scriptwriter', 'javascript', 'prescription'],
    
    // Transcription family
    'tr': ['transcribe', 'transcription', 'transcript', 'travel', 'trading', 'trader', 'training'],
    'tra': ['transcribe', 'transcription', 'travel', 'trading', 'trainer', 'training'],
    'tran': ['transcribe', 'transcription', 'translate', 'translation', 'training'],
    'trans': ['transcribe', 'transcription', 'translate', 'translation', 'transformer'],
    'transcr': ['transcribe', 'transcription', 'transcript'],
    
    // Legal/Document family
    'leg': ['legal', 'legislation', 'legislator', 'legacy'],
    'lega': ['legal', 'legislation', 'legacy'],
    'legal': ['legislation', 'legislator'],
    'dr': ['draft', 'draftsman', 'doctor', 'dream', 'drug'],
    'dra': ['draft', 'draftsman', 'drama', 'drawing'],
    'draf': ['draft', 'draftsman'],
    'draft': ['draftsman', 'draftsmith'],
    
    // Content creation family
    'con': ['content', 'contract', 'conversation', 'conversion', 'consultant'],
    'cont': ['content', 'contract', 'conversation', 'controller'],
    'conte': ['content', 'contest', 'context'],
    'conten': ['content'],
    
    // Writing family
    'wr': ['writer', 'writing', 'write'],
    'wri': ['writer', 'writing', 'write'],
    'writ': ['writer', 'writing', 'write'],
    'write': ['writer', 'writing'],
    'writer': ['writing'],
    
    // Media family
    'po': ['podcast', 'policy', 'political', 'poll', 'portfolio'],
    'pod': ['podcast', 'podiatrist'],
    'podc': ['podcast'],
    'podca': ['podcast'],
    'podcast': ['podcaster', 'podcasting'],
    
    'bl': ['blog', 'blockchain', 'blueprint', 'blender'],
    'blo': ['blog', 'blockchain', 'blood'],
    'blog': ['blogger', 'blogging'],
    
    'ar': ['article', 'art', 'artificial', 'architecture', 'archeology'],
    'art': ['article', 'artificial', 'artist', 'artwork'],
    'arti': ['article', 'artificial', 'artist'],
    'artic': ['article'],
    'article': ['articles'],
    
    // Design family
    'gr': ['graphic', 'grant', 'grammar', 'growth'],
    'gra': ['graphic', 'grant', 'grammar', 'graph'],
    'grap': ['graphic', 'graph'],
    'graph': ['graphic', 'graphics'],
    'graphic': ['graphics'],
    
    // Spiritual family (additional)
    'go': ['god', 'gods', 'government', 'goal', 'gospel'],
    'god': ['gods', 'goddess'],
    'gods': ['godlike'],
    
    // Communication family
    'ta': ['talk', 'tax', 'tattoo', 'task', 'table'],
    'tal': ['talk', 'talent', 'tale'],
    'talk': ['talking', 'talker'],
    
    // Health family
    'ho': ['home', 'health', 'hospital', 'house', 'hotel'],
    'hom': ['home', 'homeschool'],
    'home': ['homeschool', 'homework'],
    
    'ph': ['pharmaceutical', 'pharmacy', 'phone', 'photo', 'philosophy'],
    'pha': ['pharmaceutical', 'pharmacy', 'phantom'],
    'phar': ['pharmaceutical', 'pharmacy'],
    'pharm': ['pharmaceutical', 'pharmacy'],
    'pharma': ['pharmaceutical'],
    
    // Career family
    'resu': ['resume', 'results'],
    'resume': ['resumes'],
    
    'jo': ['job', 'journal', 'journey', 'joke'],
    'job': ['jobs'],
    
    // Business family
    'bu': ['business', 'budget', 'builder'],
    'bus': ['business', 'budget'],
    'busi': ['business'],
    'busine': ['business'],
    'business': ['businesses'],
    
    // Cannabis family
    'ca': ['cannabis', 'career', 'card', 'calculator', 'calendar'],
    'can': ['cannabis', 'cancer', 'candidate'],
    'cann': ['cannabis'],
    'canna': ['cannabis'],
    'cannab': ['cannabis'],
    'cannabis': ['cannabinoid'],
    
    // Insurance family
    'in': ['insurance', 'investment', 'interview', 'invoice', 'intelligence'],
    'ins': ['insurance', 'investment', 'instruction'],
    'insu': ['insurance'],
    'insur': ['insurance'],
    'insura': ['insurance'],
    'insuran': ['insurance'],
    'insurance': ['insurer'],
    
    // Game family
    'ga': ['game', 'gambling', 'garage'],
    'gam': ['game', 'gambling'],
    'game': ['games', 'gamer', 'gaming']
  };
  
  // Get predictions for the current search term
  const predictions = prefixPredictions[lowerTerm] || [];
  
  // If no specific predictions, generate them based on common patterns
  if (predictions.length === 0 && lowerTerm.length >= 2) {
    // Generate predictions by looking for tools that start with the search term
    const directMatches = tools.filter(tool => 
      tool.title.toLowerCase().includes(lowerTerm) ||
      tool.description.toLowerCase().includes(lowerTerm)
    );
    
    // Extract common words that start with the search term
    const extractedPredictions = new Set<string>();
    directMatches.forEach(tool => {
      const text = `${tool.title} ${tool.description}`.toLowerCase();
      const words = text.match(new RegExp(`\\b${lowerTerm}\\w+`, 'g')) || [];
      words.forEach(word => extractedPredictions.add(word));
    });
    
    predictions.push(...Array.from(extractedPredictions).slice(0, 5));
  }
  
  const DEBUG_PARTIAL = false;
  if (DEBUG_PARTIAL) {
    console.log(`🎯 Advanced partial matching for "${searchTerm}": predictions =`, predictions);
  }

  // Filter tools based on predictions and original search
  return tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
    const searchableText = `${lowerTitle} ${lowerDescription} ${lowerTags}`;

    // Direct match
    if (searchableText.includes(lowerTerm)) {
      return true;
    }

    // Prediction-based matching
    for (const prediction of predictions) {
      if (searchableText.includes(prediction)) {
        if (DEBUG_PARTIAL) console.log(`🎯 Prediction "${prediction}" matched tool: ${tool.title}`);
        return true;
      }
    }

    return false;
  });
};

// Score tools based on prediction relevance
export const scoreAdvancedPartialMatch = (tool: Tool, searchTerm: string, predictions: string[]): number => {
  const lowerTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = tool.tags?.join(" ").toLowerCase() || "";
  
  let score = 0;
  
  // Base scoring for direct matches
  if (lowerTitle.startsWith(lowerTerm)) score += 10000;
  else if (lowerTitle.includes(lowerTerm)) score += 5000;
  else if (lowerDescription.includes(lowerTerm)) score += 2000;
  else if (lowerTags.includes(lowerTerm)) score += 1000;
  
  // Prediction-based scoring
  const DEBUG_PARTIAL_SCORE = false;
  for (const prediction of predictions) {
    if (lowerTitle.includes(prediction)) {
      score += 3000;
      if (DEBUG_PARTIAL_SCORE) console.log(`🎯 Prediction boost: "${prediction}" in title of ${tool.title} (+3000)`);
    } else if (lowerDescription.includes(prediction)) {
      score += 1500;
      if (DEBUG_PARTIAL_SCORE) console.log(`🎯 Prediction boost: "${prediction}" in description of ${tool.title} (+1500)`);
    } else if (lowerTags.includes(prediction)) {
      score += 800;
    }
  }
  
  return score;
};