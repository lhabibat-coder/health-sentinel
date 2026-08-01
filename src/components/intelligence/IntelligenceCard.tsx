import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import { useIntelligence } from "../../context/IntelligenceContext";
import type { IntelligenceItem } from "../../data/intelligenceData";

type Props = {
  alert: IntelligenceItem;
};

export default function IntelligenceCard({ alert }: Props) {
  const {
    toggleBookmark,
    togglePin,
    markAsRead,
  } = useIntelligence();

  const confidence =
    alert.severity === "HIGH"
      ? 94
      : alert.severity === "MEDIUM"
      ? 87
      : 78;

  const chipColor =
    alert.severity === "HIGH"
      ? "error"
      : alert.severity === "MEDIUM"
      ? "warning"
      : "success";

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 3,
        bgcolor: "#111827",
        border: alert.read
          ? "1px solid #334155"
          : "1px solid #10B981",
        transition: "0.25s",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Chip
            label={alert.severity}
            color={chipColor}
            sx={{ fontWeight: 700 }}
          />

          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => togglePin(alert.id)}>
              {alert.pinned ? (
                <PushPinIcon sx={{ color: "#60A5FA" }} />
              ) : (
                <PushPinOutlinedIcon sx={{ color: "#E2E8F0" }} />
              )}
            </IconButton>

            <IconButton onClick={() => toggleBookmark(alert.id)}>
              {alert.bookmarked ? (
                <BookmarkIcon sx={{ color: "#F59E0B" }} />
              ) : (
                <BookmarkBorderOutlinedIcon sx={{ color: "#E2E8F0" }} />
              )}
            </IconButton>
          </Stack>
        </Stack>

        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: 700, color: "#F8FAFC" }}
        >
          {alert.title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 1, alignItems: "center" }}
        >
          <LocationOnOutlinedIcon
            sx={{
              color: "#60A5FA",
              fontSize: 18,
            }}
          />

          <Typography color="#94A3B8">
            {alert.state}
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Typography color="#E2E8F0">
            <strong>Source:</strong> {alert.source}
          </Typography>

          <Typography color="#E2E8F0">
            <strong>Category:</strong> {alert.topic}
          </Typography>

          <Typography color="#E2E8F0">
            <strong>Received:</strong> {alert.time}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mt: 3, mb: 1, alignItems: "center" }}>
          <Typography color="#E2E8F0">Confidence</Typography>
          <Chip label={`${confidence}%`} size="small" color={confidence >= 90 ? "success" : confidence >= 80 ? "warning" : "info"} />
        </Stack>

        <LinearProgress
          variant="determinate"
          value={confidence}
          sx={{
            height: 10,
            borderRadius: 10,
          }}
        />

        <Typography
          sx={{ mt: 1, color: "#94A3B8" }}
        >
          {confidence}% confidence
        </Typography>

        {!alert.read && (
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => markAsRead(alert.id)}
            startIcon={<CheckCircleOutlineRoundedIcon />}
          >
            Mark as Read
          </Button>
        )}
      </CardContent>
    </Card>
  );
}