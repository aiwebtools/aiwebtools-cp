import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSpotlights } from "@/data/spotlights";

const BASE = "https://aiwebtools.app";

export default function SpotlightsPage() {
  const spotlights = getSpotlights();

  const grouped = spotlights.reduce<Record<string, typeof spotlights>>((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Tool Spotlights",
    description:
      "In-depth write-ups on the custom AI GPTs and Gems built by AIWebTools.ai — what each one does, who it is for and why it stands out.",
    url: `${BASE}/spotlights`,
    hasPart: spotlights.map((s) => ({
      "@type": "Article",
      headline: s.title,
      url: `${BASE}/spotlight/${s.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>AI Tool Spotlights — {spotlights.length} Custom GPT Write-Ups</title>
        <meta
          name="description"
          content={`${spotlights.length} in-depth write-ups on the custom AI GPTs and Gems built by AIWebTools.ai — what each tool does, who it is for and why it stands out.`}
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${BASE}/spotlights`} />
        <meta property="og:title" content="AI Tool Spotlights | AIWebTools.ai" />
        <meta
          property="og:description"
          content="Deep-dive guides on every custom AI GPT and Gem built by AIWebTools.ai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE}/spotlights`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-black">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <header className="pt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-300">AI Tool Spotlights</h1>
            <p className="mt-4 max-w-3xl text-gray-300">
              {spotlights.length} long-form guides to the custom AI GPTs and Gems we build at
              AIWebTools.ai. Each spotlight explains what the tool does, how to get the most out of it and
              why it stands out — then links straight through to the tool itself.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-cyan-300">
              <Link to="/main-category/ALL%20AI%20TOOLS" className="hover:underline">Browse all AI tools</Link>
              <Link to="/best-ai-tools" className="hover:underline">Best AI tools</Link>
              <Link to="/free-ai-tools" className="hover:underline">Free AI tools</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
            </div>
          </header>

          <div className="mt-10 space-y-10">
            {Object.entries(grouped).map(([category, items]) => (
              <section key={category}>
                <h2 className="mb-4 text-xl font-semibold text-cyan-300">{category}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/spotlight/${item.slug}`}
                        className="block rounded-lg border border-green-500/20 bg-black/40 p-4 transition-colors hover:border-green-400/50"
                      >
                        <p className="font-semibold text-green-300">
                          <span className="mr-2" aria-hidden="true">{item.emoji}</span>
                          {item.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-400">{item.metaDescription}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
