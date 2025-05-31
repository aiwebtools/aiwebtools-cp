import { Tool } from "@/types/tools";
import { isSimilarCategory } from "./normalization";

// Priority tools for AI Chat & Assistants category
const AI_CHAT_ASSISTANTS_PRIORITY_TOOLS = [
  'GODMODE GPT',
  'MULTITASKER GPT',
  'ENTER THE MATRIX GPT',
  'NEO👁️MATRIX GPT',
  'IF AI RULED THE WORLD',
  'Historical Figure Chat',
  'Personalized DR. GPT',
  'Doctor GPT',
  'Mental Wellness GPT',
  'Replika',
  'Character.AI',
  'Perplexity AI',
  'Monica AI',
  'Poe by Quora',
  'ChatMap',
  'Robotalk',
  'TALK TO THE GODS GPT',
  'Mary Magdalene GPT',
  'ALAN WATTS GPT',
  'Sophia Aeterna AI',
  'Custom GPT Ideas',
  'Brainstorming Assistant',
  'AI Tools Finder GPT',
  'Claude',
  'Hugging Face Chat',
  'BotSonic',
  'Mistral',
  'AI WEB TOOLS LLC',
  'Personal AI Assistant',
  'AI Chatbot Buddy',
  'AI Knowledge Navigator',
  'AI Task Automator',
  'AI Creative Spark',
  'AI Productivity Booster',
  'AI Language Tutor',
  'AI Smart Search',
  'AI Social Connector',
  'AI Wellness Coach',
  'AI Security Guardian',
  'YesChat.ai',
  'GPT4V Online',
  'GPT4ALL',
  'Grok',
  'Microsoft Copilot',
  'Gemini',
  'Bard',
  'Custom GPT Store',
  'Merlin AI',
  'POE',
  'ChattyCat',
  'ChatGPT',
  'Pi, Your Personal AI',
  'YouChat',
  'TALK TO HISTORY GPT',
  'Nikola Tesla GPT',
  'Albert Einstein GPT',
  'Personal Assistant GPT',
  'Communication Coach GPT',
  'AI Steve',
  'GPTGO.ai',
  'You.com',
  'Merlin',
  'Notebook LM'
];

// Priority tools for Content Creation & Writing category
const CONTENT_CREATION_WRITING_PRIORITY_TOOLS = [
  'BOOK WRITER GPT',
  'Movie Script Writer GPT',
  'PERFECT PROMPT ENGINE',
  'Clarity Omni',
  'Playwriter GPT',
  'Podcast Script Writer GPT',
  'MATERIAL VALUATION GPT',
  'Algebraic Expression Inventor GPT',
  'Article and Blog Rewriter GPT',
  'Children\'s Picture Book Maker GPT',
  'Game Design Document',
  'Developer GPT',
  'Training Manual Generator GPT',
  'Restaurant Menu Maker GPT',
  'Movie Scene Maker GPT',
  'Legal Draftsmith GPT',
  'Legislation Writer GPT',
  'Public Testimony Writer GPT',
  'SCREENPLAY WRITER GPT',
  'ParagraphAI',
  'Grammarly',
  'DeepL Write',
  'Wordtune',
  'QuillBot',
  'Hemingway Editor',
  'Jasper AI',
  'Copy.ai',
  'Writesonic',
  'Rytr',
  'ChatGPT Plus',
  'Claude Pro',
  'Notion AI',
  'Sudowrite',
  'Perplexity AI',
  'Lex',
  'Jenni AI',
  'Tome',
  'Gamma',
  'Otter.ai',
  'Descript',
  'AI Content Generator Pro',
  'Smart Text Editor',
  'Ebook Creator Suite',
  'Voice Content Creator',
  'Video Script Generator',
  'Visual Storytelling Platform',
  'Typography Designer',
  'Content Automation Engine',
  'Multilingual Content Creator',
  'ChatDOC',
  'Citation Machine',
  'DocLime',
  'Duplichecker',
  'Elicit',
  'Enhancv',
  'BooksAI.app',
  'JustCluck.com',
  'Elephas',
  'Simplified',
  'Spinrewriter',
  'Movie Maker Studio AI SUITE',
  'Prompt Box',
  'Theneo',
  'Typed',
  'MarkCopy',
  'ARTIRO',
  'Small PPT',
  'AIPRM',
  'ContentStudio'
];

