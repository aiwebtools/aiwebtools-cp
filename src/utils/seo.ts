
export const seoConfig = {
  siteName: "AI WEB TOOLS LLC - AITools.Studio",
  siteUrl: "https://aitools.studio",
  description: "🔥 Discover 1000+ Best AI Tools 2025 | AI WEB TOOLS - The Ultimate AI Tools Directory. Find ChatGPT alternatives, AI image generators, writing tools & more. Free AI tools directory trusted by 100K+ users.",
  keywords: [
    // Primary competitive keywords - targeting Toolify competitors
    "AI WEB TOOLS",
    "best AI tools 2025",
    "AI tools directory",
    "top AI tools",
    "AI tools like ChatGPT",
    "artificial intelligence tools",
    "free AI tools",
    "AI tools for business",
    "AI tools for content creation",
    "AI tools for marketing",
    "AI tools for developers",
    "AI tools for writing",
    "AI tools for video editing",
    "AI tools for image generation",
    "AI tools for productivity",
    
    // Long-tail competitive keywords
    "best AI tools for small business 2025",
    "top AI writing tools compared",
    "AI image generator tools ranking",
    "ChatGPT alternatives comparison",
    "AI productivity tools review",
    "best free AI tools directory",
    "AI tools for entrepreneurs",
    "AI automation tools 2025",
    "professional AI tools guide",
    "AI tools marketplace",
    
    // Brand and authority keywords
    "aitools.studio",
    "ai web tools llc",
    "AI WEB TOOLS directory",
    "trusted AI tools platform",
    "curated AI tools collection",
    "verified AI tools list",
    "comprehensive AI tools database",
    
    // Category-specific competitive keywords
    "AI content creation tools",
    "AI video editing software",
    "AI design tools 2025",
    "AI SEO tools comparison",
    "AI customer service tools",
    "AI data analysis tools",
    "AI project management tools",
    "AI sales automation tools",
    "AI social media tools",
    "AI email marketing tools",
    
    // Technology and platform keywords
    "OpenAI tools directory",
    "GPT-4 powered tools",
    "machine learning tools",
    "deep learning applications",
    "neural network tools",
    "AI API integration",
    "enterprise AI solutions",
    "AI workflow automation",
    "AI business intelligence",
    "AI customer analytics",
    
    // Intent-based search terms
    "how to find best AI tools",
    "AI tools comparison 2025",
    "AI tools reviews and ratings",
    "where to discover AI tools",
    "AI tools recommendations",
    "AI tools buying guide",
    "AI tools for beginners",
    "advanced AI tools directory",
    
    // Competitive brand targeting
    "toolify alternative",
    "better than toolify",
    "AI tools like toolify",
    "futurepedia alternative",
    "theresanaiforthat alternative",
    "comprehensive AI directory",
    "complete AI tools catalog",
    
    // Local and geo-targeted
    "AI tools USA",
    "American AI companies",
    "US AI tool directory",
    "North America AI tools",
    
    // Industry-specific
    "AI tools for healthcare",
    "AI tools for education",
    "AI tools for finance",
    "AI tools for legal",
    "AI tools for real estate",
    "AI tools for ecommerce",
    "AI tools for manufacturing",
    "AI tools for consulting"
  ],
  author: "AI WEB TOOLS LLC",
  twitterHandle: "@aiwebtools",
  facebookAppId: "your-facebook-app-id",
  organization: {
    name: "AI WEB TOOLS LLC",
    alternateName: "AITools.Studio",
    foundingDate: "2024",
    email: "Contact@ai-webtools.com",
    telephone: "+14758008096",
    address: {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "United States"
    }
  }
};

