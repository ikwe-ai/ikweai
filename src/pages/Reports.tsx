import { useState } from "react";
import PageShell from "@/components/PageShell";
import { Lock, CheckCircle2 } from "lucide-react";

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
    "Board Brief (PDF)",
    "Audit Report (PDF)",
    "Preview Sample Pack",
    "Citation Guide",
    "Scorecard Snapshot",
    "Full Artifact Bundle",
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
      {/* Header */}
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Artifact Distribution</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight max-w-2xl">
          Request Artifacts
        </h1>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          All PDFs and sample packs are distributed as version-controlled releases. 
          No direct downloads. Requests are reviewed and fulfilled manually.
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
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
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
