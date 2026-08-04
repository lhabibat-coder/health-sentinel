import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import { executiveData } from "../../data/executiveData";
import { useProgramme } from "../../context/ProgrammeContext";

function RiskGauge({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  const size = 220;
  const stroke = 14;

  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference - (value / 100) * circumference;

  return (
    <Box
      sx={{
        position: "relative",
        width: size,
        height: size,
        mx: "auto",
      }}
    >
      <svg
        width={size}
        height={size}
      >
        <circle
          stroke="#1E293B"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={{
            transition: "stroke-dashoffset 1.2s ease",
          }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: 58,
            fontWeight: 800,
            color: "#fff",
          }}
        >
          {value}%
        </Typography>

        <Typography
          color="text.secondary"
        >
          Risk Index
        </Typography>
      </Box>
    </Box>
  );
}

export default function RiskPanel() {
  const { selectedProgramme } = useProgramme();

  const programme =
    executiveData[selectedProgramme.id] ??
    executiveData["all"];

  const score = programme.riskScore;

  const color =
    score >= 75
      ? "#EF4444"
      : score >= 50
      ? "#F59E0B"
      : "#22C55E";

  const level =
    score >= 75
      ? "HIGH"
      : score >= 50
      ? "MODERATE"
      : "LOW";

  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          mb={3}
        >
          <WarningAmberRoundedIcon
            sx={{
              color,
            }}
          />

          <Typography
            variant="h5"
            fontWeight={700}
          >
            National Risk
          </Typography>
        </Stack>

        <RiskGauge
          value={score}
          color={color}
        />

        <Stack
          spacing={2}
          alignItems="center"
          mt={4}
        >
          <Chip
            label={`${level} RISK`}
            sx={{
              bgcolor: color,
              color: "#fff",
              fontWeight: 700,
              px: 1,
            }}
          />

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <TrendingUpRoundedIcon
              color="success"
            />

            <Typography fontWeight={600}>
              AI Confidence 94%
            </Typography>
          </Stack>

          <Typography
            color="text.secondary"
            textAlign="center"
          >
            Composite national intelligence score generated
            from surveillance, social listening,
            behavioural analytics and media monitoring.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}