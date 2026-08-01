import { Grid, Stack } from "@mui/material";

import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";
import ExecutiveBanner from "../components/dashboard/ExecutiveBanner";
import KPICards from "../components/dashboard/KPICards";
import NationalTrend from "../components/dashboard/NationalTrend";
import NigeriaRiskMap from "../components/maps/NigeriaRiskMap";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import QuickActions from "../components/dashboard/QuickActions";
import { useIntelligence } from "../context/IntelligenceContext";

export default function Dashboard() {
  const { simulateNewIntelligence } = useIntelligence();

  return (
    <PageContainer>
      <PageHeader
        title="Health Sentinel Dashboard"
        subtitle="Executive overview of public health intelligence, risk signals and rapid response priorities"
        buttonText="+ Simulate Intelligence"
        onButtonClick={simulateNewIntelligence}
      />

      <ExecutiveBanner />
      <KPICards />

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <NationalTrend />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>
            <RecentAlerts />
            <QuickActions />
          </Stack>
        </Grid>
      </Grid>

      <NigeriaRiskMap />
    </PageContainer>
  );
}