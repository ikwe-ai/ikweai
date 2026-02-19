interface StatCardProps {
  value: string;
  label: string;
  sub?: string;
  delay?: number;
}

export default function StatCard({ value, label, sub, delay = 0 }: StatCardProps) {
  return (
    <div
      className="stat-block rounded p-5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="font-mono text-2xl text-lilac font-bold leading-none mb-1">{value}</p>
      <p className="text-sm text-foreground leading-snug">{label}</p>
      {sub && <p className="text-xs text-foreground-subtle mt-1">{sub}</p>}
    </div>
  );
}
