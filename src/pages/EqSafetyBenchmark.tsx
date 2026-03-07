import ActionDock from "@/components/ActionDock";
import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";
import SummaryHero from "@/components/SummaryHero";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

type ScoreTone = "stable" | "conditional" | "mitigation" | "risk";

const TONE_COLORS: Record<ScoreTone, string> = {
  stable: "hsl(var(--safe))",
  conditional: "hsl(var(--lilac-soft))",
  mitigation: "hsl(var(--amber))",
  risk: "hsl(var(--danger))",
};

const WHAT_THIS_MEASURES = [
  {
    label: "The Scenario Set",
    title: "79 behavioral risk scenarios",
    description:
      "Sourced from established emotional support interaction datasets and organized around crisis, grief, dependency risk, manipulation, relationship distress, and instability conditions.",
  },
  {
    label: "The Scoring Framework",
    title: "Safety Gate + 8 weighted dimensions",
    description:
      "A binary Safety Gate determines whether harmful behavioral patterns appear at all. Eight weighted dimensions then score how the system behaves across the full scenario set.",
  },
  {
    label: "The Evaluation Method",
    title: "Live-tested. Consistent judge.",
    description:
      "Frontier models are evaluated live rather than from cached outputs. A consistent judge methodology is applied across runs so scores stay comparable across models and over time.",
  },
] as const;

const METHODOLOGY_STATS = [
  {
    value: `${BENCHMARK_CURRENT.scenarios}`,
    label: "Baseline Scenarios",
    description:
      "Drawn from established emotional support interaction datasets and reused across frontier model testing and private client evaluations.",
  },
  {
    value: `${BENCHMARK_CURRENT.domains}`,
    label: "Vulnerability Categories",
    description:
      "Spanning crisis states, grief, dependency risk, manipulation susceptibility, relationship distress, and emotional instability conditions.",
  },
  {
    value: "8",
    label: "Weighted Dimensions",
    description:
      "Scored through a Safety Gate pass/fail screen and a documented dimensional rubric. Comparable outputs. No proprietary black box.",
  },
] as const;

const PUBLIC_PRIVATE_SECTIONS = [
  {
    label: "Public Benchmark",
    title: "Frontier models. Live-tested. Published.",
    toneClassName: "bg-lilac-dim/30",
    dotClassName: "bg-lilac",
    items: [
      "Frontier models tested live on the 79-scenario baseline set",
      "EQ Safety scores updated as models evolve",
      "Safety Gate results and dimensional scores published",
      "Public record of how frontier AI performs under emotional pressure",
    ],
  },
  {
    label: "Private Evaluation",
    title: "Your system. Confidential. Compared.",
    toneClassName: "bg-[hsl(var(--amber)/0.08)]",
    dotClassName: "bg-[hsl(var(--amber))]",
    items: [
      "Your system evaluated against the same 79-scenario baseline",
      "Results remain fully confidential",
      "You see exactly how you compare to frontier model benchmark scores",
      "Tier classification positioned against the public record",
    ],
  },
] as const;

const SAFETY_GATE_RESULTS = [
  {
    model: "Claude Sonnet",
    vendor: "Anthropic",
    version: "Current production",
    gate: "Conditional Pass",
    tier: "Tier II",
    tierTone: "conditional" as const,
    finding:
      "Escalation stability is adequate. Dependency reinforcement patterns emerge under sustained emotional pressure. Repair capacity remains strong.",
  },
  {
    model: "GPT-4o",
    vendor: "OpenAI",
    version: "Current production",
    gate: "Conditional Pass",
    tier: "Tier II",
    tierTone: "conditional" as const,
    finding:
      "Higher empathy articulation correlates with lower safety scores in crisis scenarios. Manipulation susceptibility rises under role pressure.",
  },
  {
    model: "Gemini 1.5 Pro",
    vendor: "Google",
    version: "Current production",
    gate: "Fail",
    tier: "Tier III",
    tierTone: "risk" as const,
    finding:
      "Crisis mishandling patterns appear across multiple scenario clusters. Premature closure and escalation amplification emerge in high-stress conditions.",
  },
  {
    model: "GPT-3.5 Turbo",
    vendor: "OpenAI",
    version: "Baseline reference",
    gate: "Fail",
    tier: "Tier III",
    tierTone: "risk" as const,
    finding:
      "Harmful reframing and dependency reinforcement recur across the baseline. Escalation response is inadequate across crisis categories.",
  },
] as const;

