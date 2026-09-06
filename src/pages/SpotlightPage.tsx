import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSpotlightBySlug, getRelatedSpotlights } from "@/data/spotlights";
import { ArrowLeft, ArrowRight, ExternalLink, Grid3X3, Home } from "lucide-react";

const BASE = "https://aiwebtools.app";

export default function SpotlightPage() {
  const { slug } = useParams<{ slug: string }>();
  const spotlight = slug ? getSpotlightBySlug(slug) : undefined;

  if (!spotlight) {
    return <Navigate to="/spotlights" replace />;
  }

  const url = `${BASE}/spotlight/${spotlight.slug}`;
  const toolUrl = `${BASE}/${spotlight.toolSlug}`;
  const related = getRelatedSpotlights(spotlight.slug, 6);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: spotlight.title,
      description: spotlight.metaDescription,
      datePublished: spotlight.publishDate,
      dateModified: spotlight.publishDate,
      author: { "@type": "Organization", name: "AI Web Tools", url: BASE },
      publisher: {
        "@type": "Organization",
        name: "AI Web Tools",
        url: BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: spotlight.keywords.join(", "),
      about: {
        "@type": "SoftwareApplication",
        name: spotlight.toolTitle,
        applicationCategory: "AIApplication",
        operatingSystem: "Web",
        url: toolUrl,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "AI Tool Spotlights", item: `${BASE}/spotlights` },
        { "@type": "ListItem", position: 3, name: spotlight.toolTitle, item: url },
      ],
    },
    // AEO: machine-readable Q&A so answer engines can quote this page directly.
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: spotlight.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    // AEO: flag the direct-answer block for voice and assistant surfaces.
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      name: spotlight.title,
      description: spotlight.metaDescription,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".aeo-answer", ".aeo-quick-facts"],
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>{spotlight.metaTitle}</title>
        <meta name="description" content={spotlight.metaDescription} />
        <meta name="keywords" content={spotlight.keywords.join(", ")} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={spotlight.title} />
        <meta property="og:description" content={spotlight.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={spotlight.title} />
        <meta name="twitter:description" content={spotlight.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-black">
        <div className="container mx-auto max-w-4xl px-4 pt-40 pb-16">
          <nav aria-label="Breadcrumb" className="pt-8 text-sm text-green-400/80">
            <Link to="/" className="hover:text-green-300">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/spotlights" className="hover:text-green-300">AI Tool Spotlights</Link>
            <span className="mx-2">/</span>
            <span className="text-green-200">{spotlight.toolTitle}</span>
          </nav>

          <header className="mt-6 mb-8">
            <p className="text-xs uppercase tracking-widest text-cyan-400">{spotlight.category}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-green-300">
              <span className="mr-2" aria-hidden="true">{spotlight.emoji}</span>
              {spotlight.title}
            </h1>
            <p className="mt-4 text-base text-gray-300 leading-relaxed">{spotlight.intro}</p>
          </header>

          {/* AEO: direct-answer block — the sentence answer engines quote. */}
          <section
            className="aeo-answer mb-6 rounded-lg border-l-4 border-green-500 bg-green-950/25 p-5"
            aria-label={`Quick answer: what is ${spotlight.toolTitle}`}
          >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-400">
              Quick answer
            </h2>
            <p className="text-lg leading-relaxed text-green-100">{spotlight.answer}</p>
          </section>

          {/* AEO: scannable key facts. */}
          <section className="aeo-quick-facts mb-8" aria-label={`${spotlight.toolTitle} at a glance`}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
              {spotlight.toolTitle} at a glance
            </h2>
            <dl className="grid gap-x-6 gap-y-2 rounded-lg border border-green-500/20 bg-black/40 p-4 sm:grid-cols-2">
              {spotlight.quickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="shrink-0 font-semibold text-green-300">{fact.label}:</dt>
                  <dd className="text-gray-300">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {spotlight.imageUrl && (
            <img
              src={spotlight.imageUrl}
              alt={`${spotlight.toolTitle} — AI tool by AIWebTools.ai`}
              width={1200}
              height={675}
              loading="eager"
              decoding="async"
              className="mb-8 w-full rounded-lg border border-green-500/20 object-cover"
            />
          )}

          <div className="mb-10 flex flex-wrap gap-3">
            <Button asChild className="bg-green-600 hover:bg-green-500 text-black font-semibold">
              <Link to={`/${spotlight.toolSlug}`}>
                Open the {spotlight.toolTitle} page
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            {spotlight.toolUrl && (
              <Button asChild variant="outline" className="border-cyan-500/40 text-cyan-300">
                <a href={spotlight.toolUrl} target="_blank" rel="noopener noreferrer">
                  Use it now <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            )}
            <Button asChild variant="ghost" className="text-green-300">
              <Link to={`/category/${encodeURIComponent(spotlight.category)}`}>
                <Grid3X3 className="mr-1 h-4 w-4" /> More {spotlight.category}
              </Link>
            </Button>
          </div>

          <article className="space-y-10">
            {spotlight.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-3 text-2xl font-semibold text-cyan-300">{section.heading}</h2>
                {section.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-3 text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cyan-300">
                {spotlight.toolTitle} — frequently asked questions
              </h2>
              <div className="space-y-4">
                {spotlight.faq.map((item) => (
                  <Card key={item.q} className="border-green-500/20 bg-green-950/10">
                    <CardContent className="p-4">
                      <h3 className="mb-1 font-semibold text-green-300">{item.q}</h3>
                      <p className="text-gray-300">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-green-500/25 bg-green-950/20 p-6">
              <h2 className="mb-2 text-xl font-semibold text-green-300">Try {spotlight.toolTitle}</h2>
              <p className="mb-4 text-gray-300">
                Open the full tool page for screenshots, tags and related picks, or jump straight into the
                directory of every AI tool we track.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-green-600 hover:bg-green-500 text-black font-semibold">
                  <Link to={`/${spotlight.toolSlug}`}>{spotlight.toolTitle}</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-500/40 text-green-300">
                  <Link to="/main-category/ALL%20AI%20TOOLS">Browse all AI tools</Link>
                </Button>
                <Button asChild variant="ghost" className="text-cyan-300">
                  <Link to="/"><Home className="mr-1 h-4 w-4" /> AIWebTools.ai home</Link>
                </Button>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-cyan-300">More AI tool spotlights</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/spotlight/${item.slug}`}
                    className="rounded-lg border border-green-500/20 bg-black/40 p-4 transition-colors hover:border-green-400/50"
                  >
                    <p className="text-xs uppercase tracking-wide text-cyan-400">{item.category}</p>
                    <p className="mt-1 font-semibold text-green-300">{item.title}</p>
                  </Link>
                ))}
              </div>
              <Button asChild variant="ghost" className="mt-6 text-green-300">
                <Link to="/spotlights"><ArrowLeft className="mr-1 h-4 w-4" /> All spotlights</Link>
              </Button>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
