interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="page-canvas min-h-screen pt-16">
      <div aria-hidden="true" className="page-canvas-glow" />
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="page-frame">{children}</div>
      </div>
    </main>
  );
}
