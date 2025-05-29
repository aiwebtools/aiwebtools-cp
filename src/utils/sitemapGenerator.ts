
import { allTools } from '@/data/toolsData';
import { getCategoriesWithCounts } from '@/utils/categoryUtils';

export const generateEnhancedSitemap = () => {
  const baseUrl = 'https://aitools.studio';
  const currentDate = new Date().toISOString().split('T')[0];
  const categories = getCategoriesWithCounts();
  
  // Priority levels for different page types
  const priorities = {
    homepage: '1.0',
    category: '0.9',
    popularTool: '0.8',
    tool: '0.7',
    search: '0.6'
  };
  
  // Change frequencies
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

  // Homepage
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
  categories.forEach(({ category, count }) => {
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

  // Individual tool pages with image and video data
  allTools.forEach((tool, index) => {
    const toolUrl = `${baseUrl}/tool/${index}`;
    const isPopular = tool.rating && tool.rating > 4.5;
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
      <image:title>${tool.title}</image:title>
      <image:caption>${tool.description}</image:caption>
    </image:image>
`;
    }

    // Add video data if available
    if (tool.videoUrl) {
      sitemap += `    <video:video>
      <video:thumbnail_loc>${tool.imageUrl || `${baseUrl}/placeholder.svg`}</video:thumbnail_loc>
      <video:title>${tool.title} Demo</video:title>
      <video:description>${tool.description}</video:description>
      <video:content_loc>${tool.videoUrl}</video:content_loc>
      <video:category>${tool.category}</video:category>
      <video:tag>${tool.tags?.join(', ') || tool.category}</video:tag>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
`;
    }

    sitemap += `  </url>
`;
  });

  // Add search pages for popular keywords
  const popularSearchTerms = [
    'ai tools', 'chatgpt', 'image generation', 'video editing', 'writing assistant',
    'business automation', 'creative ai', 'productivity tools', 'free ai tools',
    'ai art generator', 'ai music', 'ai coding', 'ai design', 'ai analysis'
  ];

  popularSearchTerms.forEach(term => {
    const searchUrl = `${baseUrl}/?search=${encodeURIComponent(term)}`;
    sitemap += `  <url>
    <loc>${searchUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreqs.search}</changefreq>
    <priority>${priorities.search}</priority>
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

# AI and ML bots
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: CCBot
Allow: /

# Block aggressive crawlers
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

# Sitemap location
Sitemap: https://aitools.studio/sitemap.xml

# Host preference
Host: aitools.studio

# Crawl delay for aggressive bots
Crawl-delay: 1`;
};
