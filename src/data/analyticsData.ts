export const analyticsData = {
  threatScore: 82,

  claimsToday: 214,

  alerts: 18,

  // narratives count moved to runtime (use analyticsData.narratives.length)

  sentiments: [
    {
      name: "Positive",
      value: 18,
    },
    {
      name: "Neutral",
      value: 39,
    },
    {
      name: "Negative",
      value: 43,
    },
  ],

  topStates: [
    {
      state: "Kano",
      score: 98,
    },
    {
      state: "Kaduna",
      score: 91,
    },
    {
      state: "Lagos",
      score: 74,
    },
    {
      state: "FCT",
      score: 61,
    },
  ],

  narratives: [
    "Counterfeit Skin-lightening Cream",

    "Lead in Imported Cosmetics",

    "Unsafe Turmeric Products",

    "Cookware Misinformation",
  ],

  trend: [
    { day: "Mon", value: 32 },

    { day: "Tue", value: 48 },

    { day: "Wed", value: 61 },

    { day: "Thu", value: 83 },

    { day: "Fri", value: 70 },

    { day: "Sat", value: 91 },

    { day: "Sun", value: 74 },
  ],
};