export const generateStructuredData = (pageType: 'homepage' | 'tool' | 'category', data?: any) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.organization.name,
    "alternateName": seoConfig.organization.alternateName,
    "url": seoConfig.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${seoConfig.siteUrl}/favicon.ico`,
      "width": 512,
      "height": 512
    },
    "description": seoConfig.description,
    "foundingDate": seoConfig.organization.foundingDate,
    "numberOfEmployees": "1-10",
    "industry": ["Technology", "Artificial Intelligence", "Software", "SaaS", "Directory Services"],
    "knowsAbout": [
      "Artificial Intelligence Tools",
      "Machine Learning Platforms",
      "AI Directory Services",
      "Software Recommendations",
      "Technology Curation",
      "AI Tool Reviews",
      "Business Automation",
      "Creative AI Solutions",
      "Enterprise AI",
      "AI Development Platforms"
    ],
    "sameAs": [
      "https://aitools.company",
      "https://www.aiwebtools.ai",
      "https://twitter.com/aiwebtools"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.organization.telephone,
      "contactType": "customer service",
      "email": seoConfig.organization.email,
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    "address": seoConfig.organization.address,
    "areaServed": "Worldwide",
    "serviceType": ["AI Tools Directory", "Software Recommendations", "Technology Curation", "AI Tool Reviews"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Tech Professional"
        },
        "reviewBody": "Best AI tools directory I've found. Comprehensive collection and regularly updated."
      }
    ]
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
          "inLanguage": "en-US",
          "isFamilyFriendly": true,
          "publisher": {
            "@type": "Organization",
            "name": seoConfig.organization.name
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${seoConfig.siteUrl}/?search={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "mainEntity": {
            "@type": "ItemList",
            "name": "Best AI Tools 2025 - Complete Directory",
            "description": "Comprehensive directory of 1000+ verified AI tools",
            "numberOfItems": 1000
          },
          "audience": {
            "@type": "Audience",
            "audienceType": ["Business Professionals", "Content Creators", "Developers", "Entrepreneurs", "Students", "Researchers"]
          },
          "keywords": seoConfig.keywords.slice(0, 20).join(", ")
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Top AI Tools Directory 2025",
          "description": "Curated collection of the best AI tools for business, creativity, and productivity",
          "numberOfItems": 1000,
          "url": seoConfig.siteUrl,
          "itemListOrder": "https://schema.org/ItemListOrderDescending",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "AI Assistants & Chatbots",
              "description": "Best AI assistants and chatbot tools for business and personal use",
              "url": `${seoConfig.siteUrl}/category/AI%20Assistants`
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "AI Image Generation & Art Tools",
              "description": "Top AI image generators and art creation tools",
              "url": `${seoConfig.siteUrl}/category/Image%20Generation`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "AI Writing & Content Creation Tools",
              "description": "Best AI writing assistants and content generation tools",
              "url": `${seoConfig.siteUrl}/category/Writing%20%26%20Content`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "AI Video & Audio Tools",
              "description": "Professional AI video editing and audio creation tools",
              "url": `${seoConfig.siteUrl}/category/Video%20Tools`
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "AI Business & Productivity Tools",
              "description": "Enterprise AI tools for business automation and productivity",
              "url": `${seoConfig.siteUrl}/category/Business%20%26%20Productivity`
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Best AI Tools 2025 - AI WEB TOOLS Directory",
          "description": "The ultimate directory of AI tools. Find ChatGPT alternatives, AI image generators, writing tools, and more. Trusted by 100K+ users.",
          "url": seoConfig.siteUrl,
          "mainEntity": {
            "@type": "ItemList",
            "name": "Complete AI Tools Collection",
            "numberOfItems": 1000
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "AI Tools Directory",
                "item": seoConfig.siteUrl
              }
            ]
          },
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-description", ".featured-tools"]
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "AI WEB TOOLS Directory Platform",
          "applicationCategory": "WebApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2000"
          }
        }
      ];
    
    case 'tool':
      const toolRating = data?.rating || 4.5;
      const toolVotes = data?.totalVotes || 100;
      
      return [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data?.title || "AI Tool",
          "description": data?.description || "Advanced AI-powered tool for enhanced productivity",
          "applicationCategory": "ProductivityApplication",
          "applicationSubCategory": data?.category || "AI Tools",
          "operatingSystem": "Web Browser",
          "browserRequirements": "Requires JavaScript. Compatible with Chrome, Firefox, Safari, Edge.",
          "softwareVersion": "Latest",
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "author": baseOrganization,
          "publisher": baseOrganization,
          "creator": baseOrganization,
          "maintainer": baseOrganization,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "seller": baseOrganization
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": toolRating,
            "bestRating": "5",
            "worstRating": "1", 
            "ratingCount": toolVotes,
            "reviewCount": Math.floor(toolVotes * 0.3)
          },
          "featureList": [
            "AI-powered functionality",
            "Web-based interface", 
            "Real-time processing",
            "User-friendly design",
            "Cross-platform compatibility",
            "Professional-grade results"
          ],
          "screenshot": data?.imageUrl || `${seoConfig.siteUrl}/placeholder.svg`,
          "thumbnailUrl": data?.imageUrl || `${seoConfig.siteUrl}/placeholder.svg`,
          "image": data?.imageUrl || `${seoConfig.siteUrl}/placeholder.svg`,
          "downloadUrl": data?.directUrl,
          "installUrl": data?.directUrl,
          "memoryRequirements": "256MB",
          "processorRequirements": "Any modern processor",
          "storageRequirements": "No local storage required",
          "permissions": "Internet access",
          "supportingData": data?.videoUrl,
          "releaseNotes": "Latest AI improvements and feature updates",
          "keywords": `${data?.title}, ${data?.category}, AI tool, artificial intelligence, ${data?.tags?.join(', ') || ''}`
        },
        {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": data?.title || "AI Tool"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": toolRating,
            "bestRating": "5"
          },
          "name": `${data?.title || 'AI Tool'} Review - AI WEB TOOLS`,
          "author": baseOrganization,
          "reviewBody": `${data?.title || 'This AI tool'} provides excellent functionality for ${data?.category?.toLowerCase() || 'productivity'} tasks. ${data?.description || 'A powerful AI-powered solution.'} Highly recommended by AI WEB TOOLS for professional use.`,
          "datePublished": "2024-01-01",
          "publisher": baseOrganization
        }
      ];
    
    case 'category':
      return [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `Best ${data?.category || 'AI'} Tools 2025 - AI WEB TOOLS`,
          "description": `Discover the top ${data?.category || 'AI'} tools for 2025. Curated collection of professional-grade AI solutions for ${data?.category?.toLowerCase() || 'various'} applications.`,
          "url": `${seoConfig.siteUrl}/category/${encodeURIComponent(data?.category || '')}`,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": seoConfig.siteName,
            "url": seoConfig.siteUrl
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": `Best ${data?.category || 'AI'} Tools Collection`,
            "description": `Professional ${data?.category || 'AI'} tools for business and creative use`,
            "numberOfItems": data?.toolCount || 10
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "AI Tools Directory",
                "item": seoConfig.siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": `${data?.category || 'Category'} Tools`,
                "item": `${seoConfig.siteUrl}/category/${encodeURIComponent(data?.category || '')}`
              }
            ]
          },
          "about": {
            "@type": "Thing",
            "name": `${data?.category || 'AI'} Tools`,
            "description": `Professional tools and software for ${data?.category?.toLowerCase() || 'artificial intelligence'} applications`
          },
          "audience": {
            "@type": "Audience",
            "audienceType": ["Business Professionals", "Content Creators", "Developers"]
          }
        }
      ];
    
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
        "name": "What is AI WEB TOOLS and how is it different from other AI directories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI WEB TOOLS is the most comprehensive AI tools directory featuring 1000+ curated AI applications. Unlike other directories, we provide detailed reviews, ratings, and direct access to each tool. Our collection is constantly updated and includes both free and premium AI solutions across all categories."
        }
      },
      {
        "@type": "Question",
        "name": "How do you compare to Toolify and other AI tool websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI WEB TOOLS offers a more comprehensive collection with detailed categorization, user ratings, and professional reviews. We focus on quality curation, regular updates, and providing direct access to tools. Our directory includes exclusive tools and detailed descriptions that help users make informed decisions."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the best AI tools for business in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best AI tools for business in 2025 include AI assistants for productivity, content creation tools, video editing software, data analysis platforms, and automation tools. Our directory features top-rated business AI tools with detailed reviews and pricing information."
        }
      },
      {
        "@type": "Question",
        "name": "Are these AI tools free or paid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our directory includes both free and paid AI tools. Many tools offer free tiers or trials, and we clearly indicate pricing for each tool. You can filter by pricing to find tools that fit your budget, from completely free options to enterprise solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How often do you update your AI tools directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We update our AI tools directory daily with new tools, feature updates, and the latest AI innovations. Our team continuously curates and adds high-quality AI tools to ensure users have access to the most current and effective solutions available."
        }
      },
      {
        "@type": "Question",
        "name": "What categories of AI tools do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer AI tools across 15+ categories including AI Assistants, Image Generation, Writing & Content, Video Tools, Audio & Music, Business & Productivity, Education & Learning, Creative Services, Healthcare, Legal, Marketing, and specialized professional tools."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find the best AI tool for my specific needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our advanced search and filtering system to find tools by category, pricing, features, or ratings. Each tool includes detailed descriptions, user reviews, and feature lists. You can also browse by use case or read our curated recommendations for specific industries."
        }
      },
      {
        "@type": "Question",
        "name": "Can I submit an AI tool to your directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We welcome submissions of high-quality AI tools. Contact us at Contact@ai-webtools.com with information about the tool. We review all submissions to ensure they meet our quality standards before adding them to the directory."
        }
      }
    ]
  };
};

export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AI WEB TOOLS LLC",
    "alternateName": "AITools.Studio",
    "description": "The world's most comprehensive AI tools directory and technology consultation services. Trusted by 100K+ users worldwide.",
    "url": seoConfig.siteUrl,
    "telephone": "+14758008096",
    "email": "Contact@ai-webtools.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "areaServed": "Worldwide",
    "serviceType": ["AI Tools Directory", "Technology Consultation", "Software Recommendations", "AI Tool Reviews", "Business Intelligence"],
    "priceRange": "Free - Premium",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Credit Card", "PayPal", "Bank Transfer"],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000+",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Business Owner"
        },
        "reviewBody": "Best AI tools directory available. Much better than Toolify with more comprehensive listings and better organization."
      }
    ]
  };
};

// Additional competitive SEO functions
export const generateCompetitiveKeywords = () => {
  return [
    "AI WEB TOOLS vs Toolify",
    "better than toolify ai directory",
    "comprehensive ai tools list 2025",
    "complete ai tools database",
    "verified ai tools directory",
    "trusted ai tools platform",
    "professional ai tools collection",
    "enterprise ai tools directory",
    "best ai tools comparison site",
    "ai tools marketplace 2025"
  ];
};

export const generateTrendingAIKeywords = () => {
  return [
    "ChatGPT alternatives 2025",
    "GPT-4 powered tools",
    "Claude AI alternatives",
    "Gemini AI tools",
    "OpenAI compatible tools",
    "AI agents 2025",
    "custom GPT tools",
    "AI automation platforms",
    "multimodal AI tools",
    "enterprise AI solutions"
  ];
};
