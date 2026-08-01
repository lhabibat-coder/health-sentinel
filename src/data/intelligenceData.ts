export interface IntelligenceItem {
  id: number;
  severity: "HIGH" | "MEDIUM" | "LOW";
  state: string;
  topic: string;
  title: string;
  source: string;
  time: string;
  read: boolean;
  pinned: boolean;
  bookmarked: boolean;
};

export const intelligenceFeed: IntelligenceItem[] = [
  {
    id: 1,
    severity: "HIGH",
    state: "Kano",
    topic: "Cosmetics",
    title: "Counterfeit skin-lightening cream spreading rapidly",
    source: "Social Listening",
    time: "2 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },
  {
    id: 2,
    severity: "HIGH",
    state: "Kaduna",
    topic: "Food",
    title: "Unsafe turmeric products detected in markets",
    source: "Community Report",
    time: "5 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },
  {
    id: 3,
    severity: "MEDIUM",
    state: "Lagos",
    topic: "Cosmetics",
    title: "Lead detected in imported cosmetics",
    source: "NAFDAC",
    time: "10 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },
  {
    id: 4,
    severity: "LOW",
    state: "Abuja",
    topic: "Misinformation",
    title: "Cookware misinformation trending online",
    source: "Social Media",
    time: "18 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },
  {
    id: 5,
    severity: "HIGH",
    state: "Kano",
    topic: "Children",
    title: "Possible exposure among school-age children",
    source: "Field Intelligence",
    time: "22 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },
];