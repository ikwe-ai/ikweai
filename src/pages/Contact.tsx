import { useState } from "react";
import PageShell from "@/components/PageShell";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

type FormState = "idle" | "submitting" | "done" | "error";

type IntakeForm = {
  name: string;
  role_title: string;
  company: string;
  work_email: string;
  company_size: string;
  industry: string;
  region: string;
  deployment_type: string;
  user_facing: string;
  deployment_channel: string;
  system_prompts: string;
  rag: string;
  tools_actions: string;
  fine_tuning: string;
  deadline: string;
  signoff_other: string;
  sandbox_access: string;
  test_accounts: string;
  outputs_confidential: string;
  scenario_volume: string;
  engagement_model: string;
  system_and_concerns: string;
  red_lines: string;
};

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"] as const;
const industries = [
  "Financial Services",
  "Healthcare",
  "Government / Public Sector",
  "Legal",
  "Education",
  "Technology",
  "Retail / Consumer",
  "Other",
] as const;
const regions = [
  "United States",
  "Canada",
  "UK",
  "EU",
  "APAC",
  "LATAM",
  "Middle East / Africa",
  "Other",
] as const;
const deploymentTypes = [
  "AI assistant / copilot",
  "Customer support agent",
  "Clinical / health guidance assistant",
  "HR / workforce assistant",
  "Autonomous agent (tool-using)",
  "Other",
] as const;
const yesNoUnsure = ["Yes", "No", "Not sure"] as const;
const yesNo = ["Yes", "No"] as const;
const userPopulations = [
  "General consumers",
  "Patients",
  "Employees",
  "Students",
  "Vulnerable users (minors, mental health, crisis contexts)",
  "Other",
] as const;
const modelProviders = ["OpenAI", "Anthropic", "Google", "Meta / open-source", "Other"] as const;
const deploymentChannels = ["Web app", "Mobile", "Internal Slack/Teams", "API integration", "Other"] as const;
const drivers = [
  "Board request",
  "Customer procurement/security review",
  "Partner requirement (hospital, enterprise client, insurer)",
  "Compliance readiness (HIPAA / SOC2 / ISO / etc.)",
  "Incident/near-miss",
  "Pre-launch risk baseline",
] as const;
const signoffs = [
  "CEO/founder",
  "CTO",
  "Head of Compliance / Risk",
  "Legal",
  "Customer security/procurement",
  "Board",
  "Other",
] as const;
const scenarioVolumes = ["25 (pilot)", "50", "100+"] as const;
const engagementModels = ["Pilot only", "Pilot + re-test after remediation", "Ongoing monitoring"] as const;

const initialForm: IntakeForm = {
  name: "",
  role_title: "",
  company: "",
  work_email: "",
  company_size: "",
  industry: "",
  region: "",
  deployment_type: "",
  user_facing: "",
  deployment_channel: "",
  system_prompts: "",
  rag: "",
  tools_actions: "",
  fine_tuning: "",
  deadline: "",
  signoff_other: "",
  sandbox_access: "",
  test_accounts: "",
  outputs_confidential: "",
  scenario_volume: "",
  engagement_model: "",
  system_and_concerns: "",
  red_lines: "",
};

const SECTION_KICKER_CLASS = "font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle mb-3";

type MultiKey = "user_population" | "model_providers" | "drivers" | "signoffs";

