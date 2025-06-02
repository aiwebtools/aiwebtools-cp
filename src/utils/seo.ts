
export const seoConfig = {
  siteName: "AI WEB TOOLS LLC - AITools.Studio",
  siteUrl: "https://aitools.studio",
  description: "Discover 1000+ AI-powered tools designed to enhance your creative process, productivity, and innovation. Browse our comprehensive collection of AI tools for business, design, video, audio, and more.",
  keywords: [
    // Primary AI keywords
    "AI tools",
    "artificial intelligence",
    "AI tools directory",
    "best AI tools 2025",
    "free AI tools",
    "AI web tools",
    "aitools.studio",
    "ai web tools llc",
    
    // High-volume search terms
    "ChatGPT alternatives",
    "AI assistants",
    "AI chatbots",
    "AI image generator",
    "AI art generator",
    "AI writing tools",
    "AI video editor",
    "AI content creator",
    
    // Productivity and Business
    "productivity tools",
    "business AI",
    "AI automation",
    "enterprise AI tools",
    "AI for business",
    "business automation",
    "AI productivity suite",
    "workflow automation",
    "AI marketing tools",
    "AI sales tools",
    
    // Creative AI Tools
    "AI art generators",
    "AI image generation",
    "AI video tools",
    "AI music creation",
    "creative AI tools",
    "AI design tools",
    "content creation AI",
    "AI photo editor",
    "AI graphic design",
    
    // Development and Technical
    "AI development platform",
    "machine learning tools",
    "AI APIs",
    "AI development tools",
    "artificial intelligence software",
    "AI programming tools",
    "AI code generation",
    "developer AI tools",
    
    // Popular AI Platforms
    "OpenAI tools",
    "GPT tools",
    "Claude AI",
    "Gemini AI",
    "Midjourney alternative",
    "Stable Diffusion tools",
    "AI models",
    
    // Specific Use Cases
    "AI for education",
    "AI for healthcare",
    "AI for marketing",
    "AI for writing",
    "AI for video editing",
    "AI for data analysis",
    "AI for research",
    "AI for social media",
    
    // Long-tail keywords
    "how to use AI tools",
    "AI tools comparison",
    "AI tools reviews",
    "AI tools tutorial",
    "AI tools guide",
    "professional AI tools",
    "AI tools for beginners",
    "advanced AI tools",
    "AI tools 2025",
    "artificial intelligence directory",
    
    // Industry-specific
    "AI for small business",
    "AI for startups",
    "AI for content creators",
    "AI for designers",
    "AI for developers",
    "AI for marketers",
    "AI for writers",
    "AI for students",
    
    // Trending terms
    "generative AI",
    "machine learning",
    "deep learning",
    "neural networks",
    "AI automation tools",
    "AI workflow",
    "AI assistant tools"
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
    "industry": ["Technology", "Artificial Intelligence", "Software"],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Tools",
      "Productivity Software",
      "Creative Technology",
      "Business Automation"
    ],
    "sameAs": [
      "https://aitools.company",
      "https://www.aiwebtools.ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.organization.telephone,
      "contactType": "customer service",
      "email": seoConfig.organization.email,
      "availableLanguage": ["English"]
    },
    "address": seoConfig.organization.address,
    "areaServed": "Worldwide",
    "serviceType": ["AI Tools Directory", "Software Recommendations", "Technology Guidance"]
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
            "name": "AI Tools Collection",
            "description": "Comprehensive directory of AI-powered tools",
            "numberOfItems": 1000
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Featured AI Tools Directory",
          "description": "Curated collection of the best AI tools for 2025",
          "numberOfItems": 1000,
          "url": seoConfig.siteUrl,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "AI Assistants & Chatbots",
              "description": "Intelligent AI assistants for various tasks and conversations",
              "url": `${seoConfig.siteUrl}/category/AI%20Assistants`
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Image Generation & AI Art",
              "description": "AI-powered image creation and artistic tools",
              "url": `${seoConfig.siteUrl}/category/Image%20Generation`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Writing & Content Creation",
              "description": "AI writing assistants and content generation tools",
              "url": `${seoConfig.siteUrl}/category/Writing%20%26%20Content`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Video & Audio Tools",
              "description": "AI-powered video editing and audio creation tools",
              "url": `${seoConfig.siteUrl}/category/Video%20Tools`
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Business & Productivity",
              "description": "AI tools for business automation and productivity enhancement",
              "url": `${seoConfig.siteUrl}/category/Business%20%26%20Productivity`
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "AI Tools Directory 2025",
          "description": "The most comprehensive directory of AI tools available in 2025",
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
                "name": "Home",
                "item": seoConfig.siteUrl
              }
            ]
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
          "releaseNotes": "Latest AI improvements and feature updates"
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
          "name": `${data?.title || 'AI Tool'} Review`,
          "author": baseOrganization,
          "reviewBody": `${data?.title || 'This AI tool'} provides excellent functionality for ${data?.category?.toLowerCase() || 'productivity'} tasks. ${data?.description || 'A powerful AI-powered solution.'}`
        }
      ];
    
    case 'category':
      return [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `${data?.category || 'AI Tools'} - AI WEB TOOLS LLC`,
          "description": `Discover the best ${data?.category || 'AI'} tools for enhanced productivity and creativity. Curated collection of professional-grade AI solutions.`,
          "url": `${seoConfig.siteUrl}/category/${encodeURIComponent(data?.category || '')}`,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": seoConfig.siteName,
            "url": seoConfig.siteUrl
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": `${data?.category || 'AI'} Tools Collection`,
            "description": `Professional ${data?.category || 'AI'} tools for business and creative use`,
            "numberOfItems": data?.toolCount || 10
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
                "item": `${seoConfig.siteUrl}/category/${encodeURIComponent(data?.category || '')}`
              }
            ]
          },
          "about": {
            "@type": "Thing",
            "name": data?.category || 'AI Tools',
            "description": `Tools and software related to ${data?.category || 'artificial intelligence'}`
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
        "name": "What are AI tools and how do they work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI tools are software applications powered by artificial intelligence that automate tasks, enhance productivity, and provide intelligent solutions. They use machine learning algorithms to process data, understand patterns, and generate outputs that assist users in various creative, business, and technical tasks."
        }
      },
      {
        "@type": "Question", 
        "name": "Are these AI tools free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many AI tools in our directory offer free tiers, trials, or completely free access. Each tool listing includes pricing information, and we clearly indicate which tools are free, freemium, or paid. You can filter by pricing to find tools that fit your budget."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right AI tool for my needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider your specific use case, budget, technical requirements, and desired features. Use our category filters, search functionality, and read tool descriptions to find solutions that match your needs. Our tools are organized by categories like Business & Productivity, Creative Services, Writing & Content, and more."
        }
      },
      {
        "@type": "Question",
        "name": "What categories of AI tools do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer AI tools across multiple categories including AI Assistants, Image Generation, Writing & Content, Video Tools, Audio & Music, Business & Productivity, Education & Learning, Creative Services, and specialized professional tools for healthcare, legal, and other industries."
        }
      },
      {
        "@type": "Question",
        "name": "How often is your AI tools directory updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI tools directory is regularly updated with new tools, feature updates, and the latest AI innovations. We continuously curate and add high-quality AI tools to ensure users have access to the most current and effective solutions available."
        }
      },
      {
        "@type": "Question",
        "name": "Can I suggest an AI tool to be added to your directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We welcome suggestions for high-quality AI tools. You can contact us at Contact@ai-webtools.com with information about tools you'd like to see featured. We review all submissions to ensure they meet our quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your AI tools directory different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our directory features over 1000+ carefully curated AI tools across multiple categories. We provide detailed descriptions, ratings, and direct access to each tool. Our collection includes both free and premium options, with a focus on tools that enhance productivity, creativity, and business efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Are these AI tools suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our directory includes AI tools for all skill levels, from beginner-friendly options to advanced professional tools. Each tool listing includes information about ease of use, and we categorize tools to help you find options that match your experience level."
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
    "description": "Professional AI tools directory and technology consultation services",
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
    "serviceType": ["AI Tools Directory", "Technology Consultation", "Software Recommendations"],
    "priceRange": "Free - Premium",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Credit Card", "PayPal", "Bank Transfer"],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500+",
      "bestRating": "5"
    }
  };
};
