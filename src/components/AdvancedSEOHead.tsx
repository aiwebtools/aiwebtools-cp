
import { Helmet } from 'react-helmet-async';
import { generateAdvancedMetaTags, generateArticleStructuredData, generateHowToStructuredData } from '@/utils/advancedSEO';
import { generateCanonicalUrl, generateAlternateLanguages, generatePreloadTags } from '@/utils/seoHelpers';
import { generateToolSlug } from '@/utils/urlGenerator';

interface AdvancedSEOHeadProps {
  tool?: any;
  toolIndex?: number;
  pageType?: 'tool' | 'category' | 'homepage';
}

const AdvancedSEOHead = ({ tool, toolIndex, pageType = 'homepage' }: AdvancedSEOHeadProps) => {
  const preloadTags = generatePreloadTags();
  const alternateLanguages = generateAlternateLanguages();
  
  if (pageType === 'tool' && tool && typeof toolIndex === 'number') {
    const advancedMeta = generateAdvancedMetaTags(tool, toolIndex);
    const articleStructuredData = generateArticleStructuredData(tool, toolIndex);
    const howToStructuredData = generateHowToStructuredData(tool);
    
    return (
      <Helmet>
        {/* Advanced Meta Tags */}
        {Object.entries(advancedMeta).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
        
        {/* Preload Critical Resources */}
        {preloadTags.map((tag, index) => (
          <link key={index} {...tag} />
        ))}
        
        {/* Alternate Languages */}
        {alternateLanguages.map((lang, index) => (
          <link key={index} rel="alternate" hrefLang={lang.lang} href={lang.url} />
        ))}
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToStructuredData)}
        </script>
        
        {/* Additional SEO Tags */}
        <meta name="news_keywords" content={`${tool.title}, AI tool, ${tool.category}, artificial intelligence`} />
        <meta name="standout" content={`https://aiwebtools.ai/${generateToolSlug(tool.title)}`} />
        <meta name="syndication-source" content="https://aiwebtools.ai" />
        <meta name="original-source" content="https://aiwebtools.ai" />
        
        {/* Rich Snippets */}
        <meta name="price" content="0.00" />
        <meta name="priceCurrency" content="USD" />
        <meta name="availability" content="InStock" />
        <meta name="review-count" content="100+" />
        <meta name="rating" content="4.5" />
      </Helmet>
    );
  }
  
  return null;
};

export default AdvancedSEOHead;
