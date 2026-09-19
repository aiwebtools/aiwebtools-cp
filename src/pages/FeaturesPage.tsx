import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFlagshipFeatures } from "@/data/flagshipFeatures";

const BASE = "https://aiwebtools.app";

/** Index of the flagship long-form feature write-ups. */
export default function FeaturesPage() {
  const features = getFlagshipFeatures();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Flagship AI Tool Features",
    description:
      "Long-form features on the flagship custom AI GPTs built by AIWebTools.ai — each with the real, working tool embedded in the page.",
    url: `${BASE}/features`,
    hasPart: features.map((f) => ({
      "@type": "Article",
      headline: f.headline,
      url: `${BASE}/feature/${f.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Flagship AI Tool Features — Try Each Tool Inside the Article | AI Web Tools</title>
        <meta
          name="description"
          content={`${features.length} long-form features on the flagship custom AI GPTs built by AIWebTools.ai — each article has the real, working tool embedded so you can try it free.`}
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${BASE}/features`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-black">
        <div className="container mx-auto max-w-4xl px-4 pt-40 pb-16">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-green-300 md:text-4xl">
              Flagship AI Tool Features
            </h1>
            <p className="mt-4 leading-relaxed text-gray-300">
              In-depth write-ups on the flagship custom GPTs built by AIWebTools.ai. Every feature
              has the real, working tool embedded in the page — read the story, then try it free
              without leaving the article.
            </p>
          </header>

          <ul className="space-y-6">
            {features.map((feature) => (
              <li
                key={feature.slug}
                className="rounded-lg border border-green-500/20 bg-black/40 p-5"
              >
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  {feature.category}
                </p>
                <h2 className="mt-1 text-xl font-bold text-green-300">
                  <Link to={`/feature/${feature.slug}`} className="hover:text-green-200">
                    <span className="mr-2" aria-hidden="true">{feature.emoji}</span>
                    {feature.headline}
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-gray-300">{feature.deck}</p>
                <p className="mt-3 text-sm">
                  <Link
                    to={`/feature/${feature.slug}`}
                    className="text-green-400 underline-offset-4 hover:underline"
                  >
                    Read the feature and try {feature.toolTitle} →
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