export default function Contact() {
  const [form, setForm] = useState<IntakeForm>(initialForm);
  const [userPopulation, setUserPopulation] = useState<string[]>([]);
  const [modelProvider, setModelProvider] = useState<string[]>([]);
  const [driver, setDriver] = useState<string[]>([]);
  const [signoff, setSignoff] = useState<string[]>([]);
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleMulti = (key: MultiKey, value: string, checked: boolean) => {
    const updater = (values: string[]) => {
      if (checked) return values.includes(value) ? values : [...values, value];
      return values.filter((item) => item !== value);
    };

    if (key === "user_population") setUserPopulation((prev) => updater(prev));
    if (key === "model_providers") setModelProvider((prev) => updater(prev));
    if (key === "drivers") setDriver((prev) => updater(prev));
    if (key === "signoffs") setSignoff((prev) => updater(prev));
  };

  const multiToString = (values: string[]) => values.join("; ");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      const body = new URLSearchParams({
        "form-name": "evaluation-application",
        ...form,
        user_population: multiToString(userPopulation),
        model_providers: multiToString(modelProvider),
        drivers: multiToString(driver),
        signoffs: multiToString(signoff),
        submitted_at: new Date().toISOString(),
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
      setState("done");
    } catch {
      setState("error");
    }
  };

  const startGuidedIntake = () => {
    setForm((prev) => ({
      ...prev,
      user_facing: prev.user_facing || "Yes",
      deployment_type: prev.deployment_type || "AI assistant / copilot",
      scenario_volume: prev.scenario_volume || "25 (pilot)",
      engagement_model: prev.engagement_model || "Pilot + re-test after remediation",
      system_and_concerns:
        prev.system_and_concerns ||
        "User-facing conversational AI where we need an independent behavioral safety baseline before broader rollout.",
    }));

    if (!driver.length) {
      setDriver(["Pre-launch risk baseline", "Customer procurement/security review"]);
    }

    const node = document.getElementById("application-form");
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageShell>
      <PageMeta
        title="Request Independent Evaluation | Ikwe.ai"
        description="Request third-party independent behavioral safety evaluation. Share deployment and governance context to receive a scoped plan."
        path="/intake"
      />
      <SummaryHero
        kicker="Independent Evaluation Intake"
        title="Request Third-Party Independent Behavioral Safety Evaluation"
        summary="Tell us what you are deploying and what governance pressure you are facing. We will respond with a scoped independent evaluation plan and access checklist."
        highlights={[
          "Third-party independent review",
          "CTO and CFO scoping inputs",
          "Procurement-ready intake fields",
          "Response target: 1 business day",
        ]}
        primaryAction={{ href: "#application-form", label: "Open Intake Form ↓" }}
        secondaryAction={{ href: "/samples", label: "View Sample Deliverables" }}
        jumpLinks={[
          { href: "#intake-overview", label: "Intake Overview" },
          { href: "#application-form", label: "Form" },
          { href: "#next-steps", label: "What Happens Next" },
        ]}
      />

      <section id="intake-overview" className="py-14">
        {state === "done" ? (
          <div className="card-surface p-8 max-w-3xl">
            <div className="flex items-start gap-4">
              <CheckCircle2 size={32} className="text-lilac mt-1" />
              <div>
                <h2 className="font-display text-2xl text-foreground mb-2">Intake received</h2>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  Thanks. We will respond within 1 business day with next steps and a short scoping call link.
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  In the meantime, you can review the sample deliverables format:
                  <a href="/samples" className="link-lilac"> open samples</a>.
                </p>
                <a
                  href="/audit"
                  className="inline-flex items-center rounded border border-border px-4 py-2 text-sm text-foreground hover:border-foreground-muted transition-colors btn-outline"
                >
                  Review Audit &amp; Validation Pathway
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-start">
            <div className="space-y-4 order-2 xl:order-1">
              <article className="card-surface p-5">
                <p className={SECTION_KICKER_CLASS}>Quick intake tools</p>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  Use these shortcuts to move faster with internal stakeholders.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <a
                    href="/forms/ikwe-intake-form-fillable.pdf"
                    className="summary-jump"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download intake PDF
                  </a>
                  <a
                    href="/reports/ikwe-sample-excerpt-one-page.pdf"
                    className="summary-jump"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download sample excerpt
                  </a>
                </div>
                <button type="button" onClick={startGuidedIntake} className="text-sm link-lilac">
                  Apply guided defaults →
                </button>
                <p className="text-xs text-foreground-subtle mt-3">
                  This intake is designed to qualify scope quickly for technical, financial, legal, and procurement stakeholders.
                </p>

                <details className="progressive-details mt-4">
                  <summary aria-label="Toggle why we ask this" />
                  <div className="progressive-details-body">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle">Why we ask this</p>
                    <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                      <li>1. Confirm deployment type and user risk surface.</li>
                      <li>2. Size pilot scope and re-test needs accurately.</li>
                      <li>3. Pre-answer procurement and governance questions.</li>
                    </ul>
                  </div>
                </details>

                <details id="next-steps" className="progressive-details mt-3">
                  <summary aria-label="Toggle what happens next" />
                  <div className="progressive-details-body">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-subtle">What happens next</p>
                    <ol className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                      <li>1. Intake review and fit check</li>
                      <li>2. Scoped validation recommendation</li>
                      <li>3. Access checklist and kickoff path</li>
                    </ol>
                  </div>
                </details>
              </article>
            </div>

            <form
              id="application-form"
              onSubmit={handleSubmit}
              name="evaluation-application"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              method="POST"
              action="/"
              className="card-surface p-6 space-y-6 order-1 xl:order-2 lg:sticky lg:top-24"
            >
              <input type="hidden" name="form-name" value="evaluation-application" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="user_population" value={multiToString(userPopulation)} />
              <input type="hidden" name="model_providers" value={multiToString(modelProvider)} />
              <input type="hidden" name="drivers" value={multiToString(driver)} />
              <input type="hidden" name="signoffs" value={multiToString(signoff)} />
              <input type="hidden" name="submitted_at" value={new Date().toISOString()} />

              <div>
                <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest">
                  Independent Evaluation Intake
                </p>
                <p className="text-xs text-foreground-subtle mt-1">Fields marked * are required.</p>
              </div>

              <section>
                <p className={SECTION_KICKER_CLASS}>A. Contact + Organization</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Full name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} className="field" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Role / title *</label>
                    <input required name="role_title" value={form.role_title} onChange={handleChange} className="field" placeholder="CTO" />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Company *</label>
                    <input required name="company" value={form.company} onChange={handleChange} className="field" placeholder="Organization" />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Work email *</label>
                    <input required type="email" name="work_email" value={form.work_email} onChange={handleChange} className="field" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Company size *</label>
                    <select required name="company_size" value={form.company_size} onChange={handleChange} className="field">
                      <option value="">Select size…</option>
                      {companySizes.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Industry *</label>
                    <select required name="industry" value={form.industry} onChange={handleChange} className="field">
                      <option value="">Select industry…</option>
                      {industries.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-foreground-muted mb-1.5">Country / region *</label>
                    <select required name="region" value={form.region} onChange={handleChange} className="field">
                      <option value="">Select region…</option>
                      {regions.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
              </section>

              <section>
                <p className={SECTION_KICKER_CLASS}>B. Deployment Context</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-foreground-muted mb-1.5">What are you deploying? *</label>
                    <select required name="deployment_type" value={form.deployment_type} onChange={handleChange} className="field">
                      <option value="">Select deployment…</option>
                      {deploymentTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Is it user-facing? *</label>
                    <select required name="user_facing" value={form.user_facing} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNo.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Where is it deployed? *</label>
                    <select required name="deployment_channel" value={form.deployment_channel} onChange={handleChange} className="field">
                      <option value="">Select channel…</option>
                      {deploymentChannels.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
                <p className="text-xs text-foreground-muted mb-2">User population (select all that apply) *</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {userPopulations.map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <input
                        type="checkbox"
                        checked={userPopulation.includes(item)}
                        onChange={(e) => toggleMulti("user_population", item, e.target.checked)}
                        className="accent-lilac"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <p className={SECTION_KICKER_CLASS}>C. Model + Stack</p>
                <p className="text-xs text-foreground-muted mb-2">Model provider(s) *</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {modelProviders.map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <input
                        type="checkbox"
                        checked={modelProvider.includes(item)}
                        onChange={(e) => toggleMulti("model_providers", item, e.target.checked)}
                        className="accent-lilac"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">System prompts *</label>
                    <select required name="system_prompts" value={form.system_prompts} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNo.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">RAG / knowledge base *</label>
                    <select required name="rag" value={form.rag} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNo.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Tools/actions *</label>
                    <select required name="tools_actions" value={form.tools_actions} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNo.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Fine-tuning *</label>
                    <select required name="fine_tuning" value={form.fine_tuning} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNo.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
              </section>

              <section>
                <p className={SECTION_KICKER_CLASS}>D. Risk / Governance Pressure</p>
                <p className="text-xs text-foreground-muted mb-2">What is driving this evaluation? *</p>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {drivers.map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <input
                        type="checkbox"
                        checked={driver.includes(item)}
                        onChange={(e) => toggleMulti("drivers", item, e.target.checked)}
                        className="accent-lilac"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Any deadline?</label>
                    <input type="date" name="deadline" value={form.deadline} onChange={handleChange} className="field" />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Who must sign off? *</label>
                    <p className="text-[11px] text-foreground-subtle mb-2">Select below</p>
                    <div className="space-y-2 max-h-40 overflow-auto pr-1">
                      {signoffs.map((item) => (
                        <label key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                          <input
                            type="checkbox"
                            checked={signoff.includes(item)}
                            onChange={(e) => toggleMulti("signoffs", item, e.target.checked)}
                            className="accent-lilac"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                {signoff.includes("Other") ? (
                  <div className="mt-3">
                    <label className="block text-xs text-foreground-muted mb-1.5">Other sign-off stakeholder</label>
                    <input name="signoff_other" value={form.signoff_other} onChange={handleChange} className="field" />
                  </div>
                ) : null}
              </section>

              <section>
                <p className={SECTION_KICKER_CLASS}>E. Access Feasibility</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Sandbox/staging access *</label>
                    <select required name="sandbox_access" value={form.sandbox_access} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNoUnsure.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">2-3 test accounts *</label>
                    <select required name="test_accounts" value={form.test_accounts} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNoUnsure.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Outputs confidential? *</label>
                    <select required name="outputs_confidential" value={form.outputs_confidential} onChange={handleChange} className="field">
                      <option value="">Select…</option>
                      {yesNo.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
              </section>

              <section>
                <p className={SECTION_KICKER_CLASS}>F. Scope Signals</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Scenario volume desired *</label>
                    <select required name="scenario_volume" value={form.scenario_volume} onChange={handleChange} className="field">
                      <option value="">Select scope…</option>
                      {scenarioVolumes.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Engagement model *</label>
                    <select required name="engagement_model" value={form.engagement_model} onChange={handleChange} className="field">
                      <option value="">Select path…</option>
                      {engagementModels.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
              </section>

              <section>
                <p className={SECTION_KICKER_CLASS}>G. Open Text</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">Briefly describe your system and what concerns you most. *</label>
                    <textarea
                      required
                      name="system_and_concerns"
                      value={form.system_and_concerns}
                      onChange={handleChange}
                      rows={4}
                      className="field resize-none"
                      placeholder="System overview, risk concerns, and what decision this evaluation supports."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted mb-1.5">List any red-lines your organization must enforce. *</label>
                    <textarea
                      required
                      name="red_lines"
                      value={form.red_lines}
                      onChange={handleChange}
                      rows={3}
                      className="field resize-none"
                      placeholder="Examples: no crisis suppression, no dependency priming, no fabricated policy claims."
                    />
                  </div>
                </div>
              </section>

              <button
                type="submit"
                disabled={state === "submitting" || !userPopulation.length || !modelProvider.length || !driver.length || !signoff.length}
                className="w-full rounded bg-lilac px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-lilac-glow transition-colors disabled:opacity-50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {state === "submitting" ? "Submitting..." : "Submit Evaluation Request"}
              </button>

              {!userPopulation.length || !modelProvider.length || !driver.length || !signoff.length ? (
                <p className="text-xs text-foreground-subtle">
                  Complete all multi-select checkboxes in Sections B, C, D, and sign-off stakeholders before submitting.
                </p>
              ) : null}

              {state === "error" ? (
                <div className="space-y-2">
                  <p className="text-xs text-red-500">Submission failed. Please retry, or email us directly.</p>
                  <a href="mailto:research@ikwe.ai" className="text-xs link-lilac">
                    Email research@ikwe.ai →
                  </a>
                </div>
              ) : null}

              <p className="text-xs text-foreground-subtle leading-relaxed">
                Submission confirmation appears immediately. Intake details are handled as confidential scoping information.
              </p>
            </form>
          </div>
        )}
      </section>
    </PageShell>
  );
}
