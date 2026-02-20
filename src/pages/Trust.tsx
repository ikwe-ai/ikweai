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
    "No requirement to expose internal evaluation formulas to begin scope review",
  ] as const;

  return (
    <PageShell>
      <PageMeta
        title="Trust & Confidentiality | Ikwe.ai"
        description="Public trust posture for data handling, confidentiality boundaries, and protected artifact access."
        path="/trust"
      />
      <SummaryHero
        kicker="Trust Posture"
        title="Trust & Confidentiality"
        summary="Public summary of how Ikwe.ai handles intake information, protects protected artifacts, and maintains independence in evaluation and publication."
        highlights={[
          "IP-safe public transparency model",
          "Protected details shared only through gated workflow",
          "Independent third-party evaluation posture",
        ]}
        primaryAction={{ href: "#handling-boundary", label: "View Handling Boundary ↓" }}
        secondaryAction={{ href: "/request-audit#application-form", label: "Request Audit Intake" }}
        jumpLinks={[
          { href: "#information-needs", label: "Information Needs" },
          { href: "#handling-boundary", label: "Public vs Protected" },
          { href: "#confidentiality", label: "Confidentiality" },
          { href: "#contact-path", label: "Contact Path" },
        ]}
      />

      <section id="information-needs" className="py-14 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Information Needs</p>
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
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">Public vs Protected Boundary</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Public Transparency</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Framework structure and terminology definitions</li>
              <li>• High-level benchmark findings and release version context</li>
              <li>• Redacted output examples showing artifact structure</li>
            </ul>
          </article>
          <article className="card-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-lilac mb-3">Protected Distribution</p>
            <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
              <li>• Detailed scenario sets and execution details</li>
              <li>• Internal scoring mechanics and release-control internals</li>
              <li>• Extended institution-specific reporting materials</li>
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
              text: "Ikwe.ai maintains an independent evaluation posture and does not share draft findings with evaluated model developers before publication.",
            },
            {
              label: "Access control",
              text: "Protected artifacts are distributed through controlled request workflows tied to review scope and institutional need.",
            },
            {
              label: "Version discipline",
              text: "Published outputs are versioned so language and evidence can be attributed to a specific release state.",
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
          Use consultation intake to request audit scope review, redacted output walkthrough, or protected artifact
          access routing.
        </p>
        <a
          href="/request-audit#application-form"
          className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Start consultation intake →
        </a>
      </section>
    </PageShell>
  );
}
