import { Tool } from "@/types/tools";

export const matchVibeCoding = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Enhanced "vibe" search matching - includes standalone "vibe" searches
  if (lowerSearchTerm.includes('vibe coding') || 
      lowerSearchTerm.includes('vibe coding agent') ||
      lowerSearchTerm === 'vibe' ||
      lowerSearchTerm.includes('vibe') ||
      (lowerSearchTerm.includes('vibe') && lowerSearchTerm.includes('coding')) ||
      (lowerSearchTerm.includes('vibe') && lowerSearchTerm.includes('agent'))) {
    
    // Priority vibe coding agent tools
    const vibecodingAgents = [
      'rork mobile application vibe coding agent',
      'rork mobile app coding agent',
      'windsurf',
      'lovable.dev',
      'lovable ai coding agent',
      'mgx.dev',
      'mgx.dev team of vibe coding agents',
      'mgx.dev team of coding agents',
      'devin',
      'devin ai software engineer',
      'cursor',
      'cursor ai ide agent',
      'manus autonomous agent',
      'manus autonomous web agent',
      'same.new full stack building agent',
      'same.new full stack agent',
      'emergent agentic coding ai',
      'openai codex coding agent',
      'chatgpt operator',
      'bolt.new',
      'bolt.new ai coding agent',
      'auto-gpt',
      'agentgpt',
      'launch.today ai vibe coding agent',
      'launch.today vibe coding agent',
      'launch.today',
      'launch today',
      'surf.new',
      'surf',
      'base44',
      'base44 vibe coding agent',
      'appchef',
      'iphone app maker ai agent',
      'cline',
      'cline.bot',
      'rocket.new',
      'rocket.new vibe coder',
      'replit agent',
      'v0 by vercel',
      'amazon q developer',
      'tabnine',
      'codeium',
      'github copilot'
    ];
    
    if (vibecodingAgents.some(agent => lowerTitle.includes(agent))) {
      return true;
    }
    
    // General vibe and coding-related matching
    if (lowerTitle.includes('vibe') || lowerDescription.includes('vibe') ||
        lowerTitle.includes('coding') || lowerDescription.includes('coding') ||
        lowerTitle.includes('agent') || lowerDescription.includes('agent') ||
        lowerTitle.includes('mobile') || lowerDescription.includes('mobile') ||
        lowerTitle.includes('app') || lowerDescription.includes('app') ||
        lowerCategory.includes('coding') || lowerCategory.includes('development') ||
        lowerCategory.includes('agent') ||
        lowerTags.some(tag => tag.includes('vibe') || tag.includes('coding') || 
                      tag.includes('agent') || tag.includes('mobile'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreVibeCoding = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('vibe coding') || 
      lowerSearchTerm.includes('vibe coding agent') ||
      lowerSearchTerm === 'vibe' ||
      lowerSearchTerm.includes('vibe') ||
      (lowerSearchTerm.includes('vibe') && lowerSearchTerm.includes('coding')) ||
      (lowerSearchTerm.includes('vibe') && lowerSearchTerm.includes('agent'))) {
    
    // Top priority for exact "vibe coding" matches
    if (lowerTitle.includes('rork mobile application vibe coding agent')) {
      score += 3000; // Highest priority for RORK
    }
    if (lowerTitle.includes('windsurf')) {
      score += 2500; // High priority coding agent
    }
    if (lowerTitle.includes('lovable.dev')) {
      score += 2400; // AI web builder agent
    }
    if (lowerTitle.includes('mgx.dev') || lowerTitle.includes('mgx.dev team of vibe coding agents')) {
      score += 2390; // MGX.dev vibe coding agents - near Lovable
    }
    if (lowerTitle.includes('launch.today ai vibe coding agent') || lowerTitle.includes('launch.today') || lowerTitle.includes('launch today')) {
      score += 2380; // Launch.Today vibe coding agent
    }
    if (lowerTitle.includes('manus autonomous agent')) {
      score += 2300; // Autonomous agent
    }
    if (lowerTitle.includes('same.new full stack building agent')) {
      score += 2200; // Full-stack agent
    }
    if (lowerTitle.includes('emergent agentic coding ai')) {
      score += 2100; // Coding AI agent
    }
    if (lowerTitle.includes('openai codex coding agent')) {
      score += 2000; // OpenAI coding agent
    }
    if (lowerTitle.includes('chatgpt operator')) {
      score += 1900; // ChatGPT agent
    }
    if (lowerTitle.includes('bolt.new')) {
      score += 1800; // Bolt agent
    }
    if (lowerTitle.includes('auto-gpt')) {
      score += 1700; // Auto-GPT
    }
    if (lowerTitle.includes('agentgpt')) {
      score += 1600; // AgentGPT
    }
    
    // Bonus scoring for vibe-related terms
    if (lowerTitle.includes('vibe') || lowerDescription.includes('vibe')) {
      score += 1000;
    }
    if (lowerTitle.includes('mobile') || lowerDescription.includes('mobile')) {
      score += 800;
    }
    if (lowerTitle.includes('app') || lowerDescription.includes('app')) {
      score += 700;
    }
    if (lowerTitle.includes('coding') || lowerDescription.includes('coding')) {
      score += 600;
    }
    if (lowerTitle.includes('agent') || lowerDescription.includes('agent')) {
      score += 500;
    }
    if (lowerTags.some(tag => tag.includes('vibe') || tag.includes('mobile app'))) {
      score += 400;
    }
  }
  
  return score;
};