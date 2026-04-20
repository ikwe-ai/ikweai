import PageShell from "@/components/PageShell";

const credentials = [
  {
    label: "Domain expertise",
    text: "Her research identified the behavioral failure patterns recurring across frontier AI systems and named them: premature referral, escalation miss, harm without repair, emotional dismissal. These are structural signatures with measurable psychological consequences — not abstract risk categories.",
  },
  {
    label: "Technical infrastructure",
    text: "She built the scoring pipeline, evaluation platform, automated testing architecture, and agentic workflows herself, as a solo founder, before raising a dollar. She does not advise on AI safety. She measures it, scores it, and built the infrastructure to do it at scale.",
  },
  {
    label: "Human intelligence",
    text: "She translates complex safety architecture to investors, enterprise buyers, clinical validators, legal teams, and the public — because she built the framework from a human problem first, not a technical one.",
  },
];

const disciplines = [
  "Trauma-Informed Care",
  "Motivational Interviewing",
  "Crisis Intervention",
  "Attachment Theory",
  "CBT / DBT",
  "Social Psychology",
];

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/stephaniestranko" },
  { label: "X · @stephstranko", href: "https://x.com/stephstranko" },
  { label: "X · @ikwe_ai", href: "https://x.com/ikwe_ai" },
];

export default function Founder() {
  return (
    <PageShell>
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Founder</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3 leading-tight">
          Stephanie Stranko
        </h1>
        <p className="font-mono text-xs text-foreground-subtle mb-6">
          Founder &amp; CEO · Ikwe.ai / Visible Healing Inc. · Des Moines, Iowa
        </p>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          Building behavioral safety infrastructure for AI — before the industry knew it needed one.
        </p>
      </section>

      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Who She Is</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Stephanie Stranko builds behavioral safety infrastructure for AI systems — the evaluation layer
          that measures whether AI is actually safe to use with a human being in distress, not just whether
          it performs well on capability benchmarks.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          She created the EQ Safety Benchmark: a two-stage evaluation framework grounded in six behavioral
          and clinical disciplines, scored across eight weighted dimensions. The EQSB is the only working
          system of its kind built and maintained independent of the AI companies it evaluates.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Ikwe.ai did not emerge from the AI industry. It was built from a direct familiarity with what it
          costs a human being to not be heard, helped, or protected by the systems designed to serve them.
          That origin is not incidental. It is the reason the framework exists.
        </p>
      </section>

      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">What She Found</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          Over half of AI responses in human-facing emotional contexts fail — not for capability reasons,
          for behavioral ones. The failure patterns she identified and named:
        </p>
        <div className="space-y-0 divide-y divide-border mb-6">
          {[
            { label: "Premature referral", text: "Routing users to outside resources before stabilizing their immediate distress — a pattern that reads as helpful but functions as abandonment." },
            { label: "Escalation miss", text: "Failing to detect or respond proportionally to crisis signals, self-harm indicators, or acute psychological danger." },
            { label: "Harm without repair", text: "Causing distress through an inadequate response and then continuing without acknowledging or correcting what went wrong." },
            { label: "Emotional dismissal", text: "Minimizing, reframing too quickly, or redirecting away from valid emotion before it has been received." },
          ].map(({ label, text }) => (
            <div key={label} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{label}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="stat-block rounded p-5">
          <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-2">Core thesis</p>
          <p className="text-sm text-foreground leading-relaxed">
            Recognition is not safety. An AI can detect distress and still escalate it. It can validate
            emotion and still cause documented harm. The benchmark was built to catch what optimistic
            capability testing misses.
          </p>
        </div>
      </section>

      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Background</p>
        <div className="space-y-0 divide-y divide-border">
          {credentials.map(({ label, text }) => (
            <div key={label} className="py-5">
              <p className="font-mono text-xs text-lilac mb-1.5">{label}</p>
              <p className="text-sm text-foreground-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Scientific Foundation</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          The EQSB is grounded in six behavioral and clinical disciplines that have studied human
          psychological harm and repair for decades. She applied that body of knowledge to AI — not
          the other way around.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {disciplines.map((d) => (
            <div key={d} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-lilac flex-shrink-0" />
              <span className="text-xs text-foreground-muted font-mono">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 border-b border-border max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Independence</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Ikwe.ai has no financial, contractual, or operational relationships with any AI developer
          evaluated in our benchmarks. That independence is not a positioning choice. It is the
          foundation of the benchmark's credibility.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          The AI that outlasts this moment will be the AI that earns trust with the humans who use it.
          Ikwe.ai is building the standard for what that requires.
        </p>
      </section>

      <section className="py-14 max-w-2xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Connect</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-lilac hover:text-foreground transition-colors"
            >
              {label} ↗
            </a>
          ))}
          <a href="/intake" className="font-mono text-xs text-lilac hover:text-foreground transition-colors">
            Work with Ikwe.ai →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
