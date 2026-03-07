import { Link } from "react-router-dom";

type PageKey = "research" | "audit" | "intake" | "benchmark" | "trust";

type ConnectedPagesProps = {
  current: PageKey;
};

const pages = [
  {
    key: "research" as const,
    eyebrow: "Research",
    title: "Research Summary",
    body: "See the public findings, benchmark framing, and methodology context before you scope work.",
    href: "/research",
    cta: "Open research",
  },
  {
    key: "audit" as const,
    eyebrow: "Audit",
    title: "Ikwe EQ Safety Evaluation",
    body: "Review the evaluation pathway, sample outputs, and how Behavioral Safety Validation turns findings into decisions.",
    href: "/audit",
    cta: "Open audit",
  },
  {
    key: "intake" as const,
    eyebrow: "Intake",
    title: "Request Evaluation",
    body: "Share deployment context, timeline, and stakeholders so the scope can be sized correctly.",
    href: "/intake#application-form",
    cta: "Open intake",
  },
] as const;

export default function ConnectedPages({ current }: ConnectedPagesProps) {
  return (
    <section className="site-section py-8 border-b border-border">
      <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-5">Connected Pages</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        {pages.map((page) => {
          const active = page.key === current;

          return (
            <article
              key={page.key}
              className={`card-surface p-5 ${active ? "border-lilac bg-lilac-dim/30" : ""}`}
            >
              <p className={`font-mono text-[11px] uppercase tracking-[0.12em] mb-2 ${active ? "text-lilac" : "text-foreground-subtle"}`}>
                {active ? "Current Page" : page.eyebrow}
              </p>
              <h2 className="font-display text-xl text-foreground mb-2">{page.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">{page.body}</p>
              {active ? (
                <span className="summary-jump">You are here</span>
              ) : (
                <Link to={page.href} className="summary-jump">
                  {page.cta}
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
