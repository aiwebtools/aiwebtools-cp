import { Tool } from "@/types/tools";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";

// Enhanced function for AI Development & Platforms tools
export const getAIDevelopmentPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔧 AI DEVELOPMENT & PLATFORMS enhanced matching for: ${categoryName}`);
  
  const aiDevelopmentKeywords = [
    'godmode', 'perfect prompt', 'custom gpt', 'customizable gpt', 'gpt maker', 
    'immortalizeme', 'resurrection gpt', 'brainstorming assistant', 'chatrtx', 
    'lm studio', 'anything llm', 'big-agi', 'claude', 'tensorflow', 'langchain',
    'hugging face', 'mistral', 'lmsys', 'llama', 'chatgpt', 'perplexity',
    'auto-gpt', 'babygpt', 'agentgpt', 'jarvis', 'ai agents', 'ai town',
    'ai steve', 'ai legion', 'ai matrix', 'manus', 'surf.new', 'lindy',
    'cheatlayer', 'buildai.space', 'convai', 'theneo', 'openai api',
    'anthropic', 'pinecone', 'roboflow', 'cohere', 'replicate', 'snyk',
    'deepcode', 'gpt-4', 'claude 3', 'gemini', 'mutable ai', 'sourcegraph',
    'code climate', 'durable ai', 'codewhisperer', 'gemini ai studio',
    'copycoder', 'vercel v0', 'netlify', 'supabase', 'cloudflare workers',
    'replit', 'framer', 'bolt.new', 'webflow', 'builder.io', 'railway',
    'mongodb', 'aws', 'datadog', 'docker', 'kubernetes', 'vault',
    'terraform', 'redis', 'elasticsearch', 'github copilot', 'tabnine',
    'multitasker gpt', 'cursor ai', 'prompt library', 'ai development',
    'development platform', 'coding platform', 'programming platform',
    'ai framework', 'machine learning', 'deep learning', 'neural network',
    'model development', 'api development', 'ai infrastructure', 'mlops',
    'devops', 'cloud platform', 'edge computing', 'container platform'
  ];

  const developmentPlatformNames = [
    'GODMODE GPT', 'God Mode GPT', 'PERFECT PROMPT ENGINE', 'Illuminous World Data Explorer GPT',
    'Phenomenon Explorer AI Suite', 'Customizable GPT Maker', 'Custom GPT Maker', 'ImmortalizeME',
    'Resurrection GPT', 'Custom GPT Ideas', 'GPT Ideas Assistant', 'Brainstorming Assistant',
    'ChatRTX', 'LM STUDIO', 'ANYTHING LLM', 'BIG-AGI', 'Claude', 'TensorFlow',
    'LangChain', 'Hugging Face', 'Mistral', 'AI WEB TOOLS LLC', 'LMSYS CHATBOT ARENA',
    'Llama', 'ChatGPT', 'Perplexity AI', 'Auto-GPT', 'BabyAGI', 'AgentGPT',
    'Microsoft JARVIS', 'GPTPastVoices', 'ML Agents', 'Private LLM Agents',
    'AI Agents Google', 'AI Agents AWS', 'AI Agents Azure', 'AI Town', 'AI Steve',
    'AI Legion', 'AI Matrix', 'Manus Autonomous Agent', 'Surf.new Web Agents',
    'Lindy AI Automation', 'ChatGPT Operator', 'Cheatlayer Project Atlas',
    'BuildAI.Space', 'Convai', 'Theneo', 'OpenAI API', 'Anthropic Claude API',
    'Pinecone', 'Roboflow', 'Cohere', 'Replicate', 'Snyk', 'DeepCode',
    'GPT-4 Turbo', 'Claude 3 Opus', 'Gemini Ultra', 'Mutable AI', 'Sourcegraph',
    'Code Climate', 'Durable AI Website Builder', 'Amazon CodeWhisperer',
    'GEMINI/GOOGLE AI STUDIO', 'CopyCoder.AI', 'Vercel v0', 'Netlify', 'Supabase',
    'Cloudflare Workers AI', 'Replit', 'Framer', 'Bolt.new', 'Webflow', 'Builder.io',
    'Railway', 'MongoDB Atlas', 'AWS', 'Cloudflare', 'Datadog', 'Docker',
    'Kubernetes', 'HashiCorp Vault', 'Terraform', 'Redis', 'Elasticsearch',
    'GitHub Copilot', 'Tabnine', 'Multitasker GPT4o Custom GPT', 'Cursor AI Coding Agent',
    'Hugging Face GPT Prompt Library'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct name matching
    const nameMatch = developmentPlatformNames.some(name => 
      tool.title?.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(tool.title?.toLowerCase() || '')
    );
    
    // Keyword matching
    const keywordMatch = aiDevelopmentKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('ai development') ||
      tool.category.toLowerCase().includes('development') ||
      tool.category.toLowerCase().includes('platform') ||
      tool.category.toLowerCase().includes('coding') ||
      tool.category.toLowerCase().includes('programming') ||
      tool.category.toLowerCase().includes('api') ||
      tool.category.toLowerCase().includes('framework') ||
      tool.category.toLowerCase().includes('infrastructure') ||
      tool.category.toLowerCase().includes('cloud') ||
      tool.category.toLowerCase().includes('agent')
    );

    return nameMatch || keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} AI Development & Platforms tools`);
  return matchedTools;
};

