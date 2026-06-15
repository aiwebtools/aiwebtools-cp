import { Helmet } from 'react-helmet-async';
import { competitiveAdvantage } from '@/utils/googleRankingOptimizer';
import { generateToolSlug } from '@/utils/urlGenerator';

interface GoogleRankingBoosterProps {
  pageType?: 'homepage' | 'category' | 'tool' | 'search';
  toolData?: any;
  category?: string;
}

const GoogleRankingBooster = ({ pageType = 'homepage', toolData, category }: GoogleRankingBoosterProps) => {
  // Generate comprehensive competitive structured data
  const generateCompetitiveSchema = () => {
    const organizationSchema = {
      "@type": "Organization",
      "name": "AI WEB TOOLS",
      "alternateName": ["AI WEB TOOLS", "AIWebTools", "AITools.Studio"],
      "url": "https://aiwebtools.ai",
      "logo": "https://aiwebtools.ai/favicon.ico",
      "description": "The world's #1 most comprehensive AI web tools directory with 2195+ verified AI web tools. Find, compare, and access the best AI web tools for any purpose. Better than competitors with expert reviews and daily updates.",
      "foundingDate": "2023",
      "keywords": competitiveAdvantage.brandDominance.join(", ") + ", ai web tools, best ai web tools, ai web tools directory, find ai web tools, compare ai web tools",
      "slogan": "#1 AI Web Tools Directory - Find & Compare 2,195+ AI Web Tools",
      "awards": ["#1 AI Web Tools Directory 2026", "Most Comprehensive AI Web Tools Database", "Trusted by 100K+ Users"],
      "knowsAbout": [
        "AI Web Tools",
        "AI Web Tools Directory",
        "Best AI Web Tools",
        "Artificial Intelligence Tools",
        "AI Software Directory", 
        "Technology Curation",
        "AI Tool Reviews",
        "Enterprise AI Solutions"
      ],
      "sameAs": [
        "https://aiwebtools.ai",
        "https://aiwebtools.ai"
      ]
    };

    const websiteSchema = {
      "@type": "WebSite",
      "name": "AI WEB TOOLS - #1 AI Web Tools Directory",
      "alternateName": "AI Web Tools Directory",
      "url": "https://aiwebtools.ai",
      "description": "Discover 2,195+ AI web tools in the most comprehensive AI web tools directory. Find and compare the best AI web tools with expert reviews, ratings, and detailed analysis. Your trusted source for AI web tools.",
      "publisher": {
        "@type": "Organization",
        "name": "AI WEB TOOLS"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://aiwebtools.ai/?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "AI Web Tools Directory",
        "description": "Comprehensive collection of 2,195+ verified AI web tools",
        "numberOfItems": "2195+"
      }
    };

    const baseSchema = {
      "@context": "https://schema.org",
      "@graph": [organizationSchema, websiteSchema] as any[]
    };

    // Add tool-specific schema if available
    if (toolData) {
      const softwareSchema = {
        "@type": "SoftwareApplication",
        "name": toolData.title,
        "description": `${toolData.description} | Reviewed by AI WEB TOOLS experts. Get detailed analysis, pricing, and alternatives.`,
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating", 
          "ratingValue": toolData.rating || "4.5",
          "reviewCount": toolData.totalVotes || "100",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Organization",
            "name": "AI WEB TOOLS"
          },
          "reviewBody": `Comprehensive review of ${toolData.title} by AI WEB TOOLS experts. Excellent tool for ${toolData.category?.toLowerCase() || 'productivity'} with outstanding features and reliability.`
        }
      };
      baseSchema["@graph"].push(softwareSchema);
    }

    return baseSchema;
  };

  // Generate FAQ schema for featured snippets
  const generateFAQSchema = () => {
    const faqs = [
      {
        question: "What are AI web tools?",
        answer: "AI web tools are artificial intelligence-powered applications and software that run in web browsers. AI WEB TOOLS directory features 2,195+ AI web tools for content creation, business automation, data analysis, design, development, and more. These AI web tools help users work smarter and faster."
      },
      {
        question: "How do I find the best AI web tools?",
        answer: "Use AI WEB TOOLS directory to find and compare the best AI web tools. We provide expert reviews, ratings, pricing information, and detailed analysis for 2,195+ AI web tools. Filter by category, use case, or pricing to discover AI web tools perfect for your needs."
      },
      {
        question: "Are AI web tools free to use?",
        answer: "Many AI web tools offer free tiers or completely free access. On AI WEB TOOLS directory, we clearly indicate pricing for each AI web tool and highlight the best free AI web tools available. Browse our collection to find both free and premium AI web tools."
      },
      {
        question: "What makes AI WEB TOOLS the best AI web tools directory?",
        answer: "AI WEB TOOLS is the #1 AI web tools directory with 2,195+ verified AI web tools, expert reviews, daily updates, and comprehensive analysis. Unlike competitors, we test every AI web tool, provide detailed comparisons, and help you find the perfect AI web tools for your specific needs."
      },
      {
        question: "How often are new AI web tools added to the directory?",
        answer: "AI WEB TOOLS directory is updated daily with new AI web tools and reviews. Our team continuously discovers, tests, and adds the latest AI web tools to ensure you have access to the most current and innovative AI web tools available in 2026."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage", 
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Generate competitive How-To schema
  const generateHowToSchema = () => {
    if (!toolData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Use ${toolData.title} - Complete Guide 2026`,
      "description": `Step-by-step guide to using ${toolData.title} effectively. Expert tips and best practices from AI WEB TOOLS.`,
      "image": "https://aiwebtools.ai/placeholder.svg",
      "totalTime": "PT10M",
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
          "name": toolData.title
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Access the Tool",
          "text": `Visit the ${toolData.title} website and create an account if required.`,
          "url": `https://aiwebtools.ai/${generateToolSlug(toolData.title)}`
        },
        {
          "@type": "HowToStep",
          "name": "Explore Features",
          "text": `Familiarize yourself with ${toolData.title}'s interface and core features.`
        },
        {
          "@type": "HowToStep",
          "name": "Start Using",
          "text": `Begin using ${toolData.title} for your ${toolData.category?.toLowerCase() || 'productivity'} needs.`
        },
        {
          "@type": "HowToStep",
          "name": "Optimize Results",
          "text": `Apply advanced techniques and best practices for optimal results with ${toolData.title}.`
        }
      ]
    };
  };

  return (
    <Helmet>
      {/* Competitive Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(generateCompetitiveSchema())}
      </script>

      {/* FAQ Schema for Featured Snippets */}
      {pageType === 'homepage' && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      )}

      {/* How-To Schema for Tools */}
      {toolData && (
        <script type="application/ld+json">
          {JSON.stringify(generateHowToSchema())}
        </script>
      )}

      {/* Enhanced Meta Tags for Competitive Edge */}
      <meta name="google-site-verification" content="google-ranking-verification-aiwebtools" />
      <meta name="norton-safeweb-site-verification" content="norton-verification-aiwebtools" />
      <meta name="dmca-site-verification" content="dmca-verification-aiwebtools" />
      
      {/* Competitive Authority Signals */}
      <meta name="expertise-level" content="expert" />
      <meta name="content-quality" content="premium" />
      <meta name="review-process" content="expert-verified" />
      <meta name="update-frequency" content="daily" />
      <meta name="user-base" content="100000+" />
      <meta name="industry-recognition" content="leading-directory" />
      
      {/* Performance and Quality Signals */}
      <meta name="performance-optimized" content="true" />
      <meta name="mobile-optimized" content="true" />
      <meta name="accessibility-compliant" content="WCAG-2.1-AA" />
      <meta name="security-verified" content="SSL-HTTPS" />
      
      {/* Semantic Web & Knowledge Graph */}
      <meta name="subject" content="AI Tools Directory, Artificial Intelligence Software, AI Web Applications" />
      <meta name="abstract" content="Comprehensive AI tools directory featuring 2195+ verified AI web tools for productivity, creativity, business, and development." />
      <meta name="topic" content="Artificial Intelligence, AI Tools, Technology, Software Directory" />
      <meta name="summary" content="AI Web Tools - The #1 AI tools directory with 2195+ tools. Find ChatGPT alternatives, image generators, coding assistants, and more." />
      
      {/* Rich Snippet Hints */}
      <meta name="itemtype" content="https://schema.org/WebSite" />
      <meta name="itemscope" content="itemscope" />
      
      {/* Pinterest Verification */}
      <meta name="p:domain_verify" content="aiwebtools-pinterest-verify" />
      
      {/* Yandex & International SEO */}
      <meta name="yandex-verification" content="aiwebtools-yandex-verify" />
      <meta name="msvalidate.01" content="aiwebtools-bing-verify" />
      <meta name="baidu-site-verification" content="aiwebtools-baidu-verify" />
      
      {/* Content Freshness Signals */}
      <meta name="last-modified" content={new Date().toISOString()} />
      <meta name="date" content={new Date().toISOString().split('T')[0]} />
      <meta name="news_keywords" content="AI tools 2026, best AI software, artificial intelligence directory, ChatGPT, Claude, Gemini, AI productivity" />
      
      {/* Additional Resource Hints for Speed */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.youtube.com" />
      <link rel="dns-prefetch" href="//i.ytimg.com" />
      <link rel="preconnect" href="https://api.ai-webtools.com" />
      
      {/* Competitive Advantage Links */}
      <link rel="alternate" type="application/json" title="AI Tools API" href="https://aiwebtools.ai/api/tools" />
      <link rel="alternate" type="application/rss+xml" title="AI Web Tools Feed" href="https://aiwebtools.ai/feed.xml" />
      <link rel="sitemap" type="application/xml" href="https://aiwebtools.ai/sitemap.xml" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Author & Publisher Links */}
      <link rel="author" href="https://aiwebtools.ai/about" />
      <link rel="publisher" href="https://aiwebtools.ai" />
      <link rel="me" href="https://twitter.com/aiwebtools" />
    </Helmet>
  );
};

export default GoogleRankingBooster;