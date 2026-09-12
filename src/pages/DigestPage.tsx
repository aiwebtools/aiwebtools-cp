import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Loader2, Mail } from "lucide-react";
import DOMPurify from "dompurify";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { buildCanonicalUrl } from "@/utils/seo";

interface DigestRow {
  id: string;
  issue_date: string;
  title: string;
  summary: string | null;
  html: string;
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const DigestPage = () => {
  const { date } = useParams();
  const [issues, setIssues] = useState<DigestRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);

    const query = supabase
      .from("ai_digests")
      .select("id, issue_date, title, summary, html")
      .eq("status", "published")
      .order("issue_date", { ascending: false });

    (date ? query.eq("issue_date", date).limit(1) : query.limit(40)).then(({ data }) => {
      if (!alive) return;
      setIssues((data as DigestRow[]) ?? []);
      setLoading(false);
    });

    return () => {
      alive = false;
    };
  }, [date]);

  const single = date ? issues[0] : null;
  const canonical = buildCanonicalUrl(date ? `/digest/${date}` : "/digest");

  return (
    <div className="min-h-screen bg-background px-4 py-12 text-foreground">
      <Helmet>
        <title>
          {single
            ? `${single.title} — AIWebTools Weekly AI Digest`
            : "Weekly AI Digest — Latest AI News, Trends & New Tools | AIWebTools.ai"}
        </title>
        <meta
          name="description"
          content={
            single?.summary ||
            "Every week we scan the AI world and publish the news, trends and newly launched AI tools that matter. Free to read, free to subscribe."
          }
        />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="mx-auto w-full max-w-3xl space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-primary">
            {single ? single.title : "The Weekly AI Digest"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {single
              ? formatDate(single.issue_date)
              : "AI news, trends and freshly launched tools — gathered every week by our research agent."}
          </p>
          {!single && (
            <Button asChild className="mt-4">
              <Link to="/join">
                <Mail className="mr-2 h-4 w-4" /> Get it by email — free
              </Link>
            </Button>
          )}
        </header>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
          </div>
        )}

        {!loading && issues.length === 0 && (
          <p className="rounded-xl border border-border/60 bg-card/50 p-6 text-center text-sm text-muted-foreground">
            The first issue is being prepared. Subscribe and it will land in your inbox the moment it publishes.
          </p>
        )}

        {!loading && single && (
          <article
            className="prose prose-sm prose-invert max-w-none rounded-2xl border border-primary/25 bg-card/60 p-6"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(single.html, {
                ALLOWED_TAGS: [
                  "h2", "h3", "h4", "p", "ul", "ol", "li", "a", "strong", "em", "b", "i",
                  "br", "hr", "blockquote", "span",
                ],
                ALLOWED_ATTR: ["href", "target", "rel"],
                ALLOWED_URI_REGEXP: /^https:\/\//i,
              }),
            }}
          />
        )}

        {!loading && !single &&
          issues.map((issue) => (
            <Link
              key={issue.id}
              to={`/digest/${issue.issue_date}`}
              className="block rounded-2xl border border-border/70 bg-card/50 p-5 transition hover:border-primary/50"
            >
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {formatDate(issue.issue_date)}
              </span>
              <h2 className="mt-1 text-lg font-semibold text-foreground">{issue.title}</h2>
              {issue.summary && <p className="mt-2 text-sm text-muted-foreground">{issue.summary}</p>}
            </Link>
          ))}

        {single && (
          <p className="text-center text-sm">
            <Link to="/digest" className="text-primary hover:underline">
              ← All digest issues
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default DigestPage;
