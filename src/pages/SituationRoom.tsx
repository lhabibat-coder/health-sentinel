import {
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";
import AISituationSummary from "../components/ai/AISituationSummary";

import { useProgramme } from "../context/ProgrammeContext";
import { useIntelligence } from "../context/IntelligenceContext";

export default function AISituationRoom() {
  const { selectedProgramme } = useProgramme();

  const {
    filteredAlerts,
    threatLevel,
    activeAlerts,
  } = useIntelligence();

  return (
    <PageContainer>
      <PageHeader
        title="🧠 AI Situation Room"
        subtitle="AI-powered national public health decision support"
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <AISituationSummary />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>

            <Card>
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

                <Divider sx={{ my: 3 }} />

                <Typography variant="body2">
                  Threat Level
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  color={
                    threatLevel === "HIGH"
                      ? "error.main"
                      : threatLevel === "MEDIUM"
                      ? "warning.main"
                      : "success.main"
                  }
                >
                  {threatLevel}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="body2">
                  Active Alerts
                </Typography>

                <Typography
                  variant="h3"
                  fontWeight={700}
                >
                  {activeAlerts}
                </Typography>

              </CardContent>
            </Card>

            <Card>
              <CardContent>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                >
                  Latest Intelligence
                </Typography>

                {filteredAlerts
                  .slice(0, 5)
                  .map((alert) => (
                    <Stack
                      key={alert.id}
                      spacing={1}
                      sx={{ mb: 2 }}
                    >
                      <Typography
                        fontWeight={600}
                      >
                        {alert.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {alert.state} • {alert.time}
                      </Typography>

                      <Divider />
                    </Stack>
                  ))}

              </CardContent>
            </Card>

          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
}