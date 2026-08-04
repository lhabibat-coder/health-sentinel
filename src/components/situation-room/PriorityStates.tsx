import {
  Box,
  Typography,
} from "@mui/material";

export default function PriorityStates() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h5"
        fontWeight={700}
      >
        Priority States
      </Typography>

      <Typography
        sx={{ mt: 2 }}
        color="text.secondary"
      >
        Nigeria Intelligence Map coming next...
      </Typography>
    </Box>
  );
}