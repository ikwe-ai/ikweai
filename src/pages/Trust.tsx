import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function Trust() {
  const requiredInputs = [
    "System purpose and deployment surface",
    "Risk-sensitive use context and stakeholder profile",
    "Target review question (board, insurance, or governance decision)",
  ] as const;

  const notRequired = [
    "No request for proprietary model weights or training data",
    "No request for production user conversation exports by default",
    "No requirement to share scoring formulas to begin scope review",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Trust & Confidentiality | Ikwe.ai"
        description="Customer-facing trust standards for data handling, confidentiality boundaries, and report access."
        path="/trust"
      />
      <SummaryHero
        kicker="Trust Standards"
        title="Trust & Confidentiality"
        summary="What you can share, how outputs are controlled, and how independent evaluation materials are handled for institutional review."
        highlights={[
          "Clear access model",
          "Detailed materials shared with authorized stakeholders",
          "Independent third-party evaluation standards",
        ]}
        primaryAction={{ href: "#handling-boundary", label: "View Handling Boundary ↓" }}
        secondaryAction={{ href: "/intake#application-form", label: "Request Evaluation" }}
        jumpLinks={[
          { href: "#information-needs", label: "Information Needs" },
          { href: "#handling-boundary", label: "Public and Client Materials" },
          { href: "#confidentiality", label: "Confidentiality" },
          { href: "#contact-path", label: "Contact Path" },
        ]}
      />

      <section id="information-needs" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Information Needs</p>
        <p className="text-xs text-foreground-subtle mb-6 max-w-4xl">
          Share only what is needed to scope evaluation. Access and reporting stay controlled and traceable.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">What We Request</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              {requiredInputs.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-lilac shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">What We Do Not Require</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              {notRequired.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-lilac shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="handling-boundary" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public Information and Client Materials</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Public Transparency</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Framework structure and terminology definitions</li>
              <li>• High-level benchmark findings and version context</li>
              <li>
                • Redacted examples showing deliverables structure (including a{" "}
                <a
                  href="/sample-report"
                  className="link-lilac"
                >
                  public sample report
                </a>
                )
              </li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Client Materials</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Expanded benchmark documentation for authorized review</li>
              <li>• Additional reporting materials provided by approved access path</li>
              <li>• Organization-specific reporting materials</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="confidentiality" className="py-14 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Confidentiality Principles</p>
        <div className="space-y-0 divide-y divide-border">
          {[
            {
              label: "Independence",
              text: "Ikwe.ai maintains an independent evaluation standard and does not share pre-publication findings with evaluated model developers.",
            },
            {
              label: "Access control",
              text: "Detailed client materials are shared through controlled request steps tied to review scope and institutional need.",
            },
            {
              label: "Version discipline",
              text: "Published outputs are versioned so language and evidence can be attributed to a specific benchmark state.",
            },
            {
              label: "Name usage",
              text: "Ikwe.ai, EQ Safety Benchmark, and Ikwe Certified are proprietary names of Visible Healing Inc. Reuse requires written permission.",
            },
          ].map((item) => (
            <div key={item.label} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{item.label}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-path" className="py-14 max-w-3xl">
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Use evaluation intake to request scope review, sample walkthrough, and report package options.
        </p>
        <p className="text-xs text-foreground-subtle leading-relaxed mb-5">
          PDF copies are provided on request. If a styled PDF is unavailable, we can send an equivalent web-copy
          version for review.
        </p>
        <a
          href="/intake#application-form"
          className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Start evaluation intake →
        </a>
        <div className="flex flex-wrap gap-2 mt-4">
          <a href="/benchmark" className="summary-jump">Benchmark framework</a>
          <a href="/research" className="summary-jump">Research evidence</a>
          <a href="/deliverables" className="summary-jump">Deliverables</a>
          <a href="/sample-report" className="summary-jump">Sample report</a>
          <a href="/audit" className="summary-jump">Audit pathway</a>
        </div>
      </section>
    </PageShell>
  );
}
