import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      <Stack spacing={2} sx={{ maxWidth: 560, textAlign: "center" }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          Page not found
        </Typography>
        <Typography color="text.secondary">
          The page you requested does not exist or may have moved. Return to the dashboard to continue monitoring public health signals.
        </Typography>
        <Button component={Link} to="/" variant="contained" sx={{ alignSelf: "center" }}>
          Go to dashboard
        </Button>
      </Stack>
    </Box>
  );
}
