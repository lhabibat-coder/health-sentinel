import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

import { executiveData } from "../../data/executiveData";
import { useProgramme } from "../../context/ProgrammeContext";

export default function PriorityActions() {
  const { selectedProgramme } = useProgramme();

  const programme =
    executiveData[selectedProgramme.id];

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
      >
        AI Priority Actions
      </Typography>

      <Stack spacing={2} mt={3}>
        {programme.recommendations.map(
          (item) => (
            <Stack
              key={item}
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <TaskAltRoundedIcon
                color="success"
              />

              <Typography>
                {item}
              </Typography>
            </Stack>
          )
        )}
      </Stack>
    </Box>
  );
}