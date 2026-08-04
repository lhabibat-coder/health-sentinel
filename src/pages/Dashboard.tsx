import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";

import ProgrammeSelector from "../components/dashboard/ProgrammeSelector";

import SituationRoom from "./SituationRoom";

import KPICards from "../components/dashboard/KPICards";
import NationalTrend from "../components/dashboard/NationalTrend";
import NigeriaRiskMap from "../components/maps/NigeriaRiskMap";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import QuickActions from "../components/dashboard/QuickActions";

import { useIntelligence } from "../context/IntelligenceContext";

import { Grid, Stack } from "@mui/material";

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

      <ProgrammeSelector />

      <SituationRoom />

      <KPICards />

      <Grid
        container
        spacing={3}
        sx={{ mb: 3 }}
      >
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