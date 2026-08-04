import {
  Box,
  Typography,
  Stack,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import { executiveData } from "../../data/executiveData";
import { useProgramme } from "../../context/ProgrammeContext";

export default function SituationSummary() {
  const { selectedProgramme } = useProgramme();

  const programme =
    executiveData[selectedProgramme.id];

  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        mb={2}
      >
        <AutoAwesomeRoundedIcon
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
        variant="body1"
        sx={{
          lineHeight: 2,
          fontSize: 18,
          color: "text.secondary",
        }}
      >
        {programme.summary}
      </Typography>
    </Box>
  );
}