// Special handling for Data & Analytics category
export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced Data Analytics tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    // Enhanced data analytics keywords
    const dataAnalyticsKeywords = [
      'data analytics', 'analytics', 'data analysis', 'business intelligence', 'bi',
      'dashboard', 'reporting', 'metrics', 'kpi', 'data visualization', 'charts',
      'graphs', 'statistics', 'data science', 'machine learning', 'predictive analytics',
      'tableau', 'power bi', 'powerbi', 'looker', 'qlik', 'spotfire', 'sisense',
      'data mining', 'big data', 'sql', 'database', 'warehouse', 'etl',
      'research', 'analysis', 'insight', 'intelligence', 'decision support',
      'performance analytics', 'web analytics', 'google analytics', 'adobe analytics'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "Data & Analytics") ||
                           isSimilarCategory(toolCategory, "Business Intelligence") ||
                           isSimilarCategory(toolCategory, "Analytics Tools");
    
    const keywordMatches = dataAnalyticsKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    const specificTools = [
      'tableau', 'power bi', 'powerbi', 'looker', 'qlik', 'spotfire', 'sisense',
      'google analytics', 'adobe analytics', 'mixpanel', 'amplitude', 'hotjar',
      'data research analysis report gpt', 'research report & data analysis ai',
      'illuminous world data explorer', 'predictive credit score checker'
    ].some(tool => allText.includes(tool));
    
    return categoryMatches || keywordMatches || specificTools;
  });
};

// Special handling for Marketing & Sales category
export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced Marketing & Sales tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    const marketingSalesKeywords = [
      'marketing', 'sales', 'crm', 'customer relationship', 'lead generation',
      'email marketing', 'social media marketing', 'digital marketing', 'seo',
      'sem', 'ppc', 'advertising', 'campaigns', 'conversion', 'funnel',
      'e-commerce', 'ecommerce', 'online store', 'shopping', 'retail',
      'salesforce', 'hubspot', 'mailchimp', 'constant contact', 'klaviyo',
      'facebook ads', 'google ads', 'linkedin ads', 'twitter ads',
      'content marketing', 'influencer marketing', 'affiliate marketing',
      'brand marketing', 'product marketing', 'growth marketing', 'performance marketing'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "Marketing & Sales") ||
                           isSimilarCategory(toolCategory, "E-commerce & Marketing") ||
                           isSimilarCategory(toolCategory, "Business & Sales");
    
    const keywordMatches = marketingSalesKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    return categoryMatches || keywordMatches;
  });
};

// Enhanced handling for Communication & Collaboration category
export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced Communication & Collaboration tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    const communicationKeywords = [
      'communication', 'collaboration', 'team', 'messaging', 'chat',
      'video call', 'video conference', 'meeting', 'webinar', 'presentation',
      'slack', 'microsoft teams', 'zoom', 'discord', 'telegram',
      'email', 'mail', 'newsletter', 'notification', 'alert',
      'project management', 'task management', 'workflow', 'coordination',
      'sharing', 'file sharing', 'document sharing', 'screen sharing',
      'remote work', 'distributed team', 'virtual team', 'online collaboration',
      'social media', 'social network', 'community', 'forum', 'discussion'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "Communication & Collaboration") ||
                           isSimilarCategory(toolCategory, "Communication & Entertainment") ||
                           isSimilarCategory(toolCategory, "Team Collaboration");
    
    const keywordMatches = communicationKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    return categoryMatches || keywordMatches;
  });
};

// Special handling for Automation Platforms category
export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced Automation Platforms tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    const automationKeywords = [
      'automation', 'workflow', 'process automation', 'task automation',
      'business automation', 'robotic process automation', 'rpa',
      'zapier', 'ifttt', 'microsoft power automate', 'integromat', 'make',
      'integration', 'api integration', 'webhook', 'trigger', 'action',
      'pipeline', 'data pipeline', 'ci/cd', 'continuous integration',
      'deployment automation', 'testing automation', 'monitoring automation',
      'scheduling', 'batch processing', 'background jobs', 'cron jobs',
      'orchestration', 'coordination', 'synchronization', 'optimization'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "Automation Platforms") ||
                           isSimilarCategory(toolCategory, "Automation & Workflows") ||
                           isSimilarCategory(toolCategory, "Process Automation");
    
    const keywordMatches = automationKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    return categoryMatches || keywordMatches;
  });
};

