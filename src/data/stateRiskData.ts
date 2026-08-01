export type StateRisk = {
  name: string;
  position: [number, number];
  risk: string;
  claims: number;
  alerts: number;
  narratives: number;
  updated: string;
};

export const stateRiskData: StateRisk[] = [
  {
    name: "Kano",
    position: [12.0022, 8.592],
    risk: "MEDIUM",
    claims: 42,
    alerts: 5,
    narratives: 3,
    updated: "10 mins ago",
  },
  {
    name: "Lagos",
    position: [6.5244, 3.3792],
    risk: "LOW",
    claims: 18,
    alerts: 2,
    narratives: 1,
    updated: "25 mins ago",
  },
  {
    name: "Abuja",
    position: [9.0765, 7.3986],
    risk: "LOW",
    claims: 12,
    alerts: 1,
    narratives: 1,
    updated: "45 mins ago",
  },
  {
    name: "Kaduna",
    position: [10.5105, 7.4165],
    risk: "LOW",
    claims: 27,
    alerts: 3,
    narratives: 2,
    updated: "18 mins ago",
  },
];