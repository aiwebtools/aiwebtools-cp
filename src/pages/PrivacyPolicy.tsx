import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const updated = "May 29, 2026";
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AIWebTools.ai — 4,000+ AI Tools Directory</title>
        <meta
          name="description"
          content="AIWebTools.ai Privacy Policy: how we collect, use, and protect data across our directory of 4,000+ AI tools, custom GPTs, and AI services. Plain-English, no dark patterns."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiwebtools.ai/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | AIWebTools.ai" />
        <meta property="og:description" content="How AIWebTools.ai handles your data — clear, honest, and minimal." />
        <meta property="og:url" content="https://aiwebtools.ai/privacy-policy" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy",
          "url": "https://aiwebtools.ai/privacy-policy",
          "isPartOf": { "@type": "WebSite", "name": "AIWebTools.ai", "url": "https://aiwebtools.ai" },
          "dateModified": "2026-05-29"
        })}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-green-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to AIWebTools.ai
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl md:text-4xl font-black text-green-300">Privacy Policy</h1>
          </div>
          <p className="text-sm text-green-500/80 mb-10">Last updated: {updated}</p>

          <div className="prose prose-invert max-w-none space-y-6 text-green-100/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-green-300">1. Who we are</h2>
              <p>
                AIWebTools.ai (also operating as AITools.studio and several mirror domains) is a directory of
                4,000+ AI tools, custom GPTs, and AI services. This Privacy Policy explains how we handle
                information when you visit our website or interact with our tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">2. What we collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Analytics:</strong> aggregated, anonymous tool views, clicks, search queries, page load times, referrers, and approximate session identifiers.</li>
                <li><strong>Crash logs:</strong> automatic error reports (error message, stack trace, page URL, browser user agent) so we can keep the site stable.</li>
                <li><strong>Care Bot conversations:</strong> messages you send to our AI Care Bot are processed via our AI gateway to generate responses. We do not sell these messages.</li>
                <li><strong>Tool submissions:</strong> if you submit a tool, we store the name, email, and details you provide.</li>
                <li><strong>Cookies / local storage:</strong> minimal — preferences, session IDs, and consent state. No third-party advertising cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">3. What we do NOT collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>We do not knowingly collect data from children under 13.</li>
                <li>We do not sell your personal data to advertisers or data brokers.</li>
                <li>We do not use invasive fingerprinting or cross-site tracking.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">4. How we use information</h2>
              <p>To run, improve, and secure AIWebTools.ai — including improving search, recommending tools, fixing bugs, preventing abuse, and complying with the law.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">5. Third-party links & tools</h2>
              <p>
                Many tools listed here are third-party AI services. When you click an external tool, you leave AIWebTools.ai
                and become subject to that provider's privacy policy. External links may include the affiliate parameter
                <code className="px-1 mx-1 bg-green-500/10 rounded">?via=aiwebtools</code> — this helps fund the directory at no cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">6. AI Care Bot</h2>
              <p>
                Our Care Bot uses Lovable AI Gateway (which routes to providers such as Google and OpenAI) to respond to
                your questions. Messages are sent to those providers solely to generate the response. Do not share sensitive
                personal, medical, legal, or financial information with the bot.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">7. Data storage & security</h2>
              <p>
                Data is stored using Supabase (PostgreSQL) with row-level security. Crash logs and analytics are accessible
                only to AIWebTools.ai administrators. We use industry-standard practices but no system is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">8. Your rights</h2>
              <p>
                You may request access, correction, or deletion of any personal data you have submitted (e.g., tool submissions)
                by contacting <a href="mailto:contact@ai-webtools.com" className="text-cyan-300 underline">contact@ai-webtools.com</a>.
                EU/UK residents have additional rights under GDPR; California residents have rights under CCPA. We honor them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">9. Children</h2>
              <p>AIWebTools.ai is intended for users 13+. Tools listed may have higher age requirements; review each tool's policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">10. Changes</h2>
              <p>We may update this policy. Material changes will be reflected by the "Last updated" date above.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-green-300">11. Contact</h2>
              <p>
                Questions? Email <a href="mailto:contact@ai-webtools.com" className="text-cyan-300 underline">contact@ai-webtools.com</a>.
                See also our <Link to="/disclaimers" className="text-cyan-300 underline">Disclaimers & User Agreement</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;