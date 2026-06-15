
export const generateArticleStructuredData = (tool: any, toolIndex: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${tool.title} - AI Tool Review & Complete Guide`,
    "description": tool.description,
    "image": `https://aiwebtools.ai/placeholder.svg`,
    "author": {
      "@type": "Organization",
      "name": "AI WEB TOOLS",
      "url": "https://aiwebtools.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI WEB TOOLS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aiwebtools.ai/favicon.ico"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aiwebtools.ai/tool/${toolIndex}`
    },
    "articleSection": tool.category,
    "keywords": [tool.title, tool.category, "AI tool", "artificial intelligence", ...(tool.tags || [])].join(", ")
  };
};

export const generateHowToStructuredData = (tool: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Use ${tool.title}`,
    "description": `Step-by-step guide to using ${tool.title} AI tool effectively`,
    "image": "https://aiwebtools.ai/placeholder.svg",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Internet connection"
      },
      {
        "@type": "HowToSupply", 
        "name": "Web browser"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": tool.title
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "text": `Visit ${tool.title} website`,
        "name": "Access the tool"
      },
      {
        "@type": "HowToStep",
        "text": "Create an account or sign in",
        "name": "Authentication"
      },
      {
        "@type": "HowToStep",
        "text": `Start using ${tool.title} features`,
        "name": "Begin using the tool"
      }
    ]
  };
};

export const generateVideoObjectStructuredData = (tool: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${tool.title} Demo Video`,
    "description": `Watch how to use ${tool.title} AI tool`,
    "thumbnailUrl": "https://aiwebtools.ai/placeholder.svg",
    "uploadDate": "2024-01-01",
    "duration": "PT3M",
    "embedUrl": `https://aiwebtools.ai/tool/${tool.title}#video`,
    "publisher": {
      "@type": "Organization",
      "name": "AI WEB TOOLS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aiwebtools.ai/favicon.ico"
      }
    }
  };
};

export const generateAdvancedMetaTags = (tool: any, toolIndex: number) => {
  return {
    // Enhanced product meta
    "product:brand": "AI WEB TOOLS",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:price:amount": "0.00",
    "product:price:currency": "USD",
    "product:retailer_item_id": toolIndex.toString(),
    
    // Enhanced article meta
    "article:published_time": "2024-01-01T00:00:00Z",
    "article:modified_time": new Date().toISOString(),
    "article:section": tool.category,
    "article:tag": tool.tags?.join(", ") || "",
    
    // Mobile app meta
    "al:ios:app_name": "AITools.Studio",
    "al:ios:url": `aitools://tool/${toolIndex}`,
    "al:android:app_name": "AITools.Studio",
    "al:android:url": `aitools://tool/${toolIndex}`,
    "al:web:url": `https://aiwebtools.ai/tool/${toolIndex}`,
    
    // Additional SEO meta
    "DC.title": tool.title,
    "DC.description": tool.description,
    "DC.subject": tool.category,
    "DC.creator": "AI WEB TOOLS",
    "DC.publisher": "AI WEB TOOLS",
    "DC.date": new Date().toISOString().split('T')[0],
    "DC.type": "Software",
    "DC.language": "en",
    
    // Pinterest meta
    "pinterest:description": tool.description,
    "pinterest:url": `https://aiwebtools.ai/tool/${toolIndex}`,
    
    // LinkedIn meta
    "linkedin:owner": "AI WEB TOOLS",
    
    // Additional Open Graph
    "og:determiner": "the",
    "og:updated_time": new Date().toISOString(),
    "og:see_also": "https://aiwebtools.ai",
    
    // Business meta
    "business:contact_data:street_address": "Remote",
    "business:contact_data:locality": "Global",
    "business:contact_data:region": "Worldwide",
    "business:contact_data:postal_code": "00000",
    "business:contact_data:country_name": "United States"
  };
};
