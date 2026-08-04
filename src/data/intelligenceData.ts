export interface IntelligenceItem {
  id: number;

  programme: string;

  severity: "HIGH" | "MEDIUM" | "LOW";

  state: string;

  topic: string;

  title: string;

  source: string;

  time: string;

  read: boolean;

  pinned: boolean;

  bookmarked: boolean;
}

export const intelligenceFeed: IntelligenceItem[] = [
  {
    id: 1,
    programme: "lead",
    severity: "HIGH",
    state: "Kano",
    topic: "Counterfeit Cosmetics",
    title:
      "Counterfeit skin-lightening cream spreading rapidly",
    source: "Social Listening",
    time: "2 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },

  {
    id: 2,
    programme: "lead",
    severity: "HIGH",
    state: "Kaduna",
    topic: "Food",
    title:
      "Unsafe turmeric products detected in markets",
    source: "Community Report",
    time: "5 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },

  {
    id: 3,
    programme: "immunization",
    severity: "MEDIUM",
    state: "Lagos",
    topic: "Vaccination",
    title:
      "False vaccine infertility claim resurfaces",
    source: "Social Listening",
    time: "9 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },

  {
    id: 4,
    programme: "menopause",
    severity: "LOW",
    state: "FCT",
    topic: "Menopause",
    title:
      "Menopause symptoms widely misunderstood online",
    source: "Facebook",
    time: "14 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },

  {
    id: 5,
    programme: "maternal",
    severity: "HIGH",
    state: "Kano",
    topic: "Maternal Health",
    title:
      "Low antenatal attendance reported in rural communities",
    source: "Field Intelligence",
    time: "17 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },

  {
    id: 6,
    programme: "malaria",
    severity: "MEDIUM",
    state: "Rivers",
    topic: "Malaria",
    title:
      "Spike in mosquito breeding after flooding",
    source: "Environmental Surveillance",
    time: "21 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },

  {
    id: 7,
    programme: "nutrition",
    severity: "LOW",
    state: "Niger",
    topic: "Nutrition",
    title:
      "Increase in online misinformation about child nutrition supplements",
    source: "Media Monitoring",
    time: "26 mins ago",
    read: false,
    pinned: false,
    bookmarked: false,
  },
];