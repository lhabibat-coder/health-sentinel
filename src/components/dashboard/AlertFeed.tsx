import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import { useIntelligence } from "../../context/IntelligenceContext";

export default function AlertFeed() {
  const { alerts } = useIntelligence();

  const recentAlerts = alerts.slice(0, 5);

  return (
    <Card
      sx={{
        mb: 4,
        bgcolor: "#1E293B",
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            🚨 Live Intelligence Feed
          </Typography>

          <Chip
            label="LIVE"
            color="success"
          />
        </Stack>

        {recentAlerts.map((alert, index) => (
          <div key={alert.id}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                <Typography sx={{ fontWeight: 700 }}>
                  {alert.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {alert.state} • {alert.source}
                </Typography>
              </div>

              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Chip
                  size="small"
                  color={
                    alert.severity === "HIGH"
                      ? "error"
                      : alert.severity === "MEDIUM"
                      ? "warning"
                      : "success"
                  }
                  label={alert.severity}
                />

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {alert.time}
                </Typography>
              </Stack>
            </Stack>

            {index !== recentAlerts.length - 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}