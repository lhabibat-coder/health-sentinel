import { Box, Stack, Typography } from "@mui/material";
import Button from "../common/Button";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export default function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" }, mb: 3.5 }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      {buttonText && (
        <Button onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Stack>
  );
}