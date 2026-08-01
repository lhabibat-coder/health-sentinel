import { Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", claims: 120 },
  { day: "Tue", claims: 145 },
  { day: "Wed", claims: 132 },
  { day: "Thu", claims: 168 },
  { day: "Fri", claims: 214 },
];

export default function TrendChart() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} aria-label="Claims trend chart">
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Line type="monotone" dataKey="claims" stroke="#3B82F6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}