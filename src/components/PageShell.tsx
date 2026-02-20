interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="page-canvas min-h-screen pt-16">
      <div className="container mx-auto max-w-6xl px-6 relative">
        {children}
      </div>
    </main>
  );
}
