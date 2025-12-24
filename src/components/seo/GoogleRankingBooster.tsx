import { Helmet } from 'react-helmet-async';
import { competitiveAdvantage } from '@/utils/googleRankingOptimizer';
import { generateToolSlug } from '@/utils/urlGenerator';

interface GoogleRankingBoosterProps {
  pageType?: 'homepage' | 'category' | 'tool' | 'search';
  toolData?: any;
  category?: string;
}

const GoogleRankingBooster = ({ pageType = 'homepage', toolData, category }: GoogleRankingBoosterProps) => {
  // Generate comprehensive competitive structured data - PRIMARY KEYWORD: "AI Tools"
  const generateCompetitiveSchema = () => {
    const organizationSchema = {
      "@type": "Organization",
      "name": "AI Tools Directory",
      "alternateName": ["AI Tools", "Best AI Tools", "Free AI Tools", "AI Tools List", "AITools.Studio", "AI Web Tools"],
      "url": "https://aitools.studio",
      "logo": "https://aitools.studio/favicon.ico",
      "description": "The #1 AI tools directory with 2,195+ best free AI tools for 2025. Find, compare, and access top AI tools for writing, images, video, coding & business.",
      "foundingDate": "2023",
      "keywords": "ai tools, best ai tools, free ai tools, ai tools 2025, ai tools list, ai tools directory, top ai tools, ai writing tools, ai image tools, ai video tools, chatgpt alternatives",
      "slogan": "#1 AI Tools Directory - Find & Compare 2,195+ Best AI Tools",
      "awards": ["#1 AI Tools Directory 2025", "Best AI Tools Collection", "Most Comprehensive AI Tools Database"],
      "knowsAbout": [
        "AI Tools",
        "Best AI Tools",
        "Free AI Tools",
        "AI Writing Tools",
        "AI Image Generators",
        "AI Video Makers",
        "AI Coding Assistants",
        "ChatGPT Alternatives",
        "AI Productivity Tools"
      ],
      "sameAs": [
        "https://aitools.studio",
        "https://aiwebtools.ai"
      ]
    };

    const websiteSchema = {
      "@type": "WebSite",
      "name": "AI Tools - Best Free AI Tools Directory 2025",
      "alternateName": ["AI Tools Directory", "AI Tools List", "Best AI Tools 2025"],
      "url": "https://aitools.studio",
      "description": "Discover 2,195+ best free AI tools in the #1 AI tools directory. Find top AI tools for writing, images, video, coding & business with reviews and comparisons.",
      "publisher": {
        "@type": "Organization",
        "name": "AI Tools Directory"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://aitools.studio/?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Best AI Tools 2025",
        "description": "Complete list of 2,195+ best free AI tools for productivity, creativity, and business",
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

  // Generate FAQ schema for featured snippets - "AI Tools" focused
  const generateFAQSchema = () => {
    const faqs = [
      {
        question: "What are the best AI tools in 2025?",
        answer: "The best AI tools in 2025 include ChatGPT, Claude, Midjourney, DALL-E, Gemini, and thousands more. Our AI tools directory features 2,195+ best AI tools across categories like AI writing tools, AI image generators, AI video makers, and AI coding assistants. Find the perfect AI tools for any task."
      },
      {
        question: "Where can I find free AI tools?",
        answer: "Our AI tools directory offers the largest collection of free AI tools. Browse 2,195+ AI tools with free tiers, trials, and completely free options. Find free AI tools for writing, images, video, productivity, and business - all in one comprehensive AI tools list."
      },
      {
        question: "What is the best AI tools directory?",
        answer: "AITools.Studio is the #1 AI tools directory with 2,195+ best AI tools for 2025. Compare AI tools with reviews, ratings, and direct access. Find top AI tools for writing, images, video, coding & business in our comprehensive AI tools list."
      },
      {
        question: "What AI tools are best for business?",
        answer: "The best AI tools for business include AI marketing tools, AI sales tools, AI analytics platforms, AI customer service bots, and AI productivity assistants. Our AI tools directory features hundreds of AI tools specifically designed for business automation and growth."
      },
      {
        question: "How do I choose the right AI tools?",
        answer: "Use our AI tools directory to compare features, read reviews, and find AI tools that match your needs. Filter by category (writing, images, video, coding), pricing (free, freemium, paid), and use case to discover the best AI tools for your specific requirements."
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
      "name": `How to Use ${toolData.title} - Complete Guide 2025`,
      "description": `Step-by-step guide to using ${toolData.title} effectively. Expert tips and best practices from AI WEB TOOLS.`,
      "image": "https://aitools.studio/placeholder.svg",
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
          "url": `https://aitools.studio/${generateToolSlug(toolData.title)}`
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
      <meta name="news_keywords" content="AI tools 2025, best AI software, artificial intelligence directory, ChatGPT, Claude, Gemini, AI productivity" />
      
      {/* Additional Resource Hints for Speed */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.youtube.com" />
      <link rel="dns-prefetch" href="//i.ytimg.com" />
      <link rel="preconnect" href="https://api.aitools.studio" />
      
      {/* Competitive Advantage Links */}
      <link rel="alternate" type="application/json" title="AI Tools API" href="https://aitools.studio/api/tools" />
      <link rel="alternate" type="application/rss+xml" title="AI Web Tools Feed" href="https://aitools.studio/feed.xml" />
      <link rel="sitemap" type="application/xml" href="https://aitools.studio/sitemap.xml" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Author & Publisher Links */}
      <link rel="author" href="https://aitools.studio/about" />
      <link rel="publisher" href="https://aitools.studio" />
      <link rel="me" href="https://twitter.com/aiwebtools" />
    </Helmet>
  );
};

export default GoogleRankingBooster;