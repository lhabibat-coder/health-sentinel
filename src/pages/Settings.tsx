import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";

const defaultSettings = {
  userName: "Health Analyst",
  theme: "dark",
  language: "en",
  emailAlerts: true,
  smsAlerts: false,
  dailySummary: true,
  autoSync: true,
  simulationMode: true,
  apiKey: "demo-key-4821",
  orgName: "Health Watch Foundation",
};

export default function Settings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [apiKeyError, setApiKeyError] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Settings are ready to be reviewed.");

  const handleChange = (field: keyof typeof defaultSettings, value: unknown) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "apiKey") {
      setApiKeyError(false);
    }
  };

  const handleSave = () => {
    if (!settings.apiKey.trim()) {
      setApiKeyError(true);
      setStatusMessage("Please enter a valid API key before saving.");
      return;
    }

    setStatusMessage("Settings saved successfully.");
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    setApiKeyError(false);
    setStatusMessage("Settings restored to defaults.");
  };

  return (
    <PageContainer>
      <PageHeader
        title="⚙️ Settings"
        subtitle="Control themes, delivery preferences, simulation mode, and mock API configuration"
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>
            <Card sx={{ bgcolor: "#111827", color: "white", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Theme & User Preferences
                  </Typography>
                  <Chip label="Dark" color="primary" size="small" />
                </Stack>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="User Name"
                      value={settings.userName}
                      onChange={(event) => handleChange("userName", event.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl fullWidth>
                      <InputLabel id="theme-select-label">Theme</InputLabel>
                      <Select
                        labelId="theme-select-label"
                        value={settings.theme}
                        label="Theme"
                        onChange={(event) => handleChange("theme", event.target.value)}
                      >
                        <MenuItem value="dark">Dark</MenuItem>
                        <MenuItem value="light">Light</MenuItem>
                        <MenuItem value="system">System</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl fullWidth>
                      <InputLabel id="language-select-label">Language</InputLabel>
                      <Select
                        labelId="language-select-label"
                        value={settings.language}
                        label="Language"
                        onChange={(event) => handleChange("language", event.target.value)}
                      >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        <MenuItem value="ha">Hausa</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Organization Name"
                      value={settings.orgName}
                      onChange={(event) => handleChange("orgName", event.target.value)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ bgcolor: "#111827", color: "white", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Notifications & Simulation
                </Typography>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.emailAlerts}
                        onChange={(event) => handleChange("emailAlerts", event.target.checked)}
                      />
                    }
                    label="Email Alerts"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.smsAlerts}
                        onChange={(event) => handleChange("smsAlerts", event.target.checked)}
                      />
                    }
                    label="SMS Alerts"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.dailySummary}
                        onChange={(event) => handleChange("dailySummary", event.target.checked)}
                      />
                    }
                    label="Daily Summary"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.simulationMode}
                        onChange={(event) => handleChange("simulationMode", event.target.checked)}
                      />
                    }
                    label="Simulation Mode"
                  />
                </FormGroup>
              </CardContent>
            </Card>

            <Card sx={{ bgcolor: "#111827", color: "white", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  API Configuration (mock)
                </Typography>
                <TextField
                  label="API Key"
                  value={settings.apiKey}
                  error={apiKeyError}
                  helperText={apiKeyError ? "API key is required." : "Mock API connection is active for preview purposes."}
                  onChange={(event) => handleChange("apiKey", event.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={settings.autoSync}
                      onChange={(event) => handleChange("autoSync", event.target.checked)}
                    />
                  }
                  label="Enable auto-sync"
                />
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>
            <Card sx={{ bgcolor: "#111827", color: "white", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  System Information
                </Typography>
                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#94A3B8" }}>Environment</Typography>
                    <Typography variant="body1">Production Preview</Typography>
                  </Box>
                  <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.2)" }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: "#94A3B8" }}>Version</Typography>
                    <Typography variant="body1">v1.2.0</Typography>
                  </Box>
                  <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.2)" }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: "#94A3B8" }}>Last Sync</Typography>
                    <Typography variant="body1">08:45 UTC</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ bgcolor: "#111827", color: "white", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Quick Actions
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="contained" fullWidth onClick={handleSave}>
                    Save Settings
                  </Button>
                  <Button variant="outlined" fullWidth onClick={handleReset}>
                    Reset Defaults
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Alert severity="info" sx={{ bgcolor: "rgba(59, 130, 246, 0.12)", color: "#DBEAFE", border: "1px solid rgba(59, 130, 246, 0.25)" }}>
              {statusMessage}
            </Alert>
          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
