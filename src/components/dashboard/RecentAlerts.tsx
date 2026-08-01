import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useIntelligence } from "../../context/IntelligenceContext";

export default function RecentAlerts() {
  const { alerts } = useIntelligence();
  const recentAlerts = alerts.slice(0, 3);

  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "#111827",
        border: "1px solid #334155",
        borderRadius: 3,
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardContent>
        <Stack direction="row" sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" color="white">
            Recent alerts
          </Typography>
          <Chip label="Top 3" color="secondary" size="small" />
        </Stack>

        <Stack spacing={2}>
          {recentAlerts.map((alert) => (
            <Box
              key={alert.id}
              sx={{
                borderLeft: "3px solid #3B82F6",
                pl: 1.5,
              }}
            >
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="subtitle2" color="white">
                  {alert.title}
                </Typography>
                <Chip
                  label={alert.severity}
                  color={alert.severity === "HIGH" ? "error" : alert.severity === "MEDIUM" ? "warning" : "success"}
                  size="small"
                />
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {alert.state} • {alert.topic}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {alert.time}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
