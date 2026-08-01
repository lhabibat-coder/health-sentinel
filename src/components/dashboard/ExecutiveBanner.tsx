import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import { useIntelligence } from "../../context/IntelligenceContext";

export default function ExecutiveBanner() {
  const {
    threatLevel,
    simulateNewIntelligence,
  } = useIntelligence();

  const color =
    threatLevel === "HIGH"
      ? "#EF4444"
      : threatLevel === "MEDIUM"
      ? "#F59E0B"
      : "#22C55E";

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 4,
        mb: 4,
        bgcolor: "#1E293B",
        border: "1px solid #334155",
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={4}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center" }}
          >
            <ShieldOutlinedIcon
              sx={{
                fontSize: 40,
                color,
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              National Threat Level
            </Typography>
          </Stack>

          <Typography
            sx={{ mt: 1, color: "text.secondary" }}
          >
            Live national intelligence generated from
            social listening, surveillance and field
            reports.
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Chip
            label={threatLevel}
            sx={{
              bgcolor: color,
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              px: 3,
              py: 3,
            }}
          />

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            startIcon={
              <NotificationsActiveOutlinedIcon />
            }
            onClick={simulateNewIntelligence}
          >
            Simulate Intelligence
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}