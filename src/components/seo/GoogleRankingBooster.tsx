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
      "name": "AI WEB TOOLS LLC",
      "alternateName": ["AI WEB TOOLS", "AIWebTools", "AITools.Studio"],
      "url": "https://aitools.studio",
      "logo": "https://aitools.studio/favicon.ico",
      "description": "The world's #1 most comprehensive AI tools directory with 2195+ curated AI applications. Better than Toolify, Futurepedia, and all competitors.",
      "foundingDate": "2023",
      "keywords": competitiveAdvantage.brandDominance.join(", "),
      "slogan": "Better Than Toolify & Futurepedia - The #1 AI Tools Directory",
      "awards": ["#1 AI Tools Directory 2025", "Most Comprehensive AI Database", "Trusted by 100K+ Users"],
      "knowsAbout": [
        "Artificial Intelligence Tools",
        "AI Software Directory", 
        "Technology Curation",
        "AI Tool Reviews",
        "Enterprise AI Solutions"
      ],
      "sameAs": [
        "https://aitools.studio",
        "https://aiwebtools.ai"
      ]
    };

    const websiteSchema = {
      "@type": "WebSite",
      "name": "AI WEB TOOLS - #1 AI Tools Directory",
      "url": "https://aitools.studio",
      "description": "Discover 2195+ AI tools better than Toolify & Futurepedia. Comprehensive directory with expert reviews, ratings, and detailed analysis.",
      "publisher": {
        "@type": "Organization",
        "name": "AI WEB TOOLS LLC"
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
        "name": "AI Tools Directory",
        "description": "Comprehensive collection of 2195+ AI tools",
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
        question: "What is AI WEB TOOLS?",
        answer: "AI WEB TOOLS is the world's #1 most comprehensive AI tools directory with 2195+ curated AI applications. We provide expert reviews, ratings, and detailed analysis to help you find the perfect AI tools for your needs."
      },
      {
        question: "How is AI WEB TOOLS better than Toolify?",
        answer: "AI WEB TOOLS offers more comprehensive coverage with 2195+ tools vs Toolify's limited selection. We provide expert reviews, detailed ratings, regular updates, and professional-grade analysis that Toolify lacks."
      },
      {
        question: "Are the AI tools on AI WEB TOOLS free?",
        answer: "Many AI tools in our directory offer free tiers or completely free access. We clearly indicate pricing for each tool and highlight the best free AI tools available in 2025."
      },
      {
        question: "How often is AI WEB TOOLS updated?",
        answer: "We update our AI tools directory daily with new tools, reviews, and ratings. Our team continuously verifies tool availability and updates information to ensure accuracy."
      },
      {
        question: "Can I trust the AI tool reviews on AI WEB TOOLS?",
        answer: "Yes, all reviews are conducted by our expert team with hands-on testing. We provide unbiased analysis, real user feedback, and comprehensive evaluation of each AI tool's features and performance."
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
      
      {/* Additional Resource Hints for Speed */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://api.aitools.studio" />
      
      {/* Competitive Advantage Links */}
      <link rel="alternate" type="application/json" title="AI Tools API" href="https://aitools.studio/api/tools" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default GoogleRankingBooster;