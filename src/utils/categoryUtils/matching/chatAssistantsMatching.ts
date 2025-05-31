
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💬 AI CHAT ASSISTANTS enhanced matching for: ${categoryName}`);
  
  // Priority Communication & Collaboration Tools (first priority - user specified)
  const priorityCommunicationCollaborationTools = [
    'Trickle',
    'Miro',
    'Planable',
    'Game Design Document',
    'Developer GPT',
    'Click2Magic',
    'Zoom AI Companion'
  ];

  const aiChatKeywords = [
    'trickle', 'miro', 'planable', 'game design document', 'gdd', 'click2magic',
    'zoom ai companion', 'chat', 'assistant', 'conversation', 'dialogue',
    'ai chat', 'chatbot', 'virtual assistant', 'conversational ai',
    'natural language', 'nlp', 'language model', 'gpt', 'claude',
    'gemini', 'bard', 'assistant', 'companion', 'ai helper',
    'smart chat', 'intelligent chat', 'automated chat', 'ai support',
    'communication', 'collaboration', 'team', 'meeting',
    'messaging', 'video conference', 'voice', 'workspace', 'sharing',
    'whiteboard', 'brainstorming', 'project management', 'task management',
    'document collaboration', 'real-time', 'remote work', 'virtual team',
    'live chat', 'support chat', 'customer support', 'help desk'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = aiChatKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('chat') ||
      tool.category.toLowerCase().includes('assistant') ||
      tool.category.toLowerCase().includes('conversation') ||
      tool.category.toLowerCase().includes('communication') ||
      tool.category.toLowerCase().includes('collaboration') ||
      tool.category.toLowerCase().includes('team') ||
      tool.category.toLowerCase().includes('meeting') ||
      tool.category.toLowerCase().includes('workspace') ||
      tool.category.toLowerCase().includes('support')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityCommunicationCollaborationTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '') ||
      tool.title?.toLowerCase() === priorityName.toLowerCase()
    )
  );

  const remainingTools = categoryMatchedTools.filter(tool => 
    !priorityTools.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityTools,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} AI chat assistants tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
