
import { Tool } from "@/types/tools";

// Sound effect and audio generation keywords
const soundEffectKeywords = [
  'sound effect', 'sound effects', 'fx', 'sfx', 'audio effect', 'audio effects',
  'sound design', 'audio design', 'voice generation', 'text to speech', 'tts',
  'speech synthesis', 'voice synthesis', 'audio generation', 'voice ai',
  'audio ai', 'ai voice', 'ai audio', 'voice tools', 'audio tools',
  'sound generator', 'voice generator', 'audio generator', 'fx sounds',
  'audio fx', 'voice over', 'narration', 'speech generation',
  'voice cloning', 'synthetic voice', 'artificial voice', 'audio production',
  'sound generation', 'music generation', 'music production', 'sound library',
  'audio library', 'royalty free', 'sound pack', 'audio pack', 'sfx library',
  'foley', 'ambient sound', 'game audio', 'film sound', 'sound mixing'
];

const soundEffectToolNames = [
  'eleven labs',
  'elevenlabs',
  '11labs',
  'murf',
  'speechify',
  'suno',
  'udio',
  'music video maker',
  'podcast script writer',
  'nucleus ai',
  'voice agent',
  'call agent',
  'adobe podcast',
  'soundly',
  'boom library',
  'splice',
  'artlist',
  'epidemic sound',
  'zapsplat',
  'freesound',
  'soundsnap',
  'sonniss',
  'pro sound effects',
  'a sound effect',
  'audio jungle',
  'bbc sound effects',
  'storyblocks audio',
  'music melodies',
  'music video maker'
];

export const matchSoundEffect = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Direct sound effect keyword matching
  const hasSoundEffectKeyword = soundEffectKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );

  // Tool name matching for sound effect tools
  const isSoundEffectTool = soundEffectToolNames.some(name => 
    tool.title.toLowerCase().includes(name) || 
    searchableText.includes(name)
  );

  // Special Eleven Labs matching
  const isElevenLabsRelated = tool.title.toLowerCase().includes('eleven') ||
                             tool.description.toLowerCase().includes('eleven') ||
                             tool.description.toLowerCase().includes('text to speech') ||
                             tool.description.toLowerCase().includes('voice generation') ||
                             tool.description.toLowerCase().includes('speech synthesis');

  // Check if search term is sound effect related
  const isSoundEffectSearch = soundEffectKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );

  return (hasSoundEffectKeyword || isSoundEffectTool || (isSoundEffectSearch && isElevenLabsRelated));
};

export const scoreSoundEffect = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  let score = 0;

  // Highest priority for Eleven Labs when searching for sound effects
  if ((lowerSearchTerm.includes('sound effect') || lowerSearchTerm.includes('fx')) &&
      (tool.title.toLowerCase().includes('eleven') || 
       tool.description.toLowerCase().includes('eleven') ||
       tool.description.toLowerCase().includes('text to speech'))) {
    score += 8000;
  }

  // High priority for exact sound effect tool matches
  const exactMatches = [
    'eleven labs',
    'elevenlabs',
    'murf',
    'speechify',
    'suno',
    'udio'
  ];

  for (const exactMatch of exactMatches) {
    if (tool.title.toLowerCase().includes(exactMatch)) {
      score += 6000;
      break;
    }
  }

  // Medium priority for sound effect keywords in title
  for (const keyword of soundEffectKeywords) {
    if (tool.title.toLowerCase().includes(keyword)) {
      score += 4000;
      break;
    }
  }

  // Lower priority for sound effect keywords in description
  for (const keyword of soundEffectKeywords) {
    if (tool.description.toLowerCase().includes(keyword)) {
      score += 2000;
      break;
    }
  }

  // Audio/Voice category bonus
  if (tool.category?.toLowerCase().includes('audio') || 
      tool.category?.toLowerCase().includes('voice') ||
      tool.category?.toLowerCase().includes('music')) {
    score += 1500;
  }

  // Tag matching bonus
  if (tool.tags) {
    for (const tag of tool.tags) {
      for (const keyword of soundEffectKeywords) {
        if (tag.toLowerCase().includes(keyword)) {
          score += 1000;
        }
      }
    }
  }

  return score;
};
