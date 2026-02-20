import { useState } from "react";
import PageShell from "@/components/PageShell";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";

type FormState = "idle" | "submitting" | "done" | "error";

const domains = [
  "Healthcare",
  "Human Resources",
  "Finance",
  "Legal",
  "Education",
  "Government / Public Sector",
  "Other",
];

const timelines = [
  "Immediately (within 2 weeks)",
  "1–3 months",
  "3–6 months",
  "Exploratory — no fixed timeline",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    system_description: "",
    domain: "",
    what_they_need: "",
    timeline: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const body = new URLSearchParams({
        "form-name": "evaluation-application",
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
        title="Apply for Evaluation | Ikwe.ai"
        description="Submit your AI system for independent behavioral safety risk evaluation in high-trust domains."
        path="/contact"
      />
      {/* Header */}
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Intake</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight max-w-2xl">
          Apply for Evaluation
        </h1>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          Submit your system for consideration. We evaluate AI deployments in high-trust environments — 
          healthcare, HR, finance, legal, and adjacent domains.
        </p>
      </section>

      {/* Form */}
      <section className="py-14">
        {state === "done" ? (
          <div className="flex flex-col items-start gap-4 max-w-lg">
            <CheckCircle2 size={32} className="text-lilac" />
            <h2 className="font-display text-2xl text-foreground">Application received</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              We review all applications and respond selectively. If your system is a strong candidate, 
              you'll hear from us within 5 business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="evaluation-application"
            data-netlify="true"
            className="space-y-6 max-w-lg"
          >
            <input type="hidden" name="form-name" value="evaluation-application" />
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">Evaluation Application</p>

            {/* Name + Email */}
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

            {/* Organization */}
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

            {/* System Description */}
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">System Description *</label>
              <textarea
                required
                name="system_description"
                value={form.system_description}
                onChange={handleChange}
                rows={3}
                placeholder="Describe the AI system you want evaluated — what it does, the model(s) used, and how it is deployed."
                className="field resize-none"
              />
            </div>

            {/* Domain */}
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Deployment Domain *</label>
              <select
                required
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className="field"
              >
                <option value="">Select domain…</option>
                {domains.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* What they need */}
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">What Do You Need? *</label>
              <textarea
                required
                name="what_they_need"
                value={form.what_they_need}
                onChange={handleChange}
                rows={3}
                placeholder="What are you hoping to learn or validate? E.g. pre-deployment safety audit, benchmark comparison, incident review…"
                className="field resize-none"
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Timeline</label>
              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="field"
              >
                <option value="">Select timeline…</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="rounded bg-lilac px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors disabled:opacity-50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {state === "submitting" ? "Submitting…" : "Apply for Evaluation"}
            </button>

            {state === "error" && (
              <p className="text-xs text-red-500">
                Submission failed. Please try again or email us directly.
              </p>
            )}

            <p className="text-xs text-foreground-subtle">
              Applications are reviewed selectively. We work with a small number of clients at any given time.
            </p>
          </form>
        )}
      </section>
    </PageShell>
  );
}
