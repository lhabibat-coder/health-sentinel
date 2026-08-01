import Grid from "@mui/material/Grid";
import { ShieldAlert, AlertTriangle, MessageSquareText, MapPinned, RadioTower, DatabaseZap } from "lucide-react";

import KPICard from "../common/KPICard";
import { useIntelligence } from "../../context/IntelligenceContext";

export default function KPICards() {
  const { threatLevel, claimsToday, activeAlerts, narratives } = useIntelligence();

  const cards = [
    {
      title: "Threat Level",
      metric: threatLevel,
      trend: "▲ 8%",
      subtitle: "National Risk",
      accent: "#EF4444",
      icon: <ShieldAlert size={20} />,
      trendTone: "danger" as const,
    },
    {
      title: "Claims Processed",
      metric: claimsToday.toLocaleString(),
      trend: "▲ 12%",
      subtitle: "Today",
      accent: "#3B82F6",
      icon: <DatabaseZap size={20} />,
      trendTone: "positive" as const,
    },
    {
      title: "Critical Alerts",
      metric: activeAlerts.toString(),
      trend: "▲ 3",
      subtitle: "Awaiting Review",
      accent: "#F59E0B",
      icon: <AlertTriangle size={20} />,
      trendTone: "warning" as const,
    },
    {
      title: "Emerging Narratives",
      metric: narratives.toString(),
      trend: "▲ 6",
      subtitle: "Last 24 Hours",
      accent: "#10B981",
      icon: <MessageSquareText size={20} />,
      trendTone: "positive" as const,
    },
    {
      title: "Affected States",
      metric: "14",
      trend: "No change",
      subtitle: "Active Coverage",
      accent: "#8B5CF6",
      icon: <MapPinned size={20} />,
      trendTone: "neutral" as const,
    },
    {
      title: "Data Sources",
      metric: "18",
      trend: "+2 New",
      subtitle: "Live Feeds",
      accent: "#06B6D4",
      icon: <RadioTower size={20} />,
      trendTone: "positive" as const,
    },
  ];

  return (
    <Grid container spacing={2.5} sx={{ mb: 4 }}>
      {cards.map((card) => (
        <Grid key={card.title} size={{ xs: 12, sm: 6, lg: 4 }}>
          <KPICard
            icon={card.icon}
            title={card.title}
            metric={card.metric}
            trend={card.trend}
            subtitle={card.subtitle}
            accent={card.accent}
            trendTone={card.trendTone}
          />
        </Grid>
      ))}
    </Grid>
  );
}
