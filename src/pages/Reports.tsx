import { useState } from "react";
import PageShell from "@/components/PageShell";
import { Lock, CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";

type FormState = "idle" | "submitting" | "done" | "error";

export default function Reports() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    artifact: "",
    use_case: "",
    notes: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const artifacts = [
    { label: "Public Preview", file: "ikwe_public_preview.pdf", desc: "Overview of Study I findings — suitable for general distribution" },
    { label: "Board Brief", file: "ikwe_board_brief.pdf", desc: "Executive summary for board-level governance review" },
    { label: "Audit Report", file: "ikwe_audit_report.pdf", desc: "Detailed behavioral safety findings with scenario-level analysis" },
    { label: "Scorecard Sample", file: "ikwe_scorecard_sample.pdf", desc: "Sample of the 8-dimension scoring instrument (A–H weighted)" },
    { label: "Full Research Report", file: "ikwe_full_research_report.pdf", desc: "Complete Study I report — n=948, 79 scenarios, full methodology" },
    { label: "Behavioral Governance Briefing", file: "ikwe_behavioral_governance_executive_briefing_2026.pdf", desc: "2026 executive briefing on AI behavioral governance frameworks" },
    { label: "Report Sample", file: "ikwe_report_sample.pdf", desc: "Sample evaluation report structure and format" },
    { label: "Action Plan Sample", file: "ikwe_action_plan_sample.pdf", desc: "Sample remediation and action plan template" },
    { label: "Citation Guide", file: "04_Ikwe_Citation_Guide.pdf", desc: "Approved citation formats and research access terms" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const body = new URLSearchParams({
        "form-name": "artifact-request",
        ...form,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <PageShell>
      <PageMeta
        title="Reports & Artifacts | Ikwe.ai"
        description="Request versioned benchmark artifacts, board briefs, and report samples for governance review."
        path="/reports"
      />
      {/* Header */}
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Artifact Distribution</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight max-w-2xl">
          Request Artifacts
        </h1>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          All artifacts are distributed as version-controlled releases. Submit a request and we'll
          send the current versioned file to you directly. Requests are reviewed individually.
        </p>
      </section>

      {/* Policy callout */}
      <section className="py-10 border-b border-border">
        <div className="gated-callout rounded p-5 flex gap-4 max-w-2xl">
          <Lock size={16} className="text-lilac mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Distribution Policy</p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              "Samples and PDFs are distributed as version-controlled releases to ensure accuracy. 
              Request the current sample pack."
            </p>
            <p className="text-xs text-foreground-subtle mt-2">
              Every artifact includes: version number · changelog · canonical stat block.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14">
        {state === "done" ? (
          <div className="flex flex-col items-start gap-4 max-w-lg">
            <CheckCircle2 size={32} className="text-lilac" />
            <h2 className="font-display text-2xl text-foreground">Request received</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              We'll review your request and send the current versioned release to the email provided. 
              Typical turnaround is 1–3 business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="artifact-request"
            data-netlify="true"
            className="space-y-6 max-w-lg"
          >
            <input type="hidden" name="form-name" value="artifact-request" />
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">Request Form</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Full Name *</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="field"
                />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@org.com"
                  className="field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Organization</label>
                <input
                  name="org"
                  value={form.org}
                  onChange={handleChange}
                  placeholder="Institution / Company"
                  className="field"
                />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Role</label>
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="Researcher / Policy / Other"
                  className="field"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Artifact Requested *</label>
              <select
                required
                name="artifact"
                value={form.artifact}
                onChange={handleChange}
                className="field"
              >
                <option value="">Select artifact…</option>
                {artifacts.map((a) => (
                  <option key={a.file} value={a.file}>{a.label}</option>
                ))}
              </select>
              {form.artifact && (
                <p className="mt-2 text-xs text-foreground-subtle">
                  {artifacts.find((a) => a.file === form.artifact)?.desc}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Use Case *</label>
              <textarea
                required
                name="use_case"
                value={form.use_case}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe your intended use of this artifact…"
                className="field resize-none"
              />
            </div>

            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={2}
                placeholder="Anything else we should know…"
                className="field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="rounded bg-lilac px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors disabled:opacity-50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {state === "submitting" ? "Submitting…" : "Submit Request"}
            </button>

            {state === "error" && (
              <p className="text-xs text-red-500">
                Submission failed. Please try again or email us directly.
              </p>
            )}

            <p className="text-xs text-foreground-subtle">
              Requests are manually reviewed. Ikwe.ai reserves the right to decline distribution without explanation.
            </p>
          </form>
        )}
      </section>
    </PageShell>
  );
}
