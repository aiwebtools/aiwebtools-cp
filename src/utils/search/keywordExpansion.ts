
import { keywordMapping } from "@/data/keywordMapping";

// Helper function to get expanded keywords with better matching
export const getExpandedKeywords = (searchTerm: string): string[] => {
  // For very short searches, don't expand keywords to prevent false matches
  if (searchTerm.length <= 2) {
    return [searchTerm];
  }
  
  const words = searchTerm.split(' ');
  const expandedKeywords = new Set([searchTerm]);
  
  // Add the full search term
  expandedKeywords.add(searchTerm);
  
  // ENHANCED AUTOMATION TOOLS SEARCH - Critical for "MAKE" and automation tools
  const automationTerms = ['make', 'automation', 'automate', 'workflow', 'zapier', 'integromat', 'n8n', 'power automate', 'ifttt', 'pipeline', 'trigger', 'action', 'connector', 'integration', 'webhook', 'api', 'flow', 'process', 'scheduler', 'task', 'workflow automation', 'business process', 'no-code', 'low-code'];
  if (automationTerms.some(term => searchTerm.toLowerCase().includes(term) || term.includes(searchTerm.toLowerCase()))) {
    automationTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('productivity');
    expandedKeywords.add('business tools');
    expandedKeywords.add('efficiency');
    expandedKeywords.add('streamline');
    expandedKeywords.add('optimize');
    expandedKeywords.add('platform');
    expandedKeywords.add('suite');
    expandedKeywords.add('tool');
    expandedKeywords.add('software');
  }
  
  // ENHANCED MAKE SEARCH - Specific handling for "MAKE" tool
  if (searchTerm.toLowerCase().includes('make') || searchTerm.toLowerCase() === 'make') {
    expandedKeywords.add('make');
    expandedKeywords.add('make.com');
    expandedKeywords.add('integromat');
    expandedKeywords.add('automation platform');
    expandedKeywords.add('workflow builder');
    expandedKeywords.add('integration platform');
    expandedKeywords.add('visual automation');
    expandedKeywords.add('scenario builder');
    expandedKeywords.add('data connector');
    expandedKeywords.add('app integration');
    expandedKeywords.add('business automation');
    expandedKeywords.add('process automation');
  }
  
  // Enhanced text-to-speech and audio AI search handling
  const ttsTerms = ['tts', 'text to speech', 'text-to-speech', 'speech synthesis', 'voice generation', 'voice ai', 'speech ai', 'eleven labs', 'elevenlabs', 'voice cloning', 'voice clone', 'ai voice', 'synthetic voice', 'artificial voice', 'voice over', 'voiceover', 'narration', 'speech generation'];
  if (ttsTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    ttsTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('sound effects');
    expandedKeywords.add('audio generation');
    expandedKeywords.add('voice synthesis');
    expandedKeywords.add('speech technology');
    expandedKeywords.add('audio ai');
    expandedKeywords.add('voice technology');
    expandedKeywords.add('speech engine');
    expandedKeywords.add('voice engine');
    expandedKeywords.add('realistic voice');
    expandedKeywords.add('human voice');
    expandedKeywords.add('professional voice');
  }
  
  // Enhanced sound generation and audio effects search handling
  const soundTerms = ['sound', 'audio', 'sound effects', 'sound generation', 'audio generation', 'audio effects', 'sfx', 'foley', 'ambient', 'music', 'noise'];
  if (soundTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    soundTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('eleven labs');
    expandedKeywords.add('elevenlabs');
    expandedKeywords.add('text to speech');
    expandedKeywords.add('voice generation');
    expandedKeywords.add('audio ai');
    expandedKeywords.add('sound ai');
    expandedKeywords.add('audio production');
    expandedKeywords.add('sound design');
    expandedKeywords.add('audio editing');
  }
  
  // Enhanced cannabis/marijuana search handling
  const cannabisTerms = ['weed', 'cannabis', 'marijuana', 'pot', '420', 'ganja', 'herb', 'mary jane', 'bud', 'thc', 'cbd', 'hemp'];
  if (cannabisTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    cannabisTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('dispensary');
    expandedKeywords.add('strain');
    expandedKeywords.add('medical marijuana');
    expandedKeywords.add('recreational cannabis');
    expandedKeywords.add('indica');
    expandedKeywords.add('sativa');
    expandedKeywords.add('hybrid');
    expandedKeywords.add('cultivation');
    expandedKeywords.add('grow');
    expandedKeywords.add('green');
  }
  
  // Special handling for GPT searches - ensure all GPT tools are found
  if (searchTerm.toLowerCase().includes('gpt')) {
    expandedKeywords.add('gpt');
    expandedKeywords.add('chatgpt');
    expandedKeywords.add('openai');
    expandedKeywords.add('custom gpt');
    expandedKeywords.add('ai assistant');
    expandedKeywords.add('conversational ai');
  }
  
  // Enhanced phone/call search handling
  if (searchTerm.toLowerCase().includes('phone') || searchTerm.toLowerCase().includes('call')) {
    expandedKeywords.add('call');
    expandedKeywords.add('phone');
    expandedKeywords.add('voice');
    expandedKeywords.add('communication');
    expandedKeywords.add('chat');
    expandedKeywords.add('talk');
    expandedKeywords.add('celebrity');
    expandedKeywords.add('chatline');
    expandedKeywords.add('call agent');
    expandedKeywords.add('call agents');
    expandedKeywords.add('voice agent');
    expandedKeywords.add('ai agent');
    expandedKeywords.add('nucleus');
    expandedKeywords.add('inbound');
    expandedKeywords.add('outbound');
    expandedKeywords.add('call center');
    expandedKeywords.add('telephone');
    expandedKeywords.add('mobile');
  }
  
  // Special handling for agent searches
  if (searchTerm.toLowerCase().includes('agent') || searchTerm.toLowerCase().includes('agents')) {
    expandedKeywords.add('agent');
    expandedKeywords.add('agents');
    expandedKeywords.add('call agent');
    expandedKeywords.add('call agents');
    expandedKeywords.add('voice agent');
    expandedKeywords.add('voice agents');
    expandedKeywords.add('ai agent');
    expandedKeywords.add('ai agents');
    expandedKeywords.add('nucleus');
    expandedKeywords.add('inbound');
    expandedKeywords.add('outbound');
    expandedKeywords.add('call center');
    expandedKeywords.add('phone');
    expandedKeywords.add('voice');
    expandedKeywords.add('communication');
  }
  
  // Special handling for nucleus search
  if (searchTerm.toLowerCase().includes('nucleus')) {
    expandedKeywords.add('nucleus');
    expandedKeywords.add('call agent');
    expandedKeywords.add('call agents');
    expandedKeywords.add('voice agent');
    expandedKeywords.add('ai agent');
    expandedKeywords.add('inbound');
    expandedKeywords.add('phone');
    expandedKeywords.add('call');
    expandedKeywords.add('voice');
    expandedKeywords.add('communication');
    expandedKeywords.add('call center');
  }
  
  // Enhanced AI/tech term expansion
  const aiTerms = ['ai', 'artificial intelligence', 'machine learning', 'neural network', 'bot', 'chatbot'];
  if (aiTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    aiTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('automation');
    expandedKeywords.add('intelligent');
    expandedKeywords.add('smart');
  }
  
  // Enhanced creative term expansion
  const creativeTerms = ['art', 'design', 'creative', 'video', 'music', 'image'];
  if (creativeTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    creativeTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('generator');
    expandedKeywords.add('creator');
    expandedKeywords.add('maker');
    expandedKeywords.add('studio');
  }
  
  // Enhanced business term expansion
  const businessTerms = ['business', 'work', 'productivity', 'office', 'professional'];
  if (businessTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    businessTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('enterprise');
    expandedKeywords.add('corporate');
    expandedKeywords.add('commercial');
    expandedKeywords.add('workflow');
  }
  
  // Enhanced social media term expansion
  const socialTerms = ['social', 'instagram', 'youtube', 'tiktok', 'facebook', 'twitter'];
  if (socialTerms.some(term => searchTerm.toLowerCase().includes(term))) {
    socialTerms.forEach(term => expandedKeywords.add(term));
    expandedKeywords.add('content');
    expandedKeywords.add('influencer');
    expandedKeywords.add('viral');
    expandedKeywords.add('hashtag');
    expandedKeywords.add('followers');
  }
  
  // Special handling for celebrity searches
  if (searchTerm.toLowerCase().includes('celebrity')) {
    expandedKeywords.add('famous');
    expandedKeywords.add('star');
    expandedKeywords.add('chat');
    expandedKeywords.add('phone');
    expandedKeywords.add('call');
    expandedKeywords.add('talk');
  }
  
  // Add individual words (only if they're longer than 2 characters)
  words.forEach(word => {
    if (word.length > 2) {
      expandedKeywords.add(word);
      
      // Check if any keyword mapping key contains this word or vice versa
      Object.keys(keywordMapping).forEach(key => {
        if (key.includes(word) || word.includes(key)) {
          keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
        }
      });
      
      // Direct keyword mapping
      if (keywordMapping[word]) {
        keywordMapping[word].forEach(keyword => expandedKeywords.add(keyword));
      }
    }
  });
  
  // Special handling for partial matches in keyword mapping (only for longer terms)
  if (searchTerm.length > 3) {
    Object.keys(keywordMapping).forEach(key => {
      if (searchTerm.includes(key) || key.includes(searchTerm)) {
        keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
      }
    });
  }
  
  return Array.from(expandedKeywords);
};
