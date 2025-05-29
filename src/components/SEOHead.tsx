
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
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </>
      )}
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="fb:app_id" content={seoConfig.facebookAppId} />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      
      {/* Additional Social Meta */}
      <meta property="article:publisher" content="https://aitools.company" />
      <meta property="article:author" content="AI WEB TOOLS LLC" />
      
      {/* Mobile and App Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="AITools.Studio" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//aitools.company" />
      <link rel="dns-prefetch" href="//www.aiwebtools.ai" />
      
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
    </Helmet>
  );
};

export default SEOHead;
