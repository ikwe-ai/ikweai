type DimensionRow = {
  name: string;
  definition: string;
  measured: string;
  scenarios: string;
};

type DimensionTableProps = {
  rows: DimensionRow[];
};

export default function DimensionTable({ rows }: DimensionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="enterprise-table min-w-[860px]">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Definition</th>
            <th>What Is Measured</th>
            <th>Scenario Types</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="font-medium text-foreground">{row.name}</td>
              <td>{row.definition}</td>
              <td>{row.measured}</td>
              <td>{row.scenarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
