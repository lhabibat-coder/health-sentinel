import { useState } from "react";
import {
  Alert,
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import PageContainer from "../components/common/PageContainer";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/common/Button";

type ReportType = "Daily" | "Weekly" | "Monthly";
type ExportType = "PDF" | "CSV";

const reportDetails: Record<ReportType, { title: string; summary: string; highlights: string[] }> = {
  Daily: {
    title: "Daily Brief",
    summary: "A concise overview of active alerts, high-risk regions, and response momentum.",
    highlights: ["12 active alerts", "3 escalations", "2 new narratives"],
  },
  Weekly: {
    title: "Weekly Intelligence Review",
    summary: "A strategic snapshot of trends, sentiment movement, and intervention outcomes.",
    highlights: ["22 signal clusters", "4 priority states", "1 national trend shift"],
  },
  Monthly: {
    title: "Monthly Executive Summary",
    summary: "A leadership-ready view of risk posture, geographic coverage, and operational readiness.",
    highlights: ["89 total incidents", "6 policy recommendations", "3 sustained hotspots"],
  },
};

export default function Reports() {
  const [activeReport, setActiveReport] = useState<ReportType>("Weekly");
  const [message, setMessage] = useState<string>("Choose a report type to prepare a mock executive package.");

  const handleGenerate = (report: ReportType) => {
    setActiveReport(report);
    setMessage(`${report} report generated and prepared for review.`);
  };

  const handleExport = (format: ExportType) => {
    const content = `${format} export for ${activeReport} report\n\n${reportDetails[activeReport].summary}\n\nHighlights:\n- ${reportDetails[activeReport].highlights.join("\n- ")}`;
    const blob = new Blob([content], { type: format === "PDF" ? "application/pdf" : "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${activeReport.toLowerCase()}-report.${format.toLowerCase()}`;
    link.click();
    URL.revokeObjectURL(url);

    setMessage(`${format} export started for the ${activeReport} report.`);
  };

  return (
    <PageContainer>
      <PageHeader
        title="📄 Reports"
        subtitle="Generate mock reports and export executive-ready packages without any backend integration"
      />

      <Card sx={{ p: { xs: 3, md: 4 }, bgcolor: "#111827", color: "white", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Executive reporting centre
            </Typography>
            <Typography variant="body1" sx={{ color: "#CBD5E1", maxWidth: 760 }}>
              Prepare a mock daily, weekly, or monthly report and export a PDF or CSV package instantly.
            </Typography>
          </Box>

          {message && (
            <Alert severity="info" sx={{ bgcolor: "rgba(59, 130, 246, 0.12)", color: "#DBEAFE", border: "1px solid rgba(59, 130, 246, 0.25)" }}>
              {message}
            </Alert>
          )}

          <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.25)" }} />

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Button variant="contained" color="primary" onClick={() => handleGenerate("Daily")}>
              Generate Daily Report
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleGenerate("Weekly")}>
              Weekly Report
            </Button>
            <Button variant="contained" color="warning" onClick={() => handleGenerate("Monthly")}>
              Monthly Report
            </Button>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Button variant="outlined" color="inherit" onClick={() => handleExport("PDF")}>
              Export PDF
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => handleExport("CSV")}>
              Export CSV
            </Button>
          </Stack>

          <Card sx={{ bgcolor: "#0F172A", borderRadius: 2, border: "1px solid rgba(148, 163, 184, 0.15)" }}>
            <Box sx={{ p: 3 }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {reportDetails[activeReport].title}
                </Typography>
                <Chip label={activeReport} color="primary" size="small" />
              </Stack>

              <Typography variant="body1" sx={{ color: "#CBD5E1", mb: 2 }}>
                {reportDetails[activeReport].summary}
              </Typography>

              <List dense sx={{ bgcolor: "transparent", p: 0 }}>
                {reportDetails[activeReport].highlights.map((item) => (
                  <ListItem key={item} disablePadding sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={item}
                      sx={{ color: "#E2E8F0", fontSize: "0.95rem" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Card>
        </Stack>
      </Card>
    </PageContainer>
  );
}