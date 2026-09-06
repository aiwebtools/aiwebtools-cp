import { Helmet } from "react-helmet-async";
import { Tool } from "@/types/tools";
import { generateToolSlug } from "@/utils/urlGenerator";
import { buildCanonicalUrl } from "@/utils/seo";

interface PerplexityBotGuideProps {
  tool: Tool;
}

/**
 * Long-form, indexable content block for the AIWebTools.ai Perplexity Bot pages.
 * Gives every bot page a real "what it is / who it's for / how to use it" section
 * plus HowTo structured data, so each of the 187 bot URLs earns its own ranking.
 */
const PerplexityBotGuide = ({ tool }: PerplexityBotGuideProps) => {
  const baseName = tool.title.replace(/\s*PERPLEXITY BOT\s*$/i, "").trim();
  const slug = generateToolSlug(tool.title);
  const pageUrl = buildCanonicalUrl(`/${slug}`);

  const steps = [
    {
      name: `Open ${baseName} on Perplexity`,
      text: `Tap the launch button on this page. ${baseName} opens as a public Perplexity Project — no sign-in is needed just to read it.`,
    },
    {
      name: "Describe your goal in plain language",
      text: `Tell ${baseName} what outcome you want rather than what prompt you think it needs. The bot already carries the full operational instructions of the AIWebTools.ai ${baseName} custom GPT.`,
    },
    {
      name: "Ask it to cite and verify",
      text: "Because this edition runs on Perplexity, every answer can be grounded in live web sources. Ask for citations whenever the answer will inform a real decision.",
    },
    {
      name: "Iterate and export",
      text: `Refine the result in follow-up turns, then copy the finished work out. Pair ${baseName} with the other AIWebTools.ai bots in the same category for a complete workflow.`,
    },
  ];

  const useCases = [
    `Fast, cited research inside the ${(tool.category || "AI").toLowerCase()} domain`,
    `A free alternative when you do not have a ChatGPT Plus subscription`,
    `Drafting, planning and second-opinion work with live web grounding`,
    `Comparing ${baseName}'s Perplexity answers against its custom GPT edition`,
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${tool.title}`,
    description: `Step-by-step guide to using ${tool.title}, the Perplexity Project edition of the AIWebTools.ai ${baseName} custom GPT.`,
    url: pageUrl,
    totalTime: "PT3M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${pageUrl}#step-${index + 1}`,
    })),
  };

  return (
    <section
      className="mt-8 rounded-lg border border-purple-500/30 bg-gray-900/70 p-6"
      aria-labelledby="perplexity-guide-heading"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <h2
        id="perplexity-guide-heading"
        className="text-2xl font-semibold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
      >
        What {tool.title} does
      </h2>

      <p className="mt-3 text-gray-300 leading-relaxed">
        {tool.title} is the Perplexity Project edition of the AIWebTools.ai{" "}
        <strong className="text-cyan-300">{baseName}</strong> custom GPT. It carries the
        same operational instructions as the original, but answers through Perplexity's
        live-web engine, so responses arrive with citations you can open and check. It is
        published publicly and free to open — a genuine door, not a paywall.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-fuchsia-300">Who it is for</h3>
      <ul className="mt-3 space-y-2">
        {useCases.map((useCase) => (
          <li key={useCase} className="flex items-start text-sm text-gray-300">
            <span className="mr-2 text-fuchsia-400">✦</span>
            <span>{useCase}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-xl font-semibold text-fuchsia-300">
        How to use {baseName} in four steps
      </h3>
      <ol className="mt-3 space-y-3">
        {steps.map((step, index) => (
          <li
            key={step.name}
            id={`step-${index + 1}`}
            className="rounded-lg border border-gray-700/60 bg-black/40 p-4"
          >
            <p className="text-sm font-semibold text-cyan-200">
              {index + 1}. {step.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gray-400">{step.text}</p>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-lg border border-fuchsia-500/20 bg-fuchsia-500/5 p-4 text-sm leading-relaxed text-gray-400">
        Every Perplexity Bot in this collection was built and published by{" "}
        <strong className="text-cyan-300">AIWEBTOOLS.AI</strong>. The tool is a mirror —
        what it reflects back depends on the clarity of the question you bring to it.
      </p>
    </section>
  );
};

export default PerplexityBotGuide;
