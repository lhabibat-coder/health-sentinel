import type { ReactNode } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import type { CardProps } from "@mui/material/Card";

type SectionCardProps = CardProps & {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  hoverable?: boolean;
};

export default function SectionCard({
  children,
  title,
  subtitle,
  compact = false,
  hoverable = true,
  sx,
  ...props
}: SectionCardProps) {
  const hasHeader = Boolean(title || subtitle);

  return (
    <Card
      elevation={0}
      {...props}
      sx={{
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: "0 18px 45px rgba(2, 8, 23, 0.28)",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
        ...(hoverable && {
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 24px 50px rgba(2, 8, 23, 0.34)",
            borderColor: "primary.main",
          },
        }),
        ...sx,
      }}
    >
      {hasHeader ? (
        <CardContent sx={{ p: compact ? 2 : 3, "&:last-child": { pb: compact ? 2 : 3 } }}>
          {title ? (
            <Typography variant="h6" sx={{ fontWeight: 700, mb: subtitle ? 0.5 : 0 }}>
              {title}
            </Typography>
          ) : null}
          {subtitle ? (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          ) : null}
          {children}
        </CardContent>
      ) : (
        children
      )}
    </Card>
  );
}