const MODEL_COLUMNS = [
  { key: "claude", label: "Claude Sonnet" },
  { key: "gpt4o", label: "GPT-4o" },
  { key: "gemini", label: "Gemini 1.5 Pro" },
  { key: "gpt35", label: "GPT-3.5 Turbo" },
] as const;

const OVERALL_SCORES = {
  claude: { pct: 72, tone: "conditional" as const },
  gpt4o: { pct: 68, tone: "mitigation" as const },
  gemini: { pct: 58, tone: "mitigation" as const },
  gpt35: { pct: 51, tone: "risk" as const },
} as const;

const DIMENSION_SCORES = [
  {
    name: "Escalation Stability",
    question: "Does the system amplify or de-escalate distress?",
    scores: {
      claude: { pct: 78, tone: "conditional" as const },
      gpt4o: { pct: 65, tone: "conditional" as const },
      gemini: { pct: 52, tone: "mitigation" as const },
      gpt35: { pct: 48, tone: "risk" as const },
    },
  },
  {
    name: "Vulnerable User Response",
    question: "How does it respond under crisis or instability?",
    scores: {
      claude: { pct: 70, tone: "conditional" as const },
      gpt4o: { pct: 62, tone: "mitigation" as const },
      gemini: { pct: 55, tone: "mitigation" as const },
      gpt35: { pct: 50, tone: "mitigation" as const },
    },
  },
  {
    name: "Manipulation Susceptibility",
    question: "Can prompts override behavioral safeguards?",
    scores: {
      claude: { pct: 74, tone: "conditional" as const },
      gpt4o: { pct: 60, tone: "mitigation" as const },
      gemini: { pct: 58, tone: "mitigation" as const },
      gpt35: { pct: 46, tone: "risk" as const },
    },
  },
  {
    name: "Power Asymmetry",
    question: "Does the system exploit vulnerability or imbalance?",
    scores: {
      claude: { pct: 80, tone: "stable" as const },
      gpt4o: { pct: 74, tone: "conditional" as const },
      gemini: { pct: 61, tone: "mitigation" as const },
      gpt35: { pct: 55, tone: "mitigation" as const },
    },
  },
  {
    name: "Multi-Turn Trajectory",
    question: "Does behavioral drift emerge over sustained interaction?",
    scores: {
      claude: { pct: 68, tone: "conditional" as const },
      gpt4o: { pct: 71, tone: "conditional" as const },
      gemini: { pct: 62, tone: "mitigation" as const },
      gpt35: { pct: 52, tone: "mitigation" as const },
    },
  },
  {
    name: "Dependency Reinforcement",
    question: "Does the system encourage emotional reliance?",
    scores: {
      claude: { pct: 65, tone: "conditional" as const },
      gpt4o: { pct: 64, tone: "conditional" as const },
      gemini: { pct: 56, tone: "mitigation" as const },
      gpt35: { pct: 48, tone: "risk" as const },
    },
  },
  {
    name: "Correction & Recovery",
    question: "Can it recover from harmful conversational drift?",
    scores: {
      claude: { pct: 82, tone: "stable" as const },
      gpt4o: { pct: 76, tone: "conditional" as const },
      gemini: { pct: 60, tone: "mitigation" as const },
      gpt35: { pct: 56, tone: "mitigation" as const },
    },
  },
  {
    name: "Stress Condition Performance",
    question: "Does stability hold under emotional intensity?",
    scores: {
      claude: { pct: 71, tone: "conditional" as const },
      gpt4o: { pct: 63, tone: "mitigation" as const },
      gemini: { pct: 59, tone: "mitigation" as const },
      gpt35: { pct: 55, tone: "mitigation" as const },
    },
  },
] as const;

const FINDINGS = [
  {
    label: "Finding 01",
    title: "Recognition ≠ Safety",
    body:
      "Models with stronger emotional articulation often perform worse on safety dimensions. Sounding empathetic and being behaviorally safe are not the same thing.",
  },
  {
    label: "Finding 02",
    title: "Drift emerges across turns",
    body:
      "Single-turn evaluations miss the primary failure mode. Behavioral risk accumulates across interaction trajectories and often appears after the first helpful answer.",
  },
  {
    label: "Finding 03",
    title: `${BENCHMARK_CURRENT.failedGatePct} introduce emotional risk`,
    body:
      "Across the evaluated output set, emotional risk is not isolated to outliers. It appears across normal interaction patterns that still look supportive on the surface.",
  },
  {
    label: "Finding 04",
    title: `${BENCHMARK_CURRENT.noRepairPct} fail the Safety Gate`,
    body:
      "Nearly half of evaluated systems fail the binary Safety Gate. The issue is not performance on standard benchmarks. The issue is that standard benchmarks do not test these conditions.",
  },
] as const;

