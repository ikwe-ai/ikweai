type Step = {
  title: string;
  body: string;
};

type EnterpriseStepperProps = {
  steps: Step[];
};

export default function EnterpriseStepper({ steps }: EnterpriseStepperProps) {
  return (
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li key={step.title} className="card-surface p-4 grid grid-cols-[38px_1fr] gap-3 items-start">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lilac-dim border border-border text-xs font-mono text-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg text-foreground mb-1">{step.title}</h3>
            <p className="text-sm text-foreground-muted leading-relaxed text-pretty">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
