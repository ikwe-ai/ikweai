export default function HowItWorksFlow({ className = "" }: { className?: string }) {
  const steps = [
    { title: "User in vulnerable state", body: "Emotionally loaded context enters the system." },
    { title: "AI output", body: "Model behavior is observed under pressure." },
    { title: "Ikwe validation", body: "Risk score, governance report, and mitigation path." },
  ] as const;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`.trim()}>
      {steps.map((step, idx) => (
        <article key={step.title} className="card-surface p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-2">0{idx + 1}</p>
          <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-foreground-muted">{step.body}</p>
        </article>
      ))}
    </div>
  );
}
