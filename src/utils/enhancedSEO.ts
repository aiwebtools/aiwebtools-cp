// Enhanced SEO Utilities for Maximum Search Engine Visibility
// Optimized for "aiwebtools.ai" and "ai web tools" keywords

export const generateEnhancedStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ai-webtools.com/#organization",
        "name": "AI WEB TOOLS",
        "alternateName": ["AIWEBTOOLS.AI", "AI WEB TOOLS", "AIWEBTOOLS", "AITools.Studio"],
        "url": "https://ai-webtools.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ai-webtools.com/favicon.ico",
          "width": 512,
          "height": 512
        },
        "description": "AIWEBTOOLS.AI - The #1 comprehensive AI web tools directory with 1000+ curated AI tools. Better than Toolify. Discover the best AI tools 2026 for business, creativity, and productivity.",
        "foundingDate": "2024",
        "numberOfEmployees": "1-10",
        "industry": "Technology",
        "knowsAbout": [
          "AI WEB TOOLS",
          "aiwebtools.ai",
          "artificial intelligence tools",
          "machine learning platforms",
          "automation software",
          "productivity tools",
          "business AI solutions",
          "creative AI tools",
          "ChatGPT alternatives"
        ],
        "sameAs": [
          "https://ai-webtools.com",
          "https://www.aiwebtools.ai",
          "https://linktr.ee/aiwebtools",
          "https://www.tiktok.com/@aiwebtools"
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
        },
        "brand": {
          "@type": "Brand",
          "name": "AIWEBTOOLS.AI",
          "alternateName": "AI WEB TOOLS"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ai-webtools.com/#website",
        "url": "https://ai-webtools.com",
        "name": "AIWEBTOOLS.AI - #1 AI WEB TOOLS Directory",
        "alternateName": "AI WEB TOOLS Directory",
        "description": "AIWEBTOOLS.AI - The #1 comprehensive AI web tools directory with 1000+ curated AI tools. Better than Toolify. Discover the best AI tools 2026 for business, creativity, and productivity.",
        "publisher": {
          "@id": "https://ai-webtools.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://ai-webtools.com/?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "AI WEB TOOLS",
            "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
          },
          {
            "@type": "Thing", 
            "name": "aiwebtools.ai",
            "description": "Comprehensive AI tools directory platform"
          }
        ],
        "keywords": "aiwebtools.ai, ai web tools, AIWEBTOOLS, AI WEB TOOLS, best ai tools 2026, ai tools directory, better than toolify, comprehensive ai tools, verified ai tools, ChatGPT alternatives"
      },
      {
        "@type": "ItemList",
        "@id": "https://ai-webtools.com/#itemlist",
        "name": "AI WEB TOOLS Directory",
        "description": "Comprehensive list of 1000+ AI tools curated by AIWEBTOOLS.AI",
        "numberOfItems": 1000,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "mainEntity": {
          "@id": "https://ai-webtools.com/#website"
        }
      },
      {
        "@type": "Service",
        "@id": "https://ai-webtools.com/#service",
        "name": "AI WEB TOOLS Directory Service",
        "description": "Professional AI tools curation and directory service by AIWEBTOOLS.AI",
        "provider": {
          "@id": "https://ai-webtools.com/#organization"
        },
        "serviceType": "AI Tools Directory",
        "areaServed": "Worldwide",
        "audience": {
          "@type": "Audience",
          "audienceType": ["Business Professionals", "Content Creators", "Developers", "Entrepreneurs", "Students"]
        }
      },
      {
        "@type": "Dataset",
        "@id": "https://ai-webtools.com/#dataset", 
        "name": "AIWEBTOOLS.AI - AI Tools Dataset",
        "description": "Comprehensive dataset of 1000+ AI tools with detailed metadata, categories, and reviews",
        "creator": {
          "@id": "https://ai-webtools.com/#organization"
        },
        "keywords": "ai tools, artificial intelligence, machine learning, automation, productivity, business tools",
        "license": "https://ai-webtools.com/terms"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ai-webtools.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AIWEBTOOLS.AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AIWEBTOOLS.AI is the #1 comprehensive AI web tools directory with 1000+ curated AI tools. We provide better service than Toolify with verified AI tools, detailed reviews, and direct access links."
            }
          },
          {
            "@type": "Question", 
            "name": "How many AI tools are in the AI WEB TOOLS directory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AIWEBTOOLS.AI features over 1000+ carefully curated AI tools across multiple categories including business, creativity, productivity, and more."
            }
          },
          {
            "@type": "Question",
            "name": "Is AIWEBTOOLS.AI better than Toolify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, AIWEBTOOLS.AI offers a more comprehensive directory with better curation, verified tools, detailed reviews, and superior user experience compared to Toolify."
            }
          }
        ]
      }
    ]
  };
};

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateToolStructuredData = (tool: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.title,
    "description": tool.description,
    "url": tool.directUrl,
    "applicationCategory": "AI Tool",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "100"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI WEB TOOLS",
      "url": "https://ai-webtools.com"
    }
  };
};

export const generateCategoryStructuredData = (category: string, tools: any[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category} - AI WEB TOOLS Directory`,
    "description": `Discover the best ${category} AI tools curated by AIWEBTOOLS.AI`,
    "url": `https://ai-webtools.com/category/${encodeURIComponent(category)}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": tools.length,
      "itemListElement": tools.slice(0, 10).map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.title,
          "url": tool.directUrl
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AIWEBTOOLS.AI",
          "item": "https://ai-webtools.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": category,
          "item": `https://ai-webtools.com/category/${encodeURIComponent(category)}`
        }
      ]
    }
  };
};

export const generateSearchResultsStructuredData = (query: string, results: any[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "name": `Search Results for "${query}" - AIWEBTOOLS.AI`,
    "description": `Find the best AI tools for ${query} in our comprehensive directory`,
    "url": `https://ai-webtools.com/?search=${encodeURIComponent(query)}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": results.length,
      "itemListElement": results.slice(0, 10).map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.title,
          "description": tool.description,
          "url": tool.directUrl
        }
      }))
    }
  };
};

export const metaKeywords = [
  "aiwebtools.ai",
  "AIWEBTOOLS.AI", 
  "aiwebtools",
  "AIWEBTOOLS",
  "ai web tools",
  "AI WEB TOOLS",
  "AI WEB TOOLS directory",
  "aiwebtools ai",
  "ai web tools ai",
  "best ai tools 2026",
  "ai tools directory",
  "better than toolify",
  "comprehensive ai tools",
  "verified ai tools",
  "ChatGPT alternatives",
  "top ai tools ranking",
  "professional ai tools",
  "enterprise ai solutions",
  "ai tools comparison",
  "trusted ai directory",
  "complete ai tools list",
  "ai tools marketplace",
  "curated ai tools",
  "aitools studio",
  "ai tools company",
  "ai web tools"
];