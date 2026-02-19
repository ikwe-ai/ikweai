interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto max-w-5xl px-6">
        {children}
      </div>
    </main>
  );
}
