import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Wrench } from 'lucide-react';

interface RelatedLink {
  title: string;
  url: string;
  type: 'blog' | 'tool' | 'category';
}

interface RelatedContentLinksProps {
  links: RelatedLink[];
  title?: string;
}

// SEO-optimized internal linking component
const RelatedContentLinks = ({ links, title = "Related Resources" }: RelatedContentLinksProps) => {
  if (links.length === 0) return null;

  return (
    <div className="mt-8 p-6 bg-gray-900/50 border border-green-500/20 rounded-xl">
      <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
        <Wrench className="w-5 h-5" />
        {title}
      </h3>
      <div className="grid gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            <div className="flex items-center gap-3">
              {link.type === 'blog' ? (
                <BookOpen className="w-4 h-4 text-cyan-400" />
              ) : (
                <Wrench className="w-4 h-4 text-purple-400" />
              )}
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {link.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedContentLinks;
