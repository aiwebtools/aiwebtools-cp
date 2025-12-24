import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateToolSlug } from '@/utils/urlGenerator';

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
        return `${tool?.title} - Free AI Tool | Best ${tool?.category || 'AI Tools'} 2025`;
      case 'category':
        return `Best ${category} AI Tools 2025 - Top Free ${category} Tools | AI Tools Directory`;
      case 'search':
        return `${searchTerm} AI Tools - Find Best ${searchTerm} Tools | AI Tools Search`;
      default:
        return 'AI Tools - 2,195+ Best Free AI Tools Directory 2025 | AI Tools List & Reviews';
    }
  };

  const getDescription = () => {
    switch (pageType) {
      case 'tool':
        const toolDesc = tool?.description || 'Powerful AI tool for enhanced productivity and creativity';
        const truncatedDesc = toolDesc.length > 120 ? toolDesc.substring(0, 120) + '...' : toolDesc;
        return `${truncatedDesc} Try ${tool?.title} - one of the best free AI tools for ${tool?.category || 'productivity'}. Compare with other top AI tools in our directory.`;
      case 'category':
        return `Discover the best ${category?.toLowerCase()} AI tools for 2025. Compare top-rated ${category?.toLowerCase()} AI tools with reviews, features & free access. Find your perfect AI tool today.`;
      case 'search':
        return `Find the best AI tools for "${searchTerm}". Browse 2,195+ AI tools with reviews, comparisons & direct access. Top ${searchTerm} AI tools ranked by users.`;
      default:
        return 'AI Tools Directory - Discover 2,195+ best free AI tools for 2025. Find top AI tools for writing, images, video, coding & business. ChatGPT alternatives, AI generators & more. Compare, review & access the best AI tools online.';
    }
  };

  const getKeywords = () => {
    const baseKeywords = [
      'ai tools', 'AI tools', 'best ai tools', 'free ai tools', 'ai tools 2025', 
      'ai tools list', 'ai tools directory', 'top ai tools', 'ai tools online',
      'ai tools comparison', 'ai tools reviews', 'chatgpt alternatives'
    ];
    
    switch (pageType) {
      case 'tool':
        return [...baseKeywords, tool?.title?.toLowerCase(), `${tool?.category?.toLowerCase()} ai tools`, `best ${tool?.title?.toLowerCase()}`, 'free ai tool', ...tool?.tags || []];
      case 'category':
        return [...baseKeywords, `${category?.toLowerCase()} ai tools`, `best ${category?.toLowerCase()} ai tools`, `top ${category?.toLowerCase()} tools`, `free ${category?.toLowerCase()} ai tools`];
      case 'search':
        return [...baseKeywords, searchTerm?.toLowerCase(), `${searchTerm} ai tools`, `best ${searchTerm} ai tools`, `free ${searchTerm} tools`];
      default:
        return [...baseKeywords, 'ai writing tools', 'ai image tools', 'ai video tools', 'ai productivity tools', 'artificial intelligence tools', 'ai software'];
    }
  };

  const getCanonicalUrl = () => {
    switch (pageType) {
      case 'tool':
        // Use clean slug-based URL with proper utility
        const slug = generateToolSlug(tool?.title || '');
        return `https://aitools.studio/${slug}`;
      case 'category':
        return `https://aitools.studio/category/${category?.toLowerCase().replace(/\s+/g, '-')}`;
      case 'search':
        return `https://aitools.studio/search?q=${encodeURIComponent(searchTerm || '')}`;
      default:
        return 'https://aitools.studio';
    }
  };

  const getOgImage = () => {
    if (pageType === 'tool' && tool) {
      // Priority 1: Use tool's direct image if available
      if (tool?.imageUrl && tool.imageUrl.trim() !== '') {
        return tool.imageUrl;
      }
      
      // Priority 2: Extract YouTube thumbnail from videoUrl
      if (tool?.videoUrl) {
        const videoId = tool.videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }
      }
      
      // Priority 3: Fall back to default AI Web Tools branded image
      return 'https://aitools.studio/og-default.jpg';
    }
    
    // Homepage default image
    return 'https://aitools.studio/og-default.jpg';
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType === 'tool' ? "SoftwareApplication" : "WebSite",
    "name": pageType === 'tool' ? tool?.title : "AI Web Tools",
    "description": getDescription(),
    "url": getCanonicalUrl(),
    ...(pageType === 'tool' && {
      "applicationCategory": tool?.category || "Artificial Intelligence",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": tool?.rating || 4.5,
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": tool?.totalVotes || 1000,
        "ratingCount": tool?.totalVotes || 1000
      }
    })
  };

  // Video schema for tools with YouTube URLs
  const videoSchema = pageType === 'tool' && tool?.videoUrl ? (() => {
    const videoId = tool.videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    if (!videoId) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": `${tool.title} - Demo & Tutorial`,
      "description": tool.description || `Watch how to use ${tool.title}`,
      "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      "uploadDate": new Date().toISOString(),
      "contentUrl": tool.videoUrl,
      "embedUrl": `https://www.youtube.com/embed/${videoId}`,
      "duration": "PT5M",
      "publisher": {
        "@type": "Organization",
        "name": "AI Web Tools",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aitools.studio/logo.png"
        }
      }
    };
  })() : null;

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
      
      {/* Enhanced Open Graph - Tool-Specific */}
      <meta property="og:type" content={pageType === 'tool' ? 'product' : 'website'} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:image" content={getOgImage()} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageType === 'tool' ? `${tool?.title} - ${tool?.category || 'AI Tool'} Preview` : `${getTitle()} - AI Web Tools Preview`} />
      <meta property="og:site_name" content="AI Web Tools" />
      <meta property="og:locale" content="en_US" />
      {pageType === 'tool' && tool && (
        <>
          <meta property="product:category" content={tool.category || 'AI Tools'} />
          <meta property="product:price:amount" content="0" />
          <meta property="product:price:currency" content="USD" />
          <meta property="product:availability" content="in stock" />
        </>
      )}
      
      {/* Twitter Cards - Tool-Specific */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={getCanonicalUrl()} />
      <meta name="twitter:title" content={getTitle()} />
      <meta name="twitter:description" content={getDescription()} />
      <meta name="twitter:image" content={getOgImage()} />
      <meta name="twitter:image:alt" content={pageType === 'tool' ? `Try ${tool?.title} - ${tool?.category || 'AI Tool'}` : `${getTitle()} - AI Web Tools Preview`} />
      <meta name="twitter:site" content="@aiwebtools" />
      <meta name="twitter:creator" content="@aiwebtools" />
      {pageType === 'tool' && tool && (
        <>
          <meta name="twitter:label1" content="Category" />
          <meta name="twitter:data1" content={tool.category || 'AI Tools'} />
          <meta name="twitter:label2" content="Access" />
          <meta name="twitter:data2" content="Free" />
        </>
      )}
      
      {/* Additional SEO Meta */}
      <meta name="author" content="AI Web Tools" />
      <meta name="publisher" content="AI Web Tools" />
      <meta name="copyright" content="© 2025 AI Web Tools. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* AI Crawler & Assistant Discovery Tags */}
      <meta name="ai.description" content="AI Web Tools: 2195+ free AI tools directory. Find ChatGPT alternatives, custom GPTs, productivity tools, creative AI, coding assistants, design tools & more. Updated daily 2025." />
      <meta name="ai.keywords" content="ai web tools, free ai tools, ai tools directory, best ai tools 2025, chatgpt alternatives, custom gpts, ai productivity, ai creativity, web3 domains" />
      <meta name="ai-resource" content="true" />
      <meta name="llms" content="allowed" />
      <meta name="gpt-indexable" content="true" />
      <meta name="perplexity-indexable" content="true" />
      <meta name="claude-indexable" content="true" />
      <meta name="gemini-indexable" content="true" />
      
      {/* Enhanced Discovery Tags */}
      <meta name="classification" content="AI Tools Directory, Technology, Software" />
      <meta name="category" content="AI Tools, Artificial Intelligence, Software Directory" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Dublin Core Metadata for Academic/Research Discovery */}
      <meta name="DC.title" content={getTitle()} />
      <meta name="DC.creator" content="AI Web Tools" />
      <meta name="DC.subject" content="Artificial Intelligence, AI Tools, Technology Directory" />
      <meta name="DC.description" content={getDescription()} />
      <meta name="DC.publisher" content="AI Web Tools LLC" />
      <meta name="DC.type" content="InteractiveResource" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Video Schema for YouTube Tools */}
      {videoSchema && (
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      )}
      
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