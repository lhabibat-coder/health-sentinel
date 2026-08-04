import {
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  Chip,
  Stack,
  Divider,
  Button,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

import { executiveData } from "../../data/executiveData";
import { useProgramme } from "../../context/ProgrammeContext";

export default function ExecutiveCommandCenter() {
  const { selectedProgramme } = useProgramme();

  const programme =
  executiveData[selectedProgramme.id] ??
  executiveData["all"];

  return (
    <Card
      sx={{
        mb: 4,
        borderRadius: 4,
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* LEFT */}

          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              mb={2}
            >
              <AutoAwesomeIcon
                sx={{
                  color: selectedProgramme.color,
                  fontSize: 36,
                }}
              />

              <Typography
                variant="h4"
                fontWeight={700}
              >
                {programme.programme} Intelligence Centre
              </Typography>
            </Stack>

            <Typography
              color="text.secondary"
              sx={{
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              {programme.summary}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Typography
              variant="subtitle1"
              fontWeight={700}
              gutterBottom
            >
              AI Recommended Actions
            </Typography>

            <Stack spacing={1}>
              {programme.recommendations.map((action) => (
                <Stack
                  key={action}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <TaskAltRoundedIcon
                    color="success"
                    fontSize="small"
                  />

                  <Typography>{action}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* RIGHT */}

          <Grid size={{ xs: 12, lg: 4 }}>
            <Card
              sx={{
                bgcolor: "#111827",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  mb={2}
                >
                  <WarningAmberRoundedIcon color="warning" />

                  <Typography
                    variant="h6"
                    fontWeight={700}
                  >
                    National Risk Score
                  </Typography>
                </Stack>

                <Typography
  variant="h2"
  sx={{
    color: "#F8FAFC",
    fontWeight: 800,
    lineHeight: 1,
    mb: 1,
  }}
>
  {programme.riskScore}%
</Typography>

                <LinearProgress
                  variant="determinate"
                  value={programme.riskScore}
                  sx={{
                    height: 12,
                    borderRadius: 10,
                    mt: 2,
                    mb: 3,
                  }}
                />

                <Divider sx={{ mb: 3 }} />

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  mb={2}
                >
                  <LocationOnRoundedIcon color="error" />

                  <Typography fontWeight={700}>
                    Priority States
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                >
                  {programme.priorityStates.map((state) => (
                    <Chip
                      key={state}
                      label={state}
                      color="primary"
                    />
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 4,
                  }}
                >
                  Generate Executive Brief
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}