
import { Tool } from "@/types/tools";

export const matchCodingAgents = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Enhanced "code" search matching including "vibe coding agent" searches
  if (lowerSearchTerm === 'code' || lowerSearchTerm === 'coding' || 
      lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
      lowerSearchTerm.includes('vibe coding') || lowerSearchTerm.includes('vibe coding agent') ||
      (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent')) ||
      (lowerSearchTerm.includes('vibe') && lowerSearchTerm.includes('coding'))) {
    
    // Priority coding agent tools that should appear for "code" and "vibe coding" searches
    const priorityCodingAgents = [
      'rork mobile application vibe coding agent',
      'windsurf',
      'lovable.dev',
      'mgx.dev',
      'mgx.dev team of vibe coding agents',
      'bolt.new',
      'chatgpt operator',
      'manus autonomous agent',
      'auto-gpt',
      'agentgpt',
      'emergent agentic coding ai',
      'same.new full stack building agent',
      'openai codex coding agent',
      'github copilot',
      'tabnine',
      'amazon codewhisperer',
      'engineering gpt ai suite'
    ];
    
    if (priorityCodingAgents.some(agent => lowerTitle.includes(agent))) {
      return true;
    }
    
    // General coding-related matching for "code" searches
    if (lowerTitle.includes('coding') || lowerDescription.includes('coding') ||
        lowerTitle.includes('code') || lowerDescription.includes('code') ||
        lowerTitle.includes('programming') || lowerDescription.includes('programming') ||
        lowerTitle.includes('developer') || lowerDescription.includes('developer') ||
        lowerCategory.includes('coding') || lowerCategory.includes('development') ||
        lowerTags.some(tag => tag.includes('coding') || tag.includes('programming') || tag.includes('developer'))) {
      return true;
    }
  }
  
  return false;
};

export const scoreCodingAgents = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm === 'code' || lowerSearchTerm === 'coding' || 
      lowerSearchTerm.includes('coding agent') || lowerSearchTerm.includes('code agent') ||
      lowerSearchTerm.includes('vibe coding') || lowerSearchTerm.includes('vibe coding agent') ||
      (lowerSearchTerm.includes('coding') && lowerSearchTerm.includes('agent')) ||
      (lowerSearchTerm.includes('vibe') && lowerSearchTerm.includes('coding'))) {
    
    // Top priority coding agent tools for "code" and "vibe coding" searches
    if (lowerTitle.includes('rork mobile application vibe coding agent')) {
      score += 2100; // Highest priority for "vibe coding" searches
    }
    if (lowerTitle.includes('windsurf')) {
      score += 2000; // Highest priority for general coding
    }
    if (lowerTitle.includes('lovable.dev')) {
      score += 1980; // Second highest
    }
    if (lowerTitle.includes('mgx.dev') || lowerTitle.includes('mgx.dev team of vibe coding agents')) {
      score += 1975; // MGX.dev close to Lovable for coding searches
    }
    if (lowerTitle.includes('bolt.new')) {
      score += 1950; // Third highest
    }
    if (lowerTitle.includes('emergent agentic coding ai')) {
      score += 1920; // Coding agent priority
    }
    if (lowerTitle.includes('same.new full stack building agent')) {
      score += 1900; // Full-stack agent
    }
    if (lowerTitle.includes('openai codex coding agent')) {
      score += 1880; // OpenAI coding agent
    }
    if (lowerTitle.includes('chatgpt operator')) {
      score += 1860;
    }
    if (lowerTitle.includes('manus autonomous agent')) {
      score += 1840;
    }
    if (lowerTitle.includes('auto-gpt')) {
      score += 1820;
    }
    if (lowerTitle.includes('agentgpt')) {
      score += 1800;
    }
    if (lowerTitle.includes('github copilot')) {
      score += 1750;
    }
    if (lowerTitle.includes('tabnine')) {
      score += 1700;
    }
    if (lowerTitle.includes('amazon codewhisperer')) {
      score += 1650;
    }
    if (lowerTitle.includes('engineering gpt ai suite')) {
      score += 1600;
    }
    
    // General coding matching with high scores for "code" searches
    if (lowerTitle.includes('coding') || lowerTitle.includes('code')) {
      score += 1500;
    }
    if (lowerDescription.includes('coding') || lowerDescription.includes('code')) {
      score += 1200;
    }
    if (lowerTitle.includes('programming')) {
      score += 1400;
    }
    if (lowerDescription.includes('programming')) {
      score += 1100;
    }
    if (lowerTitle.includes('developer')) {
      score += 1300;
    }
    if (lowerDescription.includes('developer')) {
      score += 1000;
    }
    if (lowerCategory.includes('coding') || lowerCategory.includes('development')) {
      score += 1300;
    }
    if (lowerTags.some(tag => tag.includes('coding') || tag.includes('programming'))) {
      score += 1200;
    }
  }
  
  return score;
};
