import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ImprovedSEOHeadProps {
  pageType?: 'homepage' | 'category' | 'tool' | 'search';
  tool?: any;
  category?: string;
  searchTerm?: string;
}

const ImprovedSEOHead: React.FC<ImprovedSEOHeadProps> = ({
  pageType = 'homepage',
  tool,
  category,
  searchTerm
}) => {
  const getTitle = () => {
    switch (pageType) {
      case 'tool':
        return `${tool?.title} - AI Tool Review & Access | AI Web Tools 2025`;
      case 'category':
        return `${category} AI Tools - Best ${category} Tools 2025 | AI Web Tools`;
      case 'search':
        return `${searchTerm} AI Tools - Search Results | AI Web Tools Directory`;
      default:
        return 'AI Web Tools - #1 AI Tools Directory | 2195+ Best AI Tools 2025';
    }
  };

  const getDescription = () => {
    switch (pageType) {
      case 'tool':
        return `${tool?.description?.substring(0, 150)}... Access ${tool?.title}, reviews, features, and pricing. Compare with similar AI tools.`;
      case 'category':
        return `Discover the best ${category?.toLowerCase()} AI tools for 2025. Compare features, pricing, and reviews of top ${category?.toLowerCase()} tools in our comprehensive directory.`;
      case 'search':
        return `Find the best AI tools for "${searchTerm}". Browse our comprehensive directory of AI tools with reviews, features, and direct access links.`;
      default:
        return 'Discover the world\'s largest directory of 2195+ AI tools for productivity, creativity, and business. Find the perfect AI tool for any task with our comprehensive collection updated daily.';
    }
  };

  const getKeywords = () => {
    const baseKeywords = ['ai tools', 'artificial intelligence', 'ai directory', 'best ai tools 2025'];
    
    switch (pageType) {
      case 'tool':
        return [...baseKeywords, tool?.title?.toLowerCase(), tool?.category?.toLowerCase(), ...tool?.tags || []];
      case 'category':
        return [...baseKeywords, `${category?.toLowerCase()} ai tools`, `best ${category?.toLowerCase()} tools`];
      case 'search':
        return [...baseKeywords, searchTerm?.toLowerCase(), `${searchTerm} ai tools`];
      default:
        return [...baseKeywords, 'ai web tools', 'productivity tools', 'creative ai'];
    }
  };

  const getCanonicalUrl = () => {
    switch (pageType) {
      case 'tool':
        return `https://aitools.studio/tool/${tool?.id || tool?.title?.toLowerCase().replace(/\s+/g, '-')}`;
      case 'category':
        return `https://aitools.studio/category/${category?.toLowerCase().replace(/\s+/g, '-')}`;
      case 'search':
        return `https://aitools.studio/search?q=${encodeURIComponent(searchTerm || '')}`;
      default:
        return 'https://aitools.studio';
    }
  };

  const getOgImage = () => {
    if (pageType === 'tool' && tool?.imageUrl) {
      return tool.imageUrl;
    }
    return 'https://aitools.studio/og-image.jpg';
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType === 'tool' ? "Product" : "WebSite",
    "name": pageType === 'tool' ? tool?.title : "AI Web Tools",
    "description": getDescription(),
    "url": getCanonicalUrl(),
    ...(pageType === 'tool' && {
      "category": tool?.category,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": tool?.rating || 4.5,
        "reviewCount": tool?.totalVotes || 1000
      }
    })
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aitools.studio"
      },
      ...(category ? [{
        "@type": "ListItem",
        "position": 2,
        "name": category,
        "item": `https://aitools.studio/category/${category.toLowerCase().replace(/\s+/g, '-')}`
      }] : []),
      ...(tool ? [{
        "@type": "ListItem",
        "position": category ? 3 : 2,
        "name": tool.title,
        "item": getCanonicalUrl()
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Core SEO */}
      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
      <meta name="keywords" content={getKeywords().join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={getCanonicalUrl()} />
      
      {/* Preload Critical Assets */}
      <link rel="preload" as="image" href={getOgImage()} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Improved Crawlability */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />
      <meta name="facebookexternalhit" content="index, follow" />
      <meta name="twitterbot" content="index, follow" />
      
      {/* Safari Compatibility */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="AI Web Tools" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#06b6d4" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content={pageType === 'tool' ? 'product' : 'website'} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:image" content={getOgImage()} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${getTitle()} - AI Web Tools Preview`} />
      <meta property="og:site_name" content="AI Web Tools" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={getCanonicalUrl()} />
      <meta name="twitter:title" content={getTitle()} />
      <meta name="twitter:description" content={getDescription()} />
      <meta name="twitter:image" content={getOgImage()} />
      <meta name="twitter:image:alt" content={`${getTitle()} - AI Web Tools Preview`} />
      <meta name="twitter:site" content="@aiwebtools" />
      <meta name="twitter:creator" content="@aiwebtools" />
      
      {/* Additional SEO Meta */}
      <meta name="author" content="AI Web Tools" />
      <meta name="publisher" content="AI Web Tools" />
      <meta name="copyright" content="© 2025 AI Web Tools. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Additional JSON-LD for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AI Web Tools",
          "url": "https://aitools.studio",
          "logo": "https://aitools.studio/logo.png",
          "description": "The world's largest directory of 2195+ AI tools for productivity, creativity, and business.",
          "foundingDate": "2023",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "10-50"
          },
          "sameAs": [
            "https://twitter.com/aiwebtools",
            "https://facebook.com/aiwebtools"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["English"]
          }
        })}
      </script>
    </Helmet>
  );
};

export default ImprovedSEOHead;