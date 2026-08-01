import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import { useIntelligence } from "../../context/IntelligenceContext";

export default function QuickActions() {
  const navigate = useNavigate();
  const { simulateNewIntelligence } = useIntelligence();

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
        <Typography variant="h6" color="white" sx={{ mb: 2 }}>
          Quick actions
        </Typography>

        <Stack spacing={1.5}>
          <Button
            variant="contained"
            color="primary"
            onClick={simulateNewIntelligence}
          >
            Simulate intelligence
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate("/intelligence")}
          >
            Open intelligence feed
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate("/analytics")}
          >
            Review analytics
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
