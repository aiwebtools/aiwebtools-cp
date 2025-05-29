
import { Helmet } from 'react-helmet-async';

interface BreadcrumbSEOProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

const BreadcrumbSEO = ({ items }: BreadcrumbSEOProps) => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSEO;
