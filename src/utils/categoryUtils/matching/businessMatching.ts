import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getBusinessOperationsProductivityTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💼 BUSINESS OPERATIONS & PRODUCTIVITY enhanced matching for: ${categoryName}`);
  
  // Priority AI Web Tools GPTs for Business (first priority)
  const priorityAIWebToolsGPTs = [
    'Business Plan Generator GPT',
    'Training Manual Generator GPT',
    'The Resume & Job Finder Ai Suite',
    'Startup Validator GPT',
    'MicroSaaS GPT'
  ];

  // Other Priority Business Tools (second priority)
  const otherPriorityTools = [
    'Monday.com',
    'Asana',
    'Trello',
    'Notion',
    'Slack',
    'Microsoft Teams',
    'Zoom',
    'Google Workspace',
    'Microsoft 365',
    'Salesforce',
    'HubSpot',
    'Zapier',
    'Airtable',
    'ClickUp',
    'Linear',
    'Jira',
    'Confluence',
    'Miro',
    'FigJam',
    'Loom'
  ];

  const businessProductivityKeywords = [
    'business', 'productivity', 'operations', 'management', 'organization',
    'workflow', 'automation', 'efficiency', 'collaboration', 'team',
    'project', 'task', 'planning', 'strategy', 'analytics', 'reporting',
    'crm', 'sales', 'marketing', 'finance', 'accounting', 'hr',
    'communication', 'meeting', 'calendar', 'scheduling', 'documentation'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = businessProductivityKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('business') ||
      tool.category.toLowerCase().includes('productivity') ||
      tool.category.toLowerCase().includes('operations') ||
      tool.category.toLowerCase().includes('management')
    );

    return keywordMatch || categoryMatch;
  });

  // Remove duplicates by creating a map based on normalized titles
  const uniqueToolsMap = new Map<string, Tool>();
  
  categoryMatchedTools.forEach(tool => {
    const normalizedTitle = tool.title.toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '');
    
    // If we haven't seen this tool before, or if this version is better, keep it
    if (!uniqueToolsMap.has(normalizedTitle) || 
        shouldReplaceWithBetterVersion(uniqueToolsMap.get(normalizedTitle)!, tool)) {
      uniqueToolsMap.set(normalizedTitle, tool);
    }
  });

  const deduplicatedTools = Array.from(uniqueToolsMap.values());

  // Separate tools into priority groups
  const priorityAIWebTools = deduplicatedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    !otherPriority.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityAIWebTools,
    ...otherPriority,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} business & productivity tools (${priorityAIWebTools.length} priority AI Web Tools, ${otherPriority.length} other priority, ${remainingTools.length} remaining)`);
  console.log(`🗑️ Removed ${categoryMatchedTools.length - finalTools.length} duplicates`);
  
  return finalTools;
};

export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🗣️ COMMUNICATION & COLLABORATION enhanced matching for: ${categoryName}`);

  // Priority AI Web Tools GPTs for Communication & Collaboration (first priority)
  const priorityAIWebToolsGPTs = [
    'Meeting Summarizer GPT',
    'Team Communication Assistant GPT',
    'Email Automation GPT'
  ];

  // Other Priority Communication & Collaboration Tools (second priority)
  const otherPriorityTools = [
    'Slack',
    'Microsoft Teams',
    'Zoom',
    'Google Meet',
    'Discord',
    'Skype',
    'Email',
    'WhatsApp',
    'Telegram',
    'Signal',
    'Asana',
    'Trello',
    'Notion',
    'Airtable',
    'ClickUp',
    'Monday.com'
  ];

  const communicationCollaborationKeywords = [
    'communication', 'collaboration', 'teamwork', 'meeting', 'conference',
    'messaging', 'email', 'chat', 'video call', 'voice call', 'screen sharing',
    'project management', 'task management', 'workflow', 'productivity',
    'organization', 'planning', 'scheduling', 'coordination', 'feedback'
  ];
  
  // Apply similar deduplication logic here
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = communicationCollaborationKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('communication') ||
      tool.category.toLowerCase().includes('collaboration') ||
      tool.category.toLowerCase().includes('teamwork')
    );

    return keywordMatch || categoryMatch;
  });

  // Remove duplicates
  const uniqueToolsMap = new Map<string, Tool>();
  categoryMatchedTools.forEach(tool => {
    const normalizedTitle = tool.title.toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '');
    
    if (!uniqueToolsMap.has(normalizedTitle) || 
        shouldReplaceWithBetterVersion(uniqueToolsMap.get(normalizedTitle)!, tool)) {
      uniqueToolsMap.set(normalizedTitle, tool);
    }
  });

  const deduplicatedTools = Array.from(uniqueToolsMap.values());

  // Separate tools into priority groups
  const priorityAIWebTools = deduplicatedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    !otherPriority.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityAIWebTools,
    ...otherPriority,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} communication & collaboration tools (${priorityAIWebTools.length} priority AI Web Tools, ${otherPriority.length} other priority, ${remainingTools.length} remaining)`);
  console.log(`🗑️ Removed ${categoryMatchedTools.length - finalTools.length} duplicates`);

  return finalTools;
};

