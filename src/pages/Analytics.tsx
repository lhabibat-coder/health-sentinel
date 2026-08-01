import { Grid } from "@mui/material";

import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";
import AnalyticsCards from "../components/analytics/AnalyticsCards";
import ExecutiveAnalyticsGrid from "../components/analytics/ExecutiveAnalyticsGrid";

export default function Analytics() {
  return (
    <PageContainer>
      <PageHeader
        title="📊 Analytics"
        subtitle="Executive analytics overview of public health sentiment, risk geography and signal velocity"
      />

      <AnalyticsCards />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <ExecutiveAnalyticsGrid />
        </Grid>
      </Grid>
    </PageContainer>
  );
}