import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1500px",
        mx: "auto",
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        py: 4,
      }}
    >
      {children}
    </Box>
  );
}