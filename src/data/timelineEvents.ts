export interface TimelineEvent {
  id: number;
  time: string;
  state: string;
  severity: "high" | "medium" | "low";
  title: string;
}

export const initialTimeline: TimelineEvent[] = [
  {
    id: 1,
    time: "14:31",
    state: "Kano",
    severity: "high",
    title: "Counterfeit cosmetics discussion surging",
  },
  {
    id: 2,
    time: "14:28",
    state: "Lagos",
    severity: "medium",
    title: "Increase in vaccine misinformation",
  },
  {
    id: 3,
    time: "14:24",
    state: "Kaduna",
    severity: "high",
    title: "Food contamination reports detected",
  },
  {
    id: 4,
    time: "14:20",
    state: "FCT",
    severity: "low",
    title: "Rumour successfully corrected",
  },
];