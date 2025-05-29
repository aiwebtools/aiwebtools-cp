
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
    "ai web tools llc",
    "ai tools directory",
    "artificial intelligence software",
    "AI productivity suite",
    "enterprise AI tools",
    "AI development platform"
  ],
  author: "AI WEB TOOLS LLC",
  twitterHandle: "@aiwebtools",
  facebookAppId: "your-facebook-app-id"
};

export const generateStructuredData = (pageType: 'homepage' | 'tool' | 'category', data?: any) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI WEB TOOLS LLC",
    "alternateName": "AITools.Studio",
    "url": seoConfig.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${seoConfig.siteUrl}/favicon.ico`,
      "width": 512,
      "height": 512
    },
    "description": seoConfig.description,
    "foundingDate": "2024",
    "numberOfEmployees": "1-10",
    "industry": "Technology",
    "sameAs": [
      "https://aitools.company",
      "https://www.aiwebtools.ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+14758008096",
      "contactType": "customer service",
      "email": "Contact@ai-webtools.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  switch (pageType) {
    case 'homepage':
      return [
        baseOrganization,
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": seoConfig.siteName,
          "url": seoConfig.siteUrl,
          "description": seoConfig.description,
          "publisher": {
            "@type": "Organization",
            "name": "AI WEB TOOLS LLC"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${seoConfig.siteUrl}/?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AI Tools Directory",
          "description": "Comprehensive collection of AI-powered tools",
          "numberOfItems": 1000,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "AI Assistants",
              "description": "Intelligent AI assistants for various tasks"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Image Generation",
              "description": "AI-powered image creation tools"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Writing & Content",
              "description": "AI writing and content creation tools"
            }
          ]
        }
      ];
    
    case 'tool':
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": data?.title || "AI Tool",
        "description": data?.description || "Advanced AI-powered tool",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Web Browser",
        "browserRequirements": "Requires JavaScript. Works with Chrome, Firefox, Safari, Edge.",
        "softwareVersion": "Latest",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "author": {
          "@type": "Organization",
          "name": "AI WEB TOOLS LLC"
        },
        "publisher": {
          "@type": "Organization", 
          "name": "AI WEB TOOLS LLC"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": data?.rating ? {
          "@type": "AggregateRating",
          "ratingValue": data.rating,
          "bestRating": "5",
          "worstRating": "1", 
          "ratingCount": data.totalVotes || 100
        } : undefined,
        "featureList": [
          "AI-powered functionality",
          "Web-based interface",
          "Real-time processing",
          "User-friendly design"
        ]
      };
    
    case 'category':
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${data?.category || 'AI Tools'} - AI WEB TOOLS LLC`,
        "description": `Browse our collection of ${data?.category || 'AI'} tools for enhanced productivity and creativity`,
        "url": `${seoConfig.siteUrl}/category/${data?.category || ''}`,
        "mainEntity": {
          "@type": "ItemList",
          "name": `${data?.category || 'AI'} Tools Collection`,
          "description": `Curated list of ${data?.category || 'AI'} tools`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": seoConfig.siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": data?.category || 'Category',
              "item": `${seoConfig.siteUrl}/category/${data?.category || ''}`
            }
          ]
        }
      };
    
    default:
      return baseOrganization;
  }
};

export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI tools are software applications that use artificial intelligence to automate tasks, enhance productivity, and provide intelligent solutions for various business and creative needs."
        }
      },
      {
        "@type": "Question", 
        "name": "Are these AI tools free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many AI tools offer free tiers or trials. Our directory includes both free and premium AI tools, with clear pricing information for each tool."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right AI tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider your specific needs, budget, and technical requirements. Use our category filters and search functionality to find tools that match your use case."
        }
      }
    ]
  };
};
