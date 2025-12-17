import { Tool } from "@/types/tools";

// Keywords that indicate a spiritual/religious tool
const SPIRITUALITY_KEYWORDS = [
  'spiritual', 'spirituality', 'god', 'divine', 'soul', 'meditation', 'enlightenment',
  'religion', 'religious', 'faith', 'sacred', 'holy', 'mystical', 'mysticism',
  'prophet', 'saint', 'deity', 'buddha', 'jesus', 'christ', 'allah', 'krishna',
  'yoga', 'chakra', 'mantra', 'prayer', 'worship', 'temple', 'church', 'mosque',
  'torah', 'bible', 'quran', 'vedas', 'dharma', 'karma', 'reincarnation',
  'afterlife', 'heaven', 'nirvana', 'moksha', 'salvation', 'redemption',
  'gnostic', 'kabbalah', 'sufi', 'zen', 'tao', 'shinto', 'hindu', 'buddhist',
  'christian', 'islamic', 'jewish', 'pagan', 'wiccan', 'shamanic',
  'angel', 'archangel', 'seraph', 'cherub', 'demon', 'spirit',
  'consciousness', 'awakening', 'transcendence', 'ascension',
  'orisha', 'yemaya', 'quan yin', 'bodhisattva', 'guru', 'swami', 'roshi',
  'mani', 'manicheism', 'zoroastrian', 'essene', 'gnostic'
];

// Keywords that indicate light/philosophy tools needing simulation tag
const LIGHT_PHILOSOPHY_KEYWORDS = [
  'light', 'illumination', 'luminous', 'radiant', 'brightness',
  'philosophy', 'philosopher', 'socrates', 'plato', 'aristotle',
  'marcus aurelius', 'stoic', 'stoicism', 'epicurus', 'seneca',
  'rumi', 'lao tzu', 'confucius', 'buddha', 'jesus', 'muhammad',
  'alan watts', 'eckhart', 'yogananda', 'krishnamurti',
  'god', 'gods', 'deity', 'deities', 'divine', 'prophet', 'saint',
  'mary magdalene', 'council of light', 'breathlight', 'lightworker',
  'talk to history', 'talk to the gods', 'resurrection',
  'carl sagan', 'hypatia', 'tesla', 'einstein'
];

// Check if a tool matches spiritual keywords
const isSpiritualTool = (tool: Tool): boolean => {
  const searchText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return SPIRITUALITY_KEYWORDS.some(keyword => searchText.includes(keyword.toLowerCase()));
};

// Check if a tool is a light/philosophy simulation tool
const isLightPhilosophyTool = (tool: Tool): boolean => {
  const searchText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return LIGHT_PHILOSOPHY_KEYWORDS.some(keyword => searchText.includes(keyword.toLowerCase()));
};

// Apply spiritual and simulation tags to tools
export const applySpirtualTags = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    const tags = [...(tool.tags || [])];
    const isSpiritual = isSpiritualTool(tool);
    const isLightPhilosophy = isLightPhilosophyTool(tool);
    
    // Add Spirituality tag to spiritual tools
    if (isSpiritual && !tags.includes('Spirituality')) {
      tags.push('Spirituality');
    }
    
    // Add Simulation and Spirituality tags to light/philosophy tools
    if (isLightPhilosophy) {
      if (!tags.includes('Simulation')) {
        tags.push('Simulation');
      }
      if (!tags.includes('Spirituality') && !tags.includes('spirituality')) {
        tags.push('Spirituality');
      }
    }
    
    return { ...tool, tags };
  });
};
