import { Box, Chip, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { BarChart, Bar, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { analyticsData } from "../../data/analyticsData";
import AnalyticsSectionCard from "./AnalyticsSectionCard";

const COLORS = ["#22C55E", "#F59E0B", "#EF4444", "#3B82F6"];

export default function ExecutiveAnalyticsGrid() {
  const sourceData = [
    { name: "Social Listening", value: 42 },
    { name: "Field Reports", value: 28 },
    { name: "Community Reports", value: 19 },
    { name: "Regulatory", value: 11 },
  ];
  const severityData = [
    { name: "High", value: 11 },
    { name: "Medium", value: 5 },
    { name: "Low", value: 2 },
  ];
  const topicData = [
    { name: "Cosmetics", value: 36 },
    { name: "Food", value: 24 },
    { name: "Children", value: 18 },
    { name: "Misinformation", value: 22 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <AnalyticsSectionCard title="Sentiment trend" subtitle="Changing public sentiment across the last week">
          <Box sx={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData.trend}>
                <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </AnalyticsSectionCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <AnalyticsSectionCard title="Topic distribution" subtitle="Most prominent misinformation themes">
          <Box sx={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topicData}>
                <CartesianGrid stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </AnalyticsSectionCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <AnalyticsSectionCard title="Source distribution" subtitle="Where signals are being observed">
          <Box sx={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourceData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={2}>
                  {sourceData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </AnalyticsSectionCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <AnalyticsSectionCard title="Geographic analysis" subtitle="Highest-risk states and their impact">
          <Stack spacing={2}>
            {analyticsData.topStates.map((state) => (
              <Box key={state.state} sx={{ bgcolor: "#1F2937", borderRadius: 2, p: 2 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography color="white" sx={{ fontWeight: 600 }}>{state.state}</Typography>
                  <Chip label={`${state.score} score`} color="warning" size="small" />
                </Stack>
                <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
                  Elevated attention and sustained narrative spread.
                </Typography>
              </Box>
            ))}
          </Stack>
        </AnalyticsSectionCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <AnalyticsSectionCard title="Time trend" subtitle="Measures across the reporting window">
          <Box sx={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData.trend}>
                <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </AnalyticsSectionCard>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <AnalyticsSectionCard title="Severity trend" subtitle="Current severity mix across active reports">
          <Box sx={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={severityData}>
                <CartesianGrid stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Bar dataKey="value" fill="#EF4444" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </AnalyticsSectionCard>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <AnalyticsSectionCard title="Executive narrative overview" subtitle="Key themes shaping the current reporting cycle">
          <List dense>
            {analyticsData.narratives.map((item) => (
              <ListItem key={item} sx={{ px: 0 }}>
                <ListItemText primary={item} secondary="Priority narrative with sustained public attention" />
              </ListItem>
            ))}
          </List>
        </AnalyticsSectionCard>
      </Grid>
    </Grid>
  );
}
