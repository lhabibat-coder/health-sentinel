import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2563EB" },
    secondary: { main: "#10B981" },
    background: { default: "#0F172A", paper: "#111827" },
    text: { primary: "#F8FAFC", secondary: "#CBD5E1" },
    error: { main: "#EF4444" },
    warning: { main: "#F59E0B" },
    success: { main: "#22C55E" },
    divider: "rgba(148, 163, 184, 0.16)",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h4: { fontWeight: 700, letterSpacing: "-0.03em" },
    h5: { fontWeight: 700, letterSpacing: "-0.02em" },
    h6: { fontWeight: 600, letterSpacing: "-0.01em" },
    button: { textTransform: "none", fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 18px 45px rgba(2, 8, 23, 0.28)",
          border: "1px solid rgba(148, 163, 184, 0.16)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 20px",
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;