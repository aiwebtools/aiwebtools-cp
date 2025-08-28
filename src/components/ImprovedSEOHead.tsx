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
        return 'AI Web Tools - #1 AI Tools Directory | 1300+ Best AI Tools 2025';
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
        return 'Discover the world\'s largest directory of AI tools for productivity, creativity, and business. Find the perfect AI tool for any task with our comprehensive collection of 1300+ AI tools.';
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType === 'tool' ? "Product" : "WebSite",
    "name": pageType === 'tool' ? tool?.title : "AI Web Tools",
    "description": getDescription(),
    "url": "https://aitools.studio",
    ...(pageType === 'tool' && {
      "category": tool?.category,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": tool?.rating || 4.5,
        "reviewCount": tool?.totalVotes || 1000
      }
    })
  };

  return (
    <Helmet>
      {/* Core SEO */}
      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
      <meta name="keywords" content={getKeywords().join(', ')} />
      
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
      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:site_name" content="AI Web Tools" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={getTitle()} />
      <meta name="twitter:description" content={getDescription()} />
      <meta name="twitter:site" content="@aiwebtools" />
      
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
      
      {/* Additional JSON-LD for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AI Web Tools",
          "url": "https://aitools.studio",
          "logo": "https://aitools.studio/logo.png",
          "description": "The world's largest directory of AI tools for productivity, creativity, and business.",
          "sameAs": [
            "https://twitter.com/aiwebtools",
            "https://facebook.com/aiwebtools"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default ImprovedSEOHead;