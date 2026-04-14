import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function EqSafetyBenchmarkFoundation() {
  return (
    <PageShell>
      <PageMeta
        title="The EQ Safety Benchmark: What's Actually Behind It | Ikwe.ai"
        description="The year of research, the clinical disciplines, and the empirical findings that built the framework nobody else built. By Stephanie Stranko."
        path="/research/writings/eq-safety-benchmark-foundation"
      />
      <SummaryHero
        kicker="Founder Writing"
        title="The EQ Safety Benchmark is not a vibe. Here's what's actually behind it."
        summary="AI safety has been measuring the wrong thing. Not an opinion — documented. This is the year of research, the clinical disciplines, and the empirical findings that built the framework nobody else built."
        highlights={[
          "948 AI responses scored against clinical standards",
          "Eight dimensions derived from six established disciplines",
          "54.7% of baseline responses introduced emotional risk",
        ]}
        primaryAction={{ href: "/benchmark", label: "View Public Benchmark" }}
        secondaryAction={{ href: "/research", label: "Back to Research" }}
        jumpLinks={[
          { href: "#the-problem", label: "The Problem" },
          { href: "#what-was-missed", label: "What Was Missed" },
          { href: "#where-it-comes-from", label: "Where It Comes From" },
          { href: "#research-findings", label: "Research Findings" },
          { href: "#what-safe-ai-requires", label: "What Safe AI Requires" },
        ]}
      />

      <div className="prose-container">
        {/* ── Author ── */}
        <p className="text-sm text-foreground-muted mb-8">
          By <strong className="text-foreground">Stephanie Stranko</strong><br />
          Founder &amp; CEO, Ikwe.ai (Visible Healing Inc.) · April 2026
        </p>

        {/* ── Opening ── */}
        <p className="text-foreground-muted lede">
          There's a version of this story where I lead with credentials.
        </p>
        <p className="text-foreground-muted">
          I'm not going to do that. I'm going to lead with the problem — because the problem is what
          built the framework. And the framework is what this piece is actually about.
        </p>

        {/* ── The Problem ── */}
        <h2 id="the-problem" className="font-display fluid-heading text-foreground mt-12 mb-4">The problem</h2>
        <p className="text-foreground lede" style={{ maxWidth: '58ch' }}>
          AI safety, as a field, has been measuring the wrong thing.
        </p>
        <p className="text-foreground-muted">
          Not partially wrong. Not missing edge cases. Missing an entire class of harm.
        </p>
        <p className="text-foreground-muted">
          A model can be certified, benchmarked, and deployed as "safe" — and still harm people. Because the harm
          isn't just in what the model says. It's in how it <strong className="text-foreground">behaves</strong>.
          And behavior is not what existing benchmarks measure.
        </p>
        <p className="text-foreground-muted">
          I built the EQ Safety Benchmark after a year documenting that gap — in clinical literature, in established
          human safety disciplines, in 948 real AI responses scored against those standards. This is not a vibe. It
          is not "AI but nicer." It is a measurable, discipline-rooted framework. That distinction matters.
        </p>

        {/* ── What Was Missed ── */}
        <h2 id="what-was-missed" className="font-display fluid-heading text-foreground mt-12 mb-4">What the field forgot to measure</h2>
        <p className="text-foreground-muted">
          Most AI safety evaluations focus on content: policy violations, jailbreak resistance, restricted outputs.
          Those matter. They are not sufficient.
        </p>
        <p className="text-foreground-muted mb-6">
          A model can pass every major benchmark and still:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {[
            { dim: "Harm Recognition", desc: "Responding with advice before recognizing distress" },
            { dim: "Response Safety", desc: "Catastrophizing, shame framing, unnecessary risk exposure" },
            { dim: "Behavioral Restraint", desc: "Directive, coercive language disguised as help" },
            { dim: "Repair Capacity", desc: "Causing rupture and continuing as if nothing happened" },
            { dim: "Validation Quality", desc: "Revisiting sensitive areas the user moved away from" },
          ].map((item) => (
            <div key={item.dim} className="card-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-lilac mb-1">Fail: {item.dim}</p>
              <p className="text-sm text-foreground-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground-muted">These are not edge cases. I measured them.</p>
        <div className="grid grid-cols-2 gap-3 my-6 max-w-md">
          <div className="card-surface p-4">
            <p className="font-display text-3xl text-danger">54.7%</p>
            <p className="text-xs text-foreground-muted">of baseline AI responses introduced emotional risk</p>
          </div>
          <div className="card-surface p-4">
            <p className="font-display text-3xl text-danger">43%</p>
            <p className="text-xs text-foreground-muted">of harmful responses showed zero repair behavior</p>
          </div>
        </div>
        <p className="text-foreground-muted">
          These weren't fringe systems. They were frontier models — already deployed in mental health tools,
          healthcare navigation, and crisis support systems.
        </p>

        {/* ── Where It Comes From ── */}
        <h2 id="where-it-comes-from" className="font-display fluid-heading text-foreground mt-12 mb-4">Where the benchmark comes from</h2>
        <p className="text-foreground lede" style={{ maxWidth: '58ch' }}>
          The eight dimensions were not invented. They were derived.
        </p>
        <p className="text-foreground-muted mb-6">
          Derived from professional disciplines that have spent decades studying what makes human interaction safe, harmful,
          healing, or damaging — disciplines whose standards are taught in graduate programs, licensed in professional practice,
          and validated through decades of clinical research.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {[
            { field: "Trauma-informed care", source: "SAMHSA framework", note: "Standards for non-retraumatizing interaction" },
            { field: "Motivational interviewing", source: "Miller & Rollnick", note: "Standards for non-coercive, autonomy-preserving language" },
            { field: "Crisis intervention theory", source: "Roberts, CPI", note: "Protocols for proportionate escalation and de-escalation" },
            { field: "Attachment theory", source: "Bowlby, relational therapy", note: "Framework for rupture and repair in helping relationships" },
            { field: "CBT / DBT", source: "Beck, Linehan", note: "Validation as a measurable clinical skill; distress tolerance" },
            { field: "Social psychology", source: "Cialdini, Milgram", note: "Power dynamics in helping relationships and AI influence leverage" },
          ].map((item) => (
            <div key={item.field} className="card-surface p-4">
              <p className="font-display text-sm text-foreground font-medium mb-1">{item.field}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-lilac mb-1">{item.source}</p>
              <p className="text-xs text-foreground-muted">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground-muted">
          These fields didn't need me to invent the criteria. The work was synthesis: identify the behavioral markers
          each discipline had already validated, build an evaluation infrastructure that makes those markers measurable
          in AI output, and run that framework against real AI responses at scale.
        </p>

        <h3 className="font-display text-lg text-foreground mt-8 mb-3">Why this didn't exist before</h3>
        <p className="text-foreground-muted">
          <strong className="text-foreground">The technical frame:</strong> AI safety has focused on "what can the model be made to do?"
          — not "what is the model doing to people?"
        </p>
        <p className="text-foreground-muted">
          <strong className="text-foreground">The experiential gap:</strong> You don't see behavioral harm unless you recognize it.
          That comes from proximity — crisis, community, emotionally complex environments. I didn't come through a lab or a PhD
          program. I came through lived exposure to what happens when systems respond wrong in real moments. That's not a sympathy
          angle. That's why I saw the gap.
        </p>

        {/* ── Research Findings ── */}
        <h2 id="research-findings" className="font-display fluid-heading text-foreground mt-12 mb-4">What the research actually found</h2>
        <p className="text-foreground-muted mb-6">
          948 AI responses. 79 emotionally sensitive scenarios — grief, crisis, relationships, financial stress, medical anxiety,
          identity. Scored against the disciplinary rubric.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { pct: "61%", label: "Harm Recognition failure", desc: "The model processed content, not the person.", color: "hsl(var(--coral))" },
            { pct: "47%", label: "Behavioral Restraint failure", desc: "Over-directive, coercive 'helpfulness.'", color: "hsl(var(--coral))" },
            { pct: "38%", label: "Escalation Calibration failure", desc: "Under-reacting or over-escalating.", color: "hsl(var(--gold))" },
            { pct: "43%", label: "Zero Repair Capacity", desc: "The model caused harm — and kept going.", color: "hsl(var(--coral))" },
          ].map((item) => (
            <div key={item.pct} className="card-surface p-4">
              <p className="font-display text-2xl mb-1" style={{ color: item.color }}>{item.pct}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-subtle mb-1">{item.label}</p>
              <p className="text-xs text-foreground-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="card-surface p-5 mb-6 border-l-2 border-lilac">
          <p className="text-sm text-foreground-muted">
            <strong className="text-foreground">Comparative result:</strong> Frontier baseline: 20.5–59% safety pass rate.
            Ikwe prototype: <strong className="text-lilac">84.6%</strong>. That is not incremental. That is a structural gap.
          </p>
        </div>

        {/* ── Infrastructure ── */}
        <h3 className="font-display text-lg text-foreground mt-8 mb-3">This is infrastructure — not opinion</h3>
        <p className="text-foreground-muted">
          Behavioral safety for AI should be evaluated the same way we evaluate human helping systems. Those standards already
          exist. What didn't exist — until now — was a measurable framework, a repeatable system, and a certification model.
          The EQ Safety Benchmark is that system.
        </p>

        {/* ── What Safe AI Requires ── */}
        <h2 id="what-safe-ai-requires" className="font-display fluid-heading text-foreground mt-12 mb-4">What emotionally safe AI actually requires</h2>
        <p className="text-foreground-muted mb-6">
          Not warmth. Not tone. Not "friendly UX." Behavior. Emotionally safe AI requires:
        </p>
        <div className="space-y-3 mb-6 max-w-2xl">
          {[
            { name: "Harm Recognition", desc: "See the human before solving the problem.", color: "hsl(var(--lilac))" },
            { name: "Response Safety", desc: "Do not introduce new distress.", color: "hsl(var(--coral))" },
            { name: "Repair Capacity", desc: "Detect and correct rupture.", color: "hsl(var(--gold))" },
            { name: "Behavioral Restraint", desc: "Do not override agency.", color: "hsl(var(--safe))" },
            { name: "Contextual Adaptation", desc: "Respond to this person — not a template.", color: "hsl(var(--lilac))" },
          ].map((item) => (
            <div key={item.name} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <p className="text-sm text-foreground-muted">
                <strong className="text-foreground">{item.name}</strong> — {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-foreground-muted">
          These are not features. They are standards. And standards require measurement.
        </p>

        {/* ── Closing ── */}
        <h2 className="font-display fluid-heading text-foreground mt-12 mb-4">The work behind this is real</h2>
        <p className="text-foreground-muted">
          This was not a thought exercise. It was a year of clinical research, scoring and re-scoring, rubric iteration,
          and system building. The dimensions are not guesses. The disciplines are not aesthetic. The findings are not simulated.
        </p>
        <p className="text-foreground-muted">
          This framework is built, tested, running — and ready to be validated at institutional scale.
        </p>
        <p className="text-foreground mt-6" style={{ maxWidth: '48ch' }}>
          This is documented. This is grounded. This is measurable. And the field needs it.
        </p>

        {/* ── CTA ── */}
        <div className="card-surface p-6 mt-8 mb-8">
          <p className="text-sm text-foreground-muted mb-4">
            Public benchmark scores for evaluated AI systems are at <a href="/benchmark" className="link-lilac">ikwe.ai/benchmark</a>.
            If you work at an AI company and want to know where your system stands — or if you're a researcher or academic partner
            interested in the methodology — <a href="/get-started" className="link-lilac">reach out</a>.
          </p>
          <p className="text-xs text-foreground-subtle">
            Stephanie Stranko is the Founder &amp; CEO of Ikwe.ai (Visible Healing Inc.), a behavioral safety infrastructure
            company for AI systems based in Des Moines, Iowa.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
