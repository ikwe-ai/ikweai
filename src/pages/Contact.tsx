import { useState } from "react";
import PageShell from "@/components/PageShell";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

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
        title="Consultation Intake | Ikwe.ai"
        description="Share your system context and request an independent consultation for behavioral safety evaluation."
        path="/contact"
      />
      <SummaryHero
        kicker="Consultation"
        title="Consultation Intake"
        summary="Tell us what you are building, where it is deployed, and what you need reviewed. We respond selectively with scope and next steps."
        highlights={[
          "Independent review posture",
          "Governance-ready documentation",
          "High-trust deployment focus",
        ]}
        primaryAction={{ href: "#application-form", label: "Open Intake Form ↓" }}
        secondaryAction={{ href: "/consult", label: "Open Consult Experience" }}
      />

      <section className="py-14">
        {state === "done" ? (
          <div className="card-surface p-8 max-w-2xl">
            <div className="flex items-start gap-4">
              <CheckCircle2 size={32} className="text-lilac mt-1" />
              <div>
                <h2 className="font-display text-2xl text-foreground mb-2">Request received</h2>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Thank you. We review submissions selectively and respond within 5 business days when there is a fit.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-start">
            <div className="space-y-6">
              <article className="card-surface p-6">
                <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">What To Include</p>
                <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                  <li>— System purpose, model type, and deployment surface</li>
                  <li>— Domain context and risk sensitivity</li>
                  <li>— What decision you need to make next</li>
                </ul>
              </article>

              <article className="card-surface p-6">
                <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Typical Next Steps</p>
                <ol className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                  <li>1. Consultation review and fit check</li>
                  <li>2. Scope recommendation and timeline options</li>
                  <li>3. Audit pathway and reporting plan</li>
                </ol>
              </article>

              <article className="card-surface p-6">
                <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-3">Prefer Guided Intake?</p>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  Use the interactive consultation flow if you want a guided path instead of a standard form.
                </p>
                <a href="/consult" className="text-sm link-lilac">
                  Open consult flow →
                </a>
              </article>
            </div>

            <form
              id="application-form"
              onSubmit={handleSubmit}
              name="evaluation-application"
              data-netlify="true"
              className="card-surface p-6 space-y-5 lg:sticky lg:top-24"
            >
              <input type="hidden" name="form-name" value="evaluation-application" />
              <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">Intake Form</p>

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
                <label className="block text-xs text-foreground-muted mb-1.5">System Description *</label>
                <textarea
                  required
                  name="system_description"
                  value={form.system_description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe the system, model(s), and where it is deployed."
                  className="field resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">What Do You Need? *</label>
                <textarea
                  required
                  name="what_they_need"
                  value={form.what_they_need}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What decision are you trying to make or de-risk?"
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full rounded bg-lilac px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors disabled:opacity-50"
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
                Requests are reviewed selectively. We work with a limited number of organizations at a time.
              </p>
            </form>
          </div>
        )}
      </section>
    </PageShell>
  );
}
