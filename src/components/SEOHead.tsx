
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
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.siteName;
  const canonical = url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  // Enhanced keywords with AI-focused terms
  const enhancedKeywords = [
    ...keywords,
    "AI tools 2025",
    "artificial intelligence directory",
    "machine learning tools",
    "AI automation",
    "productivity AI",
    "creative AI tools",
    "business AI solutions"
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords.join(', ')} />
      <meta name="author" content={seoConfig.author} />
      <link rel="canonical" href={canonical} />
      
      {/* Enhanced Meta Tags for AI Tools */}
      <meta name="application-name" content="AITools.Studio" />
      <meta name="subject" content="AI Tools Directory" />
      <meta name="topic" content="Artificial Intelligence, Machine Learning, Productivity Tools" />
      <meta name="summary" content="Comprehensive directory of AI-powered tools for business, creativity, and productivity" />
      <meta name="classification" content="Technology, Software, AI Tools" />
      <meta name="designer" content="AI WEB TOOLS LLC" />
      <meta name="owner" content="AI WEB TOOLS LLC" />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={fullTitle} />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="Professionals, Businesses, Creators, Developers" />
      <meta name="language" content="English" />
      <meta name="doc-type" content="Web Page" />
      <meta name="doc-rights" content="Copywritten Work" />
      <meta name="doc-class" content="Living Document" />
      
      {/* AI and Technology Specific Meta */}
      <meta name="technology" content="React, TypeScript, AI, Machine Learning" />
      <meta name="industry" content="Technology, Artificial Intelligence, Software" />
      <meta name="service" content="AI Tools Directory, Software Recommendations" />
      <meta name="expertise" content="Artificial Intelligence, Machine Learning, Productivity Software" />
      
      {/* Advanced Performance Meta */}
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
      <meta name="apple-mobile-web-app-title" content="AITools.Studio" />
      
      {/* Geo and Location Meta */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="nuts" content="US" />
      
      {/* Enhanced Social and Business Meta */}
      <meta name="business.contact_data.street_address" content="Remote Operations" />
      <meta name="business.contact_data.locality" content="Global" />
      <meta name="business.contact_data.region" content="Worldwide" />
      <meta name="business.contact_data.postal_code" content="00000" />
      <meta name="business.contact_data.country_name" content="United States" />
      <meta name="business.contact_data.email" content="Contact@ai-webtools.com" />
      <meta name="business.contact_data.phone_number" content="+14758008096" />
      <meta name="business.contact_data.website" content={seoConfig.siteUrl} />
      
      {/* Robots and Crawling */}
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
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="og:see_also" content="https://aitools.company" />
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
      <meta name="twitter:data1" content="AI Tools" />
      <meta name="twitter:label1" content="Category" />
      <meta name="twitter:data2" content="Free & Premium" />
      <meta name="twitter:label2" content="Pricing" />
      
      {/* LinkedIn Meta */}
      <meta property="article:publisher" content="https://aitools.company" />
      <meta property="article:author" content="AI WEB TOOLS LLC" />
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      <meta property="article:section" content={category || "AI Tools"} />
      <meta property="article:tag" content={enhancedKeywords.slice(0, 10).join(", ")} />
      
      {/* Mobile and Progressive Web App */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />
      <meta name="msapplication-navbutton-color" content="#0891b2" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      <meta name="msapplication-tooltip" content="AI Tools Directory - Discover 1000+ AI Tools" />
      
      {/* Security and Performance Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* DNS Prefetch and Preconnect for Critical Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//aitools.company" />
      <link rel="dns-prefetch" href="//www.aiwebtools.ai" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://aitools.company" />
      <link rel="preconnect" href="https://www.aiwebtools.ai" />
      
      {/* Resource Hints for Performance */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap" as="style" />
      <link rel="prefetch" href="/placeholder.svg" />
      
      {/* Alternate Languages and Feeds */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <link rel="alternate" type="application/rss+xml" title="AI Tools RSS Feed" href={`${seoConfig.siteUrl}/rss.xml`} />
      <link rel="alternate" type="application/atom+xml" title="AI Tools Atom Feed" href={`${seoConfig.siteUrl}/atom.xml`} />
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
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code" />
      <meta name="alexaVerifyID" content="your-alexa-verification-code" />
      <meta name="norton-safeweb-site-verification" content="your-norton-verification-code" />
      
      {/* Additional Crawling Instructions */}
      <meta name="archive" content="no" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="public, max-age=31536000" />
    </Helmet>
  );
};

export default SEOHead;