// Special handling for AI Chat & Assistants category
export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced AI Chat & Assistants tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    // Enhanced AI Chat & Assistants keywords based on the comprehensive list provided
    const aiChatAssistantKeywords = [
      // Core AI terms
      'ai chat', 'ai assistant', 'chatbot', 'virtual assistant', 'conversational ai',
      'chat platform', 'ai chatbot', 'intelligent assistant', 'digital assistant',
      'personal assistant', 'ai companion', 'smart assistant', 'voice assistant',
      
      // Specific AI models and platforms
      'chatgpt', 'gpt', 'claude', 'gemini', 'bard', 'copilot', 'perplexity',
      'character.ai', 'replika', 'poe', 'monica', 'merlin', 'hugging face',
      'mistral', 'grok', 'pi ai', 'youchat', 'notebook lm',
      
      // AI Web Tools GPTs (based on your list)
      'godmode gpt', 'multitasker gpt', 'matrix gpt', 'neo gpt', 'if ai ruled',
      'talk to the gods', 'mary magdalene gpt', 'alan watts gpt', 'sophia aeterna',
      'tesla gpt', 'einstein gpt', 'talk to history', 'historical figure',
      'doctor gpt', 'mental wellness gpt', 'communication coach',
      
      // Assistant functionalities
      'personal ai', 'ai helper', 'ai guide', 'ai advisor', 'ai consultant',
      'ai coach', 'ai tutor', 'ai mentor', 'ai trainer', 'ai teacher',
      'ai support', 'ai service', 'ai solution', 'question answering',
      'information retrieval', 'knowledge base', 'research assistant',
      
      // Interactive and persona-based
      'interactive ai', 'persona ai', 'character chat', 'historical chat',
      'celebrity chat', 'roleplay ai', 'simulation ai', 'virtual character',
      'ai personality', 'dialogue system', 'conversation ai',
      
      // Specialized assistants
      'brainstorming assistant', 'ideas assistant', 'creative assistant',
      'productivity assistant', 'task assistant', 'workflow assistant',
      'business assistant', 'professional assistant', 'expert assistant',
      
      // Chat and messaging
      'chat interface', 'messaging ai', 'text chat', 'voice chat',
      'chat experience', 'chat platform', 'chat service', 'chat tool',
      'communication ai', 'conversational interface', 'natural language'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "AI Chat & Assistants") ||
                           isSimilarCategory(toolCategory, "AI Assistants") ||
                           isSimilarCategory(toolCategory, "Chat Platforms") ||
                           isSimilarCategory(toolCategory, "Conversational AI") ||
                           isSimilarCategory(toolCategory, "Virtual Assistants") ||
                           isSimilarCategory(toolCategory, "AI Chat Platforms") ||
                           isSimilarCategory(toolCategory, "Interactive Characters") ||
                           isSimilarCategory(toolCategory, "AI Personalities") ||
                           isSimilarCategory(toolCategory, "Historical Figures") ||
                           isSimilarCategory(toolCategory, "Celebrity AI") ||
                           isSimilarCategory(toolCategory, "Spiritual & Philosophy Tools") ||
                           isSimilarCategory(toolCategory, "Health & Wellness AI Tools") ||
                           isSimilarCategory(toolCategory, "Communication & Entertainment") ||
                           isSimilarCategory(toolCategory, "Education & Learning Tools") ||
                           isSimilarCategory(toolCategory, "Business & Productivity Tools") ||
                           isSimilarCategory(toolCategory, "Search & Discovery Tools") ||
                           isSimilarCategory(toolCategory, "AI Development Tools") ||
                           isSimilarCategory(toolCategory, "Specialized AI Tools");
    
    const keywordMatches = aiChatAssistantKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    // Specific tool name matching for comprehensive coverage
    const specificAITools = [
      'godmode', 'multitasker', 'matrix', 'neo', 'if ai ruled the world',
      'talk to the gods', 'mary magdalene', 'alan watts', 'sophia aeterna',
      'tesla gpt', 'einstein gpt', 'talk to history', 'doctor gpt',
      'mental wellness', 'replika', 'character.ai', 'perplexity', 'monica',
      'poe by quora', 'chatmap', 'robotalk', 'custom gpt', 'ai tools finder',
      'claude', 'hugging face', 'botsonic', 'mistral', 'yeschat',
      'gpt4v', 'gpt4all', 'grok', 'copilot', 'gemini', 'bard', 'merlin',
      'chattyCat', 'pi your personal', 'youchat', 'gptgo', 'notebook lm'
    ].some(tool => allText.includes(tool));
    
    const isAIWebToolsGPT = tool.directUrl?.includes('lovable.app') || 
                           tool.directUrl?.includes('aiwebtools') ||
                           allText.includes('gpt') && allText.includes('ai');
    
    return categoryMatches || keywordMatches || specificAITools || isAIWebToolsGPT;
  });
};

