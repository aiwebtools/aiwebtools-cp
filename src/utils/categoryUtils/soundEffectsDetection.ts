import { Tool } from "@/types/tools";

// Sound Effects & SFX detection keywords
const soundEffectsKeywords = [
  'sound effect', 'sound effects', 'sfx', 'fx', 'audio effect', 'audio effects',
  'sound design', 'audio design', 'voice generation', 'text to speech', 'tts',
  'speech synthesis', 'voice synthesis', 'audio generation', 'voice ai',
  'audio ai', 'ai voice', 'ai audio', 'voice tools', 'audio tools',
  'sound generator', 'voice generator', 'audio generator', 'fx sounds',
  'audio fx', 'voice over', 'narration', 'speech generation',
  'voice cloning', 'synthetic voice', 'artificial voice', 'audio production',
  'sound generation', 'music generation', 'music production', 'sound library',
  'audio library', 'royalty free', 'sound pack', 'audio pack', 'sfx library',
  'foley', 'ambient sound', 'game audio', 'film sound', 'sound mixing',
  'music maker', 'music creator', 'beat maker', 'melody', 'audio creator'
];

// Tool names that are definitely sound effects / audio generation tools
const soundEffectsToolNames = [
  'eleven labs', 'elevenlabs', '11labs', 'murf', 'speechify',
  'suno', 'udio', 'music video maker', 'podcast script writer',
  'nucleus ai', 'voice agent', 'call agent', 'adobe podcast',
  'soundly', 'boom library', 'splice', 'artlist', 'epidemic sound',
  'zapsplat', 'freesound', 'soundsnap', 'sonniss', 'pro sound effects',
  'a sound effect', 'audio jungle', 'bbc sound effects', 'storyblocks audio',
  'music melodies', 'music video maker', 'voice cloning', 'voice synthesis',
  'text-to-speech', 'tts', 'audio generation', 'sound generation',
  'resemble ai', 'play.ht', 'wellsaid', 'descript', 'lovo', 'mubert',
  'boomy', 'amper', 'aiva', 'soundraw', 'loudly', 'beatoven'
];

// Category names that indicate sound effects / audio
const soundEffectsCategories = [
  'sound effects', 'sfx', 'audio', 'voice', 'music', 'audio generation',
  'voice synthesis', 'music generation', 'audio & voice', 'audio & music',
  'sound effects & sfx', 'audio tools', 'voice tools', 'music tools'
];

export const isSoundEffectsTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || '').toLowerCase();
  const category = (tool.category || '').toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase());
  const searchableText = `${title} ${description} ${category} ${tags.join(' ')}`;
  
  // Check if tool name matches known sound effects tools
  const isKnownSoundEffectsTool = soundEffectsToolNames.some(name => 
    title.includes(name) || description.includes(name)
  );
  if (isKnownSoundEffectsTool) return true;
  
  // Check if category indicates sound effects
  const hasSoundEffectsCategory = soundEffectsCategories.some(cat => 
    category.includes(cat)
  );
  if (hasSoundEffectsCategory) return true;
  
  // Check for sound effects keywords in title (higher weight)
  const hasTitleKeyword = soundEffectsKeywords.some(keyword => 
    title.includes(keyword)
  );
  if (hasTitleKeyword) return true;
  
  // Check for multiple keywords in description (need 2+ matches)
  const descriptionMatches = soundEffectsKeywords.filter(keyword => 
    description.includes(keyword)
  );
  if (descriptionMatches.length >= 2) return true;
  
  // Check tags for sound effects related terms
  const hasRelevantTags = tags.some(tag => 
    soundEffectsKeywords.some(keyword => tag.includes(keyword)) ||
    soundEffectsToolNames.some(name => tag.includes(name))
  );
  if (hasRelevantTags) return true;
  
  // Check for sound/audio/voice/music generation patterns
  const hasGenerationPattern = (
    (searchableText.includes('sound') && searchableText.includes('generat')) ||
    (searchableText.includes('audio') && searchableText.includes('generat')) ||
    (searchableText.includes('voice') && searchableText.includes('generat')) ||
    (searchableText.includes('music') && searchableText.includes('generat')) ||
    (searchableText.includes('fx') && (searchableText.includes('generat') || searchableText.includes('creat'))) ||
    (searchableText.includes('sfx') && (searchableText.includes('generat') || searchableText.includes('creat')))
  );
  if (hasGenerationPattern) return true;
  
  return false;
};

export const getSoundEffectsTools = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isSoundEffectsTool(tool));
};
