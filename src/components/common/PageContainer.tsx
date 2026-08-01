import type { ReactNode } from "react";
import { Box } from "@mui/material";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Box sx={{ pb: 4, maxWidth: 1600, mx: "auto" }}>
      {children}
    </Box>
  );
}
