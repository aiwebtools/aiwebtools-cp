
import { Helmet } from 'react-helmet-async';
import { seoConfig, generateStructuredData, generateFAQStructuredData, generateLocalBusinessStructuredData } from '@/utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: any;
  noIndex?: boolean;
  includeFAQ?: boolean;
  includeLocalBusiness?: boolean;
  category?: string;
  toolData?: any;
}

const SEOHead = ({
  title,
  description = seoConfig.description,
  keywords = seoConfig.keywords,
  image = '/placeholder.svg',
  url = seoConfig.siteUrl,
  type = 'website',
  structuredData,
  noIndex = false,
  includeFAQ = false,
  includeLocalBusiness = false,
  category,
  toolData
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | AIWEBTOOLS.AI - #1 AI WEB TOOLS Directory 2026` : "AIWEBTOOLS.AI - #1 AI WEB TOOLS Directory | 1000+ Best AI Tools 2026 | Better Than Toolify | Comprehensive AI Tools";
  const canonical = url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  // ULTRA-COMPREHENSIVE SEO KEYWORDS - DOMINATE ALL AI SEARCHES
  const competitiveKeywords = [
    "aiwebtools.ai",
    "AIWEBTOOLS.AI", 
    "aiwebtools",
    "AIWEBTOOLS",
    "aitoolwebsites.com",
    "AItoolwebsites.com",
    "ai web tools",
    "AI WEB TOOLS",
    "AI WEB TOOLS directory",
    "aiwebtools ai",
    "ai web tools ai",
    "best ai tools 2026",
    "ai tools directory",
    "better than toolify",
    "comprehensive ai tools",
    "verified ai tools",
    "ChatGPT alternatives",
    "top ai tools ranking",
    "professional ai tools",
    "enterprise ai solutions",
    "ai tools comparison",
    "trusted ai directory",
    "complete ai tools list",
    "ai tools marketplace",
    "curated ai tools",
    "aitools studio",
    "ai tools company",
    "ai web tools",
    "1000 ai tools",
    "free ai tools",
    "premium ai tools",
    "ai tools database",
    "ai tools catalog",
    "ai tools search",
    "ai tools discovery",
    "ai tools platform",
    "ai tools ecosystem",
    // CORE AI TERMS - CAST THE WIDEST NET
    "artificial intelligence tools",
    "AI software",
    "AI applications",
    "AI platforms",
    "AI solutions",
    "AI technology",
    "AI services",
    "AI products",
    "AI systems",
    "AI programs",
    "AI utilities",
    "AI resources",
    "AI innovations",
    "AI breakthroughs",
    "AI advances",
    // AI AGENTS & ASSISTANTS
    "ai agents",
    "AI assistants",
    "ai chatbots",
    "conversational ai",
    "virtual assistants",
    "ai companions",
    "smart assistants",
    "ai helpers",
    "digital assistants",
    "automated assistants",
    // MACHINE LEARNING & TECH
    "machine learning tools",
    "deep learning applications",
    "neural network software",
    "automation tools",
    "intelligent automation",
    "smart automation",
    "workflow automation",
    "process automation",
    "robotic process automation",
    "AI automation",
    // BUSINESS & PRODUCTIVITY
    "productivity ai tools",
    "business ai tools",
    "enterprise ai",
    "ai for business",
    "ai productivity",
    "work automation",
    "business automation",
    "office ai tools",
    "professional ai",
    "corporate ai solutions",
    // CREATIVE & CONTENT
    "creative ai tools",
    "content creation ai",
    "ai content generators",
    "ai writing tools",
    "ai copywriting",
    "ai content marketing",
    "creative automation",
    "design ai tools",
    "ai graphic design",
    "ai art generators",
    // MEDIA & MULTIMEDIA
    "video ai tools",
    "ai video editing",
    "ai video creation",
    "audio ai tools",
    "ai music generation",
    "ai voice synthesis",
    "image ai tools",
    "ai photo editing",
    "ai image generation",
    "ai image enhancement",
    // DATA & ANALYTICS
    "data ai tools",
    "ai analytics",
    "ai data analysis",
    "predictive analytics",
    "ai insights",
    "business intelligence ai",
    "ai reporting",
    "data science tools",
    "ai statistics",
    "smart analytics",
    // MARKETING & SALES
    "marketing ai tools",
    "ai marketing",
    "sales ai tools",
    "ai sales automation",
    "digital marketing ai",
    "ai advertising",
    "marketing automation",
    "lead generation ai",
    "customer service ai",
    "crm ai tools",
    // RESEARCH & DEVELOPMENT
    "research ai tools",
    "ai research",
    "academic ai tools",
    "scientific ai",
    "ai for research",
    "development ai tools",
    "coding ai tools",
    "programming ai",
    "developer ai tools",
    "ai code generation",
    // COMPETITIVE TERMS
    "ai directory",
    "ai tool finder",
    "ai software directory",
    "find ai tools",
    "discover ai tools",
    "ai tools list",
    "ai tools collection",
    "ai tools hub",
    "ai tools repository",
    "ai tools archive",
    ...keywords
  ];

  return (
    <Helmet>
      {/* Critical SEO Meta Tags for Ranking */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={competitiveKeywords.join(', ')} />
      <meta name="author" content="AI WEB TOOLS" />
      <link rel="canonical" href={canonical} />
      
      {/* ENHANCED COMPETITIVE META TAGS FOR #1 RANKING */}
      <meta name="application-name" content="AIWEBTOOLS.AI" />
      <meta name="subject" content="AIWEBTOOLS.AI - #1 AI WEB TOOLS Directory 2026" />
      <meta name="topic" content="aiwebtools.ai, ai web tools, AIWEBTOOLS, AI WEB TOOLS, best ai tools 2026, artificial intelligence, ChatGPT alternatives, comprehensive ai directory, better than toolify" />
      <meta name="summary" content="AIWEBTOOLS.AI - The #1 comprehensive AI web tools directory with 1000+ curated AI tools. Better than Toolify. Discover the best AI tools 2026 for business, creativity, and productivity." />
      <meta name="classification" content="Technology, AI Tools, Software Directory" />
      <meta name="designer" content="AI WEB TOOLS" />
      <meta name="owner" content="AI WEB TOOLS" />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={fullTitle} />
      <meta name="category" content="AIWEBTOOLS.AI - AI WEB TOOLS Directory" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="Business Professionals, Content Creators, Developers, Entrepreneurs, Students" />
      <meta name="language" content="English" />
      <meta name="doc-type" content="AIWEBTOOLS.AI - AI WEB TOOLS Directory" />
      <meta name="doc-rights" content="AI WEB TOOLS" />
      <meta name="doc-class" content="Living Document" />
      
      {/* CRITICAL BRAND AND COMPETITIVE EDGE META TAGS */}
      <meta name="brand" content="AIWEBTOOLS.AI" />
      <meta name="company" content="AI WEB TOOLS" />
      <meta name="expertise" content="AI WEB TOOLS Curation, AIWEBTOOLS.AI Platform, AI Tools Recommendations, Technology Reviews" />
      <meta name="specialty" content="AIWEBTOOLS.AI - Artificial Intelligence WEB TOOLS Directory" />
      <meta name="focus" content="aiwebtools.ai, ai web tools, best AI tools 2026, ChatGPT alternatives, professional AI solutions, better than toolify" />
      <meta name="competitive-advantage" content="AIWEBTOOLS.AI - Most comprehensive AI WEB TOOLS directory, better than Toolify, 1000+ verified tools, #1 ranking" />
      <meta name="unique-value" content="AIWEBTOOLS.AI offers 1000+ curated AI WEB TOOLS with detailed reviews, ratings, and direct access links" />
      <meta name="primary-keywords" content="aiwebtools.ai, ai web tools, AIWEBTOOLS, AI WEB TOOLS" />
      <meta name="target-ranking" content="#1 for aiwebtools.ai and ai web tools keywords" />
      
      {/* Technical Performance Meta */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta httpEquiv="Cache-Control" content="no-transform" />
      <meta httpEquiv="Cache-Control" content="no-siteapp" />
      <meta name="format-detection" content="telephone=no, email=no" />
      <meta name="wap-font-scale" content="no" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="AI WEB TOOLS" />
      
      {/* Geographic and Business Meta */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="nuts" content="US" />
      
      {/* Business Contact Data */}
      <meta name="business.contact_data.street_address" content="Remote Operations Worldwide" />
      <meta name="business.contact_data.locality" content="Global" />
      <meta name="business.contact_data.region" content="Worldwide" />
      <meta name="business.contact_data.postal_code" content="00000" />
      <meta name="business.contact_data.country_name" content="United States" />
      <meta name="business.contact_data.email" content="Contact@ai-webtools.com" />
      <meta name="business.contact_data.phone_number" content="+14758008096" />
      <meta name="business.contact_data.website" content={seoConfig.siteUrl} />
      
      {/* Enhanced Crawling Instructions */}
      {noIndex ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, max-video-preview:30" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="slurp" content="index, follow, max-image-preview:large" />
          <meta name="duckduckbot" content="index, follow" />
          <meta name="facebookexternalhit" content="index, follow" />
          <meta name="twitterbot" content="index, follow" />
          <meta name="linkedinbot" content="index, follow" />
          <meta name="whatsapp" content="index, follow" />
          <meta name="telegrambot" content="index, follow" />
          <meta name="applebot" content="index, follow" />
          <meta name="gptbot" content="index, follow" />
          <meta name="claude-web" content="index, follow" />
          <meta name="ccbot" content="index, follow" />
        </>
      )}
      
      {/* OPTIMIZED SOCIAL MEDIA META TAGS FOR AI WEB TOOLS */}
      <meta property="og:title" content="🤖 AI WEB TOOLS - #1 AI Tools Directory | 1000+ Best AI Tools 2026 | Better Than Toolify" />
      <meta property="og:description" content="🚀 Discover 1000+ verified AI tools, agents & ChatGPT alternatives. Expert-curated directory trusted by 100K+ professionals. Better than Toolify & competitors. Find the perfect AI solution for your needs!" />
      <meta property="og:image" content="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-ai-robot-with-glowing-blue-eyes-su.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="AI WEB TOOLS - The Ultimate AI Tools Directory with 1000+ Curated AI Applications" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-ai-robot-with-glowing-blue-eyes-su.png" />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AI WEB TOOLS - Best AI Tools Directory" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:determiner" content="the" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="og:see_also" content="https://aiwebtools.ai" />
      <meta property="og:see_also" content="https://www.aiwebtools.ai" />
      <meta property="og:see_also" content="https://AItoolwebsites.com" />
      <meta property="fb:app_id" content={seoConfig.facebookAppId} />
      
      {/* OPTIMIZED TWITTER CARD FOR AI WEB TOOLS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="🤖 AI WEB TOOLS - #1 AI Tools Directory | 1000+ Best AI Tools 2026" />
      <meta name="twitter:description" content="🚀 Discover 1000+ verified AI tools & ChatGPT alternatives. Expert-curated directory better than Toolify. Trusted by 100K+ professionals worldwide!" />
      <meta name="twitter:image" content="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-ai-robot-with-glowing-blue-eyes-su.png" />
      <meta name="twitter:image:alt" content="AI WEB TOOLS - Ultimate AI Tools Directory with 1000+ Curated AI Applications" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:domain" content="ai-webtools.com" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:data1" content="1000+ AI Tools" />
      <meta name="twitter:label1" content="Directory Size" />
      <meta name="twitter:data2" content="Free & Premium" />
      <meta name="twitter:label2" content="Pricing" />
      
      {/* Article and Content Meta */}
      <meta property="article:publisher" content="https://aitoolwebsites.com" />
      <meta property="article:author" content="AI WEB TOOLS" />
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      <meta property="article:section" content={category || "AI Tools Directory"} />
      <meta property="article:tag" content={competitiveKeywords.slice(0, 15).join(", ")} />
      
      {/* Mobile and PWA Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />
      <meta name="msapplication-navbutton-color" content="#0891b2" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      <meta name="msapplication-tooltip" content="AI WEB TOOLS - Best AI Tools Directory with 1000+ curated tools" />
      
      {/* Security and Performance Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* Enhanced DNS Prefetch and Preconnect */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//ai-webtools.com" />
      <link rel="dns-prefetch" href="//www.aiwebtools.ai" />
      <link rel="dns-prefetch" href="//aitoolwebsites.com" />
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//www.bing.com" />
      <link rel="dns-prefetch" href="//search.yahoo.com" />
      <link rel="dns-prefetch" href="//duckduckgo.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://aiwebtools.ai" />
      <link rel="preconnect" href="https://www.aiwebtools.ai" />
      <link rel="preconnect" href="https://aitoolwebsites.com" />
      
      {/* Resource Hints for Performance */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap" as="style" />
      <link rel="prefetch" href="/placeholder.svg" />
      
      {/* Alternate Languages and Feeds */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <link rel="alternate" type="application/rss+xml" title="AI WEB TOOLS RSS Feed" href={`${seoConfig.siteUrl}/rss.xml`} />
      <link rel="alternate" type="application/atom+xml" title="AI WEB TOOLS Atom Feed" href={`${seoConfig.siteUrl}/atom.xml`} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${seoConfig.siteUrl}/sitemap.xml`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
      
      {/* FAQ Structured Data */}
      {includeFAQ && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
      )}
      
      {/* Local Business Structured Data */}
      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessStructuredData())}
        </script>
      )}
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="ai-web-tools-google-verification" />
      <meta name="msvalidate.01" content="ai-web-tools-bing-verification" />
      <meta name="yandex-verification" content="ai-web-tools-yandex-verification" />
      <meta name="p:domain_verify" content="ai-web-tools-pinterest-verification" />
      <meta name="alexaVerifyID" content="ai-web-tools-alexa-verification" />
      <meta name="norton-safeweb-site-verification" content="ai-web-tools-norton-verification" />
      
      {/* Additional Competitive Meta */}
      <meta name="news_keywords" content="AI tools, artificial intelligence, ChatGPT alternatives, best AI directory, AI web tools" />
      <meta name="standout" content={canonical} />
      <meta name="syndication-source" content="https://aiwebtools.ai" />
      <meta name="original-source" content="https://aiwebtools.ai" />
      <meta name="generator" content="AI WEB TOOLS Directory Platform" />
      
      {/* Cache Control for SEO */}
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="public, max-age=86400" />
    </Helmet>
  );
};

export default SEOHead;
