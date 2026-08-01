import { Box } from "@mui/material";
import type { ReactNode } from "react";

type ScreenReaderOnlyProps = {
  children: ReactNode;
};

export default function ScreenReaderOnly({ children }: ScreenReaderOnlyProps) {
  return (
    <Box
      component="span"
      sx={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {children}
    </Box>
  );
}
