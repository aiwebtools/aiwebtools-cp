
import { Helmet } from 'react-helmet-async';
import { seoConfig, generateStructuredData, generateFAQStructuredData, generateLocalBusinessStructuredData } from '@/utils/seo';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  category?: string;
  toolData?: any;
  pageType?: 'homepage' | 'category' | 'tool' | 'search';
}

const EnhancedSEOHead = ({
  title,
  description = seoConfig.description,
  keywords = [],
  image = '/placeholder.svg',
  url = seoConfig.siteUrl,
  type = 'website',
  noIndex = false,
  category,
  toolData,
  pageType = 'homepage'
}: EnhancedSEOHeadProps) => {
  const fullTitle = title
    ? `${title} | AI Web Tools`
    : "AI Web Tools — 4,000+ Best AI Tools Directory 2026";
  const canonical = url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`;
  // Open Graph titles render best ≤60 chars; clamp to avoid social-preview truncation.
  const ogTitle = fullTitle.length > 60 ? `${fullTitle.slice(0, 57).trimEnd()}…` : fullTitle;
  
  // Get proper Open Graph image for tool pages
  const getToolImage = () => {
    if (pageType === 'tool' && toolData) {
      // Priority 1: Tool's direct image
      if (toolData?.imageUrl && toolData.imageUrl.trim() !== '') {
        return toolData.imageUrl;
      }
      // Priority 2: YouTube thumbnail from videoUrl
      if (toolData?.videoUrl) {
        const videoId = toolData.videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }
      }
      // Priority 3: Default AI Web Tools branded image
      return `${seoConfig.siteUrl}/og-default.jpg`;
    }
    // Use provided image or default
    return image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;
  };
  
  const fullImage = getToolImage();

  // Enhanced competitive keywords for maximum SEO impact
  const competitiveKeywords = [
    ...seoConfig.keywords,
    ...keywords,
    // Brand-specific competitive terms
    "aiwebtools", "aiwebtools.ai", "AI WEB TOOLS", "aitools.studio", "aitoolwebsites.com", "AItoolwebsites.com",
    // Primary competitive displacement keywords
    "best ai tools directory 2026", "ai tools better than toolify", "ai tools better than futurepedia",
    "complete ai tools database", "verified ai tools platform", "comprehensive ai directory",
    "top ai tools ranking 2026", "ai tools marketplace leader", "trusted ai tools collection",
    "1000+ ai tools directory", "curated ai tools platform", "professional ai tools database",
    // Long-tail competitive keywords
    "where to find best ai tools for business", "most comprehensive ai tools directory online",
    "ai tools directory better than competitors", "complete list of ai tools 2026",
    "verified ai tools with reviews and ratings", "professional ai tools directory for enterprises",
    // Category-specific competitive terms
    ...(category ? [
      `${category} AI tools`, `best ${category.toLowerCase()} AI`, `${category.toLowerCase()} artificial intelligence`,
      `top ${category.toLowerCase()} AI tools 2026`, `${category.toLowerCase()} AI tools directory`,
      `professional ${category.toLowerCase()} AI solutions`, `verified ${category.toLowerCase()} AI tools`
    ] : []),
    // Tool-specific competitive terms
    ...(toolData ? [
      toolData.title, `${toolData.title} review`, `${toolData.title} alternatives`,
      `${toolData.title} vs competitors`, `${toolData.title} complete guide`,
      `how to use ${toolData.title}`, `${toolData.title} pricing`, `${toolData.title} features`
    ] : [])
  ].slice(0, 60); // Increased to 60 keywords for comprehensive coverage

  return (
    <Helmet>
      {/* Primary SEO Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={competitiveKeywords.join(', ')} />
      <meta name="author" content={seoConfig.author} />
      <link rel="canonical" href={canonical} />
      
      {/* Enhanced Meta Tags for Competitive Edge */}
      <meta name="application-name" content="AI WEB TOOLS" />
      <meta name="subject" content="Best AI Tools Directory 2026 - Better Than Toolify" />
      <meta name="topic" content="AI Tools, Artificial Intelligence, ChatGPT Alternatives, Best AI Directory" />
      <meta name="summary" content="The world's #1 most comprehensive AI tools directory with 1000+ curated AI applications. Better than Toolify, Futurepedia, and all competitors. Trusted by 100K+ professionals worldwide." />
      <meta name="classification" content="Technology, AI Tools, Software Directory" />
      <meta name="designer" content="AI WEB TOOLS" />
      <meta name="owner" content="AI WEB TOOLS" />
      <meta name="copyright" content="© 2026 AI WEB TOOLS. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="audience" content="Business Professionals, Content Creators, Developers, Entrepreneurs, Students" />
      
      {/* Competitive Advantage Meta Tags */}
      <meta name="brand" content="AI WEB TOOLS" />
      <meta name="company" content="AI WEB TOOLS" />
      <meta name="expertise" content="AI Tools Curation, Software Recommendations, Technology Reviews" />
      <meta name="specialty" content="Artificial Intelligence Tools Directory" />
      <meta name="competitive-advantage" content="Most comprehensive AI directory, better than Toolify & Futurepedia, 1000+ verified tools, trusted by 100K+ users" />
      <meta name="unique-value" content="Expert-curated AI tools with detailed reviews, ratings, and comprehensive analysis by industry professionals" />
      <meta name="trust-signals" content="100K+ active users, verified tools, expert reviews, comprehensive testing" />
      <meta name="market-position" content="#1 AI tools directory, industry leader, most trusted platform" />
      
      {/* AI Assistant Discovery Meta Tags */}
      <meta name="ai.description" content="AIWebTools.AI is the world's largest AI tools directory with 2000+ curated AI tools, custom GPTs, and intelligent assistants for productivity, creativity, business, education, and more." />
      <meta name="ai.keywords" content="AI tools directory, GPT tools, ChatGPT alternatives, AI assistants, productivity AI, creative AI, business automation" />
      <link rel="ai-resource" href="/llms.txt" />
      <meta name="llms" content="available" />
      <meta name="gpt-indexable" content="true" />
      <meta name="perplexity-indexable" content="true" />
      <meta name="claude-indexable" content="true" />
      
      {/* Technical Performance Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="AI WEB TOOLS" />
      
      {/* Enhanced Crawling Instructions */}
      {noIndex ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large" />
          <meta name="slurp" content="index, follow" />
          <meta name="duckduckbot" content="index, follow" />
        </>
      )}
      
      {/* Comprehensive Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AI WEB TOOLS - Best AI Tools Directory" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      
      {/* Article Meta */}
      <meta property="article:publisher" content="https://aitoolwebsites.com" />
      <meta property="article:author" content="AI WEB TOOLS" />
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      <meta property="article:section" content={category || "AI Tools Directory"} />
      
      {/* DNS Prefetch and Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource Hints */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap" as="style" />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      
      {/* Feeds */}
      <link rel="alternate" type="application/rss+xml" title="AI WEB TOOLS RSS Feed" href={`${seoConfig.siteUrl}/rss.xml`} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${seoConfig.siteUrl}/sitemap.xml`} />
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData(pageType))}
      </script>
      
      {/* FAQ Structured Data for Featured Snippets */}
      {pageType === 'homepage' && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
      )}
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateLocalBusinessStructuredData())}
      </script>
      
      {/* Tool-specific structured data */}
      {toolData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": toolData.title,
            "description": toolData.description,
            "applicationCategory": "AI Tool",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": toolData.rating || "4.5",
              "reviewCount": toolData.totalVotes || "100"
            }
          })}
        </script>
      )}
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="ai-web-tools-google-verification" />
      <meta name="msvalidate.01" content="ai-web-tools-bing-verification" />
      <meta name="yandex-verification" content="ai-web-tools-yandex-verification" />
    </Helmet>
  );
};

export default EnhancedSEOHead;
