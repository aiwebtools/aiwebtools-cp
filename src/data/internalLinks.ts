// SEO internal linking data - connects blog posts to relevant tools and categories

export interface InternalLink {
  title: string;
  url: string;
  type: 'blog' | 'tool' | 'category';
  keywords: string[]; // Keywords that trigger this link suggestion
}

// High-value internal links for SEO
export const seoInternalLinks: InternalLink[] = [
  // Blog posts
  {
    title: "Best Free AI Tools 2025",
    url: "/blog/best-free-ai-tools-2025-complete-list",
    type: "blog",
    keywords: ["free", "no cost", "free tier", "free ai"]
  },
  {
    title: "How to Make Money with AI",
    url: "/blog/how-to-use-ai-to-make-money-2025",
    type: "blog",
    keywords: ["money", "income", "business", "freelance", "side hustle"]
  },
  {
    title: "ChatGPT Alternatives Guide",
    url: "/blog/chatgpt-alternatives-2025-better-options",
    type: "blog",
    keywords: ["chatgpt", "alternative", "chatbot", "assistant"]
  },
  {
    title: "AI Tools for Small Business",
    url: "/blog/ai-tools-for-small-business-2025",
    type: "blog",
    keywords: ["business", "small business", "entrepreneur", "startup"]
  },
  {
    title: "GPT-5 Release Guide",
    url: "/blog/gpt-5-release-date-features-guide",
    type: "blog",
    keywords: ["gpt-5", "gpt5", "openai", "new model"]
  },

  // Category pages
  {
    title: "Browse All AI Tools",
    url: "/main-category/ALL%20AI%20TOOLS",
    type: "category",
    keywords: ["all", "browse", "explore", "directory"]
  },
  {
    title: "AI Writing Tools",
    url: "/main-category/WRITING%20%26%20CONTENT%20AI%20TOOLS",
    type: "category",
    keywords: ["writing", "content", "copywriting", "blog"]
  },
  {
    title: "AI Image & Design Tools",
    url: "/main-category/IMAGE%20%26%20DESIGN%20AI%20TOOLS",
    type: "category",
    keywords: ["image", "design", "art", "graphic", "visual"]
  },
  {
    title: "AI Video Tools",
    url: "/main-category/VIDEO%20%26%20MULTIMEDIA%20AI%20TOOLS",
    type: "category",
    keywords: ["video", "multimedia", "animation", "movie"]
  },
  {
    title: "AI Coding Tools",
    url: "/main-category/CODING%20%26%20DEVELOPMENT%20AI%20TOOLS",
    type: "category",
    keywords: ["coding", "development", "programming", "developer"]
  },
  {
    title: "AI Business Tools",
    url: "/main-category/BUSINESS%20%26%20PRODUCTIVITY%20AI%20TOOLS",
    type: "category",
    keywords: ["business", "productivity", "work", "office"]
  },

  // Featured custom GPTs
  {
    title: "Book Writer GPT",
    url: "/tool/book-writer-gpt",
    type: "tool",
    keywords: ["book", "write", "author", "novel", "publish"]
  },
  {
    title: "Movie Script Writer GPT",
    url: "/tool/movie-script-writer-gpt",
    type: "tool",
    keywords: ["movie", "script", "screenplay", "film"]
  },
  {
    title: "Resume & Job Finder GPT",
    url: "/tool/the-resume-and-job-finder-ai-suite",
    type: "tool",
    keywords: ["resume", "job", "career", "employment", "cv"]
  },
  {
    title: "Graphic Design GPT",
    url: "/tool/graphic-and-cover-design-gpt",
    type: "tool",
    keywords: ["design", "graphic", "cover", "logo"]
  }
];

// Get relevant internal links based on content keywords
export const getRelevantLinks = (contentKeywords: string[], maxLinks: number = 4): InternalLink[] => {
  const lowerKeywords = contentKeywords.map(k => k.toLowerCase());
  
  const scoredLinks = seoInternalLinks.map(link => {
    const matchScore = link.keywords.filter(kw => 
      lowerKeywords.some(ck => ck.includes(kw) || kw.includes(ck))
    ).length;
    return { ...link, score: matchScore };
  });

  return scoredLinks
    .filter(link => link.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxLinks);
};
