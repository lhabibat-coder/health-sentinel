export interface KPIItem {
  id: number;
  title: string;
  value: number;
  unit?: string;
  change: number;
  trend: "up" | "down";
  status: "good" | "warning" | "danger";
  sparkline: number[];
}

export const kpiData: KPIItem[] = [
  {
    id: 1,
    title: "Claims Today",
    value: 187,
    change: 18,
    trend: "up",
    status: "warning",
    sparkline: [20, 28, 32, 36, 44, 56, 62],
  },
  {
    id: 2,
    title: "Active Alerts",
    value: 12,
    change: 4,
    trend: "up",
    status: "danger",
    sparkline: [2, 3, 5, 7, 8, 10, 12],
  },
  {
    id: 3,
    title: "Risk Score",
    value: 86,
    unit: "%",
    change: 6,
    trend: "up",
    status: "danger",
    sparkline: [70, 73, 74, 78, 81, 84, 86],
  },
  {
    id: 4,
    title: "Narratives",
    value: 24,
    change: 11,
    trend: "up",
    status: "warning",
    sparkline: [10, 11, 13, 15, 18, 21, 24],
  },
  {
    id: 5,
    title: "Confidence",
    value: 94,
    unit: "%",
    change: 2,
    trend: "up",
    status: "good",
    sparkline: [82, 84, 86, 89, 90, 92, 94],
  },
];