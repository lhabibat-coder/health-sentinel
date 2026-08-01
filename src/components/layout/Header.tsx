import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "background.default",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2.5, md: 3 },
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h4" sx={{ color: "secondary.main", fontWeight: 800, mb: 0.5 }}>
        Health Sentinel
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Nigeria's Public Health Misinformation Intelligence Platform
      </Typography>
    </Box>
  );
}

