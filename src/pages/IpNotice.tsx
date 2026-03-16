import PageShell from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import SummaryHero from "@/components/SummaryHero";

export default function IpNotice() {
  return (
    <PageShell>
      <PageMeta
        title="IP Notice | Ikwe.ai"
        description="Intellectual property notice for Ikwe.ai names, content, and permitted use."
        path="/ip-notice"
      />

      <SummaryHero
        kicker="Legal Notice"
        title="Intellectual Property Notice"
        summary="This page defines ownership and permitted use of Ikwe.ai names, benchmark materials, and public publications."
        highlights={[
          "Ownership statement",
          "Permitted use and citation",
          "License and restriction terms",
        ]}
        primaryAction={{ href: "#ownership", label: "View IP Terms ↓" }}
        secondaryAction={{ href: "/get-started", label: "Request Evaluation" }}
        jumpLinks={[
          { href: "#ownership", label: "Ownership" },
          { href: "#permitted-use", label: "Permitted Use" },
          { href: "#restricted-use", label: "Restricted Use" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      <section id="ownership" className="py-14 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Ownership</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          Ikwe.ai is operated by Visible Healing Inc. All site content, benchmark materials, report formats, and
          release documentation are owned by Visible Healing Inc. unless otherwise stated.
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Ikwe.ai, EQ Safety Benchmark, and Ikwe Certified are proprietary names of Visible Healing Inc.
        </p>
      </section>

      <section id="permitted-use" className="py-14 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Permitted Use</p>
        <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
          <li>• You may reference and cite published public pages with attribution to Ikwe.ai.</li>
          <li>• You may share links to public benchmark pages and public writing pages.</li>
          <li>• You may quote short excerpts for commentary with source attribution and a direct link.</li>
        </ul>
      </section>

      <section id="restricted-use" className="py-14 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-6">Restricted Use</p>
        <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
          <li>• No reproduction, redistribution, or derivative implementation of benchmark materials without written permission.</li>
          <li>• No use of Ikwe.ai names or marks in a way that implies partnership, endorsement, or certification without authorization.</li>
          <li>• No repackaging or resale of reports, scorecards, or methodology documentation.</li>
        </ul>
      </section>

      <section id="contact" className="py-14 max-w-3xl">
        <p className="font-mono text-xs text-foreground-subtle uppercase tracking-widest mb-4">Permission Requests</p>
        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
          For licensing, republication, or brand/name usage requests, contact:
        </p>
        <a href="mailto:research@ikwe.ai" className="text-sm link-lilac">
          research@ikwe.ai
        </a>
      </section>
    </PageShell>
  );
}
