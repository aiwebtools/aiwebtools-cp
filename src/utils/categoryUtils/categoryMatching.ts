import { Tool } from "@/types/tools";
import { isSimilarCategory } from "./normalization";
import { DATA_ANALYTICS_PRIORITY_TOOLS, MARKETING_SALES_PRIORITY_TOOLS } from "./constants";

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
  console.log(`🔍 Getting data analytics tools for category: "${categoryName}"`);
  
  // Get tools that match the direct category - including all variations
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Data & Analytics Tools") ||
      isSimilarCategory(tool.category, "DATA & ANALYTICS AI TOOLS") ||
      isSimilarCategory(tool.category, "Data Analytics Tools") ||
      isSimilarCategory(tool.category, "Data Science & Analytics") ||
      isSimilarCategory(tool.category, "Business Intelligence") ||
      isSimilarCategory(tool.category, "Analytics & Insights") ||
      isSimilarCategory(tool.category, "Data & Analytics") ||
      isSimilarCategory(tool.category, "Business & Analytics") ||
      isSimilarCategory(tool.category, "Research & Analytics") ||
      isSimilarCategory(tool.category, "Statistical Analysis Tools") ||
      isSimilarCategory(tool.category, "Data Visualization Tools") ||
      isSimilarCategory(tool.category, "Predictive Analytics Tools")
    )
  );
  
  // Also include tools by title/description matching for key analytics tools
  const priorityTools = tools.filter(tool => 
    DATA_ANALYTICS_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase())
    ) ||
    tool.description.toLowerCase().includes('data analysis') ||
    tool.description.toLowerCase().includes('analytics') ||
    tool.description.toLowerCase().includes('statistical analysis') ||
    tool.description.toLowerCase().includes('data visualization') ||
    tool.description.toLowerCase().includes('business intelligence') ||
    tool.description.toLowerCase().includes('predictive modeling') ||
    tool.description.toLowerCase().includes('research analysis') ||
    (tool.title.toLowerCase() === 'claude' && tool.description.toLowerCase().includes('analytical')) ||
    (tool.title.toLowerCase() === 'chatgpt' && tool.description.toLowerCase().includes('data')) ||
    (tool.title.toLowerCase() === 'gemini' && tool.description.toLowerCase().includes('analysis'))
  );
  
  const allTools = [...directCategoryTools, ...priorityTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`🔍 Data Analytics Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    priorityTools: priorityTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 10).map(t => `${t.title} (${t.category})`)
  });
  
  return uniqueTools;
};

// Special handling for Marketing & Sales category
export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Marketing & Analytics") ||
      isSimilarCategory(tool.category, "E-commerce & Marketing Tools") ||
      isSimilarCategory(tool.category, "Business & Sales Tools") ||
      isSimilarCategory(tool.category, "MARKETING & SALES AI TOOLS") ||
      isSimilarCategory(tool.category, "Marketing Tools") ||
      isSimilarCategory(tool.category, "Marketing Sales Tools")
    )
  );
  
  const priorityTools = tools.filter(tool => 
    MARKETING_SALES_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase())
    )
  );
  
  const allTools = [...directCategoryTools, ...priorityTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  return uniqueTools;
};

// Enhanced handling for Communication & Collaboration category
export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Communication & Entertainment") ||
      isSimilarCategory(tool.category, "Communication Tools") ||
      isSimilarCategory(tool.category, "COMMUNICATION & COLLABORATION AI TOOLS") ||
      isSimilarCategory(tool.category, "Collaboration Tools") ||
      isSimilarCategory(tool.category, "Entertainment Tools")
    )
  );
  
  return directCategoryTools;
};

// Special handling for Automation Platforms category
export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🤖 Getting automation platform tools for category: "${categoryName}"`);
  
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Automation Platforms") ||
      isSimilarCategory(tool.category, "Automation & Workflows") ||
      isSimilarCategory(tool.category, "Automation & Workflow Tools") ||
      isSimilarCategory(tool.category, "Workflow Tools") ||
      isSimilarCategory(tool.category, "Process Automation") ||
      isSimilarCategory(tool.category, "Business Process Automation") ||
      isSimilarCategory(tool.category, "Workflow Automation") ||
      isSimilarCategory(tool.category, "Task Automation") ||
      isSimilarCategory(tool.category, "AI Automation") ||
      isSimilarCategory(tool.category, "Business & Productivity") ||
      isSimilarCategory(tool.category, "Business Tools") ||
      isSimilarCategory(tool.category, "Productivity & Utilities") ||
      isSimilarCategory(tool.category, "Utilities Tools") ||
      isSimilarCategory(tool.category, "AI Productivity Tools") ||
      isSimilarCategory(tool.category, "Utilities & Productivity") ||
      isSimilarCategory(tool.category, "Business Operations & Productivity") ||
      isSimilarCategory(tool.category, "Email Management Tools") ||
      isSimilarCategory(tool.category, "Meeting & Transcription Tools") ||
      isSimilarCategory(tool.category, "Productivity & Automation Tools") ||
      isSimilarCategory(tool.category, "Business & Team Tools") ||
      isSimilarCategory(tool.category, "Collaboration Tools") ||
      isSimilarCategory(tool.category, "Communication & Collaboration") ||
      isSimilarCategory(tool.category, "Technical & Utility Tools") ||
      isSimilarCategory(tool.category, "Search & Productivity Tools") ||
      isSimilarCategory(tool.category, "Developer & Coding Tools") ||
      isSimilarCategory(tool.category, "Web Development Tools") ||
      isSimilarCategory(tool.category, "AI Tools & Utilities") ||
      isSimilarCategory(tool.category, "Comprehensive AI Tools")
    )
  );
  
  // Also include tools by description matching for automation-related tools
  const automationKeywordTools = tools.filter(tool => 
    tool.description.toLowerCase().includes('automation') ||
    tool.description.toLowerCase().includes('workflow') ||
    tool.description.toLowerCase().includes('automate') ||
    tool.description.toLowerCase().includes('productivity') ||
    tool.description.toLowerCase().includes('integrate') ||
    tool.description.toLowerCase().includes('zapier') ||
    tool.description.toLowerCase().includes('webhook') ||
    tool.description.toLowerCase().includes('api integration') ||
    tool.description.toLowerCase().includes('no-code') ||
    tool.description.toLowerCase().includes('low-code') ||
    tool.description.toLowerCase().includes('business process') ||
    tool.description.toLowerCase().includes('task management') ||
    tool.description.toLowerCase().includes('scheduling') ||
    tool.description.toLowerCase().includes('pipeline') ||
    tool.description.toLowerCase().includes('connector') ||
    tool.title.toLowerCase().includes('zapier') ||
    tool.title.toLowerCase().includes('make') ||
    tool.title.toLowerCase().includes('integromat') ||
    tool.title.toLowerCase().includes('automate') ||
    tool.title.toLowerCase().includes('workflow') ||
    tool.title.toLowerCase().includes('ifttt') ||
    tool.title.toLowerCase().includes('n8n') ||
    tool.title.toLowerCase().includes('power automate')
  );
  
  const allTools = [...directCategoryTools, ...automationKeywordTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`🤖 Automation Platform Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    automationKeywordTools: automationKeywordTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 15).map(t => `${t.title} (${t.category})`)
  });
  
  return uniqueTools;
};

// Special handling for AI Chat & Assistants category
export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💬 Getting AI Chat & Assistants tools for category: "${categoryName}"`);
  
  // Get tools that match the direct category - including all variations
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "AI Chat & Assistants") ||
      isSimilarCategory(tool.category, "AI CHAT & ASSISTANTS") ||
      isSimilarCategory(tool.category, "AI Chat Platforms") ||
      isSimilarCategory(tool.category, "AI Assistants") ||
      isSimilarCategory(tool.category, "Advanced Chat Platforms") ||
      isSimilarCategory(tool.category, "AI Agents") ||
      isSimilarCategory(tool.category, "Conversational AI") ||
      isSimilarCategory(tool.category, "Advanced AI Tools") ||
      isSimilarCategory(tool.category, "AI Assistants & Search") ||
      isSimilarCategory(tool.category, "ChatBots") ||
      isSimilarCategory(tool.category, "Virtual Assistants") ||
      isSimilarCategory(tool.category, "Personal AI") ||
      isSimilarCategory(tool.category, "AI Companions") ||
      isSimilarCategory(tool.category, "Smart Assistants") ||
      isSimilarCategory(tool.category, "Digital Assistants") ||
      isSimilarCategory(tool.category, "Voice Assistants") ||
      isSimilarCategory(tool.category, "Health & Wellness AI Tools") ||
      isSimilarCategory(tool.category, "Communication & Entertainment") ||
      isSimilarCategory(tool.category, "Communication Tools") ||
      isSimilarCategory(tool.category, "Spiritual & Philosophy Tools") ||
      isSimilarCategory(tool.category, "Historical Tools") ||
      isSimilarCategory(tool.category, "Education & Learning Tools") ||
      isSimilarCategory(tool.category, "Entertainment & Gaming Tools") ||
      isSimilarCategory(tool.category, "Creative & Media Tools") ||
      isSimilarCategory(tool.category, "Business & Productivity Tools") ||
      isSimilarCategory(tool.category, "Search & Discovery Tools") ||
      isSimilarCategory(tool.category, "Content Creation Tools") ||
      isSimilarCategory(tool.category, "AI Development Tools") ||
      isSimilarCategory(tool.category, "Specialized AI Tools") ||
      isSimilarCategory(tool.category, "Medical AI Tools") ||
      isSimilarCategory(tool.category, "Educational AI Tools")
    )
  );
  
  // Also include tools by title matching for priority chat & assistant tools
  const priorityTools = tools.filter(tool => 
    AI_CHAT_ASSISTANTS_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase())
    ) ||
    tool.description.toLowerCase().includes('chat') ||
    tool.description.toLowerCase().includes('assistant') ||
    tool.description.toLowerCase().includes('conversational') ||
    tool.description.toLowerCase().includes('ai companion') ||
    tool.description.toLowerCase().includes('virtual assistant') ||
    tool.description.toLowerCase().includes('chatbot') ||
    tool.description.toLowerCase().includes('personal ai') ||
    tool.description.toLowerCase().includes('ai helper') ||
    tool.description.toLowerCase().includes('talk to') ||
    tool.description.toLowerCase().includes('interactive') ||
    tool.description.toLowerCase().includes('persona') ||
    tool.description.toLowerCase().includes('character ai') ||
    tool.description.toLowerCase().includes('ai simulation') ||
    tool.description.toLowerCase().includes('brainstorming') ||
    tool.description.toLowerCase().includes('consultation') ||
    tool.description.toLowerCase().includes('guidance') ||
    tool.description.toLowerCase().includes('advisory')
  );
  
  const allTools = [...directCategoryTools, ...priorityTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`💬 AI Chat & Assistants Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    priorityTools: priorityTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 15).map(t => `${t.title} (${t.category})`)
  });
  
  return uniqueTools;
};

// Special handling for Content Creation & Writing category
export const getContentCreationWritingTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`✍️ Getting Content Creation & Writing tools for category: "${categoryName}"`);
  
  // Get tools that match the direct category - including all variations
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "CONTENT CREATION & WRITING") ||
      isSimilarCategory(tool.category, "Content Creation & Writing Tools") ||
      isSimilarCategory(tool.category, "Writing & Content") ||
      isSimilarCategory(tool.category, "Content Creation Tools") ||
      isSimilarCategory(tool.category, "Writing Assistants") ||
      isSimilarCategory(tool.category, "Creative Writing Tools") ||
      isSimilarCategory(tool.category, "Grammar & Writing Assistants") ||
      isSimilarCategory(tool.category, "Writing And Content") ||
      isSimilarCategory(tool.category, "Content Creation And Writing Tools") ||
      isSimilarCategory(tool.category, "Writing And Content Enhancement") ||
      isSimilarCategory(tool.category, "AI Content Generators") ||
      isSimilarCategory(tool.category, "AI Generative Tools") ||
      isSimilarCategory(tool.category, "Text Generation") ||
      isSimilarCategory(tool.category, "Content Generation") ||
      isSimilarCategory(tool.category, "Writing Tools") ||
      isSimilarCategory(tool.category, "Creative Writing") ||
      isSimilarCategory(tool.category, "Script Writing") ||
      isSimilarCategory(tool.category, "Book Writing") ||
      isSimilarCategory(tool.category, "Blog Writing") ||
      isSimilarCategory(tool.category, "Article Writing") ||
      isSimilarCategory(tool.category, "Copywriting") ||
      isSimilarCategory(tool.category, "Technical Writing") ||
      isSimilarCategory(tool.category, "Academic Writing") ||
      isSimilarCategory(tool.category, "Business Writing") ||
      isSimilarCategory(tool.category, "Legal Writing") ||
      isSimilarCategory(tool.category, "Medical Writing") ||
      isSimilarCategory(tool.category, "Content Marketing") ||
      isSimilarCategory(tool.category, "SEO Writing") ||
      isSimilarCategory(tool.category, "Social Media Content") ||
      isSimilarCategory(tool.category, "Email Writing") ||
      isSimilarCategory(tool.category, "Newsletter Tools") ||
      isSimilarCategory(tool.category, "Publishing Tools") ||
      isSimilarCategory(tool.category, "Document Creation") ||
      isSimilarCategory(tool.category, "Report Writing") ||
      isSimilarCategory(tool.category, "Proposal Writing") ||
      isSimilarCategory(tool.category, "Grant Writing") ||
      isSimilarCategory(tool.category, "Presentation Tools") ||
      isSimilarCategory(tool.category, "Storytelling Tools") ||
      isSimilarCategory(tool.category, "Narrative Tools") ||
      isSimilarCategory(tool.category, "Creative Content") ||
      isSimilarCategory(tool.category, "Content Automation") ||
      isSimilarCategory(tool.category, "Content Management") ||
      isSimilarCategory(tool.category, "Editing Tools") ||
      isSimilarCategory(tool.category, "Proofreading Tools") ||
      isSimilarCategory(tool.category, "Writing Enhancement") ||
      isSimilarCategory(tool.category, "Language Tools") ||
      isSimilarCategory(tool.category, "Translation Tools") ||
      isSimilarCategory(tool.category, "Content Analysis") ||
      isSimilarCategory(tool.category, "Writing Analytics") ||
      isSimilarCategory(tool.category, "Content Research") ||
      isSimilarCategory(tool.category, "Fact Checking") ||
      isSimilarCategory(tool.category, "Content Curation") ||
      isSimilarCategory(tool.category, "Content Strategy") ||
      isSimilarCategory(tool.category, "Content Planning") ||
      isSimilarCategory(tool.category, "Content Optimization") ||
      isSimilarCategory(tool.category, "Writing Productivity") ||
      isSimilarCategory(tool.category, "Writing Workflow") ||
      isSimilarCategory(tool.category, "Collaborative Writing") ||
      isSimilarCategory(tool.category, "Team Writing") ||
      isSimilarCategory(tool.category, "Writing Project Management") ||
      isSimilarCategory(tool.category, "Writing Templates") ||
      isSimilarCategory(tool.category, "Writing Prompts") ||
      isSimilarCategory(tool.category, "Creative Prompts") ||
      isSimilarCategory(tool.category, "Story Prompts") ||
      isSimilarCategory(tool.category, "Writing Inspiration") ||
      isSimilarCategory(tool.category, "Writing Ideas") ||
      isSimilarCategory(tool.category, "Content Ideas") ||
      isSimilarCategory(tool.category, "Topic Generation") ||
      isSimilarCategory(tool.category, "Headline Generation") ||
      isSimilarCategory(tool.category, "Title Generation") ||
      isSimilarCategory(tool.category, "Screenplay Writing") ||
      isSimilarCategory(tool.category, "Scriptwriting Tools") ||
      isSimilarCategory(tool.category, "Legal Document Writing") ||
      isSimilarCategory(tool.category, "Legislative Writing") ||
      isSimilarCategory(tool.category, "Public Speaking Writing") ||
      isSimilarCategory(tool.category, "Testimony Writing") ||
      isSimilarCategory(tool.category, "Menu Creation") ||
      isSimilarCategory(tool.category, "Game Documentation") ||
      isSimilarCategory(tool.category, "Training Materials") ||
      isSimilarCategory(tool.category, "Manual Creation") ||
      isSimilarCategory(tool.category, "Scene Writing") ||
      isSimilarCategory(tool.category, "Character Development") ||
      isSimilarCategory(tool.category, "Dialogue Writing") ||
      isSimilarCategory(tool.category, "Plot Development") ||
      isSimilarCategory(tool.category, "Story Structure") ||
      isSimilarCategory(tool.category, "Narrative Design")
    )
  );
  
  // Also include tools by title matching for priority content creation & writing tools
  const priorityTools = tools.filter(tool => 
    CONTENT_CREATION_WRITING_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase())
    ) ||
    tool.description.toLowerCase().includes('writing') ||
    tool.description.toLowerCase().includes('content creation') ||
    tool.description.toLowerCase().includes('text generation') ||
    tool.description.toLowerCase().includes('copywriting') ||
    tool.description.toLowerCase().includes('scriptwriting') ||
    tool.description.toLowerCase().includes('book writing') ||
    tool.description.toLowerCase().includes('blog writing') ||
    tool.description.toLowerCase().includes('article writing') ||
    tool.description.toLowerCase().includes('grammar') ||
    tool.description.toLowerCase().includes('proofreading') ||
    tool.description.toLowerCase().includes('editing') ||
    tool.description.toLowerCase().includes('storytelling') ||
    tool.description.toLowerCase().includes('creative writing') ||
    tool.description.toLowerCase().includes('technical writing') ||
    tool.description.toLowerCase().includes('academic writing') ||
    tool.description.toLowerCase().includes('business writing') ||
    tool.description.toLowerCase().includes('legal writing') ||
    tool.description.toLowerCase().includes('medical writing') ||
    tool.description.toLowerCase().includes('content marketing') ||
    tool.description.toLowerCase().includes('seo writing') ||
    tool.description.toLowerCase().includes('social media content') ||
    tool.description.toLowerCase().includes('email writing') ||
    tool.description.toLowerCase().includes('newsletter') ||
    tool.description.toLowerCase().includes('document creation') ||
    tool.description.toLowerCase().includes('report writing') ||
    tool.description.toLowerCase().includes('proposal writing') ||
    tool.description.toLowerCase().includes('grant writing') ||
    tool.description.toLowerCase().includes('screenplay') ||
    tool.description.toLowerCase().includes('script') ||
    tool.description.toLowerCase().includes('dialogue') ||
    tool.description.toLowerCase().includes('character development') ||
    tool.description.toLowerCase().includes('plot') ||
    tool.description.toLowerCase().includes('narrative') ||
    tool.description.toLowerCase().includes('story') ||
    tool.description.toLowerCase().includes('author') ||
    tool.description.toLowerCase().includes('publisher') ||
    tool.description.toLowerCase().includes('editor') ||
    tool.description.toLowerCase().includes('revision') ||
    tool.description.toLowerCase().includes('draft') ||
    tool.description.toLowerCase().includes('manuscript') ||
    tool.description.toLowerCase().includes('publication') ||
    tool.description.toLowerCase().includes('publishing') ||
    tool.description.toLowerCase().includes('literary') ||
    tool.description.toLowerCase().includes('prose') ||
    tool.description.toLowerCase().includes('poetry') ||
    tool.description.toLowerCase().includes('novel') ||
    tool.description.toLowerCase().includes('ebook') ||
    tool.description.toLowerCase().includes('book') ||
    tool.description.toLowerCase().includes('write') ||
    tool.description.toLowerCase().includes('writer') ||
    tool.description.toLowerCase().includes('content') ||
    tool.description.toLowerCase().includes('text') ||
    tool.description.toLowerCase().includes('words') ||
    tool.description.toLowerCase().includes('language') ||
    tool.description.toLowerCase().includes('linguistics') ||
    tool.description.toLowerCase().includes('vocabulary') ||
    tool.description.toLowerCase().includes('syntax') ||
    tool.description.toLowerCase().includes('style') ||
    tool.description.toLowerCase().includes('tone') ||
    tool.description.toLowerCase().includes('voice') ||
    tool.description.toLowerCase().includes('clarity') ||
    tool.description.toLowerCase().includes('readability') ||
    tool.description.toLowerCase().includes('comprehension') ||
    tool.description.toLowerCase().includes('communication') ||
    tool.description.toLowerCase().includes('expression') ||
    tool.description.toLowerCase().includes('articulation') ||
    tool.description.toLowerCase().includes('composition') ||
    tool.description.toLowerCase().includes('documentation') ||
    tool.description.toLowerCase().includes('transcription') ||
    tool.description.toLowerCase().includes('dictation') ||
    tool.description.toLowerCase().includes('speech to text') ||
    tool.description.toLowerCase().includes('voice to text')
  );
  
  const allTools = [...directCategoryTools, ...priorityTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`✍️ Content Creation & Writing Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    priorityTools: priorityTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 15).map(t => `${t.title} (${t.category})`)
  });
  
  return uniqueTools;
};
