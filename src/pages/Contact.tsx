import { useState } from "react";
import PageShell from "@/components/PageShell";
import { CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "done";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const subjects = [
    "Research inquiry",
    "Artifact request",
    "Press / media",
    "Partnership or collaboration",
    "Application to evaluate",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => setState("done"), 1200);
  };

  return (
    <PageShell>
      {/* Header */}
      <section className="pt-14 pb-12 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Intake</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight max-w-2xl">
          Contact / Apply
        </h1>
        <p className="text-base text-foreground-muted max-w-xl leading-relaxed">
          One intake form for all inquiries — research, press, partnerships, and evaluation applications.
        </p>
      </section>

      {/* Form */}
      <section className="py-14">
        {state === "done" ? (
          <div className="flex flex-col items-start gap-4 max-w-lg">
            <CheckCircle2 size={32} className="text-lilac" />
            <h2 className="font-display text-2xl text-foreground">Message received</h2>
            <p className="text-sm text-foreground-muted leading-relaxed">
              We review all inquiries and respond selectively. If your message warrants a reply, 
              you'll hear from us within 5 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">Inquiry Form</p>

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
              <label className="block text-xs text-foreground-muted mb-1.5">Subject *</label>
              <select
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="field"
              >
                <option value="">Select subject…</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Message *</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your inquiry…"
                className="field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="rounded bg-lilac px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors disabled:opacity-50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {state === "submitting" ? "Sending…" : "Send Message"}
            </button>

            <p className="text-xs text-foreground-subtle">
              We respond selectively. Press inquiries: please include publication name and deadline.
            </p>
          </form>
        )}
      </section>
    </PageShell>
  );
}