// Special handling for Content Creation & Writing category
export const getContentCreationWritingTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced Content Creation & Writing tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    // Enhanced content creation and writing keywords based on your comprehensive list
    const contentWritingKeywords = [
      // Core writing terms
      'writing', 'content creation', 'content generation', 'text generation',
      'copywriting', 'creative writing', 'content writing', 'blog writing',
      'article writing', 'script writing', 'screenplay', 'book writing',
      
      // Specific content types
      'book writer', 'movie script', 'perfect prompt', 'clarity omni',
      'playwriter', 'podcast script', 'article rewriter', 'blog rewriter',
      'children\'s book', 'game design document', 'training manual',
      'restaurant menu', 'movie scene', 'legal draft', 'legislation',
      'public testimony', 'screenplay writer',
      
      // Writing tools and platforms
      'grammarly', 'deepl write', 'wordtune', 'quillbot', 'hemingway',
      'jasper ai', 'copy.ai', 'writesonic', 'rytr', 'sudowrite',
      'jenni ai', 'lex', 'tome', 'gamma', 'otter.ai', 'descript',
      
      // Content categories
      'content generator', 'text editor', 'ebook creator', 'voice content',
      'video script', 'visual storytelling', 'typography', 'content automation',
      'multilingual content', 'chatdoc', 'citation', 'docuime', 'enhancv',
      'elephas', 'simplified', 'spinrewriter', 'prompt box', 'theneo',
      'markco py', 'artiro', 'aiprm', 'contentstudio',
      
      // Writing assistance
      'grammar', 'editing', 'proofreading', 'translation', 'rewriting',
      'paraphrasing', 'summarization', 'enhancement', 'optimization',
      'plagiarism', 'citation', 'research', 'fact checking',
      
      // Document types
      'document', 'report', 'proposal', 'presentation', 'newsletter',
      'email', 'social media', 'marketing copy', 'ad copy', 'seo',
      'technical writing', 'academic writing', 'business writing',
      
      // Creative content
      'storytelling', 'narrative', 'plot', 'character', 'dialogue',
      'story structure', 'creative expression', 'literary', 'poetry',
      'fiction', 'non-fiction', 'memoir', 'biography', 'autobiography'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "Content Creation & Writing") ||
                           isSimilarCategory(toolCategory, "Writing & Content") ||
                           isSimilarCategory(toolCategory, "Content Creation Tools") ||
                           isSimilarCategory(toolCategory, "Writing Assistants") ||
                           isSimilarCategory(toolCategory, "Creative Writing Tools") ||
                           isSimilarCategory(toolCategory, "Grammar & Writing Assistants") ||
                           isSimilarCategory(toolCategory, "AI Content Generators") ||
                           isSimilarCategory(toolCategory, "Writing And Content") ||
                           isSimilarCategory(toolCategory, "Content Creation And Writing Tools") ||
                           isSimilarCategory(toolCategory, "Writing And Content Enhancement") ||
                           isSimilarCategory(toolCategory, "Content Detection Tools") ||
                           isSimilarCategory(toolCategory, "AI Generative Tools");
    
    const keywordMatches = contentWritingKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    // Specific tool name matching
    const specificWritingTools = [
      'book writer gpt', 'movie script writer', 'perfect prompt engine',
      'clarity omni', 'playwriter gpt', 'podcast script writer',
      'algebraic expression inventor', 'article and blog rewriter',
      'children\'s picture book maker', 'game design document',
      'training manual generator', 'restaurant menu maker',
      'movie scene maker', 'legal draftsmith', 'legislation writer',
      'public testimony writer', 'screenplay writer'
    ].some(tool => allText.includes(tool));
    
    return categoryMatches || keywordMatches || specificWritingTools;
  });
};

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Enhanced Image & Design tool matching for category: "${categoryName}"`);
  
  return tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    const toolCategory = tool.category?.toLowerCase() || '';
    const toolTitle = tool.title?.toLowerCase() || '';
    const toolDescription = tool.description?.toLowerCase() || '';
    const toolTags = tool.tags?.join(' ').toLowerCase() || '';
    
    const allText = `${toolCategory} ${toolTitle} ${toolDescription} ${toolTags}`.toLowerCase();
    
    // Comprehensive image and design keywords based on your extensive list
    const imageDesignKeywords = [
      // Core image generation
      'image generation', 'ai image', 'ai art', 'image generator', 'art generator',
      'visual generation', 'picture generation', 'graphic generation', 'design generation',
      'dall-e', 'dall e', 'midjourney', 'stable diffusion', 'leonardo', 'ideogram',
      'runwayml', 'dreamstudio', 'krea', 'clipdrop', 'tensor.art', 'neural.love',
      
      // AI art platforms
      'gpt-4o image', 'midjourney prompt', 'flux ai', 'firefly', 'photoshop ai',
      'canva ai', 'jasper art', 'deepai', 'nightcafe', 'fotor', 'perplexity image',
      'bluewillow', 'lexica', 'hotpot', 'freepik ai', 'wombo dream', 'starryai',
      'picso', 'imgcreator', 'craiyon', 'dezgo', 'recraft', 'pika labs',
      'scenario ai', 'generated photos', 'playground ai', 'getimg', 'artbreeder',
      
      // Image editing and enhancement
      'magic eraser', 'palette.fm', 'removal.ai', 'upscale.media', 'vectorizer.ai',
      'colorize.cc', 'letsenhance', 'pixlr', 'picwish', 'imglarger', 'deep-image',
      'diffusionbee', 'lensa', 'cutout.pro', 'fylm.ai', 'media.io', 'upscayl',
      'vanceai', 'image colorizer', 'restorephotos', 'leiapix converter', 'picwonderful',
      'photoroom', 'krita ai diffusion', 'magnific ai', 'artistly', 'imagegen3',
      
      // Design tools and platforms
      'sketch artist', 'color palette generator', 'ai image upscaler', 'meme generator',
      'tattoo design', 'avatar generator', 'fashion design', 'interior design',
      'real estate architect', 'photo filter', 'fashion model generator',
      'graphic design', 'cover design', 'children\'s picture book', 'coloring book',
      'creative logo', 'logo generator', 'commercial scene', 'movie trailer poster',
      
      // Professional design software
      'canva', 'adobe photoshop', 'adobe illustrator', 'figma', 'sketch app',
      'gimp', 'coreldraw', 'ai art qr', 'tldraw', 'omagic', 'banani ui',
      'formia', 'uiverse', 'anieraser', 'google whisk', 'image fx', 'flair.ai',
      'exactly.ai', 'seelab.ai', 'uizard', 'logoai', 'cre8tiveai', 'misgif',
      'stickerbaker', 'ai ease', 'molypix', 'anime generator', 'text2infographic',
      'napkin ai', 'creatopy',
      
      // Image processing and manipulation
      'image editing', 'photo editing', 'image enhancement', 'image upscaling',
      'background removal', 'object removal', 'watermark removal', 'image restoration',
      'image colorization', 'image conversion', 'image compression', 'image optimization',
      'image filtering', 'image effects', 'image transformation', 'face generation',
      'face editing', 'face enhancement', 'portrait generation', 'human generation',
      
      // Design categories
      'graphic design', 'visual design', 'creative design', 'logo design',
      'brand design', 'web design', 'ui design', 'ux design', 'print design',
      'digital design', 'layout design', 'typography', 'color design',
      'illustration', 'drawing', 'painting', 'sketch', 'art creation',
      'visual art', 'digital art', 'creative art', 'artistic creation',
      
      // Specialized design areas
      'product photography', 'fashion photography', 'architectural visualization',
      'interior visualization', 'product visualization', 'concept art',
      'character design', 'avatar creation', 'meme creation', 'social media graphics',
      'marketing graphics', 'presentation graphics', 'infographic', 'data visualization',
      
      // 3D and advanced graphics
      '3d design', '3d modeling', '3d rendering', '3d visualization', '3d art',
      '3d graphics', 'metahuman', 'digital humans', 'virtual characters',
      '3dfy.ai', 'neural radiance fields', 'photogrammetry', 'volumetric capture',
      
      // Creative and artistic terms
      'creative tools', 'artistic tools', 'visual tools', 'design tools',
      'image tools', 'photo tools', 'graphics tools', 'art tools',
      'creative platform', 'design platform', 'art platform', 'visual platform',
      'creative software', 'design software', 'art software', 'graphics software'
    ];
    
    const categoryMatches = isSimilarCategory(toolCategory, categoryName) ||
                           isSimilarCategory(toolCategory, "Image & Design") ||
                           isSimilarCategory(toolCategory, "AI Art Tools") ||
                           isSimilarCategory(toolCategory, "AI Image Generation") ||
                           isSimilarCategory(toolCategory, "Image Generation Platforms") ||
                           isSimilarCategory(toolCategory, "Design & Graphics Tools") ||
                           isSimilarCategory(toolCategory, "Creative Design Tools") ||
                           isSimilarCategory(toolCategory, "Image Editing Tools") ||
                           isSimilarCategory(toolCategory, "Specialized Image Tools") ||
                           isSimilarCategory(toolCategory, "Background & Object Tools") ||
                           isSimilarCategory(toolCategory, "Core Image Generators") ||
                           isSimilarCategory(toolCategory, "Design And Graphics Tools") ||
                           isSimilarCategory(toolCategory, "Design Assistant Tools") ||
                           isSimilarCategory(toolCategory, "Creative & Media Tools") ||
                           isSimilarCategory(toolCategory, "Creative & Media") ||
                           isSimilarCategory(toolCategory, "Multimedia & Content") ||
                           isSimilarCategory(toolCategory, "Art & Design") ||
                           isSimilarCategory(toolCategory, "Visual Design") ||
                           isSimilarCategory(toolCategory, "Digital Art") ||
                           isSimilarCategory(toolCategory, "Creative AI");
    
    const keywordMatches = imageDesignKeywords.some(keyword => 
      allText.includes(keyword)
    );
    
    // Specific tool name matching for comprehensive coverage
    const specificImageDesignTools = [
      'gpt-4o image generation', 'magic eraser', 'palette.fm', 'middlejourney',
      'midjourney prompting assistant', 'sketch artist gpt', 'product photography',
      'color palette generator', 'ai image upscaler', 'meme generator',
      'tattoo design gpt', 'avatar generator', 'fashion design assistant',
      'interior design gpt', 'real estate architect', 'photo filter',
      'fashion model generator', 'graphic & cover design', 'children\'s picture book',
      'coloring book generator', 'creative logo assistant', 'logo generator',
      'commercial scene image generator', 'movie trailer poster maker'
    ].some(tool => allText.includes(tool));
    
    const isAIWebToolsImageGPT = (tool.directUrl?.includes('lovable.app') || 
                                 tool.directUrl?.includes('aiwebtools')) &&
                                (allText.includes('image') || allText.includes('design') || 
                                 allText.includes('art') || allText.includes('graphic') ||
                                 allText.includes('visual') || allText.includes('photo') ||
                                 allText.includes('creative') || allText.includes('logo') ||
                                 allText.includes('palette') || allText.includes('sketch'));
    
    return categoryMatches || keywordMatches || specificImageDesignTools || isAIWebToolsImageGPT;
  });
};

export const getVideoMultimediaTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎬 Enhanced video & multimedia matching for: "${categoryName}"`);
  
  // Video & multimedia keywords for content analysis
  const videoKeywords = [
    // Core video terms
    'video', 'movie', 'film', 'cinema', 'multimedia', 'animation', 'motion',
    // Video creation & editing
    'video creation', 'video editing', 'video generation', 'video production',
    'video maker', 'video studio', 'video suite', 'video platform',
    // Animation terms
    'animation', 'animated', 'avatar', 'character', 'motion graphics',
    // Specific video technologies
    'text-to-video', 'image-to-video', 'ai video', 'video ai',
    // Video types
    'music video', 'explainer video', 'training video', 'marketing video',
    'educational video', 'promotional video', 'demo video',
    // Video tools & features
    'video editor', 'video effects', 'video enhancement', 'video optimization',
    'video streaming', 'video hosting', 'video sharing',
    // Performance & stage
    'performing arts', 'stage', 'theater', 'performance', 'show production',
    // Specific tool names from the list
    'sora', 'luma', 'kling', 'pika', 'runway', 'synthesia', 'heygen',
    'invideo', 'pictory', 'descript', 'kapwing', 'filmora', 'opus',
    'colossyan', 'vyond', 'lumen5', 'fliki', 'animoto', 'veed',
    'movie maker', 'music video maker', 'stagemaster'
  ];
  
  // Enhanced category matching
  const matchingTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const searchText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct category match
    if (tool.category && isSimilarCategory(tool.category, categoryName)) {
      return true;
    }
    
    // Check for video-related categories
    if (tool.category) {
      const category = tool.category.toLowerCase();
      if (category.includes('video') || 
          category.includes('multimedia') || 
          category.includes('animation') ||
          category.includes('film') ||
          category.includes('movie') ||
          category.includes('cinema') ||
          category.includes('creative') ||
          category.includes('entertainment') ||
          category.includes('media') ||
          category.includes('content creation')) {
        return true;
      }
    }
    
    // Content-based matching using video keywords
    const hasVideoKeyword = videoKeywords.some(keyword => 
      searchText.includes(keyword.toLowerCase())
    );
    
    // Check for video URLs
    const hasVideoUrl = tool.videoUrl && tool.videoUrl.trim() !== '';
    
    // Specific tool name matching for the tools in the user's list
    const specificToolNames = [
      'movie maker studio', 'music video maker', 'stagemaster', 'heygen',
      'syllaby', 'tolstoy', 'rask', 'hippo video', 'submagic', 'renderlion',
      'timebolt', 'sora', 'minimax', 'kling', 'luma dream machine', 'google veo',
      'pixverse', 'pika labs', 'stable video', 'genmo', 'invideo', 'steve ai',
      'bhuman', 'descript', 'kapwing', 'filmora', 'opus clip', 'vidyo',
      'munch', 'vadoo', 'synthesia', 'colossyan', 'clipchamp', 'deepbrain',
      'vyond', 'rephrase', 'lumen5', 'hour one', 'tavus', 'pictory',
      'fliki', 'elai', 'animoto', 'wideo', 'visla', 'chat d-id',
      'guidde', 'podcastle', 'myheritage', 'livereacting', 'you-tldr',
      'video2recipe', 'outfitsai', 'veed', 'oxolo', 'waymark', 'kaiber',
      'cloudinary', 'jitter', 'flexclip', 'moonvalley', 'hiber3d',
      'creatify', 'ai comic factory', 'meshy', 'videoleap', 'umu ai',
      'bigvu', 'ghostcut', 'vcat ai', 'runway', 'd-id', 'gling',
      'pollo ai', 'aivideo', '2short', 'vozo ai', 'velocity', 'infinity ai',
      'skyreels', 'topview ai', 'topaz video', 'deepmotion', 'windsor'
    ];
    
    const hasSpecificToolName = specificToolNames.some(toolName => 
      searchText.includes(toolName)
    );
    
    return hasVideoKeyword || hasVideoUrl || hasSpecificToolName;
  });
  
  console.log(`🎬 Found ${matchingTools.length} video & multimedia tools`);
  console.log(`🎥 Sample tools:`, matchingTools.slice(0, 10).map(t => ({ title: t.title, category: t.category })));
  
  return matchingTools;
};
