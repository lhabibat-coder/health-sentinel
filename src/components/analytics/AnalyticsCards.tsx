import { Card, CardContent, Typography } from "@mui/material";
import { analyticsData } from "../../data/analyticsData";

const cards = [
  {
    title: "Threat Score",
    value: analyticsData.threatScore,
  },
  {
    title: "Claims Today",
    value: analyticsData.claimsToday,
  },
  {
    title: "Active Alerts",
    value: analyticsData.alerts,
  },
  {
    title: "Narratives",
    value: analyticsData.narratives.length,
  },
];

export default function AnalyticsCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 16 }}>
      {cards.map((card) => (
        <div key={card.title} style={{ minWidth: 0 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                {card.title}
              </Typography>

              <Typography variant="h4">{card.value}</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}