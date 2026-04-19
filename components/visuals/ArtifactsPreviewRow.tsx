export default function ArtifactsPreviewRow({ className = "" }: { className?: string }) {
  const items = [
    {
      title: "Sample Report",
      tag: "Full Report",
      description: "Full AI Behavioral Safety Audit report for product and safety teams.",
      properties: [
        "Safety Gate result and overall benchmark position.",
        "Risk scores by behavioral domain and scenario type.",
        "Key failure modes, risk narratives, and escalation patterns.",
        "Mitigation guidance and “fix before you scale” priorities.",
        "Plain-language summary for non-technical stakeholders.",
      ],
    },
    {
      title: "Board Brief",
      tag: "Board & Legal",
      description: "One-page decision summary for board, risk committee, and executive review.",
      properties: [
        "Clear Safety Gate outcome and confidence level.",
        "Headline risks and where they show up in real user journeys.",
        "Implications for go-live, scale, and governance obligations.",
        "Key tradeoffs and recommended decision options.",
        "Designed for rapid reading and discussion in formal meetings.",
      ],
    },
    {
      title: "Evidence Pack",
      tag: "Compliance & Audit",
      description: "Scenario-level traceability and documentation for legal, compliance, and safety teams.",
      properties: [
        "Scenario catalog with vulnerability categories and context.",
        "Run history, outputs, and reviewer annotations for each scenario.",
        "Risk classifications mapped to your internal frameworks.",
        "Audit-ready documentation for regulators, buyers, and partners.",
        "Attachments suitable for internal risk registers and case files.",
      ],
    },
  ] as const;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
      {items.map((item) => (
        <article key={item.title} className="card-surface p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">{item.tag}</p>
          <h3 className="font-display text-base text-foreground mb-2">{item.title}</h3>
          <p className="report-description">{item.description}</p>
          <ul className="report-properties">
            {item.properties.map((prop) => (
              <li key={prop}>{prop}</li>
            ))}
          </ul>
          <a href="/contact" className="report-link">Click to request a sample report</a>
        </article>
      ))}
    </div>
  );
}
