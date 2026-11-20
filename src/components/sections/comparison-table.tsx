type ComparisonRow = {
  pocket: string;
  housingMix: string;
  beltway: string;
  recreation: string;
  typicalBuyerFocus: string;
};

type ComparisonTableProps = {
  caption: string;
  rows: readonly ComparisonRow[];
};

/** HTML table for AEO/GEO citation — keep facts textual, not image-only. */
export function ComparisonTable({ caption, rows }: ComparisonTableProps) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm text-stone-700">
        <caption className="border-b border-stone-200 bg-stone-50 px-4 py-3 text-left text-sm font-medium text-stone-900">
          {caption}
        </caption>
        <thead className="bg-stone-50 text-xs font-semibold uppercase tracking-wide text-stone-600">
          <tr>
            <th scope="col" className="px-4 py-3">
              Pocket
            </th>
            <th scope="col" className="px-4 py-3">
              Housing mix
            </th>
            <th scope="col" className="px-4 py-3">
              Beltway access
            </th>
            <th scope="col" className="px-4 py-3">
              Recreation
            </th>
            <th scope="col" className="px-4 py-3">
              Buyer focus
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.pocket} className="border-t border-stone-100 align-top">
              <th scope="row" className="px-4 py-3 font-semibold text-stone-900">
                {row.pocket}
              </th>
              <td className="px-4 py-3">{row.housingMix}</td>
              <td className="px-4 py-3">{row.beltway}</td>
              <td className="px-4 py-3">{row.recreation}</td>
              <td className="px-4 py-3">{row.typicalBuyerFocus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
