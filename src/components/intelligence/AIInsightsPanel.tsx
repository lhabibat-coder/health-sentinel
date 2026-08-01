import { Card, CardContent, Chip, Stack, Typography, Divider } from "@mui/material";

import { useIntelligence } from "../../context/IntelligenceContext";

export default function AIInsightsPanel() {
  const { alerts, filteredAlerts, threatLevel } = useIntelligence();

  const highPriorityCount = alerts.filter((alert) => alert.severity === "HIGH").length;
  const activeCount = filteredAlerts.length;

  return (
    <Card
      sx={{
        mb: 3,
        bgcolor: "#111827",
        border: "1px solid #334155",
        borderRadius: 3,
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardContent>
        <Stack direction="row" sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" color="white">
            AI summary panel
          </Typography>
          <Chip label="Live synthesis" color="primary" size="small" />
        </Stack>

        <Typography color="text.secondary" sx={{ mb: 2 }}>
          The current signal set indicates elevated attention around counterfeit products, food safety concerns, and regional misinformation clusters.
        </Typography>

        <Divider sx={{ my: 2, borderColor: "#334155" }} />

        <Stack spacing={1.5}>
          <Typography color="#E2E8F0">
            • Threat posture: <strong>{threatLevel}</strong>
          </Typography>
          <Typography color="#E2E8F0">
            • High-priority alerts: <strong>{highPriorityCount}</strong>
          </Typography>
          <Typography color="#E2E8F0">
            • Active analysts view: <strong>{activeCount}</strong> records surfaced
          </Typography>
          <Typography color="#E2E8F0">
            • Priority recommendation: deploy rapid response communications to Kano and Kaduna within 24 hours.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
