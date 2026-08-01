import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TrendChart from "../charts/TrendChart";

export default function NationalTrend() {
  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "#111827",
        border: "1px solid #334155",
        borderRadius: 3,
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardContent>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mb: 2, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" } }}
        >
          <Box>
            <Typography variant="h6" color="white">
              National trend overview
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Claims growth indicates escalating attention around emerging health risks.
            </Typography>
          </Box>

          <Chip label="Weekly view" color="primary" />
        </Stack>

        <Box sx={{ height: 320 }}>
          <TrendChart />
        </Box>
      </CardContent>
    </Card>
  );
}
