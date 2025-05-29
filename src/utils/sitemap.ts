
import { allTools } from "@/data/toolsData";
import { seoConfig } from "./seo";

export const generateSitemap = () => {
  const baseUrls = [
    { loc: seoConfig.siteUrl, changefreq: 'daily', priority: '1.0' },
  ];

  const toolUrls = allTools.map((tool, index) => ({
    loc: `${seoConfig.siteUrl}/tool/${index}`,
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  }));

  const categoryUrls = Array.from(new Set(allTools.map(tool => tool.category).filter(Boolean))).map(category => ({
    loc: `${seoConfig.siteUrl}/category/${encodeURIComponent(category)}`,
    changefreq: 'weekly',
    priority: '0.7'
  }));

  const allUrls = [...baseUrls, ...toolUrls, ...categoryUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
