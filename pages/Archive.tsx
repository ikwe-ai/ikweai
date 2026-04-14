import PageMeta from "@/components/PageMeta";
import PageShell from "@/components/PageShell";

const archivedPages = [
  { label: "Architecture", href: "/archive/architecture" },
  { label: "Consultation", href: "/archive/consult" },
  { label: "IP Notice", href: "/archive/ip-notice" },
] as const;

export default function Archive() {
  return (
    <PageShell>
      <PageMeta
        title="Archive | Ikwe.ai"
        description="Archived pages retained for reference while current live pages focus on core audit, deliverables, and research pathways."
        path="/archive"
        noIndex
      />

      <section className="py-14 border-b border-border">
        <p className="font-mono text-xs text-lilac uppercase tracking-widest mb-4">Archive</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Archived reference pages</h1>
        <p className="text-lg text-foreground-muted leading-relaxed max-w-4xl">
          These pages are retained for reference while the live site is focused on Homepage, Benchmark, Research,
          Deliverables, and Audit pathways.
        </p>
      </section>

      <section className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
          {archivedPages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="card-surface p-5 text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {page.label} →
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
