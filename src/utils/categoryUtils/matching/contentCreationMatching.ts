import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getContentCreationWritingTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`✍️ CONTENT CREATION & WRITING enhanced matching for: ${categoryName}`);
  
  // Priority AI Web Tools GPTs that should appear first
  const priorityAIWebToolsGPTs = [
    "BOOK WRITER GPT",
    "Movie Script Writer GPT", 
    "PERFECT PROMPT ENGINE",
    "Clarity Omni GPT",
    "🎭 Playwriter GPT",
    "Playwriter GPT",
    "Podcast Script Writer GPT",
    "MATERIAL VALUATION GPT",
    "Algebraic Expression Inventor GPT",
    "Article and Blog Rewriter GPT",
    "Children's Picture Book Maker GPT",
    "Game Design Document",
    "Developer GPT",
    "Training Manual Generator GPT",
    "Restaurant Menu Maker GPT",
    "Movie Scene Maker GPT",
    "Legal Draftsmith GPT",
    "Legislation Writer GPT",
    "Public Testimony Writer GPT",
    "SCREENPLAY WRITER GPT"
  ];

  // Other priority writing tools that should appear early
  const priorityWritingTools = [
    "ParagraphAI",
    "Grammarly",
    "DeepL Write",
    "Wordtune",
    "QuillBot",
    "Hemingway Editor",
    "Jasper AI",
    "Jasper",
    "Copy.ai",
    "Writesonic",
    "Rytr",
    "ChatGPT Plus",
    "Claude Pro",
    "Notion AI",
    "Sudowrite",
    "Perplexity AI",
    "Lex",
    "Jenni AI",
    "Tome",
    "Gamma",
    "Otter.ai",
    "Descript",
    "AI Content Generator Pro",
    "Smart Text Editor",
    "Ebook Creator Suite",
    "Voice Content Creator",
    "Video Script Generator",
    "Visual Storytelling Platform",
    "Typography Designer",
    "Content Automation Engine",
    "Multilingual Content Creator",
    "ChatDOC",
    "Citation Machine",
    "DocLime",
    "Duplichecker",
    "Elicit",
    "Enhancv",
    "BooksAI.app",
    "JustCluck.com",
    "Elephas",
    "Simplified",
    "Spinrewriter",
    "Movie Maker Studio AI SUITE",
    "Prompt Box",
    "Theneo",
    "Typed",
    "MarkCopy",
    "ARTIRO",
    "Small PPT",
    "AIPRM",
    "ContentStudio"
  ];

  // Enhanced content and writing keywords
  const contentWritingKeywords = [
    'writing', 'content', 'copywriting', 'blog', 'article', 'text', 'copy',
    'editor', 'grammar', 'proofreading', 'plagiarism', 'seo writing',
    'creative writing', 'technical writing', 'documentation', 'storytelling',
    'script', 'screenplay', 'novel', 'poetry', 'journalism', 'marketing copy',
    'social media content', 'email content', 'web content', 'content strategy',
    'book', 'manual', 'guide', 'report', 'proposal', 'resume', 'letter',
    'speech', 'presentation', 'memo', 'outline', 'summary', 'review'
  ];

  // Find priority AI Web Tools GPTs first
  const priorityGPTs = tools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityTitle => 
      tool.title.toLowerCase().includes(priorityTitle.toLowerCase()) ||
      priorityTitle.toLowerCase().includes(tool.title.toLowerCase())
    )
  );

  // Find other priority writing tools
  const otherPriorityTools = tools.filter(tool => 
    !priorityGPTs.some(gpt => gpt.title === tool.title) && // Don't duplicate
    priorityWritingTools.some(priorityTitle => 
      tool.title.toLowerCase().includes(priorityTitle.toLowerCase()) ||
      priorityTitle.toLowerCase().includes(tool.title.toLowerCase())
    )
  );

  // Find tools that match the category or have content/writing functionality
  const categoryMatchingTools = tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    // Skip if already in priority lists
    if (priorityGPTs.some(gpt => gpt.title === tool.title) || 
        otherPriorityTools.some(other => other.title === tool.title)) {
      return false;
    }

    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];

    // Direct category match
    if (tool.category && isSimilarCategory(tool.category, categoryName)) {
      return true;
    }

    // Check for Content Creation & Writing related categories
    const writingCategories = [
      "content creation & writing", "writing & text generation", "content creation",
      "writing tools", "text generation", "copywriting", "documentation"
    ];
    
    if (writingCategories.some(cat => isSimilarCategory(lowerCategory, cat))) {
      return true;
    }

    // Check for writing/content functionality in title, description, or tags
    const hasKeyword = contentWritingKeywords.some(keyword =>
      lowerTitle.includes(keyword) || 
      lowerDescription.includes(keyword) ||
      lowerTags.some(tag => tag.includes(keyword))
    );

    if (hasKeyword) {
      return true;
    }

    // Special checks for writing tools that might not have obvious keywords
    if (lowerTitle.includes('ai') && (
      lowerTitle.includes('write') || 
      lowerTitle.includes('text') || 
      lowerTitle.includes('content') ||
      lowerDescription.includes('generate') ||
      lowerDescription.includes('create') ||
      lowerDescription.includes('writing') ||
      lowerDescription.includes('content')
    )) {
      return true;
    }

    return false;
  });

  // Combine with priority order: AI Web Tools GPTs first, then other priority tools, then category matches
  const allContentWritingTools = [
    ...priorityGPTs,
    ...otherPriorityTools, 
    ...categoryMatchingTools
  ];

  console.log(`✍️ Found ${allContentWritingTools.length} content creation & writing tools`);
  console.log(`📊 Breakdown: ${priorityGPTs.length} priority GPTs, ${otherPriorityTools.length} other priority, ${categoryMatchingTools.length} category matches`);
  console.log(`🎯 First 10 tools:`, allContentWritingTools.slice(0, 10).map(t => t.title));

  return allContentWritingTools;
};
