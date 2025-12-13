
import { Tool } from "@/types/tools";

// Writing & Content subtypes for comprehensive tagging
export const writingContentSubtypes = [
  "Blog Writing",
  "Copywriting",
  "SEO Content",
  "Script Writing",
  "Book Writing",
  "Academic Writing",
  "Technical Writing",
  "Email Writing",
  "Social Media Writing",
  "Grammar & Editing",
  "Content Strategy",
  "Creative Writing",
  "Article Writing",
  "Prompt Engineering"
] as const;

export type WritingContentSubtype = typeof writingContentSubtypes[number];

// Keywords associated with each writing subtype
export const writingSubtypeKeywords: Record<WritingContentSubtype, string[]> = {
  "Blog Writing": ["blog", "blogging", "blog post", "blogger", "blog article", "blog content"],
  "Copywriting": ["copywriting", "copy", "marketing copy", "ad copy", "sales copy", "conversion copy", "landing page"],
  "SEO Content": ["seo", "search engine", "keyword", "ranking", "organic", "serp", "search optimization", "content optimization"],
  "Script Writing": ["script", "screenplay", "screenwriting", "movie script", "film script", "dialogue", "scene"],
  "Book Writing": ["book", "ebook", "novel", "author", "manuscript", "chapter", "publishing", "fiction", "non-fiction"],
  "Academic Writing": ["academic", "research paper", "essay", "thesis", "dissertation", "scholarly", "citation", "academic writing"],
  "Technical Writing": ["technical writing", "documentation", "manual", "technical doc", "user guide", "api documentation"],
  "Email Writing": ["email", "email marketing", "newsletter", "outreach", "cold email", "email copy"],
  "Social Media Writing": ["social media", "social post", "twitter", "linkedin", "instagram", "facebook", "social content"],
  "Grammar & Editing": ["grammar", "spelling", "proofreading", "editing", "punctuation", "clarity", "rewriting", "paraphrasing"],
  "Content Strategy": ["content strategy", "content planning", "content marketing", "content calendar", "editorial"],
  "Creative Writing": ["creative writing", "storytelling", "narrative", "fiction", "creative", "imagination"],
  "Article Writing": ["article", "news", "journalism", "feature", "long-form", "publication"],
  "Prompt Engineering": ["prompt", "prompt engineering", "prompt optimization", "ai prompt", "chatgpt prompt"]
};

// Detect writing subtypes for a tool
export const detectWritingContentSubtypes = (tool: Tool): WritingContentSubtype[] => {
  const subtypes: WritingContentSubtype[] = [];
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  for (const [subtype, keywords] of Object.entries(writingSubtypeKeywords)) {
    if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
      subtypes.push(subtype as WritingContentSubtype);
    }
  }
  
  return subtypes;
};

// Check if a tool is writing/content related
export const isWritingContentTool = (tool: Tool): boolean => {
  const category = tool.category?.toLowerCase() || '';
  const title = tool.title?.toLowerCase() || '';
  const description = tool.description?.toLowerCase() || '';
  const tags = tool.tags?.map(t => t.toLowerCase()) || [];
  
  const writingCategories = [
    'writing', 'content', 'copywriting', 'blogging', 'seo',
    'grammar', 'editing', 'script', 'book', 'article'
  ];
  
  const writingKeywords = [
    'write', 'writing', 'writer', 'content', 'copy', 'blog',
    'article', 'script', 'screenplay', 'book', 'ebook',
    'grammar', 'editing', 'proofreading', 'seo', 'paraphrase',
    'rewrite', 'prompt', 'email', 'newsletter'
  ];
  
  if (writingCategories.some(cat => category.includes(cat))) return true;
  if (writingKeywords.some(kw => title.includes(kw) || description.includes(kw))) return true;
  if (tags.some(tag => writingKeywords.some(kw => tag.includes(kw)))) return true;
  
  return false;
};
