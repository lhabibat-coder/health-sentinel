import {
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAlt";

import { useProgramme } from "../../context/ProgrammeContext";

export default function SituationHeader() {
  const { selectedProgramme } = useProgramme();

  return (
    <Box
      sx={{
        px: 4,
        py: 3,
        background:
          "linear-gradient(90deg,#0F172A,#172554)",
        borderBottom:
          "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          md: "center",
        }}
        spacing={2}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <PsychologyAltRoundedIcon
            sx={{
              fontSize: 42,
              color: selectedProgramme.color,
            }}
          />

          <Box>
            <Typography
              variant="h4"
              fontWeight={800}
            >
              Executive Situation Room
            </Typography>

            <Typography
              color="text.secondary"
            >
              AI-powered public health intelligence
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Chip
            icon={
              <CircleIcon
                sx={{
                  color: "#22C55E !important",
                  fontSize: 12,
                }}
              />
            }
            label="LIVE"
            color="success"
          />

          <Typography
            color="text.secondary"
          >
            Updated 2 mins ago
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}