import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { initialTimeline } from "../../data/timelineEvents";

const colors = {
  high: "#EF4444",
  medium: "#F59E0B",
  low: "#22C55E",
};

export default function LiveTimeline() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
        >
          Live Intelligence Timeline
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Latest verified public health intelligence.
        </Typography>

        <Stack spacing={2}>
          {initialTimeline.map((item, index) => (
            <Box key={item.id}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <FiberManualRecordIcon
                  sx={{
                    color: colors[item.severity],
                    mt: 0.4,
                    fontSize: 14,
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography fontWeight={700}>
                      {item.state}
                    </Typography>

                    <Chip
                      size="small"
                      label={item.time}
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Stack>

              {index < initialTimeline.length - 1 && (
                <Divider sx={{ mt: 2 }} />
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}