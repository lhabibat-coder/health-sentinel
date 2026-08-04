import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", claims: 120, alerts: 8, narratives: 5 },
  { day: "Tue", claims: 145, alerts: 10, narratives: 6 },
  { day: "Wed", claims: 132, alerts: 9, narratives: 7 },
  { day: "Thu", claims: 168, alerts: 12, narratives: 8 },
  { day: "Fri", claims: 214, alerts: 14, narratives: 10 },
  { day: "Sat", claims: 198, alerts: 13, narratives: 9 },
  { day: "Sun", claims: 236, alerts: 17, narratives: 12 },
];

export default function NationalTrend() {
  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "#1E293B",
        border: "1px solid #334155",
        borderRadius: "20px",
        boxShadow: "0 16px 40px rgba(2, 6, 23, 0.28)",
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mb: 2.5, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" } }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#F8FAFC", fontWeight: 700 }}>
              National Threat Trend
            </Typography>
            <Typography variant="body2" sx={{ color: "#94A3B8", mt: 0.5 }}>
              Public health intelligence over the last seven days.
            </Typography>
          </Box>

          <Chip
            label="7-Day View"
            size="small"
            sx={{
              bgcolor: "#3B82F6",
              color: "#F8FAFC",
              fontWeight: 700,
              borderRadius: "999px",
            }}
          />
        </Stack>

        <Box sx={{ height: { xs: 280, md: 320 }, width: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} aria-label="National threat trend chart">
              <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" stroke="#94A3B8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94A3B8" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Line
                type="monotone"
                dataKey="claims"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 3, fill: "#3B82F6" }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="alerts"
                stroke="#F59E0B"
                strokeWidth={3}
                dot={{ r: 3, fill: "#F59E0B" }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="narratives"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 3, fill: "#10B981" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
