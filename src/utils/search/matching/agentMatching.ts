
import { Tool } from "@/types/tools";

export const matchAgents = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents' || 
      lowerSearchTerm.includes('swarm') || lowerSearchTerm.includes('moltbot') || 
      lowerSearchTerm.includes('clawdbot') || lowerSearchTerm.includes('openclaw') ||
      lowerSearchTerm.includes('kimi') ||
      lowerSearchTerm.includes('piper') || lowerSearchTerm.includes('rabbit') ||
      lowerSearchTerm.includes('dust') || lowerSearchTerm.includes('deep research')) {
    // Priority AI agent tools (including phone agents, coding agents, and viral agents)
    const priorityAgents = [
      'dify',
      'coze',
      'flowise',
      'letta',
      'agno',
      'wordware',
      'composio',
      'smythos',
      'mindpal',
      'agentops',
      'chatgpt operator',
      'moltbot',
      'clawdbot',
      'openclaw ai agent',
      'openclaw',
      'kimi k2.5 agent swarm',
      'perplexity deep research',
      'rabbit r1 lam',
      'dust ai agent platform',
      'piper voice ai',
      'piper ai sdr',
      'manus autonomous agent',
      'surf.new web agents',
      'lindy ai automation',
      'nucleus ai inbound call agents platform',
      'nucleus',
      'auto-gpt',
      'babyagi',
      'agentgpt',
      'ai town',
      'g mode gpt',
      'g-mode gpt',
      'windsurf',
      'lovable.dev',
      'emergent agentic coding ai',
      'same.new full stack building agent',
      'warmwind.space agent',
      'emergent agent',
      'mgx ai agent',
      'rork mobile application vibe coding agent',
      'openai codex coding agent',
      'runner h ai agent',
      'ai agents',
      'autonomous agent',
      'call agent',
      'phone agent',
      'voice agent',
      'ai steve',
      'ai legion',
      'ai matrix',
      'private llm agents',
      'swarm',
      'agent swarm',
      'deep research'
    ];
    
    if (priorityAgents.some(agent => lowerTitle.includes(agent))) {
      return true;
    }
    
    // General agent-related matching - more comprehensive
    if (lowerTitle.includes('agent') || lowerDescription.includes('agent') || 
        lowerTitle.includes('autonomous') || lowerDescription.includes('autonomous') ||
        lowerCategory.includes('agent') || lowerTags.some(tag => tag.includes('agent')) ||
        lowerCategory === 'ai agents' || lowerCategory.includes('ai agents')) {
      return true;
    }
    
    // Assistant and automation tools that act like agents
    const agentLikeTerms = [
      'assistant', 'automation', 'autonomous', 'bot', 'chatbot', 
      'virtual assistant', 'ai assistant', 'automated'
    ];
    
    if (agentLikeTerms.some(term => 
      lowerTitle.includes(term) || lowerDescription.includes(term)
    )) {
      return true;
    }
  }
  
  return false;
};

export const scoreAgents = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  if (lowerSearchTerm.includes('agent') || lowerSearchTerm === 'agents' ||
      lowerSearchTerm.includes('swarm') || lowerSearchTerm.includes('moltbot') || 
      lowerSearchTerm.includes('clawdbot') || lowerSearchTerm.includes('openclaw') ||
      lowerSearchTerm.includes('kimi') ||
      lowerSearchTerm.includes('piper') || lowerSearchTerm.includes('rabbit') ||
      lowerSearchTerm.includes('dust') || lowerSearchTerm.includes('deep research')) {
    // Top priority AI agent tools (including phone agents, coding agents, and viral agents)
    if (lowerTitle.includes('moltbot') || lowerTitle.includes('clawdbot') || lowerTitle.includes('openclaw')) {
      score += 2100; // Viral agent - highest priority
    }
    if (lowerTitle.includes('kimi k2.5 agent swarm')) {
      score += 2050; // Chinese swarm agent - very high priority
    }
    if (lowerTitle.includes('perplexity deep research')) {
      score += 2040; // Deep research agent
    }
    if (lowerTitle.includes('rabbit r1') || lowerTitle.includes('lam agent')) {
      score += 2030; // Rabbit R1 LAM
    }
    if (lowerTitle.includes('dust ai')) {
      score += 2020; // Dust AI platform
    }
    if (lowerTitle.includes('piper voice') || lowerTitle.includes('piper ai sdr')) {
      score += 2010; // Piper agents
    }
    if (lowerTitle.includes('chatgpt operator')) {
      score += 2000; // Highest priority
    }
    if (lowerTitle.includes('nucleus ai inbound call agents platform') || lowerTitle.includes('nucleus')) {
      score += 1980; // High priority for phone agents
    }
    if (lowerTitle.includes('manus autonomous agent')) {
      score += 1950; // Second highest
    }
    if (lowerTitle.includes('surf.new web agents')) {
      score += 1900; // Third highest
    }
    if (lowerTitle.includes('lindy ai automation')) {
      score += 1850; // Fourth highest
    }
    if (lowerTitle.includes('windsurf')) {
      score += 1840; // Coding agent priority
    }
    if (lowerTitle.includes('lovable.dev')) {
      score += 1830; // AI web builder agent
    }
    if (lowerTitle.includes('rork mobile application vibe coding agent')) {
      score += 1820; // Mobile app coding agent
    }
    if (lowerTitle.includes('emergent agentic coding ai')) {
      score += 1810; // Coding agent
    }
    if (lowerTitle.includes('openai codex coding agent')) {
      score += 1800; // OpenAI coding agent
    }
    if (lowerTitle.includes('same.new full stack building agent')) {
      score += 1790; // Full-stack agent
    }
    if (lowerTitle.includes('runner h ai agent')) {
      score += 1780; // H Company agent
    }
    if (lowerTitle.includes('mgx ai agent')) {
      score += 1770; // MGX agent
    }
    if (lowerTitle.includes('warmwind.space agent')) {
      score += 1760; // Warmwind agent
    }
    if (lowerTitle.includes('emergent agent')) {
      score += 1750; // Emergent agent
    }
    
    // Other important agent tools
    if (lowerTitle.includes('auto-gpt')) {
      score += 1700;
    }
    if (lowerTitle.includes('babyagi')) {
      score += 1650;
    }
    if (lowerTitle.includes('agentgpt')) {
      score += 1600;
    }
    if (lowerTitle.includes('god mode gpt')) {
      score += 1550;
    }
    if (lowerTitle.includes('ai town')) {
      score += 1500;
    }
    
    // Phone/call agent specific scoring
    if (lowerTitle.includes('call agent') || lowerTitle.includes('phone agent')) {
      score += 1900;
    }
    if (lowerTitle.includes('voice agent')) {
      score += 1800;
    }
    
    // General agent matching
    if (lowerTitle.includes('agent')) {
      score += 1500;
    }
    if (lowerDescription.includes('agent')) {
      score += 1200;
    }
    if (lowerTitle.includes('autonomous')) {
      score += 1400;
    }
    if (lowerDescription.includes('autonomous')) {
      score += 1100;
    }
    if (lowerCategory.includes('agent')) {
      score += 1300;
    }
    if (lowerTags.some(tag => tag.includes('agent'))) {
      score += 1200;
    }
  }
  
  return score;
};
