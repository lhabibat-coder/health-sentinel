import { Home, Bell, BarChart3, FileText, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Bell, label: "Intelligence", path: "/intelligence" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="aside"
      sx={{
        width: isMobile ? "100%" : 260,
        minHeight: isMobile ? "auto" : "calc(100vh - 80px)",
        bgcolor: "background.paper",
        borderRight: isMobile ? "none" : "1px solid",
        borderBottom: isMobile ? "1px solid" : "none",
        borderColor: "divider",
        p: { xs: 2, md: 3 },
      }}
    >
      <Typography variant="h6" sx={{ color: "secondary.main", mb: 2, fontWeight: 700 }}>
        Navigation
      </Typography>

      <Stack component="nav" aria-label="Primary" spacing={1} direction={isMobile ? "row" : "column"} sx={{ flexWrap: "wrap" }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              style={({ isActive }: { isActive: boolean }) => ({
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: 12,
                textDecoration: "none",
                transition: "all 180ms ease",
                background: isActive ? "linear-gradient(90deg,#2563EB,#10B981)" : "transparent",
                color: isActive ? "#fff" : "#E2E8F0",
                fontWeight: isActive ? 700 : 500,
                minWidth: isMobile ? "fit-content" : "100%",
              })}
            >
              <Icon size={20} strokeWidth={2.1} />
              <span style={{ fontSize: 15 }}>{item.label}</span>
            </NavLink>
          );
        })}
      </Stack>
    </Box>
  );
}