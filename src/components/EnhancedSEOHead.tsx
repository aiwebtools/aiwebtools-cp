
import { Helmet } from 'react-helmet-async';
import { seoConfig, generateStructuredData } from '@/utils/seo';
import { generateAdvancedMetaTags, generateArticleStructuredData, generateHowToStructuredData, generateVideoObjectStructuredData } from '@/utils/advancedSEO';

interface EnhancedSEOHeadProps {
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
  toolIndex?: number;
  canonicalUrl?: string;
  alternateUrls?: Array<{ lang: string; url: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  tags?: string[];
  schemaType?: 'WebPage' | 'SoftwareApplication' | 'Organization' | 'LocalBusiness' | 'Article';
}

const EnhancedSEOHead = ({
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
  toolData,
  toolIndex,
  canonicalUrl,
  alternateUrls = [],
  breadcrumbs = [],
  publishDate,
  modifiedDate,
  author = seoConfig.author,
  tags = [],
  schemaType = 'WebPage'
}: EnhancedSEOHeadProps) => {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.siteName;
  const canonical = canonicalUrl || (url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`);
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;
  const currentDate = new Date().toISOString();

  // Enhanced keywords with AI industry terms
  const enhancedKeywords = [
    ...keywords,
    "AI tools 2025",
    "artificial intelligence directory",
    "machine learning tools",
    "AI automation",
    "productivity AI",
    "creative AI tools",
    "business AI solutions",
    "AI web tools LLC",
    "aitools.studio",
    "best AI tools",
    "free AI tools",
    "AI tool reviews",
    "AI tool comparison",
    "AI software directory",
    "enterprise AI tools",
    "AI productivity suite",
    "AI development platform"
  ];

  // Generate advanced meta tags for tools
  const advancedMeta = toolData && toolIndex !== undefined 
    ? generateAdvancedMetaTags(toolData, toolIndex)
    : {};

  // Generate comprehensive structured data
  const allStructuredData = [];
  
  if (structuredData) {
    allStructuredData.push(structuredData);
  }

  if (toolData && toolIndex !== undefined) {
    allStructuredData.push(generateArticleStructuredData(toolData, toolIndex));
    allStructuredData.push(generateHowToStructuredData(toolData));
    allStructuredData.push(generateVideoObjectStructuredData(toolData));
  }

  return (
    <Helmet>
      {/* Enhanced Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
      
      {/* Advanced SEO Meta Tags */}
      <meta name="application-name" content="AI WEB TOOLS LLC - AITools.Studio" />
      <meta name="subject" content="AI Tools Directory & Business Solutions" />
      <meta name="topic" content="Artificial Intelligence, Machine Learning, Business Automation, Productivity Tools" />
      <meta name="summary" content="Comprehensive AI tools directory for business automation, creative solutions, and productivity enhancement" />
      <meta name="classification" content="Technology, Software, AI Tools, Business Solutions" />
      <meta name="designer" content="AI WEB TOOLS LLC" />
      <meta name="owner" content="AI WEB TOOLS LLC" />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={fullTitle} />
      <meta name="category" content={category || "AI Tools"} />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="Business Professionals, Entrepreneurs, Developers, Creators, Students" />
      <meta name="language" content="English" />
      <meta name="doc-type" content="Web Page" />
      <meta name="doc-rights" content="Copywritten Work" />
      <meta name="doc-class" content="Living Document" />
      
      {/* Business and Contact Information */}
      <meta name="business.contact_data.street_address" content="One World Drive" />
      <meta name="business.contact_data.locality" content="EARTH" />
      <meta name="business.contact_data.region" content="Global" />
      <meta name="business.contact_data.postal_code" content="00000" />
      <meta name="business.contact_data.country_name" content="United States" />
      <meta name="business.contact_data.email" content="Contact@ai-webtools.com" />
      <meta name="business.contact_data.phone_number" content="+14758008096" />
      <meta name="business.contact_data.website" content={seoConfig.siteUrl} />
      
      {/* AI Industry Specific Meta */}
      <meta name="ai-tools-count" content="1000+" />
      <meta name="ai-categories" content="15+" />
      <meta name="service-type" content="AI Tools Directory, Business Automation, Creative AI Solutions" />
      <meta name="industry" content="Artificial Intelligence, Technology, Software" />
      <meta name="expertise" content="AI Tool Curation, Business Automation, Productivity Enhancement" />
      <meta name="specialization" content="AI-powered business solutions, creative tools, productivity enhancement" />
      
      {/* Advanced Technical Meta */}
      <meta name="technology" content="React, TypeScript, AI, Machine Learning, Cloud Computing" />
      <meta name="platform" content="Web, Mobile, Cross-Platform" />
      <meta name="compatibility" content="All Modern Browsers, Mobile Devices, Tablets" />
      <meta name="accessibility" content="WCAG 2.1 AA Compliant" />
      
      {/* Time-based Meta */}
      {publishDate && <meta name="date" content={publishDate} />}
      <meta name="last-modified" content={modifiedDate || currentDate} />
      <meta name="created" content="2024-01-01" />
      
      {/* Advanced meta tags for tools */}
      {Object.entries(advancedMeta).map(([key, value]) => (
        <meta key={key} name={key} content={value as string} />
      ))}
      
      {/* Robots and Crawling Instructions */}
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
        </>
      )}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:determiner" content="the" />
      <meta property="og:updated_time" content={currentDate} />
      <meta property="og:see_also" content="https://www.aiwebtools.ai" />
      <meta property="fb:app_id" content={seoConfig.facebookAppId} />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:domain" content="aitools.studio" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:data1" content={category || "AI Tools"} />
      <meta name="twitter:label1" content="Category" />
      <meta name="twitter:data2" content="Free & Premium" />
      <meta name="twitter:label2" content="Pricing" />
      
      {/* LinkedIn and Professional Networks */}
      <meta property="article:publisher" content="https://www.aiwebtools.ai" />
      <meta property="article:author" content="AI WEB TOOLS LLC" />
      <meta property="article:published_time" content={publishDate || "2024-01-01T00:00:00Z"} />
      <meta property="article:modified_time" content={modifiedDate || currentDate} />
      <meta property="article:section" content={category || "AI Tools"} />
      <meta property="article:tag" content={tags.join(", ") || enhancedKeywords.slice(0, 10).join(", ")} />
      
      {/* Mobile and App Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />
      <meta name="msapplication-navbutton-color" content="#0891b2" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      <meta name="msapplication-tooltip" content="AI WEB TOOLS LLC - Discover 1000+ AI Tools" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.aiwebtools.ai" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.aiwebtools.ai" />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      {alternateUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Feeds and Sitemaps */}
      <link rel="alternate" type="application/rss+xml" title="AI Tools RSS Feed" href={`${seoConfig.siteUrl}/rss.xml`} />
      <link rel="alternate" type="application/atom+xml" title="AI Tools Atom Feed" href={`${seoConfig.siteUrl}/atom.xml`} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${seoConfig.siteUrl}/sitemap.xml`} />
      
      {/* Verification Tags (placeholder - replace with actual verification codes) */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code" />
      
      {/* Structured Data */}
      {allStructuredData.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allStructuredData)}
        </script>
      )}
      
      {/* FAQ Structured Data */}
      {includeFAQ && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI WEB TOOLS LLC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI WEB TOOLS LLC is a leading provider of AI-powered tools and solutions for businesses, creators, and professionals. We curate and provide access to over 1000+ cutting-edge AI tools across various categories including productivity, creativity, business automation, and more."
                }
              },
              {
                "@type": "Question",
                "name": "How can AI tools help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI tools can revolutionize your business by automating repetitive tasks, enhancing creativity, improving decision-making, increasing productivity, reducing costs, and providing insights from data analysis. Our comprehensive directory helps you find the perfect AI solution for your specific business needs."
                }
              },
              {
                "@type": "Question",
                "name": "Are the AI tools on your platform free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer a mix of free and premium AI tools. Many tools provide free tiers or trials, while others offer premium features for advanced functionality. Each tool listing clearly indicates pricing and availability."
                }
              }
            ]
          })}
        </script>
      )}
      
      {/* Local Business Structured Data */}
      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AI WEB TOOLS LLC",
            "description": "Leading AI tools directory and business automation solutions provider",
            "url": seoConfig.siteUrl,
            "telephone": "+14758008096",
            "email": "Contact@ai-webtools.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "One World Drive",
              "addressLocality": "EARTH",
              "addressCountry": "US"
            },
            "areaServed": "Worldwide",
            "serviceType": ["AI Tools Directory", "Business Automation", "Technology Consultation"],
            "priceRange": "Free - Premium"
          })}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEOHead;
