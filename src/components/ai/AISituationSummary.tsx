import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  LinearProgress,
  Divider,
  Button,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { useProgramme } from "../../context/ProgrammeContext";
import { useIntelligence } from "../../context/IntelligenceContext";

export default function AISituationSummary() {
  const { selectedProgramme } = useProgramme();

  const {
    activeAlerts,
    threatLevel,
  } = useIntelligence();

  const risk =
    threatLevel === "HIGH"
      ? 86
      : threatLevel === "MEDIUM"
      ? 63
      : 28;

  return (
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
          <AutoAwesomeIcon
            sx={{
              color: selectedProgramme.color,
            }}
          />

          <Typography
            variant="h5"
            fontWeight={700}
          >
            AI Situation Summary
          </Typography>
        </Stack>

        <Typography
          color="text.secondary"
        >
          Executive Summary
        </Typography>

        <Typography
          sx={{
            mt: 2,
            lineHeight: 1.8,
          }}
        >
          Public discourse surrounding{" "}
          <strong>
            {selectedProgramme.name}
          </strong>{" "}
          remains under active monitoring.

          Current intelligence indicates{" "}
          <strong>{activeAlerts}</strong>{" "}
          active alerts requiring analyst review.

          The national threat level is currently{" "}
          <strong>{threatLevel}</strong>.

          Immediate monitoring and coordinated
          communication are recommended.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography
          fontWeight={700}
          gutterBottom
        >
          National Risk Score
        </Typography>

        <LinearProgress
          variant="determinate"
          value={risk}
          sx={{
            height: 10,
            borderRadius: 10,
            mb: 2,
          }}
        />

        <Typography>
          {risk}% National Risk
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography
          fontWeight={700}
          gutterBottom
        >
          Emerging Narratives
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          mb={3}
        >
          <Chip label="Counterfeit Products" />
          <Chip label="Community Rumours" />
          <Chip label="Risk Communication" />
          <Chip label="Behaviour Change" />
        </Stack>

        <Typography
          fontWeight={700}
          gutterBottom
        >
          Recommended Actions
        </Typography>

        <ul>
          <li>Increase public awareness.</li>
          <li>Engage state surveillance teams.</li>
          <li>Notify relevant government agencies.</li>
          <li>Prepare media briefing.</li>
        </ul>

        <Button
          variant="contained"
          fullWidth
          startIcon={<PictureAsPdfIcon />}
          sx={{
            mt: 3,
          }}
        >
          Generate Executive Brief
        </Button>

      </CardContent>
    </Card>
  );
}