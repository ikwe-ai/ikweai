type Step = {
  title: string;
  body: string;
};

type EnterpriseStepperProps = {
  steps: Step[];
};

const STEP_COLORS = [
  "hsl(var(--lilac))",
  "hsl(var(--coral))",
  "hsl(var(--gold))",
  "hsl(var(--safe))",
] as const;

export default function EnterpriseStepper({ steps }: EnterpriseStepperProps) {
  return (
    <ol className="relative" style={{ paddingLeft: "20px" }}>
      {/* Vertical connecting line */}
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0"
        style={{
          left: "19px",
          width: "2px",
          background: "linear-gradient(to bottom, hsl(var(--lilac)), hsl(var(--coral)), hsl(var(--gold)))",
          opacity: 0.3,
        }}
      />

      {steps.map((step, index) => {
        const color = STEP_COLORS[index % STEP_COLORS.length];
        const isLast = index === steps.length - 1;

        return (
          <li key={step.title} className="relative pl-10 pb-8" style={isLast ? { paddingBottom: 0 } : {}}>
            {/* Step dot on the line */}
            <span
              aria-hidden="true"
              className="absolute flex items-center justify-center rounded-full text-xs font-bold"
              style={{
                left: 0,
                top: "2px",
                width: "28px",
                height: "28px",
                backgroundColor: `${color}18`,
                border: `2px solid ${color}`,
                color: color,
                fontFamily: "var(--font-mono)",
                zIndex: 1,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Arrow between steps */}
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute text-foreground-subtle"
                style={{
                  left: "9px",
                  bottom: "4px",
                  fontSize: "10px",
                  opacity: 0.5,
                }}
              >
                ↓
              </span>
            )}

            <div className="card-surface rounded-lg border border-border p-5">
              <h3 className="font-display text-lg text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed text-pretty">{step.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
