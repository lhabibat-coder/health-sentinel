import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import { intelligenceFeed } from "../data/intelligenceData";
import type { IntelligenceItem } from "../data/intelligenceData";
import { dashboardData } from "../data/dashboardData";
import { analyticsData } from "../data/analyticsData";
import { stateRiskData } from "../data/stateRiskData";
import type { StateRisk } from "../data/stateRiskData";

type IntelligenceContextType = {
  alerts: IntelligenceItem[];

  // Dashboard summary values
  threatLevel: string;
  claimsToday: number;
  activeAlerts: number;
  narratives: number; // count
  narrativesList: string[];

  search: string;
  setSearch: (value: string) => void;

  severity: string;
  setSeverity: (value: string) => void;

  stateFilter: string;
  setStateFilter: (value: string) => void;

  topic: string;
  setTopic: (value: string) => void;

  filteredAlerts: IntelligenceItem[];

  // State risks for map
  stateRisks: StateRisk[];

  // UI helpers
  showToast: boolean;

  toggleBookmark: (id: number) => void;

  togglePin: (id: number) => void;

  markAsRead: (id: number) => void;

  simulateNewIntelligence: () => void;
};

const IntelligenceContext = createContext<IntelligenceContextType>(
  {} as IntelligenceContextType
);

export function IntelligenceProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<IntelligenceItem[]>(intelligenceFeed);

  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [topic, setTopic] = useState("");
  const [showToast, setShowToast] = useState(false);

  function toggleBookmark(id: number) {
    setAlerts((previous) =>
      previous.map((alert) =>
        alert.id === id ? { ...alert, bookmarked: !alert.bookmarked } : alert
      )
    );
  }

  function togglePin(id: number) {
    setAlerts((previous) =>
      previous.map((alert) =>
        alert.id === id ? { ...alert, pinned: !alert.pinned } : alert
      )
    );
  }

  function markAsRead(id: number) {
    setAlerts((previous) =>
      previous.map((alert) => (alert.id === id ? { ...alert, read: true } : alert))
    );
  }

  function simulateNewIntelligence() {
    const nextId = alerts.length ? Math.max(...alerts.map((a) => a.id)) + 1 : 1;

    const newAlert: IntelligenceItem = {
      id: nextId,
      severity: "MEDIUM",
      state: "Lagos",
      topic: "Surveillance",
      title: "Automated intelligence injection",
      source: "Simulator",
      time: "Just now",
      read: false,
      pinned: false,
      bookmarked: false,
    };

    setAlerts((prev) => [newAlert, ...prev]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  }

  const filteredAlerts = alerts.filter((alert) => {
    const searchMatch =
      alert.title.toLowerCase().includes(search.toLowerCase()) ||
      alert.state.toLowerCase().includes(search.toLowerCase()) ||
      alert.topic.toLowerCase().includes(search.toLowerCase()) ||
      alert.source.toLowerCase().includes(search.toLowerCase());

    const severityMatch = severity === "" || alert.severity === severity;
    const stateMatch = stateFilter === "" || alert.state === stateFilter;
    const topicMatch = topic === "" || alert.topic === topic;

    return searchMatch && severityMatch && stateMatch && topicMatch;
  });

  // derive dashboard/analytics values
  const threatLevel = dashboardData.threatLevel;
  const claimsToday = dashboardData.claimsToday;
  const activeAlerts = dashboardData.activeAlerts;
  const narrativesList = analyticsData.narratives || [];
  const narratives = Array.isArray(narrativesList) ? narrativesList.length : 0;

  const stateRisks: StateRisk[] = stateRiskData;

  return (
    <IntelligenceContext.Provider
      value={{
        alerts,

        threatLevel,
        claimsToday,
        activeAlerts,
        narratives,
        narrativesList,

        search,
        setSearch,

        severity,
        setSeverity,

        stateFilter,
        setStateFilter,

        topic,
        setTopic,

        filteredAlerts,

        stateRisks,

        showToast,

        toggleBookmark,
        togglePin,
        markAsRead,

        simulateNewIntelligence,
      }}
    >
      {children}
    </IntelligenceContext.Provider>
  );
}

export function useIntelligence() {
  return useContext(IntelligenceContext);
}
