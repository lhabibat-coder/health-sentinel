import {
  Stack,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";

import { useIntelligence } from "../../context/IntelligenceContext";
import IntelligenceCard from "./IntelligenceCard";

export default function IntelligenceFeed() {
  const { filteredAlerts } = useIntelligence();

  return (
    <Box>
      <Typography
        sx={{
          color: "#94A3B8",
          mb: 2,
          fontWeight: 600,
        }}
      >
        Showing {filteredAlerts.length} intelligence report
        {filteredAlerts.length !== 1 ? "s" : ""}
      </Typography>

      {filteredAlerts.length === 0 ? (
        <Card
          sx={{
            background: "#111827",
            borderRadius: 3,
            border: "1px solid #334155",
          }}
        >
          <CardContent
            sx={{
              py: 8,
              textAlign: "center",
            }}
          >
            <SearchOffOutlinedIcon
              sx={{
                fontSize: 60,
                color: "#64748B",
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "#F8FAFC",
                mb: 1,
              }}
            >
              No Intelligence Found
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                maxWidth: 420,
                mx: "auto",
              }}
            >
              No intelligence matches your current
              search or filters.
              <br />
              Try adjusting your filters or clearing
              them to see more results.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Stack spacing={2}>
          {filteredAlerts.map((alert) => (
            <IntelligenceCard
              key={alert.id}
              alert={alert}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}