
export const seoConfig = {
  siteName: "AI WEB TOOLS LLC - AITools.Studio",
  siteUrl: "https://aitools.studio",
  description: "Discover 1000+ AI-powered tools designed to enhance your creative process, productivity, and innovation. Browse our comprehensive collection of AI tools for business, design, video, audio, and more.",
  keywords: [
    "AI tools",
    "artificial intelligence",
    "productivity tools",
    "business AI",
    "AI art generators",
    "video AI tools",
    "audio AI tools",
    "ChatGPT alternatives",
    "AI assistants",
    "machine learning tools",
    "AI automation",
    "content creation AI",
    "AI writing tools",
    "image generation AI",
    "AI for business",
    "free AI tools",
    "best AI tools 2025",
    "AI web tools",
    "aitools.studio",
    "ai web tools llc"
  ],
  author: "AI WEB TOOLS LLC",
  twitterHandle: "@aiwebtools",
  facebookAppId: "your-facebook-app-id"
};

export const generateStructuredData = (pageType: 'homepage' | 'tool' | 'category', data?: any) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI WEB TOOLS LLC",
    "url": seoConfig.siteUrl,
    "logo": `${seoConfig.siteUrl}/favicon.ico`,
    "sameAs": [
      "https://aitools.company",
      "https://www.aiwebtools.ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+14758008096",
      "contactType": "customer service",
      "email": "Contact@ai-webtools.com"
    }
  };

  switch (pageType) {
    case 'homepage':
      return {
        ...baseData,
        "@type": "WebSite",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${seoConfig.siteUrl}/?search={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
    
    case 'tool':
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": data?.title || "AI Tool",
        "description": data?.description || "Advanced AI-powered tool",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": data?.rating ? {
          "@type": "AggregateRating",
          "ratingValue": data.rating,
          "ratingCount": data.totalVotes || 100
        } : undefined
      };
    
    case 'category':
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${data?.category || 'AI Tools'} - AI WEB TOOLS LLC`,
        "description": `Browse our collection of ${data?.category || 'AI'} tools`,
        "url": `${seoConfig.siteUrl}/category/${data?.category || ''}`
      };
    
    default:
      return baseData;
  }
};
