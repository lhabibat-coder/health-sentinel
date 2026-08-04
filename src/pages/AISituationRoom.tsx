import {
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
  Box,
  LinearProgress,
} from "@mui/material";

import {
  Brain,
  ShieldAlert,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";

import { useProgramme } from "../context/ProgrammeContext";
import { useIntelligence } from "../context/IntelligenceContext";

export default function AISituationRoom() {
  const { selectedProgramme } = useProgramme();

  const {
    filteredAlerts,
    threatLevel,
    activeAlerts,
    narratives,
    simulateNewIntelligence,
  } = useIntelligence();

  const threatColor =
    threatLevel === "HIGH"
      ? "#EF4444"
      : threatLevel === "MEDIUM"
      ? "#F59E0B"
      : "#10B981";

  return (
    <PageContainer>
      <PageHeader
        title="AI Situation Room"
        subtitle="AI-powered decision support for public health surveillance across Nigeria"
        buttonText="Simulate Intelligence"
        onButtonClick={simulateNewIntelligence}
      />

      <Grid container spacing={3}>
        {/* ========================= */}
        {/* LEFT COLUMN */}
        {/* ========================= */}

        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>

            {/* Executive AI Summary */}

            <Card
              sx={{
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#16213E,#0F172A)",
              }}
            >
              <CardContent>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  mb={2}
                >
                  <Brain size={34} color="#60A5FA" />

                  <Typography
                    variant="h4"
                    fontWeight={800}
                  >
                    AI Executive Summary
                  </Typography>
                </Stack>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 2,
                    color: "#CBD5E1",
                  }}
                >
                  National surveillance indicates a{" "}
                  <strong>{threatLevel}</strong> level of
                  public health risk.

                  Current intelligence suggests that
                  misinformation activity is increasing
                  across multiple states.

                  The dominant narratives are spreading
                  through social media with growing
                  engagement.

                  Recommended action includes targeted
                  risk communication, enhanced monitoring,
                  and rapid stakeholder engagement.
                </Typography>

              </CardContent>
            </Card>

            {/* AI Recommendations */}

            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  mb={3}
                >
                  <Sparkles color="#60A5FA" />

                  <Typography
                    variant="h5"
                    fontWeight={700}
                  >
                    AI Recommended Actions
                  </Typography>
                </Stack>

                <Stack spacing={2}>

                  <Chip
                    icon={<ShieldAlert size={16} />}
                    label="Increase surveillance in Lagos, Kano and Kaduna"
                    color="error"
                    sx={{
                      justifyContent: "flex-start",
                    }}
                  />

                  <Chip
                    icon={<TrendingUp size={16} />}
                    label="Deploy targeted communication campaign"
                    color="warning"
                    sx={{
                      justifyContent: "flex-start",
                    }}
                  />

                  <Chip
                    icon={<Brain size={16} />}
                    label="Escalate narratives to National Intelligence Team"
                    color="primary"
                    sx={{
                      justifyContent: "flex-start",
                    }}
                  />

                </Stack>

              </CardContent>
            </Card>

            {/* Latest Intelligence */}

            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                >
                  Latest Intelligence Feed
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Stack spacing={3}>

                  {filteredAlerts
                    .slice(0, 8)
                    .map((alert) => (
                      <Box key={alert.id}>

                        <Typography
                          fontWeight={700}
                        >
                          {alert.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          {alert.state} • {alert.topic}
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          {alert.time}
                        </Typography>

                        <Divider sx={{ mt: 2 }} />

                      </Box>
                    ))}

                </Stack>

              </CardContent>
            </Card>

          </Stack>
        </Grid>

        {/* ========================= */}
        {/* RIGHT COLUMN */}
        {/* ========================= */}

        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>

            {/* Programme */}

            <Card sx={{ borderRadius: 4 }}>
              <CardContent>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Current Programme
                </Typography>

                <Chip
                  label={selectedProgramme.name}
                  sx={{
                    mt: 2,
                    bgcolor: selectedProgramme.color,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                />

              </CardContent>
            </Card>

            {/* Threat */}

            <Card sx={{ borderRadius: 4 }}>
              <CardContent>

                <Typography
                  variant="h6"
                  gutterBottom
                >
                  National Threat Level
                </Typography>

                <Typography
                  variant="h2"
                  fontWeight={800}
                  color={threatColor}
                >
                  {threatLevel}
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={
                    threatLevel === "HIGH"
                      ? 90
                      : threatLevel === "MEDIUM"
                      ? 60
                      : 25
                  }
                  sx={{
                    mt: 3,
                    height: 12,
                    borderRadius: 10,
                  }}
                />

              </CardContent>
            </Card>

            {/* Metrics */}

            <Card sx={{ borderRadius: 4 }}>
              <CardContent>

                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Intelligence Metrics
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Stack spacing={3}>

                  <Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Active Alerts
                    </Typography>

                    <Typography
                      variant="h3"
                      fontWeight={700}
                    >
                      {activeAlerts}
                    </Typography>

                  </Box>

                  <Divider />

                  <Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Emerging Narratives
                    </Typography>

                    <Typography
                      variant="h3"
                      fontWeight={700}
                    >
                      {narratives}
                    </Typography>

                  </Box>

                </Stack>

              </CardContent>
            </Card>

          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
}