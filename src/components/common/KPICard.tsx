import type { ReactNode } from "react";

import { Box, Card, Stack, Typography } from "@mui/material";

type KPICardProps = {
  icon: ReactNode;
  title: string;
  metric: string | number;
  trend: string;
  subtitle: string;
  accent: string;
  trendTone?: "positive" | "neutral" | "warning" | "danger";
};

const trendColors = {
  positive: "#10B981",
  neutral: "#94A3B8",
  warning: "#F59E0B",
  danger: "#EF4444",
};

export default function KPICard({
  icon,
  title,
  metric,
  trend,
  subtitle,
  accent,
  trendTone = "positive",
}: KPICardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        border: "1px solid #334155",
        borderLeft: `4px solid ${accent}`,
        bgcolor: "#1E293B",
        boxShadow: "0 18px 40px rgba(2, 6, 23, 0.28)",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
        cursor: "default",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 24px 48px rgba(2, 6, 23, 0.42)",
          borderColor: accent,
        },
      }}
    >
      <Box sx={{ p: 3, height: "100%" }}>
        <Stack spacing={2.25} sx={{ height: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: accent,
                bgcolor: `${accent}20`,
              }}
            >
              {icon}
            </Box>

            <Typography
              variant="subtitle2"
              sx={{ color: "#E2E8F0", fontWeight: 700, letterSpacing: "0.02em" }}
            >
              {title}
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              color: "#F8FAFC",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {metric}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
            <Typography
              variant="body2"
              sx={{
                color: trendColors[trendTone],
                fontWeight: 700,
              }}
            >
              {trend}
            </Typography>
            <Typography variant="body2" sx={{ color: "#94A3B8" }}>
              {subtitle}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
