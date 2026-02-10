import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyChart({ data, selectedMonths }) {

    const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#f59e0b"];


  return (
    <div className="bg-white p-4 rounded shadow h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="partner" />
          <YAxis />
          <Tooltip />

          {selectedMonths.map((month, index) => (
            <Line
              key={month}
              type="monotone"
              dataKey={month}
              strokeWidth={2}
              stroke={COLORS[index % COLORS.length]}
            />
          ))}

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
