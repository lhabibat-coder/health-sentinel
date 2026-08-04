import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  {
    title: "Situation Room",
    path: "/situation-room",
    icon: <DashboardRoundedIcon />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HubRoundedIcon />,
  },
  {
    title: "Intelligence",
    path: "/intelligence",
    icon: <InsightsRoundedIcon />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <DescriptionRoundedIcon />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsRoundedIcon />,
  },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: "#0F172A",
          color: "#fff",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        },
      }}
    >
      <Toolbar />

      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={800}
        >
          Health Sentinel
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          National Intelligence Platform
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            component={NavLink}
            to={item.path}
            sx={{
              mx: 1,
              mb: 1,
              borderRadius: 2,

              "&.active": {
                bgcolor: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}