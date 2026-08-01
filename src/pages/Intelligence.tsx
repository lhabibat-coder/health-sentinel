import PageHeader from "../components/layout/PageHeader";

import AIInsightsPanel from "../components/intelligence/AIInsightsPanel";
import IntelligenceFilters from "../components/intelligence/IntelligenceFilters";
import IntelligenceFeed from "../components/intelligence/IntelligenceFeed";

import { useIntelligence } from "../context/IntelligenceContext";

import { Box, CardContent, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";

import PageContainer from "../components/common/PageContainer";
import SectionCard from "../components/common/SectionCard";

import SearchIcon from "@mui/icons-material/Search";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

export default function Intelligence() {
  const { search, setSearch, filteredAlerts } = useIntelligence();

  return (
    <PageContainer>
      <PageHeader
        title="🧠 Intelligence Centre"
        subtitle="An analyst workspace for live public health signals, filters and rapid response context"
      />

      <SectionCard sx={{ mb: 3 }}>
        <CardContent>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ alignItems: { xs: "stretch", md: "center" } }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                Search and triage intelligence
              </Typography>
              <Typography color="text.secondary">
                Investigate emerging narratives and surface the most relevant public health signals.
              </Typography>
            </Box>

            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search intelligence, state, topic or source..."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ maxWidth: { md: 420 } }}
            />
          </Stack>
        </CardContent>
      </SectionCard>

      <IntelligenceFilters />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={2}>
            <SectionCard>
              <CardContent>
                <Stack direction="row" spacing={1.5} sx={{ mb: 1, alignItems: "center" }}>
                  <InsightsOutlinedIcon color="primary" />
                  <Typography variant="subtitle1" color="white">
                    Live intelligence feed
                  </Typography>
                </Stack>
                <Typography color="text.secondary">
                  Showing {filteredAlerts.length} intelligence item{filteredAlerts.length === 1 ? "" : "s"} matching the current scope.
                </Typography>
              </CardContent>
            </SectionCard>
            <IntelligenceFeed />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <AIInsightsPanel />

          <SectionCard>
            <CardContent>
              <Typography variant="h6" color="white" gutterBottom>
                Analyst guidance
              </Typography>
              <Typography color="text.secondary">
                Prioritize signals with high confidence and strong geographic concentration to support rapid interventions.
              </Typography>
            </CardContent>
          </SectionCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
}