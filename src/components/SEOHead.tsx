
import { Helmet } from 'react-helmet-async';
import { seoConfig, generateStructuredData, generateFAQStructuredData } from '@/utils/seo';

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
  includeFAQ = false
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.siteName;
  const canonical = url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={seoConfig.author} />
      <link rel="canonical" href={canonical} />
      
      {/* Enhanced Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="copyright" content="AI WEB TOOLS LLC" />
      <meta name="web_author" content="AI WEB TOOLS LLC" />
      <meta name="reply-to" content="Contact@ai-webtools.com" />
      <meta name="url" content={canonical} />
      <meta name="identifier-URL" content={canonical} />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Advanced Performance Meta */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta httpEquiv="Cache-Control" content="no-transform" />
      <meta httpEquiv="Cache-Control" content="no-siteapp" />
      
      {/* Geo Meta */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      
      {/* Advanced Social Meta */}
      <meta name="application-name" content="AITools.Studio" />
      <meta name="msapplication-tooltip" content="AI Tools Directory" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-navbutton-color" content="#0891b2" />
      <meta name="msapplication-window" content="width=1024;height=768" />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="slurp" content="index, follow" />
          <meta name="duckduckbot" content="index, follow" />
        </>
      )}
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="fb:app_id" content={seoConfig.facebookAppId} />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:domain" content="aitools.studio" />
      <meta name="twitter:data1" content="AI Tools" />
      <meta name="twitter:label1" content="Category" />
      
      {/* Additional Social Meta */}
      <meta property="article:publisher" content="https://aitools.company" />
      <meta property="article:author" content="AI WEB TOOLS LLC" />
      <meta property="article:published_time" content="2024-01-01T00:00:00Z" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      
      {/* Mobile and App Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-title" content="AITools.Studio" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//aitools.company" />
      <link rel="dns-prefetch" href="//www.aiwebtools.ai" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      
      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource Hints */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="prefetch" href="/placeholder.svg" />
      
      {/* RSS and Alternate Links */}
      <link rel="alternate" type="application/rss+xml" title="AI Tools RSS Feed" href={`${seoConfig.siteUrl}/rss.xml`} />
      <link rel="alternate" type="application/atom+xml" title="AI Tools Atom Feed" href={`${seoConfig.siteUrl}/atom.xml`} />
      
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
      
      {/* Enhanced Verification Meta */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code" />
      
      {/* Additional Meta for Crawlers */}
      <meta name="archive" content="no" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
    </Helmet>
  );
};

export default SEOHead;
