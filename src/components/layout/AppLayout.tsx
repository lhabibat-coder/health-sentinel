import { Outlet } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import NotificationToast from "../dashboard/NotificationToast";
import { useIntelligence } from "../../context/IntelligenceContext";

export default function AppLayout() {
  const { showToast } = useIntelligence();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
      <NotificationToast visible={showToast} />
      <Header />

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Sidebar />

        <Box
          component="main"
          id="main-content"
          tabIndex={-1}
          aria-label="Page content"
          sx={{
            flex: 1,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, md: 4 },
            maxWidth: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