export const getVideoMultimediaTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎬 VIDEO & MULTIMEDIA enhanced matching for: ${categoryName}`);
  
  const videoMultimediaKeywords = [
    'video', 'multimedia', 'film', 'movie', 'animation', 'motion', 'cinema',
    'editing', 'production', 'post-production', 'effects', 'transitions',
    'rendering', 'encoding', 'streaming', 'broadcast', 'live', 'recording',
    'youtube', 'tiktok', 'instagram', 'social video', 'short form', 'long form',
    'documentary', 'commercial', 'promotional', 'educational', 'tutorial'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Check if it's explicitly video-related
    const isVideoTool = isVideoRelatedTool(tool);
    
    // Keyword matching
    const keywordMatch = videoMultimediaKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('video') ||
      tool.category.toLowerCase().includes('multimedia') ||
      tool.category.toLowerCase().includes('film') ||
      tool.category.toLowerCase().includes('movie') ||
      tool.category.toLowerCase().includes('animation')
    );

    return isVideoTool || keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} video & multimedia tools`);
  return matchedTools;
};

export const getAudioVoiceTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎵 AUDIO & VOICE enhanced matching for: ${categoryName}`);
  
  const audioVoiceKeywords = [
    'audio', 'voice', 'sound', 'music', 'speech', 'podcast', 'radio',
    'recording', 'editing', 'mixing', 'mastering', 'synthesis', 'generation',
    'text-to-speech', 'speech-to-text', 'transcription', 'voice cloning',
    'voice over', 'narration', 'dubbing', 'ai voice', 'vocal', 'singing',
    'instrument', 'beat', 'melody', 'composition', 'production', 'studio'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = audioVoiceKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('audio') ||
      tool.category.toLowerCase().includes('voice') ||
      tool.category.toLowerCase().includes('sound') ||
      tool.category.toLowerCase().includes('music') ||
      tool.category.toLowerCase().includes('speech')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} audio & voice tools`);
  return matchedTools;
};

export const get3DVisualizationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🧊 3D & VISUALIZATION enhanced matching for: ${categoryName}`);
  
  const threeDVisualizationKeywords = [
    '3d', 'three dimensional', 'modeling', 'rendering', 'visualization',
    'virtual reality', 'vr', 'augmented reality', 'ar', 'mixed reality',
    'cad', 'architecture', 'engineering', 'simulation', 'animation',
    'geometry', 'mesh', 'texture', 'shader', 'lighting', 'material',
    'unity', 'unreal', 'blender', 'maya', 'cinema 4d', 'sketchup'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = threeDVisualizationKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('3d') ||
      tool.category.toLowerCase().includes('visualization') ||
      tool.category.toLowerCase().includes('modeling') ||
      tool.category.toLowerCase().includes('rendering') ||
      tool.category.toLowerCase().includes('virtual') ||
      tool.category.toLowerCase().includes('augmented')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} 3D & visualization tools`);
  return matchedTools;
};

export const getBusinessOperationsProductivityTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💼 BUSINESS OPERATIONS & PRODUCTIVITY enhanced matching for: ${categoryName}`);
  
  const businessProductivityKeywords = [
    'business', 'productivity', 'operations', 'management', 'enterprise',
    'workflow', 'process', 'efficiency', 'optimization', 'organization',
    'planning', 'scheduling', 'project', 'task', 'team', 'collaboration',
    'document', 'file', 'storage', 'backup', 'sync', 'sharing',
    'communication', 'meeting', 'calendar', 'appointment', 'reminder',
    'email', 'crm', 'erp', 'hr', 'finance', 'accounting', 'invoicing'
  ];

  const matchedTools = tools.filter(tool => {
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

  console.log(`✅ Found ${matchedTools.length} business operations & productivity tools`);
  return matchedTools;
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
  
  const automationKeywords = [
    'automation', 'workflow', 'process', 'task', 'scheduling', 'trigger',
    'integration', 'connector', 'zapier', 'ifttt', 'make', 'n8n', 'pipeline',
    'orchestration', 'robotic process', 'rpa', 'bot', 'agent', 'auto',
    'streamline', 'optimize', 'efficiency', 'productivity', 'business process'
  ];

  const matchedTools = tools.filter(tool => {
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
      tool.category.toLowerCase().includes('business')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} automation platform tools`);
  return matchedTools;
};

