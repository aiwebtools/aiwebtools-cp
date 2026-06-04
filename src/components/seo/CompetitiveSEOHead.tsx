
import { Helmet } from 'react-helmet-async';
import { Tool } from '@/types/tools';
import { enhancedSchemaMarkup, generateCompetitiveContent } from '@/utils/advancedCompetitiveSEO';
import { enhancedFAQs, socialMediaSEO } from '@/utils/additionalSEO';
import { generateToolSlug } from '@/utils/urlGenerator';
import { seoConfig } from '@/utils/seo';

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
        <title>AI WEB TOOLS - #1 AI Tools Directory | 1000+ Best AI Tools 2026 | Better Than Toolify</title>
        <meta name="description" content="🏆 #1 AI Tools Directory with 1000+ verified tools. Better than Toolify, Futurepedia & competitors. Expert reviews, ratings & guides. Trusted by 100K+ professionals. Find ChatGPT alternatives & top AI tools 2026." />
        
        {/* Competitive keyword targeting */}
        <meta name="keywords" content="AI WEB TOOLS, best AI tools directory 2026, better than toolify, comprehensive AI tools, verified AI directory, top AI tools ranking, ChatGPT alternatives, professional AI tools, ai tools marketplace, curated AI collection, enterprise AI solutions, AI tools comparison, trusted AI platform, complete AI database, AI tools for business, AI directory leader, what is the best ai tool for, how to use ai tools, which ai tool is better, where to find ai tools" />
        <link rel="canonical" href="https://ai-webtools.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="AI WEB TOOLS" />
        
        {/* Advanced competitive meta */}
        <meta name="subject" content="World's Most Comprehensive AI Tools Directory - Better Than Any Competitor" />
        <meta name="abstract" content="AI WEB TOOLS provides the most comprehensive, expertly curated directory of AI tools available anywhere. With 1000+ verified tools, detailed reviews, and expert analysis, we're the #1 choice for professionals seeking the best AI solutions." />
        <meta name="topic" content="AI Tools Directory, Artificial Intelligence, Best AI Tools 2026, ChatGPT Alternatives" />
        <meta name="summary" content="The definitive AI tools directory featuring 1000+ curated applications, expert reviews, and comprehensive comparisons. Better than Toolify and all competitors." />
        
        {/* Competitive advantage indicators */}
        <meta name="rating" content="5 stars - Best AI Directory" />
        <meta name="coverage" content="Comprehensive - 1000+ AI Tools" />
        <meta name="expertise" content="Expert-Curated AI Tools Directory" />
        <meta name="trustworthiness" content="Verified and Trusted by 100K+ Users" />
        <meta name="uniqueness" content="Most Comprehensive AI Directory Available" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-webtools.com" />
        <meta property="og:site_name" content="AI WEB TOOLS" />
        <meta property="og:title" content="AI WEB TOOLS - #1 AI Tools Directory | Better Than Toolify" />
        <meta property="og:description" content="Discover 1000+ verified AI tools with expert reviews. The most comprehensive AI directory - better than Toolify & Futurepedia." />
        <meta property="og:image" content="https://ai-webtools.com/og-image-homepage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI WEB TOOLS - Best AI Tools Directory 2026" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AIWebTools" />
        <meta name="twitter:creator" content="@AIWebTools" />
        <meta name="twitter:title" content="AI WEB TOOLS - #1 AI Tools Directory 2026" />
        <meta name="twitter:description" content="1000+ verified AI tools with expert reviews and ratings" />
        <meta name="twitter:image" content="https://ai-webtools.com/og-image-homepage.jpg" />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Enhanced structured data for homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI WEB TOOLS - #1 AI Tools Directory",
            "alternateName": "AITools.Studio",
            "url": "https://ai-webtools.com",
            "description": "The world's most comprehensive AI tools directory with 1000+ verified tools, expert reviews, and detailed analysis. Better than Toolify and all competitors.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://ai-webtools.com/?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Best AI Tools Directory 2026",
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
              "https://ai-webtools.com",
              "https://www.aiwebtools.ai"
            ]
          })}
        </script>
        
        {/* Enhanced FAQ Schema for Featured Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": enhancedFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
    );
  }
  
  // Tool page competitive SEO
  if (tool && toolIndex !== undefined && competitiveContent) {
    const selectedTitle = competitiveContent.metaContent.titleVariations[0];
    const selectedDescription = competitiveContent.metaContent.descriptionVariations[0];
    
    // Get proper tool image for social sharing
    const getToolImage = () => {
      // Priority 1: Tool's direct image
      if (tool?.imageUrl && tool.imageUrl.trim() !== '') {
        return tool.imageUrl;
      }
      // Priority 2: YouTube thumbnail from videoUrl
      if (tool?.videoUrl) {
        const videoId = tool.videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }
      }
      // Priority 3: Default AI Web Tools branded image
      return `${seoConfig.siteUrl}/og-default.jpg`;
    };
    
    const toolImage = getToolImage();
    
    return (
      <Helmet>
        <title>{selectedTitle}</title>
        <meta name="description" content={selectedDescription} />
        
        {/* Enhanced tool-specific keywords */}
        <meta name="keywords" content={`${tool.title}, ${tool.category}, AI tool review, best AI tools 2026, ${tool.tags?.join(', ') || ''}, AI WEB TOOLS directory, expert analysis, tool comparison, user reviews, professional AI tools`} />
        <link rel="canonical" href={`https://ai-webtools.com/${generateToolSlug(tool.title)}`} />
        
        {/* Tool authority indicators */}
        <meta name="expertise" content={`Expert review and analysis of ${tool.title}`} />
        <meta name="authoritative-source" content="AI WEB TOOLS - Trusted AI Directory" />
        <meta name="comprehensive-review" content={`Complete guide to ${tool.title} with features, pricing, and alternatives`} />
        
        {/* Enhanced Open Graph for tools */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ai-webtools.com/${generateToolSlug(tool.title)}`} />
        <meta property="og:title" content={selectedTitle} />
        <meta property="og:description" content={selectedDescription} />
        <meta property="og:image" content={toolImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${tool.title} - ${tool.category} Preview`} />
        
        {/* Twitter Cards for tools */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={selectedTitle} />
        <meta name="twitter:description" content={selectedDescription} />
        <meta name="twitter:image" content={toolImage} />
        <meta name="twitter:image:alt" content={`${tool.title} - ${tool.category}`} />
        
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
        <title>{category} AI Tools - Best Directory 2026 | AI WEB TOOLS</title>
        <meta name="description" content={`Discover the best ${category.toLowerCase()} AI tools in our comprehensive directory. Expert reviews, ratings, and comparisons. Part of AI WEB TOOLS - the #1 AI directory trusted by professionals.`} />
        <meta name="keywords" content={`${category} AI tools, best ${category.toLowerCase()} AI, ${category.toLowerCase()} artificial intelligence, AI ${category.toLowerCase()} solutions, ${category.toLowerCase()} automation, AI WEB TOOLS directory`} />
        <link rel="canonical" href={`https://ai-webtools.com/category/${encodeURIComponent(category)}`} />
        
        {/* Category Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ai-webtools.com/category/${encodeURIComponent(category)}`} />
        <meta property="og:title" content={`${category} AI Tools - Best Directory 2026`} />
        <meta property="og:description" content={`Expert-curated ${category.toLowerCase()} AI tools with reviews and ratings`} />
      </Helmet>
    );
  }
  
  return null;
};

export default CompetitiveSEOHead;
