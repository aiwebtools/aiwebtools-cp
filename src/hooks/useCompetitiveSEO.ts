
import { useEffect } from 'react';
import { Tool } from '@/types/tools';

// Custom hook for competitive SEO enhancements
export const useCompetitiveSEO = (tool?: Tool, toolIndex?: number) => {
  useEffect(() => {
    // Enhance page performance for SEO
    const optimizePagePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/favicon.ico',
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('fonts') ? 'style' : 'image';
        document.head.appendChild(link);
      });
      
      // Add structured data breadcrumbs
      if (tool && toolIndex !== undefined) {
        const breadcrumbData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "AI Tools Directory",
              "item": "https://aiwebtools.ai"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": tool.category,
              "item": `https://aiwebtools.ai/category/${encodeURIComponent(tool.category || '')}`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": tool.title,
              "item": `https://aiwebtools.ai/tool/${toolIndex}`
            }
          ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);
      }
    };
    
    // Run optimizations
    optimizePagePerformance();
    
    // Enhanced user engagement tracking for SEO signals
    const trackEngagement = () => {
      let engagementTime = 0;
      const startTime = Date.now();
      
      const updateEngagement = () => {
        engagementTime = Date.now() - startTime;
        
        // Send engagement signals that help with SEO
        if (engagementTime > 30000) { // 30 seconds
          console.log('🎯 High engagement detected - positive SEO signal');
        }
      };
      
      // Track scroll depth
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (maxScroll > 75) {
            console.log('📊 Deep content engagement - positive SEO signal');
          }
        }
      };
      
      window.addEventListener('scroll', trackScroll, { passive: true });
      window.addEventListener('beforeunload', updateEngagement);
      
      return () => {
        window.removeEventListener('scroll', trackScroll);
        window.removeEventListener('beforeunload', updateEngagement);
      };
    };
    
    const cleanup = trackEngagement();
    
    return cleanup;
  }, [tool, toolIndex]);
  
  // Return SEO optimization utilities
  return {
    generateCanonicalUrl: (path: string) => `https://aiwebtools.ai${path}`,
    generateAlternateLanguages: () => [
      { lang: 'en', url: 'https://aiwebtools.ai' },
      { lang: 'x-default', url: 'https://aiwebtools.ai' }
    ],
    getCompetitiveAdvantages: () => [
      'Most comprehensive AI directory',
      'Expert curation and review',
      'Regular updates and new additions',
      'Professional ratings and analysis',
      'Superior user experience'
    ]
  };
};

export default useCompetitiveSEO;