export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💬 AI CHAT & ASSISTANTS enhanced matching for: ${categoryName}`);
  
  const chatAssistantKeywords = [
    'chat', 'assistant', 'chatbot', 'conversational', 'dialogue', 'ai chat',
    'virtual assistant', 'digital assistant', 'voice assistant', 'companion',
    'helper', 'support bot', 'customer service', 'nlp', 'natural language',
    'gpt', 'claude', 'gemini', 'bard', 'watson', 'alexa', 'siri', 'cortana'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = chatAssistantKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('chat') ||
      tool.category.toLowerCase().includes('assistant') ||
      tool.category.toLowerCase().includes('conversational') ||
      tool.category.toLowerCase().includes('dialogue') ||
      tool.category.toLowerCase().includes('companion')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} AI chat & assistant tools`);
  return matchedTools;
};

export const getContentCreationWritingTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`✍️ CONTENT CREATION & WRITING enhanced matching for: ${categoryName}`);
  
  const contentWritingKeywords = [
    'writing', 'content', 'copywriting', 'blog', 'article', 'text', 'copy',
    'editor', 'grammar', 'proofreading', 'plagiarism', 'seo writing',
    'creative writing', 'technical writing', 'documentation', 'storytelling',
    'script', 'screenplay', 'novel', 'poetry', 'journalism', 'marketing copy',
    'social media content', 'email content', 'web content', 'content strategy'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = contentWritingKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('content') ||
      tool.category.toLowerCase().includes('writing') ||
      tool.category.toLowerCase().includes('copywriting') ||
      tool.category.toLowerCase().includes('text') ||
      tool.category.toLowerCase().includes('editor')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} content creation & writing tools`);
  return matchedTools;
};

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 IMAGE & DESIGN enhanced matching for: ${categoryName}`);
  
  const imageDesignKeywords = [
    'image', 'design', 'graphic', 'photo', 'picture', 'visual', 'art',
    'illustration', 'logo', 'branding', 'banner', 'poster', 'flyer',
    'editing', 'enhancement', 'filter', 'effect', 'retouching', 'manipulation',
    'generation', 'creation', 'ai art', 'stable diffusion', 'midjourney',
    'dalle', 'photoshop', 'canva', 'figma', 'sketch', 'adobe', 'gimp'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = imageDesignKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('image') ||
      tool.category.toLowerCase().includes('design') ||
      tool.category.toLowerCase().includes('graphic') ||
      tool.category.toLowerCase().includes('visual') ||
      tool.category.toLowerCase().includes('art') ||
      tool.category.toLowerCase().includes('photo')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} image & design tools`);
  return matchedTools;
};

export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📊 DATA & ANALYTICS enhanced matching for: ${categoryName}`);
  
  const dataAnalyticsKeywords = [
    'illuminous', 'world data', 'data research', 'data analysis', 'probability', 
    'askcsv', 'sweephy', 'compar', 'claude data', 'chatgpt data', 'gemini data',
    'tableau', 'power bi', 'datarobot', 'looker', 'qlik sense', 'finchat',
    'chaingpt', 'fact checker', 'person finder', 'property data', 'real estate',
    'perplexity', 'google notebook', 'analytics', 'intelligence', 'insights',
    'statistics', 'research', 'business intelligence', 'data science',
    'predictive analytics', 'data visualization', 'dashboard', 'reporting',
    'metrics', 'kpi', 'trend analysis', 'pattern recognition', 'forecasting',
    'machine learning analytics', 'ai analytics', 'big data', 'data mining',
    'data warehouse', 'olap', 'etl', 'data pipeline', 'real-time analytics'
  ];

  const dataToolNames = [
    'Illuminous World Data Explorer GPT', 'Data Research Analysis Report GPT', 
    'Probability GPT', 'AskCSV', 'Sweephy', 'Compar', 'Claude', 'ChatGPT', 
    'Gemini', 'Tableau', 'Power BI', 'DataRobot', 'Looker', 'Qlik Sense', 
    'FinChat.io', 'ChainGPT', 'FACT CHECKER GPT', 'Person Information Finder GPT',
    'Property Data Finder', 'Real Estate GPT', 'Perplexity', 'Google Notebook LM'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct name matching
    const nameMatch = dataToolNames.some(name => 
      tool.title?.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(tool.title?.toLowerCase() || '')
    );
    
    // Keyword matching
    const keywordMatch = dataAnalyticsKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('data') ||
      tool.category.toLowerCase().includes('analytics') ||
      tool.category.toLowerCase().includes('research') ||
      tool.category.toLowerCase().includes('intelligence') ||
      tool.category.toLowerCase().includes('insights') ||
      tool.category.toLowerCase().includes('statistics') ||
      tool.category.toLowerCase().includes('analysis')
    );

    return nameMatch || keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} data & analytics tools`);
  return matchedTools;
};

export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📈 MARKETING & SALES enhanced matching for: ${categoryName}`);
  
  const marketingSalesKeywords = [
    'salesflow', 'outranking', 'scalenut', 'surferseo', 'copyspace', 'printify',
    'mentum ai', 'sales handy', 'warmbox', 'stripo', 'shinefy', 'shineranker',
    'revealbot', 'keywordinsights', 'salesflare', 'markopolo', 'hypefury',
    'predis', 'ranked', 'meet alfred', 'diib', 'seobility', 'sender ai',
    'nitreo', 'kenji', 'flock social', 'kicksta', 'subpals', 'stormviews',
    'sonuker', 'confect', 'contentstudio', 'chatfuel', 'mediamister',
    'shopify magic', 'sonetel', 'keeper.ai', 'journeyplan', 'spoken.io',
    'aweber', 'mailrush', 'activecampaign', 'groupmail', 'benchmark email',
    'answerthepublic', 'sitechecker', 'webscrape', 'wp-rocket', 'similarcontent',
    'postaga', 'jvzoo', 'mailergpt', 'profitology', 'moosend', 'juice.ai',
    'luna', 'best regards', 'getresponse', 'regie.ai', 'folk', 'hunter.io',
    'contactout', 'directiq', 'marketing consultant', 'logo generator',
    'jasper', 'copy.ai', 'writesonic', 'mailchimp', 'hubspot', 'google analytics',
    'semrush', 'ahrefs', 'shopping gpt', 'marketing', 'sales', 'seo', 'email',
    'social media', 'advertising', 'lead generation', 'crm', 'automation',
    'engagement', 'conversion', 'analytics', 'growth', 'outreach', 'campaigns'
  ];

  const marketingToolNames = [
    'SalesFlow', 'Outranking', 'Scalenut', 'SurferSEO', 'CopySpace.ai', 'Printify',
    'Mentum AI', 'Sales Handy', 'WarmBox', 'STRIPO', 'Shinefy', 'ShineRanker',
    'Revealbot', 'KeywordInsights', 'SalesFlare', 'Markopolo AI', 'Hypefury',
    'Predis', 'Ranked', 'Meet Alfred', 'DIIB', 'SEObility', 'SENDER AI',
    'Nitreo', 'KENJI', 'FLOCK SOCIAL', 'Kicksta', 'Subpals', 'StormViews',
    'Sonuker', 'Confect.io', 'ContentStudio', 'Chatfuel', 'MediaMister',
    'Shopify Magic', 'Sonetel', 'Keeper.ai', 'JourneyPlan.co', 'Spoken.io',
    'AWEBER', 'MailRush.io', 'ActiveCampaign', 'GroupMail', 'Benchmark Email',
    'AnswerThePublic', 'SiteChecker AI', 'Webscrape AI', 'WP-Rocket', 'SimilarContent',
    'Postaga', 'JVZOO', 'MailerGPT', 'Profitology', 'MooSend', 'Juice.ai',
    'Luna', 'Best Regards', 'GetResponse', 'Regie.ai', 'FOLK', 'Hunter.io',
    'ContactOut', 'DirectIQ', 'Marketing Consultant GPT', 'LOGO AND AD GENERATOR GPT',
    'Jasper', 'Copy.ai', 'Writesonic', 'Mailchimp', 'HubSpot', 'Google Analytics',
    'SEMrush', 'Ahrefs', 'SHOPPING GPT'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct name matching
    const nameMatch = marketingToolNames.some(name => 
      tool.title?.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(tool.title?.toLowerCase() || '')
    );
    
    // Keyword matching
    const keywordMatch = marketingSalesKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('marketing') ||
      tool.category.toLowerCase().includes('sales') ||
      tool.category.toLowerCase().includes('seo') ||
      tool.category.toLowerCase().includes('social') ||
      tool.category.toLowerCase().includes('email') ||
      tool.category.toLowerCase().includes('advertising') ||
      tool.category.toLowerCase().includes('commerce') ||
      tool.category.toLowerCase().includes('lead') ||
      tool.category.toLowerCase().includes('crm')
    );

    return nameMatch || keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} marketing & sales tools`);
  return matchedTools;
};
