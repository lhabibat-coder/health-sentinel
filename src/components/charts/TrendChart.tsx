import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", claims: 120 },
  { day: "Tue", claims: 145 },
  { day: "Wed", claims: 132 },
  { day: "Thu", claims: 168 },
  { day: "Fri", claims: 214 },
];

export default function TrendChart() {
  return (
    <div
      style={{
        background: "#1E293B",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "12px",
        height: "350px",
      }}
    >
      <h2
  style={{
    color: "white",
    marginBottom: "20px",
    textAlign: "center",
  }}
>
  📈 Claims Trend
</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="claims"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}