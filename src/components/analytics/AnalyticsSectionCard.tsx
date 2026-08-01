import type { ReactNode } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";

type AnalyticsSectionCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AnalyticsSectionCard({
  title,
  subtitle,
  children,
}: AnalyticsSectionCardProps) {
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
        <Stack spacing={0.75} sx={{ mb: 2 }}>
          <Typography variant="h6" color="white">
            {title}
          </Typography>
          {subtitle ? (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
        {children}
      </CardContent>
    </Card>
  );
}
