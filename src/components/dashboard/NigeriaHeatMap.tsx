import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type StateItem = {
  name: string;
  threat: "HIGH" | "MEDIUM" | "LOW";
};

const states: StateItem[] = [
  { name: "Kano", threat: "HIGH" },
  { name: "Kaduna", threat: "MEDIUM" },
  { name: "Lagos", threat: "HIGH" },
  { name: "Abuja", threat: "MEDIUM" },
  { name: "Nasarawa", threat: "LOW" },
  { name: "Kwara", threat: "LOW" },
];

const badgeColors: Record<StateItem["threat"], string> = {
  HIGH: "#EF4444",
  MEDIUM: "#F59E0B",
  LOW: "#10B981",
};

export default function NigeriaHeatMap() {
  return (
    <Card
      sx={{
        mt: 3,
        bgcolor: "#1E293B",
        border: "1px solid #334155",
        borderRadius: "20px",
        boxShadow: "0 16px 40px rgba(2, 6, 23, 0.28)",
      }}
    >
      <Box sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography variant="h6" sx={{ color: "#F8FAFC", fontWeight: 700, mb: 1 }}>
          Nigeria Risk Snapshot
        </Typography>
        <Typography variant="body2" sx={{ color: "#94A3B8", mb: 2.5 }}>
          Live regional signal intensity across key states.
        </Typography>

        <Grid container spacing={1.5}>
          {states.map((state) => (
            <Grid key={state.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #334155",
                  bgcolor: "rgba(15, 23, 42, 0.7)",
                  height: "100%",
                }}
              >
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                  <Typography variant="subtitle1" sx={{ color: "#F8FAFC", fontWeight: 600 }}>
                    {state.name}
                  </Typography>
                  <Chip
                    label={state.threat}
                    size="small"
                    sx={{
                      bgcolor: badgeColors[state.threat],
                      color: "#FFFFFF",
                      fontWeight: 700,
                      borderRadius: "999px",
                    }}
                  />
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}
