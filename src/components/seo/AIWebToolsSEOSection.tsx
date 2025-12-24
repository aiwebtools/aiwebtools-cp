import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SEO Section optimized for "AI Tools" keyword ranking
 * Contains keyword-rich content for search engine visibility
 */
const AIWebToolsSEOSection = () => {
  return (
    <section className="py-8 bg-slate-950/80 border-y border-cyan-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Primary keyword heading */}
          <h2 className="text-lg md:text-xl font-bold text-center text-white mb-4">
            <span className="text-cyan-400">AI Tools</span> — The Best Free AI Tools Directory 2025
          </h2>
          
          {/* Keyword-rich content for SEO */}
          <div className="text-sm text-gray-400 leading-relaxed space-y-3 text-center">
            <p>
              Welcome to the world's largest <strong className="text-cyan-400">AI tools</strong> directory with <strong className="text-white">2,195+ best AI tools</strong> for 2025. 
              Whether you need <strong>AI writing tools</strong>, <strong>AI image generators</strong>, <strong>AI video makers</strong>, or <strong>AI coding assistants</strong>, 
              our comprehensive <strong>AI tools list</strong> helps you find the perfect solution.
            </p>
            <p>
              Compare top <strong>AI tools</strong> with reviews, ratings, and direct access. From <strong>ChatGPT alternatives</strong> to specialized <strong>AI productivity tools</strong>, 
              discover <strong>free AI tools</strong> that transform how you work, create, and innovate.
            </p>
          </div>
          
          {/* Quick category links for internal SEO */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Link to="/main-category/ALL%20AI%20TOOLS" className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500/20 transition">
              All AI Tools
            </Link>
            <Link to="/main-category/CONTENT%20CREATION%20%26%20WRITING" className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500/20 transition">
              AI Writing Tools
            </Link>
            <Link to="/main-category/IMAGE%20%26%20DESIGN%20AI%20TOOLS" className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500/20 transition">
              AI Image Tools
            </Link>
            <Link to="/main-category/VIDEO%20%26%20MULTIMEDIA" className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500/20 transition">
              AI Video Tools
            </Link>
            <Link to="/main-category/BUSINESS%20%26%20PRODUCTIVITY" className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full hover:bg-cyan-500/20 transition">
              AI Business Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWebToolsSEOSection;
