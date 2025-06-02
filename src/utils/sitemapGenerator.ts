
import { allTools } from '@/data/toolsData';

export const generateEnhancedSitemap = () => {
  const baseUrl = 'https://aitools.studio';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Get unique categories from tools data
  const categories = Array.from(new Set(allTools.map(tool => tool.category).filter(Boolean)));
  
  // Priority levels for different page types (optimized for SEO)
  const priorities = {
    homepage: '1.0',
    category: '0.9',
    popularTool: '0.8',
    tool: '0.7',
    search: '0.8'  // Increased priority for search pages
  };
  
  // Change frequencies optimized for search engines
  const changeFreqs = {
    homepage: 'daily',
    category: 'weekly',
    tool: 'monthly',
    search: 'weekly'
  };

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  // Homepage with enhanced multilingual support
  sitemap += `  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreqs.homepage}</changefreq>
    <priority>${priorities.homepage}</priority>
    <xhtml:link rel="alternate" hrefLang="en" href="${baseUrl}"/>
    <xhtml:link rel="alternate" hrefLang="x-default" href="${baseUrl}"/>
  </url>
`;

  // Category pages with enhanced SEO data
  categories.forEach((category) => {
    const categoryUrl = `${baseUrl}/category/${encodeURIComponent(category)}`;
    sitemap += `  <url>
    <loc>${categoryUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreqs.category}</changefreq>
    <priority>${priorities.category}</priority>
    <xhtml:link rel="alternate" hrefLang="en" href="${categoryUrl}"/>
  </url>
`;
  });

  // Individual tool pages with enhanced metadata
  allTools.forEach((tool, index) => {
    const toolUrl = `${baseUrl}/tool/${index}`;
    const isPopular = tool.rating && parseFloat(tool.rating.toString()) > 4.5;
    const priority = isPopular ? priorities.popularTool : priorities.tool;
    
    sitemap += `  <url>
    <loc>${toolUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreqs.tool}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hrefLang="en" href="${toolUrl}"/>
`;

    // Add image data if available
    if (tool.imageUrl) {
      sitemap += `    <image:image>
      <image:loc>${tool.imageUrl}</image:loc>
      <image:title>${tool.title} - AI Tool</image:title>
      <image:caption>${tool.description}</image:caption>
    </image:image>
`;
    }

    // Add video data if available
    if (tool.videoUrl) {
      sitemap += `    <video:video>
      <video:thumbnail_loc>${tool.imageUrl || `${baseUrl}/placeholder.svg`}</video:thumbnail_loc>
      <video:title>${tool.title} Demo - AI Tool Tutorial</video:title>
      <video:description>Learn how to use ${tool.title} - ${tool.description}</video:description>
      <video:content_loc>${tool.videoUrl}</video:content_loc>
      <video:category>${tool.category}</video:category>
      <video:tag>AI tool, ${tool.tags?.join(', ') || tool.category}, artificial intelligence</video:tag>
      <video:family_friendly>yes</video:family_friendly>
      <video:duration>300</video:duration>
    </video:video>
`;
    }

    sitemap += `  </url>
`;
  });

  // Enhanced search pages for high-volume AI keywords
  const highVolumeSearchTerms = [
    // Core AI terms
    'ai tools', 'artificial intelligence', 'chatgpt', 'ai assistant', 'ai chatbot',
    'ai image generator', 'ai art generator', 'ai writing tools', 'ai video editor',
    
    // Productivity terms
    'productivity tools', 'business automation', 'workflow automation', 'ai for business',
    
    // Creative terms
    'image generation', 'video editing', 'content creation', 'graphic design',
    'ai music', 'ai art', 'creative ai tools', 'ai design tools',
    
    // Professional categories
    'ai for marketing', 'ai for writing', 'ai for education', 'ai for healthcare',
    'ai for sales', 'ai for developers', 'ai for startups',
    
    // Popular platforms
    'openai tools', 'gpt tools', 'claude ai', 'midjourney alternative',
    'stable diffusion', 'ai models', 'machine learning tools',
    
    // Intent-based searches
    'free ai tools', 'best ai tools', 'ai tools 2025', 'how to use ai',
    'ai comparison', 'ai alternatives', 'professional ai tools'
  ];

  highVolumeSearchTerms.forEach(term => {
    const searchUrl = `${baseUrl}/?search=${encodeURIComponent(term)}`;
    sitemap += `  <url>
    <loc>${searchUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreqs.search}</changefreq>
    <priority>${priorities.search}</priority>
  </url>
`;
  });

  // Add main category pages for better organization
  const mainCategories = [
    'AI Assistants', 'Image Generation', 'Writing & Content', 'Video Tools', 
    'Audio & Music', 'Business & Productivity', 'Education & Learning', 
    'Creative Services', 'Developer Tools', 'Healthcare', 'Marketing Tools'
  ];

  mainCategories.forEach(category => {
    const categoryUrl = `${baseUrl}/main-category/${encodeURIComponent(category)}`;
    sitemap += `  <url>
    <loc>${categoryUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  return sitemap;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$
Disallow: /404
Disallow: /*?*
Allow: /*?search=*

# Allow important crawlers with specific rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1
Allow: /sitemap.xml

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Baiduspider
Allow: /
Crawl-delay: 2

User-agent: YandexBot
Allow: /
Crawl-delay: 2

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

User-agent: PinterestBot
Allow: /

User-agent: Applebot
Allow: /

# AI and ML bots (for AI tool discovery)
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: CCBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

# Block aggressive crawlers that don't add value
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SiteAuditBot
Disallow: /

User-agent: MegaIndex
Disallow: /

User-agent: ZoominfoBot
Disallow: /

# Sitemap location
Sitemap: https://aitools.studio/sitemap.xml

# Host preference
Host: aitools.studio

# Crawl delay for aggressive bots
Crawl-delay: 1`;
};

// Generate performance-optimized robots.txt
export const generateOptimizedRobotsTxt = () => {
  return generateRobotsTxt();
};

// Generate comprehensive sitemap for better indexing
export const generateComprehensiveSitemap = () => {
  return generateEnhancedSitemap();
};
