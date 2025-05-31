
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getBusinessOperationsProductivityTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💼 BUSINESS OPERATIONS & PRODUCTIVITY enhanced matching for: ${categoryName}`);
  
  // Priority Business Operations & Productivity Tools (first priority - user specified)
  const priorityBusinessProductivityTools = [
    'Drill Baby Drill AI Suite For Oil & Gas',
    'Drill Baby Drill Ai Suite For Oil & Gas',
    'The Resume & Job Finder AI Suite',
    'The Resume & Job Finder Ai Suite',
    '3D Print GPT',
    'MicroSaaS GPT',
    'Restaurant Menu Maker GPT',
    'Trivia Night GPT',
    'Fortune Teller GPT',
    'Imagination Traveler GPT',
    'King Blueberry GPT',
    'Business Plan Generator GPT💼',
    'Business Plan Generator GPT',
    'Buisness Plan Generator',
    '🚀 Startup Validator GPT',
    'Startup Validator GPT',
    'Data Research Analysis Report GPT',
    'MATERIAL VALUATION GPT',
    'MATERIUMOR',
    'Predictive Credit Score Checker GPT',
    'Solar Land Assessor GPT',
    'SpeakAI',
    'MeetGeek',
    'Fibery',
    'Sessions',
    'typedesk',
    'Ideabuddy',
    'TinyWow',
    'Otter.ai',
    'Notion AI',
    'Bardeen AI',
    'Bardeen',
    'Mem AI',
    'Beautiful.AI',
    'FireFlies AI',
    'Fireflies.ai',
    'Rewind.AI',
    'REV',
    'TL;DV',
    'Traq.ai',
    'Sembly.ai',
    'Cogram',
    'Read',
    'Small PPT',
    'Superhuman',
    'Superhuman AI',
    'Mailchimp',
    'ConvertKit',
    'Gmail Smart Compose',
    'Constant Contact',
    'Klaviyo',
    'Proofpoint',
    'Boomerang',
    'SaneBox',
    'Mixmax',
    'Motion',
    'Reclaim AI',
    'ClickUp AI',
    'Clockify AI',
    'Notion',
    'Salesforce',
    'Tableau',
    'Slack',
    'Calendly',
    'DocuSign',
    'QuickBooks',
    'QuickBooks AI',
    'HubSpot',
    'Microsoft Teams',
    'Stripe',
    'Pipedrive',
    'Intercom',
    'Gong',
    'Outreach',
    'ZoomInfo',
    'GPT Workspace',
    'Resume Writer GPT',
    'HR Assistant GPT',
    'Compliance Officer GPT',
    'Logistics Manager GPT',
    'Safety Inspector GPT',
    'IT Support GPT',
    'Contract Review Bot'
  ];

  const businessProductivityKeywords = [
    'business', 'productivity', 'operations', 'management', 'enterprise',
    'workflow', 'process', 'efficiency', 'optimization', 'organization',
    'planning', 'scheduling', 'project', 'task', 'team', 'collaboration',
    'document', 'file', 'storage', 'backup', 'sync', 'sharing',
    'communication', 'meeting', 'calendar', 'appointment', 'reminder',
    'email', 'crm', 'erp', 'hr', 'finance', 'accounting', 'invoicing'
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
      tool.category.toLowerCase().includes('management') ||
      tool.category.toLowerCase().includes('enterprise') ||
      tool.category.toLowerCase().includes('workflow')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityBusinessProductivityTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} business operations & productivity tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};

export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💬 COMMUNICATION & COLLABORATION enhanced matching for: ${categoryName}`);
  
  const communicationKeywords = [
    'trickle', 'miro', 'planable', 'game design document', 'gdd', 'click2magic',
    'zoom ai companion', 'communication', 'collaboration', 'team', 'meeting',
    'chat', 'messaging', 'video conference', 'voice', 'workspace', 'sharing',
    'whiteboard', 'brainstorming', 'project management', 'task management',
    'document collaboration', 'real-time', 'remote work', 'virtual team',
    'live chat', 'support chat', 'customer support', 'help desk'
  ];

  const collaborationToolNames = [
    'Trickle', 'Miro', 'Planable', 'Game Design Document', 'Developer GPT',
    'Click2Magic', 'Zoom AI Companion'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct name matching
    const nameMatch = collaborationToolNames.some(name => 
      tool.title?.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(tool.title?.toLowerCase() || '')
    );
    
    // Keyword matching
    const keywordMatch = communicationKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('communication') ||
      tool.category.toLowerCase().includes('collaboration') ||
      tool.category.toLowerCase().includes('team') ||
      tool.category.toLowerCase().includes('meeting') ||
      tool.category.toLowerCase().includes('chat') ||
      tool.category.toLowerCase().includes('workspace') ||
      tool.category.toLowerCase().includes('support')
    );

    return nameMatch || keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} communication & collaboration tools`);
  return matchedTools;
};

export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🤖 AUTOMATION PLATFORMS enhanced matching for: ${categoryName}`);
  
  // Priority Automation Platform Tools (first priority - user specified)
  const priorityAutomationPlatformTools = [
    'Zapier',
    'Make',
    'Integromat',
    'Make (Integromat)',
    'Microsoft Power Automate',
    'GitHub Actions',
    'IFTTT',
    'n8n Workflow Automation',
    'n8n',
    'Gumloop AI Automation',
    'Gumloop',
    'Bardeen'
  ];

  const automationKeywords = [
    'zapier', 'make', 'integromat', 'microsoft power automate', 'github actions', 
    'ifttt', 'n8n', 'gumloop', 'bardeen', 'automation', 'workflow', 'process', 
    'task', 'scheduling', 'trigger', 'integration', 'connector', 'pipeline',
    'orchestration', 'robotic process', 'rpa', 'bot', 'agent', 'auto',
    'streamline', 'optimize', 'efficiency', 'productivity', 'business process',
    'no-code automation', 'visual automation', 'workflow builder', 'scenarios',
    'app integration', 'conditional automation', 'ci/cd', 'deployment',
    'development workflow', 'smart home', 'iot', 'applets', 'self-hosted',
    'drag-and-drop', 'data extraction', 'platform integrations', 'ai automation',
    'browser automation', 'task automation'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = automationKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('automation') ||
      tool.category.toLowerCase().includes('workflow') ||
      tool.category.toLowerCase().includes('process') ||
      tool.category.toLowerCase().includes('productivity') ||
      tool.category.toLowerCase().includes('business') ||
      tool.category.toLowerCase().includes('integration') ||
      tool.category.toLowerCase().includes('platform')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityAutomationPlatformTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} automation platform tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
