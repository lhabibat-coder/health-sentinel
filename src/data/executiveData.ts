export interface ExecutiveProgrammeData {
  programme: string;
  riskScore: number;
  summary: string;
  priorityStates: string[];
  recommendations: string[];
}

export const executiveData: Record<string, ExecutiveProgrammeData> = {
  all: {
    programme: "National Public Health Intelligence",
    riskScore: 64,
    summary:
      "National surveillance indicates multiple public health issues requiring continuous monitoring. Intelligence is being aggregated across all active health programmes.",

    priorityStates: [
      "Kano",
      "Lagos",
      "Kaduna",
      "FCT",
    ],

    recommendations: [
      "Continue national surveillance",
      "Prioritise cross-programme coordination",
      "Strengthen risk communication",
      "Monitor emerging narratives",
    ],
  },

  lead: {
    programme: "Lead Poisoning",
    riskScore: 86,

    summary:
      "Public discourse around lead poisoning remains elevated. Counterfeit cosmetics and contaminated food products continue to dominate discussions. Kano remains the highest-risk state requiring immediate public health communication.",

    priorityStates: [
      "Kano",
      "Kaduna",
      "Lagos",
    ],

    recommendations: [
      "Deploy rapid risk communication",
      "Notify NAFDAC",
      "Increase market surveillance",
      "Engage community influencers",
    ],
  },

  immunization: {
    programme: "Immunization",
    riskScore: 44,

    summary:
      "Vaccination conversations remain generally positive, although misinformation regarding childhood immunization continues to emerge on social media.",

    priorityStates: [
      "Kaduna",
      "Lagos",
      "Kano",
    ],

    recommendations: [
      "Counter vaccine misinformation",
      "Support PHC messaging",
      "Monitor community rumours",
    ],
  },

  maternal: {
    programme: "Maternal Health",
    riskScore: 72,

    summary:
      "Maternal health discussions increasingly focus on skilled birth attendance, antenatal care and emergency obstetric services.",

    priorityStates: [
      "Kano",
      "Jigawa",
      "Kebbi",
    ],

    recommendations: [
      "Strengthen ANC messaging",
      "Support emergency referral systems",
      "Improve community engagement",
    ],
  },

  menopause: {
    programme: "Menopause",
    riskScore: 28,

    summary:
      "Menopause awareness continues to increase nationally with conversations centred on symptoms, hormone therapy and workplace support.",

    priorityStates: [
      "Lagos",
      "FCT",
    ],

    recommendations: [
      "Increase awareness campaigns",
      "Develop workplace guidance",
      "Support healthcare workers",
    ],
  },

  malaria: {
    programme: "Malaria",
    riskScore: 66,

    summary:
      "Malaria remains a significant public health priority with seasonal increases expected in several northern states.",

    priorityStates: [
      "Kano",
      "Niger",
      "Kebbi",
    ],

    recommendations: [
      "Increase mosquito net campaigns",
      "Support seasonal malaria chemoprevention",
      "Strengthen surveillance",
    ],
  },

  "mental-health": {
    programme: "Mental Health",
    riskScore: 39,

    summary:
      "Mental health discussions continue to rise, with increasing focus on youth wellbeing and workplace stress.",

    priorityStates: [
      "Lagos",
      "FCT",
    ],

    recommendations: [
      "Support awareness campaigns",
      "Engage youth organisations",
      "Expand counselling access",
    ],
  },

  nutrition: {
    programme: "Nutrition",
    riskScore: 51,

    summary:
      "Nutrition intelligence highlights increasing conversations around food affordability, child nutrition and food safety.",

    priorityStates: [
      "Kano",
      "Borno",
      "Yobe",
    ],

    recommendations: [
      "Strengthen nutrition messaging",
      "Monitor food safety",
      "Support vulnerable populations",
    ],
  },
};