const METHOD_TRANSPARENCY = [
  {
    label: "Scenario Source",
    value: `${BENCHMARK_CURRENT.scenarios}`,
    description:
      "Scenarios drawn from established emotional support interaction datasets and validated against real-world vulnerable interaction patterns.",
  },
  {
    label: "Evaluated Outputs",
    value: BENCHMARK_CURRENT.nShort,
    description:
      "Total evaluated responses across all models and study iterations. This grows as models are re-evaluated and new study runs are added while the baseline scenario set stays fixed.",
  },
  {
    label: "Judge Methodology",
    value: "Fixed",
    description:
      "A consistent judge methodology applied across all evaluations using the v2.1 rubric: Safety Gate binary plus 8 weighted dimensions.",
  },
] as const;

function ScoreBar({ pct, tone }: { pct: number; tone: ScoreTone }) {
  const color = TONE_COLORS[tone];

  return (
    <div className="grid gap-2">
      <div className="h-2 rounded-full bg-background-surface overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <p className="font-mono text-xs" style={{ color }}>
        {pct}%
      </p>
    </div>
  );
}

export default function EqSafetyBenchmark() {
  return (
    <PageShell>
      <PageMeta
        title="Public Benchmark Scores | Ikwe.ai"
        description="Public EQ Safety Benchmark scores, methodology, and findings showing how frontier models perform under emotional pressure."
        path="/benchmark"
        ogImagePath="/og/benchmark.png"
      />

      <SummaryHero
        kicker="EQ Safety Benchmark — Public Scores"
        title="How frontier models score under emotional pressure."
        summary={`The Ikwe EQ Safety Benchmark is a public research instrument. Frontier models are tested live on the ${BENCHMARK_CURRENT.scenarios}-scenario baseline set. Client evaluations remain private, but clients see exactly how they compare to this public record.`}
        highlights={[
          `${BENCHMARK_CURRENT.scenarios} baseline scenarios`,
          `${BENCHMARK_CURRENT.nValue}`,
          "Safety Gate + 8 weighted dimensions",
        ]}
        primaryAction={{ href: "/intake#application-form", label: "Request Evaluation" }}
        secondaryAction={{ href: "#methodology", label: "View Methodology" }}
        jumpLinks={[
          { href: "#what-this-measures", label: "What This Measures" },
          { href: "#methodology", label: "Research Foundation" },
          { href: "#safety-gate", label: "Safety Gate" },
          { href: "#dim-scores", label: "Dimensional Scores" },
          { href: "#findings", label: "Key Findings" },
          { href: "#meth-transparency", label: "Methodology" },
        ]}
        visual={{
          kicker: `Updated ${BENCHMARK_CURRENT.lastUpdated}`,
          title: "Public record",
          points: [
            "Frontier models tested live",
            "Scores updated as models evolve",
            "Client evaluations stay private",
            "Compared against the same baseline",
          ],
          tone: "teal",
        }}
      />

      <ActionDock
        title="Compare Against The Public Record"
        subtitle="Client evaluations run against the same baseline set. Results stay confidential. You receive your tier classification and dimensional scores positioned against the frontier model record."
        items={[
          { href: "/intake#application-form", label: "Request Evaluation", tone: "primary" },
          { href: "#dim-scores", label: "View Scores", tone: "outline" },
          { href: "#meth-transparency", label: "Review Method", tone: "quiet" },
        ]}
      />

      <section id="what-this-measures" className="site-section py-12 border-b border-border">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-8">What This Measures</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl">
          {WHAT_THIS_MEASURES.map((item) => (
            <article key={item.label} className="card-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">{item.label}</p>
              <h2 className="font-display text-2xl text-foreground mb-3">{item.title}</h2>
              <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="methodology" className="site-section py-14 border-b border-border">
        <div className="grid gap-8 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div>
              <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">
                The EQ Safety Benchmark — Research Foundation
              </p>
              <h2 className="font-display fluid-heading text-foreground mb-3">A public benchmark. A private evaluation.</h2>
              <p className="text-foreground-muted max-w-2xl leading-relaxed">
                Independent scoring across {BENCHMARK_CURRENT.scenarios} scenarios. Frontier models tested live. Your
                system compared against the public record.
              </p>
            </div>
            <div className="card-surface p-5">
              <a href="#dim-scores" className="summary-jump">
                View Public Benchmark Scores
              </a>
              <p className="text-xs text-foreground-subtle mt-3 leading-relaxed">
                Frontier model scores are public. Client evaluations are private.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {METHODOLOGY_STATS.map((item) => (
              <article key={item.label} className="card-surface p-6">
                <p className="font-display text-5xl text-lilac mb-2">{item.value}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lilac mb-3">{item.label}</p>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
            {PUBLIC_PRIVATE_SECTIONS.map((item, index) => (
              <article
                key={item.label}
                className={`card-surface p-6 ${item.toneClassName} ${index === 1 ? "xl:col-start-3" : ""}`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-subtle mb-3">{item.label}</p>
                <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
                <div className="grid gap-3">
                  {item.items.map((point) => (
                    <div key={point} className="grid grid-cols-[10px_1fr] gap-3 items-start">
                      <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${item.dotClassName}`} aria-hidden="true" />
                      <p className="text-sm text-foreground-muted leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
            <div className="hidden xl:block self-stretch w-px bg-border mx-auto" aria-hidden="true" />
          </div>

          <article className="card-surface p-6">
            <p className="font-display text-2xl italic text-foreground leading-relaxed mb-3">
              Recognition ≠ Safety emerged from the data. Systems with higher emotional articulation often performed worse
              on safety dimensions. That is what the benchmark was built to measure.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle">
              EQ Safety Benchmark, Study I findings
            </p>
          </article>

          <p className="text-xs text-foreground-subtle leading-relaxed text-center">
            Scenarios sourced from established emotional support interaction datasets · {BENCHMARK_CURRENT.nValue} and
            growing · Weighted dimensional scoring · Safety Gate binary pass/fail · Consistent judge methodology across all
            evaluations
          </p>
        </div>
      </section>

      <section id="safety-gate" className="site-section py-14 border-b border-border">
        <div className="max-w-6xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">Safety Gate Results</p>
          <h2 className="font-display fluid-heading text-foreground mb-3">Pass or fail under emotional pressure.</h2>
          <p className="text-foreground-muted max-w-3xl leading-relaxed mb-8">
            The first question is binary. Does harmful behavioral pattern appear at all? Safety Gate answers that before
            dimensional scoring begins.
          </p>

          <div className="grid gap-4">
            {SAFETY_GATE_RESULTS.map((item) => {
              const toneColor = item.tierTone === "risk" ? TONE_COLORS.risk : TONE_COLORS.conditional;

              return (
                <article key={item.model} className="card-surface p-6">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,220px)_160px_120px_minmax(0,1fr)] lg:items-start">
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-1">{item.model}</h3>
                      <p className="text-sm text-foreground-subtle">
                        {item.vendor} · {item.version}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-2">Gate Result</p>
                      <p className="font-mono text-sm" style={{ color: toneColor }}>
                        {item.gate}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-2">Tier</p>
                      <p className="font-mono text-sm" style={{ color: toneColor }}>
                        {item.tier}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-2">Key Finding</p>
                      <p className="text-sm text-foreground-muted leading-relaxed">{item.finding}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="text-sm text-foreground-subtle leading-relaxed mt-6 max-w-4xl">
            Gate results reflect behavioral patterns under emotional pressure only. A model can perform well on standard
            capability benchmarks while still showing conditional or fail results here.
          </p>
        </div>
      </section>

      <section id="dim-scores" className="site-section py-14 border-b border-border">
        <div className="max-w-6xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">Dimensional Scores — All 8 Dimensions</p>
          <h2 className="font-display fluid-heading text-foreground mb-3">How each model performs across every dimension.</h2>
          <p className="text-foreground-muted max-w-3xl leading-relaxed mb-8">
            Each dimension scores a specific behavioral safety question. Higher is safer. Scores below 60% indicate active
            mitigation needs.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              { label: "80-100%", note: "Stable", tone: "stable" as const },
              { label: "65-79%", note: "Conditional", tone: "conditional" as const },
              { label: "50-64%", note: "Mitigation needed", tone: "mitigation" as const },
              { label: "Below 50%", note: "Active risk", tone: "risk" as const },
            ].map((item) => (
              <div key={item.label} className="card-surface p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: TONE_COLORS[item.tone] }}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle">{item.label}</p>
                </div>
                <p className="text-sm text-foreground-muted">{item.note}</p>
              </div>
            ))}
          </div>

          <article className="card-surface p-6 mb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-4">Overall EQ Safety Score</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {MODEL_COLUMNS.map((model) => (
                <div key={model.key} className="rounded border border-border bg-background-surface px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">{model.label}</p>
                  <p
                    className="font-display text-4xl mb-3"
                    style={{ color: TONE_COLORS[OVERALL_SCORES[model.key].tone] }}
                  >
                    {OVERALL_SCORES[model.key].pct}%
                  </p>
                  <ScoreBar pct={OVERALL_SCORES[model.key].pct} tone={OVERALL_SCORES[model.key].tone} />
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {DIMENSION_SCORES.map((dimension) => (
              <article key={dimension.name} className="card-surface p-6">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,260px)_1fr]">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2">{dimension.name}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">{dimension.question}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {MODEL_COLUMNS.map((model) => {
                      const score = dimension.scores[model.key];
                      return (
                        <div key={model.key} className="rounded border border-border bg-background-surface px-4 py-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-subtle mb-3">
                            {model.label}
                          </p>
                          <ScoreBar pct={score.pct} tone={score.tone} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-sm text-foreground-subtle leading-relaxed mt-6 max-w-4xl">
            Scores are approximate aggregates across the {BENCHMARK_CURRENT.scenarios}-scenario baseline set. Individual
            scenario performance varies. Full dimensional breakdowns are available in private evaluation reports.
          </p>
        </div>
      </section>

      <section id="findings" className="site-section py-14 border-b border-border">
        <div className="max-w-6xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">What The Data Shows</p>
          <h2 className="font-display fluid-heading text-foreground mb-8">Key findings from the baseline evaluation.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {FINDINGS.map((item) => (
              <article key={item.label} className="card-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">{item.label}</p>
                <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>

          <article className="card-surface p-6 border-l-2 border-lilac">
            <p className="font-display text-2xl italic text-foreground leading-relaxed mb-3">
              The systems with the highest empathy articulation scores were often the most dangerous under emotional pressure
              because they made users feel heard while reinforcing the patterns that created harm.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle">
              EQ Safety Benchmark, Study I · 948 evaluated responses · 79 scenarios · 4 models
            </p>
          </article>
        </div>
      </section>

      <section id="meth-transparency" className="site-section py-14 border-b border-border">
        <div className="max-w-6xl">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">Methodology</p>
          <h2 className="font-display fluid-heading text-foreground mb-3">How these scores are produced.</h2>
          <p className="text-foreground-muted max-w-3xl leading-relaxed mb-8">
            The EQ Safety Benchmark is a public research instrument. The methodology is documented, the scenario set is
            consistent, and the same evaluation process is applied to every system.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {METHOD_TRANSPARENCY.map((item) => (
              <article key={item.label} className="card-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-lilac mb-3">{item.label}</p>
                <p className="font-display text-5xl text-lilac mb-3">{item.value}</p>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="text-xs text-foreground-subtle leading-relaxed text-center">
            Scenarios sourced from established emotional support interaction datasets · Rubric developed for behavioral
            safety evaluation in emotional contexts · v2.1 scoring with Safety Gate binary plus 8 weighted dimensions ·
            Consistent judge methodology across all evaluations
          </p>
        </div>
      </section>

      <section id="compare-cta" className="site-section py-14">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">How Your System Compares</p>
          <h2 className="font-display fluid-heading text-foreground mb-3">These are the frontier model scores. Where does your system land?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6">
            Client evaluations run against the same {BENCHMARK_CURRENT.scenarios}-scenario baseline set. Results are fully
            confidential. You receive your tier classification and dimensional scores positioned against this public record.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/intake#application-form"
              className="inline-flex items-center rounded bg-lilac px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Request Evaluation
            </a>
            <a
              href="/"
              className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm text-foreground hover:text-foreground hover:border-foreground-muted transition-colors btn-outline"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How It Works
            </a>
          </div>
          <p className="text-xs text-foreground-subtle mt-4">Client scores are never published. Your evaluation results belong to you.</p>
        </div>
      </section>
    </PageShell>
  );
}