export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`⚙️ AUTOMATION PLATFORMS enhanced matching for: ${categoryName}`);

  // Priority AI Web Tools GPTs for Automation (first priority)
  const priorityAIWebToolsGPTs = [
    'Workflow Automation GPT',
    'Data Automation GPT',
    'Task Automation GPT'
  ];

  // Other Priority Automation Platforms (second priority)
  const otherPriorityTools = [
    'Zapier',
    'IFTTT',
    'Integromat',
    'Automate.io',
    'Microsoft Power Automate',
    'UiPath',
    'Automation Anywhere',
    'Blue Prism',
    'Workato',
    'Tray.io'
  ];

  const automationPlatformsKeywords = [
    'automation', 'workflow', 'platform', 'integration', 'task', 'process',
    'robotics', 'ai', 'machine learning', 'data', 'analytics', 'efficiency',
    'productivity', 'optimization', 'system', 'software', 'application',
    'api', 'webhook', 'trigger', 'action', 'event', 'schedule'
  ];
  
  // Apply similar deduplication logic here
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = automationPlatformsKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('automation') ||
      tool.category.toLowerCase().includes('workflow') ||
      tool.category.toLowerCase().includes('platform')
    );

    return keywordMatch || categoryMatch;
  });

  // Remove duplicates
  const uniqueToolsMap = new Map<string, Tool>();
  categoryMatchedTools.forEach(tool => {
    const normalizedTitle = tool.title.toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '');
    
    if (!uniqueToolsMap.has(normalizedTitle) || 
        shouldReplaceWithBetterVersion(uniqueToolsMap.get(normalizedTitle)!, tool)) {
      uniqueToolsMap.set(normalizedTitle, tool);
    }
  });

  const deduplicatedTools = Array.from(uniqueToolsMap.values());

  // Separate tools into priority groups
  const priorityAIWebTools = deduplicatedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    !otherPriority.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityAIWebTools,
    ...otherPriority,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} automation platform tools (${priorityAIWebTools.length} priority AI Web Tools, ${otherPriority.length} other priority, ${remainingTools.length} remaining)`);
  console.log(`🗑️ Removed ${categoryMatchedTools.length - finalTools.length} duplicates`);

  return finalTools;
};

// Helper function to determine if we should replace with a better version
const shouldReplaceWithBetterVersion = (existing: Tool, candidate: Tool): boolean => {
  // Prioritize AI Web Tools GPTs
  const existingIsGPT = existing.directUrl?.includes('lovable.app') || existing.directUrl?.includes('chatgpt.com/g/');
  const candidateIsGPT = candidate.directUrl?.includes('lovable.app') || candidate.directUrl?.includes('chatgpt.com/g/');
  
  if (candidateIsGPT && !existingIsGPT) return true;
  if (existingIsGPT && !candidateIsGPT) return false;
  
  // Choose based on completeness and quality
  const candidateScore = (candidate.directUrl ? 1 : 0) + 
                         (candidate.description?.length || 0) / 100 +
                         (candidate.rating || 0) +
                         (candidate.tags?.length || 0) / 10;
  
  const existingScore = (existing.directUrl ? 1 : 0) + 
                       (existing.description?.length || 0) / 100 +
                       (existing.rating || 0) +
                       (existing.tags?.length || 0) / 10;
  
  return candidateScore > existingScore;
};
