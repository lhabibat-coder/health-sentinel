import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  Box,
} from "@mui/material";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import { useProgramme } from "../../context/ProgrammeContext";
import { useIntelligence } from "../../context/IntelligenceContext";

export default function ExecutiveBanner() {
  const { selectedProgramme } = useProgramme();

  const {
    threatLevel,
    claimsToday,
    activeAlerts,
    simulateNewIntelligence,
  } = useIntelligence();

  const getThreatColor = () => {
    switch (threatLevel) {
      case "HIGH":
        return "#EF4444";

      case "MEDIUM":
        return "#F59E0B";

      default:
        return "#22C55E";
    }
  };

  return (
    <Card
      sx={{
        mb: 3,
        background:
          "linear-gradient(135deg,#0F172A 0%, #1E293B 100%)",
        border: `1px solid ${selectedProgramme.color}30`,
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          spacing={4}
        >
          {/* LEFT PANEL */}
          <Box sx={{ flex: 1 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <ShieldOutlinedIcon
                sx={{
                  fontSize: 44,
                  color: selectedProgramme.color,
                }}
              />

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Health Sentinel
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                >
                  AI-powered Public Health Intelligence Platform
                </Typography>
              </Box>
            </Stack>

            <Chip
              label={selectedProgramme.name}
              sx={{
                mt: 3,
                bgcolor: selectedProgramme.color,
                color: "#fff",
                fontWeight: 700,
              }}
            />

            <Typography
              sx={{
                mt: 2,
                color: "text.secondary",
                maxWidth: 700,
              }}
            >
              Monitoring intelligence for{" "}
              <strong>{selectedProgramme.name}</strong>{" "}
              across Nigeria. Live surveillance integrates
              media monitoring, social listening,
              behavioural intelligence and AI-assisted
              analysis.
            </Typography>
          </Box>

          {/* RIGHT PANEL */}
          <Stack
            spacing={2}
            alignItems={{ xs: "flex-start", lg: "flex-end" }}
          >
            <Chip
              icon={<WarningAmberRoundedIcon />}
              label={`Threat Level • ${threatLevel}`}
              sx={{
                bgcolor: getThreatColor(),
                color: "#fff",
                fontWeight: 700,
              }}
            />

            <Stack
              direction="row"
              spacing={3}
            >
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  {claimsToday}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Claims Today
                </Typography>
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  {activeAlerts}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Active Alerts
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="contained"
              startIcon={<AddCircleOutlineRoundedIcon />}
              onClick={simulateNewIntelligence}
              sx={{
                bgcolor: selectedProgramme.color,
                "&:hover": {
                  bgcolor: selectedProgramme.color,
                  opacity: 0.9,
                },
              }}
            >
              Simulate Intelligence
            </Button>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <AutoGraphRoundedIcon
                sx={{
                  color: "#22C55E",
                }}
              />

              <Typography
                color="text.secondary"
                variant="body2"
              >
                System operational • Live monitoring
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}