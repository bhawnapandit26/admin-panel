import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyChart({ data, selectedMonths }) {
  return (
    <div className="bg-white p-4 rounded shadow h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="partner" />
          <YAxis />
          <Tooltip />

          {selectedMonths.map(month => (
            <Line
              key={month}
              type="monotone"
              dataKey={month}
              strokeWidth={2}
            />
          ))}

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
