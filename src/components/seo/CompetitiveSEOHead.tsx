
import { Helmet } from 'react-helmet-async';
import { Tool } from '@/types/tools';
import { enhancedSchemaMarkup, generateCompetitiveContent } from '@/utils/advancedCompetitiveSEO';

interface CompetitiveSEOHeadProps {
  tool?: Tool;
  toolIndex?: number;
  category?: string;
  isHomepage?: boolean;
}

const CompetitiveSEOHead = ({ tool, toolIndex, category, isHomepage }: CompetitiveSEOHeadProps) => {
  // Generate competitive content
  const competitiveContent = tool ? generateCompetitiveContent(tool, toolIndex || 0) : null;
  
  // Homepage competitive SEO
  if (isHomepage) {
    return (
      <Helmet>
        {/* Ultra-competitive homepage targeting */}
        <title>AI WEB TOOLS - #1 AI Tools Directory | 1000+ Best AI Tools 2025 | Better Than Toolify</title>
        <meta name="description" content="🏆 #1 AI Tools Directory with 1000+ verified tools. Better than Toolify, Futurepedia & competitors. Expert reviews, ratings & guides. Trusted by 100K+ professionals. Find ChatGPT alternatives & top AI tools 2025." />
        
        {/* Competitive keyword targeting */}
        <meta name="keywords" content="AI WEB TOOLS, best AI tools directory 2025, better than toolify, comprehensive AI tools, verified AI directory, top AI tools ranking, ChatGPT alternatives, professional AI tools, ai tools marketplace, curated AI collection, enterprise AI solutions, AI tools comparison, trusted AI platform, complete AI database, AI tools for business, AI directory leader" />
        
        {/* Advanced competitive meta */}
        <meta name="subject" content="World's Most Comprehensive AI Tools Directory - Better Than Any Competitor" />
        <meta name="abstract" content="AI WEB TOOLS provides the most comprehensive, expertly curated directory of AI tools available anywhere. With 1000+ verified tools, detailed reviews, and expert analysis, we're the #1 choice for professionals seeking the best AI solutions." />
        <meta name="topic" content="AI Tools Directory, Artificial Intelligence, Best AI Tools 2025, ChatGPT Alternatives" />
        <meta name="summary" content="The definitive AI tools directory featuring 1000+ curated applications, expert reviews, and comprehensive comparisons. Better than Toolify and all competitors." />
        
        {/* Competitive advantage indicators */}
        <meta name="rating" content="5 stars - Best AI Directory" />
        <meta name="coverage" content="Comprehensive - 1000+ AI Tools" />
        <meta name="expertise" content="Expert-Curated AI Tools Directory" />
        <meta name="trustworthiness" content="Verified and Trusted by 100K+ Users" />
        <meta name="uniqueness" content="Most Comprehensive AI Directory Available" />
        
        {/* Enhanced structured data for homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI WEB TOOLS - #1 AI Tools Directory",
            "alternateName": "AITools.Studio",
            "url": "https://aitools.studio",
            "description": "The world's most comprehensive AI tools directory with 1000+ verified tools, expert reviews, and detailed analysis. Better than Toolify and all competitors.",
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
              "name": "Best AI Tools Directory 2025",
              "description": "Comprehensive collection of 1000+ verified AI tools",
              "numberOfItems": 1000
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2000",
              "bestRating": "5"
            },
            "sameAs": [
              "https://aitools.company",
              "https://www.aiwebtools.ai"
            ]
          })}
        </script>
      </Helmet>
    );
  }
  
  // Tool page competitive SEO
  if (tool && toolIndex !== undefined && competitiveContent) {
    const selectedTitle = competitiveContent.metaContent.titleVariations[0];
    const selectedDescription = competitiveContent.metaContent.descriptionVariations[0];
    
    return (
      <Helmet>
        <title>{selectedTitle}</title>
        <meta name="description" content={selectedDescription} />
        
        {/* Enhanced tool-specific keywords */}
        <meta name="keywords" content={`${tool.title}, ${tool.category}, AI tool review, best AI tools 2025, ${tool.tags?.join(', ') || ''}, AI WEB TOOLS directory, expert analysis, tool comparison, user reviews, professional AI tools`} />
        
        {/* Tool authority indicators */}
        <meta name="expertise" content={`Expert review and analysis of ${tool.title}`} />
        <meta name="authoritative-source" content="AI WEB TOOLS - Trusted AI Directory" />
        <meta name="comprehensive-review" content={`Complete guide to ${tool.title} with features, pricing, and alternatives`} />
        
        {/* Enhanced structured data for tools */}
        <script type="application/ld+json">
          {JSON.stringify(enhancedSchemaMarkup(tool, toolIndex))}
        </script>
        
        {/* FAQ structured data for featured snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `What is ${tool.title}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${tool.title} is ${tool.description} It's featured in the AI WEB TOOLS directory as one of the top ${tool.category} solutions available.`
                }
              },
              {
                "@type": "Question",
                "name": `How does ${tool.title} compare to alternatives?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Based on our expert analysis at AI WEB TOOLS, ${tool.title} ranks highly due to its performance, features, and user satisfaction in the ${tool.category} category.`
                }
              }
            ]
          })}
        </script>
      </Helmet>
    );
  }
  
  // Category page competitive SEO
  if (category) {
    return (
      <Helmet>
        <title>{category} AI Tools - Best Directory 2025 | AI WEB TOOLS</title>
        <meta name="description" content={`Discover the best ${category.toLowerCase()} AI tools in our comprehensive directory. Expert reviews, ratings, and comparisons. Part of AI WEB TOOLS - the #1 AI directory trusted by professionals.`} />
        <meta name="keywords" content={`${category} AI tools, best ${category.toLowerCase()} AI, ${category.toLowerCase()} artificial intelligence, AI ${category.toLowerCase()} solutions, ${category.toLowerCase()} automation, AI WEB TOOLS directory`} />
      </Helmet>
    );
  }
  
  return null;
};

export default CompetitiveSEOHead;
